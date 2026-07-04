export const POLICY_CATEGORIES = [
    { label: "Privacy", value: "privacy" },
    { label: "Security", value: "security" },
    { label: "Safety", value: "safety" },
    { label: "Compliance", value: "compliance" },
    { label: "Risk", value: "risk" },
    { label: "Human Oversight", value: "human_oversight" },
    { label: "Data Governance", value: "data_governance" },
    { label: "Model Governance", value: "model_governance" },
    { label: "Tool Usage", value: "tool_usage" },
  ] as const;
  
  export const ENFORCEMENT_MODES = [
    { label: "Monitor Only", value: "monitor" },
    { label: "Warn", value: "warn" },
    { label: "Block", value: "block" },
    { label: "Require Approval", value: "require_approval" },
  ] as const;
  
  export const POLICY_RULE_ACTIONS = [
    { label: "Allow", value: "allow" },
    { label: "Warn", value: "warn" },
    { label: "Block", value: "block" },
    { label: "Redact", value: "redact" },
    { label: "Escalate", value: "escalate" },
    { label: "Require Human Review", value: "require_human_review" },
    { label: "Create Incident", value: "create_incident" },
    { label: "Create Alert", value: "create_alert" },
  ] as const;