// hooks/use-policies.ts
"use client";

import { useEffect, useState } from "react";
import { policiesService } from "@/services";
import type { Policy } from "@/types";

export function usePolicies() {
  const [data, setData] = useState<Policy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);
      setData(await policiesService.list());
    } catch {
      setError("Failed to load policies.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { data, loading, error, reload: load };
}