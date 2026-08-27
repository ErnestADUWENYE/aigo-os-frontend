import { createPageMetadata } from "@/lib/seo/metadata";
import { redirect } from "next/navigation";


export const metadata = createPageMetadata({
  title: "Company",
  description:
    "Learn about AIGO-OS, the company building connected governance intelligence for enterprise AI, including our purpose, principles, careers and ways to get in touch.",
  path: "/company",
  keywords: [
    "AIGO-OS company",
    "AI governance company",
    "enterprise AI governance company",
  ],
});
export default function CompanyPage() {
  redirect("/company/about");
}

