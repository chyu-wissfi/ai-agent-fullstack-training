# AI Agent 全栈训练营 Week01 Resources

## Knowledge

### 课程原始材料（最高优先级，验收标准的出处）

- [第一章 学习笔记.md](./course_code/week01/第一章 学习笔记/第一章 学习笔记.md)（仓库内，9418 行）
  每节学习目标与四级验收标准（能解释/能补全/能审查/能迁移）的唯一出处。行号定位：
  - 1.1 Agent 全景与首个 Loop：行 3–2326（五能力阶段在行 354–888，最小 Loop 五检查点在行 1595–1730）
  - 1.2 模型 API 到可控输入输出：行 2327–2808（六个学习目标在行 2345）
  - 1.3 Streaming：行 2809–3609
  - 1.4 Prompt Engineering：行 3610–4822
  - 1.5 Structured Output：行 4823–5964
  - 1.6 LLM Gateway：行 5965–7038
  - 1.7 可部署可治理的 Gateway：行 7039–9418
- [Week01 小节索引 README](./course_code/week01/README.md)
  七个小节的主题与内容速览，反查代码目录用。
- 课程代码：`course_code/week01/1-1/` 到 `1-7/`，各自独立可运行
  测验暴露薄弱点后，按小节目录回读对应代码验证（如 1-1 的 `agent_loop_demo.py`、1-2 的 `modelAdapter.py`）。

### 官方文档（解释类知识点的权威出处）

- [OpenAI API Reference](https://platform.openai.com/docs/api-reference)
  Chat Completions 与 Responses 的字段、停止原因、错误码语义。用于：1-2/1-6/1-7 的 API 细节核对。
- [Pydantic Documentation](https://docs.pydantic.dev/)
  JSON Schema、Field、model_validator、校验错误结构。用于：1-5 结构化输出三层校验。
- [MDN: Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
  SSE 帧格式、Content-Type、断线重连。用于：1-3 流式协议。
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
  依赖注入、StreamingResponse、中间件。用于：1-6/1-7 网关服务。

## Wisdom (Communities)

- OpenViking 团队同事与导师
  用户日常工作即在 Agent 平台团队，课程概念（Adapter、Gateway、Loop）可直接在团队 code review 与技术讨论中检验理解。
- 课程讲师/训练营同学群
  课程自带的学习社区（如存在），用于：课程验收标准歧义、作业对错争议。

## Gaps

- 尚无可信的「Agent 工程面经/面试题」类资源，若用户后续需要求职向检验再补充。
- OpenViking 内部架构文档不在本仓库，工作对应点仅凭用户口述与既有记忆，讲解时需用户确认。
