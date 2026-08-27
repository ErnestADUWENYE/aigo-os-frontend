export type OrganizationOption = {
  id: string;
  name: string;
  slug: string;
  status: string;
  roles: string[];
  workspaceIds: string[];
};

export type WorkspaceOption = {
  id: string;
  organizationId: string;
  name: string;
  slug: string;
  status: string;
  description: string | null;
  region: string | null;
  environment: string | null;
  roles: string[];
};

export type TenantSelection = {
  tenantId: string | null;
  workspaceId: string | null;
  tenantName: string | null;
  workspaceName: string | null;
};

export type TenantState = TenantSelection & {
  tenantName: string | null;
  workspaceName: string | null;
  organizations: OrganizationOption[];
  workspaces: WorkspaceOption[];
  isLoaded: boolean;

  selectTenant: (
    organization: OrganizationOption,
  ) => void;

  selectWorkspace: (
    workspace: WorkspaceOption | null,
  ) => void;

  setOrganizations: (
    organizations: OrganizationOption[],
  ) => void;

  setWorkspaces: (
    workspaces: WorkspaceOption[],
  ) => void;

  clearTenant: () => void;
};


