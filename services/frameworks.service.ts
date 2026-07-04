// services/frameworks.service.ts
import { apiClient, type RequestOptions } from "@/lib";

export type Framework = {
  id: string;
  name: string;
  code?: string | null;
  version?: string | null;
  description?: string | null;
  category?: string | null;
  status?: string | null;

  total_controls?: number;
  mapped_controls?: number;
  compliance_score?: number;

  organization_id?: string | null;
  workspace_id?: string | null;

  created_at?: string;
  updated_at?: string;
};

const BASE = "/frameworks";

export const frameworksService = {
  list(options?: RequestOptions) {
    return apiClient.get<Framework[]>(BASE, options);
  },

  get(id: string, options?: RequestOptions) {
    return apiClient.get<Framework>(`${BASE}/${id}`, options);
  },

  create(data: Partial<Framework>, options?: RequestOptions) {
    return apiClient.post<Framework>(BASE, data, options);
  },

  update(id: string, data: Partial<Framework>, options?: RequestOptions) {
    return apiClient.patch<Framework>(`${BASE}/${id}`, data, options);
  },

  delete(id: string, options?: RequestOptions) {
    return apiClient.delete<{ success: boolean }>(`${BASE}/${id}`, options);
  },
};