// services/integrations.service.ts
import { apiClient, type RequestOptions } from "@/lib";
import type { Integration } from "@/types";

const BASE = "/integrations";

export const integrationsService = {
  list(options?: RequestOptions) {
    return apiClient.get<Integration[]>(BASE, options);
  },

  get(id: string, options?: RequestOptions) {
    return apiClient.get<Integration>(`${BASE}/${id}`, options);
  },

  create(data: Partial<Integration>, options?: RequestOptions) {
    return apiClient.post<Integration>(BASE, data, options);
  },

  update(id: string, data: Partial<Integration>, options?: RequestOptions) {
    return apiClient.patch<Integration>(`${BASE}/${id}`, data, options);
  },

  delete(id: string, options?: RequestOptions) {
    return apiClient.delete<{ success: boolean }>(`${BASE}/${id}`, options);
  },
};