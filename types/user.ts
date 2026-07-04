export type UserRole = "admin" | "governance_lead" | "reviewer" | "viewer";

export type WorkspaceUser = {
  id: string;
  email: string;
  name?: string;
  role: UserRole | string;
  organization_id?: string;
  created_at?: string;
};