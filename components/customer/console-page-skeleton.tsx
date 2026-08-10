"use client";

export function ConsolePageSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="rounded-3xl border p-8">
        <div className="h-5 w-48 rounded bg-current opacity-10" />
        <div className="mt-4 h-9 w-72 rounded bg-current opacity-10" />
        <div className="mt-4 h-4 w-full max-w-2xl rounded bg-current opacity-10" />
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="h-36 rounded-2xl border bg-current opacity-5" />
        <div className="h-36 rounded-2xl border bg-current opacity-5" />
        <div className="h-36 rounded-2xl border bg-current opacity-5" />
        <div className="h-36 rounded-2xl border bg-current opacity-5" />
      </div>

      <div className="h-96 rounded-2xl border bg-current opacity-5" />
    </div>
  );
}
