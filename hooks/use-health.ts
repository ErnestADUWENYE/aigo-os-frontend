// hooks/use-health.ts
"use client";

import { useEffect, useState } from "react";
import { healthService, type HealthStatus } from "@/services";

export function useHealth() {
  const [data, setData] = useState<HealthStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);
      setData(await healthService.check());
    } catch {
      setError("Failed to check platform health.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { data, loading, error, reload: load };
}