export type WebhookStatus =
  | "active"
  | "disabled"
  | "failing";

export type WebhookEvent =
  | "agent.created"
  | "agent.updated"
  | "agent.suspended"
  | "policy.created"
  | "policy.updated"
  | "policy.violation"
  | "enforcement.blocked"
  | "enforcement.escalated"
  | "review.created"
  | "review.completed"
  | "risk.created"
  | "risk.updated"
  | "incident.created"
  | "incident.updated"
  | "incident.resolved"
  | "alert.created"
  | "alert.acknowledged"
  | "alert.resolved"
  | "assessment.completed"
  | "control.failed"
  | "report.completed";

export type Webhook = {
  id: string;
  organization_id: string;
  workspace_id?: string;
  name: string;
  endpoint_url: string;
  status: WebhookStatus;
  events: WebhookEvent[];
  secret_prefix?: string;
  created_by: string;
  last_delivery_at?: string;
  last_success_at?: string;
  last_failure_at?: string;
  failure_count: number;
  created_at: string;
  updated_at?: string;
};

export type WebhookDeliveryStatus =
  | "pending"
  | "delivered"
  | "failed"
  | "retrying";

export type WebhookDelivery = {
  id: string;
  webhook_id: string;
  event: WebhookEvent;
  event_id: string;
  status: WebhookDeliveryStatus;
  response_status?: number;
  attempt_count: number;
  error_message?: string;
  next_retry_at?: string;
  delivered_at?: string;
  created_at: string;
};