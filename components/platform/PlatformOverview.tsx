import Link from "next/link";
import {
  Activity,
  Database,
  Server,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    label: "Frontend",
    detail: "AIGO-OS customer console",
    state: "Healthy",
    meta: "Next.js",
    icon: Activity,
  },
  {
    label: "Backend API",
    detail: "Application services",
    state: "Ready",
    meta: "API v1",
    icon: Server,
  },
  {
    label: "Database",
    detail: "Demo data environment",
    state: "Configured",
    meta: "Supabase",
    icon: Database,
  },
];

export function PlatformOverview() {
  return (
    <div className="mx-auto max-w-[1500px] px-5 py-8 md:px-8 lg:px-10">
      <div className="flex flex-col gap-5 border-b border-[#dce4ee] pb-7 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#168fca]">
              Control plane
            </span>

            <span className="rounded-md border border-[#cbd7e5] bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#8798ad]">
              Phase 0
            </span>
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-[#152238] md:text-[30px]">
            Platform overview
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#52657d]">
            Foundation status for the AIGO-OS application environment,
            infrastructure boundaries, and core services.
          </p>
        </div>

        <Link
          href="/status"
          className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-lg border border-[#b8dbea] bg-white px-4 text-sm font-medium text-[#0d518c] shadow-sm transition hover:bg-[#edf7fb]"
        >
          <Activity className="h-4 w-4" />
          Open system health
        </Link>
      </div>

      <section className="grid gap-4 py-7 md:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.label}
              className="rounded-2xl border border-[#cbd7e5] bg-white p-5 shadow-[0_8px_24px_rgba(31,65,101,0.10)]"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-9 w-9 place-items-center rounded-lg border border-[#cbd7e5] bg-[#f5f8fb]">
                  <Icon className="h-[18px] w-[18px] text-[#168fca]" />
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-[#16845f]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#19a779]" />
                  {service.state}
                </div>
              </div>

              <div className="mt-5">
                <p className="text-xs font-medium text-[#71859d]">
                  {service.label}
                </p>

                <h2 className="mt-1.5 text-base font-semibold text-[#1d2d44]">
                  {service.detail}
                </h2>
              </div>

              <div className="mt-5 border-t border-[#e5ebf1] pt-3 text-xs text-[#7d8ca0]">
                {service.meta}
              </div>
            </article>
          );
        })}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.4fr_0.8fr]">
        <div className="overflow-hidden rounded-2xl border border-[#cbd7e5] bg-white shadow-[0_6px_18px_rgba(31,65,101,0.05)]">
          <div className="flex items-center justify-between border-b border-[#e5ebf1] px-5 py-4">
            <div>
              <h2 className="text-sm font-semibold text-[#1d2d44]">
                Environment
              </h2>

              <p className="mt-1 text-xs text-[#6f8095]">
                Active frontend configuration
              </p>
            </div>

            <span className="rounded-md border border-[#ead8a6] bg-[#fff8e7] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#9a6d0e]">
              Development
            </span>
          </div>

          <div className="divide-y divide-[#e8edf3]">
            {[
              ["Environment", "Local"],
              ["API contract", "v1"],
              ["Frontend runtime", "Next.js"],
              ["Deployment isolation", "Enabled"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[1fr_auto] gap-5 px-5 py-3.5 text-sm"
              >
                <span className="text-[#5c6f87]">
                  {label}
                </span>

                <span className="font-medium text-[#2f3e52]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#cbd7e5] bg-white p-5 shadow-[0_8px_24px_rgba(31,65,101,0.10)]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-[#1d2d44]">
                Foundation readiness
              </h2>

              <p className="mt-1 text-xs text-[#6f8095]">
                Phase 0 frontend
              </p>
            </div>

            <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#edf9f4]">
              <ShieldCheck className="h-[18px] w-[18px] text-[#19a779]" />
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {[
              "Application shell",
              "Design system",
              "Error boundary",
              "Loading boundary",
              "Health surface",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full border border-[#bfe7d7] bg-[#eefaf5]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#19a779]" />
                </span>

                <span className="text-sm text-[#5d6d82]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
