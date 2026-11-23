# 教学工作笔记

## 用户画像与起点

- 2026 届校招新人，方向 AI Agent 平台研发，在 OpenViking 项目做 benchmark/retrieval（对比 VikingDB 与 local 后端）
- 课程完整看过一遍，部分笔记粗读，部分代码跑过——处于「有印象未巩固」阶段，适合检索式测验
- 用户曾在 1-6 发现并修正课程材料「分层策略生效路径」描述不准确（完整调用链追踪+实测），说明对 1-6 代码有深度接触
- 解释 OpenViking 相关概念时先补背景，不假设其了解内部约定；给建议附带理由

## 教学偏好（2026-08-26 确认）

- **测验驱动**：每课先检索式测验暴露薄弱点，再针对性讲解，最后按四级标准验收
- **合并主题课**：七个小节合并为 4 个主题课，不按小节逐节讲
- **课程路径为主**：OpenViking 架构对应点在自然出现时顺带提，不喧宾夺主
- 语言：中文
- 答案选项要等长，不能通过格式/长度泄露答案
- **突出 why**（2026-08-29 反馈）：讲解和制课时多提炼「为什么这么设计」，不能只讲是什么/怎么做；why 的来源必须是课程笔记、代码或用户确认过的事实，拿不准的不编造，宁可标注「笔记未给理由」
- **多讲 why + 多画图 + 讲取舍**（2026-10-31 反馈）：之后的教学除了「怎么做」，每节都要讲清「为什么这么做更好、不这样会出什么事故」；谈 why 时必须讲设计取舍——替代方案是什么、各自代价与收益、为什么当前方案在当前约束下更合适（很多架构设计本质是取舍）。why 仍须有笔记/代码/材料依据，拿不准标注「材料未给理由」。教程中多用图（时序图、状态机、流程图、结构解剖图、决策树），统一用内联 SVG（可打印、可缩放），样式放 `assets/course.css` 的「图示组件」；每课至少 3 张图，关键不变量优先用图表达
- **就业面试导向**（2026-09-18 用户明确）：课程最终以就业面试、提升技术为导向。精讲增加「面试怎么问」视角（面试官追问链、2 分钟主链复述），测验概念与面试原理级问答对齐
- **版式要求**（2026-09-27 反馈）：第三部分练习清单不用表格（表格压缩后单行太短），改用有序/无序列表；「怎么做」必须给完整 bash 启动命令与配置（依赖安装、env 变量名与默认值、是否需要 API key、是否需手动启动 Server）。精讲在合适位置配思维导图（ASCII 树状 `<pre>`），可直接引用笔记中的链路原文。0007 已按此修订
- **素材来源**：`course_materials/weekNN/*.pdf` 是老师讲课用的 PDF，生成课程时可参考（2026-09-27 用户提供）
- **版式调整（2026-10-11 用户明确，Week03 起生效）**：不再以测验为主，改为「问题与知识讲解五五开」——先讲后测：第一部分精讲建地图（含 why 与面试视角），第二部分测验检验（约 16 题，前 2 题留作 Week02 间隔重测），第三部分第二层实验。Week02 的 0009 分数未报，用户直接进入第三章，视 Week02 结课；Week02 薄弱点用后续课程前 2 题间隔重测兜底
- **小节目录与简述题（2026-11-01 用户明确，0013 起生效）**：每课开头必须有**本课内部的简单小节目录**（锚点链接到精讲各小节、测验、实验），用户明确不需要 `lessons/index.html` 课程总目录。18 题默认从 16 选择 + 2 回忆改为 **14 选择 + 4 简述**；简述题优先来自学习笔记中需要讲清设计取舍、核心链路，或面试时应能脱稿复述的内容，参考答案列关键得分点供严格自评
- **题量缩减、简述为主（2026-11-22 用户明确，0018 起生效）**：总题数定为 **10 道 = 4 选择 + 6 简述**，简述/论述占多数，突出核心思路与关键点，不靠选择题堆覆盖面。间隔重测仍保留（前 1–2 道选择题换形式重测上一课核心不变量，其余选择题考本课核心判断）；简述题仍按关键得分点严格自评。0017 及以前已生成的课保持原 18 题不动
- **Week03 材料（2026-10-17 用户更新，覆盖 10-11 记录）**：学生版学习笔记已出现——`course_code/week03/第三章-学习笔记.md`（4166 行，覆盖全部小节），是 Week03 第一材料，**术语以笔记为准**（例：PDF p6 的「四层」在笔记里扩成「五个对象」，多了 Harness）；教师 PDF（`course_materials/week03/*.pdf`，pypdf 抽取）作补充。`course_code/week03/README.md` 有各小节主题与目录说明，也是很好的总览材料。**Week03 共 7 个小节**（3-1 至 3-7，比 10-11 规划时多出 3-6 LangGraph、3-7 项目三）。用户另提供 `course_code/week03/3-5/3.5 PPT .md`（3-5 教师 PPT 的 md 版，未跟踪），0014 生成时优先用它
- **笔记末尾三块，规划不可遗漏（2026-10-17 用户提醒）**：①「本章总结」——主线压缩 + 六条判断（Loop 成立条件 / Planning 核心 / Checkpoint 核心 / Sandbox 目标 / Harness 核心 / LangGraph 价值），0016 结课课以此为主线材料；②「本章复习问题」——20 题带参考答案，按小节分布（Q1–2→3-1、Q3–4→3-2、Q5–7→3-3、Q8–10→3-4、Q11–12/18–19→3-5/3-7、Q13–15→3-6、Q16–17/20→3-7），是现成的间隔复习题库：每课测验酌情选 1–2 道已学小节的复习题（换形式：选择题或回忆题），0016 结课课集中复测；③「附录：源码与工程阅读路线」——pi agent-loop/agent、planning_agent_demo、project3/v2、release_pipeline demos 的阅读清单 + 六步阅读顺序（进入→决策→校验授权→回写→停止恢复→失败场景验证），各课「回读指引」引用对应条目，0016 用完整路线做工程复盘
- Week01 收尾状态：主题课 4 通过情况以补课 0005 测验为准（用户未报分数，默认已按补课继续；后续如发现 Week01 概念漂移用间隔重测兜底，不阻塞 Week02）

## 主题课规划

