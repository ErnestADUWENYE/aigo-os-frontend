"use client";

import {
  Ban,
  Home,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { useClerk } from "@clerk/nextjs";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { useAuthorization } from "../../providers/authorization-provider";
import { useTenant } from "../../providers/tenant-provider";

export default function ForbiddenPage() {
  const searchParams = useSearchParams();
  const authorization = useAuthorization();
  const { signOut } = useClerk();
  const queryClient = useQueryClient();
  const { clearTenant } = useTenant();

  const required = (
    searchParams.get("required") ?? ""
  )
    .split(",")
    .map((permission) => permission.trim())
    .filter(Boolean);

  async function handleUseAnotherAccount() {
    clearTenant();

    queryClient.removeQueries({
      predicate: (query) =>
        query.queryKey[0] === "customer",
    });

    queryClient.clear();

    await signOut();

    window.location.assign("/sign-in");
  }

  return (
    <main className="min-h-screen p-6 sm:p-10">
      <div className="mx-auto max-w-3xl">
        <section className="rounded-2xl border p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <Ban
              aria-hidden="true"
              className="mt-1 size-8 shrink-0"
            />

            <div className="min-w-0">
              <p className="text-sm font-medium opacity-65">
                Access denied
              </p>

              <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
                Forbidden
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 opacity-70 sm:text-base">
                You are authenticated, but your current
                organization or workspace permissions do not
                allow access to this resource.
              </p>
            </div>
          </div>

          {required.length > 0 ? (
            <div className="mt-8">
              <p className="text-sm font-medium">
                Required permissions
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {required.map((permission) => (
                  <span
                    className="max-w-full break-all rounded-full border px-3 py-1.5 text-xs"
                    key={permission}
                  >
                    {permission}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {authorization.roleSlugs.length > 0 ? (
            <div className="mt-8">
              <p className="text-sm font-medium">
                Current roles
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {authorization.roleSlugs.map((role) => (
                  <span
                    className="max-w-full break-all rounded-full border px-3 py-1.5 text-xs"
                    key={role}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Link
              className="flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium"
              href="/"
            >
              <Home
                aria-hidden="true"
                className="size-4"
              />
              Return to AIGO-OS
            </Link>

            <Link
              className="flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium"
              href="/select-organization"
            >
              <Ban
                aria-hidden="true"
                className="size-4"
              />
              Change organization
            </Link>

            <button
              className="flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium sm:col-span-2"
              onClick={() => {
                void handleUseAnotherAccount();
              }}
              type="button"
            >
              <LogOut
                aria-hidden="true"
                className="size-4"
              />
              Use another account
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
