// hooks/use-organizations.ts
"use client";

import { useEffect, useState } from "react";
import { organizationsService } from "@/services";
import type { Organization } from "@/types";

export function useOrganizations() {
  const [data, setData] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);
      setData(await organizationsService.list());
    } catch {
      setError("Failed to load organizations.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { data, loading, error, reload: load };
}