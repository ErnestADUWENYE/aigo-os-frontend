import type { Metadata } from "next";

import Link from "next/link";

import {
  Bug,
  FileWarning,
  Mail,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


export const metadata: Metadata = {
  title: "Responsible Disclosure",

  description:
    "Learn how to report a suspected security vulnerability affecting the AIGO-OS website or services and what information to include in a responsible disclosure.",

  alternates: {
    canonical: "/responsible-disclosure",
  },

  robots: {
    index: true,
    follow: true,
  },
};


const reportItems = [
  "A clear description of the suspected issue.",
  "The affected page, endpoint, feature or service.",
  "Steps that help reproduce the issue.",
  "The potential impact you believe the issue may have.",
  "Relevant screenshots, request details or technical evidence where appropriate.",
  "A way for AIGO-OS to contact you if clarification is needed.",
];


const avoidItems = [
  "Do not access, modify, delete or retain information that does not belong to you.",
  "Do not disrupt, degrade or materially interfere with AIGO-OS systems or services.",
  "Do not use denial-of-service techniques, destructive testing or malware.",
  "Do not attempt to obtain credentials, secrets or data beyond what is necessary to demonstrate the issue.",
  "Do not publicly disclose a suspected vulnerability before AIGO-OS has had a reasonable opportunity to investigate and respond.",
];


export default function ResponsibleDisclosurePage() {
  return (
    <main>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroLayout}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Trust &amp; Legal
              </p>

              <h1>
                Responsible Disclosure
              </h1>

              <p className={styles.lead}>
                If you believe you have found a security vulnerability
                affecting the AIGO-OS website or services, please report it
                responsibly so we can investigate and respond.
              </p>

              <p className={styles.updated}>
                Last updated: 27 August 2026
              </p>
            </div>


            <aside className={styles.heroAside}>
              <div className={styles.asideIcon}>
                <Bug
                  size={23}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <span>
                Security reporting
              </span>

              <strong>
                Help us understand the issue clearly and safely.
              </strong>

              <p>
                Good reports focus on enough evidence to demonstrate the
                problem without causing unnecessary access, disruption or
                exposure.
              </p>
            </aside>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.contentSection}>
        <PublicContainer>
          <div className={styles.contentLayout}>
            <aside className={styles.pageNav}>
              <p>
                On this page
              </p>

              <nav aria-label="Responsible disclosure sections">
                <a href="#scope">
                  Scope
                </a>

                <a href="#report">
                  What to include
                </a>

                <a href="#conduct">
                  Responsible testing
                </a>

                <a href="#response">
                  What happens next
                </a>

                <a href="#not-a-bounty">
                  No automatic bounty
                </a>

                <a href="#contact">
                  Report an issue
                </a>
              </nav>
            </aside>


            <div className={styles.content}>
              <section
                id="scope"
                className={styles.block}
              >
                <p className={styles.sectionLabel}>
                  Scope
                </p>

                <h2>
                  Report security issues affecting AIGO-OS.
                </h2>

                <p>
                  This page is intended for suspected vulnerabilities that
                  may affect the confidentiality, integrity, availability
                  or security of the AIGO-OS public website, authenticated
                  services or related AIGO-OS systems.
                </p>

                <p>
                  General product questions, commercial enquiries,
                  accessibility issues and ordinary support requests should
                  use the relevant AIGO-OS contact or support channel
                  instead.
                </p>
              </section>


              <section
                id="report"
                className={styles.block}
              >
                <div className={styles.blockHeading}>
                  <FileWarning
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      What to include
                    </p>

                    <h2>
                      Give us enough information to investigate.
                    </h2>
                  </div>
                </div>

                <div className={styles.listPanel}>
                  {reportItems.map((item) => (
                    <div
                      key={item}
                      className={styles.listItem}
                    >
                      <span aria-hidden="true">
                        -
                      </span>

                      <p>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>


              <section
                id="conduct"
                className={styles.block}
              >
                <div className={styles.blockHeading}>
                  <ShieldCheck
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Responsible testing
                    </p>

                    <h2>
                      Minimise impact while demonstrating the issue.
                    </h2>
                  </div>
                </div>

                <p>
                  If you investigate a suspected vulnerability, please use
                  the minimum level of interaction necessary to confirm and
                  explain the issue.
                </p>

                <div className={styles.warningPanel}>
                  <TriangleAlert
                    size={20}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <strong>
                      Please avoid the following
                    </strong>

                    <div className={styles.warningList}>
                      {avoidItems.map((item) => (
                        <p key={item}>
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </section>


              <section
                id="response"
                className={styles.block}
              >
                <p className={styles.sectionLabel}>
                  What happens next
                </p>

                <h2>
                  Reports are reviewed and assessed based on risk and evidence.
                </h2>

                <p>
                  AIGO-OS will review reports that contain enough information
                  to understand the issue and may contact the reporter for
                  clarification.
                </p>

                <p>
                  The time required to investigate and address a report can
                  vary depending on severity, reproducibility, affected
                  systems and the complexity of remediation.
                </p>

                <p>
                  AIGO-OS may choose not to provide detailed internal
                  remediation information where doing so could create an
                  additional security risk.
                </p>
              </section>


              <section
                id="not-a-bounty"
                className={styles.block}
              >
                <p className={styles.sectionLabel}>
                  No automatic bounty
                </p>

                <h2>
                  This disclosure process is not a public bug bounty program.
                </h2>

                <p>
                  Submitting a report does not create an entitlement to
                  payment, reward, recognition or other compensation.
                </p>

                <p>
                  If AIGO-OS later introduces a formal vulnerability reward
                  or bounty program, the terms of that program will be
                  published separately.
                </p>
              </section>


              <section
                id="contact"
                className={styles.block}
              >
                <div className={styles.blockHeading}>
                  <Mail
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Report an issue
                    </p>

                    <h2>
                      Contact AIGO-OS with the security details.
                    </h2>
                  </div>
                </div>

                <p>
                  Until a dedicated security reporting address is published,
                  use the AIGO-OS company contact channel and clearly identify
                  the message as a security vulnerability report.
                </p>

                <Link
                  href="/company/contact"
                  className={styles.contactButton}
                >
                  Contact AIGO-OS
                </Link>

                <p className={styles.futureNote}>
                  Before public launch, AIGO-OS should consider publishing a
                  dedicated security reporting email address if one is
                  established.
                </p>
              </section>
            </div>
          </div>
        </PublicContainer>
      </section>
    </main>
  );
}

