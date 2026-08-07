"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
} from "react";

export type AuthorizationState = {
  permissions: ReadonlySet<string>;
  roleIds: readonly string[];
  roleSlugs: readonly string[];
  profileId: string | null;
  organizationId: string | null;
  workspaceId: string | null;
  clerkUserId: string | null;
  isLoaded: boolean;
  isLoading: boolean;
  isError: boolean;
};

const defaultAuthorizationState: AuthorizationState = {
  permissions: new Set<string>(),
  roleIds: [],
  roleSlugs: [],
  profileId: null,
  organizationId: null,
  workspaceId: null,
  clerkUserId: null,
  isLoaded: false,
  isLoading: false,
  isError: false,
};

const AuthorizationContext =
  createContext<AuthorizationState>(
    defaultAuthorizationState,
  );

export function AuthorizationProvider({
  children,
  permissions = [],
  roleIds = [],
  roleSlugs = [],
  profileId = null,
  organizationId = null,
  workspaceId = null,
  clerkUserId = null,
  isLoaded = true,
  isLoading = false,
  isError = false,
}: {
  children: ReactNode;
  permissions?: string[];
  roleIds?: string[];
  roleSlugs?: string[];
  profileId?: string | null;
  organizationId?: string | null;
  workspaceId?: string | null;
  clerkUserId?: string | null;
  isLoaded?: boolean;
  isLoading?: boolean;
  isError?: boolean;
}) {
  const value = useMemo<AuthorizationState>(
    () => ({
      permissions: new Set(
        permissions
          .map((permission) => permission.trim())
          .filter(Boolean),
      ),
      roleIds,
      roleSlugs,
      profileId,
      organizationId,
      workspaceId,
      clerkUserId,
      isLoaded,
      isLoading,
      isError,
    }),
    [
      clerkUserId,
      isError,
      isLoaded,
      isLoading,
      organizationId,
      permissions,
      profileId,
      roleIds,
      roleSlugs,
      workspaceId,
    ],
  );

  return (
    <AuthorizationContext.Provider value={value}>
      {children}
    </AuthorizationContext.Provider>
  );
}

export function useAuthorization() {
  const context = useContext(AuthorizationContext);

  const can = useCallback(
    (permission: string): boolean =>
      context.permissions.has("*") ||
      context.permissions.has(permission),
    [context.permissions],
  );

  const canAny = useCallback(
    (required: string[]): boolean => {
      if (required.length === 0) {
        return true;
      }

      return required.some(can);
    },
    [can],
  );

  const canAll = useCallback(
    (required: string[]): boolean => {
      if (required.length === 0) {
        return true;
      }

      return required.every(can);
    },
    [can],
  );

  return {
    ...context,
    can,
    canAny,
    canAll,
  };
}
