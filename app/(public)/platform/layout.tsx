import { createPageMetadata } from "@/lib/seo/metadata";


export const metadata = createPageMetadata({
  title: "AI Governance Platform",
  description:
    "Explore the AIGO-OS platform for connected enterprise context, continuous intelligence, contextual reasoning, dependency intelligence and explainable governance.",
  path: "/platform",
  keywords: [
    "AI governance platform",
    "enterprise AI platform",
    "AI governance intelligence",
  ],
});


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
