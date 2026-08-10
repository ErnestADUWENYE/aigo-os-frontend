"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getCustomerBranding,
  updateCustomerBranding,
  uploadCustomerLogo,
} from "../../lib/api/customer-branding";

import { useAuthentication } from "../providers/authentication-provider";
import { useTenant } from "../providers/tenant-provider";


export function useCustomerBranding() {
  const authentication = useAuthentication();
  const tenant = useTenant();
  const queryClient = useQueryClient();

  const queryKey = [
    "customer",
    "branding",
    tenant.tenantId,
  ];

  const enabled =
    authentication.isLoaded &&
    authentication.isAuthenticated &&
    Boolean(authentication.accessToken) &&
    Boolean(tenant.tenantId);

  const query = useQuery({
    queryKey,
    queryFn: getCustomerBranding,
    enabled,
    retry: false,
  });

  const refresh = async () => {
    await queryClient.invalidateQueries({
      queryKey,
    });
  };

  const updateMutation = useMutation({
    mutationFn: updateCustomerBranding,
    onSuccess: refresh,
  });

  const uploadMutation = useMutation({
    mutationFn: ({
      file,
      altText,
    }: {
      file: File;
      altText: string | null;
    }) =>
      uploadCustomerLogo(
        file,
        altText,
      ),
    onSuccess: refresh,
  });

  return {
    ...query,
    updateBranding:
      updateMutation.mutateAsync,
    uploadLogo:
      uploadMutation.mutateAsync,
    isSaving:
      updateMutation.isPending,
    isUploading:
      uploadMutation.isPending,
  };
}
