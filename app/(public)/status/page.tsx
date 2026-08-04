import Link from "next/link";
import {
  ArrowLeft,
  Database,
  RadioTower,
  ServerCog,
  ShieldCheck,
} from "lucide-react";

import { StatusPanel } from "@/components/system/StatusPanel";
import { getPlatformHealth } from "@/lib/api/health";
import { publicEnvironment } from "@/lib/config/environment";

export const dynamic = "force-dynamic";

export default async function StatusPage() {
  const health = await getPlatformHealth();

  const checkedAt = new Intl.DateTimeFormat(
    "en",
    {
      dateStyle: "medium",
      timeStyle: "medium",
    },
  ).format(new Date(health.checkedAt));

  return (
    <main className="min-h-screen bg-[#172033] px-5 py-8 text-slate-100 sm:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to platform overview
        </Link>

        <header className="mt-9 flex flex-col gap-5 border-b border-white/[0.08] pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
              <RadioTower className="h-4 w-4" />
              Platform telemetry
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white">
              System health
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Live environment status for the frontend,
              backend API, and database boundary.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 py-3">
            <p className="text-xs text-slate-500">
              Last checked
            </p>
            <p className="mt-1 text-sm font-medium text-slate-200">
              {checkedAt}
            </p>
          </div>
        </header>

        <section className="mt-7 grid gap-4 md:grid-cols-3">
          <StatusPanel
            title="Frontend application"
            description="AIGO-OS customer console"
            status={health.frontend.state}
            detail={health.frontend.detail}
          />

          <StatusPanel
            title="Backend API"
            description="AIGO-OS API"
            status={health.backend.state}
            detail={health.backend.detail}
          />

          <StatusPanel
            title="Database"
            description="Supabase environment"
            status={health.database.state}
            detail={health.database.detail}
          />
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#24324a]">
            <div className="border-b border-white/[0.07] px-5 py-4">
              <h2 className="text-sm font-semibold text-white">
                Environment details
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Active Phase 0 frontend configuration
              </p>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {[
                [
                  "Environment",
                  publicEnvironment.name,
                ],
                [
                  "Frontend version",
                  publicEnvironment.appVersion,
                ],
                [
                  "Backend version",
                  health.backend.version ?? "Unavailable",
                ],
                [
                  "API endpoint",
                  publicEnvironment.apiBaseUrl,
                ],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-2 px-5 py-4 text-sm sm:grid-cols-[180px_1fr]"
                >
                  <span className="text-slate-400">
                    {label}
                  </span>
                  <span className="break-all font-medium text-slate-100">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#24324a] p-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-white">
                  Security boundary
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Environment isolation
                </p>
              </div>

              <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-300/10">
                <ShieldCheck className="h-5 w-5 text-emerald-300" />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <ServerCog className="h-5 w-5 text-cyan-300" />
                <div>
                  <p className="text-sm font-medium text-slate-100">
                    API boundary
                  </p>
                  <p className="text-xs text-slate-400">
                    Environment configured
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Database className="h-5 w-5 text-violet-300" />
                <div>
                  <p className="text-sm font-medium text-slate-100">
                    Database boundary
                  </p>
                  <p className="text-xs text-slate-400">
                    Accessed through backend services
                  </p>
                </div>
              </div>
            </div>

            {health.backend.requestId ? (
              <p className="mt-6 border-t border-white/[0.07] pt-4 text-xs text-slate-400">
                Request ID: {health.backend.requestId}
              </p>
            ) : null}
          </div>
        </section>
      </section>
    </main>
  );
}
