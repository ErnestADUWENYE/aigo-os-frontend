import { apiClient } from "./client";

export type CustomerAccessContext = {
  organizationId: string;
  workspaceId: string | null;
  profileId: string;
  clerkUserId: string;
  permissions: string[];
  roleIds: string[];
  roleSlugs: string[];
};

type CustomerAccessContextApiResponse = {
  organization_id: string;
  workspace_id: string | null;
  profile_id: string;
  clerk_user_id: string;
  permissions: string[];
  role_ids: string[];
  role_slugs: string[];
};

export async function getCustomerAccessContext({
  accessToken,
  organizationId,
  workspaceId,
}: {
  accessToken: string;
  organizationId: string;
  workspaceId: string | null;
}): Promise<CustomerAccessContext> {
  const response =
    await apiClient.get<CustomerAccessContextApiResponse>(
      "/customer/context",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "X-Organization-ID": organizationId,
          ...(workspaceId
            ? {
                "X-Workspace-ID": workspaceId,
              }
            : {}),
        },
      },
    );

  return {
    organizationId: response.data.organization_id,
    workspaceId: response.data.workspace_id,
    profileId: response.data.profile_id,
    clerkUserId: response.data.clerk_user_id,
    permissions: response.data.permissions,
    roleIds: response.data.role_ids,
    roleSlugs: response.data.role_slugs,
  };
}