| 课 | 覆盖小节 | 主题 | 状态 |
| --- | --- | --- | --- |
| 0001 | 1-1 + 1-2 | 从 LLM 到 Agent：模型调用与 Agent Loop | 2026-08-28 完成 |
| 0002 | 1-3 + 1-5 | 输出侧工程：Streaming 与 Structured Output | 2026-08-28 完成（分数未报） |
| 0003 | 1-4 | Prompt Engineering：行为契约与安全边界 | 2026-08-29 完成，83%（15/18），未过 85% 线；薄弱点：流式三概念（连续两课错）、三阶段、模板四判断 |
| 0004 | 1-6 + 1-7 | LLM Gateway：从统一入口到生产部署 | 2026-08-29 生成；前 3 题为 0003 三个薄弱点的间隔重测；通过即 Week01 结业，下一站 Week02 2-1 |
| 0005 | 主题课 4 补课 | trace_id 画面 + 有证明力的断言（Q13/Q19 专项） | 2026-08-29 生成；先讲画面后测验（用户缺画面不缺检索）；补课测验通过即视为两个薄弱点消除 |
| 0006 | Week02 2-1 + 2-2 | Function Calling 与 Tool Runtime：从提出动作到受控执行 | 2026-09-26 完成，81%（17/21）；5 个薄弱点见下节 |
| 0007 | Week02 2-3 | MCP：外部能力标准化接入 | 2026-09-27 完成，90%（18/20），前 5 题重测全对、MCP 部分 86%（13/15）过线；两个薄弱点见下节；当日已按新版式修订（练习改列表+bash 命令、精讲配思维导图） |
| 0008 | Week02 2-4 | 工具治理与安全边界 | 2026-09-27 完成，90%（18/20），前 2 题重测全对、正题 89%（16/18）过线；三个薄弱点见下节，0009 前 3 题换形式重测；实验与 2 分钟复述待完成 |
| 0009 | Week02 2-5 | 阶段二项目：Agent 工具调用基础设施 | 2026-09-27 生成；分数未报，用户 2026-10-11 直接进入第三章，视 Week02 结课；遗留薄弱点由 0010 前 2 题间隔重测兜底 |
| 0010 | Week03 3-1 | 从 Runtime 到 Agent Loop：Tool Result 回写与停止控制 | 2026-10-11 生成（首个五五开新版式课）；**2026-10-17 已按新学生笔记修订**：四层→五个对象（补 Harness）、新增 LoopEngine 管五件事、steering vs follow-up、prepare/finalize Hook 与批次终止规则、停止原因三类（完成/等待用户/主动停止）、死循环六信号（含 A/B 振荡）、章地图扩到 7 节、测验 16→18 题；前 2 题为 Week02 间隔重测（治理不分叉代码审查、治理链归属）；**2026-10-17 测验完成 78%（14/18），4 个薄弱点已讲解（见 0010 测后反馈），隔 1-2 天重测** |
| 0011 | Week03 3-2 | Planning 与任务拆解 | 2026-10-17 生成；**2026-10-31 按新偏好重写**：6 张 SVG 图（决策树/组件分工/PlanStep+Evidence/DAG/原子修订/模式切换与历史）、why 含设计取舍、新增第 10 节（plan 模式切换只 diff tools section、历史不动、compaction 才出 context）与实验⑥、20 题、修重复标题与选项长度；前 4 题仍为 0010 薄弱点重测 |
| 0012 | Week03 3-3 | State Machine 与 Checkpoint | 2026-10-31 生成；前 3 题为间隔重测（2 道 0011 核心不变量 + 1 道 0010 停止原因）；18 题；7 张 SVG 图；实验①–⑤离线可跑；**2026-10-31 测验 83%（15/18）**，3 个薄弱点已讲解（停止原因不可覆盖、恢复五步、Q18 不重放证据），隔 1-2 天重测；已加目录 |
| 0013 | Week03 3-4 | Sandbox 与执行边界 | 2026-11-01 生成；首课完整套用「本课目录 + 14 选择 + 4 简述」；前 3 题重测 0012 三个薄弱点；6 张 SVG 图；简述题按关键得分点严格自评；实验①②为 pi-sandbox 本地边界与 denyWrite 优先级，③④为 OpenSandbox 闭环与失败清理，均需先写预期再跑改造 |
| 0014 | Week03 3-5 | Agent Harness：把一次代码修改做完整 | 2026-11-02 生成并按真实作业优化；材料以 `3.5 PPT .md` 为主、笔记 3.5 对照；前 3 题重测 0013 核心不变量；18 题 = 14 选择 + 4 简述（场景/代码审查为主）；8 张 SVG 图；新增 src 模块地图、run_test 双写时序、smolagents Guarded Harness 迁移案例与实验⑤；明确恢复、Checkpoint、G1 与真实崩溃证明边界 |
| 0015 | Week03 3-6 | LangGraph 与 Agent 编排 | **2026-11-16 生成**；Python 侧（release_pipeline + demos/01–06）；无 DEEPSEEK_API_KEY 自动降级、可离线跑；前 3 题重测 0014 三条核心不变量；7 张 SVG、18 题 = 14 选择 + 4 简述；实验①–⑥含 M/H 跨进程审批、print 证明审批节点重跑、approvals reducer 改覆盖 2 条测试变红；笔记八三个工程坑为重点考点 |
| 0016 | Week03 3-7 | 项目三：Codebase Agent v2 | **2026-11-22 生成**；**Week03 结课课**；材料以笔记 3.7（行 3108–3961）+ 本章总结/复习问题/附录 + project3/README 为主；前 3 题重测 0015 三条不变量，Q4/Q5/Q9/Q10/Q12 换形式取自章复习题（结课集中复测）；18 题 = 14 选择 + 4 简述，选项等长自检通过；7 张 SVG；实验①–⑥全部离线可跑且本机实测；**核对发现笔记 4.3 的 path:42 示例与实现不一致**（上游 Value.Convert 类型折叠），已按「以代码和测试为准」写入精讲与实验⑤ |
| 0017 | Week04 4-1 | Context Engineering：本轮信息的装配、预算与核对 | **2026-11-22 生成**；Week04 第一课；前 3 题重测 0016 三条核心不变量；Q4–Q14 换形式覆盖章复习题 Q1–Q10（4-1 段）；7 张 SVG；实验①–⑥离线可跑且本机实测（4-1/.venv，tokenizers 0.23.3） |
| 0018 | Week04 4-2 | Working Memory：状态符合执行事实的任务记录 | **2026-11-22 生成**；首个 10 题新课型（4 选择 + 6 简述）；Q1–Q2 重测 0017 两条不变量，Q4/Q5 换形式覆盖章复习 Q12/Q11；7 张 SVG；实验①–⑥与笔记五条验收一一对应，全部 heredoc 离线实测 |
| 0019 | Week04 4-3 | Memory 体系与 OKF：跨会话知识的保存、召回与维护 | **2026-11-22 生成**；10 题（4 选择 + 6 简述）；Q1–Q2 重测 0018，Q4/Q5/Q6/Q9 换形式覆盖章复习 Q15/Q13/Q14/Q16+Q17；7 张 SVG；本机无 pi CLI，以 okf/ 快照阅读 + 离线三步（写入/读取/更新）实验为主，全部实测 |
| 0020 | Week04 4-4 | RAG：先找到证据，再检查回答 | **2026-11-22 生成**（0020-rag-pipeline.html）；10 题（4 选择 + 6 简述）；Q1–Q2 重测 0019，Q3–Q10 换形式覆盖章复习 Q18–Q27；8 张 SVG；实验①–⑤全部本机实测（gold 探针/runs 精读/RRF 复算/真实 verify/BM25 探针），MiniMax/BGE 实跑标待验证；笔记与 runs 汇总数字漂移已列清单 |
| 0021 | Week04 4-5 | LLM Wiki：知识资产的来源、更新与权限治理 | **2026-11-22 生成**（0021-llm-wiki.html）；10 题（4 选择 + 6 简述）；Q1–Q2 重测 0020，Q4/Q6/Q7/Q8 换形式覆盖章复习 Q28–Q31；8 张 SVG；纯快照阅读，六实验全部本机实测（diff/哈希/依赖传播/60·30·90/换词检索/权限闸口模拟） |
| 0022 | Week04 4-6 | 项目四：给 Codebase Agent 装上记忆和检索（结课课） | **2026-11-22 生成**（0022-project4-capstone.html）；**Week04 结课课**；10 题（4 选择 + 6 简述）；Q1–Q2 重测 0021，Q4/Q5 换形式覆盖章复习 Q32/Q33；8 张 SVG；结课专属「已实现/已验证/尚未证明」三分清单 + 33 题全量自测分布表；实验①–⑤必做全部本机实测（npm 基线/记忆 CLI 全链路/rag.python 改造/纯检索/基线 diff 与 Trace 归因），⑥真实 Run 无 key 标可选加餐待验证 |
| 0023 | Week05 5-1 | Multi-Agent 与 Subagent：该拆才拆，拆了还要管得住 | **2026-11-22 生成**；Week05 第一课；10 题（4 选择 + 6 简述）；Q1–Q2 重测 0022，Q5–Q10 换形式覆盖章复习 Q1–Q8；8 张 SVG；实验①–⑤全部本机实测（11 条基线/真实 SQLite 冲突探针/依赖与并发/隔离与全局预算/实际取消），⑥真实 pi 无 CLI+无 key 标待验证；官方 pi 示例固定 9c465268 核对，新增 reference/multi-agent-subagent.html 速查卡 |
| 0024 | Week05 5-2 | Subagent 任务委托：九项契约与证据聚合 | **2026-11-23 生成**；10 题（4 选择 + 6 简述）；Q1–Q2 重测 0023，Q5–Q10 换形式覆盖章复习 Q9–Q17；8 张 SVG；实验①–⑤全部本机实测（11+1 基线/错误注入/未知与重复 ID+快照/字面语义与去重+行为探针/chain 与重试账），⑥真实 pi 待验证；新增 reference/subagent-task-contract.html；明确 accepted≠语义通过、needs_review=false 不含语义、incomplete 只有 ID 等实现边界 |

## 0014 生成记录（2026-11-02）

- 0013 分数未报，Q1–Q3 按 0013 三条核心不变量（路径 resolve / denyWrite 优先级 / handler=0）换形式重测，不当作已消除薄弱点。
- 精讲主线按 PPT：Harness 是连接而非新模块 → 一个结果两个消费者 → 正常路径两层检查 → 完成契约只认当前最新事实 → 异常五阶段 → Cancel/Pause/Resume 三种语义 → pi 三个容易接错的位置 → commerce-agents 手写 Harness 解剖 → 验收看程序决定与实际后果。
- 实验设计：① `npm install` + `npm test`/`npm run build` 基线；② `npm run lab:harness` + 手动 pause/resume 读存档；③ 把 `findLast` 改 `find` 验证「每个范围取最新结果」不变量；④ 把 `detached: grouped` 改 `false` 验证取消要停到真实进程组；⑤ 只读 commerce-agents 三个连接点（ToolOutcome / 门禁顺序 / 宿主批准走同一执行器）。
- 简述题 Q15–Q18 对应四条应能脱稿复述的主链：单模块≠系统、曾经通过≠当前验证、三种停止语义、手写 Harness 三连接。
- 本机验证：`npm install` 后 `npm test` 53/53 通过、`npm run build` 通过、`npm run lab:harness` 七条断言全 ✓；仓库 `package-lock.json` 与 `npm ci` 不同步（缺平台可选依赖），课程命令已改为 `npm install` 并加缓存权限兜底说明。

