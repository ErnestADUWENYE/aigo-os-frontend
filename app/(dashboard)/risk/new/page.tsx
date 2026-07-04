import PageShell from "@/components/shared/PageShell";

export default function NewRiskPage() {
  return (
    <PageShell
      title="New Risk"
      description="Create an AI risk record with category, inherent risk, residual risk, mitigation plan, and accountable owner."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-xl border border-gray-200 bg-white p-5 lg:col-span-2">
          <h2 className="font-semibold text-gray-900">Risk Assessment</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Risk title",
              "Category",
              "Inherent risk level",
              "Residual risk level",
              "Risk owner",
              "Target resolution date",
            ].map((label) => (
              <label key={label} className="space-y-2">
                <span className="text-sm font-medium text-gray-700">
                  {label}
                </span>
                <input
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
                  placeholder={label}
                />
              </label>
            ))}
          </div>

          <label className="mt-4 block space-y-2">
            <span className="text-sm font-medium text-gray-700">
              Risk description
            </span>
            <textarea
              className="min-h-28 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
              placeholder="Describe the risk scenario, affected AI assets, potential impact, likelihood, and trigger conditions."
            />
          </label>

          <label className="mt-4 block space-y-2">
            <span className="text-sm font-medium text-gray-700">
              Mitigation plan
            </span>
            <textarea
              className="min-h-28 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
              placeholder="Define controls, evidence requirements, owner actions, review cadence, and acceptance criteria."
            />
          </label>
        </section>

        <aside className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Risk Workflow</h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>Classify inherent risk</p>
            <p>Identify affected AI systems</p>
            <p>Map controls and policies</p>
            <p>Define mitigation plan</p>
            <p>Assign owner and due date</p>
            <p>Track residual risk</p>
          </div>

          <button className="mt-5 w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
            Save Risk Draft
          </button>
        </aside>
      </div>
    </PageShell>
  );
}