import { createPageMetadata } from "@/lib/seo/metadata";


export const metadata = createPageMetadata({
  title: "Talk to an AI Governance Expert",
  description:
    "Talk to AIGO-OS about an AI governance, enterprise context, AI agent, business impact or operating model question your organisation is working through.",
  path: "/talk-to-an-expert",
  keywords: [
    "AI governance expert",
    "enterprise AI governance consultation",
    "AI governance discussion",
  ],
});


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
