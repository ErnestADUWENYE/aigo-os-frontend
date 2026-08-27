import { createPageMetadata } from "@/lib/seo/metadata";


export const metadata = createPageMetadata({
  title: "Get Started with AIGO-OS",
  description:
    "Start a conversation with AIGO-OS about your enterprise AI governance environment, priorities, evaluation requirements and next steps.",
  path: "/get-started",
  keywords: [
    "get started AIGO-OS",
    "enterprise AI governance",
    "AI governance evaluation",
  ],
});


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