### 0014 作业驱动优化（2026-11-02 追加）

- 用户提供真实作业 `/Users/chyu-wissfi/Projects/smolagents/homework.md`：不重写 `ToolCallingAgent` 核心，新增 `guarded_harness/`。0014 将其作为第三套实现（pi / commerce-agents / smolagents）而非另造泛化练习，新增第 10 节与实验⑤。
- 课程代码侧新增：`src` 与 `fixtures/demo-app` 边界、逐文件事实归属、`ManagedToolResult → modelView/details.evidence → observeToolResult → Completion` 时序图，以及工具结果 / 测试通过 / 计划步骤 / 任务完成四层成功区分。
- 作业精确切点：框架 schema 前置校验 → `Tool.forward → Harness.invoke`；`final_answer_checks` 抛 `AgentError` 进 memory 后续跑；`step_callbacks` 只同步 step_id；`agent.run` 返回后由宿主 `Harness.finish` 独立给出 `RunOutcome`。G1 无自定义审计是前置路径边界，不等于 handler 执行或已有 Harness 审计。
- **以后讲作业不要照抄过强表述**：当前恢复是 Harness 业务状态，不恢复完整 ReAct 会话；逐步 Checkpoint 未自动接线；崩溃用例在 `journal.begin` 后 `os._exit`，未执行真实写 handler；H2/C4 用 `repo_digest`，审批另用目标文件 digest，不能统称为一套摘要同时失效旧证据与旧批准。设计文档与实现不一致时以代码和测试为准。
- 作业 T2 两个真实问题纳入精讲：空计划导致契约不可满足（宿主定义计划、证据推进）与 DeepSeek thinking 拒绝 `tool_choice=required`（`Model.kwargs` 改 auto），用于训练「先找断链，不先改 Prompt」。
- 本机验证：`conda run -n agentloop --cwd /Users/chyu-wissfi/Projects/smolagents ...` 六个文件 **76 passed**；定向命令 `rejected_final_answer` 1 过、`latest_attempt_wins` 1 过、`c2 or c3 or c4` 9 过；作业工作树未被测试改动。

## 0015 生成记录（2026-11-16）

- 0014 分数未报，Q1–Q3 按 0014 三条核心不变量（一个结果两个消费者 / 完成检查只认最新事实 / 恢复先核对现场）换形式重测，不当作已消除薄弱点。
- 精讲主线按笔记 3.6：业务流水线 → 业务概念映射（State/Node/Edge/StateGraph/interrupt/Checkpointer/ToolNode）→ P1 主线 → reducer 三种语义 → P2 条件路由 → P3 ToolNode 并行 → P4 interrupt 与恢复重跑 → P5 修订/灰度双循环与业务预算 → P6 Mermaid/updates/get_state/langgraph dev → 三个实际工程坑 → 何时用 LangGraph → 面试两分钟主链。
- 7 张 SVG：业务对象映射、完整发布图（分支+并行+审批+双循环+终态）、三种 reducer、ToolNode 四路并行、interrupt 恢复时间线、修订/回滚双循环、编排方式决策树。why 均落到取舍：显式图 vs 装配成本、增量 vs reducer 心智负担、三种字段语义、业务预算 vs recursion_limit、sync 节点线程池 vs async 阻塞事件循环、按职责切分 vs 整系统一张图。
- 实验设计：① 顶层 7 条验收 + demo 04/05 各 5 条（逐目录跑，避免同名模块冲突）；② `demo L` 与 `demo canary_fail` 看正常/异常收尾；③ M 级 `submit → status → approve` 跨进程，再接三次 SRE，H 级用 `samples/patch.diff`（含 auth 路径，实测判 H）；④ `approval_m` 开头加 `print`，`submit` 与 `approve` 各打印一次证明节点从头重跑；⑤ `approvals` 的 `add` 改覆盖，实测 2 failed / 5 passed；⑥ Mermaid 导出与 `get_state` 快照只读验收。
- 本机验证（`conda run -n agentloop`，Python 3.12 / LangGraph 1.2.17）：顶层 7 passed；demos 01–06 分别 4/4/4/5/5/5 passed；`demo L` → released、cursor=3、三次 SRE interrupt；`demo canary_fail` → rolled_back、rollback_count=2、cursor=0；M 级 `submit` 停 INT-1，跨进程 `approve` 后停 INT-3-canary_10；`visualize` 产出 `.mmd` 且 PNG ok。
- 两处材料/实现不一致，已在课中标注并要求以代码为准：① README §2 的 `python -m app submit --ticket ...` 与当前 `app.py` 的位置参数不符（实际是 `submit T-M-002 orders-svc 1.4.2 --diff-file ...`）；② demo 的固定 `ticket_id` 复用旧 `checkpoints.sqlite` 会从旧存档续跑，本机实测第二次得到 `canary_cursor=1` 却仍报 `released`，是工程坑 8.2 的现场版；干净重跑需删库或换 `CHECKPOINT_DB`。
- 简述题 Q15–Q18 对应四条应能脱稿复述的主链：interrupt 两次执行时间线与副作用后移、三种 reducer 的字段语义、修订/灰度循环与业务预算、三个工程坑的现象/原因/避免。

## 0016 生成记录（2026-11-22，Week03 结课课）

