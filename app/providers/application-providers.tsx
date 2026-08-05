"use client";

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
    <QueryClientProvider client={queryClient}>
      <AuthenticationProvider>
        <TenantProvider>
          <AuthorizationProvider>
            <ThemeProvider>
              <ApiContextSynchronizer>
                {children}
              </ApiContextSynchronizer>
            </ThemeProvider>
          </AuthorizationProvider>
        </TenantProvider>
      </AuthenticationProvider>
    </QueryClientProvider>
  );
}
