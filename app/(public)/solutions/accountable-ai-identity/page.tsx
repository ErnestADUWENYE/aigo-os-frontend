import type { Metadata } from "next";
import { Page09AccountableAIIdentity } from "./page-content";

export const metadata: Metadata = {
  title: "Establish Accountable AI Identity | AIGO-OS",
  description:
    "Connect AI identity, delegated authority and organisational context so AI activity can be attributed and governed consistently.",
};

export default function AccountableAIIdentityPage() {
  return <Page09AccountableAIIdentity />;
}
