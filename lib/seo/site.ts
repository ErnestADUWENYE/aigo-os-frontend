export const siteConfig = {
  name: "AIGO-OS",

  legalName: "AIGO-OS",

  url: "https://aigo-os.com",

  title: "AIGO-OS | AI Governance Operating System",

  description:
    "AIGO-OS connects AI activity, governance information and enterprise relationships to create connected intelligence for enterprise AI governance and business impact.",

  shortDescription:
    "Connected intelligence for enterprise AI governance.",

  locale: "en_US",

  socialImage: "/branding/aigo-os-master.png",

  socialImageAlt: "AIGO-OS",

  keywords: [
    "AIGO-OS",
    "AI governance",
    "enterprise AI governance",
    "AI governance platform",
    "AI governance operating system",
    "connected intelligence",
    "enterprise AI",
    "AI governance controls",
    "AI governance context",
    "AI business impact",
    "enterprise relationships",
    "AI risk management",
  ],
} as const;


export function absoluteUrl(path = "/") {
  if (!path || path === "/") {
    return siteConfig.url;
  }

  return `${siteConfig.url}${
    path.startsWith("/")
      ? path
      : `/${path}`
  }`;
}


