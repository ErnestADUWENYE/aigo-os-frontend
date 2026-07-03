"use client";

import Button from "@/components/ui/Button";

export default function ErrorPage({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-2xl font-bold text-gray-900">
        Something went wrong
      </h1>

      <p className="mt-2 max-w-md text-gray-500">
        AIGO OS could not complete this request. Please retry or contact your
        workspace administrator if the issue continues.
      </p>

      <div className="mt-6">
        <Button onClick={reset}>Retry</Button>
      </div>
    </div>
  );
}