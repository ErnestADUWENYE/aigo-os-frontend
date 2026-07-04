import Link from "next/link";
import { ClipboardCheck, FileCheck2, GitBranch, History } from "lucide-react";
import MetricCard from "@/components/shared/MetricCard";
import PageShell from "@/components/shared/PageShell";

const areas = [
  {
    title: "Frameworks",
    description: "Map AI governance obligations to NIST, ISO, EU AI Act, and internal standards.",
    href: "/governance/frameworks",
    icon: GitBranch,
  },
  {
    title: "Controls",
    description: "Track AI control design, implementation, evidence, and operating effectiveness.",
    href: "/governance/controls",
    icon: FileCheck2,
  },
  {
    title: "Reviews",
    description: "Approve, reject, escalate, and document AI governance decisions.",
    href: "/governance/reviews",
    icon: ClipboardCheck,
  },
  {
    title: "Audit Trail",
    description: "Review immutable governance events, user activity, and system changes.",
    href: "/governance/audit-trail",
    icon: History,
  },
];

export default function GovernancePage() {
  return (
    <PageShell
      title="Governance"
      description="Central oversight for AI frameworks, controls, reviews, decisions, and auditability."
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Frameworks" value={6} helper="Mapped standards" />
        <MetricCard label="Controls" value={84} helper="Governance controls" />
        <MetricCard label="Open Reviews" value={19} helper="Pending decisions" />
        <MetricCard label="Audit Events" value="1.2k" helper="Tracked actions" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {areas.map((area) => {
          const Icon = area.icon;

          return (
            <Link
              key={area.href}
              href={area.href}
              className="rounded-xl border border-gray-200 bg-white p-5 transition hover:bg-gray-50"
            >
              <Icon className="h-5 w-5 text-gray-500" />
              <h3 className="mt-3 font-semibold text-gray-900">{area.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{area.description}</p>
            </Link>
          );
        })}
      </div>
    </PageShell>
  );
}