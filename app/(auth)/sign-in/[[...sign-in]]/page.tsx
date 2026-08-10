"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <SignIn
      appearance={{
        variables: {
          colorPrimary: "#0b1c31",
          colorForeground: "#101828",
          colorMutedForeground: "#667085",
          colorBackground: "#ffffff",
          borderRadius: "14px",
          fontSize: "15px",
        },
        elements: {
          rootBox: {
            width: "100%",
          },
          cardBox: {
            width: "100%",
            boxShadow: "none",
          },
          card: {
            width: "100%",
            maxWidth: "520px",
            border: "1px solid #e5eaf0",
            borderRadius: "24px",
            padding: "34px",
            boxShadow:
              "0 24px 70px rgba(15, 23, 42, 0.10)",
          },
          headerTitle: {
            fontSize: "30px",
            fontWeight: "700",
            color: "#101828",
            letterSpacing: "-0.03em",
          },
          headerSubtitle: {
            fontSize: "15px",
            color: "#667085",
          },
          socialButtonsBlockButton: {
            height: "52px",
            borderRadius: "12px",
            border: "1px solid #dde3ea",
            fontWeight: "600",
          },
          formFieldInput: {
            height: "52px",
            borderRadius: "12px",
            border: "1px solid #d9e0e8",
            boxShadow: "none",
          },
          formButtonPrimary: {
            height: "54px",
            borderRadius: "12px",
            background:
              "linear-gradient(135deg, #091828 0%, #102943 100%)",
            fontWeight: "700",
            boxShadow:
              "0 10px 28px rgba(10, 28, 48, 0.18)",
          },
          footerActionLink: {
            color: "#087ec0",
            fontWeight: "650",
          },
          dividerLine: {
            background: "#e7ebf0",
          },
          dividerText: {
            color: "#7b8794",
          },
        },
      }}
      fallbackRedirectUrl="/select-organization"
      path="/sign-in"
      routing="path"
      signUpUrl="/sign-up"
    />
  );
}

