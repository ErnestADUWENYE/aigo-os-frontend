import { StructuredData } from "@/components/public/structured-data";

import { breadcrumbSchema } from "@/lib/seo/schema";


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
            name: "Solutions",
            path: "/solutions",
          },
          {
            name: "Governance Change Impact",
            path: "/solutions/unknown-governance-change-impact",
          },
        ])}
      />

      {children}
    </>
  );
}
