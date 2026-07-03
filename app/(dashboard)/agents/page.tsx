import AgentTable from "@/components/agents/AgentTable";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const agents = [
  { id: "ag_001", name: "Customer Support Copilot", type: "LLM Agent", status: "active", risk_level: "medium", owner: "Operations", created_at: "2026-07-01" },
  { id: "ag_002", name: "Finance Reconciliation Agent", type: "Workflow Agent", status: "active", risk_level: "high", owner: "Finance", created_at: "2026-06-24" },
  { id: "ag_003", name: "Policy Review Assistant", type: "Reviewer Agent", status: "monitoring", risk_level: "low", owner: "Governance", created_at: "2026-06-18" },
];

export default function AgentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Agent Registry</h1>
          <p className="mt-2 text-gray-500">
            Register, classify, monitor, and govern enterprise AI agents across your organization.
          </p>
        </div>
        <Button>Register Agent</Button>
      </div>

      <Card>
        <div className="grid gap-4 md:grid-cols-3">
          <div><p className="text-sm text-gray-500">Total Agents</p><p className="text-2xl font-bold">24</p></div>
          <div><p className="text-sm text-gray-500">High Risk</p><p className="text-2xl font-bold">4</p></div>
          <div><p className="text-sm text-gray-500">Under Monitoring</p><p className="text-2xl font-bold">11</p></div>
        </div>
      </Card>

      <AgentTable agents={agents} />
    </div>
  );
}