// services/agents.service.ts
import { apiClient, type RequestOptions } from "@/lib";
import type { Agent } from "@/types";

const BASE = "/agents";

export const agentsService = {
  list(options?: RequestOptions) {
    return apiClient.get<Agent[]>(BASE, options);
  },

  get(id: string, options?: RequestOptions) {
    return apiClient.get<Agent>(`${BASE}/${id}`, options);
  },

  create(data: Partial<Agent>, options?: RequestOptions) {
    return apiClient.post<Agent>(BASE, data, options);
  },

  update(id: string, data: Partial<Agent>, options?: RequestOptions) {
    return apiClient.patch<Agent>(`${BASE}/${id}`, data, options);
  },

  delete(id: string, options?: RequestOptions) {
    return apiClient.delete<{ success: boolean }>(`${BASE}/${id}`, options);
  },
};