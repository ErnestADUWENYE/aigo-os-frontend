import { apiClient } from "./client";
import type {
  OrganizationOption,
  WorkspaceOption,
} from "../tenancy/types";

type OrganizationAccessApiResponse = {
  id: string;
  name: string;
  slug: string;
  status: string;
  roles: string[];
  workspace_ids: string[];
};

type OrganizationListApiResponse = {
  organizations: OrganizationAccessApiResponse[];
};

type WorkspaceAccessApiResponse = {
  id: string;
  organization_id: string;
  name: string;
  slug: string;
  status: string;
  description: string | null;
  region: string | null;
  environment: string | null;
  roles: string[];
};

type WorkspaceListApiResponse = {
  organization_id: string;
  workspaces: WorkspaceAccessApiResponse[];
};

function mapOrganization(
  organization: OrganizationAccessApiResponse,
): OrganizationOption {
  return {
    id: organization.id,
    name: organization.name,
    slug: organization.slug,
    status: organization.status,
    roles: organization.roles,
    workspaceIds: organization.workspace_ids,
  };
}

function mapWorkspace(
  workspace: WorkspaceAccessApiResponse,
): WorkspaceOption {
  return {
    id: workspace.id,
    organizationId: workspace.organization_id,
    name: workspace.name,
    slug: workspace.slug,
    status: workspace.status,
    description: workspace.description,
    region: workspace.region,
    environment: workspace.environment,
    roles: workspace.roles,
  };
}

export async function listAccessibleOrganizations(): Promise<
  OrganizationOption[]
> {
  const response =
    await apiClient.get<OrganizationListApiResponse>(
      "/customer/organizations",
    );

  return response.data.organizations.map(
    mapOrganization,
  );
}

export async function listAccessibleWorkspaces(
  organizationId: string,
): Promise<WorkspaceOption[]> {
  const response =
    await apiClient.get<WorkspaceListApiResponse>(
      "/customer/workspaces",
      {
        headers: {
          "X-Organization-ID": organizationId,
        },
      },
    );

  return response.data.workspaces.map(mapWorkspace);
}

