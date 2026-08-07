"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function VerifyEmailPage() {
  const router = useRouter();

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      // Clerk email verification will be connected here.
      console.log({
        code,
      });

      router.push("/select-organization");
    } catch {
      setError("Verification failed.");
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
          <h1 className="text-3xl font-semibold">
            Verify Email
          </h1>

          <p className="mt-2 text-sm opacity-70">
            Enter the verification code sent to your email.
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Verification Code
          </label>

          <input
            required
            value={code}
            onChange={(event) =>
              setCode(event.target.value)
            }
            className="w-full rounded-lg border p-3 text-center tracking-[0.4em]"
            placeholder="123456"
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
          className="w-full rounded-lg border p-3 font-medium"
        >
          {loading ? "Verifying..." : "Verify Email"}
        </button>

        <button
          type="button"
          className="w-full rounded-lg border p-3"
        >
          Resend Code
        </button>

        <p className="text-center text-sm">
          <Link
            href="/sign-in"
            className="underline"
          >
            Back to Sign In
          </Link>
        </p>
      </form>
    </main>
  );
}
