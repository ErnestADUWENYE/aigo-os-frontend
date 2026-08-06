import {
  Construction,
  LockKeyhole,
} from "lucide-react";

export default function Page() {
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
              Reports
            </h2>

            <p className="mt-3 max-w-2xl opacity-70">
              Reporting and export services are reserved but not yet implemented in the backend.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border p-6">
        <div className="flex items-start gap-3">
          <LockKeyhole
            aria-hidden="true"
            className="mt-0.5 size-5"
          />

          <div>
            <h3 className="font-semibold">
              Backend implementation required
            </h3>

            <p className="mt-2 text-sm opacity-65">
              This route is intentionally present so the
              customer console remains complete without
              displaying fabricated or static operational
              data.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
