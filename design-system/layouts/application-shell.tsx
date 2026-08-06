import "./application-shell.css";

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
    <div
      className="aigo-app-shell"
      data-surface={surface}
    >
      <aside className="aigo-app-shell__navigation">

        <div className="aigo-app-shell__brand">
          <BrandLockup
            size="sm"
            tone="dark"
          />
        </div>

        <nav
          className="aigo-app-shell__menu"
          aria-label={`${title} navigation`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="aigo-app-shell__link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

      </aside>

      <section className="aigo-app-shell__workspace">

        <header className="aigo-app-shell__header">

          <div className="aigo-app-shell__header-copy">

            <p className="aigo-app-shell__eyebrow">
              {eyebrow}
            </p>

            <h1 className="aigo-app-shell__title">
              {title}
            </h1>

          </div>

          <div className="aigo-app-shell__header-actions">

            <ThemeSelector />

            <span className="aigo-app-shell__status">
              Phase 1 Foundation
            </span>

          </div>

        </header>

        <main className="aigo-app-shell__content">
          {children}
        </main>

      </section>

    </div>
  );
}
