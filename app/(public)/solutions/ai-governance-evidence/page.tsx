import type { Metadata } from "next";
import { Page14AIGovernanceEvidence } from "./page-content";

export const metadata: Metadata = {
  title: "Build AI Governance Evidence | AIGO-OS",
  description:
    "Preserve AI identity, authority, business context and governance decisions in a durable evidence record.",
};

export default function AIGovernanceEvidencePage() {
  return <Page14AIGovernanceEvidence />;
}
