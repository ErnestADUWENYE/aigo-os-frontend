import type { UserRole } from "./role";

export type IdentityProvider =
  | "clerk"
  | "google"
  | "github"
  | "microsoft"
  | "saml"
  | "oidc";

export type IdentityUserStatus = "active" | "invited" | "disabled";

export type IdentityUser = {
  id: string;
  external_id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  provider: IdentityProvider;
  role: UserRole;
  status: IdentityUserStatus;
  organization_id: string;
  workspace_id?: string;
  last_login_at?: string;
  created_at: string;
  updated_at?: string;
};