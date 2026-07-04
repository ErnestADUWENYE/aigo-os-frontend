export type AlertSeverity =
  | "informational"
  | "low"
  | "medium"
  | "high"
  | "critical";

export type AlertStatus =
  | "active"
  | "acknowledged"
  | "investigating"
  | "resolved"
  | "dismissed";

export type AlertSource =
  | "policy_engine"
  | "risk_monitor"
  | "agent_monitor"
  | "model_monitor"
  | "security_monitor"
  | "compliance_monitor"
  | "integration"
  | "manual";

export type Alert = {
  id: string;
  organization_id: string;
  workspace_id: string;
  alert_number: string;
  title: string;
  description?: string;
  severity: AlertSeverity;
  status: AlertStatus;
  source: AlertSource;
  source_reference_id?: string;
  ai_system_id?: string;
  agent_id?: string;
  model_id?: string;
  policy_id?: string;
  risk_id?: string;
  assigned_to?: string;
  acknowledged_by?: string;
  acknowledged_at?: string;
  resolution?: string;
  resolved_by?: string;
  resolved_at?: string;
  created_at: string;
  updated_at?: string;
};