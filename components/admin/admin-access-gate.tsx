"use client";

import { useClerk } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import type { ReactNode } from "react";

import { useAuthentication } from "../../app/providers/authentication-provider";
import { getAdminAccessStatus } from "../../lib/api/admin-access";

export function AdminAccessGate({
  children,
}: {
  children: ReactNode;
}) {
  const authentication = useAuthentication();
  const { signOut } = useClerk();

  const accessQuery = useQuery({
    queryKey: [
      "admin",
      "access-status",
      authentication.userId,
    ],
    queryFn: getAdminAccessStatus,
    enabled:
      authentication.isLoaded &&
      authentication.isAuthenticated &&
      Boolean(authentication.accessToken),
    retry: false,
    staleTime: 30_000,
  });

  async function handleUseAnotherAccount() {
    await signOut();
    window.location.replace("/sign-in");
  }

  if (
    !authentication.isLoaded ||
    (
      authentication.isAuthenticated &&
      !authentication.accessToken
    ) ||
    accessQuery.isLoading
  ) {
    return (
      <main className="grid min-h-screen place-items-center p-6">
        <div className="text-center">
          <p className="text-sm opacity-60">
            AIGO-OS Internal Administration
          </p>

          <h1 className="mt-2 text-2xl font-semibold">
            Verifying administrator access
          </h1>

          <p className="mt-3 text-sm opacity-60">
            Confirming your authorized internal
            administrator identity.
          </p>
        </div>
      </main>
    );
  }

  if (
    !authentication.isAuthenticated ||
    accessQuery.isError
  ) {
    return (
      <main className="grid min-h-screen place-items-center p-6">
        <section className="w-full max-w-xl rounded-2xl border p-8">
          <p className="text-sm font-medium opacity-60">
            AIGO-OS Internal Administration
          </p>

          <h1 className="mt-2 text-3xl font-semibold">
            Admin access denied
          </h1>

          <p className="mt-4 text-sm leading-6 opacity-70">
            This authenticated identity is not
            authorized to access the AIGO-OS internal
            Admin Console.
          </p>

          <p className="mt-3 text-sm leading-6 opacity-60">
            Internal administrator access must be
            granted by an authorized AIGO-OS
            administrator.
          </p>

          <button
            className="mt-8 rounded-xl border px-5 py-3 font-medium"
            onClick={() => {
              void handleUseAnotherAccount();
            }}
            type="button"
          >
            Use another account
          </button>
        </section>
      </main>
    );
  }

  if (!accessQuery.data) {
    return null;
  }

  return children;
}
