"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  AlertCircle,
  Building2,
  Check,
  LoaderCircle,
  ShieldCheck,
} from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useAuthentication } from "../../providers/authentication-provider";
import { useTenant } from "../../providers/tenant-provider";
import {
  getCustomerAccessStatus,
  listCustomerOrganizations,
  provisionCustomerOrganization,
} from "../../../lib/api/customer-organizations";

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function SelectOrganizationPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { signOut } = useClerk();
  const authentication = useAuthentication();

  const {
    selectTenant,
    setOrganizations,
  } = useTenant();

  const [selectedOrganizationId, setSelectedOrganizationId] =
    useState<string | null>(null);

  const [organizationSlug, setOrganizationSlug] =
    useState("");

  const [workspaceName, setWorkspaceName] =
    useState("");

  const [workspaceSlug, setWorkspaceSlug] =
    useState("");

  const enabled =
    authentication.isLoaded &&
    authentication.isAuthenticated &&
    Boolean(authentication.accessToken);

  const accessStatusQuery = useQuery({
    queryKey: [
      "customer",
      "access-status",
      authentication.userId,
    ],
    queryFn: getCustomerAccessStatus,
    enabled,
  });

  const accessState = accessStatusQuery.data?.state;

  const organizationsQuery = useQuery({
    queryKey: [
      "customer",
      "organizations",
      authentication.userId,
    ],
    queryFn: listCustomerOrganizations,
    enabled:
      enabled &&
      accessState === "EXISTING_CUSTOMER",
  });

  const organizations = useMemo(
    () => organizationsQuery.data ?? [],
    [organizationsQuery.data],
  );

  useEffect(() => {
    if (organizationsQuery.data) {
      setOrganizations(organizationsQuery.data);
    }
  }, [
    organizationsQuery.data,
    setOrganizations,
  ]);

  useEffect(() => {
    if (!organizationsQuery.isSuccess) {
      return;
    }

    if (organizations.length !== 1) {
      return;
    }

    const organization = organizations[0];

    void queryClient.cancelQueries();

    queryClient.removeQueries({
      predicate: (query) =>
        query.queryKey[0] === "customer" &&
        query.queryKey[1] !== "organizations",
    });

    setOrganizations(organizations);
    selectTenant(organization);

    router.replace("/select-workspace");
  }, [
    organizations,
    organizationsQuery.isSuccess,
    queryClient,
    router,
    selectTenant,
    setOrganizations,
  ]);



  const provisionMutation = useMutation({
    mutationFn: provisionCustomerOrganization,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [
          "customer",
          "access-status",
          authentication.userId,
        ],
      });

      await queryClient.invalidateQueries({
        queryKey: [
          "customer",
          "organizations",
          authentication.userId,
        ],
      });

      router.replace("/select-organization");
    },
  });
  async function continueToWorkspace() {
    const organization = organizations.find(
      (item) => item.id === selectedOrganizationId,
    );

    if (!organization) {
      return;
    }

    await queryClient.cancelQueries();

    queryClient.removeQueries({
      predicate: (query) =>
        query.queryKey[0] === "customer",
    });

    selectTenant(organization);

    router.push("/select-workspace");
  }

  function activateEnvironment() {
    if (accessState !== "READY_TO_ACTIVATE") {
      return;
    }

    const approvedOrganizationName =
      accessStatusQuery.data?.organizationName?.trim();

    const normalizedWorkspaceName =
      workspaceName.trim();

    const normalizedOrganizationSlug =
      organizationSlug.trim() ||
      slugify(approvedOrganizationName ?? "");

    const normalizedWorkspaceSlug =
      workspaceSlug.trim() ||
      slugify(normalizedWorkspaceName);

    if (
      !approvedOrganizationName ||
      !normalizedWorkspaceName ||
      !normalizedOrganizationSlug ||
      !normalizedWorkspaceSlug
    ) {
      return;
    }

    provisionMutation.mutate({
      organizationName: approvedOrganizationName,
      organizationSlug: normalizedOrganizationSlug,
      workspaceName: normalizedWorkspaceName,
      workspaceSlug: normalizedWorkspaceSlug,
    });
  }

  if (
    !authentication.isLoaded ||
    accessStatusQuery.isLoading
  ) {
    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <div className="flex items-center gap-3">
          <LoaderCircle
            aria-hidden="true"
            className="size-5 animate-spin"
          />
          <span>Checking your AIGO-OS access...</span>
        </div>
      </main>
    );
  }

  if (accessStatusQuery.isError) {
    return (
      <main className="mx-auto max-w-3xl p-10">
        <section
          className="rounded-2xl border p-8"
          role="alert"
        >
          <div className="flex items-start gap-4">
            <AlertCircle
              aria-hidden="true"
              className="mt-1 size-7"
            />

            <div>
              <h1 className="text-2xl font-semibold">
                We could not verify your AIGO-OS access
              </h1>

              <p className="mt-3 opacity-70">
                Your authenticated session could not be
                validated against the AIGO customer access
                service.
              </p>

              <button
                className="mt-6 rounded-xl border px-5 py-3 font-medium"
                onClick={() => {
                  void accessStatusQuery.refetch();
                }}
                type="button"
              >
                Try again
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  async function handleUseAnotherAccount() {
    await queryClient.cancelQueries();

    queryClient.clear();

    await signOut();

    window.location.replace("/sign-in");
  }

  if (accessState === "NOT_PROVISIONED") {
    return (
      <main className="mx-auto max-w-3xl p-10">
        <section className="rounded-2xl border p-8">
          <div className="flex items-start gap-4">
            <ShieldCheck
              aria-hidden="true"
              className="mt-1 size-8"
            />

            <div>
              <h1 className="text-3xl font-semibold">
                Access not provisioned
              </h1>

              <p className="mt-4 max-w-xl opacity-70">
                Your identity is authenticated, but it is
                not currently associated with an approved
                AIGO-OS customer environment.
              </p>

              <p className="mt-3 max-w-xl text-sm opacity-60">
                If your organization has subscribed to
                AIGO-OS, contact your AIGO-OS administrator
                or your organization&apos;s authorized
                administrator.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <button
                  className="rounded-xl border px-5 py-3 font-medium"
                  onClick={() => {
                    void handleUseAnotherAccount();
                  }}
                  type="button"
                >
                  Use another account
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (accessState === "READY_TO_ACTIVATE") {
    const approvedOrganizationName =
      accessStatusQuery.data?.organizationName ?? "";

    return (
      <main className="mx-auto max-w-4xl p-10">
        <header className="mb-10">
          <p className="mb-3 text-sm font-medium opacity-60">
            AIGO-OS CUSTOMER ACTIVATION
          </p>

          <h1 className="text-4xl font-semibold">
            Activate your AIGO environment
          </h1>

          <p className="mt-3 max-w-2xl opacity-70">
            Your organization has been approved for
            AIGO-OS. Configure the first workspace to
            complete activation.
          </p>
        </header>

        <section className="max-w-2xl rounded-2xl border p-8">
          <div className="mb-8 flex items-start gap-4">
            <Building2
              aria-hidden="true"
              className="mt-1 size-8"
            />

            <div>
              <p className="text-sm opacity-60">
                Approved organization
              </p>

              <h2 className="mt-1 text-xl font-semibold">
                {approvedOrganizationName}
              </h2>

              {accessStatusQuery.data?.planName ? (
                <p className="mt-2 text-sm opacity-60">
                  Plan: {accessStatusQuery.data.planName}
                </p>
              ) : null}
            </div>
          </div>

          <div className="grid gap-6">
            <label className="grid gap-2">
              <span className="text-sm font-medium">
                Organization identifier
              </span>

              <input
                className="rounded-xl border bg-transparent px-4 py-3"
                onChange={(event) => {
                  setOrganizationSlug(
                    slugify(event.target.value),
                  );
                }}
                placeholder="northstar-insurance"
                value={organizationSlug}
              />

              <span className="text-xs opacity-55">
                Used internally to identify this AIGO
                organization.
              </span>
            </label>

            <div className="my-2 border-t" />

            <label className="grid gap-2">
              <span className="text-sm font-medium">
                First workspace
              </span>

              <input
                className="rounded-xl border bg-transparent px-4 py-3"
                onChange={(event) => {
                  const value = event.target.value;

                  setWorkspaceName(value);

                  if (!workspaceSlug) {
                    setWorkspaceSlug(slugify(value));
                  }
                }}
                placeholder="Enterprise AI Governance"
                value={workspaceName}
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium">
                Workspace identifier
              </span>

              <input
                className="rounded-xl border bg-transparent px-4 py-3"
                onChange={(event) => {
                  setWorkspaceSlug(
                    slugify(event.target.value),
                  );
                }}
                placeholder="enterprise-ai-governance"
                value={workspaceSlug}
              />
            </label>
          </div>

          {provisionMutation.isError ? (
            <div
              className="mt-6 rounded-xl border p-4 text-sm"
              role="alert"
            >
              Environment activation failed. Please
              verify the identifiers and try again.
            </div>
          ) : null}

          <button
            className="mt-8 flex items-center gap-2 rounded-xl border px-6 py-3 font-medium disabled:opacity-50"
            disabled={
              provisionMutation.isPending ||
              !approvedOrganizationName ||
              !workspaceName.trim()
            }
            onClick={activateEnvironment}
            type="button"
          >
            {provisionMutation.isPending ? (
              <LoaderCircle
                aria-hidden="true"
                className="size-4 animate-spin"
              />
            ) : null}

            {provisionMutation.isPending
              ? "Activating environment..."
              : "Activate AIGO environment"}
          </button>
        </section>
      </main>
    );
  }

  if (accessState === "EXISTING_CUSTOMER") {
    return (
      <main className="mx-auto max-w-5xl p-10">
        <header className="mb-10">
          <h1 className="text-4xl font-semibold">
            Select Organization
          </h1>

          <p className="mt-3 max-w-2xl opacity-70">
            Choose an organization available to your
            authenticated account.
          </p>
        </header>

        {organizationsQuery.isLoading ? (
          <div className="flex items-center gap-3 rounded-2xl border p-6">
            <LoaderCircle
              aria-hidden="true"
              className="size-5 animate-spin"
            />

            <span>Loading organizations...</span>
          </div>
        ) : null}

        {organizationsQuery.isError ? (
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
                  Organizations could not be loaded
                </h2>

                <p className="mt-2 text-sm opacity-65">
                  The organization service could not be
                  reached.
                </p>

                <button
                  className="mt-4 rounded-lg border px-4 py-2 text-sm"
                  onClick={() => {
                    void organizationsQuery.refetch();
                  }}
                  type="button"
                >
                  Try again
                </button>
              </div>
            </div>
          </section>
        ) : null}

        {!organizationsQuery.isLoading &&
        !organizationsQuery.isError &&
        organizations.length === 0 ? (
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
                  No organization membership found
                </h2>

                <p className="mt-2 text-sm opacity-65">
                  Your customer account is active, but no
                  organization membership could be loaded.
                  Contact your AIGO administrator.
                </p>
              </div>
            </div>
          </section>
        ) : null}

        {organizations.length > 1 ? (
          <>
            <div className="grid gap-6">
              {organizations.map((organization) => {
                const selected =
                  selectedOrganizationId ===
                  organization.id;

                return (
                  <button
                    className={[
                      "rounded-2xl border p-6 text-left transition",
                      selected
                        ? "ring-2 ring-current"
                        : "",
                    ].join(" ")}
                    key={organization.id}
                    onClick={() => {
                      setSelectedOrganizationId(
                        organization.id,
                      );
                    }}
                    type="button"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <Building2
                          aria-hidden="true"
                          className="size-8"
                        />

                        <div>
                          <h2 className="text-xl font-semibold">
                            {organization.name}
                          </h2>

                          <p className="mt-1 text-sm opacity-60">
                            {organization.slug}
                          </p>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {organization.roles.map(
                              (role) => (
                                <span
                                  className="rounded-full border px-3 py-1 text-xs"
                                  key={role}
                                >
                                  {role}
                                </span>
                              ),
                            )}
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

            <div className="mt-10">
              <button
                className="rounded-xl border px-8 py-3 font-medium disabled:opacity-50"
                disabled={!selectedOrganizationId}
                onClick={() => {
                  void continueToWorkspace();
                }}
                type="button"
              >
                Continue
              </button>
            </div>
          </>
        ) : null}
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <LoaderCircle
        aria-hidden="true"
        className="size-5 animate-spin"
      />
    </main>
  );
}






