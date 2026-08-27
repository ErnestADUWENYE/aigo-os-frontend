import { StructuredData } from "@/components/public/structured-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";


export const metadata = createPageMetadata({
  title: "Enterprise Context for AI Governance",
  description:
    "AIGO-OS connects AI activity with ownership, systems, controls, business services and operating context so enterprise AI can be governed with greater understanding.",
  path: "/platform/enterprise-context",
  keywords: [
    "enterprise AI context",
    "AI governance context",
    "enterprise AI governance",
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
            name: "Enterprise Context",
            path: "/platform/enterprise-context",
          },
        ])}
      />

      {children}
    </>
  );
}

