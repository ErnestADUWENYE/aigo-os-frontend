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
  readTenantSelectionOwner,
  writeTenantSelection,
} from "../../lib/tenancy/storage";
import type {
  OrganizationOption,
  TenantSelection,
  TenantState,
  WorkspaceOption,
} from "../../lib/tenancy/types";
import { useAuthentication } from "./authentication-provider";

const emptySelection: TenantSelection = {
  tenantId: null,
  workspaceId: null,
  tenantName: null,
  workspaceName: null,
};

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

function readUserScopedSelection(
  userId: string | null,
): TenantSelection {
  if (!userId) {
    return emptySelection;
  }

  const storedOwner =
    readTenantSelectionOwner();

  if (storedOwner !== userId) {
    return emptySelection;
  }

  return readTenantSelection();
}

function TenantStateProvider({
  children,
  value,
  userId,
}: {
  children: ReactNode;
  value?: ControlledTenantValue;
  userId: string | null;
}) {
  const [initialSelection] = useState(
    () => readUserScopedSelection(userId),
  );

  const [tenantId, setTenantId] = useState<
    string | null
  >(
    value?.tenantId ??
      initialSelection.tenantId,
  );

  const [workspaceId, setWorkspaceId] =
    useState<string | null>(
      value?.workspaceId ??
        initialSelection.workspaceId,
    );

  const [tenantName, setTenantName] =
    useState<string | null>(
      value?.tenantName ??
        initialSelection.tenantName,
    );

  const [workspaceName, setWorkspaceName] =
    useState<string | null>(
      value?.workspaceName ??
        initialSelection.workspaceName,
    );

  const [organizations, setOrganizations] =
    useState<OrganizationOption[]>([]);

  const [workspaces, setWorkspaces] =
    useState<WorkspaceOption[]>([]);

  const selectTenant = useCallback(
    (organization: OrganizationOption) => {
      setTenantId(organization.id);
      setTenantName(organization.name);
      setWorkspaceId(null);
      setWorkspaceName(null);
      setWorkspaces([]);

      writeTenantSelection(
        {
          tenantId: organization.id,
          workspaceId: null,
          tenantName: organization.name,
          workspaceName: null,
        },
        userId,
      );
    },
    [userId],
  );

  const selectWorkspace = useCallback(
    (workspace: WorkspaceOption | null) => {
      const nextWorkspaceId =
        workspace?.id ?? null;

      setWorkspaceId(nextWorkspaceId);
      setWorkspaceName(
        workspace?.name ?? null,
      );

      writeTenantSelection(
        {
          tenantId,
          workspaceId: nextWorkspaceId,
          tenantName,
          workspaceName:
            workspace?.name ?? null,
        },
        userId,
      );
    },
    [
      tenantId,
      tenantName,
      userId,
    ],
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

  const contextValue =
    useMemo<TenantState>(
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
        clearTenant,
        organizations,
        selectTenant,
        selectWorkspace,
        tenantId,
        tenantName,
        workspaceId,
        workspaceName,
        workspaces,
      ],
    );

  return (
    <TenantContext.Provider
      value={contextValue}
    >
      {children}
    </TenantContext.Provider>
  );
}

export function TenantProvider({
  children,
  value,
}: {
  children: ReactNode;
  value?: ControlledTenantValue;
}) {
  const authentication =
    useAuthentication();

  const userId =
    authentication.isLoaded &&
    authentication.isAuthenticated
      ? authentication.userId
      : null;

  const identityKey =
    authentication.isLoaded
      ? userId ?? "signed-out"
      : "loading";

  return (
    <TenantStateProvider
      key={identityKey}
      userId={userId}
      value={value}
    >
      {children}
    </TenantStateProvider>
  );
}

export function useTenant(): TenantState {
  return useContext(TenantContext);
}
