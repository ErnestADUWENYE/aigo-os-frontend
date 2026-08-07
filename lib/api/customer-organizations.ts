import { apiClient } from "./client";
import type {
  OrganizationOption,
} from "../tenancy/types";

type OrganizationApiResponse = {
  id: string;
  name: string;
  slug: string;
  status: string;
  roles: string[];
  workspace_ids: string[];
};

type OrganizationListApiResponse = {
  organizations: OrganizationApiResponse[];
};

export async function listCustomerOrganizations(): Promise<
  OrganizationOption[]
> {
  const response =
    await apiClient.get<OrganizationListApiResponse>(
      "/customer/organizations",
    );

  return response.data.organizations.map(
    (organization) => ({
      id: organization.id,
      name: organization.name,
      slug: organization.slug,
      status: organization.status,
      roles: organization.roles,
      workspaceIds: organization.workspace_ids,
    }),
  );
}
