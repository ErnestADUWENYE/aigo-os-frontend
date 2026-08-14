import type { MetadataRoute } from "next";

const routes = [
  "",
  "/platform",
  "/platform/actor-passports",
  "/platform/machine-authority",
  "/platform/business-significance",
  "/platform/governance-decisioning",
  "/platform/human-authority",
  "/platform/governance-receipts",

  "/solutions/accountable-ai-identity",
  "/solutions/excessive-agency",
  "/solutions/ai-authority-privilege",
  "/solutions/human-oversight",
  "/solutions/prioritise-ai-governance",
  "/solutions/ai-governance-evidence",

  "/integrations",
  "/security",
  "/resources",
  "/resources/ai-governance",
  "/resources/governed-autonomy",
  "/resources/actor-passports",
  "/resources/authority",
  "/company",
  "/design-partners",
  "/contact",
  "/privacy",
  "/terms",
  "/responsible-disclosure",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aigo-os.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/platform" ||
            route.startsWith("/solutions/")
          ? 0.9
          : 0.7,
  }));
}
