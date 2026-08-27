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
            name: "Incident Business Impact",
            path: "/solutions/unclear-incident-business-impact",
          },
        ])}
      />

      {children}
    </>
  );
}
