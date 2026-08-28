"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { CompanyMenu } from "@/components/company/company-menu";
import { PlatformMenu } from "@/components/navigation/platform-menu";
import { ProductsMenu } from "@/components/navigation/products-menu";
import { SolutionsMenu } from "@/components/navigation/solutions-menu";
import { PublicContainer } from "@/components/public/public-container";

import styles from "./public-header.module.css";


type OpenMenu =
  | "platform"
  | "products"
  | "solutions"
  | "company"
  | null;


export function PublicHeader() {
  const [openMenu, setOpenMenu] =
    useState<OpenMenu>(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const signInUrl =
    process.env.NEXT_PUBLIC_PLATFORM_SIGN_IN_URL ||
    "/sign-in";


  function closeNavigation() {
    setOpenMenu(null);
    setMobileOpen(false);
  }


  function toggleMenu(
    menu: Exclude<OpenMenu, null>
  ) {
    setOpenMenu((current) =>
      current === menu ? null : menu
    );
  }


  function toggleMobileNavigation() {
    setOpenMenu(null);
    setMobileOpen((current) => !current);
  }


  return (
    <header
      className={styles.header}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <PublicContainer>
        <div className={styles.bar}>
          <Link
            href="/"
            className={styles.logo}
            onClick={closeNavigation}
            onMouseEnter={() => setOpenMenu(null)}
            aria-label="AIGO-OS home"
          >
            <Image
              src="/brand/aigo-os-logo.png"
              alt="AIGO-OS"
              width={108}
              height={73}
              priority
              className={styles.logoImage}
            />
          </Link>


          <nav
            className={styles.desktopNav}
            aria-label="Primary navigation"
          >
            <button
              type="button"
              className={`${styles.navButton} ${
                openMenu === "platform"
                  ? styles.active
                  : ""
              }`}
              onMouseEnter={() =>
                setOpenMenu("platform")
              }
              onFocus={() =>
                setOpenMenu("platform")
              }
              onClick={() =>
                toggleMenu("platform")
              }
              aria-expanded={
                openMenu === "platform"
              }
              aria-haspopup="true"
            >
              Platform

              <span
                className={styles.chevron}
                aria-hidden="true"
              />
            </button>


            <button
              type="button"
              className={`${styles.navButton} ${
                openMenu === "products"
                  ? styles.active
                  : ""
              }`}
              onMouseEnter={() =>
                setOpenMenu("products")
              }
              onFocus={() =>
                setOpenMenu("products")
              }
              onClick={() =>
                toggleMenu("products")
              }
              aria-expanded={
                openMenu === "products"
              }
              aria-haspopup="true"
            >
              Products

              <span
                className={styles.chevron}
                aria-hidden="true"
              />
            </button>


            <button
              type="button"
              className={`${styles.navButton} ${
                openMenu === "solutions"
                  ? styles.active
                  : ""
              }`}
              onMouseEnter={() =>
                setOpenMenu("solutions")
              }
              onFocus={() =>
                setOpenMenu("solutions")
              }
              onClick={() =>
                toggleMenu("solutions")
              }
              aria-expanded={
                openMenu === "solutions"
              }
              aria-haspopup="true"
            >
              Solutions

              <span
                className={styles.chevron}
                aria-hidden="true"
              />
            </button>


            <Link
              href="/resources"
              onMouseEnter={() =>
                setOpenMenu(null)
              }
              onClick={closeNavigation}
            >
              Resources
            </Link>


            <button
              type="button"
              className={`${styles.navButton} ${
                openMenu === "company"
                  ? styles.active
                  : ""
              }`}
              onMouseEnter={() =>
                setOpenMenu("company")
              }
              onFocus={() =>
                setOpenMenu("company")
              }
              onClick={() =>
                toggleMenu("company")
              }
              aria-expanded={
                openMenu === "company"
              }
              aria-haspopup="true"
            >
              Company

              <span
                className={styles.chevron}
                aria-hidden="true"
              />
            </button>
          </nav>


          <div
            className={styles.actions}
            onMouseEnter={() =>
              setOpenMenu(null)
            }
          >
            <a
              href={signInUrl}
              className={styles.signIn}
            >
              Sign In
            </a>

            <Link
              href="/talk-to-an-expert"
              className={styles.getStarted}
              onClick={closeNavigation}
            >
              Talk to an Expert
            </Link>

            <button
              type="button"
              className={`${styles.mobileToggle} ${
                mobileOpen
                  ? styles.mobileToggleOpen
                  : ""
              }`}
              onClick={toggleMobileNavigation}
              aria-expanded={mobileOpen}
              aria-controls="aigo-mobile-navigation"
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </PublicContainer>


      {/* DESKTOP DROPDOWNS */}

      {openMenu && (
        <div className={styles.dropdownLayer}>
          <PublicContainer>
            {openMenu === "company" ? (
              <div className={styles.companyMenuPosition}>
                <CompanyMenu
                  onNavigate={closeNavigation}
                />
              </div>
            ) : (
              <div className={styles.dropdownSurface}>
                {openMenu === "platform" && (
                  <PlatformMenu
                    onNavigate={closeNavigation}
                  />
                )}

                {openMenu === "products" && (
                  <ProductsMenu
                    onNavigate={closeNavigation}
                  />
                )}

                {openMenu === "solutions" && (
                  <SolutionsMenu
                    onNavigate={closeNavigation}
                  />
                )}
              </div>
            )}
          </PublicContainer>
        </div>
      )}


      {/* MOBILE NAVIGATION */}

      {mobileOpen && (
        <div
          id="aigo-mobile-navigation"
          className={styles.mobilePanel}
        >
          <div className={styles.mobileInner}>
            <nav
              className={styles.mobileContent}
              aria-label="Mobile navigation"
            >

              <details className={styles.mobileDetails}>
                <summary>
                  <span>Platform</span>
                  <span
                    className={styles.mobileSummaryChevron}
                    aria-hidden="true"
                  />
                </summary>

                <div className={styles.mobileSubmenu}>
                  <Link
                    href="/platform"
                    onClick={closeNavigation}
                  >
                    Platform Overview
                  </Link>

                  <Link
                    href="/platform/enterprise-context"
                    onClick={closeNavigation}
                  >
                    Enterprise Context
                  </Link>

                  <Link
                    href="/platform/relationship-dependency-intelligence"
                    onClick={closeNavigation}
                  >
                    Relationship & Dependency Intelligence
                  </Link>

                  <Link
                    href="/platform/continuous-intelligence"
                    onClick={closeNavigation}
                  >
                    Continuous Intelligence
                  </Link>

                  <Link
                    href="/platform/contextual-reasoning"
                    onClick={closeNavigation}
                  >
                    Contextual Reasoning
                  </Link>

                  <Link
                    href="/platform/enterprise-connectivity"
                    onClick={closeNavigation}
                  >
                    Enterprise Connectivity
                  </Link>

                  <Link
                    href="/platform/explainability-traceability"
                    onClick={closeNavigation}
                  >
                    Explainability & Traceability
                  </Link>
                </div>
              </details>


              <details className={styles.mobileDetails}>
                <summary>
                  <span>Products</span>

                  <span
                    className={styles.mobileSummaryChevron}
                    aria-hidden="true"
                  />
                </summary>

                <div className={styles.mobileSubmenu}>
                  <Link
                    href="/products"
                    onClick={closeNavigation}
                  >
                    Products Overview
                  </Link>

                  <Link
                    href="/products/aigo-os-govern"
                    onClick={closeNavigation}
                  >
                    AIGO-OS Govern
                  </Link>

                  <Link
                    href="/products/aigo-os-impact"
                    onClick={closeNavigation}
                  >
                    AIGO-OS Impact
                  </Link>
                </div>
              </details>


              <details className={styles.mobileDetails}>
                <summary>
                  <span>Solutions</span>

                  <span
                    className={styles.mobileSummaryChevron}
                    aria-hidden="true"
                  />
                </summary>

                <div className={styles.mobileSubmenu}>
                  <span className={styles.mobileSubLabel}>
                    Govern
                  </span>

                  <Link
                    href="/solutions/disconnected-policies-controls"
                    onClick={closeNavigation}
                  >
                    Disconnected Policies & Controls
                  </Link>

                  <Link
                    href="/solutions/unclear-control-applicability"
                    onClick={closeNavigation}
                  >
                    Unclear Control Applicability
                  </Link>

                  <Link
                    href="/solutions/unclear-control-coverage"
                    onClick={closeNavigation}
                  >
                    Unclear Control Coverage
                  </Link>

                  <Link
                    href="/solutions/unclear-ownership-accountability"
                    onClick={closeNavigation}
                  >
                    Unclear Ownership & Accountability
                  </Link>

                  <Link
                    href="/solutions/unknown-governance-change-impact"
                    onClick={closeNavigation}
                  >
                    Unknown Governance Change Impact
                  </Link>

                  <span className={styles.mobileSubLabel}>
                    Impact
                  </span>

                  <Link
                    href="/solutions/hidden-dependencies"
                    onClick={closeNavigation}
                  >
                    Hidden Dependencies
                  </Link>

                  <Link
                    href="/solutions/unclear-critical-service-dependencies"
                    onClick={closeNavigation}
                  >
                    Unclear Critical Service Dependencies
                  </Link>

                  <Link
                    href="/solutions/unknown-change-impact"
                    onClick={closeNavigation}
                  >
                    Unknown Change Impact
                  </Link>

                  <Link
                    href="/solutions/unclear-incident-business-impact"
                    onClick={closeNavigation}
                  >
                    Unclear Incident Business Impact
                  </Link>
                </div>
              </details>


              <Link
                href="/resources"
                className={styles.mobileDirectLink}
                onClick={closeNavigation}
              >
                Resources
              </Link>


              <details className={styles.mobileDetails}>
                <summary>
                  <span>Company</span>

                  <span
                    className={styles.mobileSummaryChevron}
                    aria-hidden="true"
                  />
                </summary>

                <div className={styles.mobileSubmenu}>
                  <Link
                    href="/company/about"
                    onClick={closeNavigation}
                  >
                    About AIGO-OS
                  </Link>

                  <Link
                    href="/company/principles"
                    onClick={closeNavigation}
                  >
                    Our Principles
                  </Link>

                  <Link
                    href="/company/careers"
                    onClick={closeNavigation}
                  >
                    Careers
                  </Link>

                  <Link
                    href="/company/contact"
                    onClick={closeNavigation}
                  >
                    Contact
                  </Link>

                  <Link
                    href="/company/linkedin"
                    onClick={closeNavigation}
                  >
                    LinkedIn
                  </Link>

                  <Link
                    href="/company/youtube"
                    onClick={closeNavigation}
                  >
                    YouTube
                  </Link>
                </div>
              </details>


              <div className={styles.mobileBottom}>
                <a
                  href={signInUrl}
                  className={styles.mobileSignIn}
                >
                  Sign In
                </a>

                <Link
                  href="/request-demo"
                  className={styles.mobileSecondaryCta}
                  onClick={closeNavigation}
                >
                  Request a Demo
                </Link>

                <Link
                  href="/get-started"
                  className={styles.mobileCta}
                  onClick={closeNavigation}
                >
                  <span>
                    Get Started
                  </span>

                  <span
                    className={styles.ctaArrow}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>

            </nav>
          </div>
        </div>
      )}
    </header>
  );
}



