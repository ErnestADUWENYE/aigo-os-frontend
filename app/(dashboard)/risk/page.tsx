import Link from "next/link";
import { AlertTriangle, ShieldCheck, TrendingDown, UserCheck } from "lucide-react";
import MetricCard from "@/components/shared/MetricCard";
import PageShell from "@/components/shared/PageShell";

const risks = [
  {
    id: "risk-autonomous-decisions",
    title: "Autonomous decisioning without sufficient oversight",
    category: "Human Oversight",
    inherent: "Critical",
    residual: "High",
    owner: "Risk Office",
    status: "Mitigating",
  },
  {
    id: "risk-sensitive-data-exposure",
    title: "Sensitive data exposure through AI prompts",
    category: "Privacy",
    inherent: "High",
    residual: "Medium",
    owner: "Security",
    status: "Monitoring",
  },
  {
    id: "risk-model-drift",
    title: "Model behavior drift in production workflows",
    category: "Reliability",
    inherent: "Medium",
    residual: "Medium",
    owner: "ML Operations",
    status: "Open",
  },
];

export default function RiskPage() {
  return (
    <PageShell
      title="Risk Register"
      description="Identify, assess, mitigate, and monitor AI risks across agents, models, policies, and business workflows."
      action={
        <Link
          href="/risk/new"
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          New Risk
        </Link>
      }
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Open Risks" value={7} helper="Active register" />
        <MetricCard label="Critical" value={2} helper="Executive visibility" />
        <MetricCard label="Mitigating" value={5} helper="Treatment in progress" />
        <MetricCard label="Residual High" value={4} helper="After controls" />
      </div>

      <section className="rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-5">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-gray-500" />
            <h2 className="font-semibold text-gray-900">AI Risk Register</h2>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {risks.map((risk) => (
            <Link
              key={risk.id}
              href={`/risk/${risk.id}`}
              className="grid gap-4 p-5 transition hover:bg-gray-50 md:grid-cols-6"
            >
              <div className="md:col-span-2">
                <p className="font-medium text-gray-900">{risk.title}</p>
                <p className="text-sm text-gray-500">
                  Category: {risk.category}
                </p>
              </div>

              <p className="text-sm text-gray-600">
                Inherent: {risk.inherent}
              </p>
              <p className="text-sm text-gray-600">
                Residual: {risk.residual}
              </p>
              <p className="text-sm text-gray-600">Owner: {risk.owner}</p>
              <p className="text-sm text-gray-600">Status: {risk.status}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <ShieldCheck className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">Control Coverage</h3>
          <p className="mt-2 text-sm text-gray-500">
            Link risks to controls, evidence, policies, and mitigation actions.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <TrendingDown className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">Residual Risk</h3>
          <p className="mt-2 text-sm text-gray-500">
            Compare inherent risk against remaining risk after treatment.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <UserCheck className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">Ownership</h3>
          <p className="mt-2 text-sm text-gray-500">
            Assign accountable owners, due dates, treatment plans, and approvals.
          </p>
        </div>
      </div>
    </PageShell>
  );
}