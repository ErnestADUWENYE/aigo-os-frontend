import { arcticPrecision } from "./definitions/arctic-precision";
import { emeraldIntelligence } from "./definitions/emerald-intelligence";
import { executiveNavy } from "./definitions/executive-navy";
import { graphiteCommand } from "./definitions/graphite-command";
import { midnightSignal } from "./definitions/midnight-signal";
import type { AigoTheme, ThemeId } from "./types";

export const defaultThemeId: ThemeId = "executive-navy";

export const themes: Record<ThemeId, AigoTheme> = {
  "executive-navy": executiveNavy,
  "emerald-intelligence": emeraldIntelligence,
  "arctic-precision": arcticPrecision,
  "graphite-command": graphiteCommand,
  "midnight-signal": midnightSignal,
};

export const themeList = Object.values(themes);

export function getTheme(id: ThemeId): AigoTheme {
  return themes[id];
}
