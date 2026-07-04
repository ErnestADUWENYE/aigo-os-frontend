import type { Permission } from "@/types";

export const PERMISSIONS: Record<Permission, Permission> = {
  "admin:all": "admin:all",

  "workspace:read": "workspace:read",
  "workspace:write": "workspace:write",

  "users:read": "users:read",
  "users:write": "users:write",

  "agents:read": "agents:read",
  "agents:write": "agents:write",

  "systems:read": "systems:read",
  "systems:write": "systems:write",

  "models:read": "models:read",
  "models:write": "models:write",

  "policies:read": "policies:read",
  "policies:write": "policies:write",

  "enforcement:read": "enforcement:read",
  "enforcement:write": "enforcement:write",

  "reviews:read": "reviews:read",
  "reviews:write": "reviews:write",

  "risks:read": "risks:read",
  "risks:write": "risks:write",

  "controls:read": "controls:read",
  "controls:write": "controls:write",

  "evidence:read": "evidence:read",
  "evidence:write": "evidence:write",

  "incidents:read": "incidents:read",
  "incidents:write": "incidents:write",

  "alerts:read": "alerts:read",
  "alerts:write": "alerts:write",

  "audit:read": "audit:read",

  "reports:read": "reports:read",
  "reports:write": "reports:write",

  "settings:read": "settings:read",
  "settings:write": "settings:write",
};