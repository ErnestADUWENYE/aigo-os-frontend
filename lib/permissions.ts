import { ROLE_PERMISSIONS } from "@/constants";
import type { Permission, UserRole } from "@/types";

export function hasPermission(
  role: UserRole | string | undefined,
  permission: Permission
) {
  if (!role) return false;

  if (role === "owner" || role === "admin") return true;

  const permissions = ROLE_PERMISSIONS[role as UserRole];

  if (!permissions) return false;

  return permissions.includes(permission);
}

export function hasAnyPermission(
  role: UserRole | string | undefined,
  permissions: Permission[]
) {
  return permissions.some((permission) => hasPermission(role, permission));
}

export function hasAllPermissions(
  role: UserRole | string | undefined,
  permissions: Permission[]
) {
  return permissions.every((permission) => hasPermission(role, permission));
}