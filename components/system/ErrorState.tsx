import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  RotateCcw,
} from "lucide-react";

type ErrorStateProps = {
  title?: string;
  description?: string;
  retry?: () => void;
  returnHref?: string;
};

export function ErrorState({
  title = "Something went wrong",
  description = "AIGO-OS could not complete this request.",
  retry,
  returnHref = "/",
}: ErrorStateProps) {
  return (
    <div className="grid min-h-[360px] place-items-center p-6">
      <section className="w-full max-w-lg rounded-2xl border border-[#cbd7e5] bg-white p-7 shadow-[0_12px_32px_rgba(31,65,101,0.10)]">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#fff1f3]">
          <AlertTriangle className="h-5 w-5 text-[#dc5b6d]" />
        </div>

        <h2 className="mt-5 text-xl font-semibold text-[#172033]">
          {title}
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#607188]">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {retry ? (
            <button
              type="button"
              onClick={retry}
              className="inline-flex items-center gap-2 rounded-lg bg-[#1768a7] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d518c]"
            >
              <RotateCcw className="h-4 w-4" />
              Try again
            </button>
          ) : null}

          <Link
            href={returnHref}
            className="inline-flex items-center gap-2 rounded-lg border border-[#cbd7e5] bg-white px-4 py-2.5 text-sm font-semibold text-[#0d518c] transition hover:bg-[#f4f7fb]"
          >
            <ArrowLeft className="h-4 w-4" />
            Return to workspace
          </Link>
        </div>
      </section>
    </div>
  );
}
