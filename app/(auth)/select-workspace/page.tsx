"use client";

import { useQuery } from "@tanstack/react-query";
import {
  ArrowLeft,
  ArrowRight,
  LoaderCircle,
  MapPin,
  Server,
  Workflow,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useAuthentication } from "../../providers/authentication-provider";
import { useTenant } from "../../providers/tenant-provider";
import { listAccessibleWorkspaces } from "../../../lib/api/customer-access";
import type { WorkspaceOption } from "../../../lib/tenancy/types";

export default function SelectWorkspacePage() {
  const router = useRouter();
  const authentication = useAuthentication();

  const {
    isLoaded,
    selectWorkspace,
    setWorkspaces,
    tenantId,
    tenantName,
  } = useTenant();

  const workspacesQuery = useQuery({
    queryKey: [
      "customer",
      "workspaces",
      tenantId,
      authentication.userId,
    ],
    queryFn: () =>
      listAccessibleWorkspaces(
        tenantId as string,
      ),
    enabled:
      authentication.isLoaded &&
      authentication.isAuthenticated &&
      Boolean(authentication.accessToken) &&
      Boolean(tenantId),
  });

  useEffect(() => {
    if (workspacesQuery.data) {
      setWorkspaces(workspacesQuery.data);
    }
  }, [
    setWorkspaces,
    workspacesQuery.data,
  ]);

  useEffect(() => {
    if (isLoaded && !tenantId) {
      router.replace("/select-organization");
    }
  }, [
    isLoaded,
    router,
    tenantId,
  ]);

  function continueWithWorkspace(
    workspace: WorkspaceOption,
  ) {
    selectWorkspace(workspace);
    router.push("/console/dashboard");
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <section className="mx-auto w-full max-w-4xl">
        <button
          className="mb-8 flex items-center gap-2 text-sm opacity-70"
          onClick={() =>
            router.push("/select-organization")
          }
          type="button"
        >
          <ArrowLeft
            aria-hidden="true"
            className="size-4"
          />
          Change organization
        </button>

        <div className="mb-8">
          <p className="text-sm font-medium opacity-65">
            {tenantName ?? "Selected organization"}
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Select a workspace
          </h1>

          <p className="mt-3 max-w-2xl opacity-75">
            Choose the workspace whose governance data,
            members, integrations, and reports you want to
            manage.
          </p>
        </div>

        {workspacesQuery.isLoading ? (
          <div className="flex items-center gap-3 rounded-2xl border p-6">
            <LoaderCircle
              aria-hidden="true"
              className="size-5 animate-spin"
            />
            <span>Loading workspaces...</span>
          </div>
        ) : null}

        {workspacesQuery.isError ? (
          <div
            className="rounded-2xl border p-6"
            role="alert"
          >
            <h2 className="font-semibold">
              Workspaces could not be loaded
            </h2>

            <p className="mt-2 text-sm opacity-75">
              Your account may not have workspace access in
              this organization.
            </p>

            <button
              className="mt-4 rounded-lg border px-4 py-2"
              onClick={() => {
                void workspacesQuery.refetch();
              }}
              type="button"
            >
              Try again
            </button>
          </div>
        ) : null}

        {workspacesQuery.data?.length === 0 ? (
          <div className="rounded-2xl border p-6">
            <h2 className="font-semibold">
              No workspace selection required
            </h2>

            <p className="mt-2 text-sm opacity-75">
              Your organization-level access does not require
              a workspace.
            </p>

            <button
              className="mt-5 rounded-lg border px-4 py-2"
              onClick={() => {
                selectWorkspace(null);
                router.push("/console/dashboard");
              }}
              type="button"
            >
              Continue to dashboard
            </button>
          </div>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2">
          {workspacesQuery.data?.map((workspace) => (
            <button
              className="group rounded-2xl border p-6 text-left transition hover:-translate-y-0.5"
              key={workspace.id}
              onClick={() =>
                continueWithWorkspace(workspace)
              }
              type="button"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-xl border p-3">
                  <Workflow
                    aria-hidden="true"
                    className="size-5"
                  />
                </div>

                <ArrowRight
                  aria-hidden="true"
                  className="size-5 transition-transform group-hover:translate-x-1"
                />
              </div>

              <h2 className="mt-5 text-lg font-semibold">
                {workspace.name}
              </h2>

              <p className="mt-2 text-sm opacity-70">
                {workspace.description ??
                  "Customer governance workspace"}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="flex items-center gap-1 rounded-full border px-3 py-1">
                  <Server
                    aria-hidden="true"
                    className="size-3"
                  />
                  {workspace.environment ??
                    workspace.status}
                </span>

                {workspace.region ? (
                  <span className="flex items-center gap-1 rounded-full border px-3 py-1">
                    <MapPin
                      aria-hidden="true"
                      className="size-3"
                    />
                    {workspace.region}
                  </span>
                ) : null}

                {workspace.roles.map((role) => (
                  <span
                    className="rounded-full border px-3 py-1"
                    key={role}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
