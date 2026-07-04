import Link from "next/link";
import ResourcePage from "@/components/shared/ResourcePage";

const frameworks = ["NIST AI RMF", "ISO/IEC 42001", "EU AI Act", "Internal AI Policy"];

export default function FrameworksPage() {
  return (
    <ResourcePage
      title="Frameworks"
      description="Map AI governance controls to regulatory, standards, and internal compliance frameworks."
      metrics={[
        { label: "Frameworks", value: 6 },
        { label: "Mapped Controls", value: 64 },
        { label: "Coverage", value: "76%" },
        { label: "Gaps", value: 12 },
      ]}
      sections={[
        {
          title: "Framework Library",
          description: frameworks.map((name) => `${name}`).join(" • "),
        },
        {
          title: "Control Mapping",
          description: "Connect framework requirements to controls, evidence, reviews, and audit records.",
        },
      ]}
      actions={[{ label: "View Controls", href: "/governance/controls" }]}
    />
  );
}