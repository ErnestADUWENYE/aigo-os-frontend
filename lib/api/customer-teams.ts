import { apiClient } from "./client";


export type CustomerTeam = {
  id: string;
  organizationId: string;
  workspaceId: string | null;
  organizationalUnitId: string | null;
  name: string;
  slug: string;
  description: string | null;
  ownerProfileId: string | null;
  createdByProfileId: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
};


type CustomerTeamApiResponse = {
  id: string;
  organization_id: string;
  workspace_id: string | null;
  organizational_unit_id: string | null;
  name: string;
  slug: string;
  description: string | null;
  owner_profile_id: string | null;
  created_by_profile_id: string | null;
  status: string;
  created_at: string;
  updated_at: string;
};


export type CreateCustomerTeamInput = {
  name: string;
  slug: string;
  description?: string | null;
  workspaceId?: string | null;
  organizationalUnitId?: string | null;
  ownerProfileId?: string | null;
};


export type UpdateCustomerTeamInput = {
  name?: string;
  description?: string | null;
  workspaceId?: string | null;
  organizationalUnitId?: string | null;
  ownerProfileId?: string | null;
  status?: string;
};


function mapTeam(
  team: CustomerTeamApiResponse,
): CustomerTeam {
  return {
    id: team.id,
    organizationId: team.organization_id,
    workspaceId: team.workspace_id,
    organizationalUnitId: team.organizational_unit_id,
    name: team.name,
    slug: team.slug,
    description: team.description,
    ownerProfileId: team.owner_profile_id,
    createdByProfileId: team.created_by_profile_id,
    status: team.status,
    createdAt: team.created_at,
    updatedAt: team.updated_at,
  };
}


export async function listCustomerTeams(): Promise<
  CustomerTeam[]
> {
  const response =
    await apiClient.get<CustomerTeamApiResponse[]>(
      "/customer/teams",
    );

  return response.data.map(mapTeam);
}


export async function getCustomerTeam(
  teamId: string,
): Promise<CustomerTeam> {
  const response =
    await apiClient.get<CustomerTeamApiResponse>(
      `/customer/teams/${teamId}`,
    );

  return mapTeam(response.data);
}


export async function createCustomerTeam(
  input: CreateCustomerTeamInput,
): Promise<CustomerTeam> {
  const response =
    await apiClient.post<CustomerTeamApiResponse>(
      "/customer/teams",
      {
        name: input.name,
        slug: input.slug,
        description: input.description ?? null,
        workspace_id: input.workspaceId ?? null,
        organizational_unit_id:
          input.organizationalUnitId ?? null,
        owner_profile_id: input.ownerProfileId ?? null,
      },
    );

  return mapTeam(response.data);
}


export async function updateCustomerTeam(
  teamId: string,
  input: UpdateCustomerTeamInput,
): Promise<CustomerTeam> {
  const payload: Record<string, unknown> = {};

  if (input.name !== undefined) {
    payload.name = input.name;
  }

  if (input.description !== undefined) {
    payload.description = input.description;
  }

  if (input.workspaceId !== undefined) {
    payload.workspace_id = input.workspaceId;
  }

  if (input.organizationalUnitId !== undefined) {
    payload.organizational_unit_id =
      input.organizationalUnitId;
  }

  if (input.ownerProfileId !== undefined) {
    payload.owner_profile_id = input.ownerProfileId;
  }

  if (input.status !== undefined) {
    payload.status = input.status;
  }

  const response =
    await apiClient.patch<CustomerTeamApiResponse>(
      `/customer/teams/${teamId}`,
      payload,
    );

  return mapTeam(response.data);
}


export async function deleteCustomerTeam(
  teamId: string,
): Promise<void> {
  await apiClient.delete(
    `/customer/teams/${teamId}`,
  );
}
