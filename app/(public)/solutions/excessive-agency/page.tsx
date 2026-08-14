import type { Metadata } from "next";
import { Page10ExcessiveAgency } from "./page-content";

export const metadata: Metadata = {
  title: "Assess Excessive Agency | AIGO-OS",
  description:
    "Assess where AI functionality, authority or autonomy extends beyond an AI Actor's intended purpose and operating context.",
};

export default function ExcessiveAgencyPage() {
  return <Page10ExcessiveAgency />;
}
