"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <SignIn
        fallbackRedirectUrl="/select-organization"
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
      />
    </main>
  );
}
