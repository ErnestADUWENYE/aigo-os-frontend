// hooks/use-audits.ts
"use client";

import { useCallback, useEffect, useState } from "react";
import {
  auditsService,
  type AuditLog,
} from "@/services";

export function useAudits() {
  const [data, setData] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await auditsService.list();

      setData(Array.isArray(result) ? result : []);
    } catch (error) {
      console.error("Failed to load audit logs:", error);

      setError("Failed to load audit logs.");
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