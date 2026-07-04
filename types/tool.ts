export type ToolRiskLevel = "low" | "medium" | "high" | "critical";

export type Tool = {
  id: string;
  organization_id: string;
  workspace_id: string;
  name: string;
  description?: string;
  category:
    | "browser"
    | "database"
    | "email"
    | "payment"
    | "code_execution"
    | "file_access"
    | "workflow"
    | "custom";
  risk_level: ToolRiskLevel;
  requires_approval: boolean;
  allowed_agent_ids?: string[];
  created_at: string;
  updated_at?: string;
};