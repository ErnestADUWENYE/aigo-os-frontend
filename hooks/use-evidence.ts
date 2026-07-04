// hooks/use-evidence.ts
"use client";

import { useEffect, useState } from "react";
import { evidenceService } from "@/services";
import type { Evidence } from "@/types";

export function useEvidence() {
  const [data, setData] = useState<Evidence[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);
      setData(await evidenceService.list());
    } catch {
      setError("Failed to load evidence.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { data, loading, error, reload: load };
}