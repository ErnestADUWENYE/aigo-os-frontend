// hooks/use-users.ts
"use client";

import { useEffect, useState } from "react";
import { usersService } from "@/services";
import type { IdentityUser } from "@/types";

export function useUsers() {
  const [data, setData] = useState<IdentityUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);
      setData(await usersService.list());
    } catch {
      setError("Failed to load users.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { data, loading, error, reload: load };
}

export function useCurrentUser() {
  const [data, setData] = useState<IdentityUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);
      setData(await usersService.me());
    } catch {
      setError("Failed to load current user.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { data, loading, error, reload: load };
}