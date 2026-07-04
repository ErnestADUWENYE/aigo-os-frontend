// hooks/use-frameworks.ts
"use client";

import { useCallback, useEffect, useState } from "react";
import {
  frameworksService,
  type Framework,
} from "@/services";

export function useFrameworks() {
  const [data, setData] = useState<Framework[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await frameworksService.list();

      setData(Array.isArray(result) ? result : []);
    } catch (error) {
      console.error("Failed to load frameworks:", error);

      setError("Failed to load frameworks.");
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return {
    data,
    loading,
    error,
    reload: load,
  };
}