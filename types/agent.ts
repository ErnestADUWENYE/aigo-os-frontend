export type AgentStatus =
  | "active"
  | "inactive"
  | "monitoring"
  | "suspended"
  | "retired";

export type AgentRiskLevel = "low" | "medium" | "high" | "critical";

export type AgentAutonomyLevel =
  | "assistive"
  | "supervised"
  | "semi_autonomous"
  | "fully_autonomous";

export type AgentType =
  | "llm_agent"
  | "workflow_agent"
  | "reviewer_agent"
  | "tool_using_agent"
  | "autonomous_agent"
  | "multi_agent_system";

export type Agent = {
  id: string;
  ai_system_id?: string;
  organization_id: string;
  workspace_id: string;
  name: string;
  description?: string;
  type: AgentType;
  status: AgentStatus;
  risk_level: AgentRiskLevel;
  autonomy_level: AgentAutonomyLevel;
  owner?: string;
  department?: string;
  model_ids?: string[];
  tool_ids?: string[];
  data_source_ids?: string[];
  allowed_actions?: string[];
  prohibited_actions?: string[];
  last_activity_at?: string;
  created_at: string;
  updated_at?: string;
};