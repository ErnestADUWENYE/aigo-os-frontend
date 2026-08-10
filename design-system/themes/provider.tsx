"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  resolveTheme,
  type ThemePreference,
} from "./resolver";
import {
  readStoredTheme,
  storeTheme,
} from "./storage";
import type { AigoTheme, ThemeId } from "./types";

type ThemeContextValue = {
  theme: AigoTheme;
  themeId: ThemeId;
  setThemeId: (themeId: ThemeId) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(
  null,
);

function getInitialThemeId(
  userThemeId?: string | null,
  companyThemeId?: string | null,
): ThemeId {
  const stored = readStoredTheme();

  return resolveTheme({
    userThemeId: userThemeId ?? stored,
    companyThemeId,
  }).id;
}

export function ThemeProvider({
  children,
  companyThemeId,
  userThemeId,
}: {
  children: ReactNode;
  companyThemeId?: string | null;
  userThemeId?: string | null;
}) {
  const [selectedThemeId, setSelectedThemeId] =
    useState<ThemeId>(() =>
      getInitialThemeId(
        userThemeId,
        companyThemeId,
      ),
    );

  const preference = useMemo<ThemePreference>(
    () => ({
      userThemeId: selectedThemeId,
      companyThemeId,
    }),
    [
      selectedThemeId,
      companyThemeId,
    ],
  );

  const theme = resolveTheme(preference);

  useEffect(() => {
    const root = document.documentElement;

    root.dataset.aigoTheme = theme.id;
    root.dataset.aigoAppearance = theme.appearance;

    for (const [key, value] of Object.entries(
      theme.tokens,
    )) {
      const cssToken = key.replace(
        /[A-Z]/g,
        (match) => `-${match.toLowerCase()}`,
      );

      root.style.setProperty(
        `--aigo-${cssToken}`,
        value,
      );
    }

    return () => {
      delete root.dataset.aigoTheme;
      delete root.dataset.aigoAppearance;

      for (const key of Object.keys(theme.tokens)) {
        const cssToken = key.replace(
          /[A-Z]/g,
          (match) => `-${match.toLowerCase()}`,
        );

        root.style.removeProperty(
          `--aigo-${cssToken}`,
        );
      }
    };
  }, [theme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      themeId: theme.id,
      setThemeId(nextThemeId) {
        storeTheme(nextThemeId);
        setSelectedThemeId(nextThemeId);
      },
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within ThemeProvider",
    );
  }

  return context;
}


