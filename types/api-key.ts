export type ApiKeyStatus =
  | "active"
  | "revoked"
  | "expired";

export type ApiKeyEnvironment =
  | "production"
  | "staging"
  | "development";

export type ApiKey = {
  id: string;
  organization_id: string;
  workspace_id?: string;
  name: string;
  prefix: string;
  status: ApiKeyStatus;
  environment: ApiKeyEnvironment;
  scopes: string[];
  created_by: string;
  last_used_at?: string;
  expires_at?: string;
  revoked_at?: string;
  created_at: string;
  updated_at?: string;
};

export type ApiKeyCreateRequest = {
  name: string;
  workspace_id?: string;
  environment: ApiKeyEnvironment;
  scopes: string[];
  expires_at?: string;
};

export type ApiKeyCreateResponse = {
  api_key: ApiKey;
  secret: string;
};