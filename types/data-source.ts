export type DataSensitivity =
  | "public"
  | "internal"
  | "confidential"
  | "restricted"
  | "regulated";

export type DataSource = {
  id: string;
  organization_id: string;
  workspace_id: string;
  name: string;
  type: "database" | "api" | "file_storage" | "crm" | "warehouse" | "custom";
  owner?: string;
  sensitivity: DataSensitivity;
  contains_pii: boolean;
  contains_phi?: boolean;
  contains_financial_data?: boolean;
  retention_policy?: string;
  region?: string;
  created_at: string;
  updated_at?: string;
};