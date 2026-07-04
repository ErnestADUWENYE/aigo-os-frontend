export type PolicyRuleOperator =
  | "equals"
  | "not_equals"
  | "contains"
  | "not_contains"
  | "greater_than"
  | "less_than"
  | "in"
  | "not_in"
  | "regex"
  | "custom";

export type PolicyRuleAction =
  | "allow"
  | "warn"
  | "block"
  | "redact"
  | "escalate"
  | "require_human_review"
  | "create_incident"
  | "create_alert";

export type PolicyRule = {
  id: string;
  policy_id: string;
  name: string;
  description?: string;
  field: string;
  operator: PolicyRuleOperator;
  value: string | number | boolean | string[];
  action: PolicyRuleAction;
  priority: number;
  enabled: boolean;
  created_at: string;
  updated_at?: string;
};