export type IntegrationCategory =
  | "ai_provider"
  | "model_provider"
  | "identity"
  | "siem"
  | "ticketing"
  | "messaging"
  | "data_warehouse"
  | "cloud"
  | "developer_tool"
  | "workflow"
  | "grc"
  | "custom";

export type IntegrationStatus =
  | "connected"
  | "disconnected"
  | "degraded"
  | "error"
  | "pending";

export type IntegrationAuthType =
  | "api_key"
  | "oauth2"
  | "basic"
  | "bearer"
  | "service_account"
  | "webhook"
  | "none";

export type Integration = {
  id: string;
  organization_id: string;
  workspace_id?: string;
  name: string;
  provider: string;
  category: IntegrationCategory;
  status: IntegrationStatus;
  auth_type: IntegrationAuthType;
  description?: string;
  configuration?: Record<string, unknown>;
  capabilities?: string[];
  last_sync_at?: string;
  last_health_check_at?: string;
  error_message?: string;
  created_by: string;
  created_at: string;
  updated_at?: string;
};

export type IntegrationSyncStatus =
  | "queued"
  | "running"
  | "completed"
  | "partially_completed"
  | "failed";

export type IntegrationSync = {
  id: string;
  integration_id: string;
  status: IntegrationSyncStatus;
  records_processed: number;
  records_created?: number;
  records_updated?: number;
  records_failed?: number;
  error_message?: string;
  started_at?: string;
  completed_at?: string;
  created_at: string;
};