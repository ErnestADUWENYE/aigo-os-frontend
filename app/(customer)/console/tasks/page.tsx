"use client";

import { useQuery } from "@tanstack/react-query";
import {
  AlertCircle,
  CheckCircle2,
  CircleDot,
  Clock3,
  ListChecks,
  LoaderCircle,
  TimerReset,
  TriangleAlert,
  UserRound,
} from "lucide-react";

import { useAuthentication } from "../../../providers/authentication-provider";
import { useAuthorization } from "../../../providers/authorization-provider";
import { useTenant } from "../../../providers/tenant-provider";
import {
  listCustomerTasks,
  type CustomerTask,
} from "../../../../lib/api/customer-tasks";

function formatDate(value: string | null): string {
  if (!value) {
    return "No deadline";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Unknown date";
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

  if (normalized === "IN_PROGRESS") {
    return (
      <TimerReset
        aria-hidden="true"
        className="size-5"
      />
    );
  }

  if (normalized === "CANCELLED") {
    return (
      <TriangleAlert
        aria-hidden="true"
        className="size-5"
      />
    );
  }

  return (
    <CircleDot
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

function TaskRow({
  task,
}: {
  task: CustomerTask;
}) {
  return (
    <article className="p-5">
      <div className="flex items-start gap-4">
        <div className="rounded-xl border p-3">
          <StatusIcon status={task.status} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold">
                {task.title}
              </h3>

              {task.description ? (
                <p className="mt-2 text-sm opacity-70">
                  {task.description}
                </p>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border px-3 py-1">
                {task.status}
              </span>

              <span className="rounded-full border px-3 py-1">
                {task.priority}
              </span>

              <span className="rounded-full border px-3 py-1">
                {task.category}
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs opacity-60">
            <span>
              Created {formatDate(task.createdAt)}
            </span>

            <span>
              Due {formatDate(task.dueAt)}
            </span>

            <span>
              Assigned to {task.assignedTo ?? "Unassigned"}
            </span>

            <span>
              {task.sourceEventType}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TasksPage() {
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

  const tasksQuery = useQuery({
    queryKey: [
      "customer",
      "tasks",
      tenantId,
      workspaceId,
    ],
    queryFn: listCustomerTasks,
    enabled,
  });

  const data = tasksQuery.data;
  const tasks = data?.tasks ?? [];

const canViewTasks = authorization.canAny([
  "organization.admin",
  "tasks.read",
]);

if (!canViewTasks) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <section className="rounded-2xl border p-8 text-center">
        <h1 className="text-2xl font-semibold">
          Access denied
        </h1>

        <p className="mt-3 text-sm opacity-70">
          You do not have permission to access Tasks.
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
              <ListChecks
                aria-hidden="true"
                className="size-4"
              />
              Tenant work queue
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Tasks
            </h2>

            <p className="mt-3 max-w-2xl opacity-70">
              Review workflow tasks and action items recorded
              for the selected tenant scope.
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
                    : "Organization-wide tasks"
                )}
            </p>
          </div>
        </div>
      </section>

      {tasksQuery.isLoading ? (
        <div className="flex items-center gap-3 rounded-2xl border p-6">
          <LoaderCircle
            aria-hidden="true"
            className="size-5 animate-spin"
          />
          <span>Loading tasks...</span>
        </div>
      ) : null}

      {tasksQuery.isError ? (
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
                Tasks could not be loaded
              </h3>

              <p className="mt-2 text-sm opacity-65">
                Confirm that the backend is running and
                that your role has task access.
              </p>

              <button
                className="mt-4 rounded-lg border px-4 py-2 text-sm"
                onClick={() => {
                  void tasksQuery.refetch();
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
        aria-label="Task summary"
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-5"
      >
        <MetricCard
          label="Total tasks"
          value={
            tasksQuery.isError
              ? "--"
              : data?.totalTasks ?? 0
          }
          detail="Recorded task events"
          icon={
            <ListChecks
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Open"
          value={
            tasksQuery.isError
              ? "--"
              : data?.openTasks ?? 0
          }
          detail="Awaiting action"
          icon={
            <CircleDot
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="In progress"
          value={
            tasksQuery.isError
              ? "--"
              : data?.inProgressTasks ?? 0
          }
          detail="Currently being worked"
          icon={
            <TimerReset
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Completed"
          value={
            tasksQuery.isError
              ? "--"
              : data?.completedTasks ?? 0
          }
          detail="Finished tasks"
          icon={
            <CheckCircle2
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Overdue"
          value={
            tasksQuery.isError
              ? "--"
              : data?.overdueTasks ?? 0
          }
          detail="Past due and still active"
          icon={
            <Clock3
              aria-hidden="true"
              className="size-5"
            />
          }
        />
      </section>

      <section className="rounded-2xl border">
        <div className="border-b p-6">
          <h2 className="text-lg font-semibold">
            Task queue
          </h2>

          <p className="mt-1 text-sm opacity-65">
            Task updates remain disabled until persistent
            workflow state is implemented.
          </p>
        </div>

        {tasks.length === 0 &&
        !tasksQuery.isLoading &&
        !tasksQuery.isError ? (
          <div className="p-10 text-center">
            <UserRound
              aria-hidden="true"
              className="mx-auto size-8 opacity-40"
            />

            <h3 className="mt-4 font-semibold">
              No tasks available
            </h3>

            <p className="mt-2 text-sm opacity-65">
              No workflow tasks or action items were found
              for the selected tenant scope.
            </p>
          </div>
        ) : null}

        <div className="divide-y">
          {tasks.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
            />
          ))}
        </div>
      </section>
    </div>
  );
}