- 0015 分数未报，Q1–Q3 按 0015 三条核心不变量（interrupt 前无副作用 / thread_id 不是权限 / 业务预算正常收尾）换形式重测；结课课按 2026-10-17 规划集中复测章复习题（Q4/Q5/Q9/Q10/Q12 分别对应复习 Q2/Q19/Q16/Q17/Q18），简述 Q18 要求脱稿复述本章六条判断 + 四类失败案例 + 第一个断开的连接（复习 Q20）。
- 精讲主线：七节能力组装映射 → 两类任务与十件工具 → 按职责切分（pi Loop × LangGraph 审批图）→ 任务差异放配置（gate/via/approvers 正交）→ 两层契约四层检查 → 上下文两笔账 → 审批执行分离与恢复五情况 → 六步执行链 → 状态≠结论的验收 → 已知边界与工程复盘 → 面试两分钟主链 + 复习地图。
- 7 张 SVG：组装映射、架构切分、四层检查漏斗、审批执行分离时序、上下文两笔账、六步执行链、状态×结论两维。why 均落到取舍：为什么不全图/全 Loop、为什么 decide/execute 分离、为什么压缩不请模型、为什么审计存哈希、为什么评估不代人批准。
- **本机验证（全部离线 mock）**：v2 `npm test` 14 文件/121 passed、`npm run check` 零报错；hitl `pytest` 25 passed（project3/.venv，Python 3.12，langgraph 1.2.11/checkpoint-sqlite 3.1.1 按锁定版本）；`cli eval` 三类任务：understand 待审批（9 调用/1 审批）、fix_tests 待审批（1 调用停 run_test 门口）、debt_audit 完成且有账（4 调用/0 审批）；任务一闭环：decide 后文件不存在→execute 创建 1562 字节→重复 execute 回 APPROVAL_NOT_EXECUTABLE；任务二：错误角色 dev-9/developer 批单→APPROVER_ROLE_DENIED 且 agent 同码收口、样本未动；重跑后 tech_lead 批 3 张单→COMPLETED、7/7 全绿、diff 仅 session-policy.ts（+1/-3）；沙箱：tests/** 回 PATH_DENY_WRITE、tests/generated/** 回 confirm（允许例外≠免审批）。验证后样本已复原、审批服务已停。
- **材料与实现不一致（第三课连续出现，已写入精讲 why-box 与实验⑤）**：笔记 4.3 举例 path:42 应回 INVALID_ARGUMENT 且 started:false；实测 pi-ai validateToolArguments 先做 Value.Convert，42 折成 "42" 后 handler 真的执行（ENOENT）。kg_contract.test.ts 明确「类型写错由上游顺手纠正，不再造第二个校验器」（limit:"2" 折成 2 成功）。handler=0 的验收改用折叠不掉的错误：缺 content/limit 超界/多余字段（均实测只有 policy_decision 无 tool_execution）。另：笔记附录写 pi-0.83.0，v2 实际依赖 pi 0.87.1，已在回读指引标注。
- **环境坑（已写入实验①）**：系统 python3 是 3.9，langgraph 1.x 要求 ≥3.10，直接建 venv 会报 No matching distribution；用 agentloop 的 3.12 解释器建 .venv 后按锁定版本安装成功。agentloop 环境本身缺 starlette/uvicorn/httpx，不宜直接混装（pip/conda 混用风险），独立 .venv 更干净。
- 实验设计：① 双侧基线（121+25）+ 样本二红基线 4过3红；② cli eval 读两维报告 + APPROVAL_GATE_OFF 查账；③ 任务一闭环（批准≠执行、一次性领取）；④ 任务二三终端跨进程审批（红线角色 + 3 张单 + 独立复核 7/7）；⑤ 契约探针五发 + 审计证 handler=0 + 沙箱两条线；⑥ 主动改造：空名单→NO_APPROVER_CONFIGURED、删 allow_write_extra→generated 变 PATH_DENY_WRITE。全部先写预期再跑，命令含复原步骤。
- 结课条件四条：测验过线（重测全对 + 本课 ≥85%）、实验①–④ + ⑤/⑥ 至少一项、2 分钟主链 + 六条判断脱稿、章复习 20 题全量自测。四者都过 Week03 结课；下一步与用户确认后再改 MISSION 进 Week04。
- 遗留：样本二 npm install 生成了未跟踪的 package-lock.json（仓库原本未提交）；v2/data/platform.db 与 .eval-runs/ 为运行产物（已 gitignore）；eval 验证报告写在 artifacts/eval_verify.md（未覆盖已提交的 eval_report.*）。

## Week04 材料与节奏（2026-11-22 用户明确进入第四章）

- **第一材料**：`course_code/week04/第四章 学习笔记.md`（2732 行，覆盖 4-1 至 4-6 全部小节），术语以笔记为准；教师 PDF `course_materials/week04/4-1.pdf` 至 `4-6.pdf` 作补充；`course_code/week04/README.md` 有各小节主题与目录说明。
- **六节主线**：4-1 装配本轮输入 → 4-2 准确任务记录 → 4-3 跨会话长期记忆（OKF/pi 插件）→ 4-4 资料检索（LlamaIndex+Milvus Lite+BGE/MiniMax）→ 4-5 知识资产治理（LLM Wiki 快照）→ 4-6 项目四（记忆+RAG 接回 project3/v2 治理链）。贯穿案例仍是登录会话修复 + 退出登录新任务 + 30→60 分钟规则更新实验。
- **笔记末尾三块**：①「本章总结」六条判断（行 2536–2560），0022 结课课主线材料；②「本章复习问题」33 题带参考答案（行 2562–2732），按小节分布：Q1–10→4-1、Q11–12→4-2、Q13–17→4-3、Q18–27→4-4、Q28–31→4-5、Q32–33→4-6；各课测验换形式纳入对应段，0022 集中复测；③本章无「附录阅读路线」（与第三章不同），回读指引以笔记小节+代码文件为准。
- **与用户工作最直接相关的一章**：OpenViking 记忆系统、benchmark/retrieval 对比（VikingDB vs local）对应 4-3/4-4；de-test fact 族输出协议对应 4-2 结构化记录。对应点自然提及。
- **环境口径**：系统 python3 是 3.9.6；conda agentloop 是 3.12.14 但缺 tokenizers/litellm（不宜混装）。4-1 已建独立 `course_code/week04/4-1/.venv`（3.12 + tokenizers 0.23.3）；运行产物（.venv/、artifacts/、codex_deepseek_runs/、litellm_runs/）已写入 `.git/info/exclude`（不改 .gitignore，沿用用户偏好）。本机无 DEEPSEEK_API_KEY，真实模型实验一律标「可选加餐」。

## 0017 生成记录（2026-11-22，Week04 第一课）

- 0016 分数未报，Q1–Q3 按 0016 三条核心不变量（批准≠执行且一次性领取 / 状态≠结论只认审计 / 类型折叠后 handler=0 要用折叠不掉的错误证明）换形式重测，不当作已消除薄弱点。
- 精讲主线按笔记 4.1：三个事故开篇 → Prompt/Context 边界与请求六对象 → 装配三去向 → 先有效性再优先级（分配顺序≠发送顺序）→ 预算公式与两个拒绝 → 两类压缩与 revision → 四类污染与配对四检查 → Debug Report 四位置 → 补读/成本口径/KV 与响应缓存/LiteLLM 边界 → 面试两分钟主链。
- 7 张 SVG：六节信息链路、请求解剖、材料去向决策树、预算分层与两道拒绝门、压缩双路径、配对检查状态机、四位置定位链。why 均落到取舍：长窗口≠适用、必须项优先 vs 最近 N 条、输出预留不可借（fail closed 与 0008 门禁同构）、程序提取 vs 模型摘要、补齐历史≠重放执行（与 0012 恢复同构）、缓存复用≠内容正确。
- **本机验证（全部离线）**：4-1-3/4-1-4 装配报告七选五、旧版通过记录被排除；4-1-5 预算 722、全部装入估算 17183、装配后 222（与笔记一致）、两个拒绝场景均「已拦截」；4-1-6 完整 36506 字符→短 510 字符（笔记约 459，差异来自 output_ref 绝对路径长度，已在课中标注口径）、status=failed/failure_count=1/at_expiry 预期 False 实际 True；4-1-7 --self-test 五项离线验收通过；4-1-8 --check-tools 本地工具验收通过（exit 1→补丁→exit 0）。
- **改造实验实测**：A. 4-1-6 的 `<=` 改 `<`（/tmp 副本验证）→ status=passed、failure_count=0、revision 哈希变化（证据绑定版本的现场）；B. 4-1-5 旧测试 valid=False 改 True（heredoc 不改原文件）→「旧版本全部通过」进入请求、估算 222→236（污染现场）；C. 配对四探针（importlib 加载带横杠模块）：孤立结果→ORPHAN_TOOL_RESULT、批次未齐→INCOMPLETE_TOOL_BATCH、重复 ID→INVALID_TOOL_CALL_ID、未知状态→拒绝补结果；D. compact_test_result 缺字段→KeyError('revision')、max_failures=0→ValueError。
- 简述题 Q15–Q18 对应四条应能脱稿复述的主链：装配三去向与优先级三问、预算公式与必须项超限处理、两类压缩差异与必须保留字段、四位置定位法与报告边界。
- 遗留：4-1/artifacts/ 与 codex_deepseek_runs/ 为验证运行产物（已 exclude，可再生）；4-4 依赖较重（llama-index/pymilvus/fastembed 等），0020 生成时需单独建环境并实测；4-3 的 pi 插件命令本机未装 pi CLI，0019 以 okf/ 快照阅读+流程设计为主。

## 0018 生成记录（2026-11-22，Week04 第二课，首个 10 题课）

- 0017 分数未报，Q1–Q2 按 0017 两条核心不变量（必须项超限拒发/输出预留不可借；有效性检查先于预算——预算拦不住失效证据）换形式重测，不当作已消除薄弱点。
- **新课型首次落地**：10 题 = 4 选择 + 6 简述（2026-11-22 用户确认，0018 起生效）；Q3 三阶段、Q4 换形式覆盖章复习 Q12（isError=False≠业务通过）；简述 Q5–Q10 覆盖六条主链（Q5 覆盖复习 Q11 三层分工与 State/Checkpoint 协作），参考答案列关键得分点。选项等长自检通过（14/14/13/13 字）。
- 精讲主线按笔记 4.2：「继续」事故 → 三层分工 → 三阶段状态依据 → 约束/风险/计划三分与四步链路 → 临时事实五性质与 stale → Scratchpad 接线 → 生命周期与保存/发送分离 → State 边界与 JSONL 演示证明边界 → 面试两分钟主链。7 张 SVG（三层分工、三阶段闸门、约束四步含拒绝回写、证据版本绑定、便签接线、生命周期双轨、JSONL 恢复时序）。why 均落取舍并与前章同构：提示词不是边界↔0008 门禁；stale↔0017 revision；恢复核对现场↔0012 恢复五步；三阶段↔0014/0016 完成契约。
- **本机验证（全部离线，纯标准库，复用 4-1/.venv 的 3.12.14）**：四脚本基线跑通；4-2-3 事实记录只有 summary/code_version/source/reference 四字段，缺 execution_id/status——笔记行 735 明示「简化字典未列全，正式实现要补齐」，按教材口径处理而非材料错误；4-2-6 输出 4 条消息（3 历史+1 装配）、id==toolCallId=test-001、isError=false 但「预期 False 实际 True」。课件五个 heredoc 探针逐一提取重跑全部 exit=0：建议当完成装配器照单全收（执行 ID 全 None）；reversed 取 v2 vs 正序取 v1；stale 标记前后对比；拒绝分支错误版谎报「应用补丁」vs 正确版「补丁被拒绝，代码未修改」。
- **实验与验收一一对应**（笔记行 893–903 五条）：①字段缺口基线、②验收⑤执行≠业务、③验收①建议≠完成、④验收④恢复取最新+核对现场、⑤验收③旧证据不支持新版本、⑥验收②拒绝不回写。全部 heredoc 不改课程原文件，无需复原；实验②产物 /tmp/wm-session-demo.jsonl 留在 /tmp 供观察（不在仓库）。
- 已验证 pi-agent-core `session/types.d.ts` 的 message/custom+customType 分型，4-2-6 演示与 pi 会话存档同构的说法有代码依据（week03 node_modules 可读）。
- 遗留：0019（4-3）本机无 pi CLI，以 okf/ 快照阅读+流程设计为主；4-4 依赖重需单独建环境；0017 的 4-1/.venv 继续复用。

## 0019 生成记录（2026-11-22，Week04 第三课）

- 0018 分数未报，Q1–Q2 按 0018 两条核心不变量（三阶段只认执行证据 / 拒绝必须回写「代码未修改」）换形式重测。Q3 用途二分、Q4 复习 Q15（格式≠事实）；简述 Q5/Q6/Q9 分别覆盖复习 Q13/Q14/Q16+Q17，Q7 生命周期冲突失效、Q8 OKF 元数据边界、Q10 恢复边界与策略取舍。选项等长自检通过（12/11/12/11 字）。
- 精讲主线按笔记 4.3：任务结束后什么值得留 → 用途二分（≠参数更新≠向量库）→ 写入前三问+四性质 → 生命周期四动作+冲突四问+过期/废弃/删除 → OKF 组织与元数据边界 → pi 自动记忆真实路径+新会话三步读取证明 → 恢复四入口 → 四策略取舍与组合方案 → 面试主链。7 张 SVG。why 落取舍并与前章同构：格式≠事实↔0018 执行≠业务；自动记忆看回执↔0016 状态≠结论；恢复四入口↔0012/0018；目录摘要≠全文↔0017 预算。
- **材料与快照口径差（已核对并写入精讲 sidenote）**：笔记 4.1/PDF p8 的「摘要比正文更确定」警示案例是<strong>原稿展示文件</strong>（Python 味 app/session.py、source:session）；仓库 okf/ 快照是 TS login_demo 版（2026-10-07，human:wilson，generated/verified 成对），描述与正文一致。两份不是同一文件：原稿作警示、快照作正面样本。快照亮点：负向事实「无到期规则」附可复现 grep 回执（exit 1）、「token 永久有效」标待验证、HTTP 行为因端口 EPERM 一律待验证、log.md 待验证 7 条。
- **本机验证（全部离线，系统 python3 纯标准库）**：okf 五概念 type:Fact 全必填、okf_version 0.2；login_demo 重跑 expiry grep exit=1（负向事实可复现），token.ts 无时间逻辑、parseAccessToken 无结构校验（as AuthTokenPayload）；新会话读取链探针 10 个 src 文件全存在+符号核对 True；/tmp/okf-mini 写入三文件、更新后三项检查全 True。课件三个 heredoc 探针提取重跑全 exit=0。
- **实验⑤发现真实坑（已写入课件）**：第一版只改正文不改 YAML description，「旧入口只在历史」检查失败——摘要仍传播旧入口。修正为描述同步更新后通过；正是笔记「摘要比正文更确定」的现场，更新要连描述一起改。
- 实验与验收对应：①快照元数据+原稿对照、②负向事实复核、③新会话读取链（验收②）、④/tmp 写入持久记录（验收①）、⑤制造变化更新原记录（验收③）、⑥筛选分类+冲突四问纸面设计。pi 插件命令作流程理解不要求本机执行；六件工具只用笔记明确给出的 okf_search/okf_remember/okf_read。
- 遗留：/tmp/okf-mini 与 /tmp/wm-session-demo.jsonl 为练习产物（/tmp 不在仓库）；0020（4-4 RAG）依赖重（llama-index/pymilvus/fastembed），需单独建环境实测；章复习 Q13–Q17 已覆盖，剩 Q18–Q33 待 0020–0022。

## 0020 生成记录（2026-11-22，Week04 第四课）

- 0019 分数未报，Q1–Q2 按 0019 两条核心不变量（格式通过≠事实正确 / 外部读入看回执）换形式兜底重测。Q3–Q10 换形式覆盖章复习 Q18–Q27（Q18/Q19→Q5、Q20/Q21→Q6、Q22→Q3、Q23→Q7、Q24→Q4、Q25→Q8、Q26→Q9、Q27→Q10，合并出题参照 0019 先例）。选项等长自检通过（13/13/12/13 字），答案打散 A/D/C/B。
- 精讲主线按笔记 4.4：为什么还要 RAG → 两阶段链路 → 最小闭环三独立问题 → 数据准备五工序 → 检索层次/RRF/查询处理 → 后处理四象限/引用三层 → 固定题集评估/归因六步 → 面试主链。8 张 SVG。why 落取舍并与前课同构：装配预算↔0017；工作记忆 vs 检索证据↔0018；每层「通过」只证明那一层↔0019；归因找第一个断点↔第三章 Trace。
- **本机验证（五实验全部实测）**：①gold 对照探针——corpus 12 文件、8 题 gold 存在/标题命中全 True，仅 q6 required「1800」字面缺失（源码是 30 * 60 需推导）；②runs/ 精读九条命令（step1/step3/step3b/step4/step5 输出核对）；③RRF 纯标准库复算——等权 k=60 top1=B、70/30 加权翻转为 A；④直接 import 真实 rag.answer.verify 五案例，改造（预期先写后验）补源码证据后「1800 秒」仍判无依据——字面检查不做算术推导；⑤4-4/.venv（agentloop 3.12 建）BM25 探针 30 节点：q6 top1=config.py gold 第 2、术语扩展后 gold 进第 2 top1 仍 FAQ，与笔记「第一名不变、看全部候选」同构。MiniMax/BGE 实跑无 key/无缓存标待验证。
- **口径漂移清单（本课最大口径发现，已写入精讲 sidenote + 回读指引）**：笔记与 runs/ 快照不是同一次运行——逐题检索数字一致，但汇总漂移：无依据实体笔记 A4/B1/C3 vs runs A3/B2/C3、V0 笔记 4/8 vs runs 5/8、V2 笔记 5/8 vs runs 6/8、V3 笔记 2308/约 27% vs runs 1699/约 22%、CE 耗时笔记 137.10s vs runs 96.73s。课件要求「引用数字注明哪次运行」。另：milvus_login_demo.db 是目录不是文件、rag44 真实 Embedding/生成未联调、本节演示用 MiniMax+BGE 不是 DeepSeek，三处口径差均已标注。
- 遗留：4-4/.venv（jieba+rank_bm25，可再生）已登记 .git/info/exclude；章复习覆盖进度更新至 **Q1–Q27 已纳入**，剩 Q28–Q33 待 0021/0022。

## 0021 生成记录（2026-11-22，Week04 第五课）

- 0020 分数未报，Q1–Q2 按 0020 两条核心不变量（重排补不回候选外证据 / Citation 三层检查——字面一致≠结论支持）换形式兜底重测（复习 Q24/Q25 换形式）。Q4/Q6/Q7/Q8 换形式覆盖章复习 Q28/Q29/Q30/Q31。选项等长自检通过，答案打散 0/2/3/2。
- 精讲主线按笔记 4.5：分工定位 → 最小结构 → 知识页三问 → 生成发布分离 → 来源追踪与更新传播 → 60/30/90 三种地位 → 权限五环节 → 四维验收 → 面试主链+五条追问。8 张 SVG。why 落取舍并与前课同构：0019 三问/冲突四问、0018 三阶段、0017/第三章 Harness「模型建议、程序把关」、0020 换 Embedding 重建向量。
- **本机验证（六实验全部实测，纯快照阅读，系统 python3 纯标准库）**：①diff -rq 两快照 28 vs 35 文件、来源 12→14；②hashlib 核对 14/14 来源哈希、发布副本与草稿逐字节相等；③依赖传播预期先写后验——直接受影响 3 页+反向传播不动点全集 5 页与手推一致；④60/30/90 八条语句逐条定位全 ✓、wiki 全目录「90 分钟」0 命中；⑤逐字问法 3 处命中、换词「会话过期」等 0 处——可检索性「部分通过」亲手复现；⑥/tmp/wiki-access-lab 权限闸口模拟 alice True/carol False、撤权后 0/5、绕过 open() 仍可读——access_policy 字段不是鉴权。
- **实测坑（已写进课件作教学点）**：pages.json 页条目字段是 path 而 dependencies.json 才是 publish_path；词表计数含 index/log 才与 acceptance 一致（统计前先声明范围）；demo5 实测 28 文件与任务口径 31 不符（以实测为准）；corpus.zip 登记了 sha256 但不在仓库；实验⑥审计实测 2 条；macOS 自带 bash 3.2 中文 echo 需 export LC_ALL=C 规避。
- 遗留：/tmp/wiki-access-lab 为练习产物；章复习覆盖进度更新至 **Q1–Q31 已纳入**，剩 Q32–Q33 待 0022；0022 环境需求四条已抽查证实（v2 需 npm install、rag 需建 venv、platform.yaml L84 python 默认不可用需改造、login-flow.md type 字段 YAML 破损可作缺陷现场）。

## 0022 生成记录（2026-11-22，Week04 第六课，结课课）

- 0021 分数未报，Q1–Q2 按 0021 两条核心不变量（生成与发布分开·提交前复核停止覆盖 / 60 规则·30 源码·90 建议三种地位不混写）换形式兜底重测。Q3 证明边界（自测问题 2）、Q4 换形式覆盖复习 Q32、Q5 换形式覆盖复习 Q33、Q6–Q9 覆盖五目标七反例/冲突四来源/六处修改/工程师 AI 分工、Q10 脱稿复述本章六条判断+登录任务组装+五件核对。选项等长（12/12/12/12 字）、答案打散 C/B/D/A。
- 精讲主线按笔记 4.6：五件事目标 → 六处修改 → 两件工具走 Runtime（治理链不分叉）→ RAG 独立后端与 rag_query 契约 → 先写入再新进程召回 → 冲突四来源 → 五目标×七反例+分工 → **结课闭环（前五课主链组装+三分清单）** → 面试主链。8 张 SVG。**结课专属**：已实现（代码存在）/已验证（本机回执）/尚未证明（诚实标注）三栏不混写；回读指引含 **33 题全量自测分布表**（Q1–10→0017、Q11–12→0018、Q13–17→0019、Q18–27→0020、Q28–31→0021、Q32–33→0022，答案区行 2632–2731），错题回对应主题课。
- **本机验证（实验①–⑤必做全部实测，⑥可选加餐待验证）**：①npm test 15 文件 126 passed（kg_memory 5 it）、check 零报错；②/tmp 副本 bundle+platform.exp.yaml：remember→APPROVAL_REQUIRED（审批前无文件）→decide→execute 落盘+index/log 同步→新进程 recall 命中→audit 双事件（total_chars=119、full_sha256=8637e5cd…），真实 bundle git status 干净；③原配置 rag_query deny·RAG_BAD_OUTPUT（ModuleNotFoundError）→sed 改副本指向 venv 后 OK·5 条证据（906ms/复核 1501ms 双标），无 key LLM 优雅降级引用完整；④rag/.venv（agentloop 3.12.14）+bm25/hybrid --no-llm 跑通（BGE 首跑下载成功无需降级），hybrid top1=session-rules gold 命中，storage 36 向量 512 维/docstore 36/bm25_nodes 36；⑤A 样本二基线重建 4 pass 3 fail→毫秒级修复→7/7、diff 仅 session-policy.ts +1/-3；⑤B eval mock 三任务两维报告（16212/2109/11582 Token），账本在 .eval-runs/*/eval.db 独立库，**id 是 UUID 文本按 created_at 排序才是时间序**，第一条非成功事件=write_file 审批闸口（正常拦截非断链）。⑥真实 Run 无 DEEPSEEK/MINIMAX key 未执行。
- **口径差七条（已写入课件回读指引）**：①project4/README 标题仍写 project3、L22 命令路径错误（实际 project4/v2，笔记行 2427 同口径）；②两份提示词 md 在 project4/ 内（week04 README L45 列法易误导）；③login-flow.md `type: |-` 块标量解析合法但值含换行，index 分裂两组、log 破损 Update——0019「格式≠事实」现成缺陷现场，实验用新 id+副本未修复未污染；④rag/requirements openai==3.24.0 与 llama-index-llms-openai 0.7.10 冲突 ResolutionImpossible，/tmp 放宽清单实装 2.54.0 不改原文件；⑤`python: python` 实测解析到 conda base 3.14.7（不是不存在），失败形态是 RAG_BAD_OUTPUT 非 ENOENT；⑥eval 原稿数字（11999/1424/8057）与教师机路径是那次运行的证据，本机数字单独标注；⑦4-6 storage 是 SimpleVectorStore JSON+pkl 不是 4-4 Milvus Lite，两节存储口径不混。
- **章复习覆盖进度：Q1–Q33 全部纳入，Week04 六课（0017–0022）全部生成完毕**。结课通过条件四条：重测全对+正题 85%、必做实验①–⑤（⑤A/B 至少一项）、不看稿 2 分钟主链、33 题全量自测。Week05 衔接建议已写入课件（MISSION 追加 Week05 目标口径/环境复用/单 Run 验收→分布级验收），**是否更新 MISSION.md 由用户决定，本课未改动**。
- 遗留：实验产物 rag/.venv、v2/node_modules、v2/config/platform.exp.yaml、v2/data、project4/.eval-runs 已登记 .git/info/exclude（不改 .gitignore）；/tmp/okf-exp-0022、/tmp/bugfix-lab-0022、/tmp/eval-0022 为练习产物；0017/0018 footer 中 0018/0019 的「待生成」属历史遗留（本次只收口 0020/0021/0022 三处字样），0020/0021 footer 的「即将生成/暂不可达」占位字样已于同日收口清理，两课 footer 六课链接全部生效。

