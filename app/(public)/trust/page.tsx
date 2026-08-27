import type { Metadata } from "next";

import Link from "next/link";

import {
  Accessibility,
  Cookie,
  FileCheck2,
  LockKeyhole,  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


export const metadata: Metadata = {
  title: "Trust Center",

  description:
    "Explore the AIGO-OS Trust Center for privacy, cookies, security, responsible disclosure, accessibility and website terms.",

  alternates: {
    canonical: "/trust",
  },

  robots: {
    index: true,
    follow: true,
  },
};


const trustAreas = [
  {
    icon: UserRoundCheck,
    eyebrow: "Privacy",
    title: "Personal information and data handling",
    text:
      "Understand what information AIGO-OS collects through the website, why it is used, how it may be shared and the rights available to individuals.",
    href: "/privacy",
    action: "Read Privacy Policy",
  },

  {
    icon: Cookie,
    eyebrow: "Cookies",
    title: "Privacy choices and browser technologies",
    text:
      "See how necessary and optional technologies are handled and how visitors can accept, reject or change their preferences.",
    href: "/cookies",
    action: "Read Cookie Policy",
  },

  {
    icon: LockKeyhole,
    eyebrow: "Security",
    title: "Website and service security",
    text:
      "Review the AIGO-OS approach to access control, secure development, infrastructure, data handling, operational awareness and vulnerability reporting.",
    href: "/security",
    action: "View Security",
  },

  {
    icon: ShieldCheck,
    eyebrow: "Disclosure",
    title: "Report suspected vulnerabilities responsibly",
    text:
      "Use the responsible disclosure process if you believe you have identified a security issue affecting AIGO-OS.",
    href: "/responsible-disclosure",
    action: "Responsible Disclosure",
  },

  {
    icon: FileCheck2,
    eyebrow: "Website terms",
    title: "Rules governing public website use",
    text:
      "Review the terms that apply when accessing and using the public AIGO-OS website and its content.",
    href: "/terms",
    action: "Read Terms of Use",
  },

  {
    icon: Accessibility,
    eyebrow: "Accessibility",
    title: "Access across devices and assistive technologies",
    text:
      "Learn how accessibility is considered in the design and development of the AIGO-OS public website.",
    href: "/accessibility",
    action: "View Accessibility",
  },
];


export default function TrustPage() {
  return (
    <main>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroLayout}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Trust Center
              </p>

              <h1>
                Trust should be understandable before it is assumed.
              </h1>

              <p className={styles.lead}>
                This Trust Center brings together the public information
                that explains how AIGO-OS approaches privacy, website
                security, data handling, accessibility, responsible
                disclosure and legal transparency.
              </p>
            </div>


            <aside className={styles.heroAside}>
              <div className={styles.asideIcon}>
                <ShieldCheck
                  size={23}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <span>
                Public trust information
              </span>

              <strong>
                One place to understand the website and service practices that matter.
              </strong>

              <p>
                The detailed policies and security pages below are intended
                to make AIGO-OS practices easier to review without mixing
                website obligations with separate enterprise agreements.
              </p>
            </aside>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.introSection}>
        <PublicContainer>
          <div className={styles.introLayout}>
            <div>
              <p className={styles.sectionLabel}>
                Our approach
              </p>

              <h2>
                Transparency should follow the way the website actually operates.
              </h2>
            </div>

            <div className={styles.introCopy}>
              <p>
                AIGO-OS publishes separate information for privacy, cookies,
                security, accessibility and website terms because each area
                serves a different purpose.
              </p>

              <p>
                These pages are intended to describe current website
                practices and operating principles clearly, while keeping
                future contractual, certification or independent assurance
                claims separate until they genuinely apply.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.trustSection}>
        <PublicContainer>
          <div className={styles.trustHeader}>
            <p className={styles.sectionLabel}>
              Trust &amp; Legal
            </p>

            <h2>
              Review the area relevant to your question.
            </h2>
          </div>


          <div className={styles.trustGrid}>
            {trustAreas.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={styles.trustCard}
                >
                  <div className={styles.cardTop}>
                    <div className={styles.cardIcon}>
                      <Icon
                        size={21}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <span>
                      {item.eyebrow}
                    </span>
                  </div>

                  <div className={styles.cardCopy}>
                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                    <Link href={item.href}>
                      {item.action}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </PublicContainer>
      </section>


      <section className={styles.boundarySection}>
        <PublicContainer>
          <div className={styles.boundaryLayout}>
            <div>
              <p className={styles.sectionLabelLight}>
                What this Trust Center covers
              </p>

              <h2>
                Public trust information is not the same as a customer contract.
              </h2>
            </div>

            <div className={styles.boundaryCopy}>
              <p>
                The pages in this Trust Center explain public website and
                service practices, privacy choices, security principles and
                legal information.
              </p>

              <p>
                Enterprise deployments may require additional commercial,
                security, privacy, data processing, service or operational
                terms. Those requirements should be documented in the
                relevant agreement rather than assumed from public website
                content.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.contactSection}>
        <PublicContainer>
          <div className={styles.contactPanel}>
            <div>
              <p className={styles.sectionLabel}>
                Questions
              </p>

              <h2>
                Need clarification about a Trust &amp; Legal topic?
              </h2>

              <p>
                Use the relevant policy or security page where possible.
                For a general question that is not covered there, contact
                AIGO-OS.
              </p>
            </div>

            <div className={styles.contactActions}>
              <Link
                href="/company/contact"
                className={styles.primaryButton}
              >
                Contact AIGO-OS
              </Link>

              <Link
                href="/security"
                className={styles.secondaryButton}
              >
                View Security
              </Link>
            </div>
          </div>
        </PublicContainer>
      </section>
    </main>
  );
}

