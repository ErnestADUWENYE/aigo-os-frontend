import type { Metadata } from "next";

import { ApplicationProviders } from "./providers/application-providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AIGO-OS",
    template: "%s | AIGO-OS",
  },
  description: "The AI Governance Operating System for the Enterprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ApplicationProviders>{children}</ApplicationProviders>
      </body>
    </html>
  );
}

