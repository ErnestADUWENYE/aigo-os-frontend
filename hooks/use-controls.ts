// hooks/use-controls.ts
"use client";

import { useEffect, useState } from "react";
import { controlsService } from "@/services";
import type { Control } from "@/types";

export function useControls() {
  const [data, setData] = useState<Control[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);
      setData(await controlsService.list());
    } catch {
      setError("Failed to load controls.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { data, loading, error, reload: load };
}