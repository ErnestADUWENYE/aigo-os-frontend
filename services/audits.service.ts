// services/audits.service.ts
import { apiClient, type RequestOptions } from "@/lib";

export type AuditAction =
  | "created"
  | "updated"
  | "deleted"
  | "approved"
  | "rejected"
  | "assigned"
  | "unassigned"
  | "activated"
  | "deactivated"
  | "archived"
  | "restored"
  | "login"
  | "logout"
  | "exported"
  | "imported";

export type AuditEntityType =
  | "agent"
  | "model"
  | "policy"
  | "risk"
  | "incident"
  | "control"
  | "evidence"
  | "framework"
  | "integration"
  | "organization"
  | "workspace"
  | "user"
  | "system";

export type AuditLog = {
  id: string;
  organization_id?: string | null;
  workspace_id?: string | null;

  actor_id?: string | null;
  actor_name?: string | null;
  actor_email?: string | null;

  action: AuditAction | string;
  entity_type: AuditEntityType | string;
  entity_id?: string | null;
  entity_name?: string | null;

  description?: string | null;

  previous_values?: Record<string, unknown> | null;
  new_values?: Record<string, unknown> | null;
  metadata?: Record<string, unknown> | null;

  ip_address?: string | null;
  user_agent?: string | null;
  request_id?: string | null;

  created_at: string;
};

const BASE = "/audits";

export const auditsService = {
  list(options?: RequestOptions) {
    return apiClient.get<AuditLog[]>(BASE, options);
  },

  get(id: string, options?: RequestOptions) {
    return apiClient.get<AuditLog>(`${BASE}/${id}`, options);
  },
};