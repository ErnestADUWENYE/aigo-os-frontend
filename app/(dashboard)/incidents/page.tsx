import Link from "next/link";
import { AlertCircle, Search, ShieldAlert, CheckCircle2 } from "lucide-react";
import MetricCard from "@/components/shared/MetricCard";
import PageShell from "@/components/shared/PageShell";

const incidents = [
  {
    id: "incident-policy-breach",
    title: "Policy breach in customer support agent",
    category: "Policy Violation",
    severity: "High",
    owner: "Governance Office",
    status: "Investigating",
  },
  {
    id: "incident-data-leakage",
    title: "Potential sensitive data leakage in prompt logs",
    category: "Privacy",
    severity: "Critical",
    owner: "Security",
    status: "Open",
  },
  {
    id: "incident-model-hallucination",
    title: "Incorrect AI recommendation escalated to review",
    category: "Reliability",
    severity: "Medium",
    owner: "Operations",
    status: "Mitigating",
  },
];

export default function IncidentsPage() {
  return (
    <PageShell
      title="Incidents"
      description="Track, investigate, remediate, and document AI incidents across agents, models, policies, and controls."
      action={
        <Link
          href="/incidents/new"
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Report Incident
        </Link>
      }
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Open Incidents" value={3} helper="Active cases" />
        <MetricCard label="Critical" value={1} helper="Immediate action" />
        <MetricCard label="Investigating" value={2} helper="Owner assigned" />
        <MetricCard label="Resolved" value={14} helper="Closed records" />
      </div>

      <section className="rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-5">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-gray-500" />
            <h2 className="font-semibold text-gray-900">Incident Queue</h2>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {incidents.map((incident) => (
            <Link
              key={incident.id}
              href={`/incidents/${incident.id}`}
              className="grid gap-4 p-5 transition hover:bg-gray-50 md:grid-cols-6"
            >
              <div className="md:col-span-2">
                <p className="font-medium text-gray-900">{incident.title}</p>
                <p className="text-sm text-gray-500">
                  Category: {incident.category}
                </p>
              </div>

              <p className="text-sm text-gray-600">
                Severity: {incident.severity}
              </p>
              <p className="text-sm text-gray-600">Owner: {incident.owner}</p>
              <p className="text-sm text-gray-600">Status: {incident.status}</p>
              <p className="text-sm text-gray-400">View case →</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <Search className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">
            Investigation Workflow
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Capture timeline, affected AI assets, root cause, impact, and owner actions.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <ShieldAlert className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">
            Risk & Policy Links
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Connect incidents to risks, policies, controls, evidence, and audit trail.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <CheckCircle2 className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">
            Remediation Tracking
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Monitor corrective actions, approvals, post-incident reviews, and closure.
          </p>
        </div>
      </div>
    </PageShell>
  );
}