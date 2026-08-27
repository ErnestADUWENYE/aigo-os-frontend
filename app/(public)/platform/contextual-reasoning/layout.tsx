import { StructuredData } from "@/components/public/structured-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";


export const metadata = createPageMetadata({
  title: "Contextual Reasoning for AI Governance",
  description:
    "AIGO-OS contextual reasoning connects AI activity with enterprise conditions, accountability, controls and business context so governance conclusions are easier to understand.",
  path: "/platform/contextual-reasoning",
  keywords: [
    "AI contextual reasoning",
    "AI governance reasoning",
    "enterprise AI context",
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
            name: "Contextual Reasoning",
            path: "/platform/contextual-reasoning",
          },
        ])}
      />

      {children}
    </>
  );
}

