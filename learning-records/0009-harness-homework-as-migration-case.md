# 0014 以真实 Guarded Harness 作业补足「会写与能证明」

**Evidence**: 用户提供 `/Users/chyu-wissfi/Projects/smolagents/homework.md` 与九份设计文档。作业在不修改 `src/smolagents/` 的前提下新增 `guarded_harness/`，通过框架 schema 前置校验后的 `Tool.forward → Harness.invoke`、`final_answer_checks`、只同步步号的 `step_callbacks`，以及 `agent.run` 后的宿主 `Harness.finish` 组织治理闭环。2026-11-02 本机运行六个测试文件为 76 passed，三条新增课程定向命令分别通过 1、1、9 个用例。

**Diagnosis**: 0014 初版的概念与不变量完整，但偏「会讲」：缺少课程 `src` 与 `fixtures` 的边界、事实归属和精确双写时序，也没有把原则迁移到用户真实框架。更重要的是，作业设计文档有几处表述比实现更满：当前恢复的是 Harness 业务状态而非完整 ReAct 会话；step callback 不自动保存 Checkpoint；崩溃用例在 `journal.begin` 后直接退出，未执行真实写 handler；H2/C4 的 `repo_digest` 与审批的目标文件 digest 是不同机制。若照抄文档，会把「设计过」误教成「已经证明」。

**教学决策**: 0014 作业驱动重写：新增工程模块地图、`run_test` 双写时序图、四层成功区分、smolagents 真实切点图与第 10 节；选择题改为场景和代码审查，Q18 直接复盘作业；实验⑤运行作业 76 个测试并核对四份证据互证。课程把 pi、commerce-agents、smolagents 作为三套实现对照，不另造泛化迷你作业。所有结论以代码和测试为准，明确「已实现 / 已验证 / 尚未证明」三层。

**Implications**: 后续 0015/0016 讨论 Checkpoint、恢复、审批与验收时，沿用同一纪律：先画真实调用路径，再说切点覆盖范围；区分业务状态恢复与完整会话恢复；区分未闭合动作检测与真实副作用后的恢复；区分证据摘要和审批目标摘要。面试复述允许并要求说明边界，不把保留的限制包装成完整能力。详细行号与改动见 NOTES「0014 作业驱动优化」。
