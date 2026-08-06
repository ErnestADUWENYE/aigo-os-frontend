import { apiClient } from "./client";

export type AdministrationRole = {
  id: string;
  organizationId: string | null;
  name: string;
  slug: string;
  description: string | null;
  permissions: string[];
  isSystemRole: boolean;
  createdAt: string;
  updatedAt: string;
};

export type AdministrationPermission = {
  id: string;
  organizationId: string | null;
  code: string;
  name: string;
  description: string | null;
  resourceType: string;
  actions: string[];
  isSystemPermission: boolean;
  status: string;
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};

export type AdministrationResourceScope = {
  id: string;
  organizationId: string;
  workspaceId: string | null;
  roleId: string | null;
  profileId: string | null;
  permissionId: string | null;
  resourceType: string;
  resourceId: string | null;
  actions: string[];
  effect: string;
  status: string;
  conditions: Record<string, unknown>;
  expiresAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type AdministrationMembership = {
  id: string;
  organizationId: string;
  workspaceId: string | null;
  profileId: string;
  role: string;
  status: string;
  profileName: string | null;
  profileEmail: string;
};

export type AdministrationInvitation = {
  id: string;
  organizationId: string;
  email: string;
  role: string;
  status: string;
  expiresAt: string;
  createdAt: string;
};

export type AdministrationAuditEvent = {
  id: string;
  organizationId: string;
  workspaceId: string | null;
  eventType: string;
  entityType: string;
  entityId: string | null;
  actorProfileId: string | null;
  actorName: string | null;
  actorEmail: string | null;
  summary: string;
  metadata: Record<string, unknown>;
  createdAt: string;
};

type RoleApiResponse = {
  id: string;
  organization_id: string | null;
  name: string;
  slug: string;
  description: string | null;
  permissions: string[];
  is_system_role: boolean;
  created_at: string;
  updated_at: string;
};

type RoleListApiResponse = {
  organization_id: string;
  roles: RoleApiResponse[];
};

type PermissionApiResponse = {
  id: string;
  organization_id: string | null;
  code: string;
  name: string;
  description: string | null;
  resource_type: string;
  actions: string[];
  is_system_permission: boolean;
  status: string;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
};

type PermissionListApiResponse = {
  organization_id: string;
  permissions: PermissionApiResponse[];
};

type ResourceScopeApiResponse = {
  id: string;
  organization_id: string;
  workspace_id: string | null;
  role_id: string | null;
  profile_id: string | null;
  permission_id: string | null;
  resource_type: string;
  resource_id: string | null;
  actions: string[];
  effect: string;
  status: string;
  conditions: Record<string, unknown>;
  expires_at: string | null;
  created_at: string;
  updated_at: string;
};

type ResourceScopeListApiResponse = {
  organization_id: string;
  resource_scopes: ResourceScopeApiResponse[];
};

type MembershipApiResponse = {
  id: string;
  organization_id: string;
  workspace_id: string | null;
  profile_id: string;
  role: string;
  status: string;
  profile_name: string | null;
  profile_email: string;
};

type MembershipListApiResponse = {
  organization_id: string;
  workspace_id: string | null;
  memberships: MembershipApiResponse[];
};

type InvitationApiResponse = {
  id: string;
  organization_id: string;
  email: string;
  role: string;
  status: string;
  expires_at: string;
  created_at: string;
};

type InvitationListApiResponse = {
  organization_id: string;
  invitations: InvitationApiResponse[];
};

type AuditEventApiResponse = {
  id: string;
  organization_id: string;
  workspace_id: string | null;
  event_type: string;
  entity_type: string;
  entity_id: string | null;
  actor_profile_id: string | null;
  actor_name: string | null;
  actor_email: string | null;
  summary: string;
  metadata: Record<string, unknown>;
  created_at: string;
};

type AuditListApiResponse = {
  organization_id: string;
  workspace_id: string | null;
  events: AuditEventApiResponse[];
};

function mapRole(
  role: RoleApiResponse,
): AdministrationRole {
  return {
    id: role.id,
    organizationId: role.organization_id,
    name: role.name,
    slug: role.slug,
    description: role.description,
    permissions: role.permissions,
    isSystemRole: role.is_system_role,
    createdAt: role.created_at,
    updatedAt: role.updated_at,
  };
}

function mapPermission(
  permission: PermissionApiResponse,
): AdministrationPermission {
  return {
    id: permission.id,
    organizationId: permission.organization_id,
    code: permission.code,
    name: permission.name,
    description: permission.description,
    resourceType: permission.resource_type,
    actions: permission.actions,
    isSystemPermission:
      permission.is_system_permission,
    status: permission.status,
    metadata: permission.metadata,
    createdAt: permission.created_at,
    updatedAt: permission.updated_at,
  };
}

function mapResourceScope(
  scope: ResourceScopeApiResponse,
): AdministrationResourceScope {
  return {
    id: scope.id,
    organizationId: scope.organization_id,
    workspaceId: scope.workspace_id,
    roleId: scope.role_id,
    profileId: scope.profile_id,
    permissionId: scope.permission_id,
    resourceType: scope.resource_type,
    resourceId: scope.resource_id,
    actions: scope.actions,
    effect: scope.effect,
    status: scope.status,
    conditions: scope.conditions,
    expiresAt: scope.expires_at,
    createdAt: scope.created_at,
    updatedAt: scope.updated_at,
  };
}

function mapMembership(
  membership: MembershipApiResponse,
): AdministrationMembership {
  return {
    id: membership.id,
    organizationId: membership.organization_id,
    workspaceId: membership.workspace_id,
    profileId: membership.profile_id,
    role: membership.role,
    status: membership.status,
    profileName: membership.profile_name,
    profileEmail: membership.profile_email,
  };
}

function mapInvitation(
  invitation: InvitationApiResponse,
): AdministrationInvitation {
  return {
    id: invitation.id,
    organizationId: invitation.organization_id,
    email: invitation.email,
    role: invitation.role,
    status: invitation.status,
    expiresAt: invitation.expires_at,
    createdAt: invitation.created_at,
  };
}

function mapAuditEvent(
  event: AuditEventApiResponse,
): AdministrationAuditEvent {
  return {
    id: event.id,
    organizationId: event.organization_id,
    workspaceId: event.workspace_id,
    eventType: event.event_type,
    entityType: event.entity_type,
    entityId: event.entity_id,
    actorProfileId: event.actor_profile_id,
    actorName: event.actor_name,
    actorEmail: event.actor_email,
    summary: event.summary,
    metadata: event.metadata,
    createdAt: event.created_at,
  };
}

export async function listAdministrationRoles(): Promise<
  AdministrationRole[]
> {
  const response =
    await apiClient.get<RoleListApiResponse>(
      "/customer/roles",
    );

  return response.data.roles.map(mapRole);
}

export async function listAdministrationPermissions(): Promise<
  AdministrationPermission[]
> {
  const response =
    await apiClient.get<PermissionListApiResponse>(
      "/customer/permissions",
    );

  return response.data.permissions.map(
    mapPermission,
  );
}

export async function listAdministrationResourceScopes(): Promise<
  AdministrationResourceScope[]
> {
  const response =
    await apiClient.get<ResourceScopeListApiResponse>(
      "/customer/resource-scopes",
    );

  return response.data.resource_scopes.map(
    mapResourceScope,
  );
}

export async function listAdministrationMemberships(): Promise<
  AdministrationMembership[]
> {
  const response =
    await apiClient.get<MembershipListApiResponse>(
      "/customer/memberships",
    );

  return response.data.memberships.map(
    mapMembership,
  );
}

export async function listAdministrationInvitations(): Promise<
  AdministrationInvitation[]
> {
  const response =
    await apiClient.get<InvitationListApiResponse>(
      "/customer/invitations",
    );

  return response.data.invitations.map(
    mapInvitation,
  );
}

export async function listAdministrationAuditEvents(
  limit = 8,
): Promise<AdministrationAuditEvent[]> {
  const response =
    await apiClient.get<AuditListApiResponse>(
      "/customer/audit",
      {
        params: {
          limit,
          offset: 0,
        },
      },
    );

  return response.data.events.map(mapAuditEvent);
}
