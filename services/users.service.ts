// services/users.service.ts
import { apiClient, type RequestOptions } from "@/lib";
import type { IdentityUser } from "@/types";

const BASE = "/users";

export const usersService = {
  list(options?: RequestOptions) {
    return apiClient.get<IdentityUser[]>(BASE, options);
  },

  get(id: string, options?: RequestOptions) {
    return apiClient.get<IdentityUser>(`${BASE}/${id}`, options);
  },

  me(options?: RequestOptions) {
    return apiClient.get<IdentityUser>(`${BASE}/me`, options);
  },

  update(id: string, data: Partial<IdentityUser>, options?: RequestOptions) {
    return apiClient.patch<IdentityUser>(`${BASE}/${id}`, data, options);
  },
};