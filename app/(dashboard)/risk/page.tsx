import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function RiskPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI Risk Management</h1>
        <p className="mt-2 text-gray-500">
          Assess and mitigate risks across AI agents, workflows, policies, data exposure, and business impact.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card><p className="text-sm text-gray-500">Overall Risk Score</p><p className="mt-2 text-3xl font-bold">64</p><Badge variant="warning">Medium</Badge></Card>
        <Card><p className="text-sm text-gray-500">High Risk Agents</p><p className="mt-2 text-3xl font-bold">4</p><Badge variant="danger">Needs review</Badge></Card>
        <Card><p className="text-sm text-gray-500">Mitigations Active</p><p className="mt-2 text-3xl font-bold">16</p><Badge variant="success">Protected</Badge></Card>
      </div>

      <Card>
        <h2 className="text-lg font-semibold">Top Risk Drivers</h2>
        <div className="mt-4 space-y-3 text-sm text-gray-600">
          <p>• Autonomous financial workflow execution</p>
          <p>• Sensitive customer data processing</p>
          <p>• External tool access by production agents</p>
        </div>
      </Card>
    </div>
  );
}