import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo/site";


export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",

        allow: "/",

        disallow: [
          "/api/",
          "/admin/",
          "/console/",
          "/workspace/",
          "/settings/",
          "/select-organization",
          "/select-workspace",
          "/sign-in",
          "/sign-up",
          "/forgot-password",
          "/reset-password",
          "/verify-email",
          "/accept-invitation",
          "/session-expired",
        ],
      },
    ],

    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
