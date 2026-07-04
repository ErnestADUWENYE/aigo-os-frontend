import Link from "next/link";
import { FileText, ShieldCheck, AlertTriangle, Archive } from "lucide-react";
import MetricCard from "@/components/shared/MetricCard";
import PageShell from "@/components/shared/PageShell";

const policies = [
  {
    id: "policy-human-oversight",
    name: "Human Oversight Policy",
    category: "Safety",
    severity: "High",
    mode: "Enforced",
    status: "Active",
  },
  {
    id: "policy-sensitive-data",
    name: "Sensitive Data Use Policy",
    category: "Privacy",
    severity: "Critical",
    mode: "Enforced",
    status: "Active",
  },
  {
    id: "policy-model-evaluation",
    name: "Model Evaluation Policy",
    category: "Quality",
    severity: "Medium",
    mode: "Monitor",
    status: "Draft",
  },
];

export default function PoliciesPage() {
  return (
    <PageShell
      title="Policies"
      description="Define, monitor, and enforce AI governance policies across models, agents, workflows, and evidence."
      action={
        <Link
          href="/policies/new"
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          New Policy
        </Link>
      }
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Total Policies" value={32} helper="In library" />
        <MetricCard label="Active" value={25} helper="Currently enforced" />
        <MetricCard label="Monitor Mode" value={9} helper="Observation only" />
        <MetricCard label="Critical" value={4} helper="Highest severity" />
      </div>

      <section className="rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-5">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-gray-500" />
            <h2 className="font-semibold text-gray-900">Policy Library</h2>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {policies.map((policy) => (
            <Link
              key={policy.id}
              href={`/policies/${policy.id}`}
              className="grid gap-4 p-5 transition hover:bg-gray-50 md:grid-cols-6"
            >
              <div className="md:col-span-2">
                <p className="font-medium text-gray-900">{policy.name}</p>
                <p className="text-sm text-gray-500">
                  Category: {policy.category}
                </p>
              </div>

              <p className="text-sm text-gray-600">
                Severity: {policy.severity}
              </p>
              <p className="text-sm text-gray-600">Mode: {policy.mode}</p>
              <p className="text-sm text-gray-600">Status: {policy.status}</p>
              <p className="text-sm text-gray-400">View details →</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <ShieldCheck className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">
            Enforcement Rules
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Convert AI governance standards into operational rules and guardrails.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <AlertTriangle className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">
            Violations & Exceptions
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Track breaches, exception approvals, policy waivers, and remediation.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <Archive className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">
            Policy Lifecycle
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Manage drafts, approvals, active policies, retired rules, and reviews.
          </p>
        </div>
      </div>
    </PageShell>
  );
}