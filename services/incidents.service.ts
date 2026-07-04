// services/incidents.service.ts
import { apiClient, type RequestOptions } from "@/lib";
import type { Incident } from "@/types";

const BASE = "/incidents";

export const incidentsService = {
  list(options?: RequestOptions) {
    return apiClient.get<Incident[]>(BASE, options);
  },

  get(id: string, options?: RequestOptions) {
    return apiClient.get<Incident>(`${BASE}/${id}`, options);
  },

  create(data: Partial<Incident>, options?: RequestOptions) {
    return apiClient.post<Incident>(BASE, data, options);
  },

  update(id: string, data: Partial<Incident>, options?: RequestOptions) {
    return apiClient.patch<Incident>(`${BASE}/${id}`, data, options);
  },

  delete(id: string, options?: RequestOptions) {
    return apiClient.delete<{ success: boolean }>(`${BASE}/${id}`, options);
  },
};