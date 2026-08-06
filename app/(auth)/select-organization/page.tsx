"use client";

import { useQuery } from "@tanstack/react-query";
import {
  ArrowRight,
  Building2,
  LoaderCircle,
  ShieldCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useAuthentication } from "../../providers/authentication-provider";
import { useTenant } from "../../providers/tenant-provider";
import { listAccessibleOrganizations } from "../../../lib/api/customer-access";
import type { OrganizationOption } from "../../../lib/tenancy/types";

export default function SelectOrganizationPage() {
  const router = useRouter();
  const authentication = useAuthentication();

  const {
    selectTenant,
    setOrganizations,
  } = useTenant();

  const organizationsQuery = useQuery({
    queryKey: [
      "customer",
      "organizations",
      authentication.userId,
    ],
    queryFn: listAccessibleOrganizations,
    enabled:
      authentication.isLoaded &&
      authentication.isAuthenticated &&
      Boolean(authentication.accessToken),
  });

  useEffect(() => {
    if (organizationsQuery.data) {
      setOrganizations(organizationsQuery.data);
    }
  }, [
    organizationsQuery.data,
    setOrganizations,
  ]);

  function continueWithOrganization(
    organization: OrganizationOption,
  ) {
    selectTenant(organization);

    if (organization.workspaceIds.length === 0) {
      router.push("/console/dashboard");
      return;
    }

    router.push("/select-workspace");
  }

  if (
    !authentication.isLoaded ||
    (
      authentication.isAuthenticated &&
      !authentication.accessToken
    )
  ) {
    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <div className="flex items-center gap-3">
          <LoaderCircle
            aria-hidden="true"
            className="size-5 animate-spin"
          />
          <span>Preparing your secure session...</span>
        </div>
      </main>
    );
  }

  if (!authentication.isAuthenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <section className="w-full max-w-lg rounded-2xl border p-8">
          <h1 className="text-2xl font-semibold">
            Authentication required
          </h1>

          <p className="mt-3 text-sm opacity-75">
            Sign in before selecting an organization.
          </p>

          <button
            className="mt-6 rounded-lg border px-4 py-2"
            onClick={() => router.push("/sign-in")}
            type="button"
          >
            Go to sign in
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <section className="mx-auto w-full max-w-4xl">
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium opacity-70">
            <ShieldCheck
              aria-hidden="true"
              className="size-4"
            />
            Secure customer access
          </div>

          <h1 className="text-3xl font-semibold tracking-tight">
            Select an organization
          </h1>

          <p className="mt-3 max-w-2xl opacity-75">
            Choose the customer organization whose
            workspaces and governance resources you want
            to access.
          </p>
        </div>

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
          <div
            className="rounded-2xl border p-6"
            role="alert"
          >
            <h2 className="font-semibold">
              Organizations could not be loaded
            </h2>

            <p className="mt-2 text-sm opacity-75">
              Confirm that the API is running and that your
              Clerk identity is registered as a customer
              profile.
            </p>

            <button
              className="mt-4 rounded-lg border px-4 py-2"
              onClick={() => {
                void organizationsQuery.refetch();
              }}
              type="button"
            >
              Try again
            </button>
          </div>
        ) : null}

        {organizationsQuery.data?.length === 0 ? (
          <div className="rounded-2xl border p-6">
            <h2 className="font-semibold">
              No organizations available
            </h2>

            <p className="mt-2 text-sm opacity-75">
              Your authenticated profile does not currently
              have an active organization membership.
            </p>
          </div>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2">
          {organizationsQuery.data?.map(
            (organization) => (
              <button
                className="group rounded-2xl border p-6 text-left transition hover:-translate-y-0.5"
                key={organization.id}
                onClick={() =>
                  continueWithOrganization(
                    organization,
                  )
                }
                type="button"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-xl border p-3">
                    <Building2
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
                  {organization.name}
                </h2>

                <p className="mt-1 text-sm opacity-65">
                  {organization.slug}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border px-3 py-1">
                    {organization.status}
                  </span>

                  <span className="rounded-full border px-3 py-1">
                    {organization.workspaceIds.length}{" "}
                    workspace
                    {organization.workspaceIds.length === 1
                      ? ""
                      : "s"}
                  </span>

                  {organization.roles.map((role) => (
                    <span
                      className="rounded-full border px-3 py-1"
                      key={role}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </button>
            ),
          )}
        </div>
      </section>
    </main>
  );
}
