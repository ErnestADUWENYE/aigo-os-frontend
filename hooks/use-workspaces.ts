// hooks/use-workspaces.ts
"use client";

import { useEffect, useState } from "react";
import { workspacesService } from "@/services";
import type { Workspace } from "@/types";

export function useWorkspaces() {
  const [data, setData] = useState<Workspace[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);
      setData(await workspacesService.list());
    } catch {
      setError("Failed to load workspaces.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { data, loading, error, reload: load };
}