import Link from "next/link";
import { Bell, AlertTriangle, ShieldAlert, CheckCircle2 } from "lucide-react";
import MetricCard from "@/components/shared/MetricCard";
import PageShell from "@/components/shared/PageShell";

const alerts = [
  {
    id: "alert-sensitive-data",
    title: "Sensitive data detected in prompt stream",
    source: "Monitoring",
    severity: "Critical",
    status: "Open",
  },
  {
    id: "alert-policy-exception",
    title: "Policy exception requires approval",
    source: "Policy Engine",
    severity: "High",
    status: "Pending",
  },
  {
    id: "alert-model-drift",
    title: "Model behavior drift threshold exceeded",
    source: "Model Monitor",
    severity: "Medium",
    status: "Investigating",
  },
];

export default function AlertsPage() {
  return (
    <PageShell
      title="Alerts"
      description="Monitor governance alerts, risk signals, policy violations, system warnings, and escalation events."
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Active Alerts" value={9} helper="Needs review" />
        <MetricCard label="Critical" value={2} helper="Immediate action" />
        <MetricCard label="Warnings" value={5} helper="Operational signals" />
        <MetricCard label="Resolved Today" value={11} helper="Closed alerts" />
      </div>

      <section className="rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-5">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-gray-500" />
            <h2 className="font-semibold text-gray-900">Alert Feed</h2>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {alerts.map((alert) => (
            <Link
              key={alert.id}
              href={`/alerts/${alert.id}`}
              className="grid gap-4 p-5 transition hover:bg-gray-50 md:grid-cols-5"
            >
              <div className="md:col-span-2">
                <p className="font-medium text-gray-900">{alert.title}</p>
                <p className="text-sm text-gray-500">Source: {alert.source}</p>
              </div>

              <p className="text-sm text-gray-600">Severity: {alert.severity}</p>
              <p className="text-sm text-gray-600">Status: {alert.status}</p>
              <p className="text-sm text-gray-400">Review alert →</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <AlertTriangle className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">Risk Signals</h3>
          <p className="mt-2 text-sm text-gray-500">
            Detect threshold changes, drift, misuse, policy breaches, and safety concerns.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <ShieldAlert className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">Escalations</h3>
          <p className="mt-2 text-sm text-gray-500">
            Route critical alerts to owners, reviewers, incident workflows, and audit trail.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <CheckCircle2 className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">Resolution</h3>
          <p className="mt-2 text-sm text-gray-500">
            Track acknowledgement, remediation, closure notes, and linked evidence.
          </p>
        </div>
      </div>
    </PageShell>
  );
}