## Week05 材料与节奏（2026-11-22 用户明确进入第五章）

- **第一材料**：`course_code/week05/第五章 学习笔记.md`（覆盖 5-1 至 5-5），术语与验收以笔记为准；教师 PDF `course_materials/week05/5-1.pdf` 至 `5-5.pdf` 与 `course_code/week05/5-ppt/` 的 Markdown PPT 作补充；`course_code/week05/README.md` 为目录总览。
- **五节主线**：5-1 判断是否分工及运行边界 → 5-2 九项委托契约与结果聚合 → 5-3 Skill 复用与渐进披露 → 5-4 标准对齐、分层评测与版本比较 → 5-5 Skills + 多 Agent 开发 Eval Web 平台。对应主题课 0023–0027，5-5 为结课课。
- **笔记末尾三块**：①本章总结五条判断（行 2321–2331）；②本章复习 **56 题**（行 2347 起），5-1 为 Q1–Q8（题干行 2349–2365、答案行 2479–2511）；③附录一按问题选源码入口、附录二内容覆盖索引。各课换形式纳入对应复习题，0027 集中收口。
- **环境口径**：系统 python3=3.9.6，5-1 离线实验纯标准库可跑；本机 `pi` 不在 PATH，DEEPSEEK/MINIMAX/OPENAI/ANTHROPIC key 环境变量均未配置，真实 pi/live 一律标待验证。PPT 的 `pi install npm:pi-subagent-extension` 与笔记的源码 `-e` 是材料给出的不同入口，未验证同名 npm 包，不混写为同一实现。
- **官方源码核对纪律**：pi 行为以 `earendil-works/pi@9c4652688590abb836b40ebd1e4725ecf9a7c7d1`（2026-11-22 读取）为准；官方示例每个子 Agent 独立 `pi --no-session` 子进程，parallel 最多 8 项/同时 4 项，取消 SIGTERM→5s 后 SIGKILL，child usage 不自动加入父会话 usage。下载源码只读不执行，固定 commit permalink 写入课件与 RESOURCES。
- MISSION 已按用户「开始第五章」明确指示更新到 Week05，保留全部教学偏好与工程纪律；新增 `reference/multi-agent-subagent.html` 作为后续 5-2/5-5 可复用速查卡。

