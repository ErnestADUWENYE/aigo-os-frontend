"use client";

import { UserButton } from "@clerk/nextjs";
import {
  Bell,
  Building2,
  ChevronRight,
  ChevronsUpDown,
  LoaderCircle,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import {
  usePathname,
  useRouter,
} from "next/navigation";
import {
  type ReactNode,
  useEffect,
} from "react";

import { useAuthentication } from "../../app/providers/authentication-provider";
import { useAuthorization } from "../../app/providers/authorization-provider";
import { useTenant } from "../../app/providers/tenant-provider";
import {
  ApplicationShell,
  type ShellLink,
} from "../../design-system/layouts/application-shell";

type CustomerShellLink = ShellLink & {
  requiredPermissions: string[];
};

const customerLinks: CustomerShellLink[] = [
  {
    href: "/console/dashboard",
    label: "Dashboard",
    requiredPermissions: [],
  },
  {
    href: "/console/governance",
    label: "Access Governance",
    requiredPermissions: [
      "audit.read",
      "roles.read",
      "profiles.read",
      "memberships.read",
      "organization.admin",
    ],
  },
  {
    href: "/console/assurance",
    label: "Assurance",
    requiredPermissions: [
      "assurance.read",
      "assurance.manage",
      "organization.admin",
    ],
  },
  {
    href: "/console/administration",
    label: "Administration",
    requiredPermissions: [
      "memberships.read",
      "memberships.manage",
      "invitations.read",
      "invitations.manage",
      "roles.read",
      "roles.manage",
      "profiles.read",
      "profiles.manage",
      "organizational_units.read",
      "organizational_units.manage",
      "organization.admin",
    ],
  },
  {
    href: "/console/notifications",
    label: "Notifications",
    requiredPermissions: [
      "notifications.read",
      "organization.admin",
    ],
  },
  {
    href: "/console/search",
    label: "Search",
    requiredPermissions: [
      "search.read",
      "organization.admin",
    ],
  },
  {
    href: "/console/analytics",
    label: "Analytics",
    requiredPermissions: [
      "analytics.read",
      "organization.admin",
    ],
  },
  {
    href: "/console/reports",
    label: "Reports",
    requiredPermissions: [
      "reports.read",
      "organization.admin",
    ],
  },
  {
    href: "/console/tasks",
    label: "Tasks",
    requiredPermissions: [
      "tasks.read",
      "organization.admin",
    ],
  },
  {
    href: "/console/settings",
    label: "Settings",
    requiredPermissions: [
      "organization.settings.read",
      "organization.settings.manage",
      "organization.admin",
    ],
  },
  {
    href: "/console/help",
    label: "Help",
    requiredPermissions: [],
  },
];

function formatSegment(segment: string): string {
  return segment
    .replace(/-/g, " ")
    .replace(
      /\b\w/g,
      (character) => character.toUpperCase(),
    );
}

function CustomerBreadcrumbs() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex flex-wrap items-center gap-2 text-sm opacity-65"
    >
      <Link href="/console/dashboard">
        Customer Console
      </Link>

      {segments
        .filter((segment) => segment !== "console")
        .map((segment, index, filteredSegments) => {
          const href =
            "/console/" +
            filteredSegments
              .slice(0, index + 1)
              .join("/");

          const isCurrent =
            index === filteredSegments.length - 1;

          return (
            <div
              className="flex items-center gap-2"
              key={href}
            >
              <ChevronRight
                aria-hidden="true"
                className="size-3"
              />

              {isCurrent ? (
                <span
                  aria-current="page"
                  className="font-medium opacity-100"
                >
                  {formatSegment(segment)}
                </span>
              ) : (
                <Link href={href}>
                  {formatSegment(segment)}
                </Link>
              )}
            </div>
          );
        })}
    </nav>
  );
}

export function CustomerConsoleLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const authentication = useAuthentication();
  const authorization = useAuthorization();

  const {
    isLoaded: isTenantLoaded,
    tenantId,
    tenantName,
    workspaceId,
    workspaceName,
  } = useTenant();

  const currentRoute = customerLinks.find(
    (link) =>
      pathname === link.href ||
      pathname.startsWith(`${link.href}/`),
  );

  const hasCurrentRouteAccess =
    !currentRoute ||
    currentRoute.requiredPermissions.length === 0 ||
    authorization.canAny(
      currentRoute.requiredPermissions,
    );

  const visibleLinks: ShellLink[] =
    customerLinks
      .filter(
        (link) =>
          link.requiredPermissions.length === 0 ||
          authorization.canAny(
            link.requiredPermissions,
          ),
      )
      .map(({ href, label }) => ({
        href,
        label,
      }));

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
      return;
    }

    if (
      authorization.isLoaded &&
      !authorization.isLoading &&
      tenantId &&
      !hasCurrentRouteAccess
    ) {
      const required =
        currentRoute?.requiredPermissions.join(",") ??
        "";

      router.replace(
        `/forbidden?required=${encodeURIComponent(required)}`,
      );
    }
  }, [
    authentication.isAuthenticated,
    authentication.isLoaded,
    authorization.isLoaded,
    authorization.isLoading,
    currentRoute,
    hasCurrentRouteAccess,
    isTenantLoaded,
    router,
    tenantId,
  ]);

  if (
    !authentication.isLoaded ||
    !isTenantLoaded ||
    authorization.isLoading ||
    (
      authentication.isAuthenticated &&
      !authentication.accessToken
    )
  ) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="flex items-center gap-3 rounded-2xl border p-6">
          <LoaderCircle
            aria-hidden="true"
            className="size-5 animate-spin"
          />

          <span>
            Preparing the customer console...
          </span>
        </div>
      </main>
    );
  }

  if (
    !authentication.isAuthenticated ||
    !tenantId ||
    !hasCurrentRouteAccess
  ) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="flex items-center gap-3 rounded-2xl border p-6">
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

  const currentSection =
    pathname
      .split("/")
      .filter(Boolean)
      .at(-1) ?? "dashboard";

  const tenantActions = (
    <div className="flex items-center gap-2">
      <button
        aria-label="Change organization"
        className="flex items-center gap-2 rounded-lg border px-3 py-2 text-left"
        onClick={() => {
          router.push("/select-organization");
        }}
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
        onClick={() => {
          router.push("/select-workspace");
        }}
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

      {authorization.canAny([
        "notifications.read",
        "organization.admin",
      ]) ? (
        <Link
          aria-label="Notifications"
          className="relative rounded-lg border p-2"
          href="/console/notifications"
        >
          <Bell
            aria-hidden="true"
            className="size-4"
          />

          <span className="absolute right-1 top-1 size-1.5 rounded-full bg-current" />
        </Link>
      ) : null}

      <UserButton showName={false} />
    </div>
  );

  return (
    <ApplicationShell
      contextDetail={activeWorkspace}
      contextLabel={activeOrganization}
      eyebrow="Customer workspace"
      headerActions={tenantActions}
      links={visibleLinks}
      statusLabel="Phase 2"
      surface="customer"
      title={formatSegment(currentSection)}
    >
      <CustomerBreadcrumbs />

      {children}
    </ApplicationShell>
  );
}
