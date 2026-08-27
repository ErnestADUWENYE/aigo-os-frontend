"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import {
  ApplicationShell,
  type ShellLink,
} from "../../design-system/layouts/application-shell";

const adminLinks: ShellLink[] = [
  {
    href: "/admin/dashboard",
    label: "Dashboard",
  },
  {
    href: "/admin/customers",
    label: "Customers",
  },
  {
    href: "/admin/system-health",
    label: "System Health",
  },
  {
    href: "/admin/security",
    label: "Security",
  },
  {
    href: "/admin/audit",
    label: "Audit",
  },
  {
    href: "/admin/settings",
    label: "Settings",
  },
];

function formatSegment(segment: string): string {
  return segment
    .replace(/-/g, " ")
    .replace(
      /\b\w/g,
      (character) => character.toUpperCase(),
    );
}

export function AdminConsoleLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  const currentSection =
    pathname
      .split("/")
      .filter(Boolean)
      .at(-1) ?? "dashboard";

  const adminActions = (
    <div className="flex items-center gap-2">
      <UserButton showName={false} />
    </div>
  );

  return (
    <ApplicationShell
      eyebrow="Internal administration"
      headerActions={adminActions}
      links={adminLinks}
      statusLabel="Internal"
      surface="admin"
      title={formatSegment(currentSection)}
    >
      {children}
    </ApplicationShell>
  );
}

