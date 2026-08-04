import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <section className="glass-panel luminous-border w-full max-w-xl rounded-[2rem] p-8 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-violet-300/10">
          <SearchX className="h-7 w-7 text-violet-200" />
        </div>

        <p className="mt-6 text-sm font-semibold tracking-[0.22em] text-violet-200">
          ROUTE NOT FOUND
        </p>

        <h1 className="mt-3 text-3xl font-semibold text-white">
          This part of the control plane does not exist.
        </h1>

        <p className="mt-4 leading-7 text-slate-400">
          The address may have changed, or the requested capability has not
          been enabled.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-3 font-semibold text-slate-950"
        >
          <ArrowLeft className="h-4 w-4" />
          Return home
        </Link>
      </section>
    </main>
  );
}