## 0023 生成记录（2026-11-22，Week05 第一课）

- 0022 分数未报，Q1–Q2 按 0022 两条核心不变量（新能力必须走同一 Runtime 治理链 / 每层回执只覆盖对应证明范围）换形式重测。Q3/Q4 考拆分与真实委托证据；简述 Q5–Q10 合并覆盖章复习 Q1–Q8：Q5=Q1/Q2，Q6=Q3/Q4，Q7=Q5/Q6，Q8=Q7，Q9=Q8，Q10 加练冲突仲裁与 pi 证明边界。4 选择 + 6 简述，选项等长自检通过，答案 C/A/D/B 打散。
- 精讲主线：该不该拆三问与协调成本 → Multi-Agent/Subagent/并行命令 → 三种收益与单个子任务价值 → Supervisor/Planner-Executor/Reviewer → 依赖 DAG 与冻结快照 → 上下文/工具/权限三层隔离 → 局部/全局预算与取消 unknown → 范围/版本/行为证据仲裁 → pi 独立进程/并发/取消与三处记录 → 面试两分钟主链。8 张 SVG；why 均落取舍，承接 0017 revision、0008/0013 权限与 Sandbox、0014 模型建议程序把关、0022 证明边界。
- **本机验证（全部离线，系统 Python 3.9.6 标准库）**：① demo 完整性 `python3 -m unittest discover -s tests -v` **11/11 OK**，fixture 根目录既有测试 **1/1 OK**；② probe_orders 真实 SQLite：返回 user_id=[10,20]、small_queries=4、large_queries=7、only_current_user=false、bounded_queries=false——绿色测试与越权/N+1 同时成立；③ DAG 调度 limit=2 peak=2、一次 0.287s，limit=1 peak=1、一次 0.454s，report 都等三专家完成且结果顺序不变（时间只作一次记录）；④ Prompt-only 测试文件被改 true、无 write→TOOL_NOT_GRANTED、越界→PATH_DENIED、子项均≤800 但全局 2200>2000；⑤ 本地 sleep 子进程 SIGTERM returncode=-15、1 秒内退出未升级 SIGKILL、远端请求停止仍 unknown。课件 heredoc 与本次实测一致，写入仅在 /tmp。
- **材料/实现口径差**：①笔记行 92 的旧文档写 `docs/old.md`，fixture 实际为 `docs/legacy.md`，当前规则仍为 docs/current.md；②PPT npm 安装与笔记源码加载未混同；③官方当前 README 的 parallel 上限、子用量边界和输出上限已写入精讲，不把示例当完整 Harness/Sandbox；④实验③④⑤是教学探针，不宣称验证 pi 本身；⑤fixture 测试须在 fixture 根目录运行，否则 app 包导入失败，已写入实验①。
- 实验①–⑤必做全部实测，⑥真实 pi parallel 可选待验证；通过条件 Q1–Q2 全对+Q3–Q10≥7/8、实验①–⑤、2 分钟主链、章复习 Q1–Q8。新增速查卡 `reference/multi-agent-subagent.html`，HTML 本地链接/锚点、SVG 数、题型数、JS 语法与选项长度均做静态校验。

