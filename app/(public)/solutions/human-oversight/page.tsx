import type { Metadata } from "next";
import { Page12HumanOversight } from "./page-content";

export const metadata: Metadata = {
  title: "Establish Human Oversight | AIGO-OS",
  description:
    "Determine when AI activity requires accountable human judgement, route the decision with context and preserve the outcome.",
};

export default function HumanOversightPage() {
  return <Page12HumanOversight />;
}
