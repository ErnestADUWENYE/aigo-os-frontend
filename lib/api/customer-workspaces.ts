import { apiClient } from "./client";
import type {
  WorkspaceOption,
} from "../tenancy/types";

type WorkspaceApiResponse = {
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
  workspaces: WorkspaceApiResponse[];
};

export async function listCustomerWorkspaces(): Promise<
  WorkspaceOption[]
> {
  const response =
    await apiClient.get<WorkspaceListApiResponse>(
      "/customer/workspaces",
    );

  return response.data.workspaces.map(
    (workspace) => ({
      id: workspace.id,
      organizationId: workspace.organization_id,
      name: workspace.name,
      slug: workspace.slug,
      status: workspace.status,
      description: workspace.description,
      region: workspace.region,
      environment: workspace.environment,
      roles: workspace.roles,
    }),
  );
}
