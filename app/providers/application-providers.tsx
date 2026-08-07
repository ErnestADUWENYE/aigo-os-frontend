"use client";

import { ClerkProvider } from "@clerk/nextjs";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  type ReactNode,
  useEffect,
  useState,
} from "react";

import { ThemeProvider } from "../../design-system/themes/provider";
import { setApiContext } from "../../lib/api/client";
import {
  useCustomerAccessContext,
} from "../hooks/use-customer-access-context";
import {
  AuthenticationProvider,
  useAuthentication,
} from "./authentication-provider";
import { AuthorizationProvider } from "./authorization-provider";
import {
  TenantProvider,
  useTenant,
} from "./tenant-provider";

function ApiContextSynchronizer({
  children,
}: {
  children: ReactNode;
}) {
  const authentication = useAuthentication();
  const tenant = useTenant();

  useEffect(() => {
    setApiContext({
      accessToken: authentication.accessToken,
      tenantId: tenant.tenantId,
      workspaceId: tenant.workspaceId,
    });
  }, [
    authentication.accessToken,
    tenant.tenantId,
    tenant.workspaceId,
  ]);

  return children;
}

function AuthenticatedProviders({
  children,
}: {
  children: ReactNode;
}) {
  const accessContextQuery =
    useCustomerAccessContext();

  const context = accessContextQuery.data;

  return (
    <AuthorizationProvider
      clerkUserId={context?.clerkUserId ?? null}
      isError={accessContextQuery.isError}
      isLoaded={
        !accessContextQuery.enabled ||
        accessContextQuery.isSuccess ||
        accessContextQuery.isError
      }
      isLoading={
        accessContextQuery.enabled &&
        accessContextQuery.isLoading
      }
      organizationId={
        context?.organizationId ?? null
      }
      permissions={context?.permissions ?? []}
      profileId={context?.profileId ?? null}
      roleIds={context?.roleIds ?? []}
      roleSlugs={context?.roleSlugs ?? []}
      workspaceId={context?.workspaceId ?? null}
    >
      <ApiContextSynchronizer>
        {children}
      </ApiContextSynchronizer>
    </AuthorizationProvider>
  );
}

export function ApplicationProviders({
  children,
}: {
  children: ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30_000,
            retry: 1,
            refetchOnWindowFocus: false,
          },
          mutations: {
            retry: 0,
          },
        },
      }),
  );

  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AuthenticationProvider>
            <TenantProvider>
              <AuthenticatedProviders>
                {children}
              </AuthenticatedProviders>
            </TenantProvider>
          </AuthenticationProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
