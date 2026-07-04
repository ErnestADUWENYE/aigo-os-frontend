export type ControlCategory =
  | "governance"
  | "risk_management"
  | "privacy"
  | "security"
  | "safety"
  | "fairness"
  | "transparency"
  | "human_oversight"
  | "data_governance"
  | "model_governance"
  | "monitoring"
  | "incident_management";

export type ControlType =
  | "preventive"
  | "detective"
  | "corrective"
  | "directive";

export type ControlStatus =
  | "draft"
  | "implemented"
  | "partially_implemented"
  | "not_implemented"
  | "not_applicable"
  | "retired";

export type ControlEffectiveness =
  | "not_tested"
  | "effective"
  | "partially_effective"
  | "ineffective";

export type Control = {
  id: string;
  organization_id: string;
  workspace_id: string;
  code: string;
  name: string;
  description: string;
  category: ControlCategory;
  type: ControlType;
  status: ControlStatus;
  effectiveness: ControlEffectiveness;
  owner?: string;
  policy_ids?: string[];
  risk_ids?: string[];
  framework_requirement_ids?: string[];
  evidence_ids?: string[];
  implementation_details?: string;
  test_frequency?: "continuous" | "daily" | "weekly" | "monthly" | "quarterly" | "annual";
  last_tested_at?: string;
  next_test_at?: string;
  created_at: string;
  updated_at?: string;
};