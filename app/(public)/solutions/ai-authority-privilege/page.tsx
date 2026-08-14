import type { Metadata } from "next";
import { Page11AIAuthorityPrivilege } from "./page-content";

export const metadata: Metadata = {
  title: "Assess AI Authority & Privilege | AIGO-OS",
  description:
    "Understand how technical access, privilege and delegated authority translate into the authority available to an AI Actor.",
};

export default function AIAuthorityPrivilegePage() {
  return <Page11AIAuthorityPrivilege />;
}
