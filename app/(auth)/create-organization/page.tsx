"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import {
  provisionCustomerOrganization,
} from "../../../lib/api/customer-organizations";
import {
  listCustomerWorkspaces,
} from "../../../lib/api/customer-workspaces";
import { useTenant } from "../../providers/tenant-provider";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function CreateOrganizationPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    selectTenant,
    selectWorkspace,
    setOrganizations,
    setWorkspaces,
  } = useTenant();

  const [organizationName, setOrganizationName] =
    useState("");

  const [workspaceName, setWorkspaceName] =
    useState("");

  const organizationSlug = useMemo(
    () => slugify(organizationName),
    [organizationName],
  );

  const workspaceSlug = useMemo(
    () => slugify(workspaceName),
    [workspaceName],
  );

  const mutation = useMutation({
    mutationFn: provisionCustomerOrganization,

    onSuccess: async (created) => {
      await queryClient.invalidateQueries({
        queryKey: ["customer"],
      });

      const organizations =
        await queryClient.fetchQuery({
          queryKey: ["customer", "organizations"],
          queryFn: async () => {
            const mod = await import(
              "../../../lib/api/customer-organizations"
            );

            return mod.listCustomerOrganizations();
          },
        });

      setOrganizations(organizations);

      const organization =
        organizations.find(
          (o) => o.id === created.organizationId,
        ) ?? organizations[0];

      if (!organization) {
        router.replace("/select-organization");
        return;
      }

      selectTenant(organization);

      const workspaces =
        await queryClient.fetchQuery({
          queryKey: [
            "customer",
            "workspaces",
            organization.id,
          ],
          queryFn: listCustomerWorkspaces,
        });

      setWorkspaces(workspaces);

      if (workspaces.length > 0) {
        selectWorkspace(workspaces[0]);
      }

      router.replace("/console/dashboard");
    },
  });

  return (
    <main className="mx-auto max-w-xl space-y-6 p-10">
      <h1 className="text-3xl font-semibold">
        Create Organization
      </h1>

      <input
        className="w-full rounded border p-3"
        placeholder="Organization name"
        value={organizationName}
        onChange={(e) => {
          const value = e.target.value;
          setOrganizationName(value);

          if (!workspaceName) {
            setWorkspaceName(
              value
                ? `${value} Workspace`
                : "",
            );
          }
        }}
      />

      <input
        className="w-full rounded border p-3 bg-muted"
        value={organizationSlug}
        readOnly
      />

      <input
        className="w-full rounded border p-3"
        placeholder="Workspace name"
        value={workspaceName}
        onChange={(e) =>
          setWorkspaceName(e.target.value)
        }
      />

      <input
        className="w-full rounded border p-3 bg-muted"
        value={workspaceSlug}
        readOnly
      />

      <button
        className="rounded border px-6 py-3"
        disabled={
          mutation.isPending ||
          !organizationName ||
          !workspaceName
        }
        onClick={() =>
          mutation.mutate({
            organizationName,
            organizationSlug,
            workspaceName,
            workspaceSlug,
          })
        }
      >
        {mutation.isPending
          ? "Creating..."
          : "Create Organization"}
      </button>
    </main>
  );
}
