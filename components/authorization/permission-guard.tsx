"use client";

import type { ReactNode } from "react";

import { useAuthorization } from "../../app/providers/authorization-provider";

type PermissionGuardProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

export function PermissionGuard({
  children,
  fallback = null,
  permission,
}: PermissionGuardProps & {
  permission: string;
}) {
  const authorization = useAuthorization();

  if (!authorization.isLoaded) {
    return null;
  }

  return authorization.can(permission)
    ? children
    : fallback;
}

export function AnyPermissionGuard({
  children,
  fallback = null,
  permissions,
}: PermissionGuardProps & {
  permissions: string[];
}) {
  const authorization = useAuthorization();

  if (!authorization.isLoaded) {
    return null;
  }

  return authorization.canAny(permissions)
    ? children
    : fallback;
}

export function AllPermissionsGuard({
  children,
  fallback = null,
  permissions,
}: PermissionGuardProps & {
  permissions: string[];
}) {
  const authorization = useAuthorization();

  if (!authorization.isLoaded) {
    return null;
  }

  return authorization.canAll(permissions)
    ? children
    : fallback;
}
