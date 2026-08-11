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
    href: "/product",
    description:
      "The operating layer for governing consequential AI action across enterprise systems.",
    children: [
      {
        eyebrow: "OVERVIEW",
        href: "/product",
        label: "AIGO-OS Platform",
        description:
          "See identity, authority, risk, decisions and evidence operate as one governance system.",
      },
      {
        eyebrow: "ACTOR CONTEXT",
        href: "/product/actor-passports",
        label: "Actor Passports",
        description:
          "Persistent governance identity and operating context for autonomous actors.",
      },
      {
        eyebrow: "AUTHORITY",
        href: "/product/authority",
        label: "Machine Authority",
        description:
          "Define and evaluate what an autonomous actor is authorized to do.",
      },
      {
        eyebrow: "DECISION INTELLIGENCE",
        href: "/product/risk-intelligence",
        label: "Risk Intelligence",
        description:
          "Evaluate actions using actor, authority, purpose, risk and business context.",
      },
      {
        eyebrow: "EVIDENCE",
        href: "/product/governance-receipts",
        label: "Governance Receipts",
        description:
          "Preserve reconstructable evidence behind consequential autonomous decisions.",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    description:
      "Control the enterprise risks that appear when AI moves from assistance into action.",
    children: [
      {
        eyebrow: "EXCESSIVE AGENCY",
        href: "/solutions/excessive-agency",
        label: "Control Excessive Agency",
        description:
          "Prevent AI actors from acting beyond delegated authority, purpose or conditions.",
      },
      {
        eyebrow: "TOOL USE",
        href: "/solutions/agent-tool-misuse",
        label: "Prevent Agent Tool Misuse",
        description:
          "Control when and how AI actors may use enterprise tools, APIs and systems.",
      },
      {
        eyebrow: "HUMAN OVERSIGHT",
        href: "/solutions/human-oversight",
        label: "Govern Consequential Actions",
        description:
          "Determine what can proceed autonomously and what requires human intervention.",
      },
      {
        eyebrow: "AUTHORITY",
        href: "/solutions/authority-abuse",
        label: "Control Authority Abuse",
        description:
          "Prevent recognized actors from exercising authority outside its intended scope.",
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
        eyebrow: "COMMERCIAL",
        href: "/pricing",
        label: "Commercial Model",
        description:
          "How AIGO-OS is structured for enterprise deployment.",
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
                    <span aria-hidden="true">{expanded ? "↑" : "↓"}</span>
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
                  <div className="aigo-nav__mega">
                    <div className="aigo-nav__mega-inner">
                      <div className="aigo-nav__mega-intro">
                        <span>{item.label}</span>

                        <h2>{item.description}</h2>

                        <Link href={item.href} onClick={closeNavigation}>
                          Explore {item.label}
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>

                      <div className="aigo-nav__mega-links">
                        {item.children.map((child) => (
                          <Link
                            className="aigo-nav__mega-link"
                            href={child.href}
                            key={child.href}
                            onClick={closeNavigation}
                          >
                            <span>{child.eyebrow}</span>
                            <strong>{child.label}</strong>
                            <p>{child.description}</p>
                            <i aria-hidden="true">→</i>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="aigo-nav__desktop-action">
          <Link href="/sign-in" onClick={closeNavigation}>
            Sign in
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
                          {expanded ? "−" : "+"}
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
              <Link
                className="aigo-mobile-nav__demo"
                href="/sign-in"
                onClick={closeNavigation}
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}


