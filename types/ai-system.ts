export type AISystemStatus =
  | "draft"
  | "in_review"
  | "approved"
  | "deployed"
  | "retired";

export type AISystemCriticality = "low" | "medium" | "high" | "mission_critical";

export type AISystem = {
  id: string;
  organization_id: string;
  workspace_id: string;
  name: string;
  description?: string;
  owner?: string;
  business_unit?: string;
  purpose: string;
  status: AISystemStatus;
  criticality: AISystemCriticality;
  risk_level: "low" | "medium" | "high" | "critical";
  lifecycle_stage: string;
  data_categories: string[];
  users_impacted?: string[];
  regulatory_scope?: string[];
  created_at: string;
  updated_at?: string;
};