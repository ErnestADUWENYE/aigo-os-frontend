"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center p-6">
      <div className="max-w-md rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">
          Dashboard error
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Something went wrong while loading this AIGO workspace.
        </p>

        <p className="mt-3 text-xs text-gray-400">{error.message}</p>

        <button
          onClick={reset}
          className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Try again
        </button>
      </div>
    </div>
  );
}