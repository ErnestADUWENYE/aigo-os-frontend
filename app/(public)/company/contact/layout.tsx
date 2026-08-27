import { createPageMetadata } from "@/lib/seo/metadata";


export const metadata = createPageMetadata({
  title: "Contact AIGO-OS",
  description:
    "Contact AIGO-OS with general company, partnership, media, website or other enquiries.",
  path: "/company/contact",
  keywords: [
    "contact AIGO-OS",
    "AIGO-OS enquiries",
  ],
});


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
