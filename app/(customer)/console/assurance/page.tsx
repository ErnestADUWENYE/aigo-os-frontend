import {
  ClipboardCheck,
  Construction,
  FileCheck2,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

const plannedCapabilities = [
  {
    title: "Risk assessments",
    description:
      "Evaluate AI systems, vendors, and operational risks against governed criteria.",
    icon: SearchCheck,
  },
  {
    title: "Control testing",
    description:
      "Test control effectiveness and monitor remediation status.",
    icon: ShieldCheck,
  },
  {
    title: "Evidence management",
    description:
      "Collect, review, and retain evidence for assurance activities.",
    icon: FileCheck2,
  },
  {
    title: "Findings and remediation",
    description:
      "Track assurance findings, owners, due dates, and corrective actions.",
    icon: ClipboardCheck,
  },
];

export default function AssurancePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border p-8">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl border p-4">
            <Construction
              aria-hidden="true"
              className="size-6"
            />
          </div>

          <div>
            <p className="text-sm font-medium opacity-65">
              Capability unavailable
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Assurance
            </h2>

            <p className="mt-3 max-w-2xl opacity-70">
              The Assurance backend domain is reserved but
              has not yet been implemented. No assurance
              records are currently available.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-label="Planned assurance capabilities"
        className="grid gap-4 md:grid-cols-2"
      >
        {plannedCapabilities.map((capability) => {
          const Icon = capability.icon;

          return (
            <article
              className="rounded-2xl border p-6"
              key={capability.title}
            >
              <Icon
                aria-hidden="true"
                className="size-5"
              />

              <h3 className="mt-4 font-semibold">
                {capability.title}
              </h3>

              <p className="mt-2 text-sm opacity-65">
                {capability.description}
              </p>

              <span className="mt-5 inline-flex rounded-full border px-3 py-1 text-xs">
                Planned
              </span>
            </article>
          );
        })}
      </section>
    </div>
  );
}
