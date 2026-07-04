export type ServiceAccountStatus =
  | "active"
  | "disabled"
  | "revoked";

export type ServiceAccount = {
  id: string;
  organization_id: string;
  workspace_id?: string;
  name: string;
  description?: string;
  status: ServiceAccountStatus;
  scopes: string[];
  role_ids?: string[];
  created_by: string;
  last_authenticated_at?: string;
  created_at: string;
  updated_at?: string;
};

export type ServiceAccountCredentialStatus =
  | "active"
  | "revoked"
  | "expired";

export type ServiceAccountCredential = {
  id: string;
  service_account_id: string;
  prefix: string;
  status: ServiceAccountCredentialStatus;
  last_used_at?: string;
  expires_at?: string;
  revoked_at?: string;
  created_at: string;
};

export type ServiceAccountCreateRequest = {
  name: string;
  description?: string;
  workspace_id?: string;
  scopes: string[];
  role_ids?: string[];
};

export type ServiceAccountCreateResponse = {
  service_account: ServiceAccount;
  credential_secret: string;
};