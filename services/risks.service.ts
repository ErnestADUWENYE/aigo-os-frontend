// services/risks.service.ts
import { apiClient, type RequestOptions } from "@/lib";
import type { Risk } from "@/types";

const BASE = "/risks";

export const risksService = {
  list(options?: RequestOptions) {
    return apiClient.get<Risk[]>(BASE, options);
  },

  get(id: string, options?: RequestOptions) {
    return apiClient.get<Risk>(`${BASE}/${id}`, options);
  },

  create(data: Partial<Risk>, options?: RequestOptions) {
    return apiClient.post<Risk>(BASE, data, options);
  },

  update(id: string, data: Partial<Risk>, options?: RequestOptions) {
    return apiClient.patch<Risk>(`${BASE}/${id}`, data, options);
  },

  delete(id: string, options?: RequestOptions) {
    return apiClient.delete<{ success: boolean }>(`${BASE}/${id}`, options);
  },
};