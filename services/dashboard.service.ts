// services/dashboard.service.ts
import { apiClient, type RequestOptions } from "@/lib";

export type DashboardSummary = {
  totalAgents: number;
  totalModels: number;
  openRisks: number;
  openIncidents: number;
  activePolicies: number;
  evidenceItems: number;
  complianceScore: number;
  criticalAlerts: number;
};

export type DashboardActivity = {
  id: string;
  title: string;
  description?: string;
  type: string;
  created_at: string;
};

const BASE = "/dashboard";

export const dashboardService = {
  summary(options?: RequestOptions) {
    return apiClient.get<DashboardSummary>(`${BASE}/summary`, options);
  },

  activity(options?: RequestOptions) {
    return apiClient.get<DashboardActivity[]>(`${BASE}/activity`, options);
  },
};