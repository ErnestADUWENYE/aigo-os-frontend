export type ReviewStatus =
  | "open"
  | "assigned"
  | "in_review"
  | "approved"
  | "rejected"
  | "closed";

export type ReviewPriority = "low" | "medium" | "high" | "urgent";

export type ReviewDecision =
  | "approve"
  | "reject"
  | "request_changes"
  | "escalate"
  | "no_action";

export type Review = {
  id: string;
  organization_id: string;
  workspace_id: string;
  agent_id?: string;
  ai_system_id?: string;
  policy_id?: string;
  enforcement_event_id?: string;
  title: string;
  description?: string;
  status: ReviewStatus;
  priority: ReviewPriority;
  assigned_to?: string;
  decision?: ReviewDecision;
  decision_reason?: string;
  due_at?: string;
  completed_at?: string;
  created_at: string;
  updated_at?: string;
};