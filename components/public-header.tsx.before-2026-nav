"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavigationChild = {
  href: string;
  label: string;
  description: string;
  eyebrow?: string;
};

type NavigationItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavigationChild[];
};

const navigation: NavigationItem[] = [
  {
    label: "Platform",
    href: "/product",
    description:
      "The operating layer that turns enterprise AI into governed actors.",
    children: [
      {
        eyebrow: "OVERVIEW",
        href: "/product",
        label: "AIGO-OS Platform",
        description:
          "See how identity, authority, risk, decisions and evidence work as one governance system.",
      },
      {
        eyebrow: "IDENTITY",
        href: "/product/actor-passports",
        label: "Actor Passports",
        description:
          "Give every AI actor a persistent governance identity and operating context.",
      },
      {
        eyebrow: "CONTROL",
        href: "/product/authority",
        label: "Machine Authority",
        description:
          "Define and evaluate what an autonomous actor is permitted to do.",
      },
      {
        eyebrow: "INTELLIGENCE",
        href: "/product/risk-intelligence",
        label: "Risk Intelligence",
        description:
          "Interpret risk using the actor, action, authority and business context.",
      },
      {
        eyebrow: "EVIDENCE",
        href: "/product/governance-receipts",
        label: "Governance Receipts",
        description:
          "Preserve reconstructable evidence behind consequential machine actions.",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    description:
      "Apply governed autonomy to the AI systems enterprises are putting into operation.",
    children: [
      {
        eyebrow: "AUTONOMOUS SYSTEMS",
        href: "/solutions/ai-agents",
        label: "AI Agent Governance",
        description:
          "Govern agents as operating actors with identity, authority and accountable action.",
      },
      {
        eyebrow: "ENTERPRISE CONTROL",
        href: "/solutions/enterprise-ai",
        label: "Enterprise AI",
        description:
          "Create one governance model across a fragmented and expanding AI estate.",
      },
      {
        eyebrow: "OPERATING MODEL",
        href: "/solutions/governed-autonomy",
        label: "Governed Autonomy",
        description:
          "Let machines act quickly while keeping authority bounded and decisions traceable.",
      },
    ],
  },
  {
    label: "Integrations",
    href: "/integrations",
  },
  {
    label: "Trust",
    href: "/trust",
    description:
      "Security, architecture and assurance for governance infrastructure.",
    children: [
      {
        eyebrow: "TRUST CENTER",
        href: "/trust",
        label: "Trust Center",
        description:
          "Understand how AIGO-OS approaches trust, architecture and enterprise assurance.",
      },
      {
        eyebrow: "SECURITY",
        href: "/security",
        label: "Security",
        description:
          "Review the security principles behind the governance operating layer.",
      },
      {
        eyebrow: "DISCLOSURE",
        href: "/responsible-disclosure",
        label: "Responsible Disclosure",
        description:
          "Report potential security issues through the appropriate public channel.",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    description:
      "Understand the concepts and operating model behind governed AI.",
    children: [
      {
        eyebrow: "FOUNDATIONS",
        href: "/resources/ai-governance",
        label: "AI Governance",
        description:
          "Why AI governance is moving from policy documentation into operating infrastructure.",
      },
      {
        eyebrow: "OPERATING MODEL",
        href: "/resources/governed-autonomy",
        label: "Governed Autonomy",
        description:
          "How enterprises can combine machine speed with bounded authority.",
      },
      {
        eyebrow: "IDENTITY",
        href: "/resources/actor-passports",
        label: "Actor Passports",
        description:
          "Why autonomous actors need a governance identity before they can be trusted to act.",
      },
      {
        eyebrow: "AUTHORITY",
        href: "/resources/authority",
        label: "Machine Authority",
        description:
          "Why knowing what an AI actor may do matters as much as knowing what it is.",
      },
      {
        eyebrow: "BUILD",
        href: "/documentation",
        label: "Documentation",
        description:
          "Explore the technical model, concepts and implementation surface of AIGO-OS.",
      },
    ],
  },
  {
    label: "Company",
    href: "/company",
    description:
      "The company building governance infrastructure for autonomous enterprise AI.",
    children: [
      {
        eyebrow: "COMPANY",
        href: "/company",
        label: "About AIGO-OS",
        description:
          "Why we believe autonomous enterprise AI requires a new governance operating layer.",
      },
      {
        eyebrow: "DESIGN PARTNERS",
        href: "/design-partners",
        label: "Design Partner Program",
        description:
          "Work with AIGO-OS against real enterprise governance problems and operating environments.",
      },
      {
        eyebrow: "COMMERCIAL",
        href: "/pricing",
        label: "Commercial Model",
        description:
          "Understand how commercial scope follows governed AI rather than human seat count.",
      },
      {
        eyebrow: "CONTACT",
        href: "/contact",
        label: "Contact",
        description:
          "Start a conversation about your AI estate, governance requirements and deployment path.",
      },
    ],
  },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PublicHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="public-header">
      <div className="public-header__inner">
        <Link
          aria-label="AIGO-OS home"
          className="public-header__brand"
          href="/"
        >
          <Image
            alt="AIGO-OS"
            className="public-header__logo"
            height={52}
            priority
            src="/branding/aigo-os-logo-dark.png"
            width={116}
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="public-header__nav"
        >
          {navigation.map((item) => (
            <div
              className="public-header__nav-item"
              key={item.label}
            >
              <Link
                aria-current={
                  isActive(pathname, item.href) ? "page" : undefined
                }
                className={`public-header__nav-link ${
                  isActive(pathname, item.href)
                    ? "public-header__nav-link--active"
                    : ""
                }`}
                href={item.href}
              >
                {item.label}

                {item.children ? (
                  <span
                    aria-hidden="true"
                    className="public-header__chevron"
                  >
                    ↓
                  </span>
                ) : null}
              </Link>

              {item.children ? (
                <div className="public-header__dropdown">
                  <div className="public-header__dropdown-shell">
                    <div className="public-header__dropdown-intro">
                      <span>{item.label}</span>

                      <h2>{item.description}</h2>

                      <Link href={item.href}>
                        Explore {item.label}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>

                    <div className="public-header__dropdown-links">
                      {item.children.map((child) => (
                        <Link
                          className="public-header__dropdown-link"
                          href={child.href}
                          key={child.href}
                        >
                          <span className="public-header__dropdown-eyebrow">
                            {child.eyebrow}
                          </span>

                          <strong>{child.label}</strong>

                          <p>{child.description}</p>

                          <span
                            aria-hidden="true"
                            className="public-header__dropdown-arrow"
                          >
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="public-header__actions">
          <Link
            className="public-header__signin"
            href="/sign-in"
          >
            Sign in
          </Link>

          <Link
            className="public-header__partner"
            href="/design-partners"
          >
            Become a Design Partner
          </Link>
        </div>

        <button
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          className={`public-header__mobile-toggle ${
            mobileOpen ? "public-header__mobile-toggle--open" : ""
          }`}
          onClick={() => setMobileOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>

      <div
        className={`public-mobile-nav ${
          mobileOpen ? "public-mobile-nav--open" : ""
        }`}
      >
        <div className="public-mobile-nav__inner">
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <div
                className="public-mobile-nav__section"
                key={item.label}
              >
                <div className="public-mobile-nav__primary">
                  <Link href={item.href}>{item.label}</Link>

                  {item.children ? (
                    <button
                      aria-expanded={mobileSection === item.label}
                      aria-label={`Show ${item.label} links`}
                      onClick={() =>
                        setMobileSection((current) =>
                          current === item.label ? null : item.label
                        )
                      }
                      type="button"
                    >
                      {mobileSection === item.label ? "−" : "+"}
                    </button>
                  ) : null}
                </div>

                {item.children && mobileSection === item.label ? (
                  <div className="public-mobile-nav__children">
                    {item.children.map((child) => (
                      <Link href={child.href} key={child.href}>
                        <span>{child.eyebrow}</span>
                        <strong>{child.label}</strong>
                        <p>{child.description}</p>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="public-mobile-nav__actions">
            <Link href="/sign-in">
              Sign in
            </Link>

            <Link href="/design-partners">
              Become a Design Partner
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}