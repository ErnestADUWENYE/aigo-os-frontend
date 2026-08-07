import { apiClient } from "./client";

export type AcceptInvitationRequest = {
  token: string;
  clerkUserId: string;
  email: string;
};

export type AcceptInvitationResponse = {
  invitationId: string;
  organizationId: string;
  workspaceId: string | null;
  profileId: string;
  membershipId: string;
  acceptedAt: string;
  message: string;
};

type ApiResponse = {
  invitation_id: string;
  organization_id: string;
  workspace_id: string | null;
  profile_id: string;
  membership_id: string;
  accepted_at: string;
  message: string;
};

export async function acceptInvitation(
  request: AcceptInvitationRequest,
): Promise<AcceptInvitationResponse> {
  const response = await apiClient.post<ApiResponse>(
    "/customer/invitations/accept",
    {
      token: request.token,
      clerk_user_id: request.clerkUserId,
      email: request.email,
    },
  );

  return {
    invitationId: response.data.invitation_id,
    organizationId: response.data.organization_id,
    workspaceId: response.data.workspace_id,
    profileId: response.data.profile_id,
    membershipId: response.data.membership_id,
    acceptedAt: response.data.accepted_at,
    message: response.data.message,
  };
}
