import type { Permission } from "./permission";

export type UserRole =
  | "owner"
  | "admin"
  | "governance_lead"
  | "risk_manager"
  | "compliance_officer"
  | "security_analyst"
  | "reviewer"
  | "developer"
  | "auditor"
  | "viewer";

export type Role = {
  id: string;
  name: UserRole | string;
  description?: string;
  permissions: Permission[];
  is_system_role: boolean;
  created_at: string;
  updated_at?: string;
};