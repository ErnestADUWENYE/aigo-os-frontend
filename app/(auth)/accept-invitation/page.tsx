"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  acceptInvitation,
} from "@/lib/api/customer-accept-invitation";

export default function AcceptInvitationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token") ?? "";

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      await acceptInvitation({
        token,
        email,
        clerkUserId: "pending-clerk-user",
      });

      router.push("/select-organization");
    } catch {
      setError(
        "Unable to accept invitation. Please verify the invitation link.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full space-y-6 rounded-2xl border p-8"
      >
        <div>
          <h1 className="text-2xl font-semibold">
            Accept Invitation
          </h1>

          <p className="mt-2 text-sm opacity-70">
            Complete your invitation to join AIGO.
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Invitation Token
          </label>

          <input
            readOnly
            value={token}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            className="w-full rounded-lg border p-3"
          />
        </div>

        {error && (
          <p className="text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg rounded-lg border p-3 font-medium"
        >
          {loading
            ? "Accepting..."
            : "Accept Invitation"}
        </button>
      </form>
    </main>
  );
}
