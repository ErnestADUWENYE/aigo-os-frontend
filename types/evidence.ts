export type EvidenceType =
  | "document"
  | "screenshot"
  | "audit_log"
  | "system_log"
  | "assessment"
  | "test_result"
  | "approval"
  | "policy"
  | "report"
  | "external_link"
  | "api_snapshot";

export type EvidenceStatus =
  | "pending"
  | "verified"
  | "rejected"
  | "expired";

export type Evidence = {
  id: string;
  organization_id: string;
  workspace_id: string;
  name: string;
  description?: string;
  type: EvidenceType;
  status: EvidenceStatus;
  source?: string;
  file_name?: string;
  file_url?: string;
  external_url?: string;
  checksum?: string;
  collected_by?: string;
  verified_by?: string;
  control_ids?: string[];
  framework_requirement_ids?: string[];
  assessment_ids?: string[];
  incident_ids?: string[];
  collected_at?: string;
  verified_at?: string;
  expires_at?: string;
  created_at: string;
  updated_at?: string;
};