## 0024 生成记录（2026-11-23，Week05 第二课）

- 0023 分数未报，Q1–Q2 按 0023 两条核心不变量（三层隔离由程序落实 / 局部合规不等于全局合规）换形式重测。Q3/Q4 考 policy/limits 生效链与字面/语义边界；简述 Q5–Q10 覆盖章复习 Q9–Q17：Q5=Q9，Q6=Q10/Q11，Q7=Q12/Q13，Q8=Q14/Q15，Q9=Q16，Q10=Q17 并加练失败分类。4 选择 + 6 简述，参考答案按关键得分点严格自评。
- 精讲主线按笔记 5.2：模糊委托事故 → 九项任务契约 → C1/C2/C3 逐项静态覆盖审计 → 模型候选与程序可信事实 → policy/limits 接真实执行 → 五步聚合与五出口 → 结构/字面/语义三层核验与快照失效 → 去重和范围/版本/行为仲裁 → chain 的 previous 不授权 → 分类失败、重试账与真实取消 → 代码边界与面试主链。8 张 SVG；新增 `reference/subagent-task-contract.html`。
- **本机验证（全部离线，系统 Python 3.9.6 标准库）**：demo 完整性 **11/11 OK**、fixture 既有测试 **1/1 OK**；inject_demo 得 accepted/rejected/conflicts 各 1、incomplete=[performance]、needs_review=true、semantic=pending；needs_input 与未返回均进 incomplete；未知/重复 task_id 抛「任务 ID 未授权或重复」；仅修改 docs/current.md 也抛「审查期间快照发生变化」；真实 SQL 配「整个系统所有鉴权均失效」仍 accepted=1、needs_review=false、semantic=pending；同 key 同 claim 合并 sources=[security,test]，实现/测试不同 key 保留两项；真实 SQLite 探针 user_id=[10,20]、SELECT 4→7、两布尔 false；chain 探针 write=PERMISSION_DENIED，临时错误/timeout 两次 60 教学单位，权限拒绝/needs_input 一次 30。课件 heredoc 均按实测输出编写，写入只在 /tmp。
- **实现边界（已写入精讲第 8 节与回读提醒）**：当前聚合器 expected 固定 test/security/performance；未知/重复 ID 直接 ValueError；incomplete 只有任务 ID，不存失败原因/缺输入/部分证据；不检查每个结果自报的 snapshot_id/parent_run_id；needs_review 只由 conflicts/rejected/incomplete 推出，不含语义；精确 claim 比较不是通用语义去重；snapshot 只覆盖 app/tests/docs；policy/limits 不是聚合器执行。pi_runner 本地进程组 SIGTERM→3 秒 SIGKILL 不等于完整模型预算、远端取消或全局 Token 账。
- 实验①–⑤必做全部实测，⑥真实 pi parallel/chain 可选待验证；真实运行命令先读 setup/pi_runner，角色同名拒绝覆盖，但中途失败可能已有部分角色写入，课件已提示。通过条件 Q1–Q2 全对+Q3–Q10≥7/8、实验①–⑤、2 分钟主链、章复习 Q9–Q17。下一课 0025 前 2 题建议重测「字段存在≠限制生效」「字面核验≠语义成立」。

## 0006 测后反馈（2026-09-26，81% / 17-21）

已讲透、待换形式重测（用户明确要求：不造新概念名词，全部用课程/笔记原词；已给出时间线画面和对比表讲解）：

1. **Q10 最小 Tool Loop 纪律**——用户没读懂题目情景（不知道「四选项=四份待审代码」）。已讲：Assistant 先写回（协议顺序）+ MAX_STEPS 由 Harness 强制 + 无 if/elif 分派。重测角度：反向题形式「给你一段写错的 Loop，指出三处纪律问题」。
2. **Q12 六名词表**——「拆开」的 why 答错方向（答成设计美学，正确是「隔离三种变化」：版本升级→Registry、本轮开放范围→发现、执行期权限依赖→Snapshot/Runtime）。Registry vs 工具发现模糊，已用「库存→货架」链路讲清：Registry 管「系统有什么」，发现管「本轮谁可见」。重测角度：给一个变化场景（如「运维临时停用一个工具」），问影响哪个对象、不影响哪些。
3. **Q15 Snapshot 与紧急停用**——缺 T0-T4 时间线画面（模型思考期间工具被停用）。已讲：版本冻结（一致性）vs 启停不冻结（立刻拦住）的张力；发现时检查 + 执行前复查各自动机。重测角度：场景题「Snapshot 已创建后运维紧急停用，模型随后调用，会发生什么、靠什么拦住」。
4. **Q20 插件化边界**——不知道「插件」指什么。已用 plugins.py 讲：声明依赖/注册能力/保存撤销动作三件事 + 谁注册谁清理对称结构；边界=不能另起 Loop、不能绕过 invoke 直调 handler。重测角度：给一段「插件里直接 await handler」的代码让用户审查。
5. **tool_call_id ≠ 业务幂等键**——不知道为什么会「新 ID 同一笔退款」。已讲时间线：超时→模型重新规划→新 call ID 同参数。主动澄清了笔记行 642 `idempotency_key=f"{tenant}:{call.id}"` 的区分：Runtime 自动重试（同 call，ID 不变，下游幂等键有效）vs 模型重新规划（新 call，ID 必变，只能靠业务对象+动作+参数摘要）。重测角度：把这两条重试线混在一起问「哪条线下游幂等键有效」。

诊断报告原有 4 条薄弱点（tool_call_id 纪律、to_model_tool 安全投影、六名词表、prepare/execute/finalize）与上面 2、5 有重叠，未重叠的两条待常规回读。用户计划隔 1-2 天重做本课测验（间隔重复），0007 前 5 题重测已全对（薄弱点确认消除）。

## 0007 测后反馈（2026-09-27，90% / 18-20）

前 5 题 0006 重测全对（五个薄弱点消除）；错在两道回忆题，均为 2-3 六、七的内容。已讲解（结构：翻译关卡画面、信任边界对称、三分支决策树、七条动作的体检分组），待 0008 前 2 题换形式重测：

1. **启动链与治理不分叉（2-3 六）**——六步链和「为什么不能分叉」记不全。讲解要点：把 discover_tools 当「翻译关卡」（协议对象一辈子活在闭包里）；治理链一旦分叉就收不回来（两种分叉：SDK 对象穿透 / 按 Server 写 if 分支）；一句话锚点「外部工具从发现那一刻起就被翻译成内部工具」。重测角度：给一段分叉代码让审查，或问「Client 对象能出现在哪几个地方」。
2. **MCP 结果归一化（2-3 七）**——七条动作和三分支记不全。讲解要点：信任边界对称（0006 输入侧：Tool Call 不可信；本课输出侧：Server 返回不可信，四危：过长/敏感/内部异常/诱导文本）；三分支决策树（is_error → MCP_TOOL_ERROR；超 max_chars → RESULT_TOO_LARGE；过 → ok+content+tool_call_id）；收尾对称句「调用成功 ≠ 目标完成」↔「Tool Call 是建议不是执行」。重测角度：给一个具体返回体（超长/带诱导文本）问走哪个分支、进 Context 前还差什么。

## 0008 测后反馈（2026-09-27，90% / 18-20）

前 2 题 0007 重测全对（两个薄弱点消除）；错在门禁优先级、SQL/Shell 收窄、审计回忆题。三个点均已讲解，统一原则「背结构不背句子」，0009 前 3 题换形式重测：

