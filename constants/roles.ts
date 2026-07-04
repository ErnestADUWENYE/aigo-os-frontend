import type { Permission, UserRole } from "@/types";

export const ROLE_LABELS: Record<UserRole, string> = {
  owner: "Owner",
  admin: "Administrator",
  governance_lead: "Governance Lead",
  risk_manager: "Risk Manager",
  compliance_officer: "Compliance Officer",
  security_analyst: "Security Analyst",
  reviewer: "Reviewer",
  developer: "Developer",
  auditor: "Auditor",
  viewer: "Viewer",
};

export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  owner: ["admin:all"],

  admin: ["admin:all"],

  governance_lead: [
    "workspace:read",
    "agents:read",
    "systems:read",
    "models:read",
    "policies:read",
    "policies:write",
    "reviews:read",
    "reviews:write",
    "risks:read",
    "risks:write",
    "controls:read",
    "controls:write",
    "evidence:read",
    "evidence:write",
    "reports:read",
    "reports:write",
  ],

  risk_manager: [
    "workspace:read",
    "agents:read",
    "systems:read",
    "risks:read",
    "risks:write",
    "controls:read",
    "evidence:read",
    "incidents:read",
    "alerts:read",
    "reports:read",
  ],

  compliance_officer: [
    "workspace:read",
    "policies:read",
    "controls:read",
    "controls:write",
    "evidence:read",
    "evidence:write",
    "audit:read",
    "reports:read",
    "reports:write",
  ],

  security_analyst: [
    "workspace:read",
    "agents:read",
    "systems:read",
    "incidents:read",
    "incidents:write",
    "alerts:read",
    "alerts:write",
    "audit:read",
  ],

  reviewer: [
    "workspace:read",
    "reviews:read",
    "reviews:write",
    "agents:read",
    "policies:read",
  ],

  developer: [
    "workspace:read",
    "agents:read",
    "agents:write",
    "systems:read",
    "models:read",
    "models:write",
    "policies:read",
    "enforcement:read",
  ],

  auditor: [
    "workspace:read",
    "agents:read",
    "systems:read",
    "models:read",
    "policies:read",
    "controls:read",
    "evidence:read",
    "audit:read",
    "reports:read",
  ],

  viewer: [
    "workspace:read",
    "agents:read",
    "systems:read",
    "models:read",
    "policies:read",
    "reviews:read",
    "risks:read",
    "controls:read",
    "evidence:read",
    "incidents:read",
    "alerts:read",
    "reports:read",
  ],
};