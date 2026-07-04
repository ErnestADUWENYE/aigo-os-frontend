// app/(dashboard)/evidence/page.tsx
import ResourcePage from "@/components/shared/ResourcePage";

export default function EvidencePage() {
  return (
    <ResourcePage
      title="Evidence"
      description="Collect, manage, and attach evidence for controls, audits, risks, and reviews."
      actions={[{ label: "Upload Evidence", href: "/evidence/upload" }]}
      metrics={[
        { label: "Evidence Items", value: 128 },
        { label: "Linked", value: 97 },
        { label: "Unlinked", value: 31 },
        { label: "Expiring", value: 6 },
      ]}
      sections={[
        { title: "Evidence Library", description: "Documents, screenshots, logs, test reports, and attestations." },
        { title: "Control Mapping", description: "Connect evidence to governance controls and audit requirements." },
      ]}
    />
  );
}