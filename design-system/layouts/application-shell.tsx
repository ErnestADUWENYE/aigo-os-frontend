import Link from "next/link";
import type { ReactNode } from "react";

import { BrandLockup } from "../branding/BrandLockup";
import { ThemeSelector } from "../components/theme-selector";

type ShellLink = {
  href: string;
  label: string;
};

type ApplicationShellProps = {
  children: ReactNode;
  title: string;
  eyebrow: string;
  links: ShellLink[];
  surface: "customer" | "admin";
};

export function ApplicationShell({
  children,
  title,
  eyebrow,
  links,
  surface,
}: ApplicationShellProps) {
  return (
    <div className="aigo-app-shell" data-surface={surface}>
      <aside className="aigo-app-shell__navigation">
        <BrandLockup
          caption={eyebrow}
          size="md"
          tone="dark"
        />

        <nav
          className="aigo-app-shell__menu"
          aria-label={`${title} navigation`}
        >
          {links.map((link) => (
            <Link
              className="aigo-app-shell__link"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="aigo-app-shell__workspace">
        <header className="aigo-app-shell__header">
          <div>
            <p className="aigo-app-shell__eyebrow">{eyebrow}</p>
            <h1 className="aigo-app-shell__title">{title}</h1>
          </div>

          <div className="aigo-app-shell__header-actions">
            <ThemeSelector />

            <div className="aigo-app-shell__status">
              Phase 1 Foundation
            </div>
          </div>
        </header>

        <main className="aigo-app-shell__content">{children}</main>
      </div>
    </div>
  );
}

