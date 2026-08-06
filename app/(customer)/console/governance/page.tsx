"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Activity,
  AlertCircle,
  BadgeCheck,
  Clock3,
  KeyRound,
  LoaderCircle,
  LockKeyhole,
  Shield,
  ShieldAlert,
  SlidersHorizontal,
  UserRoundCheck,
} from "lucide-react";

import { useAuthentication } from "../../../providers/authentication-provider";
import { useTenant } from "../../../providers/tenant-provider";
import {
  loadAccessGovernanceSnapshot,
  type RolePermissionAssignment,
} from "../../../../lib/api/customer-governance";

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

function formatLabel(value: string): string {
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

function MetricCard({
  label,
  value,
  detail,
  icon,
}: {
  label: string;
  value: number | string;
  detail: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium opacity-65">
            {label}
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

function LoadFailure({
  retry,
}: {
  retry: () => void;
}) {
  return (
    <section
      className="rounded-2xl border p-6"
      role="alert"
    >
      <div className="flex items-start gap-3">
        <AlertCircle
          aria-hidden="true"
          className="mt-0.5 size-5"
        />

        <div>
          <h2 className="font-semibold">
            Access governance data could not be loaded
          </h2>

          <p className="mt-2 text-sm opacity-65">
            Confirm that the backend is available and that
            your current role can read roles, permissions,
            assignments, scopes, and audit activity.
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
    </section>
  );
}

function AssignmentRow({
  assignment,
}: {
  assignment: RolePermissionAssignment;
}) {
  const isDeny =
    assignment.effect.toUpperCase() === "DENY";

  return (
    <article className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-medium">
            {assignment.roleName}
          </h3>

          <span className="rounded-full border px-2.5 py-1 text-xs opacity-70">
            {assignment.roleSlug}
          </span>

          <span className="rounded-full border px-2.5 py-1 text-xs">
            {assignment.effect}
          </span>
        </div>

        <p className="mt-2 text-sm opacity-70">
          {assignment.permissionName}
        </p>

        <p className="mt-1 text-xs opacity-55">
          {assignment.permissionCode}
          {" · "}
          {assignment.permissionResourceType}
        </p>
      </div>

      <div className="flex items-center gap-2 text-xs opacity-65">
        {isDeny ? (
          <ShieldAlert
            aria-hidden="true"
            className="size-4"
          />
        ) : (
          <BadgeCheck
            aria-hidden="true"
            className="size-4"
          />
        )}

        {assignment.conditions
          ? "Conditional assignment"
          : "Unconditional assignment"}
      </div>
    </article>
  );
}

export default function AccessGovernancePage() {
  const authentication = useAuthentication();

  const {
    tenantId,
    tenantName,
    workspaceId,
    workspaceName,
  } = useTenant();

  const queryEnabled =
    authentication.isLoaded &&
    authentication.isAuthenticated &&
    Boolean(authentication.accessToken) &&
    Boolean(tenantId);

  const governanceQuery = useQuery({
    queryKey: [
      "customer",
      "access-governance",
      tenantId,
      workspaceId,
    ],
    queryFn: loadAccessGovernanceSnapshot,
    enabled: queryEnabled,
  });

  const roles = governanceQuery.data?.roles ?? [];
  const permissions =
    governanceQuery.data?.permissions ?? [];
  const assignments =
    governanceQuery.data?.assignments ?? [];
  const scopes =
    governanceQuery.data?.resourceScopes ?? [];
  const auditEvents =
    governanceQuery.data?.auditEvents ?? [];

  const systemRoles = roles.filter(
    (role) => role.isSystemRole,
  ).length;

  const activePermissions = permissions.filter(
    (permission) =>
      permission.status.toUpperCase() === "ACTIVE",
  ).length;

  const denyAssignments = assignments.filter(
    (assignment) =>
      assignment.effect.toUpperCase() === "DENY",
  ).length;

  const activeScopes = scopes.filter(
    (scope) =>
      scope.status.toUpperCase() === "ACTIVE",
  ).length;

  const denyScopes = scopes.filter(
    (scope) =>
      scope.effect.toUpperCase() === "DENY",
  ).length;

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border p-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium opacity-65">
              <LockKeyhole
                aria-hidden="true"
                className="size-4"
              />
              Authorization and access control
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Access Governance
            </h2>

            <p className="mt-3 max-w-2xl opacity-70">
              Govern roles, permissions, assignments, and
              resource-specific access rules without mixing
              them with tenant membership administration.
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

      {governanceQuery.isLoading ? (
        <div className="flex items-center gap-3 rounded-2xl border p-6">
          <LoaderCircle
            aria-hidden="true"
            className="size-5 animate-spin"
          />
          <span>Loading access governance...</span>
        </div>
      ) : null}

      {governanceQuery.isError ? (
        <LoadFailure
          retry={() => {
            void governanceQuery.refetch();
          }}
        />
      ) : null}

      <section
        aria-label="Access governance summary"
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-5"
      >
        <MetricCard
          label="Roles"
          value={
            governanceQuery.isError
              ? "--"
              : roles.length
          }
          detail={`${systemRoles} system roles`}
          icon={
            <UserRoundCheck
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Active permissions"
          value={
            governanceQuery.isError
              ? "--"
              : activePermissions
          }
          detail={`${permissions.length} definitions`}
          icon={
            <KeyRound
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Role assignments"
          value={
            governanceQuery.isError
              ? "--"
              : assignments.length
          }
          detail={`${denyAssignments} explicit deny`}
          icon={
            <Shield
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Active scopes"
          value={
            governanceQuery.isError
              ? "--"
              : activeScopes
          }
          detail={`${denyScopes} deny scopes`}
          icon={
            <SlidersHorizontal
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Recent events"
          value={
            governanceQuery.isError
              ? "--"
              : auditEvents.length
          }
          detail="Latest access activity"
          icon={
            <Activity
              aria-hidden="true"
              className="size-5"
            />
          }
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl border">
          <div className="border-b p-6">
            <h2 className="text-lg font-semibold">
              Roles
            </h2>

            <p className="mt-1 text-sm opacity-65">
              Reusable access bundles defined for this
              organization.
            </p>
          </div>

          {roles.length === 0 &&
          !governanceQuery.isLoading ? (
            <div className="p-8 text-center text-sm opacity-65">
              No roles are available.
            </div>
          ) : null}

          <div className="divide-y">
            {roles.slice(0, 8).map((role) => (
              <article
                className="p-5"
                key={role.id}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-medium">
                      {role.name}
                    </h3>

                    <p className="mt-1 text-xs opacity-55">
                      {role.slug}
                    </p>
                  </div>

                  <span className="rounded-full border px-3 py-1 text-xs">
                    {role.isSystemRole
                      ? "System"
                      : "Custom"}
                  </span>
                </div>

                <p className="mt-3 text-sm opacity-65">
                  {role.description ??
                    "No role description provided."}
                </p>

                <p className="mt-3 text-xs opacity-55">
                  {role.permissions.length} embedded
                  permissions
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border">
          <div className="border-b p-6">
            <h2 className="text-lg font-semibold">
              Role-permission assignments
            </h2>

            <p className="mt-1 text-sm opacity-65">
              Explicit allow and deny mappings between roles
              and permission definitions.
            </p>
          </div>

          {assignments.length === 0 &&
          !governanceQuery.isLoading ? (
            <div className="p-8 text-center text-sm opacity-65">
              No role-permission assignments are available.
            </div>
          ) : null}

          <div className="divide-y">
            {assignments
              .slice(0, 10)
              .map((assignment) => (
                <AssignmentRow
                  assignment={assignment}
                  key={assignment.id}
                />
              ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_1fr]">
        <div className="rounded-2xl border">
          <div className="border-b p-6">
            <h2 className="text-lg font-semibold">
              Permission catalogue
            </h2>

            <p className="mt-1 text-sm opacity-65">
              Supported resources and actions exposed by the
              authorization model.
            </p>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-2">
            {permissions.slice(0, 10).map(
              (permission) => (
                <article
                  className="rounded-xl border p-5"
                  key={permission.id}
                >
                  <div className="flex items-start justify-between gap-3">
                    <KeyRound
                      aria-hidden="true"
                      className="size-5"
                    />

                    <span className="rounded-full border px-2.5 py-1 text-xs">
                      {permission.status}
                    </span>
                  </div>

                  <h3 className="mt-4 font-semibold">
                    {permission.name}
                  </h3>

                  <p className="mt-1 text-xs opacity-55">
                    {permission.code}
                  </p>

                  <p className="mt-3 text-sm opacity-65">
                    {permission.resourceType}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {permission.actions.map((action) => (
                      <span
                        className="rounded-full border px-2.5 py-1 text-xs"
                        key={action}
                      >
                        {action}
                      </span>
                    ))}
                  </div>
                </article>
              ),
            )}
          </div>
        </div>

        <div className="rounded-2xl border">
          <div className="border-b p-6">
            <h2 className="text-lg font-semibold">
              Resource scopes
            </h2>

            <p className="mt-1 text-sm opacity-65">
              Contextual rules that narrow or override access
              for specific resources.
            </p>
          </div>

          <div className="divide-y">
            {scopes.slice(0, 10).map((scope) => (
              <article
                className="p-5"
                key={scope.id}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-medium">
                    {scope.resourceType}
                  </h3>

                  <div className="flex gap-2">
                    <span className="rounded-full border px-2.5 py-1 text-xs">
                      {scope.effect}
                    </span>

                    <span className="rounded-full border px-2.5 py-1 text-xs">
                      {scope.status}
                    </span>
                  </div>
                </div>

                <p className="mt-2 text-sm opacity-65">
                  {scope.resourceId ??
                    "All resources of this type"}
                </p>

                <p className="mt-3 text-xs opacity-55">
                  Actions:{" "}
                  {scope.actions.join(", ") || "Any"}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border">
        <div className="border-b p-6">
          <h2 className="text-lg font-semibold">
            Recent access-governance activity
          </h2>

          <p className="mt-1 text-sm opacity-65">
            Recent role, permission, scope, and authorization
            events.
          </p>
        </div>

        {auditEvents.length === 0 &&
        !governanceQuery.isLoading ? (
          <div className="p-8 text-center text-sm opacity-65">
            No recent access-governance events are available.
          </div>
        ) : null}

        <div className="divide-y">
          {auditEvents.map((event) => (
            <article
              className="flex items-start gap-4 p-5"
              key={event.id}
            >
              <div className="rounded-lg border p-2">
                <Clock3
                  aria-hidden="true"
                  className="size-4"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-medium">
                    {formatLabel(event.eventType)}
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
                  {" · "}
                  {event.entityType}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
