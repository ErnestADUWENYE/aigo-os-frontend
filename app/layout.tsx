import type { Metadata } from "next";

import { ApplicationProviders } from "./providers/application-providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aigo-os.com"),

  title: {
    default: "AIGO-OS | AI Governance Operating System",
    template: "%s | AIGO-OS",
  },

  description:
    "AIGO-OS is the governance operating layer for enterprise AI, continuously governing AI actors, authority, risk, decisions and evidence across autonomous systems.",

  applicationName: "AIGO-OS",

  keywords: [
    "AI governance",
    "AI agent governance",
    "enterprise AI governance",
    "autonomous AI governance",
    "governed autonomy",
    "AI risk management",
    "AI authority",
    "AI actor identity",
    "AI governance operating system",
    "AIGO-OS",
  ],

  authors: [{ name: "AIGO-OS" }],
  creator: "AIGO-OS",
  publisher: "AIGO-OS",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "AIGO-OS",
    title: "AIGO-OS | AI Governance Operating System",
    description:
      "Govern enterprise AI at the speed of autonomy. Discover AI actors, understand authority and risk, make governance decisions and preserve traceable evidence.",
    images: [
      {
        url: "/branding/aigo-os-master.png",
        width: 1200,
        height: 630,
        alt: "AIGO-OS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AIGO-OS | AI Governance Operating System",
    description:
      "The governance operating layer for autonomous enterprise AI.",
    images: ["/branding/aigo-os-master.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: "/branding/aigo-os-icon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/branding/aigo-os-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ApplicationProviders>{children}</ApplicationProviders>
      </body>
    </html>
  );
}
