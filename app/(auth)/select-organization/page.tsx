"use client";

import { useRouter } from "next/navigation";
import { Building2, Check } from "lucide-react";
import { useState } from "react";

type Organization = {
  id: string;
  name: string;
  role: string;
};

const organizations: Organization[] = [
  {
    id: "northstar",
    name: "Northstar Insurance Group",
    role: "Administrator",
  },
  {
    id: "northstar-governance",
    name: "Northstar Governance",
    role: "Reviewer",
  },
];

export default function SelectOrganizationPage() {
  const router = useRouter();

  const [selectedOrganization, setSelectedOrganization] =
    useState<string>();

  function continueToWorkspace() {
    if (!selectedOrganization) {
      return;
    }

    router.push("/select-workspace");
  }

  return (
    <main className="mx-auto max-w-5xl p-10">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold">
          Select Organization
        </h1>

        <p className="mt-3 max-w-2xl opacity-70">
          Choose the organization you want to access.
        </p>
      </header>

      <div className="grid gap-6">
        {organizations.map((organization) => {
          const selected =
            selectedOrganization === organization.id;

          return (
            <button
              key={organization.id}
              type="button"
              onClick={() =>
                setSelectedOrganization(
                  organization.id,
                )
              }
              className={[
                "rounded-2xl border p-6 text-left transition",
                selected
                  ? "border-blue-600"
                  : "",
              ].join(" ")}
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <Building2 className="size-8" />

                  <div>
                    <h2 className="text-xl font-semibold">
                      {organization.name}
                    </h2>

                    <p className="mt-2 opacity-70">
                      {organization.role}
                    </p>
                  </div>
                </div>

                {selected && (
                  <Check className="size-6" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-10">
        <button
          type="button"
          disabled={!selectedOrganization}
          onClick={continueToWorkspace}
          className="rounded-xl border px-8 py-3 font-medium disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </main>
  );
}
