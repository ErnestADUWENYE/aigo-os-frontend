"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Clerk password reset will be connected here.
      console.log({
        code,
        password,
      });

      router.push("/sign-in");
    } catch {
      setError("Unable to reset password.");
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
            Reset Password
          </h1>

          <p className="mt-2 text-sm opacity-70">
            Enter the verification code and choose a new password.
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
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            New Password
          </label>

          <input
            type="password"
            required
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Confirm Password
          </label>

          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(event.target.value)
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
          className="w-full rounded-lg border p-3 font-medium"
        >
          {loading
            ? "Resetting..."
            : "Reset Password"}
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
