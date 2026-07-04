// hooks/use-risks.ts
"use client";

import { useEffect, useState } from "react";
import { risksService } from "@/services";
import type { Risk } from "@/types";

export function useRisks() {
  const [data, setData] = useState<Risk[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);
      setData(await risksService.list());
    } catch {
      setError("Failed to load risks.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { data, loading, error, reload: load };
}