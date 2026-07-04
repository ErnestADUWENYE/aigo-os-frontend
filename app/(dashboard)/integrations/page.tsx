import Link from "next/link";
import {
  Activity,
  Cable,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import MetricCard from "@/components/shared/MetricCard";
import PageShell from "@/components/shared/PageShell";

const integrations = [
  {
    id: "integration-openai",
    name: "OpenAI",
    category: "AI Provider",
    purpose: "Model and agent telemetry",
    status: "Connected",
    sync: "Healthy",
  },
  {
    id: "integration-azure",
    name: "Azure AI",
    category: "AI Platform",
    purpose: "Model inventory and deployment governance",
    status: "Connected",
    sync: "Healthy",
  },
  {
    id: "integration-slack",
    name: "Slack",
    category: "Collaboration",
    purpose: "Alert and review notifications",
    status: "Connected",
    sync: "Warning",
  },
  {
    id: "integration-jira",
    name: "Jira",
    category: "Workflow",
    purpose: "Risk and remediation tracking",
    status: "Pending",
    sync: "Not started",
  },
];

export default function IntegrationsPage() {
  return (
    <PageShell
      title="Integrations"
      description="Connect AIGO with AI providers, enterprise systems, monitoring platforms, evidence sources, and governance workflows."
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Integrations" value={12} helper="Configured" />
        <MetricCard label="Connected" value={8} helper="Active connections" />
        <MetricCard label="Healthy" value={7} helper="Syncing normally" />
        <MetricCard label="Needs Attention" value={2} helper="Connection issues" />
      </div>

      <section className="rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-5">
          <div className="flex items-center gap-2">
            <Cable className="h-5 w-5 text-gray-500" />
            <h2 className="font-semibold text-gray-900">
              Integration Registry
            </h2>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {integrations.map((integration) => (
            <Link
              key={integration.id}
              href={`/integrations/${integration.id}`}
              className="grid gap-4 p-5 transition hover:bg-gray-50 md:grid-cols-6"
            >
              <div className="md:col-span-2">
                <p className="font-medium text-gray-900">
                  {integration.name}
                </p>
                <p className="text-sm text-gray-500">
                  {integration.category}
                </p>
              </div>

              <p className="text-sm text-gray-600 md:col-span-2">
                {integration.purpose}
              </p>

              <p className="text-sm text-gray-600">
                Status: {integration.status}
              </p>

              <p className="text-sm text-gray-600">
                Sync: {integration.sync}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <Activity className="h-5 w-5 text-gray-500" />

          <h3 className="mt-3 font-semibold text-gray-900">
            AI Telemetry
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Ingest model, agent, deployment, evaluation, and operational signals
            into the AIGO governance layer.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <RefreshCw className="h-5 w-5 text-gray-500" />

          <h3 className="mt-3 font-semibold text-gray-900">
            Data Synchronization
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Track connection health, sync jobs, failures, retries, and source
            freshness.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <CheckCircle2 className="h-5 w-5 text-gray-500" />

          <h3 className="mt-3 font-semibold text-gray-900">
            Governance Automation
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Trigger alerts, reviews, evidence collection, incidents, and
            remediation workflows from connected systems.
          </p>
        </div>
      </div>
    </PageShell>
  );
}