import { StructuredData } from "@/components/public/structured-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";


export const metadata = createPageMetadata({
  title: "Continuous AI Governance Intelligence",
  description:
    "AIGO-OS continuously connects changing AI activity, enterprise context and governance information so organisations can maintain a current view of governance state.",
  path: "/platform/continuous-intelligence",
  keywords: [
    "continuous AI governance",
    "AI governance intelligence",
    "continuous governance monitoring",
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
            name: "Continuous Intelligence",
            path: "/platform/continuous-intelligence",
          },
        ])}
      />

      {children}
    </>
  );
}

