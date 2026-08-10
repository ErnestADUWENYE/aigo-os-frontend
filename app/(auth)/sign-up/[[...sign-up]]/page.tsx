"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <SignUp
        fallbackRedirectUrl="/select-organization"
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
      />
    </main>
  );
}



