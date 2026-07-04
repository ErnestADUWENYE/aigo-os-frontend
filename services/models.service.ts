// services/models.service.ts
import { apiClient, type RequestOptions } from "@/lib";
import type { Model } from "@/types";

const BASE = "/models";

export const modelsService = {
  list(options?: RequestOptions) {
    return apiClient.get<Model[]>(BASE, options);
  },

  get(id: string, options?: RequestOptions) {
    return apiClient.get<Model>(`${BASE}/${id}`, options);
  },

  create(data: Partial<Model>, options?: RequestOptions) {
    return apiClient.post<Model>(BASE, data, options);
  },

  update(id: string, data: Partial<Model>, options?: RequestOptions) {
    return apiClient.patch<Model>(`${BASE}/${id}`, data, options);
  },

  delete(id: string, options?: RequestOptions) {
    return apiClient.delete<{ success: boolean }>(`${BASE}/${id}`, options);
  },
};