// services/policies.service.ts
import { apiClient, type RequestOptions } from "@/lib";
import type { Policy } from "@/types";

const BASE = "/policies";

export const policiesService = {
  list(options?: RequestOptions) {
    return apiClient.get<Policy[]>(BASE, options);
  },

  get(id: string, options?: RequestOptions) {
    return apiClient.get<Policy>(`${BASE}/${id}`, options);
  },

  create(data: Partial<Policy>, options?: RequestOptions) {
    return apiClient.post<Policy>(BASE, data, options);
  },

  update(id: string, data: Partial<Policy>, options?: RequestOptions) {
    return apiClient.patch<Policy>(`${BASE}/${id}`, data, options);
  },

  delete(id: string, options?: RequestOptions) {
    return apiClient.delete<{ success: boolean }>(`${BASE}/${id}`, options);
  },
};