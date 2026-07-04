// services/controls.service.ts
import { apiClient, type RequestOptions } from "@/lib";
import type { Control } from "@/types";

const BASE = "/controls";

export const controlsService = {
  list(options?: RequestOptions) {
    return apiClient.get<Control[]>(BASE, options);
  },

  get(id: string, options?: RequestOptions) {
    return apiClient.get<Control>(`${BASE}/${id}`, options);
  },

  create(data: Partial<Control>, options?: RequestOptions) {
    return apiClient.post<Control>(BASE, data, options);
  },

  update(id: string, data: Partial<Control>, options?: RequestOptions) {
    return apiClient.patch<Control>(`${BASE}/${id}`, data, options);
  },

  delete(id: string, options?: RequestOptions) {
    return apiClient.delete<{ success: boolean }>(`${BASE}/${id}`, options);
  },
};