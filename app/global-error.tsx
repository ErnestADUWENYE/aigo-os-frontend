"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <main className="grid min-h-screen place-items-center px-6">
          <section className="glass-panel luminous-border w-full max-w-xl rounded-[2rem] p-8 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-rose-300/10">
              <AlertTriangle className="h-7 w-7 text-rose-200" />
            </div>

            <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-rose-200">
              SYSTEM INTERRUPTION
            </p>

            <h1 className="mt-3 text-3xl font-semibold text-white">
              The control plane hit an unexpected error.
            </h1>

            <p className="mt-4 leading-7 text-slate-400">
              No data was changed. Retry the operation or return later if the
              issue persists.
            </p>

            <button
              type="button"
              onClick={reset}
              className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-3 font-semibold text-slate-950"
            >
              <RotateCcw className="h-4 w-4" />
              Retry
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
