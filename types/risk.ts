export type RiskLevel = "low" | "medium" | "high" | "critical";

export type RiskStatus =
  | "identified"
  | "assessed"
  | "mitigating"
  | "accepted"
  | "closed";

export type RiskCategory =
  | "privacy"
  | "security"
  | "safety"
  | "bias"
  | "legal"
  | "compliance"
  | "operational"
  | "financial"
  | "reputational";

export type Risk = {
  id: string;
  organization_id: string;
  workspace_id: string;
  ai_system_id?: string;
  agent_id?: string;
  title: string;
  description?: string;
  category: RiskCategory;
  inherent_level: RiskLevel;
  residual_level: RiskLevel;
  status: RiskStatus;
  owner?: string;
  mitigation_plan?: string;
  control_ids?: string[];
  due_date?: string;
  created_at: string;
  updated_at?: string;
};