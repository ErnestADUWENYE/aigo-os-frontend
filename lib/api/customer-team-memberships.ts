import { apiClient } from "./client";


export type CustomerTeamMembership = {
  id: string;
  organizationId: string;
  workspaceId: string | null;
  teamId: string;
  profileId: string;
  role: string;
  status: string;
  joinedAt: string;
  createdAt: string;
  updatedAt: string;
};


type TeamMembershipApiResponse = {
  id: string;
  organization_id: string;
  workspace_id: string | null;
  team_id: string;
  profile_id: string;
  role: string;
  status: string;
  joined_at: string;
  created_at: string;
  updated_at: string;
};


export type CreateTeamMembershipInput = {
  profileId: string;
  role?: string;
};


export type UpdateTeamMembershipInput = {
  role: string;
  status: string;
};


function mapMembership(
  item: TeamMembershipApiResponse,
): CustomerTeamMembership {
  return {
    id: item.id,
    organizationId: item.organization_id,
    workspaceId: item.workspace_id,
    teamId: item.team_id,
    profileId: item.profile_id,
    role: item.role,
    status: item.status,
    joinedAt: item.joined_at,
    createdAt: item.created_at,
    updatedAt: item.updated_at,
  };
}


export async function listTeamMemberships(
  teamId: string,
): Promise<CustomerTeamMembership[]> {
  const response = await apiClient.get<
    TeamMembershipApiResponse[]
  >(
    `/customer/teams/${teamId}/members`,
  );

  return response.data.map(mapMembership);
}


export async function createTeamMembership(
  teamId: string,
  input: CreateTeamMembershipInput,
): Promise<CustomerTeamMembership> {
  const response =
    await apiClient.post<TeamMembershipApiResponse>(
      `/customer/teams/${teamId}/members`,
      {
        profile_id: input.profileId,
        role: input.role ?? "MEMBER",
      },
    );

  return mapMembership(response.data);
}


export async function updateTeamMembership(
  teamId: string,
  membershipId: string,
  input: UpdateTeamMembershipInput,
): Promise<CustomerTeamMembership> {
  const response =
    await apiClient.patch<TeamMembershipApiResponse>(
      `/customer/teams/${teamId}/members/${membershipId}`,
      input,
    );

  return mapMembership(response.data);
}


export async function deleteTeamMembership(
  teamId: string,
  membershipId: string,
): Promise<void> {
  await apiClient.delete(
    `/customer/teams/${teamId}/members/${membershipId}`,
  );
}
