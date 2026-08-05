import type { ThemeId } from "./types";

const STORAGE_KEY = "aigo.background-design";

export function readStoredTheme(): ThemeId | null {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(STORAGE_KEY) as ThemeId | null;
}

export function storeTheme(themeId: ThemeId): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, themeId);
}
