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
              className={styles.mobileToggle}
              onClick={() =>
                setMobileOpen(
                  (current) => !current
                )
              }
              aria-expanded={mobileOpen}
              aria-label="Open navigation"
            >
              <span />
              <span />
              <span />
            </button>
          </div>

        </div>
      </PublicContainer>


      {/* ====================================================
          STANDARD DROPDOWN LAYER
          Platform / Products / Solutions / Company
      ==================================================== */}

      {openMenu && (
        <div
          className={styles.dropdownLayer}
          onMouseEnter={() =>
            setOpenMenu(openMenu)
          }
        >
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


      {/* ====================================================
          MOBILE
      ==================================================== */}

      {mobileOpen && (
        <div className={styles.mobilePanel}>
          <PublicContainer>

            <nav
              className={styles.mobileContent}
              aria-label="Mobile navigation"
            >
              <Link
                href="/platform"
                onClick={closeNavigation}
              >
                Platform
              </Link>

              <Link
                href="/products"
                onClick={closeNavigation}
              >
                Products
              </Link>

              <Link
                href="/solutions/ai-agent-accountability"
                onClick={closeNavigation}
              >
                Solutions
              </Link>

              <Link
                href="/resources"
                onClick={closeNavigation}
              >
                Resources
              </Link>

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

              <a href={signInUrl}>
                Sign In
              </a>

              <Link
                href="/talk-to-an-expert"
                className={styles.mobileCta}
                onClick={closeNavigation}
              >
                Talk to an Expert
              </Link>
            </nav>

          </PublicContainer>
        </div>
      )}

    </header>
  );
}



