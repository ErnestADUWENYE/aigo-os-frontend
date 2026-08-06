"use client";

import { UserButton } from "@clerk/nextjs";
import {
  Building2,
  ChevronsUpDown,
  LoaderCircle,
  Workflow,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  type ReactNode,
  useEffect,
} from "react";

import { useAuthentication } from "../../app/providers/authentication-provider";
import { useTenant } from "../../app/providers/tenant-provider";
import {
  ApplicationShell,
  type ShellLink,
} from "../../design-system/layouts/application-shell";

const customerLinks: ShellLink[] = [
  {
    href: "/console/dashboard",
    label: "Dashboard",
  },
  {
    href: "/console/governance",
    label: "Access Governance",
  },
  {
    href: "/console/assurance",
    label: "Assurance",
  },
  {
    href: "/console/administration",
    label: "Administration",
  },
  {
    href: "/console/integrations",
    label: "Integrations",
  },
  {
    href: "/console/analytics",
    label: "Analytics",
  },
  {
    href: "/console/reports",
    label: "Reports",
  },
  {
    href: "/console/tasks",
    label: "Tasks",
  },
  {
    href: "/console/settings",
    label: "Settings",
  },
  {
    href: "/console/help",
    label: "Help",
  },
];

export function CustomerConsoleLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const authentication = useAuthentication();

  const {
    isLoaded: isTenantLoaded,
    tenantId,
    tenantName,
    workspaceId,
    workspaceName,
  } = useTenant();

  useEffect(() => {
    if (
      authentication.isLoaded &&
      !authentication.isAuthenticated
    ) {
      router.replace("/sign-in");
      return;
    }

    if (
      authentication.isLoaded &&
      authentication.isAuthenticated &&
      isTenantLoaded &&
      !tenantId
    ) {
      router.replace("/select-organization");
    }
  }, [
    authentication.isAuthenticated,
    authentication.isLoaded,
    isTenantLoaded,
    router,
    tenantId,
  ]);

  if (
    !authentication.isLoaded ||
    !isTenantLoaded ||
    (
      authentication.isAuthenticated &&
      !authentication.accessToken
    )
  ) {
    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <div className="flex items-center gap-3">
          <LoaderCircle
            aria-hidden="true"
            className="size-5 animate-spin"
          />
          <span>Preparing the customer console...</span>
        </div>
      </main>
    );
  }

  if (
    !authentication.isAuthenticated ||
    !tenantId
  ) {
    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <div className="flex items-center gap-3">
          <LoaderCircle
            aria-hidden="true"
            className="size-5 animate-spin"
          />
          <span>Redirecting...</span>
        </div>
      </main>
    );
  }

  const activeOrganization =
    tenantName ?? "Selected organization";

  const activeWorkspace =
    workspaceName ??
    (
      workspaceId
        ? "Selected workspace"
        : "Organization-wide access"
    );

  const tenantActions = (
    <div className="flex items-center gap-2">
      <button
        aria-label="Change organization"
        className="flex items-center gap-2 rounded-lg border px-3 py-2 text-left"
        onClick={() =>
          router.push("/select-organization")
        }
        type="button"
      >
        <Building2
          aria-hidden="true"
          className="size-4"
        />

        <span className="hidden max-w-40 truncate text-sm md:block">
          {activeOrganization}
        </span>

        <ChevronsUpDown
          aria-hidden="true"
          className="size-3 opacity-60"
        />
      </button>

      <button
        aria-label="Change workspace"
        className="flex items-center gap-2 rounded-lg border px-3 py-2 text-left"
        onClick={() =>
          router.push("/select-workspace")
        }
        type="button"
      >
        <Workflow
          aria-hidden="true"
          className="size-4"
        />

        <span className="hidden max-w-40 truncate text-sm md:block">
          {activeWorkspace}
        </span>

        <ChevronsUpDown
          aria-hidden="true"
          className="size-3 opacity-60"
        />
      </button>

      <UserButton showName={false} />
    </div>
  );

  return (
    <ApplicationShell
      title="Customer Console"
      eyebrow="Enterprise Workspace"
      links={customerLinks}
      surface="customer"
      contextLabel={activeOrganization}
      contextDetail={activeWorkspace}
      headerActions={tenantActions}
      statusLabel="Phase 2 Connected"
    >
      {children}
    </ApplicationShell>
  );
}

