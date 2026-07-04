export type PolicyStatus = "draft" | "active" | "inactive" | "archived";

export type PolicySeverity = "low" | "medium" | "high" | "critical";

export type PolicyCategory =
  | "privacy"
  | "security"
  | "safety"
  | "compliance"
  | "risk"
  | "human_oversight"
  | "data_governance"
  | "model_governance"
  | "tool_usage";

export type Policy = {
  id: string;
  organization_id: string;
  workspace_id: string;
  name: string;
  description?: string;
  category: PolicyCategory;
  severity: PolicySeverity;
  status: PolicyStatus;
  version: string;
  owner?: string;
  enforcement_mode: "monitor" | "warn" | "block" | "require_approval";
  applies_to_agent_ids?: string[];
  applies_to_system_ids?: string[];
  created_at: string;
  updated_at?: string;
};