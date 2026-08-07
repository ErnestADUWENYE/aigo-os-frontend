"use client";

import {
  LogIn,
  ShieldQuestion,
} from "lucide-react";
import Link from "next/link";

import { useAuthentication } from "../../providers/authentication-provider";
import { useTenant } from "../../providers/tenant-provider";

export default function UnauthorizedPage() {
  const authentication = useAuthentication();
  const tenant = useTenant();

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <section className="w-full max-w-lg rounded-2xl border p-8 text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border">
          <ShieldQuestion
            aria-hidden="true"
            className="size-6"
          />
        </div>

        <h1 className="mt-6 text-3xl font-semibold">
          Unauthorized
        </h1>

        <p className="mt-3 text-sm opacity-70">
          A valid authenticated session is required before
          this resource can be accessed.
        </p>

        <div className="mt-8 space-y-3">
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-lg border p-3 font-medium"
            href="/sign-in"
          >
            <LogIn
              aria-hidden="true"
              className="size-4"
            />
            Sign In
          </Link>

          {authentication.isAuthenticated &&
          !tenant.tenantId ? (
            <Link
              className="block rounded-lg border p-3 text-sm"
              href="/select-organization"
            >
              Select Organization
            </Link>
          ) : null}

          <Link
            className="block rounded-lg border p-3 text-sm"
            href="/"
          >
            Return Home
          </Link>
        </div>
      </section>
    </main>
  );
}
