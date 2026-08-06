import { apiClient } from "./client";

export type CustomerProfile = {
  id: string;
  organizationId: string | null;
  fullName: string | null;
  email: string;
  avatarUrl: string | null;
  jobTitle: string | null;
  department: string | null;
  isActive: boolean;
  clerkUserId: string | null;
  authProvider: string;
  defaultOrganizationId: string | null;
  defaultWorkspaceId: string | null;
};

export type CustomerMembership = {
  id: string;
  organizationId: string;
  workspaceId: string | null;
  profileId: string;
  role: string;
  status: string;
  profileName: string | null;
  profileEmail: string;
};

export type CustomerInvitation = {
  id: string;
  organizationId: string;
  email: string;
  role: string;
  status: string;
  expiresAt: string;
  createdAt: string;
};

export type CustomerAuditEvent = {
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

type ProfileApiResponse = {
  id: string;
  organization_id: string | null;
  full_name: string | null;
  email: string;
  avatar_url: string | null;
  job_title: string | null;
  department: string | null;
  is_active: boolean;
  clerk_user_id: string | null;
  auth_provider: string;
  default_organization_id: string | null;
  default_workspace_id: string | null;
};

type ProfileListApiResponse = {
  organization_id: string;
  profiles: ProfileApiResponse[];
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

function mapProfile(
  profile: ProfileApiResponse,
): CustomerProfile {
  return {
    id: profile.id,
    organizationId: profile.organization_id,
    fullName: profile.full_name,
    email: profile.email,
    avatarUrl: profile.avatar_url,
    jobTitle: profile.job_title,
    department: profile.department,
    isActive: profile.is_active,
    clerkUserId: profile.clerk_user_id,
    authProvider: profile.auth_provider,
    defaultOrganizationId:
      profile.default_organization_id,
    defaultWorkspaceId:
      profile.default_workspace_id,
  };
}

function mapMembership(
  membership: MembershipApiResponse,
): CustomerMembership {
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
): CustomerInvitation {
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
): CustomerAuditEvent {
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

export async function listCustomerProfiles(): Promise<
  CustomerProfile[]
> {
  const response =
    await apiClient.get<ProfileListApiResponse>(
      "/customer/profiles",
    );

  return response.data.profiles.map(mapProfile);
}

export async function listCustomerMemberships(): Promise<
  CustomerMembership[]
> {
  const response =
    await apiClient.get<MembershipListApiResponse>(
      "/customer/memberships",
    );

  return response.data.memberships.map(
    mapMembership,
  );
}

export async function listCustomerInvitations(): Promise<
  CustomerInvitation[]
> {
  const response =
    await apiClient.get<InvitationListApiResponse>(
      "/customer/invitations",
    );

  return response.data.invitations.map(
    mapInvitation,
  );
}

export async function listRecentCustomerAuditEvents(
  limit = 6,
): Promise<CustomerAuditEvent[]> {
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
