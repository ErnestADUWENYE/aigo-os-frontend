import { createPageMetadata } from "@/lib/seo/metadata";


export const metadata = createPageMetadata({
  title: "Request an AIGO-OS Demo",
  description:
    "Request an AIGO-OS demo to explore how connected governance intelligence can help your organisation understand enterprise AI, governance state and business impact.",
  path: "/request-demo",
  keywords: [
    "AIGO-OS demo",
    "AI governance demo",
    "enterprise AI governance demo",
  ],
});


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
