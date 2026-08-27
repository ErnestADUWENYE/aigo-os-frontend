import type { Metadata } from "next";

import Link from "next/link";

import {
  Activity,
  Bug,
  Cloud,
  Code2,
  Database,
  FileCheck2,
  KeyRound,
  LockKeyhole,
  Mail,
  Network,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


export const metadata: Metadata = {
  title: "Security",

  description:
    "Learn how AIGO-OS approaches website and service security, including access control, secure development, data handling, infrastructure, monitoring and vulnerability reporting.",

  alternates: {
    canonical: "/security",
  },

  robots: {
    index: true,
    follow: true,
  },
};


const securityAreas = [
  {
    icon: KeyRound,
    title: "Authentication and access",
    text:
      "Authenticated areas use access controls intended to restrict protected functionality to authorised users, organisations and administrative roles.",
  },

  {
    icon: LockKeyhole,
    title: "Secrets and credentials",
    text:
      "Application secrets, service credentials and API keys should remain in server-side environment configuration and must not be intentionally exposed through public client code.",
  },

  {
    icon: Network,
    title: "Transport and connectivity",
    text:
      "Production services are intended to use secure transport and trusted service connections so information is not sent across public networks in plain text.",
  },

  {
    icon: Code2,
    title: "Secure development",
    text:
      "Security considerations are incorporated into application development through code review, dependency management, validation, testing and controlled deployment practices.",
  },

  {
    icon: Database,
    title: "Data handling",
    text:
      "Website and service data should be collected and retained according to a defined purpose, with access limited according to operational need.",
  },

  {
    icon: Activity,
    title: "Operational awareness",
    text:
      "Security-relevant application and infrastructure events may be reviewed to support troubleshooting, abuse detection, incident investigation and service protection.",
  },
];


export default function SecurityPage() {
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
                Security
              </h1>

              <p className={styles.lead}>
                AIGO-OS treats security as part of how the website and
                services are designed, developed and operated. This page
                explains the security principles and practices relevant to
                the AIGO-OS environment.
              </p>

              <p className={styles.updated}>
                Last updated: 27 August 2026
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
                Security approach
              </span>

              <strong>
                Protect access, reduce exposure and preserve accountability.
              </strong>

              <p>
                Security controls should support the systems, people and
                information involved without relying on a single defensive
                measure.
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

              <nav aria-label="Security sections">
                <a href="#approach">
                  Security approach
                </a>

                <a href="#controls">
                  Security areas
                </a>

                <a href="#access">
                  Access control
                </a>

                <a href="#application">
                  Application security
                </a>

                <a href="#data">
                  Data and forms
                </a>

                <a href="#infrastructure">
                  Infrastructure
                </a>

                <a href="#dependencies">
                  Dependencies
                </a>

                <a href="#monitoring">
                  Monitoring and incidents
                </a>

                <a href="#disclosure">
                  Vulnerability reporting
                </a>

                <a href="#responsibility">
                  Shared responsibility
                </a>

                <a href="#contact">
                  Security contact
                </a>
              </nav>
            </aside>


            <div className={styles.content}>
              <section
                id="approach"
                className={styles.block}
              >
                <p className={styles.sectionLabel}>
                  Approach
                </p>

                <h2>
                  Security is treated as an operating requirement.
                </h2>

                <p>
                  AIGO-OS is being developed with the expectation that
                  security controls must support public website use,
                  authenticated application access, enterprise
                  connectivity and the handling of governance information.
                </p>

                <p>
                  No single control can provide complete protection.
                  Security therefore depends on multiple layers including
                  authentication, authorisation, secure configuration,
                  application controls, infrastructure protection,
                  monitoring and responsible operational practices.
                </p>

                <div className={styles.principlePanel}>
                  <ShieldCheck
                    size={20}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <strong>
                      Security claims should remain verifiable.
                    </strong>

                    <p>
                      This page describes the AIGO-OS security approach.
                      Formal certifications, independent assurance results
                      or contractual commitments should only be published
                      separately when they actually exist.
                    </p>
                  </div>
                </div>
              </section>


              <section
                id="controls"
                className={styles.block}
              >
                <p className={styles.sectionLabel}>
                  Security areas
                </p>

                <h2>
                  Security considerations across the website and service.
                </h2>

                <div className={styles.securityGrid}>
                  {securityAreas.map((item) => {
                    const Icon = item.icon;

                    return (
                      <article
                        key={item.title}
                        className={styles.securityCard}
                      >
                        <div className={styles.cardIcon}>
                          <Icon
                            size={20}
                            strokeWidth={1.7}
                            aria-hidden="true"
                          />
                        </div>

                        <strong>
                          {item.title}
                        </strong>

                        <p>
                          {item.text}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </section>


              <section
                id="access"
                className={styles.block}
              >
                <div className={styles.blockHeading}>
                  <UserRoundCheck
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Access control
                    </p>

                    <h2>
                      Protected functionality should require authorised access.
                    </h2>
                  </div>
                </div>

                <p>
                  AIGO-OS separates public website content from protected
                  application and administrative functionality.
                </p>

                <p>
                  Authenticated areas use identity and access controls
                  intended to prevent unauthorised access to protected
                  routes and functionality.
                </p>

                <p>
                  Administrative access should be restricted according to
                  role and operational need. Authentication credentials
                  should not be shared or embedded in public application
                  code.
                </p>
              </section>


              <section
                id="application"
                className={styles.block}
              >
                <div className={styles.blockHeading}>
                  <Code2
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Application security
                    </p>

                    <h2>
                      Security controls belong in the application lifecycle.
                    </h2>
                  </div>
                </div>

                <p>
                  AIGO-OS application development includes practices
                  intended to reduce common software security risks,
                  including validation of user-controlled input,
                  controlled access to server-side functionality and
                  appropriate separation between public and protected
                  operations.
                </p>

                <p>
                  Build, lint and test processes are used to identify
                  implementation problems before deployment. Dependencies
                  and framework changes also require ongoing review because
                  security conditions can change over time.
                </p>
              </section>


              <section
                id="data"
                className={styles.block}
              >
                <div className={styles.blockHeading}>
                  <Database
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Data and forms
                    </p>

                    <h2>
                      Website submissions should use controlled server-side paths.
                    </h2>
                  </div>
                </div>

                <p>
                  Public AIGO-OS forms submit information to server-side
                  application routes for processing rather than exposing
                  service credentials in the browser.
                </p>

                <p>
                  Email delivery credentials and other service secrets are
                  intended to remain in protected environment configuration
                  and must not be included in client-side application
                  bundles.
                </p>

                <p>
                  Users are asked not to submit confidential, regulated or
                  highly sensitive information through general website
                  forms unless an appropriate channel has been established.
                </p>

                <p>
                  More information about personal information handling is
                  available in the{" "}
                  <Link href="/privacy">
                    Privacy Policy
                  </Link>.
                </p>
              </section>


              <section
                id="infrastructure"
                className={styles.block}
              >
                <div className={styles.blockHeading}>
                  <Cloud
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Infrastructure
                    </p>

                    <h2>
                      Security extends beyond application code.
                    </h2>
                  </div>
                </div>

                <p>
                  AIGO-OS relies on infrastructure and technology services
                  to deliver the website, authentication, communication and
                  application functionality.
                </p>

                <p>
                  Infrastructure should be configured to limit unnecessary
                  exposure, protect service credentials, separate protected
                  functionality and support secure network communication.
                </p>

                <p>
                  Security configuration will continue to evolve as the
                  production architecture and service environment mature.
                </p>
              </section>


              <section
                id="dependencies"
                className={styles.block}
              >
                <p className={styles.sectionLabel}>
                  Dependencies
                </p>

                <h2>
                  Third-party software remains part of the security boundary.
                </h2>

                <p>
                  Modern web applications depend on frameworks, packages,
                  hosting services and external technology providers.
                  Vulnerabilities in those dependencies can affect the
                  security of an application even when the application
                  code itself has not changed.
                </p>

                <p>
                  AIGO-OS therefore treats dependency review, package
                  updates and vulnerability remediation as part of ongoing
                  application maintenance.
                </p>
              </section>


              <section
                id="monitoring"
                className={styles.block}
              >
                <div className={styles.blockHeading}>
                  <Activity
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Monitoring and incidents
                    </p>

                    <h2>
                      Security events require context and investigation.
                    </h2>
                  </div>
                </div>

                <p>
                  Application, infrastructure and authentication events may
                  be reviewed where necessary to diagnose failures,
                  investigate suspected abuse, understand security events
                  or protect service availability.
                </p>

                <p>
                  If a security incident is identified, the appropriate
                  response depends on its scope, affected systems,
                  information involved, containment requirements and any
                  applicable notification obligations.
                </p>
              </section>


              <section
                id="disclosure"
                className={styles.block}
              >
                <div className={styles.blockHeading}>
                  <Bug
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Vulnerability reporting
                    </p>

                    <h2>
                      Security issues should be reported responsibly.
                    </h2>
                  </div>
                </div>

                <p>
                  If you believe you have identified a vulnerability
                  affecting AIGO-OS, please provide enough information for
                  the issue to be understood and reproduced without causing
                  unnecessary disruption or accessing information that does
                  not belong to you.
                </p>

                <Link
                  href="/responsible-disclosure"
                  className={styles.secondaryButton}
                >
                  Responsible Disclosure
                </Link>
              </section>


              <section
                id="responsibility"
                className={styles.block}
              >
                <div className={styles.blockHeading}>
                  <FileCheck2
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Shared responsibility
                    </p>

                    <h2>
                      Security also depends on how accounts and systems are used.
                    </h2>
                  </div>
                </div>

                <p>
                  Users and organisations remain responsible for protecting
                  their own credentials, devices, connected systems and
                  authorised access.
                </p>

                <p>
                  Customers and users should promptly remove access that is
                  no longer required, protect authentication credentials
                  and report suspected compromise through an appropriate
                  channel.
                </p>

                <p>
                  Specific enterprise security responsibilities may be
                  defined separately in customer agreements and deployment
                  documentation.
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
                      Security contact
                    </p>

                    <h2>
                      Contact AIGO-OS about a security concern.
                    </h2>
                  </div>
                </div>

                <p>
                  Security vulnerability reports should follow the
                  Responsible Disclosure process. Other security questions
                  can be sent through the AIGO-OS company contact channel.
                </p>

                <div className={styles.actions}>
                  <Link
                    href="/responsible-disclosure"
                    className={styles.primaryButton}
                  >
                    Report a vulnerability
                  </Link>

                  <Link
                    href="/company/contact"
                    className={styles.secondaryButton}
                  >
                    Contact AIGO-OS
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </PublicContainer>
      </section>
    </main>
  );
}
