import PolicyTable from "@/components/policies/PolicyTable";
import Button from "@/components/ui/Button";

const policies = [
  { id: "pol_001", name: "PII Redaction Policy", category: "Privacy", severity: "high", status: "active", enforcement: "Block and review" },
  { id: "pol_002", name: "Human Approval for Financial Actions", category: "Risk", severity: "high", status: "active", enforcement: "Require approval" },
  { id: "pol_003", name: "Toxic Output Detection", category: "Safety", severity: "medium", status: "active", enforcement: "Flag and monitor" },
];

export default function PoliciesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Policy Enforcement</h1>
          <p className="mt-2 text-gray-500">
            Define and enforce AI governance controls for safety, privacy, compliance, and risk.
          </p>
        </div>
        <Button>Create Policy</Button>
      </div>

      <PolicyTable policies={policies} />
    </div>
  );
}