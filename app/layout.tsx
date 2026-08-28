import type { Metadata } from "next";

import { StructuredData } from "@/components/public/structured-data";

import {
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/schema";

import { siteConfig } from "@/lib/seo/site";

import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: "%s | AIGO-OS",
  },

  description:
    siteConfig.description,

  applicationName:
    siteConfig.name,

  keywords: [
    ...siteConfig.keywords,
  ],

  authors: [
    {
      name: siteConfig.name,
    },
  ],

  creator:
    siteConfig.name,

  publisher:
    siteConfig.name,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description:
      siteConfig.description,

    images: [
      {
        url: siteConfig.socialImage,
        width: 1200,
        height: 630,
        alt: siteConfig.socialImageAlt,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description:
      siteConfig.shortDescription,
    images: [
      siteConfig.socialImage,
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <StructuredData
          data={organizationSchema()}
        />

        <StructuredData
          data={websiteSchema()}
        />

        {children}
      </body>
    </html>
  );
}


