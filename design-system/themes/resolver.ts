import { defaultThemeId, themes } from "./registry";
import type { AigoTheme, ThemeId } from "./types";

export type ThemePreference = {
  userThemeId?: string | null;
  companyThemeId?: string | null;
};

export function isThemeId(value: unknown): value is ThemeId {
  return typeof value === "string" && value in themes;
}

export function resolveThemeId({
  userThemeId,
  companyThemeId,
}: ThemePreference): ThemeId {
  if (isThemeId(userThemeId)) {
    return userThemeId;
  }

  if (isThemeId(companyThemeId)) {
    return companyThemeId;
  }

  return defaultThemeId;
}

export function resolveTheme(
  preference: ThemePreference,
): AigoTheme {
  return themes[resolveThemeId(preference)];
}
