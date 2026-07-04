export type OrganizationStatus = "active" | "suspended" | "archived";

export type OrganizationTier = "free" | "startup" | "business" | "enterprise";

export type Organization = {
  id: string;
  name: string;
  slug: string;
  status: OrganizationStatus;
  tier: OrganizationTier;
  industry?: string;
  region?: string;
  country?: string;
  compliance_frameworks: string[];
  created_at: string;
  updated_at?: string;
};