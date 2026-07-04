// hooks/use-agents.ts
"use client";

import { useEffect, useState } from "react";
import { agentsService } from "@/services";
import type { Agent } from "@/types";

export function useAgents() {
  const [data, setData] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);
      const result = await agentsService.list();
      setData(result);
    } catch {
      setError("Failed to load agents.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { data, loading, error, reload: load };
}