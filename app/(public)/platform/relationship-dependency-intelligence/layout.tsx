import { StructuredData } from "@/components/public/structured-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";


export const metadata = createPageMetadata({
  title: "AI Relationship and Dependency Intelligence",
  description:
    "AIGO-OS reveals relationships between AI, systems, ownership, controls, services and dependencies so organisations can understand how change and activity may affect the enterprise.",
  path: "/platform/relationship-dependency-intelligence",
  keywords: [
    "AI dependency intelligence",
    "AI relationship intelligence",
    "enterprise AI dependencies",
  ],
});


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Platform",
            path: "/platform",
          },
          {
            name: "Relationship and Dependency Intelligence",
            path: "/platform/relationship-dependency-intelligence",
          },
        ])}
      />

      {children}
    </>
  );
}