1. **门禁固定优先级（2-4 二）**——推导原则两条：拒绝永远压过放行（后续阶段不能推翻前序拒绝结论）+ 便宜检查在前贵的在后（本地→I/O→问人）。锚点「漏斗」：硬 deny → plan → 白名单/RBAC（本地）→ 预检查（要 I/O）→ 审批（要问人，最贵故最后）→ bypass → allow。反例讲解已给：RBAC 提到 deny 前→deny 变软；审批提到预检前→白耗人工确认。重测角度：给一个交换过顺序的门禁实现，问哪个事故场景会发生。
2. **SQL/Shell 收窄优先级（2-4 三）**——用户问「要背吗」，答不背。原则「表达力越强的接口越危险，能收窄就不要靠检测」（窄工具=结构性防御，攻击面不存在；run_sql 参数本身是载荷）；递推「每层回答上一层失效后还剩什么」：收窄 > 约束（参数化/只读/表白名单）> 枚举（固定命令/AST）> 隔离（Sandbox 爆炸半径）> 边界 > fail closed。重测角度：给一个具体业务需求问设计顺序，或问「为什么窄工具排在 Sandbox 前面」。
3. **审计两阶段与 Trace/Audit（2-4 五）**——画面：事故复盘拼不出证据链（用户说了什么/谁确认的/谁的 Token）。记录按「谁何时依据什么规则对什么对象做了什么决定、真实发生了什么」组织；两阶段 why：allow ≠ 成功、TIMEOUT_UNKNOWN ≠ 失败（被拒只有 decision 记录，时间线停在 policy_deny 不出现 tool_start）；Trace 管怎么流动、Audit 管谁负责；审计自己不能成泄漏面（只记键名+脱敏摘要）。重测角度：给一条时间线问缺哪条记录，或问 allow 了的调用为什么还可能没有 execution 成功记录。

2026-09-27 追加澄清（用户主动问归属，说明这里是好的综合考点）：治理链跑在 Runtime 的 invoke() 里（唯一入口），但 ToolDefinition/Registry 不是「Runtime 里面的东西」——Runtime 依赖而非包含；治理的规则（ToolPolicy 挂 ToolDefinition）、事实（ExecutionContext 服务端创建传入）、状态（PermissionEngine/ApprovalStore/AuditSink 注入协作者）分布在外部，why 是「一个对象管一种变化」。0009 重测可考归属题：「权限判断写在哪、为什么不在 handler 里」。

## 0010 测后反馈（2026-10-17，78% / 14-18）

四个薄弱点均已按「核心结论 + 代码/笔记行号」讲解，全部用笔记原词（canonicalJson/动作指纹、完成契约/缺失项、停止原因三类、REPEATED_ACTION）：

1. **pi 最小循环的两种判断（3-1 四）**——判断②异常停止（error/aborted）先于判断①协议停止（无 toolCall）执行；业务停止不在最小循环里（`if stop condition is true` 是宿主钩子位）。编号①②是性质序、执行序相反，fail-fast 是 why。重测角度：给判定顺序调换的 Loop 问后果。
2. **完成契约返回缺失项列表（3-1 七）**——当天答疑已讲过（原始数据 vs 派生数据、三个消费方、`missing.length===0` 派生布尔），测验仍错，说明只记住了「回写给模型」一个消费方。笔记行 496 原句要求能复述。重测角度：问布尔版本会让哪些下游拿不到信息。
3. **重复动作拦截的验收证据（3-1 八）**——拦截发生时四条证据：指纹计数≥3、REPEATED_ACTION 已登记、模型收到带错误码的 Tool Result（非静默）、真实 handler 未执行（无 evidence 写入）。canonicalJson 递归排序防字段顺序绕过；BLOCK_AT_COUNT=3 容忍正当重试（笔记 7.2「相同动作不一定是死循环」六信号）。重测角度：问「拦截后模型看到什么/Context 里多了什么/少了什么」。
4. **停止原因不可覆盖（3-1 六）**——stop() write-once（loop-guard.ts:194），第一个终局事件即唯一真相；被改写则死循环被杀的 Run 会报成 COMPLETED，重试策略/计费/复盘全错。对应笔记 6.3「停止原因要可解释」三类（完成/等待用户/主动停止）+ 1376 行「再试成功也不能覆盖前面的失败记录」。与 0008 门禁「拒绝压过放行」同构。

错题共性：四题全是**不变量**题（顺序不可换/信息方向不可丢/证据边界要分清发生了与没发生什么/写入不可逆）。方法论：Loop 题先画状态表+时序，不背结论（同 0006「先画时间线」）。

计划：**薄弱点 2 已现场复述通过（2026-10-17，含派生方向+可审计性两个自发补充，缺测试消费方与迁移锚点，判 85 分）**；用户隔 1-2 天重做 0010 测验；0011 前 2 题换形式重测本课薄弱点（覆盖 0007 规划中「Week02 重测题有错则换形式重测」——本次前 2 题 Week02 重测结果未知，以 0011 兜底）。答疑补充收获：Run/Turn/Session 层次、协议层=模型 API 通信协议（HTTP 200≠业务成功类比）、steering vs follow-up、外循环=宿主程序三形态（脚本/REPL/事件驱动）、Go ctx 与 AbortController 对应——这些是答疑新增锚点，0011 精讲可少量回指。

## 0012 测后反馈（2026-10-31，83% / 15-18）

三个薄弱点均已讲解：

1. **停止原因不可覆盖（0010 间隔重测）**——write-once：先到的终局原因压过后到的成功。REPEATED_ACTION 已登记后，同一 Turn 完成校验通过也不能改成 COMPLETED；否则死循环 Run 会被报成成功交付，重试/计费/复盘全错。与 0008「拒绝压过放行」同构。重测角度：给一个判定顺序调换的 afterTurn，问会报成什么。
2. **恢复五步与模型最后启动**——顺序：存档 → 工作区 → 任务状态 → 还原业务对象 → 启动模型。模型必须最后，因为前四步任何一步失败都意味着现场不可信或不允许继续；先启动模型会在检查失败前发出写操作。重测角度：把模型启动挪到第 2 步，问会多出什么副作用。
3. **Q18 怎么证明恢复没有重放副作用**——用真实产物而不是错误码：A2 补丁只出现 1 次；A8 turn 从 6 继续、退出码序列 [1,1,0,0,0]、历史累积且任务输入只出现一次；证据 ID 不重号；A10 原存档字节级不变、独立工作区不继承旧批准。核心是「错误码可以打印，文件字节/执行次数/轮数/历史长度伪造不了」。重测角度：给一个「恢复后再次 apply_patch」的坏实现，问哪条断言会红。**注意：用户把 0/1 含义弄反，已澄清进程退出码 0 = 成功、非 0 = 失败，并在 A8 与 Q18 参考答案处加注。**

用户另要求：每课开头加简单目录（锚点链接），已加入 0011/0012 并写入模板。

## Week02 工作对应点素材（自然提及用）

- Runtime 收口副作用（2-2）↔ OpenViking 插件体系的 MCP proxy 统一入口（lib/servers）
- trace_id/tool_call_id 关联（2-1）↔ benchmark 对比跑批的 trace 归因（requested/resolved 同理）
- Output Schema 稳定协议（2-1）↔ de-test fact 族（entities/events/preferences）抽取输出协议
- 插件化不改变执行入口（2-2）↔ OpenViking 插件谁注册谁清理的对称设计

## 每课结构（2026-10-11 起的五五开模板，Week03+）

1. 课前导览：本课定位、材料/代码定位、验收标准 + 简单目录（锚点链接到各小节）
2. **第一部分精讲**：先讲——全景地图（ASCII 树与/或 SVG 图）、逐节讲解含 why（每节回答「不这样会出什么事故」）、面试视角；每课至少 3 张 SVG 图（时序/状态机/流程/解剖），图示组件统一在 `assets/course.css`
3. **第二部分测验**：**10 题 = 4 选择 + 6 简述**（2026-11-22 起；0013–0017 为 18 题 = 14 选择 + 4 简述，0010–0012 为 16 选择 + 2 回忆），前 1–2 道选择题为上一课薄弱点间隔重测（换形式），简述占多数、突出核心思路与关键点，参考答案列出关键得分点供严格自评；**可酌情加 1–2 道复习题**（2026-10-17 用户确认）：来源优先本章笔记「本章复习问题」中已学小节的题（换形式），也可偶尔加前几章复习题——一两道为宜，不加也行，agent 判断何时需要复习；做完自动生成诊断报告
4. 第三部分第二层练习：改造实验清单（列表+完整 bash 命令，预期先写再跑）
5. 回读指引（含笔记附录「源码与工程阅读路线」对应条目）+ 向 agent 提问提醒

（Week01–02 的旧测验驱动模板保留在历史课里：先考暴露薄弱点，再只讲薄弱点。）

## 工作对应点素材（自然提及用）

- Model Adapter（1-2）↔ OpenViking 的 vectordb adapters（default/local/VikingDB），用户日常做两个后端检索对比正是 Adapter 模式的实践
- 失败分类与有限重试（1-2）↔ benchmark 跑批时的 API 限流处理
- Structured Output 校验（1-5）↔ de-test fact 族（entities/events/preferences）的输出协议
