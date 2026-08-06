export type OrganizationOption = {
  id: string;
  name: string;
  slug?: string | null;
  status?: string | null;
};

export type WorkspaceOption = {
  id: string;
  organizationId: string;
  name: string;
  slug?: string | null;
  status?: string | null;
};

export type TenantSelection = {
  tenantId: string | null;
  workspaceId: string | null;
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
