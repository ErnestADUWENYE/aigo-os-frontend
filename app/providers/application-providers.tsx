"use client";

import { ClerkProvider } from "@clerk/nextjs";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import { ThemeProvider } from "../../design-system/themes/provider";
import { useCustomerPreferences } from "../hooks/use-customer-preferences";
import {
  setApiContext,
  setApiSessionHandlers,
} from "../../lib/api/client";
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

  const isReady =
    authentication.isLoaded &&
    (
      !authentication.isAuthenticated ||
      Boolean(authentication.accessToken)
    );

  useLayoutEffect(() => {
    if (!isReady) {
      return;
    }

    setApiContext({
      accessToken: authentication.accessToken,
      tenantId: tenant.tenantId,
      workspaceId: tenant.workspaceId,
    });
  }, [
    authentication.accessToken,
    isReady,
    tenant.tenantId,
    tenant.workspaceId,
  ]);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    setApiSessionHandlers({
      refreshAccessToken:
        authentication.refreshAccessToken,
      clearTenant: tenant.clearTenant,
    });

    return () => {
      setApiSessionHandlers(null);
    };
  }, [
    authentication.refreshAccessToken,
    isReady,
    tenant.clearTenant,
  ]);

  if (!isReady) {
    return null;
  }

  return children;
}
function CustomerThemeSynchronizer({
  children,
}: {
  children: ReactNode;
}) {
  const preferences = useCustomerPreferences();

  return (
    <ThemeProvider
      companyThemeId={
        preferences.data
          ?.organizationDefaultBackgroundDesign
      }
      userThemeId={
        preferences.data
          ? preferences.data.backgroundDesign
          : undefined
      }
    >
      {children}
    </ThemeProvider>
  );
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
      {children}
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
    <AuthenticationProvider>
      <TenantProvider>
        <ApiContextSynchronizer>
          <CustomerThemeSynchronizer>
            <AuthenticatedProviders>
              {children}
            </AuthenticatedProviders>
          </CustomerThemeSynchronizer>
        </ApiContextSynchronizer>
      </TenantProvider>
    </AuthenticationProvider>
  </QueryClientProvider>
</ClerkProvider>
  );
}







