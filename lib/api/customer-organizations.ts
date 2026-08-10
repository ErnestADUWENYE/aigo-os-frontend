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

export type ProvisionCustomerOrganizationInput = {
  organizationName: string;
  organizationSlug: string;
  workspaceName: string;
  workspaceSlug: string;
};

export type ProvisionCustomerOrganizationResponse = {
  organizationId: string;
  organizationName: string;
  organizationSlug: string;
  workspaceId: string;
  workspaceName: string;
  workspaceSlug: string;
  role: string;
};

type ProvisionCustomerOrganizationApiResponse = {
  organization_id: string;
  organization_name: string;
  organization_slug: string;
  workspace_id: string;
  workspace_name: string;
  workspace_slug: string;
  role: string;
};

export async function provisionCustomerOrganization(
  input: ProvisionCustomerOrganizationInput,
): Promise<ProvisionCustomerOrganizationResponse> {
  const response =
    await apiClient.post<ProvisionCustomerOrganizationApiResponse>(
      "/customer/organizations",
      {
        organization_name: input.organizationName,
        organization_slug: input.organizationSlug,
        workspace_name: input.workspaceName,
        workspace_slug: input.workspaceSlug,
      },
    );

  return {
    organizationId: response.data.organization_id,
    organizationName: response.data.organization_name,
    organizationSlug: response.data.organization_slug,
    workspaceId: response.data.workspace_id,
    workspaceName: response.data.workspace_name,
    workspaceSlug: response.data.workspace_slug,
    role: response.data.role,
  };
}

export type CustomerAccessState =
  | "EXISTING_CUSTOMER"
  | "READY_TO_ACTIVATE"
  | "NOT_PROVISIONED";

export type CustomerAccessStatus = {
  state: CustomerAccessState;
  organizationName: string | null;
  planName: string | null;
  expiresAt: string | null;
};

type CustomerAccessStatusApiResponse = {
  state: CustomerAccessState;
  organization_name: string | null;
  plan_name: string | null;
  expires_at: string | null;
};

export async function getCustomerAccessStatus(): Promise<CustomerAccessStatus> {
  const response =
    await apiClient.get<CustomerAccessStatusApiResponse>(
      "/customer/organizations/access-status",
    );

  return {
    state: response.data.state,
    organizationName: response.data.organization_name,
    planName: response.data.plan_name,
    expiresAt: response.data.expires_at,
  };
}
