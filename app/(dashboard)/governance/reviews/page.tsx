import Link from "next/link";
import { ClipboardCheck } from "lucide-react";
import MetricCard from "@/components/shared/MetricCard";
import PageShell from "@/components/shared/PageShell";

const reviews = [
  {
    id: "review-agent-credit",
    title: "Credit Review Agent Approval",
    type: "Agent Review",
    risk: "High",
    status: "Pending",
  },
  {
    id: "review-model-evaluation",
    title: "Model Evaluation Exception",
    type: "Model Review",
    risk: "Medium",
    status: "Escalated",
  },
  {
    id: "review-policy-waiver",
    title: "Temporary Policy Waiver",
    type: "Policy Exception",
    risk: "High",
    status: "In Review",
  },
];

export default function ReviewsPage() {
  return (
    <PageShell
      title="Reviews"
      description="Manage AI governance approvals, exceptions, escalations, and decision records."
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Open Reviews" value={19} helper="Pending decisions" />
        <MetricCard label="Escalated" value={4} helper="Needs attention" />
        <MetricCard label="Approved" value={31} helper="Completed" />
        <MetricCard label="Rejected" value={6} helper="Closed" />
      </div>

      <section className="rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-5">
          <div className="flex items-center gap-2">
            <ClipboardCheck className="h-5 w-5 text-gray-500" />
            <h2 className="font-semibold text-gray-900">Review Queue</h2>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {reviews.map((review) => (
            <Link
              key={review.id}
              href={`/governance/reviews/${review.id}`}
              className="grid gap-4 p-5 transition hover:bg-gray-50 md:grid-cols-4"
            >
              <div>
                <p className="font-medium text-gray-900">{review.title}</p>
                <p className="text-sm text-gray-500">{review.type}</p>
              </div>
              <p className="text-sm text-gray-600">Risk: {review.risk}</p>
              <p className="text-sm text-gray-600">Status: {review.status}</p>
              <p className="text-sm text-gray-400">Open review →</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}