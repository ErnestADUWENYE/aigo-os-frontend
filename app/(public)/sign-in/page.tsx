import {
  ArrowRight,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-[#e8eef6] px-5 py-12">
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-6xl place-items-center">
        <section className="w-full max-w-[460px] overflow-hidden rounded-2xl border border-[#cbd7e5] bg-white shadow-[0_18px_45px_rgba(31,65,101,0.12)]">
          <div className="border-b border-[#e2e8f0] bg-[#24334b] px-7 py-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white">
                <ShieldCheck className="h-5 w-5 text-[#168fca]" />
              </div>

              <div>
                <div className="font-bold tracking-[0.18em] text-white">
                  AIGO-OS
                </div>

                <div className="mt-0.5 text-xs text-[#d5deea]">
                  Secure workspace access
                </div>
              </div>
            </div>
          </div>

          <div className="p-7">
            <div className="grid h-10 w-10 place-items-center rounded-lg border border-[#cbd7e5] bg-[#f4f8fb]">
              <LockKeyhole className="h-[18px] w-[18px] text-[#168fca]" />
            </div>

            <h1 className="mt-5 text-xl font-semibold text-[#172033]">
              Sign in to AIGO-OS
            </h1>

            <p className="mt-2 text-sm leading-6 text-[#607188]">
              Authentication is connected through the AIGO-OS identity
              boundary. The production identity workflow is activated in
              Phase 1.
            </p>

            <div className="mt-6 rounded-xl border border-[#d7e2ec] bg-[#f5f8fb] p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#607188]">
                Phase 0
              </div>

              <p className="mt-2 text-sm text-[#53647a]">
                Authentication boundary established. Identity enforcement
                follows the Phase 1 security contract.
              </p>
            </div>

            <button
              type="button"
              disabled
              className="mt-6 flex h-11 w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-[#1768a7] px-4 text-sm font-semibold text-white opacity-70"
            >
              Continue to secure sign in
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
