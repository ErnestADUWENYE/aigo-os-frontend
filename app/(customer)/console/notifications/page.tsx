"use client";

import { useQuery } from "@tanstack/react-query";
import {
  AlertCircle,
  Bell,
  BellRing,
  CheckCircle2,
  Info,
  LoaderCircle,
  ShieldAlert,
  TriangleAlert,
} from "lucide-react";

import { useAuthentication } from "../../../providers/authentication-provider";
import { useTenant } from "../../../providers/tenant-provider";
import {
  listCustomerNotifications,
  type CustomerNotification,
} from "../../../../lib/api/customer-notifications";

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

function SeverityIcon({
  severity,
}: {
  severity: string;
}) {
  const normalized = severity.toUpperCase();

  if (normalized === "HIGH") {
    return (
      <ShieldAlert
        aria-hidden="true"
        className="size-5"
      />
    );
  }

  if (normalized === "WARNING") {
    return (
      <TriangleAlert
        aria-hidden="true"
        className="size-5"
      />
    );
  }

  return (
    <Info
      aria-hidden="true"
      className="size-5"
    />
  );
}

function NotificationRow({
  notification,
}: {
  notification: CustomerNotification;
}) {
  return (
    <article className="p-5">
      <div className="flex items-start gap-4">
        <div className="rounded-xl border p-3">
          <SeverityIcon
            severity={notification.severity}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold">
                {notification.title}
              </h3>

              <p className="mt-2 text-sm opacity-70">
                {notification.message}
              </p>
            </div>

            <span className="rounded-full border px-3 py-1 text-xs">
              {notification.severity}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs opacity-60">
            <span className="rounded-full border px-2.5 py-1">
              {notification.category}
            </span>

            <span className="rounded-full border px-2.5 py-1">
              {notification.sourceEntityType}
            </span>

            <span>
              {formatDate(notification.createdAt)}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function NotificationsPage() {
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

  const notificationsQuery = useQuery({
    queryKey: [
      "customer",
      "notifications",
      tenantId,
      workspaceId,
    ],
    queryFn: listCustomerNotifications,
    enabled,
  });

  const notifications =
    notificationsQuery.data?.notifications ?? [];

  const highSeverityCount = notifications.filter(
    (notification) =>
      notification.severity.toUpperCase() === "HIGH",
  ).length;

  const warningCount = notifications.filter(
    (notification) =>
      notification.severity.toUpperCase() ===
      "WARNING",
  ).length;

  const infoCount = notifications.filter(
    (notification) =>
      notification.severity.toUpperCase() === "INFO",
  ).length;

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border p-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium opacity-65">
              <BellRing
                aria-hidden="true"
                className="size-4"
              />
              Tenant activity notifications
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Notifications
            </h2>

            <p className="mt-3 max-w-2xl opacity-70">
              Review important customer activity projected
              from tenant-scoped audit events.
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
                    : "Organization-wide notifications"
                )}
            </p>
          </div>
        </div>
      </section>

      {notificationsQuery.isLoading ? (
        <div className="flex items-center gap-3 rounded-2xl border p-6">
          <LoaderCircle
            aria-hidden="true"
            className="size-5 animate-spin"
          />
          <span>Loading notifications...</span>
        </div>
      ) : null}

      {notificationsQuery.isError ? (
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
                Notifications could not be loaded
              </h3>

              <p className="mt-2 text-sm opacity-65">
                Confirm that the backend is running and
                that your role has notification access.
              </p>

              <button
                className="mt-4 rounded-lg border px-4 py-2 text-sm"
                onClick={() => {
                  void notificationsQuery.refetch();
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
        aria-label="Notification summary"
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        <article className="rounded-2xl border p-6">
          <Bell
            aria-hidden="true"
            className="size-5"
          />

          <p className="mt-4 text-sm opacity-65">
            Total notifications
          </p>

          <p className="mt-2 text-3xl font-semibold">
            {notificationsQuery.isError
              ? "--"
              : notifications.length}
          </p>
        </article>

        <article className="rounded-2xl border p-6">
          <ShieldAlert
            aria-hidden="true"
            className="size-5"
          />

          <p className="mt-4 text-sm opacity-65">
            High severity
          </p>

          <p className="mt-2 text-3xl font-semibold">
            {notificationsQuery.isError
              ? "--"
              : highSeverityCount}
          </p>
        </article>

        <article className="rounded-2xl border p-6">
          <TriangleAlert
            aria-hidden="true"
            className="size-5"
          />

          <p className="mt-4 text-sm opacity-65">
            Warnings
          </p>

          <p className="mt-2 text-3xl font-semibold">
            {notificationsQuery.isError
              ? "--"
              : warningCount}
          </p>
        </article>

        <article className="rounded-2xl border p-6">
          <Info
            aria-hidden="true"
            className="size-5"
          />

          <p className="mt-4 text-sm opacity-65">
            Informational
          </p>

          <p className="mt-2 text-3xl font-semibold">
            {notificationsQuery.isError
              ? "--"
              : infoCount}
          </p>
        </article>
      </section>

      <section className="rounded-2xl border">
        <div className="border-b p-6">
          <h2 className="text-lg font-semibold">
            Recent activity
          </h2>

          <p className="mt-1 text-sm opacity-65">
            Read state is not yet supported because these
            notifications are currently projected from
            immutable audit events.
          </p>
        </div>

        {notifications.length === 0 &&
        !notificationsQuery.isLoading ? (
          <div className="p-10 text-center">
            <CheckCircle2
              aria-hidden="true"
              className="mx-auto size-8 opacity-40"
            />

            <h3 className="mt-4 font-semibold">
              No notifications
            </h3>

            <p className="mt-2 text-sm opacity-65">
              No tenant activity notifications are
              available for the selected scope.
            </p>
          </div>
        ) : null}

        <div className="divide-y">
          {notifications.map((notification) => (
            <NotificationRow
              key={notification.id}
              notification={notification}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

