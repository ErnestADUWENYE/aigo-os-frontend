import Link from "next/link";
import { Brain, CheckCircle2, Clock, ShieldAlert } from "lucide-react";
import MetricCard from "@/components/shared/MetricCard";
import PageShell from "@/components/shared/PageShell";

const models = [
  {
    id: "model-gpt-4o",
    name: "GPT-4o",
    provider: "OpenAI",
    usage: "Customer support and analysis",
    risk: "Medium",
    status: "Approved",
  },
  {
    id: "model-claude-sonnet",
    name: "Claude Sonnet",
    provider: "Anthropic",
    usage: "Document review",
    risk: "Medium",
    status: "In Review",
  },
  {
    id: "model-credit-risk",
    name: "Credit Risk Classifier",
    provider: "Internal",
    usage: "Risk scoring",
    risk: "High",
    status: "Restricted",
  },
];

export default function ModelsPage() {
  return (
    <PageShell
      title="Model Inventory"
      description="Catalog AI models, providers, versions, use cases, evaluations, and deployment risk."
      action={
        <Link
          href="/models/new"
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Add Model
        </Link>
      }
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Total Models" value={18} helper="Registered" />
        <MetricCard label="Production" value={9} helper="Live usage" />
        <MetricCard label="High Risk" value={3} helper="Restricted use" />
        <MetricCard label="Pending Review" value={4} helper="Awaiting approval" />
      </div>

      <section className="rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-5">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-gray-500" />
            <h2 className="font-semibold text-gray-900">Registered Models</h2>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {models.map((model) => (
            <Link
              key={model.id}
              href={`/models/${model.id}`}
              className="grid gap-4 p-5 transition hover:bg-gray-50 md:grid-cols-5"
            >
              <div className="md:col-span-2">
                <p className="font-medium text-gray-900">{model.name}</p>
                <p className="text-sm text-gray-500">
                  Provider: {model.provider}
                </p>
              </div>

              <p className="text-sm text-gray-600">{model.usage}</p>
              <p className="text-sm text-gray-600">Risk: {model.risk}</p>
              <p className="text-sm text-gray-600">Status: {model.status}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <CheckCircle2 className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">
            Evaluation Readiness
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Track safety, fairness, quality, robustness, and approval evidence.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <ShieldAlert className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">
            Usage Restrictions
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Define allowed use cases, prohibited contexts, and escalation rules.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <Clock className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">
            Lifecycle Tracking
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Monitor model versions, retirement dates, changes, and reviews.
          </p>
        </div>
      </div>
    </PageShell>
  );
}