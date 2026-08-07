"use client";

import { useQuery } from "@tanstack/react-query";

import {
  getCustomerAccessContext,
} from "../../lib/api/customer-context";
import { useAuthentication } from "../providers/authentication-provider";
import { useTenant } from "../providers/tenant-provider";

export function useCustomerAccessContext() {
  const authentication = useAuthentication();

  const {
    tenantId,
    workspaceId,
  } = useTenant();

  const enabled =
    authentication.isLoaded &&
    authentication.isAuthenticated &&
    Boolean(authentication.accessToken) &&
    Boolean(tenantId);

  const query = useQuery({
    queryKey: [
      "customer",
      "authorization-context",
      authentication.userId,
      tenantId,
      workspaceId,
    ],
    queryFn: () =>
      getCustomerAccessContext({
        accessToken:
          authentication.accessToken as string,
        organizationId: tenantId as string,
        workspaceId,
      }),
    enabled,
    retry: false,
    staleTime: 30_000,
  });

  return {
    ...query,
    enabled,
  };
}
