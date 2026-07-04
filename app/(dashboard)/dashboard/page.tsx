import Link from "next/link";
import {
  AlertTriangle,
  Bot,
  FileCheck2,
  Gauge,
  ShieldCheck,
  Activity,
} from "lucide-react";
import MetricCard from "@/components/shared/MetricCard";
import PageShell from "@/components/shared/PageShell";

const metrics = [
  {
    label: "AI Agents",
    value: 24,
    helper: "Registered systems",
  },
  {
    label: "Open Risks",
    value: 7,
    helper: "Across active workspaces",
  },
  {
    label: "Active Incidents",
    value: 3,
    helper: "Under investigation",
  },
  {
    label: "Compliance Score",
    value: "82%",
    helper: "Framework readiness",
  },
];

const quickActions = [
  {
    title: "Register AI Agent",
    description: "Add a new governed AI agent to the platform registry.",
    href: "/agents/new",
  },
  {
    title: "Create Risk Record",
    description: "Document a new AI risk and assign mitigation ownership.",
    href: "/risk/new",
  },
  {
    title: "Report Incident",
    description: "Open an investigation for policy, safety, or reliability issues.",
    href: "/incidents/new",
  },
  {
    title: "Upload Evidence",
    description: "Attach proof for controls, reviews, audits, and frameworks.",
    href: "/evidence/upload",
  },
];

const governanceSignals = [
  {
    title: "High-risk agents pending review",
    value: "5",
    icon: AlertTriangle,
  },
  {
    title: "Controls requiring evidence",
    value: "18",
    icon: FileCheck2,
  },
  {
    title: "Policies operating in monitor mode",
    value: "9",
    icon: ShieldCheck,
  },
  {
    title: "Integrations syncing normally",
    value: "8",
    icon: Activity,
  },
];

export default function DashboardPage() {
  return (
    <PageShell
      title="AIGO Command Center"
      description="Enterprise command center for AI governance, risk, compliance, and operational oversight."
    >
      <div className="grid gap-4 md:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-xl border border-gray-200 bg-white p-5 lg:col-span-2">
          <div className="flex items-center gap-2">
            <Gauge className="h-5 w-5 text-gray-500" />
            <h2 className="text-base font-semibold text-gray-900">
              Governance Posture
            </h2>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {governanceSignals.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-lg border border-gray-100 bg-gray-50 p-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <Icon className="h-5 w-5 text-gray-500" />
                    <span className="text-2xl font-semibold text-gray-900">
                      {item.value}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">{item.title}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-gray-500" />
            <h2 className="text-base font-semibold text-gray-900">
              Platform Focus
            </h2>
          </div>

          <div className="mt-5 space-y-4 text-sm text-gray-600">
            <p>
              AIGO is currently operating in foundation mode. Services, hooks,
              routes, and governance domains are ready for live backend data.
            </p>

            <p>
              Next maturity step: replace static summaries with real records from
              your FastAPI backend.
            </p>
          </div>
        </section>
      </div>

      <section className="rounded-xl border border-gray-200 bg-white p-5">
        <h2 className="text-base font-semibold text-gray-900">
          Quick Actions
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"
            >
              <h3 className="text-sm font-semibold text-gray-900">
                {action.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {action.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}