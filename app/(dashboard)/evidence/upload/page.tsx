import PageShell from "@/components/shared/PageShell";

export default function UploadEvidencePage() {
  return (
    <PageShell
      title="Upload Evidence"
      description="Attach documents, logs, screenshots, attestations, and assessment records to AIGO governance controls."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-xl border border-gray-200 bg-white p-5 lg:col-span-2">
          <h2 className="font-semibold text-gray-900">Evidence Intake</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Evidence name",
              "Evidence type",
              "Linked control",
              "Linked framework",
              "Owner",
              "Expiration date",
            ].map((label) => (
              <label key={label} className="space-y-2">
                <span className="text-sm font-medium text-gray-700">{label}</span>
                <input
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
                  placeholder={label}
                />
              </label>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-dashed border-gray-300 p-8 text-center">
            <p className="text-sm font-medium text-gray-900">Drop evidence file here</p>
            <p className="mt-2 text-sm text-gray-500">
              Upload PDFs, images, CSV exports, logs, attestations, or assessment reports.
            </p>
          </div>

          <label className="mt-4 block space-y-2">
            <span className="text-sm font-medium text-gray-700">Evidence notes</span>
            <textarea
              className="min-h-28 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
              placeholder="Describe what this evidence proves, which requirement it supports, and any review notes."
            />
          </label>
        </section>

        <aside className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Evidence Checklist</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>File uploaded</p>
            <p>Owner assigned</p>
            <p>Linked to control or framework</p>
            <p>Review date set</p>
            <p>Retention requirement documented</p>
          </div>

          <button className="mt-5 w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
            Save Evidence
          </button>
        </aside>
      </div>
    </PageShell>
  );
}