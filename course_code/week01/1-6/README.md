# Agent LLM Gateway

## 安装与启动

```bash
python3 -m pip install -r requirements.txt
export DEEPSEEK_API_KEY='你的主模型密钥'
export DEEPSEEK_BACKUP_API_KEY='你的备用模型密钥'
uvicorn gateway:app --reload --port 8000
```

主模型和备用模型的实际模型名、Base URL 可通过 `PRIMARY_PROVIDER_MODEL`、`PRIMARY_BASE_URL`、`BACKUP_PROVIDER_MODEL`、`BACKUP_BASE_URL` 配置。密钥只由 Gateway 进程读取；调用 Gateway 的 Agent 不需要保存供应商密钥。

## 非流式调用

```bash
curl http://127.0.0.1:8000/v1/llm \
  -H 'content-type: application/json' \
  -d '{"model":"general-primary","messages":[{"role":"user","content":"解释什么是 LLM Gateway"}]}'
```

## Structured Output

```bash
curl http://127.0.0.1:8000/v1/llm \
  -H 'content-type: application/json' \
  -d '{"model":"general-primary","messages":[{"role":"user","content":"返回一个答案"}],"response_schema":{"type":"object","properties":{"answer":{"type":"string"}},"required":["answer"],"additionalProperties":false}}'
```

## Streaming

```bash
curl -N http://127.0.0.1:8000/v1/llm/stream \
  -H 'content-type: application/json' \
  -d '{"model":"general-primary","messages":[{"role":"user","content":"用一句话解释流式输出"}]}'
```

SSE 事件为 `content.delta`、`response.completed` 或 `response.failed`。流开始后不切换备用模型，避免重复或断裂文本。

## Prompt 模板

请求可附带 `prompt`，由 Gateway 追加受版本控制的系统消息，调用方不能上传模板正文：

```json
{
  "name": "knowledge_decision",
  "version": "v1",
  "variables": {"product_name": "差旅助手"}
}
```

调用审计记录在 `GET /v1/traces`，默认仅保留 Token、成本、耗时、模型、模板版本、尝试次数和状态，不保存 Prompt 或模型回答。


curl http://127.0.0.1:8000/v1/traces

## 架构图

只画数据主链路，Gateway 内部三层自上而下：

```mermaid
flowchart LR
    subgraph GW["LLM Gateway（FastAPI 进程）"]
        direction TB
        A["HTTP 入口<br/>/v1/llm · /v1/llm/stream · /v1/traces"]
        B["核心编排<br/>模型校验 · Prompt 模板 · Fallback/Retry · 成本审计"]
        C["Provider 适配<br/>密钥托管 · OpenAI Compatible 协议"]
        A --> B --> C
    end

    CALLER["业务 Agent / Web 端<br/>（无需供应商密钥）"]
    M1["主模型<br/>general-primary"]
    M2["备用模型<br/>general-backup"]

    CALLER -->|"统一请求协议"| A
    A -->|"SSE 事件流（仅 stream 端点）"| CALLER
    C -->|"首选"| M1
    C -.->|"失败时切换"| M2
```

## 核心流程：思维导图

Streaming 请求的完整决策分支，一图总览：

```mermaid
mindmap
  root((Streaming 请求))
    前置校验
      禁止 stream + response_schema 组合
      模型白名单与能力校验
      Prompt 模板渲染注入
    尝试主模型
      逐块转发 content.delta
      收到首个 delta 后 emitted = true
    失败处理
      首块前失败 emitted = false
        可切换备用模型
        重开整条流，最多各试 2 次
      首块后失败 emitted = true
        不切模型，避免文本重复或断裂
        下发 response.failed
    收尾
      记录审计 trace（Token / 成本 / 耗时 / 状态）
      正常结束下发 response.completed
```

## 核心流程：时序图

```mermaid
sequenceDiagram
    participant C as 调用方 Agent
    participant E as /v1/llm/stream 入口
    participant S as stream_with_fallback
    participant P as OpenAICompatibleProvider
    participant U as 主模型 (general-primary)
    participant B as 备用模型 (general-backup)
    participant W as Web 端 (SSE 订阅)

    C->>E: POST {model, messages, prompt?}
    E->>E: 前置校验: 禁止 response_schema<br/>validate_model / build_messages
    Note over E: 状态码发出前完成校验,<br/>失败可直接返回 4xx
    E->>S: StreamingResponse(text/event-stream)

    rect rgb(232, 245, 233)
        Note over S,U: 尝试主模型
        S->>P: stream(config, messages)
        P->>U: chat.completions.create(stream=true)
        U-->>P: HTTP chunk (SSE)
        P-->>S: 增量 delta (过滤空 chunk)
        S-->>W: data: {"type":"content.delta"}
        Note over S: emitted = true
        U-->>P: ...更多 chunk
        P-->>S: delta
        S-->>W: data: {"type":"content.delta"}
    end

    S->>S: record_trace(success)
    S-->>W: data: {"type":"response.completed","model":...}

    rect rgb(255, 243, 224)
        Note over S,B: 失败路径 A: 首块前失败 (emitted=false)
        S->>P: stream(backup config)
        P->>B: 切换备用模型, 重开整条流
        B-->>W: 经 Gateway 转发 delta
    end

    rect rgb(255, 235, 238)
        Note over S,W: 失败路径 B: 首块后失败 (emitted=true)
        Note over S: 不切模型, 避免文本重复/断裂
        S-->>W: data: {"type":"response.failed"}
        S->>S: record_trace(failed, upstream_stream_failed)
    end
```