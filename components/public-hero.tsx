import Link from "next/link";

import { Page01HeroVisual } from "@/components/page01-hero-visual";
import styles from "@/styles/page01-home.module.css";

export function PublicHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackdrop} aria-hidden="true" />

      <div className={styles.heroShell}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            AI GOVERNANCE OPERATING SYSTEM
          </p>

          <h1 className={styles.heroTitle}>
            <span>
              Know what AI activity means to your business.
            </span>

            <span>
              Know what governance should apply, as it happens.
            </span>
          </h1>

          <p className={styles.heroLead}>
            AIGO-OS connects the systems that operate, observe and
            govern enterprise AI. It brings together AI activity,
            identity, authority, risk, policy and business context
            to determine Business Significance and the governance
            appropriate to it.
          </p>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="/demo">
              Request a Demo
            </Link>

            <Link className={styles.secondaryButton} href="/platform">
              Explore AIGO-OS
            </Link>
          </div>

          <div className={styles.heroCapabilities}>
            <span>Business Significance</span>
            <span>Machine Authority</span>
            <span>Governance Decisioning</span>
            <span>Governance Receipts</span>
          </div>
        </div>

        <Page01HeroVisual />
      </div>
    </section>
  );
}
