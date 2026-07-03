import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Governance Analytics</h1>
        <p className="mt-2 text-gray-500">
          Measure AI governance performance, policy effectiveness, compliance trends, and risk exposure.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card><p className="text-sm text-gray-500">Policy Violations</p><p className="mt-2 text-3xl font-bold">143</p><Badge variant="warning">+8%</Badge></Card>
        <Card><p className="text-sm text-gray-500">Approval Rate</p><p className="mt-2 text-3xl font-bold">87%</p><Badge variant="success">Healthy</Badge></Card>
        <Card><p className="text-sm text-gray-500">Mean Review Time</p><p className="mt-2 text-3xl font-bold">2.4h</p><Badge variant="info">SLA met</Badge></Card>
      </div>

      <Card>
        <h2 className="text-lg font-semibold text-gray-900">Trend Analysis</h2>
        <p className="mt-2 text-sm text-gray-500">
          Charts will connect to backend analytics endpoints for violations, risk scoring, agent activity, and compliance posture.
        </p>
      </Card>
    </div>
  );
}