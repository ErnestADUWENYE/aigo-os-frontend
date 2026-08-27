import { apiClient } from "./client";


export type CustomerBranding = {
  organizationId: string;
  organizationDisplayName: string | null;
  organizationLogoAssetId: string | null;
  organizationLogoAltText: string | null;
};


type BrandingApiResponse = {
  organization_id: string;
  organization_display_name: string | null;
  organization_logo_asset_id: string | null;
  organization_logo_alt_text: string | null;
};


function mapBranding(
  value: BrandingApiResponse,
): CustomerBranding {
  return {
    organizationId: value.organization_id,
    organizationDisplayName:
      value.organization_display_name,
    organizationLogoAssetId:
      value.organization_logo_asset_id,
    organizationLogoAltText:
      value.organization_logo_alt_text,
  };
}


export async function getCustomerBranding(): Promise<CustomerBranding> {
  const response =
    await apiClient.get<BrandingApiResponse>(
      "/customer/settings/branding",
    );

  return mapBranding(response.data);
}


export async function updateCustomerBranding(
  input: {
    organizationDisplayName?: string | null;
    organizationLogoAssetId?: string | null;
    organizationLogoAltText?: string | null;
  },
): Promise<CustomerBranding> {
  const payload: Record<string, unknown> = {};

  if (input.organizationDisplayName !== undefined) {
    payload.organization_display_name =
      input.organizationDisplayName;
  }

  if (input.organizationLogoAssetId !== undefined) {
    payload.organization_logo_asset_id =
      input.organizationLogoAssetId;
  }

  if (input.organizationLogoAltText !== undefined) {
    payload.organization_logo_alt_text =
      input.organizationLogoAltText;
  }

  const response =
    await apiClient.patch<BrandingApiResponse>(
      "/customer/settings/branding",
      payload,
    );

  return mapBranding(response.data);
}


export async function uploadCustomerLogo(
  file: File,
  altText: string | null,
): Promise<CustomerBranding> {
  const form = new FormData();

  form.append("file", file);

  if (altText) {
    form.append("alt_text", altText);
  }

  const response =
    await apiClient.post<BrandingApiResponse>(
      "/customer/settings/branding/logo",
      form,
    );

  return mapBranding(response.data);
}
