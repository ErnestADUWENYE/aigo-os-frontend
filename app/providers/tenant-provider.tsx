"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import {
  clearTenantSelection,
  readTenantSelection,
  writeTenantSelection,
} from "../../lib/tenancy/storage";
import type {
  OrganizationOption,
  TenantState,
  WorkspaceOption,
} from "../../lib/tenancy/types";

const emptyState: TenantState = {
  tenantId: null,
  workspaceId: null,
  tenantName: null,
  workspaceName: null,
  organizations: [],
  workspaces: [],
  isLoaded: true,
  selectTenant: () => undefined,
  selectWorkspace: () => undefined,
  setOrganizations: () => undefined,
  setWorkspaces: () => undefined,
  clearTenant: () => undefined,
};

const TenantContext =
  createContext<TenantState>(emptyState);

type ControlledTenantValue = {
  tenantId: string | null;
  workspaceId: string | null;
  tenantName: string | null;
  workspaceName: string | null;
};

export function TenantProvider({
  children,
  value,
}: {
  children: ReactNode;
  value?: ControlledTenantValue;
}) {
  const [initialSelection] = useState(
    readTenantSelection,
  );

  const [tenantId, setTenantId] = useState<
    string | null
  >(value?.tenantId ?? initialSelection.tenantId);

  const [workspaceId, setWorkspaceId] = useState<
    string | null
  >(
    value?.workspaceId ??
      initialSelection.workspaceId,
  );

  const [tenantName, setTenantName] = useState<
    string | null
  >(value?.tenantName ?? null);

  const [workspaceName, setWorkspaceName] =
    useState<string | null>(
      value?.workspaceName ?? null,
    );

  const [organizations, setOrganizations] =
    useState<OrganizationOption[]>([]);

  const [workspaces, setWorkspaces] = useState<
    WorkspaceOption[]
  >([]);

  const selectTenant = useCallback(
    (organization: OrganizationOption) => {
      setTenantId(organization.id);
      setTenantName(organization.name);
      setWorkspaceId(null);
      setWorkspaceName(null);
      setWorkspaces([]);

      writeTenantSelection({
        tenantId: organization.id,
        workspaceId: null,
      });
    },
    [],
  );

  const selectWorkspace = useCallback(
    (workspace: WorkspaceOption | null) => {
      const nextWorkspaceId = workspace?.id ?? null;

      setWorkspaceId(nextWorkspaceId);
      setWorkspaceName(workspace?.name ?? null);

      writeTenantSelection({
        tenantId,
        workspaceId: nextWorkspaceId,
      });
    },
    [tenantId],
  );

  const clearTenant = useCallback(() => {
    setTenantId(null);
    setWorkspaceId(null);
    setTenantName(null);
    setWorkspaceName(null);
    setOrganizations([]);
    setWorkspaces([]);
    clearTenantSelection();
  }, []);

  const contextValue = useMemo<TenantState>(
    () => ({
      tenantId,
      workspaceId,
      tenantName,
      workspaceName,
      organizations,
      workspaces,
      isLoaded: true,
      selectTenant,
      selectWorkspace,
      setOrganizations,
      setWorkspaces,
      clearTenant,
    }),
    [
      organizations,
      selectTenant,
      selectWorkspace,
      tenantId,
      tenantName,
      workspaceId,
      workspaceName,
      workspaces,
      clearTenant,
    ],
  );

  return (
    <TenantContext.Provider value={contextValue}>
      {children}
    </TenantContext.Provider>
  );
}

export function useTenant(): TenantState {
  return useContext(TenantContext);
}
