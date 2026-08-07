"use client";

import { useQuery } from "@tanstack/react-query";
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  Download,
  FileBarChart,
  FileCheck2,
  Files,
  LoaderCircle,
  TriangleAlert,
} from "lucide-react";

import { useAuthentication } from "../../../providers/authentication-provider";
import { useAuthorization } from "../../../providers/authorization-provider";
import { useTenant } from "../../../providers/tenant-provider";
import {
  listCustomerReports,
  type CustomerReport,
} from "../../../../lib/api/customer-reports";

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

function StatusIcon({
  status,
}: {
  status: string;
}) {
  const normalized = status.toUpperCase();

  if (normalized === "COMPLETED") {
    return (
      <CheckCircle2
        aria-hidden="true"
        className="size-5"
      />
    );
  }

  if (normalized === "FAILED") {
    return (
      <TriangleAlert
        aria-hidden="true"
        className="size-5"
      />
    );
  }

  return (
    <Clock3
      aria-hidden="true"
      className="size-5"
    />
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

function ReportRow({
  report,
  supportsDownloads,
}: {
  report: CustomerReport;
  supportsDownloads: boolean;
}) {
  return (
    <article className="p-5">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div className="flex min-w-0 items-start gap-4">
          <div className="rounded-xl border p-3">
            <StatusIcon status={report.status} />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold">
                {report.name}
              </h3>

              <span className="rounded-full border px-3 py-1 text-xs">
                {report.status}
              </span>

              <span className="rounded-full border px-3 py-1 text-xs">
                {report.category}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm opacity-65">
              <span>
                Generated {formatDate(report.generatedAt)}
              </span>

              <span>
                By {report.generatedBy ?? "System"}
              </span>

              <span>
                {report.sourceEventType}
              </span>
            </div>
          </div>
        </div>

        <button
          className="flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-45"
          disabled={
            !supportsDownloads ||
            !report.downloadAvailable
          }
          type="button"
        >
          <Download
            aria-hidden="true"
            className="size-4"
          />
          Download
        </button>
      </div>
    </article>
  );
}

export default function ReportsPage() {
  const authentication = useAuthentication();
const authorization = useAuthorization();

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

  const reportsQuery = useQuery({
    queryKey: [
      "customer",
      "reports",
      tenantId,
      workspaceId,
    ],
    queryFn: listCustomerReports,
    enabled,
  });

  const data = reportsQuery.data;
  const reports = data?.reports ?? [];

const canViewReports = authorization.canAny([
  "organization.admin",
  "reports.read",
]);

if (!canViewReports) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <section className="rounded-2xl border p-8 text-center">
        <h1 className="text-2xl font-semibold">
          Access denied
        </h1>

        <p className="mt-3 text-sm opacity-70">
          You do not have permission to access Reports.
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
              <FileBarChart
                aria-hidden="true"
                className="size-4"
              />
              Tenant reporting
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Reports
            </h2>

            <p className="mt-3 max-w-2xl opacity-70">
              Review report and export activity recorded
              for the selected organization and workspace.
            </p>
          </div>

          <div className="rounded-2xl border p-5 text-sm">
            <p className="font-medium">
              {tenantName ?? "Selected organization"}
            </p>

            <p className="mt-1 opacity-65">
              {workspaceName ??
                (workspaceId
                  ? "Selected workspace"
                  : "Organization-wide reports")}
            </p>
          </div>
        </div>
      </section>

      {reportsQuery.isLoading ? (
        <div className="flex items-center gap-3 rounded-2xl border p-6">
          <LoaderCircle
            aria-hidden="true"
            className="size-5 animate-spin"
          />
          <span>Loading reports...</span>
        </div>
      ) : null}

      {reportsQuery.isError ? (
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
                Reports could not be loaded
              </h3>

              <p className="mt-2 text-sm opacity-65">
                Confirm that the backend is running and
                that your role has report access.
              </p>

              <button
                className="mt-4 rounded-lg border px-4 py-2 text-sm"
                onClick={() => {
                  void reportsQuery.refetch();
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
        aria-label="Report summary"
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        <MetricCard
          label="Total reports"
          value={
            reportsQuery.isError
              ? "--"
              : data?.totalReports ?? 0
          }
          detail="Recorded report events"
          icon={
            <Files
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Completed"
          value={
            reportsQuery.isError
              ? "--"
              : data?.completedReports ?? 0
          }
          detail="Ready report events"
          icon={
            <FileCheck2
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Pending"
          value={
            reportsQuery.isError
              ? "--"
              : data?.pendingReports ?? 0
          }
          detail="Queued or processing"
          icon={
            <Clock3
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Failed"
          value={
            reportsQuery.isError
              ? "--"
              : data?.failedReports ?? 0
          }
          detail="Failed report events"
          icon={
            <TriangleAlert
              aria-hidden="true"
              className="size-5"
            />
          }
        />
      </section>

      <section className="rounded-2xl border">
        <div className="border-b p-6">
          <h2 className="text-lg font-semibold">
            Recent reports
          </h2>

          <p className="mt-1 text-sm opacity-65">
            Downloads remain disabled until persistent
            report artifacts are implemented.
          </p>
        </div>

        {reports.length === 0 &&
        !reportsQuery.isLoading &&
        !reportsQuery.isError ? (
          <div className="p-10 text-center">
            <FileBarChart
              aria-hidden="true"
              className="mx-auto size-8 opacity-40"
            />

            <h3 className="mt-4 font-semibold">
              No reports available
            </h3>

            <p className="mt-2 text-sm opacity-65">
              No report or export activity has been
              recorded for the selected tenant scope.
            </p>
          </div>
        ) : null}

        <div className="divide-y">
          {reports.map((report) => (
            <ReportRow
              key={report.id}
              report={report}
              supportsDownloads={
                data?.supportsDownloads ?? false
              }
            />
          ))}
        </div>
      </section>

      {data?.exportFormats.length ? (
        <section className="rounded-2xl border p-6">
          <h2 className="font-semibold">
            Export formats
          </h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {data.exportFormats.map((format) => (
              <span
                className="rounded-full border px-3 py-1 text-sm"
                key={format}
              >
                {format}
              </span>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}


