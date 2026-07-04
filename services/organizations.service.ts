// services/organizations.service.ts
import { apiClient, type RequestOptions } from "@/lib";
import type { Organization } from "@/types";

const BASE = "/organizations";

export const organizationsService = {
  list(options?: RequestOptions) {
    return apiClient.get<Organization[]>(BASE, options);
  },

  get(id: string, options?: RequestOptions) {
    return apiClient.get<Organization>(`${BASE}/${id}`, options);
  },

  create(data: Partial<Organization>, options?: RequestOptions) {
    return apiClient.post<Organization>(BASE, data, options);
  },

  update(id: string, data: Partial<Organization>, options?: RequestOptions) {
    return apiClient.patch<Organization>(`${BASE}/${id}`, data, options);
  },

  delete(id: string, options?: RequestOptions) {
    return apiClient.delete<{ success: boolean }>(`${BASE}/${id}`, options);
  },
};