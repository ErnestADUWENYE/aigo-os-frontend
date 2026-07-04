export type LifecycleStage =
  | "ideation"
  | "design"
  | "development"
  | "testing"
  | "risk_review"
  | "approval"
  | "deployment"
  | "monitoring"
  | "retirement";

export type LifecycleGateStatus =
  | "not_started"
  | "in_progress"
  | "passed"
  | "failed"
  | "waived";

export type LifecycleGate = {
  id: string;
  ai_system_id: string;
  stage: LifecycleStage;
  status: LifecycleGateStatus;
  required_controls: string[];
  approved_by?: string;
  evidence_ids?: string[];
  due_date?: string;
  completed_at?: string;
  created_at: string;
  updated_at?: string;
};