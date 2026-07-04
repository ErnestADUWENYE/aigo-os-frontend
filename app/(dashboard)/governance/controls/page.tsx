import Link from "next/link";
import { FileCheck2 } from "lucide-react";
import MetricCard from "@/components/shared/MetricCard";
import PageShell from "@/components/shared/PageShell";

const controls = [
  {
    id: "control-human-oversight",
    name: "Human Oversight Required",
    domain: "Safety",
    status: "Implemented",
    evidence: "Ready",
  },
  {
    id: "control-sensitive-data",
    name: "Sensitive Data Protection",
    domain: "Privacy",
    status: "Implemented",
    evidence: "Partial",
  },
  {
    id: "control-model-evaluation",
    name: "Model Evaluation Before Release",
    domain: "Quality",
    status: "In Progress",
    evidence: "Missing",
  },
];

export default function ControlsPage() {
  return (
    <PageShell
      title="Controls"
      description="Design, operate, test, and evidence AI governance controls."
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Controls" value={84} helper="Total controls" />
        <MetricCard label="Implemented" value={61} helper="Operating" />
        <MetricCard label="Needs Evidence" value={18} helper="Audit gap" />
        <MetricCard label="Failed Tests" value={5} helper="Needs remediation" />
      </div>

      <section className="rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-5">
          <div className="flex items-center gap-2">
            <FileCheck2 className="h-5 w-5 text-gray-500" />
            <h2 className="font-semibold text-gray-900">Control Register</h2>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {controls.map((control) => (
            <Link
              key={control.id}
              href={`/governance/controls/${control.id}`}
              className="grid gap-4 p-5 transition hover:bg-gray-50 md:grid-cols-4"
            >
              <div>
                <p className="font-medium text-gray-900">{control.name}</p>
                <p className="text-sm text-gray-500">{control.domain}</p>
              </div>
              <p className="text-sm text-gray-600">Status: {control.status}</p>
              <p className="text-sm text-gray-600">Evidence: {control.evidence}</p>
              <p className="text-sm text-gray-400">View control →</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}