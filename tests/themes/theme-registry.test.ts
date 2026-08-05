import { describe, expect, it } from "vitest";

import {
  defaultThemeId,
  themeList,
  themes,
} from "../../design-system/themes/registry";
import {
  isThemeId,
  resolveTheme,
  resolveThemeId,
} from "../../design-system/themes/resolver";

describe("AIGO theme registry", () => {
  it("contains exactly five locked themes", () => {
    expect(themeList).toHaveLength(5);

    expect(Object.keys(themes)).toEqual([
      "executive-navy",
      "emerald-intelligence",
      "arctic-precision",
      "graphite-command",
      "midnight-signal",
    ]);
  });

  it("keeps Executive Navy as the default", () => {
    expect(defaultThemeId).toBe("executive-navy");
  });

  it("defines complete token sets", () => {
    for (const theme of themeList) {
      expect(theme.id).toBeTruthy();
      expect(theme.name).toBeTruthy();
      expect(theme.tokens.page).toBeTruthy();
      expect(theme.tokens.navigation).toBeTruthy();
      expect(theme.tokens.header).toBeTruthy();
      expect(theme.tokens.card).toBeTruthy();
      expect(theme.tokens.textPrimary).toBeTruthy();
      expect(theme.tokens.textInverse).toBeTruthy();
      expect(theme.tokens.accentPrimary).toBeTruthy();
      expect(theme.tokens.gradient).toContain("linear-gradient");
      expect(theme.tokens.shadowCard).toBeTruthy();
    }
  });
});

describe("AIGO theme resolution", () => {
  it("uses the user theme before the company theme", () => {
    expect(
      resolveThemeId({
        userThemeId: "midnight-signal",
        companyThemeId: "emerald-intelligence",
      }),
    ).toBe("midnight-signal");
  });

  it("falls back to the company theme", () => {
    expect(
      resolveThemeId({
        userThemeId: null,
        companyThemeId: "arctic-precision",
      }),
    ).toBe("arctic-precision");
  });

  it("falls back to the locked default", () => {
    expect(
      resolveThemeId({
        userThemeId: "invalid-theme",
        companyThemeId: "invalid-theme",
      }),
    ).toBe("executive-navy");
  });

  it("validates theme identifiers", () => {
    expect(isThemeId("graphite-command")).toBe(true);
    expect(isThemeId("unknown")).toBe(false);
  });

  it("returns the resolved theme object", () => {
    expect(
      resolveTheme({
        userThemeId: "emerald-intelligence",
      }).name,
    ).toBe("Emerald Intelligence");
  });
});
