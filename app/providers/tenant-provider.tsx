"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
} from "react";

export type TenantState = {
  tenantId: string | null;
  workspaceId: string | null;
  tenantName: string | null;
  workspaceName: string | null;
};

const defaultTenantState: TenantState = {
  tenantId: null,
  workspaceId: null,
  tenantName: null,
  workspaceName: null,
};

const TenantContext =
  createContext<TenantState>(defaultTenantState);

export function TenantProvider({
  children,
  value = defaultTenantState,
}: {
  children: ReactNode;
  value?: TenantState;
}) {
  const contextValue = useMemo(
    () => value,
    [value],
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
