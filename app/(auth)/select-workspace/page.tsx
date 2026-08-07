"use client";

import {
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  AlertCircle,
  Briefcase,
  Check,
  LoaderCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useAuthentication } from "../../providers/authentication-provider";
import { useTenant } from "../../providers/tenant-provider";
import {
  listCustomerWorkspaces,
} from "../../../lib/api/customer-workspaces";

export default function SelectWorkspacePage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const authentication = useAuthentication();

  const {
    tenantId,
    tenantName,
    selectWorkspace,
    setWorkspaces,
  } = useTenant();

  const [selectedWorkspaceId, setSelectedWorkspaceId] =
    useState<string | null>(null);

  const enabled =
    authentication.isLoaded &&
    authentication.isAuthenticated &&
    Boolean(authentication.accessToken) &&
    Boolean(tenantId);

  const workspacesQuery = useQuery({
    queryKey: [
      "customer",
      "workspaces",
      tenantId,
      authentication.userId,
    ],
    queryFn: listCustomerWorkspaces,
    enabled,
  });

  const workspaces = workspacesQuery.data ?? [];

  useEffect(() => {
    if (workspacesQuery.data) {
      setWorkspaces(workspacesQuery.data);
    }
  }, [
    setWorkspaces,
    workspacesQuery.data,
  ]);

  useEffect(() => {
    if (
      authentication.isLoaded &&
      authentication.isAuthenticated &&
      !tenantId
    ) {
      router.replace("/select-organization");
    }
  }, [
    authentication.isAuthenticated,
    authentication.isLoaded,
    router,
    tenantId,
  ]);

  async function continueToConsole() {
    const workspace = workspaces.find(
      (item) => item.id === selectedWorkspaceId,
    );

    if (!workspace) {
      return;
    }

    await queryClient.cancelQueries();

    queryClient.removeQueries({
      predicate: (query) =>
        query.queryKey[0] === "customer" &&
        query.queryKey[1] !== "organizations" &&
        query.queryKey[1] !== "workspaces",
    });

    selectWorkspace(workspace);

    router.push("/console/dashboard");
  }

  return (
    <main className="mx-auto max-w-5xl p-10">
      <header className="mb-10">
        <p className="text-sm font-medium opacity-65">
          {tenantName ?? "Selected organization"}
        </p>

        <h1 className="mt-2 text-4xl font-semibold">
          Select Workspace
        </h1>

        <p className="mt-3 max-w-2xl opacity-70">
          Choose a workspace available to your
          authenticated account.
        </p>
      </header>

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
                Workspaces could not be loaded
              </h2>

              <p className="mt-2 text-sm opacity-65">
                Confirm that the selected organization
                contains active workspace memberships.
              </p>

              <button
                className="mt-4 rounded-lg border px-4 py-2 text-sm"
                onClick={() => {
                  void workspacesQuery.refetch();
                }}
                type="button"
              >
                Try again
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {!workspacesQuery.isLoading &&
      !workspacesQuery.isError &&
      workspaces.length === 0 ? (
        <section className="rounded-2xl border p-10 text-center">
          <Briefcase
            aria-hidden="true"
            className="mx-auto size-8 opacity-40"
          />

          <h2 className="mt-4 font-semibold">
            No workspace access
          </h2>

          <p className="mt-2 text-sm opacity-65">
            Your account does not have an active membership
            in any workspace for this organization.
          </p>

          <button
            className="mt-6 rounded-lg border px-4 py-2 text-sm"
            onClick={() => {
              router.push("/select-organization");
            }}
            type="button"
          >
            Change organization
          </button>
        </section>
      ) : null}

      <div className="grid gap-6">
        {workspaces.map((workspace) => {
          const selected =
            selectedWorkspaceId === workspace.id;

          return (
            <button
              className={[
                "rounded-2xl border p-6 text-left transition",
                selected
                  ? "ring-2 ring-current"
                  : "",
              ].join(" ")}
              key={workspace.id}
              onClick={() => {
                setSelectedWorkspaceId(
                  workspace.id,
                );
              }}
              type="button"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <Briefcase
                    aria-hidden="true"
                    className="size-8"
                  />

                  <div>
                    <h2 className="text-xl font-semibold">
                      {workspace.name}
                    </h2>

                    <p className="mt-1 text-sm opacity-60">
                      {workspace.description ??
                        workspace.slug}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {workspace.environment ? (
                        <span className="rounded-full border px-3 py-1 text-xs">
                          {workspace.environment}
                        </span>
                      ) : null}

                      {workspace.region ? (
                        <span className="rounded-full border px-3 py-1 text-xs">
                          {workspace.region}
                        </span>
                      ) : null}

                      {workspace.roles.map((role) => (
                        <span
                          className="rounded-full border px-3 py-1 text-xs"
                          key={role}
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {selected ? (
                  <Check
                    aria-hidden="true"
                    className="size-6"
                  />
                ) : null}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <button
          className="rounded-xl border px-6 py-3 font-medium"
          onClick={() => {
            router.push("/select-organization");
          }}
          type="button"
        >
          Back
        </button>

        <button
          className="rounded-xl border px-8 py-3 font-medium disabled:opacity-50"
          disabled={!selectedWorkspaceId}
          onClick={() => {
            void continueToConsole();
          }}
          type="button"
        >
          Enter AIGO
        </button>
      </div>
    </main>
  );
}
