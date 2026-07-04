// hooks/use-integrations.ts
"use client";

import { useEffect, useState } from "react";
import { integrationsService } from "@/services";
import type { Integration } from "@/types";

export function useIntegrations() {
  const [data, setData] = useState<Integration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);
      setData(await integrationsService.list());
    } catch {
      setError("Failed to load integrations.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { data, loading, error, reload: load };
}