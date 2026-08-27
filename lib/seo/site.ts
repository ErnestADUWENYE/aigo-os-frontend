export const siteConfig = {
  name: "AIGO-OS",

  legalName: "AIGO-OS",

  url: "https://aigo-os.com",

  title: "AIGO-OS | AI Governance Operating System",

  description:
    "AIGO-OS is the governance operating layer for enterprise AI, continuously governing AI actors, authority, risk, decisions and evidence across autonomous systems.",

  shortDescription:
    "The governance operating layer for autonomous enterprise AI.",

  locale: "en_US",

  socialImage: "/branding/aigo-os-master.png",

  socialImageAlt: "AIGO-OS",

  keywords: [
    "AI governance",
    "enterprise AI governance",
    "AI governance platform",
    "AI governance operating system",
    "AI risk management",
    "AI agent governance",
    "autonomous AI governance",
    "AI oversight",
    "AI governance evidence",
    "AI governance controls",
    "AIGO-OS",
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
