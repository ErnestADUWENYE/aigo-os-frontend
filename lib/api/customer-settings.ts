import { apiClient } from "./client";
import type { ThemeId } from "../../design-system/themes/types";

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

export type OrganizationSettingsUpdate = {
  name?: string;
  industry?: string | null;
  primaryRegion?: string | null;
  regulatoryScope?: string[];
  governanceOwnerName?: string | null;
  complianceContactEmail?: string | null;
};

export type OrganizationAppearanceSettings = {
  organizationId: string;
  defaultBackgroundDesign: ThemeId;
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

type OrganizationAppearanceApiResponse = {
  organization_id: string;
  default_background_design: ThemeId;
};

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

function mapAppearanceSettings(
  settings: OrganizationAppearanceApiResponse,
): OrganizationAppearanceSettings {
  return {
    organizationId: settings.organization_id,
    defaultBackgroundDesign:
      settings.default_background_design,
  };
}

export async function getCustomerOrganizationSettings(): Promise<
  OrganizationSettings
> {
  const response =
    await apiClient.get<OrganizationSettingsApiResponse>(
      "/customer/settings/organization",
    );

  return mapOrganizationSettings(response.data);
}

export async function updateCustomerOrganizationSettings(
  input: OrganizationSettingsUpdate,
): Promise<OrganizationSettings> {
  const response =
    await apiClient.patch<OrganizationSettingsApiResponse>(
      "/customer/settings/organization",
      {
        name: input.name,
        industry: input.industry,
        primary_region: input.primaryRegion,
        regulatory_scope: input.regulatoryScope,
        governance_owner_name:
          input.governanceOwnerName,
        compliance_contact_email:
          input.complianceContactEmail,
      },
    );

  return mapOrganizationSettings(response.data);
}

export async function getCustomerAppearanceSettings(): Promise<
  OrganizationAppearanceSettings
> {
  const response =
    await apiClient.get<OrganizationAppearanceApiResponse>(
      "/customer/settings/appearance",
    );

  return mapAppearanceSettings(response.data);
}

export async function updateCustomerAppearanceSettings(
  themeId: ThemeId,
): Promise<OrganizationAppearanceSettings> {
  const response =
    await apiClient.patch<OrganizationAppearanceApiResponse>(
      "/customer/settings/appearance",
      {
        default_background_design: themeId,
      },
    );

  return mapAppearanceSettings(response.data);
}
