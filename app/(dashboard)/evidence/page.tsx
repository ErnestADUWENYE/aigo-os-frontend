import Link from "next/link";
import { FileArchive, FileCheck2, Link2, Clock } from "lucide-react";
import MetricCard from "@/components/shared/MetricCard";
import PageShell from "@/components/shared/PageShell";

const evidence = [
  {
    id: "evidence-model-eval",
    name: "Model evaluation report",
    type: "Assessment",
    linkedTo: "Model Evaluation Control",
    status: "Ready",
  },
  {
    id: "evidence-human-review",
    name: "Human oversight approval record",
    type: "Review",
    linkedTo: "Human Oversight Policy",
    status: "Ready",
  },
  {
    id: "evidence-prompt-logs",
    name: "Prompt monitoring log extract",
    type: "System Log",
    linkedTo: "Sensitive Data Control",
    status: "Needs refresh",
  },
];

export default function EvidencePage() {
  return (
    <PageShell
      title="Evidence"
      description="Collect, manage, link, and review evidence for AI controls, policies, risks, reviews, and audits."
      action={
        <Link
          href="/evidence/upload"
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Upload Evidence
        </Link>
      }
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Evidence Items" value={128} helper="Stored records" />
        <MetricCard label="Linked" value={97} helper="Mapped to controls" />
        <MetricCard label="Unlinked" value={31} helper="Needs mapping" />
        <MetricCard label="Expiring" value={6} helper="Refresh required" />
      </div>

      <section className="rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-5">
          <div className="flex items-center gap-2">
            <FileArchive className="h-5 w-5 text-gray-500" />
            <h2 className="font-semibold text-gray-900">Evidence Library</h2>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {evidence.map((item) => (
            <Link
              key={item.id}
              href={`/evidence/${item.id}`}
              className="grid gap-4 p-5 transition hover:bg-gray-50 md:grid-cols-5"
            >
              <div className="md:col-span-2">
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">Type: {item.type}</p>
              </div>
              <p className="text-sm text-gray-600 md:col-span-2">
                Linked to: {item.linkedTo}
              </p>
              <p className="text-sm text-gray-600">Status: {item.status}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <FileCheck2 className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">Audit Readiness</h3>
          <p className="mt-2 text-sm text-gray-500">
            Package evidence for controls, frameworks, reviews, and audit exports.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <Link2 className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">Control Mapping</h3>
          <p className="mt-2 text-sm text-gray-500">
            Link evidence to policies, risks, incidents, controls, and frameworks.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <Clock className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">Freshness Tracking</h3>
          <p className="mt-2 text-sm text-gray-500">
            Track evidence age, expiration, review status, and renewal ownership.
          </p>
        </div>
      </div>
    </PageShell>
  );
}