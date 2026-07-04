import type { IdentityUser, UserRole } from "@/types";

export function isPrivilegedRole(role?: UserRole | string) {
  return role === "owner" || role === "admin";
}

export function getDisplayName(user?: Partial<IdentityUser> | null) {
  if (!user) return "Unknown user";

  return user.name || user.email || "Unknown user";
}

export function getUserInitials(user?: Partial<IdentityUser> | null) {
  const name = getDisplayName(user);

  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}