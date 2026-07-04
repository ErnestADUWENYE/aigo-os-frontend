export type ReportType =
  | "executive_governance"
  | "ai_inventory"
  | "agent_risk"
  | "policy_enforcement"
  | "human_oversight"
  | "incident"
  | "risk_register"
  | "control_effectiveness"
  | "framework_compliance"
  | "audit_trail"
  | "regulatory"
  | "custom";

export type ReportStatus =
  | "queued"
  | "generating"
  | "completed"
  | "failed"
  | "expired";

export type ReportFormat =
  | "pdf"
  | "csv"
  | "xlsx"
  | "json";

export type ReportAudience =
  | "board"
  | "executive"
  | "governance"
  | "risk"
  | "compliance"
  | "security"
  | "auditor"
  | "regulator"
  | "technical";

export type ReportFilter = {
  workspace_ids?: string[];
  ai_system_ids?: string[];
  agent_ids?: string[];
  policy_ids?: string[];
  risk_levels?: string[];
  framework_ids?: string[];
  start_date?: string;
  end_date?: string;
  metadata?: Record<string, unknown>;
};

export type Report = {
  id: string;
  organization_id: string;
  workspace_id?: string;
  name: string;
  description?: string;
  type: ReportType;
  status: ReportStatus;
  format: ReportFormat;
  audience?: ReportAudience;
  filters?: ReportFilter;
  requested_by: string;
  generated_by?: string;
  file_name?: string;
  file_url?: string;
  checksum?: string;
  error_message?: string;
  requested_at: string;
  generation_started_at?: string;
  generated_at?: string;
  expires_at?: string;
  created_at: string;
  updated_at?: string;
};

export type ReportScheduleFrequency =
  | "daily"
  | "weekly"
  | "monthly"
  | "quarterly";

export type ReportSchedule = {
  id: string;
  organization_id: string;
  workspace_id?: string;
  report_type: ReportType;
  name: string;
  frequency: ReportScheduleFrequency;
  format: ReportFormat;
  audience?: ReportAudience;
  filters?: ReportFilter;
  recipient_emails: string[];
  enabled: boolean;
  next_run_at?: string;
  last_run_at?: string;
  created_by: string;
  created_at: string;
  updated_at?: string;
};