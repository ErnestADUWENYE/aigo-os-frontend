import { apiClient } from "./client";
import type { ThemeId } from "../../design-system/themes/types";


export type CustomerPreferences = {
  organizationId: string;
  profileId: string;
  backgroundDesign: ThemeId | null;
  locale: string | null;
  timezone: string | null;
  accessibilityPreferences: Record<string, unknown>;
  organizationDefaultBackgroundDesign: ThemeId | null;
  effectiveBackgroundDesign: ThemeId;
  platformDefaultBackgroundDesign: ThemeId;
};


type CustomerPreferencesApiResponse = {
  organization_id: string;
  profile_id: string;
  background_design: ThemeId | null;
  locale: string | null;
  timezone: string | null;
  accessibility_preferences: Record<string, unknown>;
  organization_default_background_design: ThemeId | null;
  effective_background_design: ThemeId;
  platform_default_background_design: ThemeId;
};


function mapPreferences(
  value: CustomerPreferencesApiResponse,
): CustomerPreferences {
  return {
    organizationId: value.organization_id,
    profileId: value.profile_id,
    backgroundDesign: value.background_design,
    locale: value.locale,
    timezone: value.timezone,
    accessibilityPreferences:
      value.accessibility_preferences,
    organizationDefaultBackgroundDesign:
      value.organization_default_background_design,
    effectiveBackgroundDesign:
      value.effective_background_design,
    platformDefaultBackgroundDesign:
      value.platform_default_background_design,
  };
}


export async function getCustomerPreferences():
Promise<CustomerPreferences> {
  const response =
    await apiClient.get<CustomerPreferencesApiResponse>(
      "/customer/preferences",
    );

  return mapPreferences(response.data);
}


export async function updateCustomerPreferences(
  input: {
    backgroundDesign?: ThemeId | null;
    locale?: string | null;
    timezone?: string | null;
    accessibilityPreferences?:
      Record<string, unknown>;
  },
): Promise<CustomerPreferences> {
  const payload: Record<string, unknown> = {};

  if (input.backgroundDesign !== undefined) {
    payload.background_design =
      input.backgroundDesign;
  }

  if (input.locale !== undefined) {
    payload.locale = input.locale;
  }

  if (input.timezone !== undefined) {
    payload.timezone = input.timezone;
  }

  if (
    input.accessibilityPreferences !== undefined
  ) {
    payload.accessibility_preferences =
      input.accessibilityPreferences;
  }

  const response =
    await apiClient.patch<CustomerPreferencesApiResponse>(
      "/customer/preferences",
      payload,
    );

  return mapPreferences(response.data);
}
