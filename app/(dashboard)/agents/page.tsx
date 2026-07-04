import Link from "next/link";
import { Bot, ShieldAlert, CheckCircle2, Clock } from "lucide-react";
import MetricCard from "@/components/shared/MetricCard";
import PageShell from "@/components/shared/PageShell";

const agents = [
  {
    id: "agent-customer-support",
    name: "Customer Support Copilot",
    owner: "Operations",
    risk: "Medium",
    status: "Approved",
    autonomy: "Human-in-the-loop",
  },
  {
    id: "agent-credit-review",
    name: "Credit Review Agent",
    owner: "Risk Team",
    risk: "High",
    status: "In Review",
    autonomy: "Decision support",
  },
  {
    id: "agent-security-monitor",
    name: "Security Monitoring Agent",
    owner: "Security",
    risk: "High",
    status: "Monitoring",
    autonomy: "Autonomous escalation",
  },
];

export default function AgentsPage() {
  return (
    <PageShell
      title="Agent Registry"
      description="Govern autonomous and assisted AI agents across ownership, risk, controls, reviews, and incidents."
      action={
        <Link
          href="/agents/new"
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Register Agent
        </Link>
      }
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Total Agents" value={24} helper="Registered" />
        <MetricCard label="High Risk" value={5} helper="Needs oversight" />
        <MetricCard label="Approved" value={16} helper="Operational" />
        <MetricCard label="In Review" value={8} helper="Pending decision" />
      </div>

      <section className="rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-5">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-gray-500" />
            <h2 className="font-semibold text-gray-900">Registered Agents</h2>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {agents.map((agent) => (
            <Link
              key={agent.id}
              href={`/agents/${agent.id}`}
              className="grid gap-4 p-5 transition hover:bg-gray-50 md:grid-cols-5"
            >
              <div className="md:col-span-2">
                <p className="font-medium text-gray-900">{agent.name}</p>
                <p className="text-sm text-gray-500">Owner: {agent.owner}</p>
              </div>

              <p className="text-sm text-gray-600">Risk: {agent.risk}</p>
              <p className="text-sm text-gray-600">Status: {agent.status}</p>
              <p className="text-sm text-gray-600">{agent.autonomy}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <ShieldAlert className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">Risk Governance</h3>
          <p className="mt-2 text-sm text-gray-500">
            Classify autonomy, business impact, data sensitivity, and misuse risk.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <CheckCircle2 className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">Approval State</h3>
          <p className="mt-2 text-sm text-gray-500">
            Track reviews, approvals, exceptions, and production readiness.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <Clock className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">Monitoring</h3>
          <p className="mt-2 text-sm text-gray-500">
            Monitor incidents, alerts, controls, and operational changes.
          </p>
        </div>
      </div>
    </PageShell>
  );
}