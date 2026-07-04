// services/health.service.ts
import { apiClient, type RequestOptions } from "@/lib";

export type HealthStatus = {
  status: "ok" | "degraded" | "down";
  service: string;
  version?: string;
  timestamp?: string;
};

const BASE = "/health";

export const healthService = {
  check(options?: RequestOptions) {
    return apiClient.get<HealthStatus>(BASE, options);
  },
};