"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setLoading(true);

    try {
      // Clerk password reset will be connected here.
      console.log({
        email,
      });

      setSuccess(true);

      setTimeout(() => {
        router.push("/reset-password");
      }, 1200);
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
            Forgot Password
          </h1>

          <p className="mt-2 text-sm opacity-70">
            Enter your email to receive a password reset code.
          </p>
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

        {success && (
          <p className="text-sm text-green-600">
            Password reset instructions have been sent.
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg border p-3 font-medium"
        >
          {loading
            ? "Sending..."
            : "Send Reset Link"}
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
