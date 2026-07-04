export type IncidentSeverity =
  | "low"
  | "medium"
  | "high"
  | "critical";

export type IncidentStatus =
  | "open"
  | "triaged"
  | "investigating"
  | "contained"
  | "remediating"
  | "resolved"
  | "closed";

export type IncidentCategory =
  | "policy_violation"
  | "privacy"
  | "security"
  | "safety"
  | "bias"
  | "model_failure"
  | "agent_failure"
  | "unauthorized_action"
  | "data_exposure"
  | "compliance"
  | "operational";

export type Incident = {
  id: string;
  organization_id: string;
  workspace_id: string;
  incident_number: string;
  title: string;
  description?: string;
  category: IncidentCategory;
  severity: IncidentSeverity;
  status: IncidentStatus;
  ai_system_id?: string;
  agent_id?: string;
  model_id?: string;
  policy_id?: string;
  enforcement_event_id?: string;
  alert_ids?: string[];
  risk_ids?: string[];
  owner?: string;
  reported_by?: string;
  business_impact?: string;
  regulatory_impact?: string;
  containment_actions?: string[];
  remediation_actions?: string[];
  root_cause?: string;
  detected_at: string;
  contained_at?: string;
  resolved_at?: string;
  closed_at?: string;
  created_at: string;
  updated_at?: string;
};