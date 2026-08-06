"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  Clock3,
  KeyRound,
  LoaderCircle,
  Mail,
  Shield,
  SlidersHorizontal,
  UserRoundCheck,
  Users,
} from "lucide-react";

import { useAuthentication } from "../../../providers/authentication-provider";
import { useTenant } from "../../../providers/tenant-provider";
import {
  listAdministrationAuditEvents,
  listAdministrationInvitations,
  listAdministrationMemberships,
  listAdministrationPermissions,
  listAdministrationResourceScopes,
  listAdministrationRoles,
} from "../../../../lib/api/customer-administration";

function formatDate(value: string): string {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Unknown time";
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function formatEventLabel(value: string): string {
  return value
    .toLowerCase()
    .split("_")
    .map(
      (part) =>
        part.charAt(0).toUpperCase() +
        part.slice(1),
    )
    .join(" ");
}

function SummaryCard({
  title,
  value,
  detail,
  icon,
}: {
  title: string;
  value: number | string;
  detail: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium opacity-65">
            {title}
          </p>

          <p className="mt-3 text-3xl font-semibold tracking-tight">
            {value}
          </p>

          <p className="mt-2 text-sm opacity-65">
            {detail}
          </p>
        </div>

        <div className="rounded-xl border p-3">
          {icon}
        </div>
      </div>
    </article>
  );
}

function LoadError({
  title,
  retry,
}: {
  title: string;
  retry: () => void;
}) {
  return (
    <div
      className="rounded-2xl border p-6"
      role="alert"
    >
      <div className="flex items-start gap-3">
        <AlertCircle
          aria-hidden="true"
          className="mt-0.5 size-5"
        />

        <div>
          <h3 className="font-semibold">{title}</h3>

          <p className="mt-1 text-sm opacity-65">
            The resource may be unavailable or your current
            role may not have permission to view it.
          </p>

          <button
            className="mt-4 rounded-lg border px-4 py-2 text-sm"
            onClick={retry}
            type="button"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CustomerAdministrationPage() {
  const authentication = useAuthentication();

  const {
    tenantId,
    tenantName,
    workspaceId,
    workspaceName,
  } = useTenant();

  const queriesEnabled =
    authentication.isLoaded &&
    authentication.isAuthenticated &&
    Boolean(authentication.accessToken) &&
    Boolean(tenantId);

  const membershipsQuery = useQuery({
    queryKey: [
      "customer",
      "administration",
      "memberships",
      tenantId,
      workspaceId,
    ],
    queryFn: listAdministrationMemberships,
    enabled: queriesEnabled,
  });

  const invitationsQuery = useQuery({
    queryKey: [
      "customer",
      "administration",
      "invitations",
      tenantId,
    ],
    queryFn: listAdministrationInvitations,
    enabled: queriesEnabled,
  });

  const rolesQuery = useQuery({
    queryKey: [
      "customer",
      "administration",
      "roles",
      tenantId,
    ],
    queryFn: listAdministrationRoles,
    enabled: queriesEnabled,
  });

  const permissionsQuery = useQuery({
    queryKey: [
      "customer",
      "administration",
      "permissions",
      tenantId,
    ],
    queryFn: listAdministrationPermissions,
    enabled: queriesEnabled,
  });

  const scopesQuery = useQuery({
    queryKey: [
      "customer",
      "administration",
      "resource-scopes",
      tenantId,
      workspaceId,
    ],
    queryFn: listAdministrationResourceScopes,
    enabled: queriesEnabled,
  });

  const auditQuery = useQuery({
    queryKey: [
      "customer",
      "administration",
      "audit",
      tenantId,
      workspaceId,
    ],
    queryFn: () =>
      listAdministrationAuditEvents(8),
    enabled: queriesEnabled,
  });

  const memberships =
    membershipsQuery.data ?? [];

  const invitations =
    invitationsQuery.data ?? [];

  const roles = rolesQuery.data ?? [];

  const permissions =
    permissionsQuery.data ?? [];

  const scopes = scopesQuery.data ?? [];

  const auditEvents = auditQuery.data ?? [];

  const activeMemberships = memberships.filter(
    (membership) =>
      membership.status.toUpperCase() === "ACTIVE",
  ).length;

  const pendingInvitations = invitations.filter(
    (invitation) =>
      invitation.status.toUpperCase() === "PENDING",
  ).length;

  const activePermissions = permissions.filter(
    (permission) =>
      permission.status.toUpperCase() === "ACTIVE",
  ).length;

  const activeScopes = scopes.filter(
    (scope) =>
      scope.status.toUpperCase() === "ACTIVE",
  ).length;

  const denyScopes = scopes.filter(
    (scope) =>
      scope.effect.toUpperCase() === "DENY",
  ).length;

  const isLoading =
    membershipsQuery.isLoading ||
    invitationsQuery.isLoading ||
    rolesQuery.isLoading ||
    permissionsQuery.isLoading ||
    scopesQuery.isLoading ||
    auditQuery.isLoading;

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border p-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium opacity-65">
              <Shield
                aria-hidden="true"
                className="size-4"
              />
              Identity and access administration
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Customer administration
            </h2>

            <p className="mt-3 max-w-2xl opacity-70">
              Review memberships, invitations, roles,
              permissions, resource scopes, and recent
              administrative activity.
            </p>
          </div>

          <div className="rounded-2xl border p-5 text-sm">
            <p className="font-medium">
              {tenantName ?? "Selected organization"}
            </p>

            <p className="mt-1 opacity-65">
              {workspaceName ??
                (
                  workspaceId
                    ? "Selected workspace"
                    : "Organization-wide access"
                )}
            </p>
          </div>
        </div>
      </section>

      {isLoading ? (
        <div className="flex items-center gap-3 rounded-2xl border p-6">
          <LoaderCircle
            aria-hidden="true"
            className="size-5 animate-spin"
          />
          <span>Loading administration data...</span>
        </div>
      ) : null}

      <section
        aria-label="Administration summary"
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        <SummaryCard
          title="Active memberships"
          value={
            membershipsQuery.isError
              ? "--"
              : activeMemberships
          }
          detail={`${memberships.length} visible memberships`}
          icon={
            <Users
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <SummaryCard
          title="Pending invitations"
          value={
            invitationsQuery.isError
              ? "--"
              : pendingInvitations
          }
          detail={`${invitations.length} total invitations`}
          icon={
            <Mail
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <SummaryCard
          title="Roles"
          value={
            rolesQuery.isError
              ? "--"
              : roles.length
          }
          detail={`${
            roles.filter((role) => role.isSystemRole)
              .length
          } system roles`}
          icon={
            <UserRoundCheck
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <SummaryCard
          title="Active permissions"
          value={
            permissionsQuery.isError
              ? "--"
              : activePermissions
          }
          detail={`${permissions.length} permission definitions`}
          icon={
            <KeyRound
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <SummaryCard
          title="Active resource scopes"
          value={
            scopesQuery.isError
              ? "--"
              : activeScopes
          }
          detail={`${denyScopes} explicit deny scopes`}
          icon={
            <SlidersHorizontal
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <SummaryCard
          title="Recent audit events"
          value={
            auditQuery.isError
              ? "--"
              : auditEvents.length
          }
          detail="Latest administrative activity"
          icon={
            <Activity
              aria-hidden="true"
              className="size-5"
            />
          }
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_1fr]">
        <div className="rounded-2xl border">
          <div className="border-b p-6">
            <h2 className="text-lg font-semibold">
              Administration areas
            </h2>

            <p className="mt-1 text-sm opacity-65">
              Current access-management resources in this
              tenant context.
            </p>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-2">
            <article className="rounded-xl border p-5">
              <Users
                aria-hidden="true"
                className="size-5"
              />

              <h3 className="mt-4 font-semibold">
                Memberships
              </h3>

              <p className="mt-2 text-sm opacity-65">
                Manage organization and workspace access
                assignments.
              </p>

              <p className="mt-4 text-sm font-medium">
                {memberships.length} records
              </p>
            </article>

            <article className="rounded-xl border p-5">
              <Mail
                aria-hidden="true"
                className="size-5"
              />

              <h3 className="mt-4 font-semibold">
                Invitations
              </h3>

              <p className="mt-2 text-sm opacity-65">
                Invite new users and monitor pending access
                requests.
              </p>

              <p className="mt-4 text-sm font-medium">
                {pendingInvitations} pending
              </p>
            </article>

            <article className="rounded-xl border p-5">
              <UserRoundCheck
                aria-hidden="true"
                className="size-5"
              />

              <h3 className="mt-4 font-semibold">
                Roles
              </h3>

              <p className="mt-2 text-sm opacity-65">
                Define reusable bundles of organizational
                access.
              </p>

              <p className="mt-4 text-sm font-medium">
                {roles.length} roles
              </p>
            </article>

            <article className="rounded-xl border p-5">
              <KeyRound
                aria-hidden="true"
                className="size-5"
              />

              <h3 className="mt-4 font-semibold">
                Permissions
              </h3>

              <p className="mt-2 text-sm opacity-65">
                Control supported resources and allowed
                actions.
              </p>

              <p className="mt-4 text-sm font-medium">
                {permissions.length} permissions
              </p>
            </article>

            <article className="rounded-xl border p-5 md:col-span-2">
              <SlidersHorizontal
                aria-hidden="true"
                className="size-5"
              />

              <h3 className="mt-4 font-semibold">
                Resource scopes
              </h3>

              <p className="mt-2 text-sm opacity-65">
                Apply resource-specific allow and deny rules
                to roles and profiles.
              </p>

              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full border px-3 py-1">
                  {activeScopes} active
                </span>

                <span className="rounded-full border px-3 py-1">
                  {denyScopes} deny
                </span>
              </div>
            </article>
          </div>
        </div>

        <div className="rounded-2xl border">
          <div className="flex items-center justify-between gap-4 border-b p-6">
            <div>
              <h2 className="text-lg font-semibold">
                Recent administration activity
              </h2>

              <p className="mt-1 text-sm opacity-65">
                Latest lifecycle and access events.
              </p>
            </div>

            <BadgeCheck
              aria-hidden="true"
              className="size-5"
            />
          </div>

          {auditQuery.isError ? (
            <div className="p-6">
              <LoadError
                title="Audit events could not be loaded"
                retry={() => {
                  void auditQuery.refetch();
                }}
              />
            </div>
          ) : null}

          {!auditQuery.isError &&
          auditEvents.length === 0 &&
          !auditQuery.isLoading ? (
            <div className="p-8 text-center">
              <Activity
                aria-hidden="true"
                className="mx-auto size-8 opacity-40"
              />

              <h3 className="mt-4 font-semibold">
                No recent events
              </h3>

              <p className="mt-2 text-sm opacity-65">
                Administration activity will appear here.
              </p>
            </div>
          ) : null}

          <div className="divide-y">
            {auditEvents.map((event) => (
              <article
                className="p-5"
                key={event.id}
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-lg border p-2">
                    <Clock3
                      aria-hidden="true"
                      className="size-4"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-medium">
                        {formatEventLabel(
                          event.eventType,
                        )}
                      </h3>

                      <time
                        className="text-xs opacity-55"
                        dateTime={event.createdAt}
                      >
                        {formatDate(event.createdAt)}
                      </time>
                    </div>

                    <p className="mt-1 text-sm opacity-70">
                      {event.summary}
                    </p>

                    <p className="mt-2 text-xs opacity-55">
                      {event.actorName ??
                        event.actorEmail ??
                        "System actor"}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {membershipsQuery.isError ? (
          <LoadError
            title="Memberships could not be loaded"
            retry={() => {
              void membershipsQuery.refetch();
            }}
          />
        ) : null}

        {invitationsQuery.isError ? (
          <LoadError
            title="Invitations could not be loaded"
            retry={() => {
              void invitationsQuery.refetch();
            }}
          />
        ) : null}

        {rolesQuery.isError ? (
          <LoadError
            title="Roles could not be loaded"
            retry={() => {
              void rolesQuery.refetch();
            }}
          />
        ) : null}

        {permissionsQuery.isError ? (
          <LoadError
            title="Permissions could not be loaded"
            retry={() => {
              void permissionsQuery.refetch();
            }}
          />
        ) : null}

        {scopesQuery.isError ? (
          <LoadError
            title="Resource scopes could not be loaded"
            retry={() => {
              void scopesQuery.refetch();
            }}
          />
        ) : null}
      </section>

      <div className="flex items-center gap-2 text-sm opacity-55">
        <ArrowRight
          aria-hidden="true"
          className="size-4"
        />
        Detailed create, update, and delete workflows will
        be added as dedicated administration views.
      </div>
    </div>
  );
}
