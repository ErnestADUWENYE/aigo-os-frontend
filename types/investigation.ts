export type InvestigationStatus =
  | "open"
  | "collecting_evidence"
  | "analyzing"
  | "pending_review"
  | "completed"
  | "closed";

export type InvestigationFindingSeverity =
  | "informational"
  | "low"
  | "medium"
  | "high"
  | "critical";

export type InvestigationFinding = {
  id: string;
  investigation_id: string;
  title: string;
  description: string;
  severity: InvestigationFindingSeverity;
  evidence_ids?: string[];
  control_ids?: string[];
  recommended_actions?: string[];
  created_at: string;
  updated_at?: string;
};

export type Investigation = {
  id: string;
  organization_id: string;
  workspace_id: string;
  incident_id: string;
  title: string;
  description?: string;
  status: InvestigationStatus;
  lead_investigator?: string;
  investigator_ids?: string[];
  scope?: string;
  hypothesis?: string;
  timeline_summary?: string;
  evidence_ids?: string[];
  findings?: InvestigationFinding[];
  root_cause?: string;
  lessons_learned?: string[];
  started_at?: string;
  completed_at?: string;
  created_at: string;
  updated_at?: string;
};