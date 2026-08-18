import Image from "next/image";
import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";
import { SiteSupportLinks } from "@/components/public/site-support-links";

import styles from "./public-footer.module.css";


export function PublicFooter() {
  return (
    <footer className={styles.footer}>
      <PublicContainer>

        {/* =====================================================
            BRAND + PRIMARY CONVERSION
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
              Enterprise intelligence for understanding AI governance
              and business impact in context.
            </p>
          </div>


          <div className={styles.cta}>
            <div className={styles.ctaCopy}>
              <span>
                Explore AIGO-OS
              </span>

              <strong>
                Bring AI activity into clearer business context.
              </strong>

              <p>
                Explore AIGO-OS through a product demonstration or
                start a commercial conversation about enterprise adoption.
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
                href="/get-started"
                className={styles.secondaryButton}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>


        {/* =====================================================
            FOOTER NAVIGATION
        ===================================================== */}

        <nav
          className={styles.navigation}
          aria-label="Footer navigation"
        >

          {/* PLATFORM */}

          <div className={styles.column}>
            <p className={styles.columnTitle}>
              Platform
            </p>

            <Link href="/platform">
              Platform Overview
            </Link>

            <Link href="/platform/enterprise-context">
              Enterprise Context
            </Link>

            <Link href="/platform/ai-business-mapping">
              AI Business Mapping
            </Link>

            <Link href="/platform/activity-event-correlation">
              Activity & Event Correlation
            </Link>

            <Link href="/platform/contextual-intelligence">
              Contextual Intelligence
            </Link>

            <Link href="/platform/management-intelligence">
              Management Intelligence
            </Link>
          </div>


          {/* PRODUCTS */}

          <div className={styles.column}>
            <p className={styles.columnTitle}>
              Products
            </p>

            <Link href="/products">
              Products Overview
            </Link>

            <Link href="/products/aigo-os-govern">
              AIGO-OS Govern
            </Link>

            <Link href="/products/aigo-os-impact">
              AIGO-OS Impact
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


          {/* SOLUTIONS */}

          <div className={styles.column}>
            <p className={styles.columnTitle}>
              Solutions
            </p>

            <span className={styles.groupLabel}>
              Govern
            </span>

            <Link href="/solutions/ai-agent-accountability">
              AI Agent Accountability
            </Link>

            <Link href="/solutions/ai-agent-access-authority">
              AI Agent Access Authority
            </Link>

            <Link href="/solutions/ai-agent-sprawl">
              AI Agent Sprawl
            </Link>

            <Link href="/solutions/ai-governance-priorities">
              AI Governance Priorities
            </Link>

            <span className={styles.groupLabel}>
              Impact
            </span>

            <Link href="/solutions/ai-business-dependencies">
              AI Business Dependencies
            </Link>

            <Link href="/solutions/ai-change-business-impact">
              AI Change Business Impact
            </Link>

            <Link href="/solutions/ai-incident-business-impact">
              AI Incident Business Impact
            </Link>
          </div>


          {/* COMPANY */}

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
                Follow
              </span>

              <Link href="/company/linkedin">
                LinkedIn
              </Link>

              <Link href="/company/youtube">
                YouTube
              </Link>
            </div>
          </div>


          {/* RESOURCES */}

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
                Talk to AIGO-OS
              </span>

              <Link href="/talk-to-an-expert">
                Talk to an Expert
              </Link>

              <Link href="/request-demo">
                Request a Demo
              </Link>

              <Link href="/get-started">
                Sales & Commercial
              </Link>
            </div>
          </div>


          {/* TRUST + LEGAL */}

          <div className={styles.column}>
            <p className={styles.columnTitle}>
              Trust & Legal
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
            BOTTOM
        ===================================================== */}

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <strong>
              AIGO-OS
            </strong>

            <p>
              © {new Date().getFullYear()} AIGO-OS. All rights reserved.
            </p>
          </div>

          <div className={styles.bottomLinks}>
            <Link href="/privacy">
              Privacy
            </Link>

            <Link href="/terms">
              Terms
            </Link>

            <Link href="/security">
              Security
            </Link>

            <Link href="/accessibility">
              Accessibility
            </Link>
          </div>
        </div>

      </PublicContainer>

      <SiteSupportLinks />
    </footer>
  );
}
