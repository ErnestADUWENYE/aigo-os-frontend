"use client";

import { themeList } from "../themes/registry";
import { useTheme } from "../themes/provider";
import type { ThemeId } from "../themes/types";

export function ThemeSelector() {
  const { themeId, setThemeId } = useTheme();

  return (
    <label className="aigo-theme-selector">
      <span>Background design</span>

      <select
        aria-label="Background design"
        value={themeId}
        onChange={(event) => {
          setThemeId(event.target.value as ThemeId);
        }}
      >
        {themeList.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
    </label>
  );
}
