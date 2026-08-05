"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
} from "react";

export type AuthorizationState = {
  permissions: ReadonlySet<string>;
};

const defaultAuthorizationState: AuthorizationState = {
  permissions: new Set<string>(),
};

const AuthorizationContext =
  createContext<AuthorizationState>(
    defaultAuthorizationState,
  );

export function AuthorizationProvider({
  children,
  permissions = [],
}: {
  children: ReactNode;
  permissions?: string[];
}) {
  const value = useMemo<AuthorizationState>(
    () => ({
      permissions: new Set(
        permissions
          .map((permission) => permission.trim())
          .filter(Boolean),
      ),
    }),
    [permissions],
  );

  return (
    <AuthorizationContext.Provider value={value}>
      {children}
    </AuthorizationContext.Provider>
  );
}

export function useAuthorization() {
  const { permissions } =
    useContext(AuthorizationContext);

  function can(permission: string): boolean {
    return (
      permissions.has("*") ||
      permissions.has(permission)
    );
  }

  function canAny(required: string[]): boolean {
    if (required.length === 0) {
      return true;
    }

    return required.some(can);
  }

  function canAll(required: string[]): boolean {
    if (required.length === 0) {
      return true;
    }

    return required.every(can);
  }

  return {
    permissions,
    can,
    canAny,
    canAll,
  };
}
