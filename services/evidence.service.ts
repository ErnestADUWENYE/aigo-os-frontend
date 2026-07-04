// services/evidence.service.ts
import { apiClient, type RequestOptions } from "@/lib";
import type { Evidence } from "@/types";

const BASE = "/evidence";

export const evidenceService = {
  list(options?: RequestOptions) {
    return apiClient.get<Evidence[]>(BASE, options);
  },

  get(id: string, options?: RequestOptions) {
    return apiClient.get<Evidence>(`${BASE}/${id}`, options);
  },

  create(data: Partial<Evidence>, options?: RequestOptions) {
    return apiClient.post<Evidence>(BASE, data, options);
  },

  update(id: string, data: Partial<Evidence>, options?: RequestOptions) {
    return apiClient.patch<Evidence>(`${BASE}/${id}`, data, options);
  },

  delete(id: string, options?: RequestOptions) {
    return apiClient.delete<{ success: boolean }>(`${BASE}/${id}`, options);
  },
};