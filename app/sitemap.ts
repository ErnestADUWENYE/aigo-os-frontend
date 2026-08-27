import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo/site";


const publicRoutes = [
  "/",

  "/platform",
  "/platform/contextual-reasoning",
  "/platform/continuous-intelligence",
  "/platform/enterprise-connectivity",
  "/platform/enterprise-context",
  "/platform/explainability-traceability",
  "/platform/relationship-dependency-intelligence",

  "/products",
  "/products/aigo-os-govern",
  "/products/aigo-os-impact",

  "/solutions",

  "/solutions/disconnected-policies-controls",
  "/solutions/hidden-dependencies",
  "/solutions/unclear-control-applicability",
  "/solutions/unclear-control-coverage",
  "/solutions/unclear-critical-service-dependencies",
  "/solutions/unclear-incident-business-impact",
  "/solutions/unclear-ownership-accountability",
  "/solutions/unknown-change-impact",
  "/solutions/unknown-governance-change-impact",

  "/integrations",
  "/resources",

  "/company",
  "/company/about",
  "/company/principles",
  "/company/careers",
  "/company/careers/commercial-cofounder",
  "/company/contact",

  "/request-demo",
  "/talk-to-an-expert",
  "/contact-sales",
  "/get-started",

  "/trust",
  "/security",
  "/responsible-disclosure",
  "/privacy",
  "/cookies",
  "/terms",
  "/accessibility",
] as const;


export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url:
      route === "/"
        ? siteConfig.url
        : `${siteConfig.url}${route}`,
  }));
}



