import PageShell from "@/components/shared/PageShell";

export default function GenerateReportPage() {
  return (
    <PageShell
      title="Generate Report"
      description="Create a governance, risk, compliance, audit, or executive report from AIGO platform data."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-xl border border-gray-200 bg-white p-5 lg:col-span-2">
          <h2 className="font-semibold text-gray-900">Report Builder</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Report title",
              "Report type",
              "Framework scope",
              "Date range",
              "Audience",
              "Owner",
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
              Included sections
            </span>
            <textarea
              className="min-h-28 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
              placeholder="Include executive summary, risk posture, incidents, controls, evidence, framework coverage, audit trail, and recommendations."
            />
          </label>
        </section>

        <aside className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Report Checklist</h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>Report type selected</p>
            <p>Scope and date range defined</p>
            <p>Evidence readiness checked</p>
            <p>Risk and control data included</p>
            <p>Export audience confirmed</p>
          </div>

          <button className="mt-5 w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
            Generate Draft
          </button>
        </aside>
      </div>
    </PageShell>
  );
}