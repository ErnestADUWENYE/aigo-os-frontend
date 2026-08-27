import {
  absoluteUrl,
  siteConfig,
} from "./site";


export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,

    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,

    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(
        "/branding/aigo-os-master.png"
      ),
    },

    description:
      siteConfig.description,

    sameAs: [
      "https://www.linkedin.com/company/aigo-os/",
    ],
  };
}


export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,

    url: siteConfig.url,
    name: siteConfig.name,
    description:
      siteConfig.description,

    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}


type BreadcrumbItem = {
  name: string;
  path: string;
};


export function breadcrumbSchema(
  items: readonly BreadcrumbItem[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: items.map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })
    ),
  };
}

