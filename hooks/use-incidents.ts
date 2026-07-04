// hooks/use-incidents.ts
"use client";

import { useEffect, useState } from "react";
import { incidentsService } from "@/services";
import type { Incident } from "@/types";

export function useIncidents() {
  const [data, setData] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);
      setData(await incidentsService.list());
    } catch {
      setError("Failed to load incidents.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { data, loading, error, reload: load };
}