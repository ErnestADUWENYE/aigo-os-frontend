"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
    href: "/platform",
    description:
      "The operating layer for governing consequential AI activity across enterprise systems.",
    children: [
      {
        eyebrow: "OVERVIEW",
        href: "/platform",
        label: "Platform Overview",
        description:
          "See the AIGO-OS governance operating system as one connected platform.",
      },
      {
        eyebrow: "AI ACTOR CONTEXT",
        href: "/platform/actor-passports",
        label: "AI Actor Passports",
        description:
          "Connect technical AI identity to persistent enterprise governance context.",
      },
      {
        eyebrow: "AUTHORITY",
        href: "/platform/machine-authority",
        label: "Machine Authority",
        description:
          "Define and evaluate what autonomy has been delegated to an AI actor.",
      },
      {
        eyebrow: "BUSINESS CONTEXT",
        href: "/platform/business-significance",
        label: "Business Significance",
        description:
          "Determine what AI activity means in its current enterprise context.",
      },
      {
        eyebrow: "GOVERNANCE",
        href: "/platform/governance-decisioning",
        label: "Governance Decisioning",
        description:
          "Determine what governance should apply to AI activity as it happens.",
      },
      {
        eyebrow: "HUMAN AUTHORITY",
        href: "/platform/human-authority",
        label: "Human Authority & Intervention",
        description:
          "Bring accountable human judgment into consequential AI decisions when required.",
      },
      {
        eyebrow: "EVIDENCE",
        href: "/platform/governance-receipts",
        label: "Governance Receipts",
        description:
          "Preserve evidence of what was understood, decided and done.",
      },
    ],
  },
    {
    label: "Solutions",
    href: "/solutions",
    description:
      "Use cases for establishing accountable AI identity, evaluating authority and agency, applying human oversight, prioritising governance and preserving evidence.",
    children: [
      {
        eyebrow: "AI IDENTITY & ACCOUNTABILITY",
        href: "/solutions/accountable-ai-identity",
        label: "Establish Accountable AI Identity",
        description:
          "Resolve fragmented AI identities and technical representations into accountable organisational context.",
      },
      {
        eyebrow: "EXCESSIVE AGENCY",
        href: "/solutions/excessive-agency",
        label: "Assess Excessive Agency",
        description:
          "Assess where AI authority, functionality or autonomy extends beyond its intended purpose or operating conditions.",
      },
      {
        eyebrow: "AUTHORITY & PRIVILEGE",
        href: "/solutions/ai-authority-privilege",
        label: "Assess AI Authority & Privilege",
        description:
          "Understand the permissions, access and delegated authority available to an AI Actor in enterprise context.",
      },
      {
        eyebrow: "HUMAN OVERSIGHT",
        href: "/solutions/human-oversight",
        label: "Establish Human Oversight",
        description:
          "Bring accountable human judgment into AI activity when governance, consequence or authority requires it.",
      },
      {
        eyebrow: "GOVERNANCE PRIORITISATION",
        href: "/solutions/prioritise-ai-governance",
        label: "Prioritise AI Governance",
        description:
          "Focus governance attention where AI authority and activity carry the greatest business significance.",
      },
      {
        eyebrow: "EVIDENCE & TRACEABILITY",
        href: "/solutions/ai-governance-evidence",
        label: "Build AI Governance Evidence",
        description:
          "Preserve the context, authority, decisions and human judgment needed for traceability, assurance and audit.",
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
      "Security, architecture and assurance for enterprise AI governance infrastructure.",
    children: [
      {
        eyebrow: "TRUST CENTER",
        href: "/trust",
        label: "Trust Center",
        description:
          "Understand the AIGO-OS approach to trust, architecture and enterprise assurance.",
      },
      {
        eyebrow: "SECURITY",
        href: "/security",
        label: "Security",
        description:
          "Review the security principles behind the AIGO-OS governance operating layer.",
      },
      {
        eyebrow: "DISCLOSURE",
        href: "/responsible-disclosure",
        label: "Responsible Disclosure",
        description:
          "Report potential security issues through the appropriate AIGO-OS channel.",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    description:
      "Technical and operational foundations for governed autonomous AI.",
    children: [
      {
        eyebrow: "FOUNDATIONS",
        href: "/resources/ai-governance",
        label: "AI Governance",
        description:
          "From governance documentation to operational control.",
      },
      {
        eyebrow: "OPERATING MODEL",
        href: "/resources/governed-autonomy",
        label: "Governed Autonomy",
        description:
          "Combine useful machine autonomy with explicit authority and accountability.",
      },
      {
        eyebrow: "ACTOR CONTEXT",
        href: "/resources/actor-passports",
        label: "Actor Passports",
        description:
          "Understand persistent governance context for autonomous actors.",
      },
      {
        eyebrow: "AUTHORITY",
        href: "/resources/authority",
        label: "Machine Authority",
        description:
          "Understand why permission alone cannot determine whether an action should proceed.",
      },
      {
        eyebrow: "TECHNICAL",
        href: "/documentation",
        label: "Documentation",
        description:
          "Explore AIGO-OS concepts, architecture and implementation surfaces.",
      },
    ],
  },
  {
    label: "Company",
    href: "/company",
    description:
      "The company building operational control infrastructure for autonomous enterprise AI.",
    children: [
      {
        eyebrow: "APPROACH",
        href: "/our-approach",
        label: "Our Approach",
        description:
          "Why governance must control consequential AI action rather than only document policy.",
      },
      {
        eyebrow: "COMPANY",
        href: "/company",
        label: "About AIGO-OS",
        description:
          "The company behind the governance operating layer for autonomous AI.",
      },
      {
        eyebrow: "CAREERS",
        href: "/careers",
        label: "Careers",
        description:
          "Opportunities to build enterprise control infrastructure for autonomous AI.",
      },
      {
        eyebrow: "NEWSROOM",
        href: "/newsroom",
        label: "Newsroom",
        description:
          "Product releases, company announcements and official communications.",
      },

      {
        eyebrow: "CONTACT",
        href: "/contact",
        label: "Contact",
        description:
          "Start a conversation about your AI environment and governance requirements.",
      },
    ],
  },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PublicHeader() {
  const pathname = usePathname();

  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const headerRef = useRef<HTMLElement>(null);

  function closeNavigation() {
    setDesktopMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  }
useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (
        desktopMenu &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setDesktopMenu(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeNavigation();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [desktopMenu]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="aigo-nav" ref={headerRef}>
      <div className="aigo-nav__bar">
        <Link
          aria-label="AIGO-OS home"
          className="aigo-nav__brand"
          href="/"
          onClick={closeNavigation}
        >
          <Image
            alt="AIGO-OS"
            className="aigo-nav__logo"
            height={58}
            priority
            src="/branding/aigo-os-logo-dark.png"
            width={130}
          />
        </Link>

        <nav className="aigo-nav__desktop" aria-label="Primary navigation">
          {navigation.map((item) => {
            const expanded = desktopMenu === item.label;

            return (
              <div className="aigo-nav__item" key={item.label} onMouseEnter={() => item.children ? setDesktopMenu(item.label) : setDesktopMenu(null)} onMouseLeave={() => setDesktopMenu(null)}>
                {item.children ? (
                  <button
                    aria-expanded={expanded}
                    className={`aigo-nav__trigger ${
                      isActive(pathname, item.href)
                        ? "aigo-nav__trigger--active"
                        : ""
                    }`}
                    onClick={() =>
                      setDesktopMenu((current) =>
                        current === item.label ? null : item.label
                      )
                    }
                    type="button"
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={
                        expanded
                          ? "aigo-nav__chevron aigo-nav__chevron--open"
                          : "aigo-nav__chevron"
                      }
                    />
                  </button>
                ) : (
                  <Link
                    className={`aigo-nav__trigger ${
                      isActive(pathname, item.href)
                        ? "aigo-nav__trigger--active"
                        : ""
                    }`}
                    href={item.href}
                    onClick={closeNavigation}
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && expanded ? (
                  item.label === "Platform" ? (
                    <div className="aigo-nav__mega aigo-nav__mega--platform">
                      <div className="aigo-platform-menu">

                        <Link
                          className="aigo-platform-menu__overview"
                          href={item.href}
                          onClick={closeNavigation}
                        >
                          <span>Platform overview</span>
                          <i
                            aria-hidden="true"
                            className="aigo-ui-arrow"
                          />
                        </Link>

                        <div className="aigo-platform-menu__heading">
                          <span>PLATFORM CAPABILITIES</span>
                          <p>
                            Six connected capabilities for understanding and governing enterprise AI activity.
                          </p>
                        </div>

                        <div className="aigo-platform-menu__grid">
                          {item.children
                            .filter((child) => child.href !== item.href)
                            .map((child) => (
                            <Link
                              className="aigo-platform-menu__capability"
                              href={child.href}
                              key={child.href}
                              onClick={closeNavigation}
                            >
                              <span>{child.eyebrow}</span>

                              <strong>{child.label}</strong>

                              <p>{child.description}</p>

                              <i
                                aria-hidden="true"
                                className="aigo-ui-arrow"
                              />
                            </Link>
                          ))}
                        </div>

                      </div>
                    </div>
                  ) : item.label === "Solutions" ? (
                    <div className="aigo-nav__mega aigo-nav__mega--solutions">
                      <div className="aigo-solutions-menu">

                        <div className="aigo-solutions-menu__top">
                          <div className="aigo-solutions-menu__heading">
                            <span>USE CASES</span>
                          </div>
                        </div>

                        <div className="aigo-solutions-menu__grid">
                          {item.children.map((child, index) => (
                            <Link
                              className="aigo-solutions-menu__item"
                              href={child.href}
                              key={child.href}
                              onClick={closeNavigation}
                            >
                              <div className="aigo-solutions-menu__number">
                                {String(index + 1).padStart(2, "0")}
                              </div>

                              <div className="aigo-solutions-menu__copy">
                                <span>{child.eyebrow}</span>
                                <strong>{child.label}</strong>
                                <p>{child.description}</p>
                              </div>

                              <i
                                aria-hidden="true"
                                className="aigo-ui-arrow"
                              />
                            </Link>
                          ))}
                        </div>

                      </div>
                    </div>
                  ) : (
                    <div className="aigo-nav__mega">
                      <div className="aigo-nav__mega-inner">
                        <div className="aigo-nav__mega-intro">
                          <span>{item.label}</span>

                          <h2>{item.description}</h2>

                          <Link href={item.href} onClick={closeNavigation}>
                            Explore {item.label}
                            <span
                              aria-hidden="true"
                              className="aigo-ui-arrow"
                            />
                          </Link>
                        </div>

                        <div className="aigo-nav__mega-links">
                          {item.children
                            .filter((child) => child.href !== item.href)
                            .map((child) => (
                            <Link
                              className="aigo-nav__mega-link"
                              href={child.href}
                              key={child.href}
                              onClick={closeNavigation}
                            >
                              <span>{child.eyebrow}</span>
                              <strong>{child.label}</strong>
                              <p>{child.description}</p>
                              <i
                                aria-hidden="true"
                                className="aigo-ui-arrow"
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="aigo-nav__desktop-action">
          <Link href="/sign-in" onClick={closeNavigation}>
            Sign in
          </Link>

          <Link
            className="aigo-nav__get-started"
            href="/get-started"
            onClick={closeNavigation}
          >
            Get Started
          </Link>
        </div>

        <button
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          className={`aigo-nav__toggle ${
            mobileOpen ? "aigo-nav__toggle--open" : ""
          }`}
          onClick={() => {
            setMobileOpen((current) => !current);
            setMobileSection(null);
          }}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>

      {mobileOpen ? (
        <div className="aigo-mobile-nav">
          <div className="aigo-mobile-nav__scroll">
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => {
                const expanded = mobileSection === item.label;

                return (
                  <div className="aigo-mobile-nav__section" key={item.label}>
                    <div className="aigo-mobile-nav__row">
                      <Link href={item.href} onClick={closeNavigation}>
                        {item.label}
                      </Link>

                      {item.children ? (
                        <button
                          aria-expanded={expanded}
                          aria-label={`${expanded ? "Hide" : "Show"} ${
                            item.label
                          } links`}
                          onClick={() =>
                            setMobileSection((current) =>
                              current === item.label ? null : item.label
                            )
                          }
                          type="button"
                        >
                          <span
  aria-hidden="true"
  className={
    expanded
      ? "aigo-mobile-nav__chevron aigo-mobile-nav__chevron--open"
      : "aigo-mobile-nav__chevron"
  }
/>
                        </button>
                      ) : null}
                    </div>

                    {item.children && expanded ? (
                      <div className="aigo-mobile-nav__children">
                        {item.children.map((child) => (
                          <Link
                            href={child.href}
                            key={child.href}
                            onClick={closeNavigation}
                          >
                            <span>{child.eyebrow}</span>
                            <strong>{child.label}</strong>
                            <p>{child.description}</p>
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>

            <div className="aigo-mobile-nav__actions">
              <div className="aigo-mobile-nav__actions">
                <Link
                  className="aigo-mobile-nav__signin"
                  href="/sign-in"
                  onClick={closeNavigation}
                >
                  Sign in
                </Link>

                <Link
                  className="aigo-mobile-nav__get-started"
                  href="/get-started"
                  onClick={closeNavigation}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}












