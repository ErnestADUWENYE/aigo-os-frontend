import Image from "next/image";
import Link from "next/link";

import { CookieSettingsButton } from "@/components/public/cookie-settings-button";
import { PublicContainer } from "@/components/public/public-container";
import { SiteSupportLinks } from "@/components/public/site-support-links";

import styles from "./public-footer.module.css";


const LINKEDIN_URL =
  "https://www.linkedin.com/company/aigo-os/";


function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      <path d="M5.2 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.4 9h3.6v11.5H3.4V9Zm5.8 0h3.4v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8v6.1h-3.6v-5.4c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.5H9.2V9Z" />
    </svg>
  );
}


export function PublicFooter() {
  return (
    <footer className={styles.footer}>
      <PublicContainer>

        {/* =====================================================
            BRAND + CTA
        ===================================================== */}

        <div className={styles.top}>

          <div className={styles.brand}>

            <Link
              href="/"
              className={styles.logoLink}
              aria-label="AIGO-OS home"
            >
              <Image
                src="/brand/aigo-os-logo.png"
                alt="AIGO-OS"
                width={170}
                height={70}
                className={styles.logo}
              />
            </Link>


            <p className={styles.brandText}>
              Connected intelligence for understanding governance,
              enterprise relationships and business impact in context.
            </p>


            <div
              className={styles.socials}
              aria-label="Follow AIGO-OS"
            >
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Follow AIGO-OS on LinkedIn"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>

          </div>


          <div className={styles.cta}>

            <div className={styles.ctaCopy}>

              <span>
                Explore AIGO-OS
              </span>

              <strong>
                Understand what your enterprise information means.
              </strong>

              <p>
                See how AIGO-OS connects enterprise context to support
                governance intelligence and business-impact intelligence.
              </p>

            </div>


            <div className={styles.actions}>

              <Link
                href="/request-demo"
                className={styles.primaryButton}
              >
                Request a Demo
              </Link>

              <Link
                href="/talk-to-an-expert"
                className={styles.secondaryButton}
              >
                Talk to an Expert
              </Link>

            </div>

          </div>

        </div>


        {/* =====================================================
            CURRENT SITE NAVIGATION
        ===================================================== */}

        <nav
          className={styles.navigation}
          aria-label="Footer navigation"
        >

          {/* ===================================================
              PLATFORM

              Mirrors the current Platform mega menu.
          =================================================== */}

          <div className={styles.column}>

            <p className={styles.columnTitle}>
              Platform
            </p>

            <Link href="/platform">
              Platform Overview
            </Link>


            <span className={styles.groupLabel}>
              Connect
            </span>

            <Link href="/platform/enterprise-connectivity">
              Enterprise Connectivity
            </Link>


            <span className={styles.groupLabel}>
              Understand
            </span>

            <Link href="/platform/enterprise-context">
              Enterprise Context
            </Link>


            <span className={styles.groupLabel}>
              Relate
            </span>

            <Link href="/platform/relationship-dependency-intelligence">
              Relationship &amp; Dependency Intelligence
            </Link>


            <span className={styles.groupLabel}>
              Keep Current
            </span>

            <Link href="/platform/continuous-intelligence">
              Continuous Intelligence
            </Link>


            <span className={styles.groupLabel}>
              Reason
            </span>

            <Link href="/platform/contextual-reasoning">
              Contextual Reasoning
            </Link>


            <span className={styles.groupLabel}>
              Explain
            </span>

            <Link href="/platform/explainability-traceability">
              Explainability &amp; Traceability
            </Link>

          </div>


          {/* ===================================================
              PRODUCTS

              Mirrors the current Products mega menu.
          =================================================== */}

          <div className={styles.column}>

            <p className={styles.columnTitle}>
              Products
            </p>

            <Link href="/products">
              Products Overview
            </Link>


            <div className={styles.productFooterItem}>
              <span className={styles.groupLabel}>
                Governance Intelligence
              </span>

              <Link href="/products/aigo-os-govern">
                AIGO-OS Govern
              </Link>
            </div>


            <div className={styles.productFooterItem}>
              <span className={styles.groupLabel}>
                Business Impact Intelligence
              </span>

              <Link href="/products/aigo-os-impact">
                AIGO-OS Impact
              </Link>
            </div>

          </div>


          {/* ===================================================
              SOLUTIONS

              Mirrors the CURRENT Govern / Impact dropdown,
              not the retired solution names.
          =================================================== */}

          <div className={`${styles.column} ${styles.solutionsColumn}`}>

            <p className={styles.columnTitle}>
              Solutions
            </p>


            <span className={styles.groupLabel}>
              Govern
            </span>

            <Link href="/solutions/unclear-control-applicability">
              Unclear Control Applicability
            </Link>

            <Link href="/solutions/disconnected-policies-controls">
              Disconnected Policies &amp; Controls
            </Link>

            <Link href="/solutions/unclear-control-coverage">
              Unclear Control Coverage
            </Link>

            <Link href="/solutions/unknown-governance-change-impact">
              Unknown Governance Change Impact
            </Link>

            <Link href="/solutions/unclear-ownership-accountability">
              Unclear Ownership &amp; Accountability
            </Link>


            <span className={styles.groupLabel}>
              Impact
            </span>

            <Link href="/solutions/unknown-change-impact">
              Unknown Change Impact
            </Link>

            <Link href="/solutions/unclear-incident-business-impact">
              Unclear Incident Business Impact
            </Link>

            <Link href="/solutions/hidden-dependencies">
              Hidden Dependencies
            </Link>

            <Link href="/solutions/unclear-critical-service-dependencies">
              Unclear Critical Service Dependencies
            </Link>

          </div>


          {/* ===================================================
              RESOURCES
          =================================================== */}

          <div className={styles.column}>

            <p className={styles.columnTitle}>
              Resources
            </p>

            <Link href="/resources">
              Resources
            </Link>

            <Link href="/integrations">
              Integrations
            </Link>

            <Link href="/help">
              Help Center
            </Link>

            <div className={styles.columnSubgroup}>

              <span>
                Explore
              </span>

              <Link href="/request-demo">
                Request a Demo
              </Link>

              <Link href="/talk-to-an-expert">
                Talk to an Expert
              </Link>

            </div>

          </div>


          {/* ===================================================
              COMPANY
          =================================================== */}

          <div className={styles.column}>

            <p className={styles.columnTitle}>
              Company
            </p>

            <Link href="/company/about">
              About AIGO-OS
            </Link>

            <Link href="/company/principles">
              Our Principles
            </Link>

            <Link href="/company/careers">
              Careers
            </Link>

            <Link href="/company/contact">
              Contact
            </Link>


            <div className={styles.columnSubgroup}>

              <span>
                Follow AIGO-OS
              </span>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.inlineSocialLink}
              >
                <LinkedInIcon />

                <span>
                  LinkedIn
                </span>
              </a>

            </div>

          </div>


          {/* ===================================================
              TRUST + LEGAL
          =================================================== */}

          <div className={styles.column}>

            <p className={styles.columnTitle}>
              Trust &amp; Legal
            </p>

            <Link href="/security">
              Security
            </Link>

            <Link href="/privacy">
              Privacy
            </Link>

            <Link href="/terms">
              Terms
            </Link>

            <Link href="/accessibility">
              Accessibility
            </Link>

          </div>

        </nav>


        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className={styles.bottom}>

          <div className={styles.copyright}>

            <strong>
              AIGO-OS
            </strong>

            <p>
              © {new Date().getFullYear()} AIGO-OS.
              All rights reserved.
            </p>

          </div>


          <div className={styles.bottomRight}>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bottomLinkedIn}
              aria-label="AIGO-OS on LinkedIn"
            >
              <LinkedInIcon />
            </a>


            <div className={styles.bottomLinks}>

              <Link href="/privacy">
                Privacy
              </Link>

              <Link href="/cookies">
                Cookies
              </Link>

              <Link href="/terms">
                Terms
              </Link>

              <Link href="/security">
                Security
              </Link>

              <Link href="/responsible-disclosure">
                Responsible Disclosure
              </Link>

              <Link href="/accessibility">
                Accessibility
              </Link>

              <CookieSettingsButton />

            </div>

          </div>

        </div>

      </PublicContainer>

      <SiteSupportLinks />
    </footer>
  );
}



