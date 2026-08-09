import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const protocol = "https:";
  const baseUrl = protocol + String.fromCharCode(47, 47) + "aigo-os.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/workspace/",
        "/settings/",
        "/api/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}