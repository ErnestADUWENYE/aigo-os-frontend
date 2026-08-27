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
            name: "Unclear Control Coverage",
            path: "/solutions/unclear-control-coverage",
          },
        ])}
      />

      {children}
    </>
  );
}
