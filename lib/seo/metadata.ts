import type { Metadata } from "next";

import {
  absoluteUrl,
  siteConfig,
} from "./site";


type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  index?: boolean;
};


export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  index = true,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,

    description,

    alternates: {
      canonical,
    },

    keywords: [
      ...siteConfig.keywords,
      ...keywords,
    ],

    robots: {
      index,
      follow: index,

      googleBot: {
        index,
        follow: index,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,

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
      title,
      description,
      images: [
        siteConfig.socialImage,
      ],
    },
  };
}


export function createNoIndexMetadata(
  title: string
): Metadata {
  return {
    title,

    robots: {
      index: false,
      follow: false,
      nocache: true,

      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
  };
}
