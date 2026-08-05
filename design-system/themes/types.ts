export const themeIds = [
  "executive-navy",
  "emerald-intelligence",
  "arctic-precision",
  "graphite-command",
  "midnight-signal",
] as const;

export type ThemeId = (typeof themeIds)[number];

export type ThemeTokens = {
  page: string;
  navigation: string;
  header: string;
  panel: string;
  card: string;
  raised: string;
  overlay: string;
  selected: string;
  hover: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textInverse: string;
  borderSubtle: string;
  borderDefault: string;
  borderStrong: string;
  accentPrimary: string;
  accentSecondary: string;
  accentMuted: string;
  gradient: string;
  shadowCard: string;
};

export type AigoTheme = {
  id: ThemeId;
  name: string;
  description: string;
  appearance: "light" | "dark";
  tokens: ThemeTokens;
};
