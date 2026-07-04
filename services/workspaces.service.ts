// services/workspaces.service.ts
import { apiClient, type RequestOptions } from "@/lib";
import type { Workspace } from "@/types";

const BASE = "/workspaces";

export const workspacesService = {
  list(options?: RequestOptions) {
    return apiClient.get<Workspace[]>(BASE, options);
  },

  get(id: string, options?: RequestOptions) {
    return apiClient.get<Workspace>(`${BASE}/${id}`, options);
  },

  create(data: Partial<Workspace>, options?: RequestOptions) {
    return apiClient.post<Workspace>(BASE, data, options);
  },

  update(id: string, data: Partial<Workspace>, options?: RequestOptions) {
    return apiClient.patch<Workspace>(`${BASE}/${id}`, data, options);
  },

  delete(id: string, options?: RequestOptions) {
    return apiClient.delete<{ success: boolean }>(`${BASE}/${id}`, options);
  },
};