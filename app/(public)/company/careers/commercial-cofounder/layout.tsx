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
            name: "Company",
            path: "/company",
          },
          {
            name: "Careers",
            path: "/company/careers",
          },
          {
            name: "Commercial Co-founder",
            path: "/company/careers/commercial-cofounder",
          },
        ])}
      />

      {children}
    </>
  );
}
