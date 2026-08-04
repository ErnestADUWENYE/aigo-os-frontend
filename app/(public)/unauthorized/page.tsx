import Link from "next/link";
import { LogIn } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#e8eef6] px-5">
      <section className="w-full max-w-lg rounded-2xl border border-[#cbd7e5] bg-white p-8 shadow-[0_12px_32px_rgba(31,65,101,0.10)]">
        <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#168fca]">
          Authentication required
        </div>

        <h1 className="mt-3 text-2xl font-semibold text-[#172033]">
          Sign in to continue
        </h1>

        <p className="mt-3 text-sm leading-6 text-[#607188]">
          This AIGO-OS workspace requires an authenticated session.
        </p>

        <Link
          href="/sign-in"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#1768a7] px-4 py-2.5 text-sm font-semibold text-white"
        >
          <LogIn className="h-4 w-4" />
          Go to sign in
        </Link>
      </section>
    </main>
  );
}
