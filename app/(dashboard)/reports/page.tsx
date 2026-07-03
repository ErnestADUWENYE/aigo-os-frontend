import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Audit & Compliance Reports</h1>
          <p className="mt-2 text-gray-500">
            Generate exportable reports for regulators, executives, auditors, and governance teams.
          </p>
        </div>
        <Button>Generate Report</Button>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card><h2 className="font-semibold">Executive Risk Report</h2><p className="mt-2 text-sm text-gray-500">High-level AI governance posture and top risks.</p></Card>
        <Card><h2 className="font-semibold">Policy Enforcement Report</h2><p className="mt-2 text-sm text-gray-500">Policy violations, actions, and enforcement outcomes.</p></Card>
        <Card><h2 className="font-semibold">Audit Trail Export</h2><p className="mt-2 text-sm text-gray-500">Traceable activity logs for compliance reviews.</p></Card>
      </div>
    </div>
  );
}