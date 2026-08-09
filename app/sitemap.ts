import type { MetadataRoute } from "next";

const routes = [
  "",
  "/product",
  "/product/actor-passports",
  "/product/authority",
  "/product/risk-intelligence",
  "/product/governance-receipts",
  "/solutions",
  "/solutions/ai-agents",
  "/solutions/enterprise-ai",
  "/solutions/governed-autonomy",
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
  const protocol = "https:";
  const baseUrl = protocol + String.fromCharCode(47, 47) + "aigo-os.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/product" ||
            route === "/solutions" ||
            route === "/design-partners"
          ? 0.9
          : 0.7,
  }));
}