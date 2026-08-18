import Link from "next/link";

import { CapabilityCarousel } from "@/components/public/capability-carousel";
import { HomeHeroVisual } from "@/components/public/home-hero-visual";
import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Enterprise AI Intelligence
              </p>

              <h1>
                AI doesn't operate in a vacuum.
                <span className={styles.heroQuestion}>
                  Why manage it like it does?
                </span>
              </h1>

              <p className={styles.heroText}>
                AIGO-OS brings signals from AI agents and AI-enabled
                platforms together with business context already held
                across enterprise systems. It relates that information
                to show how AI activity connects to business operations,
                governance and potential business impact.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/platform"
                  className={styles.primaryButton}
                >
                  Explore the Platform
                </Link>

                <Link
                  href="/talk-to-an-expert"
                  className={styles.secondaryButton}
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>

            <div className={styles.heroIllustration}>
              <HomeHeroVisual />
            </div>
          </div>
        </PublicContainer>
      </section>

      <section className={styles.contextSection}>
        <PublicContainer>
          <div className={styles.contextGrid}>
            <p className={styles.sectionLabel}>
              Why AIGO-OS
            </p>

            <div>
              <h2>
                The signals already exist. The business context already exists.
                The challenge is connecting them.
              </h2>

              <p>
                AIGO-OS does not replace the platforms that create AI activity
                or the enterprise systems that hold business records. It relates
                selected signals with existing enterprise context so management
                can understand governance significance and potential business
                impact.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>

      <section className={styles.capabilitiesSection}>
        <PublicContainer>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.sectionLabel}>
                Platform capabilities
              </p>

              <h2>
                One connected view of AI in the enterprise.
              </h2>
            </div>

            <Link
              href="/platform"
              className={styles.inlineLink}
            >
              Platform Overview
            </Link>
          </div>

          <CapabilityCarousel />
        </PublicContainer>
      </section>

      <section className={styles.productsSection}>
        <PublicContainer>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.sectionLabel}>
                AIGO-OS Products
              </p>

              <h2>
                Intelligence for governance and business impact.
              </h2>
            </div>

            <Link
              href="/products"
              className={styles.inlineLink}
            >
              Products Overview
            </Link>
          </div>

          <div className={styles.productGrid}>
            <Link
              href="/products/aigo-os-govern"
              className={styles.productCard}
            >
              <div className={styles.productTop}>
                <span>
                  AI Governance Intelligence
                </span>
              </div>

              <div className={styles.productContent}>
                <h3>
                  AIGO-OS Govern
                </h3>

                <p>
                  Understand AI accountability, authority and governance
                  priorities in enterprise context.
                </p>
              </div>

              <div className={styles.productStrip}>
                <span>Accountability</span>
                <span>Authority</span>
                <span>Priorities</span>
              </div>
            </Link>

            <Link
              href="/products/aigo-os-impact"
              className={styles.productCard}
            >
              <div className={styles.productTop}>
                <span>
                  AI Business Impact Intelligence
                </span>
              </div>

              <div className={styles.productContent}>
                <h3>
                  AIGO-OS Impact
                </h3>

                <p>
                  Understand how AI incidents, changes and dependencies
                  connect to business impact.
                </p>
              </div>

              <div className={styles.productStrip}>
                <span>Incidents</span>
                <span>Changes</span>
                <span>Dependencies</span>
              </div>
            </Link>
          </div>
        </PublicContainer>
      </section>

      <section className={styles.useCaseSection}>
        <PublicContainer>
          <div className={styles.useCaseGrid}>
            <div>
              <p className={styles.sectionLabelDark}>
                Use cases
              </p>

              <h2>
                Start with the business question that needs an answer.
              </h2>
            </div>

            <div className={styles.useCaseLists}>
              <div>
                <span className={styles.useCaseHeading}>
                  AI Governance
                </span>

                <Link href="/solutions/ai-agent-accountability">
                  AI Agent Accountability
                </Link>

                <Link href="/solutions/ai-agent-access-authority">
                  AI Agent Access & Authority
                </Link>

                <Link href="/solutions/ai-agent-sprawl">
                  AI Agent Sprawl
                </Link>

                <Link href="/solutions/ai-governance-priorities">
                  AI Governance Priorities
                </Link>
              </div>

              <div>
                <span className={styles.useCaseHeading}>
                  AI Business Impact
                </span>

                <Link href="/solutions/ai-incident-business-impact">
                  AI Incident Business Impact
                </Link>

                <Link href="/solutions/ai-change-business-impact">
                  AI Change Business Impact
                </Link>

                <Link href="/solutions/ai-business-dependencies">
                  AI Business Dependencies
                </Link>
              </div>
            </div>
          </div>
        </PublicContainer>
      </section>

      <section className={styles.finalSection}>
        <PublicContainer>
          <div className={styles.finalPanel}>
            <div>
              <p className={styles.finalEyebrow}>
                AIGO-OS
              </p>

              <h2>
                Bring AI into business context.
              </h2>
            </div>

            <div className={styles.finalActions}>
              <Link
                href="/talk-to-an-expert"
                className={styles.finalPrimary}
              >
                Talk to an Expert
              </Link>

              <Link
                href="/request-demo"
                className={styles.finalSecondary}
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </PublicContainer>
      </section>
    </>
  );
}

