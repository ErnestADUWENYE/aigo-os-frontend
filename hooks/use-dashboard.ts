// hooks/use-dashboard.ts
"use client";

import { useEffect, useState } from "react";
import {
  dashboardService,
  type DashboardActivity,
  type DashboardSummary,
} from "@/services";

export function useDashboardSummary() {
  const [data, setData] = useState<DashboardSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);
      setData(await dashboardService.summary());
    } catch {
      setError("Failed to load dashboard summary.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { data, loading, error, reload: load };
}

export function useDashboardActivity() {
  const [data, setData] = useState<DashboardActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);
      setData(await dashboardService.activity());
    } catch {
      setError("Failed to load dashboard activity.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { data, loading, error, reload: load };
}