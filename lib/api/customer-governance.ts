import {
  listAdministrationAuditEvents,
  listAdministrationPermissions,
  listAdministrationResourceScopes,
  listAdministrationRoles,
  type AdministrationAuditEvent,
  type AdministrationPermission,
  type AdministrationResourceScope,
  type AdministrationRole,
} from "./customer-administration";
import { apiClient } from "./client";

export type RolePermissionAssignment = {
  id: string;
  organizationId: string;
  roleId: string;
  permissionId: string;
  effect: string;
  conditions: Record<string, unknown> | null;
  createdAt: string;
  roleName: string;
  roleSlug: string;
  permissionCode: string;
  permissionName: string;
  permissionResourceType: string;
};

type RolePermissionApiResponse = {
  id: string;
  organization_id: string;
  role_id: string;
  permission_id: string;
  effect: string;
  conditions: Record<string, unknown> | null;
  created_at: string;
  role_name: string;
  role_slug: string;
  permission_code: string;
  permission_name: string;
  permission_resource_type: string;
};

type RolePermissionListApiResponse = {
  organization_id: string;
  assignments: RolePermissionApiResponse[];
};

function mapRolePermission(
  assignment: RolePermissionApiResponse,
): RolePermissionAssignment {
  return {
    id: assignment.id,
    organizationId: assignment.organization_id,
    roleId: assignment.role_id,
    permissionId: assignment.permission_id,
    effect: assignment.effect,
    conditions: assignment.conditions,
    createdAt: assignment.created_at,
    roleName: assignment.role_name,
    roleSlug: assignment.role_slug,
    permissionCode: assignment.permission_code,
    permissionName: assignment.permission_name,
    permissionResourceType:
      assignment.permission_resource_type,
  };
}

export async function listRolePermissionAssignments(): Promise<
  RolePermissionAssignment[]
> {
  const response =
    await apiClient.get<RolePermissionListApiResponse>(
      "/customer/role-permissions",
    );

  return response.data.assignments.map(
    mapRolePermission,
  );
}

export type AccessGovernanceSnapshot = {
  roles: AdministrationRole[];
  permissions: AdministrationPermission[];
  assignments: RolePermissionAssignment[];
  resourceScopes: AdministrationResourceScope[];
  auditEvents: AdministrationAuditEvent[];
};

export async function loadAccessGovernanceSnapshot(): Promise<
  AccessGovernanceSnapshot
> {
  const [
    roles,
    permissions,
    assignments,
    resourceScopes,
    auditEvents,
  ] = await Promise.all([
    listAdministrationRoles(),
    listAdministrationPermissions(),
    listRolePermissionAssignments(),
    listAdministrationResourceScopes(),
    listAdministrationAuditEvents(10),
  ]);

  return {
    roles,
    permissions,
    assignments,
    resourceScopes,
    auditEvents,
  };
}
