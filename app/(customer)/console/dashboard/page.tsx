"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  Building2,
  Clock3,
  LoaderCircle,
  Mail,
  ShieldCheck,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";
import Link from "next/link";

import { useAuthentication } from "../../../providers/authentication-provider";
import { useTenant } from "../../../providers/tenant-provider";
import {
  listCustomerInvitations,
  listCustomerMemberships,
  listCustomerProfiles,
  listRecentCustomerAuditEvents,
} from "../../../../lib/api/customer-dashboard";

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

function QueryFailure({
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
            The API may be unavailable or your current role
            may not have access to this data.
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

export default function CustomerDashboardPage() {
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

  const profilesQuery = useQuery({
    queryKey: [
      "customer",
      "dashboard",
      "profiles",
      tenantId,
    ],
    queryFn: listCustomerProfiles,
    enabled: queriesEnabled,
  });

  const membershipsQuery = useQuery({
    queryKey: [
      "customer",
      "dashboard",
      "memberships",
      tenantId,
      workspaceId,
    ],
    queryFn: listCustomerMemberships,
    enabled: queriesEnabled,
  });

  const invitationsQuery = useQuery({
    queryKey: [
      "customer",
      "dashboard",
      "invitations",
      tenantId,
    ],
    queryFn: listCustomerInvitations,
    enabled: queriesEnabled,
  });

  const auditQuery = useQuery({
    queryKey: [
      "customer",
      "dashboard",
      "audit",
      tenantId,
      workspaceId,
    ],
    queryFn: () =>
      listRecentCustomerAuditEvents(6),
    enabled: queriesEnabled,
  });

  const profiles = profilesQuery.data ?? [];
  const memberships =
    membershipsQuery.data ?? [];
  const invitations =
    invitationsQuery.data ?? [];
  const auditEvents = auditQuery.data ?? [];

  const activeProfiles = profiles.filter(
    (profile) => profile.isActive,
  ).length;

  const activeMemberships = memberships.filter(
    (membership) =>
      membership.status.toUpperCase() === "ACTIVE",
  ).length;

  const pendingInvitations = invitations.filter(
    (invitation) =>
      invitation.status.toUpperCase() === "PENDING",
  ).length;

  const isLoading =
    profilesQuery.isLoading ||
    membershipsQuery.isLoading ||
    invitationsQuery.isLoading ||
    auditQuery.isLoading;

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border p-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium opacity-65">
              <ShieldCheck
                aria-hidden="true"
                className="size-4"
              />
              Governed customer environment
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              {tenantName ?? "Customer organization"}
            </h2>

            <p className="mt-3 max-w-2xl opacity-70">
              Monitor users, memberships, invitations, and
              governance activity across your active tenant
              context.
            </p>
          </div>

          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <div className="rounded-xl border p-4">
              <div className="flex items-center gap-2 opacity-65">
                <Building2
                  aria-hidden="true"
                  className="size-4"
                />
                Organization
              </div>

              <p className="mt-2 font-medium">
                {tenantName ?? tenantId}
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <div className="flex items-center gap-2 opacity-65">
                <Workflow
                  aria-hidden="true"
                  className="size-4"
                />
                Workspace
              </div>

              <p className="mt-2 font-medium">
                {workspaceName ??
                  (
                    workspaceId
                      ? workspaceId
                      : "Organization-wide"
                  )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {isLoading ? (
        <div className="flex items-center gap-3 rounded-2xl border p-6">
          <LoaderCircle
            aria-hidden="true"
            className="size-5 animate-spin"
          />
          <span>Loading customer dashboard...</span>
        </div>
      ) : null}

      <section
        aria-label="Customer metrics"
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        <MetricCard
          label="Active profiles"
          value={
            profilesQuery.isError
              ? "--"
              : activeProfiles
          }
          detail={`${profiles.length} total profiles`}
          icon={
            <Users
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Active memberships"
          value={
            membershipsQuery.isError
              ? "--"
              : activeMemberships
          }
          detail={`${memberships.length} visible assignments`}
          icon={
            <UserCheck
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Pending invitations"
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

        <MetricCard
          label="Recent audit events"
          value={
            auditQuery.isError
              ? "--"
              : auditEvents.length
          }
          detail="Latest recorded activity"
          icon={
            <Activity
              aria-hidden="true"
              className="size-5"
            />
          }
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border">
          <div className="flex items-center justify-between gap-4 border-b p-6">
            <div>
              <h2 className="text-lg font-semibold">
                Recent activity
              </h2>

              <p className="mt-1 text-sm opacity-65">
                Latest customer administration and
                authorization events.
              </p>
            </div>

            <Link
              className="flex items-center gap-2 text-sm font-medium"
              href="/console/administration"
            >
              View administration
              <ArrowRight
                aria-hidden="true"
                className="size-4"
              />
            </Link>
          </div>

          {auditQuery.isError ? (
            <div className="p-6">
              <QueryFailure
                title="Audit activity could not be loaded"
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
                No recent activity
              </h3>

              <p className="mt-2 text-sm opacity-65">
                Audit events will appear here as customer
                administration actions occur.
              </p>
            </div>
          ) : null}

          <div className="divide-y">
            {auditEvents.map((event) => (
              <article
                className="flex items-start gap-4 p-6"
                key={event.id}
              >
                <div className="rounded-xl border p-2.5">
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
                      className="text-xs opacity-60"
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
                      "System actor"}{" "}
                    · {event.entityType}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <section className="rounded-2xl border p-6">
            <h2 className="text-lg font-semibold">
              Administration
            </h2>

            <p className="mt-2 text-sm opacity-65">
              Manage identities, access assignments, roles,
              permissions, and invitations.
            </p>

            <Link
              className="mt-5 flex items-center justify-between rounded-xl border p-4"
              href="/console/administration"
            >
              <span className="font-medium">
                Open administration
              </span>

              <ArrowRight
                aria-hidden="true"
                className="size-4"
              />
            </Link>
          </section>

          {profilesQuery.isError ? (
            <QueryFailure
              title="Profiles could not be loaded"
              retry={() => {
                void profilesQuery.refetch();
              }}
            />
          ) : null}

          {membershipsQuery.isError ? (
            <QueryFailure
              title="Memberships could not be loaded"
              retry={() => {
                void membershipsQuery.refetch();
              }}
            />
          ) : null}

          {invitationsQuery.isError ? (
            <QueryFailure
              title="Invitations could not be loaded"
              retry={() => {
                void invitationsQuery.refetch();
              }}
            />
          ) : null}
        </div>
      </section>
    </div>
  );
}
