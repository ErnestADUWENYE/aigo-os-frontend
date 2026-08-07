"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Activity,
  AlertCircle,
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  LoaderCircle,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

import { useAuthentication } from "../../../providers/authentication-provider";
import { useAuthorization } from "../../../providers/authorization-provider";
import { useTenant } from "../../../providers/tenant-provider";
import {
  getCustomerAssuranceOverview,
} from "../../../../lib/api/customer-assurance";

function formatDate(value: string | null): string {
  if (!value) {
    return "No assurance activity recorded";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Unknown activity time";
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
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

function ProgressBar({
  value,
  maximum,
}: {
  value: number;
  maximum: number;
}) {
  const percentage =
    maximum > 0
      ? Math.min(
          100,
          Math.round((value / maximum) * 100),
        )
      : 0;

  return (
    <div>
      <div className="flex items-center justify-between text-xs opacity-60">
        <span>{percentage}%</span>
        <span>
          {value} of {maximum}
        </span>
      </div>

      <div className="mt-2 h-2 overflow-hidden rounded-full border">
        <div
          className="h-full bg-current opacity-70"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}

export default function AssurancePage() {
  const authentication = useAuthentication();
const authorization = useAuthorization();

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

  const overviewQuery = useQuery({
    queryKey: [
      "customer",
      "assurance",
      "overview",
      tenantId,
      workspaceId,
    ],
    queryFn: getCustomerAssuranceOverview,
    enabled: queryEnabled,
  });

  const overview = overviewQuery.data;

  const controlPassCount = Math.max(
    0,
    (overview?.controlsTested ?? 0) -
      (overview?.controlsFailed ?? 0),
  );

  const totalFindings =
    (overview?.findingsOpen ?? 0) +
    (overview?.findingsClosed ?? 0);

  const totalEvidence =
    (overview?.evidencePending ?? 0) +
    (overview?.evidenceApproved ?? 0);

const canViewAssurance = authorization.canAny([
  "organization.admin",
  "assurance.read",
  "assurance.manage",
]);

if (!canViewAssurance) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <section className="rounded-2xl border p-8 text-center">
        <h1 className="text-2xl font-semibold">
          Access denied
        </h1>

        <p className="mt-3 text-sm opacity-70">
          You do not have permission to access Assurance.
        </p>
      </section>
    </main>
  );
}
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
              Continuous assurance
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Assurance
            </h2>

            <p className="mt-3 max-w-2xl opacity-70">
              Monitor control health, findings, evidence,
              assessments, and compliance coverage for the
              selected tenant scope.
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
                    : "Organization-wide assurance"
                )}
            </p>
          </div>
        </div>
      </section>

      {overviewQuery.isLoading ? (
        <div className="flex items-center gap-3 rounded-2xl border p-6">
          <LoaderCircle
            aria-hidden="true"
            className="size-5 animate-spin"
          />
          <span>Loading assurance overview...</span>
        </div>
      ) : null}

      {overviewQuery.isError ? (
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
                Assurance overview could not be loaded
              </h3>

              <p className="mt-2 text-sm opacity-65">
                Confirm that the backend is running and
                that your role has assurance access.
              </p>

              <button
                className="mt-4 rounded-lg border px-4 py-2 text-sm"
                onClick={() => {
                  void overviewQuery.refetch();
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
        aria-label="Assurance summary"
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-5"
      >
        <MetricCard
          label="Controls"
          value={
            overviewQuery.isError
              ? "--"
              : overview?.controlsTotal ?? 0
          }
          detail={`${overview?.controlsTested ?? 0} tested`}
          icon={
            <ShieldCheck
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Failed controls"
          value={
            overviewQuery.isError
              ? "--"
              : overview?.controlsFailed ?? 0
          }
          detail={`${controlPassCount} passing tests`}
          icon={
            <ShieldAlert
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Open findings"
          value={
            overviewQuery.isError
              ? "--"
              : overview?.findingsOpen ?? 0
          }
          detail={`${overview?.findingsClosed ?? 0} closed`}
          icon={
            <SearchCheck
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Pending evidence"
          value={
            overviewQuery.isError
              ? "--"
              : overview?.evidencePending ?? 0
          }
          detail={`${overview?.evidenceApproved ?? 0} approved`}
          icon={
            <FileCheck2
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Active assessments"
          value={
            overviewQuery.isError
              ? "--"
              : overview?.assessmentsActive ?? 0
          }
          detail="In current tenant scope"
          icon={
            <ClipboardCheck
              aria-hidden="true"
              className="size-5"
            />
          }
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <article className="rounded-2xl border p-6">
          <div className="flex items-center gap-3">
            <ShieldCheck
              aria-hidden="true"
              className="size-5"
            />

            <div>
              <h3 className="font-semibold">
                Control testing
              </h3>

              <p className="mt-1 text-sm opacity-65">
                Tested controls against total controls.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <ProgressBar
              maximum={overview?.controlsTotal ?? 0}
              value={overview?.controlsTested ?? 0}
            />
          </div>
        </article>

        <article className="rounded-2xl border p-6">
          <div className="flex items-center gap-3">
            <BadgeCheck
              aria-hidden="true"
              className="size-5"
            />

            <div>
              <h3 className="font-semibold">
                Finding remediation
              </h3>

              <p className="mt-1 text-sm opacity-65">
                Closed findings against total findings.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <ProgressBar
              maximum={totalFindings}
              value={overview?.findingsClosed ?? 0}
            />
          </div>
        </article>

        <article className="rounded-2xl border p-6">
          <div className="flex items-center gap-3">
            <FileCheck2
              aria-hidden="true"
              className="size-5"
            />

            <div>
              <h3 className="font-semibold">
                Evidence approval
              </h3>

              <p className="mt-1 text-sm opacity-65">
                Approved evidence against tracked evidence.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <ProgressBar
              maximum={totalEvidence}
              value={overview?.evidenceApproved ?? 0}
            />
          </div>
        </article>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
        <article className="rounded-2xl border">
          <div className="border-b p-6">
            <h2 className="text-lg font-semibold">
              Compliance coverage
            </h2>

            <p className="mt-1 text-sm opacity-65">
              Frameworks currently configured for the
              organization.
            </p>
          </div>

          <div className="p-6">
            {overview?.complianceFrameworks.length ? (
              <div className="flex flex-wrap gap-3">
                {overview.complianceFrameworks.map(
                  (framework) => (
                    <span
                      className="rounded-full border px-4 py-2 text-sm"
                      key={framework}
                    >
                      {framework}
                    </span>
                  ),
                )}
              </div>
            ) : (
              <p className="text-sm opacity-65">
                No compliance frameworks are configured.
              </p>
            )}
          </div>
        </article>

        <article className="rounded-2xl border p-6">
          <div className="flex items-center gap-3">
            <Activity
              aria-hidden="true"
              className="size-5"
            />

            <div>
              <h2 className="font-semibold">
                Last assurance activity
              </h2>

              <p className="mt-1 text-sm opacity-65">
                Latest control, finding, evidence, assessment,
                or compliance event.
              </p>
            </div>
          </div>

          <p className="mt-6 text-lg font-medium">
            {formatDate(
              overview?.lastActivity ?? null,
            )}
          </p>
        </article>
      </section>
    </div>
  );
}


