import StatsCard from "@/components/dashboard/StatsCard";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

const metrics = [
  { title: "Registered AI Agents", value: 24, description: "Governed agents", change: "+12% this month", trend: "up" as const },
  { title: "Active Policies", value: 18, description: "Enforced controls", change: "3 updated today", trend: "neutral" as const },
  { title: "Open Reviews", value: 7, description: "Human oversight cases", change: "-4 since yesterday", trend: "down" as const },
  { title: "Critical Alerts", value: 2, description: "Require immediate action", change: "High priority", trend: "down" as const },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Executive Governance Dashboard</h1>
        <p className="mt-2 text-gray-500">
          Enterprise overview of AI agents, policy enforcement, risk posture, and compliance health.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <StatsCard key={metric.title} {...metric} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold text-gray-900">Governance Health</h2>
          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Policy Coverage</span>
              <Badge variant="success">92%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Risk Exposure</span>
              <Badge variant="warning">Medium</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Compliance Readiness</span>
              <Badge variant="info">SOC2 / ISO ready</Badge>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-gray-900">Priority Actions</h2>
          <div className="mt-5 space-y-3 text-sm text-gray-600">
            <p>• Review 2 high-risk agent decisions awaiting approval.</p>
            <p>• Update privacy policy enforcement for customer-data agents.</p>
            <p>• Investigate anomaly alert from production assistant cluster.</p>
          </div>
        </Card>
      </div>
    </div>
  );
}