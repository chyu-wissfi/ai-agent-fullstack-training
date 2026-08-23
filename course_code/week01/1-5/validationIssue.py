class ValidationIssue(BaseModel):
    path: str      # 出错字段路径，如 "action" 或 "search_query"
    code: str      # 错误类型，如 "missing"、"union_tag_invalid"（取自 Pydantic 的 type）
    message: str   # 人类可读的错误描述


class DecisionValidation(BaseModel):
    valid: bool
    decision: AgentDecision | None = None
    issues: list[ValidationIssue] = Field(default_factory=list)


def validate_decision(raw_output: str) -> DecisionValidation:
    try:
        decision = AgentDecision.model_validate_json(raw_output)
        return DecisionValidation(
            valid=True,
            decision=decision,
        )
    except ValidationError as exc:
        issues = [
            ValidationIssue(
                path=".".join(str(part) for part in item["loc"]),
                code=item["type"],
                message=item["msg"],
            )
            for item in exc.errors(
                include_url=False,
                include_input=False,
            )
        ]
        return DecisionValidation(
            valid=False,
            issues=issues,
        )