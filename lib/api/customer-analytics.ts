import { apiClient } from "./client";

export type AnalyticsTrendPoint = {
  date: string;
  auditEvents: number;
  securityEvents: number;
  governanceEvents: number;
  assuranceEvents: number;
};

export type CustomerAnalytics = {
  organizationId: string;
  workspaceId: string | null;
  totalProfiles: number;
  activeProfiles: number;
  totalMemberships: number;
  activeMemberships: number;
  totalWorkspaces: number;
  activeWorkspaces: number;
  totalRoles: number;
  totalPermissions: number;
  activePermissions: number;
  pendingInvitations: number;
  auditEventsLast24h: number;
  securityEventsLast24h: number;
  governanceEventsLast24h: number;
  assuranceEventsLast24h: number;
  activityTrend: AnalyticsTrendPoint[];
};

type AnalyticsTrendPointApiResponse = {
  date: string;
  audit_events: number;
  security_events: number;
  governance_events: number;
  assurance_events: number;
};

type CustomerAnalyticsApiResponse = {
  organization_id: string;
  workspace_id: string | null;
  total_profiles: number;
  active_profiles: number;
  total_memberships: number;
  active_memberships: number;
  total_workspaces: number;
  active_workspaces: number;
  total_roles: number;
  total_permissions: number;
  active_permissions: number;
  pending_invitations: number;
  audit_events_last_24h: number;
  security_events_last_24h: number;
  governance_events_last_24h: number;
  assurance_events_last_24h: number;
  activity_trend: AnalyticsTrendPointApiResponse[];
};

export async function getCustomerAnalytics(): Promise<CustomerAnalytics> {
  const response =
    await apiClient.get<CustomerAnalyticsApiResponse>(
      "/customer/analytics",
    );

  return {
    organizationId: response.data.organization_id,
    workspaceId: response.data.workspace_id,
    totalProfiles: response.data.total_profiles,
    activeProfiles: response.data.active_profiles,
    totalMemberships: response.data.total_memberships,
    activeMemberships: response.data.active_memberships,
    totalWorkspaces: response.data.total_workspaces,
    activeWorkspaces: response.data.active_workspaces,
    totalRoles: response.data.total_roles,
    totalPermissions: response.data.total_permissions,
    activePermissions: response.data.active_permissions,
    pendingInvitations: response.data.pending_invitations,
    auditEventsLast24h:
      response.data.audit_events_last_24h,
    securityEventsLast24h:
      response.data.security_events_last_24h,
    governanceEventsLast24h:
      response.data.governance_events_last_24h,
    assuranceEventsLast24h:
      response.data.assurance_events_last_24h,
    activityTrend: response.data.activity_trend.map(
      (point) => ({
        date: point.date,
        auditEvents: point.audit_events,
        securityEvents: point.security_events,
        governanceEvents: point.governance_events,
        assuranceEvents: point.assurance_events,
      }),
    ),
  };
}
