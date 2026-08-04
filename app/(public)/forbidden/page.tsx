import Link from "next/link";
import { ShieldX } from "lucide-react";

export default function ForbiddenPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#e8eef6] px-5">
      <section className="w-full max-w-lg rounded-2xl border border-[#cbd7e5] bg-white p-8 shadow-[0_12px_32px_rgba(31,65,101,0.10)]">
        <ShieldX className="h-8 w-8 text-[#dc5b6d]" />

        <div className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#dc5b6d]">
          Access denied
        </div>

        <h1 className="mt-3 text-2xl font-semibold text-[#172033]">
          You do not have access
        </h1>

        <p className="mt-3 text-sm leading-6 text-[#607188]">
          Your authenticated identity does not have permission to access
          this AIGO-OS resource.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg border border-[#cbd7e5] bg-white px-4 py-2.5 text-sm font-semibold text-[#0d518c]"
        >
          Return to workspace
        </Link>
      </section>
    </main>
  );
}
