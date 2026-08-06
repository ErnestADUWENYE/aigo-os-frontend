"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Activity,
  AlertCircle,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  KeyRound,
  LoaderCircle,
  ShieldCheck,
  UserCheck,
  UserRoundPlus,
  Users,
} from "lucide-react";

import { useAuthentication } from "../../../providers/authentication-provider";
import { useTenant } from "../../../providers/tenant-provider";
import {
  getCustomerAnalytics,
  type AnalyticsTrendPoint,
} from "../../../../lib/api/customer-analytics";

function formatDate(value: string): string {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(date);
}

function percentage(
  value: number,
  total: number,
): number {
  if (total <= 0) {
    return 0;
  }

  return Math.min(
    100,
    Math.round((value / total) * 100),
  );
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

          <p className="mt-2 text-sm opacity-60">
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

function RatioCard({
  title,
  value,
  total,
  description,
}: {
  title: string;
  value: number;
  total: number;
  description: string;
}) {
  const ratio = percentage(value, total);

  return (
    <article className="rounded-2xl border p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="mt-1 text-sm opacity-60">
            {description}
          </p>
        </div>

        <span className="text-sm font-medium">
          {ratio}%
        </span>
      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full border">
        <div
          className="h-full bg-current opacity-70"
          style={{
            width: `${ratio}%`,
          }}
        />
      </div>

      <p className="mt-3 text-xs opacity-55">
        {value} of {total}
      </p>
    </article>
  );
}

function TrendRow({
  point,
  maximum,
}: {
  point: AnalyticsTrendPoint;
  maximum: number;
}) {
  const width =
    maximum > 0
      ? Math.max(
          4,
          Math.round(
            (point.auditEvents / maximum) * 100,
          ),
        )
      : 0;

  return (
    <div className="grid gap-3 border-b py-4 last:border-b-0 md:grid-cols-[100px_1fr_80px] md:items-center">
      <span className="text-sm font-medium">
        {formatDate(point.date)}
      </span>

      <div className="h-3 overflow-hidden rounded-full border">
        <div
          className="h-full bg-current opacity-70"
          style={{
            width: `${width}%`,
          }}
        />
      </div>

      <span className="text-sm opacity-65 md:text-right">
        {point.auditEvents}
      </span>
    </div>
  );
}

export default function AnalyticsPage() {
  const authentication = useAuthentication();

  const {
    tenantId,
    tenantName,
    workspaceId,
    workspaceName,
  } = useTenant();

  const enabled =
    authentication.isLoaded &&
    authentication.isAuthenticated &&
    Boolean(authentication.accessToken) &&
    Boolean(tenantId);

  const analyticsQuery = useQuery({
    queryKey: [
      "customer",
      "analytics",
      tenantId,
      workspaceId,
    ],
    queryFn: getCustomerAnalytics,
    enabled,
  });

  const analytics = analyticsQuery.data;

  const maximumTrendValue = Math.max(
    0,
    ...(
      analytics?.activityTrend.map(
        (point) => point.auditEvents,
      ) ?? []
    ),
  );

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border p-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium opacity-65">
              <BarChart3
                aria-hidden="true"
                className="size-4"
              />
              Tenant performance intelligence
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Analytics
            </h2>

            <p className="mt-3 max-w-2xl opacity-70">
              Monitor adoption, governance activity,
              permissions, workspaces, and assurance events
              across the selected tenant scope.
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
                    : "Organization-wide analytics"
                )}
            </p>
          </div>
        </div>
      </section>

      {analyticsQuery.isLoading ? (
        <div className="flex items-center gap-3 rounded-2xl border p-6">
          <LoaderCircle
            aria-hidden="true"
            className="size-5 animate-spin"
          />
          <span>Loading analytics...</span>
        </div>
      ) : null}

      {analyticsQuery.isError ? (
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
              <h3 className="font-semibold">
                Analytics could not be loaded
              </h3>

              <p className="mt-2 text-sm opacity-65">
                Confirm that the backend is running and
                that your role has analytics access.
              </p>

              <button
                className="mt-4 rounded-lg border px-4 py-2 text-sm"
                onClick={() => {
                  void analyticsQuery.refetch();
                }}
                type="button"
              >
                Try again
              </button>
            </div>
          </div>
        </section>
      ) : null}

      <section
        aria-label="Analytics summary"
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        <MetricCard
          label="Active profiles"
          value={
            analyticsQuery.isError
              ? "--"
              : analytics?.activeProfiles ?? 0
          }
          detail={`${analytics?.totalProfiles ?? 0} total profiles`}
          icon={
            <UserCheck
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Active memberships"
          value={
            analyticsQuery.isError
              ? "--"
              : analytics?.activeMemberships ?? 0
          }
          detail={`${analytics?.totalMemberships ?? 0} total memberships`}
          icon={
            <Users
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Active workspaces"
          value={
            analyticsQuery.isError
              ? "--"
              : analytics?.activeWorkspaces ?? 0
          }
          detail={`${analytics?.totalWorkspaces ?? 0} total workspaces`}
          icon={
            <Building2
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Pending invitations"
          value={
            analyticsQuery.isError
              ? "--"
              : analytics?.pendingInvitations ?? 0
          }
          detail="Awaiting user acceptance"
          icon={
            <UserRoundPlus
              aria-hidden="true"
              className="size-5"
            />
          }
        />
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Audit events"
          value={
            analyticsQuery.isError
              ? "--"
              : analytics?.auditEventsLast24h ?? 0
          }
          detail="Last 24 hours"
          icon={
            <Activity
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Security events"
          value={
            analyticsQuery.isError
              ? "--"
              : analytics?.securityEventsLast24h ?? 0
          }
          detail="Last 24 hours"
          icon={
            <ShieldCheck
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Governance events"
          value={
            analyticsQuery.isError
              ? "--"
              : analytics?.governanceEventsLast24h ?? 0
          }
          detail="Last 24 hours"
          icon={
            <BriefcaseBusiness
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Assurance events"
          value={
            analyticsQuery.isError
              ? "--"
              : analytics?.assuranceEventsLast24h ?? 0
          }
          detail="Last 24 hours"
          icon={
            <ShieldCheck
              aria-hidden="true"
              className="size-5"
            />
          }
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <RatioCard
          description="Profiles currently enabled."
          title="Profile activation"
          total={analytics?.totalProfiles ?? 0}
          value={analytics?.activeProfiles ?? 0}
        />

        <RatioCard
          description="Memberships currently active."
          title="Membership activation"
          total={analytics?.totalMemberships ?? 0}
          value={analytics?.activeMemberships ?? 0}
        />

        <RatioCard
          description="Permissions currently active."
          title="Permission activation"
          total={analytics?.totalPermissions ?? 0}
          value={analytics?.activePermissions ?? 0}
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <article className="rounded-2xl border">
          <div className="border-b p-6">
            <h2 className="text-lg font-semibold">
              Seven-day activity trend
            </h2>

            <p className="mt-1 text-sm opacity-65">
              Tenant audit events recorded per day.
            </p>
          </div>

          <div className="p-6">
            {analytics?.activityTrend.length ? (
              analytics.activityTrend.map((point) => (
                <TrendRow
                  key={point.date}
                  maximum={maximumTrendValue}
                  point={point}
                />
              ))
            ) : (
              <p className="text-sm opacity-65">
                No activity trend data is available.
              </p>
            )}
          </div>
        </article>

        <article className="rounded-2xl border p-6">
          <div className="flex items-center gap-3">
            <KeyRound
              aria-hidden="true"
              className="size-5"
            />

            <div>
              <h2 className="font-semibold">
                Access governance
              </h2>

              <p className="mt-1 text-sm opacity-65">
                Current roles and permission coverage.
              </p>
            </div>
          </div>

          <dl className="mt-6 space-y-4">
            <div className="flex items-center justify-between gap-4 border-b pb-4">
              <dt className="text-sm opacity-65">
                Roles
              </dt>

              <dd className="font-semibold">
                {analytics?.totalRoles ?? 0}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 border-b pb-4">
              <dt className="text-sm opacity-65">
                Permissions
              </dt>

              <dd className="font-semibold">
                {analytics?.totalPermissions ?? 0}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4">
              <dt className="text-sm opacity-65">
                Active permissions
              </dt>

              <dd className="font-semibold">
                {analytics?.activePermissions ?? 0}
              </dd>
            </div>
          </dl>
        </article>
      </section>
    </div>
  );
}
