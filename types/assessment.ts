import type { RiskLevel } from "./risk";

export type AssessmentType =
  | "ai_impact_assessment"
  | "model_risk_assessment"
  | "privacy_impact_assessment"
  | "security_assessment"
  | "bias_assessment"
  | "vendor_assessment"
  | "lifecycle_gate_review";

export type AssessmentStatus =
  | "draft"
  | "in_progress"
  | "submitted"
  | "approved"
  | "rejected"
  | "expired";

export type Assessment = {
  id: string;
  organization_id: string;
  workspace_id: string;
  ai_system_id?: string;
  agent_id?: string;
  type: AssessmentType;
  status: AssessmentStatus;
  owner?: string;
  reviewer?: string;
  overall_risk_level?: RiskLevel;
  score?: number;
  findings?: string[];
  evidence_ids?: string[];
  submitted_at?: string;
  approved_at?: string;
  created_at: string;
  updated_at?: string;
};