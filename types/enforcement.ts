export type EnforcementDecision =
  | "allowed"
  | "warned"
  | "blocked"
  | "redacted"
  | "escalated"
  | "requires_review";

export type EnforcementSource =
  | "runtime"
  | "batch_scan"
  | "manual_review"
  | "api"
  | "integration";

export type EnforcementEvent = {
  id: string;
  organization_id: string;
  workspace_id: string;
  policy_id?: string;
  policy_rule_id?: string;
  agent_id?: string;
  ai_system_id?: string;
  source: EnforcementSource;
  input_summary?: string;
  output_summary?: string;
  decision: EnforcementDecision;
  reason?: string;
  severity: "low" | "medium" | "high" | "critical";
  review_id?: string;
  incident_id?: string;
  alert_id?: string;
  created_at: string;
};