"use client";

import { openCookieSettings } from "./cookie-consent";


export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
    >
      Cookie settings
    </button>
  );
}
