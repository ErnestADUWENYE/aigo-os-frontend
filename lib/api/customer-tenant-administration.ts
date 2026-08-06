import {
  listAccessibleOrganizations,
  listAccessibleWorkspaces,
} from "./customer-access";
import {
  listCustomerInvitations,
  listCustomerMemberships,
  listCustomerProfiles,
  type CustomerInvitation,
  type CustomerMembership,
  type CustomerProfile,
} from "./customer-dashboard";
import { apiClient } from "./client";
import type {
  OrganizationOption,
  WorkspaceOption,
} from "../tenancy/types";

export type OrganizationalUnit = {
  id: string;
  organizationId: string;
  parentUnitId: string | null;
  name: string;
  slug: string;
  description: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type OrganizationSettings = {
  organizationId: string;
  name: string;
  slug: string;
  status: string;
  industry: string | null;
  primaryRegion: string | null;
  regulatoryScope: string[];
  governanceOwnerName: string | null;
  complianceContactEmail: string | null;
};

type OrganizationalUnitApiResponse = {
  id: string;
  organization_id: string;
  parent_unit_id: string | null;
  name: string;
  slug: string;
  description: string | null;
  status: string;
  created_at: string;
  updated_at: string;
};

type OrganizationalUnitListApiResponse = {
  organization_id: string;
  organizational_units: OrganizationalUnitApiResponse[];
};

type OrganizationSettingsApiResponse = {
  organization_id: string;
  name: string;
  slug: string;
  status: string;
  industry: string | null;
  primary_region: string | null;
  regulatory_scope: string[];
  governance_owner_name: string | null;
  compliance_contact_email: string | null;
};

function mapOrganizationalUnit(
  unit: OrganizationalUnitApiResponse,
): OrganizationalUnit {
  return {
    id: unit.id,
    organizationId: unit.organization_id,
    parentUnitId: unit.parent_unit_id,
    name: unit.name,
    slug: unit.slug,
    description: unit.description,
    status: unit.status,
    createdAt: unit.created_at,
    updatedAt: unit.updated_at,
  };
}

function mapOrganizationSettings(
  settings: OrganizationSettingsApiResponse,
): OrganizationSettings {
  return {
    organizationId: settings.organization_id,
    name: settings.name,
    slug: settings.slug,
    status: settings.status,
    industry: settings.industry,
    primaryRegion: settings.primary_region,
    regulatoryScope: settings.regulatory_scope,
    governanceOwnerName:
      settings.governance_owner_name,
    complianceContactEmail:
      settings.compliance_contact_email,
  };
}

export async function listOrganizationalUnits(): Promise<
  OrganizationalUnit[]
> {
  const response =
    await apiClient.get<OrganizationalUnitListApiResponse>(
      "/customer/organizational-units",
    );

  return response.data.organizational_units.map(
    mapOrganizationalUnit,
  );
}

export async function getOrganizationSettings(): Promise<
  OrganizationSettings
> {
  const response =
    await apiClient.get<OrganizationSettingsApiResponse>(
      "/customer/settings/organization",
    );

  return mapOrganizationSettings(response.data);
}

export type TenantAdministrationSnapshot = {
  organizations: OrganizationOption[];
  workspaces: WorkspaceOption[];
  profiles: CustomerProfile[];
  memberships: CustomerMembership[];
  invitations: CustomerInvitation[];
  organizationalUnits: OrganizationalUnit[];
  organizationSettings: OrganizationSettings;
};

export async function loadTenantAdministrationSnapshot(
  organizationId: string,
): Promise<TenantAdministrationSnapshot> {
  const [
    organizations,
    workspaces,
    profiles,
    memberships,
    invitations,
    organizationalUnits,
    organizationSettings,
  ] = await Promise.all([
    listAccessibleOrganizations(),
    listAccessibleWorkspaces(organizationId),
    listCustomerProfiles(),
    listCustomerMemberships(),
    listCustomerInvitations(),
    listOrganizationalUnits(),
    getOrganizationSettings(),
  ]);

  return {
    organizations,
    workspaces,
    profiles,
    memberships,
    invitations,
    organizationalUnits,
    organizationSettings,
  };
}
