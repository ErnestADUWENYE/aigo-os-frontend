"use client";

import { useEffect } from "react";

import { ErrorState } from "@/components/system/ErrorState";

export default function ProtectedError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("AIGO-OS protected route error", {
      message: error.message,
      digest: error.digest,
    });
  }, [error]);

  return (
    <ErrorState
      title="Workspace request failed"
      description="AIGO-OS encountered an unexpected error while loading this workspace."
      retry={reset}
    />
  );
}
