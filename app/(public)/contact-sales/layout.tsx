import { createPageMetadata } from "@/lib/seo/metadata";


export const metadata = createPageMetadata({
  title: "Contact AIGO-OS Sales",
  description:
    "Contact AIGO-OS about enterprise purchasing, commercial evaluation, procurement, licensing and deployment requirements.",
  path: "/contact-sales",
  keywords: [
    "AIGO-OS sales",
    "AI governance platform sales",
    "enterprise AI governance pricing",
  ],
});


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
