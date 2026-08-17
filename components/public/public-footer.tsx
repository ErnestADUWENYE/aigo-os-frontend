import { SiteSupportLinks } from "@/components/public/site-support-links";
import Image from "next/image";
import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./public-footer.module.css";

export function PublicFooter() {
  return (
    <footer className={styles.footer}>
      <PublicContainer>

        <div className={styles.main}>

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

            <div className={styles.actions}>
              <Link
                href="/get-started"
                className={styles.primaryButton}
              >
                Get Started
              </Link>

              <Link
                href="/get-started"
                className={styles.secondaryButton}
              >
                Book a Demo
              </Link>
            </div>
          </div>


          <nav
            className={styles.links}
            aria-label="Footer navigation"
          >

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

              <Link href="/platform/contextual-intelligence">
                Contextual Intelligence
              </Link>
            </div>


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
            </div>


            <div className={styles.column}>
              <p className={styles.columnTitle}>
                Company
              </p>

              <Link href="/company">
                Company
              </Link>

              <Link href="/resources">
                Resources
              </Link>

              <Link href="/integrations">
                Integrations
              </Link>

              <Link href="/get-started">
                Contact
              </Link>
            </div>


            <div className={styles.column}>
              <p className={styles.columnTitle}>
                Trust & Legal
              </p>

              <Link href="/security">
                Security
              </Link>

              <Link href="/accessibility">
                Accessibility
              </Link>

              <Link href="/privacy">
                Privacy
              </Link>

              <Link href="/terms">
                Terms
              </Link>
            </div>

          </nav>

        </div>


        <div className={styles.bottom}>

          <p>
            © {new Date().getFullYear()} AIGO-OS. All rights reserved.
          </p>

          <div className={styles.bottomLinks}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/security">Security</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>

        </div>

      </PublicContainer>
          <SiteSupportLinks />
    </footer>
  );
}

