import { LoaderCircle } from "lucide-react";

type LoadingStateProps = {
  title?: string;
  description?: string;
};

export function LoadingState({
  title = "Loading workspace",
  description = "Preparing your AIGO-OS workspace...",
}: LoadingStateProps) {
  return (
    <div className="grid min-h-[320px] place-items-center p-8">
      <div className="flex max-w-sm flex-col items-center text-center">
        <div className="grid h-12 w-12 place-items-center rounded-xl border border-[#b8c9dc] bg-white shadow-sm">
          <LoaderCircle className="h-5 w-5 animate-spin text-[#168fca]" />
        </div>

        <h2 className="mt-5 text-base font-semibold text-[#172033]">
          {title}
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#53647a]">
          {description}
        </p>
      </div>
    </div>
  );
}
