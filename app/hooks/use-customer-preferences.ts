"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getCustomerPreferences,
  updateCustomerPreferences,
} from "../../lib/api/customer-preferences";

import { useAuthentication } from "../providers/authentication-provider";
import { useTenant } from "../providers/tenant-provider";


export function useCustomerPreferences() {
  const authentication = useAuthentication();
  const tenant = useTenant();
  const queryClient = useQueryClient();

  const queryKey = [
    "customer",
    "preferences",
    tenant.tenantId,
  ];

  const enabled =
    authentication.isLoaded &&
    authentication.isAuthenticated &&
    Boolean(authentication.accessToken) &&
    Boolean(tenant.tenantId);

  const query = useQuery({
    queryKey,
    queryFn: getCustomerPreferences,
    enabled,
    retry: false,
  });

  const mutation = useMutation({
    mutationFn: updateCustomerPreferences,
    onSuccess(data) {
      queryClient.setQueryData(
        queryKey,
        data,
      );
    },
  });

  return {
    ...query,
    updatePreferences:
      mutation.mutateAsync,
    isSaving:
      mutation.isPending,
  };
}
