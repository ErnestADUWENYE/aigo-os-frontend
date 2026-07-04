export type WorkspaceEnvironment = "production" | "staging" | "development";

export type WorkspaceStatus = "active" | "inactive" | "archived";

export type Workspace = {
  id: string;
  organization_id: string;
  name: string;
  slug: string;
  environment: WorkspaceEnvironment;
  status: WorkspaceStatus;
  default_region?: string;
  data_retention_days?: number;
  created_at: string;
  updated_at?: string;
};