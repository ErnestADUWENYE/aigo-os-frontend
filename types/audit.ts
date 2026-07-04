export type AuditActorType =
  | "user"
  | "agent"
  | "system"
  | "service_account"
  | "integration";

export type AuditEventCategory =
  | "authentication"
  | "authorization"
  | "agent"
  | "ai_system"
  | "model"
  | "policy"
  | "enforcement"
  | "review"
  | "risk"
  | "assessment"
  | "control"
  | "framework"
  | "evidence"
  | "incident"
  | "alert"
  | "settings"
  | "integration"
  | "security";

export type AuditOutcome =
  | "success"
  | "failure"
  | "denied"
  | "partial";

export type AuditEvent = {
  id: string;
  organization_id: string;
  workspace_id?: string;
  actor_type: AuditActorType;
  actor_id?: string;
  actor_name?: string;
  category: AuditEventCategory;
  action: string;
  resource_type: string;
  resource_id?: string;
  outcome: AuditOutcome;
  description?: string;
  ip_address?: string;
  user_agent?: string;
  request_id?: string;
  correlation_id?: string;
  previous_values?: Record<string, unknown>;
  new_values?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  occurred_at: string;
  created_at: string;
};