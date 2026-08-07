"use client";

import {
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  AlertCircle,
  Building2,
  Check,
  LoaderCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useAuthentication } from "../../providers/authentication-provider";
import { useTenant } from "../../providers/tenant-provider";
import {
  listCustomerOrganizations,
} from "../../../lib/api/customer-organizations";

export default function SelectOrganizationPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const authentication = useAuthentication();

  const {
    selectTenant,
    setOrganizations,
  } = useTenant();

  const [selectedOrganizationId, setSelectedOrganizationId] =
    useState<string | null>(null);

  const enabled =
    authentication.isLoaded &&
    authentication.isAuthenticated &&
    Boolean(authentication.accessToken);

  const organizationsQuery = useQuery({
    queryKey: [
      "customer",
      "organizations",
      authentication.userId,
    ],
    queryFn: listCustomerOrganizations,
    enabled,
  });

  const organizations =
    organizationsQuery.data ?? [];

  useEffect(() => {
    if (organizationsQuery.data) {
      setOrganizations(organizationsQuery.data);
    }
  }, [
    organizationsQuery.data,
    setOrganizations,
  ]);

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
                Confirm that the API is available and your
                authenticated account has tenant access.
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
        <section className="rounded-2xl border p-10 text-center">
          <Building2
            aria-hidden="true"
            className="mx-auto size-8 opacity-40"
          />

          <h2 className="mt-4 font-semibold">
            No organization access
          </h2>

          <p className="mt-2 text-sm opacity-65">
            Your account does not have an active membership
            in any organization.
          </p>
        </section>
      ) : null}

      <div className="grid gap-6">
        {organizations.map((organization) => {
          const selected =
            selectedOrganizationId === organization.id;

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
                      {organization.roles.map((role) => (
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
    </main>
  );
}
