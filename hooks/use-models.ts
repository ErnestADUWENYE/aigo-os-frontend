// hooks/use-models.ts
"use client";

import { useEffect, useState } from "react";
import { modelsService } from "@/services";
import type { Model } from "@/types";

export function useModels() {
  const [data, setData] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);
      setData(await modelsService.list());
    } catch {
      setError("Failed to load models.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { data, loading, error, reload: load };
}