import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function GovernancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Governance Control Center</h1>
        <p className="mt-2 text-gray-500">
          Manage governance frameworks, approval workflows, compliance posture, and organizational AI oversight.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold">Framework Coverage</h2>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between"><span>SOC 2 AI controls</span><Badge variant="success">Active</Badge></div>
            <div className="flex justify-between"><span>ISO 42001 readiness</span><Badge variant="info">In progress</Badge></div>
            <div className="flex justify-between"><span>EU AI Act mapping</span><Badge variant="warning">Review needed</Badge></div>
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Governance Workflows</h2>
          <p className="mt-2 text-sm text-gray-500">
            Configure approval chains, ownership, escalation paths, evidence collection, and policy exceptions.
          </p>
        </Card>
      </div>
    </div>
  );
}