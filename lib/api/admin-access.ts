import { apiClient } from "./client";

export type AdminIdentity = {
  id: string;
  email: string;
  fullName: string | null;
  status: string;
  clerkUserId: string;
};

type AdminAccessApiResponse = {
  authorized: boolean;
  admin: {
    id: string;
    email: string;
    full_name: string | null;
    status: string;
    clerk_user_id: string;
  };
};

export async function getAdminAccessStatus():
  Promise<AdminIdentity> {
  const response =
    await apiClient.get<AdminAccessApiResponse>(
      "/admin/access-status",
    );

  return {
    id: response.data.admin.id,
    email: response.data.admin.email,
    fullName: response.data.admin.full_name,
    status: response.data.admin.status,
    clerkUserId:
      response.data.admin.clerk_user_id,
  };
}
