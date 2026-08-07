"use client";

import { SignOutButton } from "@clerk/nextjs";
import {
  ClockAlert,
  LogIn,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { useTenant } from "../../providers/tenant-provider";

export default function SessionExpiredPage() {
  const { clearTenant } = useTenant();

  useEffect(() => {
    clearTenant();
  }, [clearTenant]);

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <section className="w-full max-w-md rounded-2xl border p-8 text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border">
          <ClockAlert
            aria-hidden="true"
            className="size-6"
          />
        </div>

        <h1 className="mt-6 text-3xl font-semibold">
          Session Expired
        </h1>

        <p className="mt-3 text-sm opacity-70">
          Your session is no longer active. Sign in again
          to continue securely.
        </p>

        <div className="mt-8 space-y-3">
          <SignOutButton redirectUrl="/sign-in">
            <button
              className="flex w-full items-center justify-center gap-2 rounded-lg border p-3 font-medium"
              type="button"
            >
              <LogIn
                aria-hidden="true"
                className="size-4"
              />
              Sign In Again
            </button>
          </SignOutButton>

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
