"use client";

import {
  Ban,
  LogOut,
  ShieldAlert,
} from "lucide-react";
import Link from "next/link";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import { useAuthorization } from "../../providers/authorization-provider";

export default function ForbiddenPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const authorization = useAuthorization();

  const required = (
    searchParams.get("required") ?? ""
  )
    .split(",")
    .map((permission) => permission.trim())
    .filter(Boolean);

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <section className="w-full max-w-xl rounded-2xl border p-8">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl border p-4">
            <ShieldAlert
              aria-hidden="true"
              className="size-6"
            />
          </div>

          <div>
            <p className="text-sm font-medium opacity-65">
              Access denied
            </p>

            <h1 className="mt-2 text-3xl font-semibold">
              Forbidden
            </h1>

            <p className="mt-3 opacity-70">
              You are authenticated, but your current
              organization or workspace permissions do not
              allow access to this resource.
            </p>
          </div>
        </div>

        {required.length > 0 ? (
          <div className="mt-8">
            <p className="text-sm font-medium">
              Required permission
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {required.map((permission) => (
                <span
                  className="rounded-full border px-3 py-1 text-xs"
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
                  className="rounded-full border px-3 py-1 text-xs"
                  key={role}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            className="rounded-lg border px-4 py-2 text-sm font-medium"
            onClick={() => {
              router.back();
            }}
            type="button"
          >
            Go back
          </button>

          <Link
            className="rounded-lg border px-4 py-2 text-sm font-medium"
            href="/console/dashboard"
          >
            Customer dashboard
          </Link>

          <Link
            className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm"
            href="/select-organization"
          >
            <Ban
              aria-hidden="true"
              className="size-4"
            />
            Change organization
          </Link>

          <Link
            className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm"
            href="/sign-in"
          >
            <LogOut
              aria-hidden="true"
              className="size-4"
            />
            Sign in again
          </Link>
        </div>
      </section>
    </main>
  );
}
