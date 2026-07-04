import PageShell from "@/components/shared/PageShell";

export default function NewModelPage() {
  return (
    <PageShell
      title="Add Model"
      description="Register a new AI model with provider, version, use case, evaluations, and governance controls."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-xl border border-gray-200 bg-white p-5 lg:col-span-2">
          <h2 className="font-semibold text-gray-900">Model Intake</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Model name",
              "Provider",
              "Version",
              "Primary use case",
              "Risk level",
              "Deployment environment",
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
              Evaluation summary
            </span>
            <textarea
              className="min-h-32 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
              placeholder="Describe safety testing, quality benchmarks, fairness checks, limitations, and usage restrictions."
            />
          </label>
        </section>

        <aside className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Governance Checklist</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>Model owner assigned</p>
            <p>Approved business use case</p>
            <p>Evaluation evidence attached</p>
            <p>Risk level reviewed</p>
            <p>Usage restrictions documented</p>
          </div>

          <button className="mt-5 w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
            Save Draft
          </button>
        </aside>
      </div>
    </PageShell>
  );
}