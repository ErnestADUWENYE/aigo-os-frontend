import { StructuredData } from "@/components/public/structured-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";


export const metadata = createPageMetadata({
  title: "AI Governance Explainability and Traceability",
  description:
    "AIGO-OS keeps governance conclusions connected to supporting signals, enterprise context and evidence so management can understand and challenge how a view was reached.",
  path: "/platform/explainability-traceability",
  keywords: [
    "AI governance explainability",
    "AI governance traceability",
    "AI governance traceability",
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
            name: "Explainability and Traceability",
            path: "/platform/explainability-traceability",
          },
        ])}
      />

      {children}
    </>
  );
}


