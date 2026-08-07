"use client";

import { useRouter } from "next/navigation";
import { Briefcase, Check } from "lucide-react";
import { useState } from "react";

type Workspace = {
  id: string;
  name: string;
  description: string;
};

const workspaces: Workspace[] = [
  {
    id: "enterprise-risk",
    name: "Enterprise Risk",
    description: "Governance, Risk & Compliance",
  },
  {
    id: "internal-audit",
    name: "Internal Audit",
    description: "Audit planning and execution",
  },
  {
    id: "security",
    name: "Information Security",
    description: "Security operations and compliance",
  },
];

export default function SelectWorkspacePage() {
  const router = useRouter();

  const [selectedWorkspace, setSelectedWorkspace] =
    useState<string>();

  function continueToConsole() {
    if (!selectedWorkspace) {
      return;
    }

    router.push("/console/dashboard");
  }

  return (
    <main className="mx-auto max-w-5xl p-10">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold">
          Select Workspace
        </h1>

        <p className="mt-3 max-w-2xl opacity-70">
          Choose the workspace you want to access.
        </p>
      </header>

      <div className="grid gap-6">
        {workspaces.map((workspace) => {
          const selected =
            selectedWorkspace === workspace.id;

          return (
            <button
              key={workspace.id}
              type="button"
              onClick={() =>
                setSelectedWorkspace(workspace.id)
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
                  <Briefcase className="size-8" />

                  <div>
                    <h2 className="text-xl font-semibold">
                      {workspace.name}
                    </h2>

                    <p className="mt-2 opacity-70">
                      {workspace.description}
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
          disabled={!selectedWorkspace}
          onClick={continueToConsole}
          className="rounded-xl border px-8 py-3 font-medium disabled:opacity-50"
        >
          Enter AIGO
        </button>
      </div>
    </main>
  );
}
