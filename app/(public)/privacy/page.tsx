import type { Metadata } from "next";

import Link from "next/link";

import {
  BriefcaseBusiness,
  Cookie,
  Database,
  FileText,
  LockKeyhole,
  Mail,
  Scale,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

import { CookieSettingsButton } from "@/components/public/cookie-settings-button";
import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


export const metadata: Metadata = {
  title: "Privacy Policy",

  description:
    "Learn how AIGO-OS collects, uses, protects and manages personal information relating to website visitors, enquiries, commercial conversations, account access and recruitment.",

  alternates: {
    canonical: "/privacy",
  },

  robots: {
    index: true,
    follow: true,
  },
};


const informationGroups = [
  {
    icon: Mail,
    title: "Enquiries and conversations",
    text:
      "Information you provide through Contact, Request a Demo, Talk to an Expert, Contact Sales, Get Started or other communication channels. This may include your name, work email, organisation, role, interests, requirements and the information included in your message.",
  },

  {
    icon: BriefcaseBusiness,
    title: "Recruitment and applications",
    text:
      "Information you provide when applying for an AIGO-OS opportunity. This may include contact details, location, professional profile, employment context, experience, capabilities, availability and information you provide as part of an application.",
  },

  {
    icon: LockKeyhole,
    title: "Account and access information",
    text:
      "Where you use authentication or account functionality, information may be processed to create, authenticate, secure and administer access to AIGO-OS services.",
  },

  {
    icon: Database,
    title: "Technical and security information",
    text:
      "Information generated when the website or services are accessed, such as request information, security events, device or browser information, IP-related information and diagnostic data where required for operation, security or troubleshooting.",
  },

  {
    icon: Cookie,
    title: "Privacy and technology preferences",
    text:
      "Information stored in your browser to remember privacy choices, together with optional analytics information if an analytics service is enabled and you have allowed its use where consent is required.",
  },
];


const purposeRows = [
  {
    purpose: "Responding to enquiries",
    examples:
      "Responding to Contact, Demo, Expert, Sales and other requests.",
    basis:
      "Our legitimate interests in communicating about AIGO-OS and, where applicable, taking steps at your request before entering into an agreement.",
  },

  {
    purpose: "Commercial conversations",
    examples:
      "Understanding requirements, evaluating commercial fit, procurement discussions and managing prospective customer relationships.",
    basis:
      "Legitimate interests and, where applicable, steps requested before entering into a contract.",
  },

  {
    purpose: "Recruitment",
    examples:
      "Reviewing applications, communicating with applicants and managing recruitment decisions.",
    basis:
      "Legitimate interests, steps connected with a potential working relationship and legal obligations where applicable.",
  },

  {
    purpose: "Website and service security",
    examples:
      "Protecting systems, detecting abuse, maintaining authentication and investigating security events.",
    basis:
      "Legitimate interests in protecting AIGO-OS, its users and services, and legal obligations where applicable.",
  },

  {
    purpose: "Optional analytics",
    examples:
      "Understanding website usage and improving navigation, content and performance if optional analytics are enabled.",
    basis:
      "Consent where consent is required for the relevant technology.",
  },

  {
    purpose: "Legal and operational requirements",
    examples:
      "Maintaining appropriate records, protecting legal rights and complying with applicable obligations.",
    basis:
      "Legal obligations and legitimate interests.",
  },
];


export default function PrivacyPage() {
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
                Privacy Policy
              </h1>

              <p className={styles.lead}>
                This Privacy Policy explains how AIGO-OS handles personal
                information when you visit this website, contact us,
                explore a commercial relationship, apply for an opportunity
                or use services that require account access.
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
                Our approach
              </span>

              <strong>
                Collect what is relevant. Use it for a clear purpose.
              </strong>

              <p>
                AIGO-OS aims to handle personal information transparently,
                securely and only for purposes connected with operating,
                protecting and developing our website and services.
              </p>
            </aside>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.policySection}>
        <PublicContainer>
          <div className={styles.policyLayout}>
            <aside className={styles.policyNav}>
              <p>
                On this page
              </p>

              <nav aria-label="Privacy Policy sections">
                <a href="#scope">
                  Scope and responsibility
                </a>

                <a href="#information">
                  Information we collect
                </a>

                <a href="#sources">
                  How we receive information
                </a>

                <a href="#purposes">
                  Why we use information
                </a>

                <a href="#sharing">
                  Sharing and service providers
                </a>

                <a href="#transfers">
                  International transfers
                </a>

                <a href="#retention">
                  Retention
                </a>

                <a href="#security">
                  Security
                </a>

                <a href="#rights">
                  Your rights
                </a>

                <a href="#cookies">
                  Cookies and preferences
                </a>

                <a href="#children">
                  Children
                </a>

                <a href="#changes">
                  Changes
                </a>

                <a href="#contact">
                  Contact
                </a>
              </nav>
            </aside>


            <div className={styles.policyContent}>
              <section
                id="scope"
                className={styles.policyBlock}
              >
                <p className={styles.sectionLabel}>
                  Scope
                </p>

                <h2>
                  Who this policy applies to.
                </h2>

                <p>
                  This policy applies to personal information handled by
                  AIGO-OS in connection with the public website, website
                  enquiries, commercial conversations, recruitment and
                  account-related interactions.
                </p>

                <p>
                  AIGO-OS is responsible for determining how personal
                  information covered by this policy is used where AIGO-OS
                  acts as the relevant controller or equivalent responsible
                  organisation under applicable data protection law.
                </p>

                <p>
                  Where AIGO-OS processes information on behalf of an
                  enterprise customer under a separate agreement, that
                  processing may be governed by the relevant customer
                  agreement and data processing terms rather than this
                  website Privacy Policy.
                </p>
              </section>


              <section
                id="information"
                className={styles.policyBlock}
              >
                <div className={styles.blockHeading}>
                  <Database
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Information we collect
                    </p>

                    <h2>
                      The information depends on how you interact with us.
                    </h2>
                  </div>
                </div>


                <div className={styles.informationGrid}>
                  {informationGroups.map((item) => {
                    const Icon = item.icon;

                    return (
                      <article
                        key={item.title}
                        className={styles.informationCard}
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


                <div className={styles.notice}>
                  <ShieldCheck
                    size={19}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <p>
                    Please do not submit confidential, regulated, highly
                    sensitive or special-category information through
                    general website forms unless AIGO-OS has specifically
                    requested it through an appropriate channel.
                  </p>
                </div>
              </section>


              <section
                id="sources"
                className={styles.policyBlock}
              >
                <p className={styles.sectionLabel}>
                  Sources
                </p>

                <h2>
                  How we receive personal information.
                </h2>

                <p>
                  Most personal information covered by this policy is
                  provided directly by you, for example when you submit a
                  form, contact AIGO-OS, apply for an opportunity or create
                  or use an account.
                </p>

                <p>
                  We may also receive limited information through the
                  operation of our website, authentication, security and
                  infrastructure services, or through professional and
                  business interactions.
                </p>
              </section>


              <section
                id="purposes"
                className={styles.policyBlock}
              >
                <div className={styles.blockHeading}>
                  <Scale
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Purposes and lawful bases
                    </p>

                    <h2>
                      Why AIGO-OS uses personal information.
                    </h2>
                  </div>
                </div>

                <p>
                  The legal basis that applies can depend on the particular
                  interaction and the data protection law that applies to
                  that processing.
                </p>


                <div className={styles.purposeTable}>
                  {purposeRows.map((row) => (
                    <article
                      key={row.purpose}
                      className={styles.purposeRow}
                    >
                      <strong>
                        {row.purpose}
                      </strong>

                      <div>
                        <span>
                          Purpose
                        </span>

                        <p>
                          {row.examples}
                        </p>
                      </div>

                      <div>
                        <span>
                          Basis
                        </span>

                        <p>
                          {row.basis}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>


                <div className={styles.rightToObject}>
                  <strong>
                    Your right to object
                  </strong>

                  <p>
                    Where we rely on legitimate interests, applicable data
                    protection law may give you the right to object to that
                    processing. We will consider the circumstances and any
                    legal grounds that may permit or require the processing
                    to continue.
                  </p>
                </div>
              </section>


              <section
                id="sharing"
                className={styles.policyBlock}
              >
                <p className={styles.sectionLabel}>
                  Sharing
                </p>

                <h2>
                  We use service providers to operate the website and business.
                </h2>

                <p>
                  Personal information may be shared with service providers
                  where reasonably necessary to provide website, hosting,
                  infrastructure, security, authentication, communication,
                  email delivery, professional, operational or support
                  services.
                </p>

                <p>
                  We may also disclose information where required by law,
                  to establish or protect legal rights, to investigate
                  security or abuse, or in connection with a legitimate
                  corporate transaction subject to appropriate safeguards.
                </p>

                <p>
                  Service providers are expected to handle personal
                  information only for authorised purposes and subject to
                  appropriate contractual, confidentiality and security
                  requirements where required.
                </p>
              </section>


              <section
                id="transfers"
                className={styles.policyBlock}
              >
                <p className={styles.sectionLabel}>
                  International transfers
                </p>

                <h2>
                  Some technology services can operate across jurisdictions.
                </h2>

                <p>
                  The infrastructure and service providers used to operate
                  AIGO-OS may process information in countries other than
                  the country in which you are located.
                </p>

                <p>
                  Where applicable data protection law requires safeguards
                  for an international transfer, AIGO-OS will use an
                  appropriate lawful transfer mechanism or other recognised
                  safeguard.
                </p>
              </section>


              <section
                id="retention"
                className={styles.policyBlock}
              >
                <div className={styles.blockHeading}>
                  <FileText
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Retention
                    </p>

                    <h2>
                      We do not intend to keep personal information indefinitely.
                    </h2>
                  </div>
                </div>

                <p>
                  Retention periods depend on why the information was
                  collected, the nature of the relationship, operational
                  requirements and applicable legal or security obligations.
                </p>

                <div className={styles.retentionList}>
                  <div>
                    <strong>
                      Enquiries and commercial conversations
                    </strong>

                    <p>
                      Kept for as long as reasonably necessary to respond,
                      manage the conversation and maintain appropriate
                      business records.
                    </p>
                  </div>

                  <div>
                    <strong>
                      Recruitment information
                    </strong>

                    <p>
                      Kept while an application is being considered and for
                      a reasonable period afterwards where necessary for
                      recruitment administration, record keeping or legal
                      requirements.
                    </p>
                  </div>

                  <div>
                    <strong>
                      Account and security information
                    </strong>

                    <p>
                      Kept for periods appropriate to maintaining accounts,
                      securing services, investigating events and meeting
                      relevant operational or legal requirements.
                    </p>
                  </div>
                </div>

                <p>
                  When personal information is no longer required, AIGO-OS
                  may delete, anonymise or securely dispose of it as
                  appropriate.
                </p>
              </section>


              <section
                id="security"
                className={styles.policyBlock}
              >
                <div className={styles.blockHeading}>
                  <LockKeyhole
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Security
                    </p>

                    <h2>
                      Protecting personal information is part of operating AIGO-OS.
                    </h2>
                  </div>
                </div>

                <p>
                  AIGO-OS uses administrative, technical and organisational
                  measures intended to protect personal information against
                  unauthorised access, alteration, disclosure, misuse or
                  loss.
                </p>

                <p>
                  No website or information system can guarantee absolute
                  security. Security controls are reviewed and developed as
                  the website, platform, threats and operating environment
                  change.
                </p>

                <p>
                  More information about our security approach is available
                  on the{" "}
                  <Link href="/security">
                    Security page
                  </Link>.
                </p>
              </section>


              <section
                id="rights"
                className={styles.policyBlock}
              >
                <div className={styles.blockHeading}>
                  <UserRoundCheck
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Your rights
                    </p>

                    <h2>
                      Data protection law may give you rights over your information.
                    </h2>
                  </div>
                </div>

                <p>
                  Depending on the law that applies and the circumstances
                  of the processing, you may have rights to request access,
                  correction, deletion, restriction, portability or other
                  information about how your personal data is handled.
                </p>

                <p>
                  You may also have the right to object to certain
                  processing and to withdraw consent where processing is
                  based on consent. Withdrawing consent does not affect the
                  lawfulness of processing carried out before withdrawal.
                </p>

                <p>
                  These rights are not absolute and may be subject to legal
                  conditions or exceptions.
                </p>

                <p>
                  AIGO-OS does not currently use personal information
                  collected through the public website to make decisions
                  about individuals based solely on automated processing
                  that produce legal or similarly significant effects.
                </p>

                <div className={styles.rightsPanel}>
                  <strong>
                    Privacy request
                  </strong>

                  <p>
                    To ask a privacy question or exercise an applicable
                    privacy right, contact AIGO-OS and clearly identify the
                    request. We may need to verify your identity before
                    acting on a request.
                  </p>

                  <Link href="/company/contact">
                    Contact AIGO-OS
                  </Link>
                </div>

                <p>
                  You may also have the right to raise a complaint with the
                  data protection or privacy authority that applies in your
                  jurisdiction. Where UK data protection law applies, this
                  may include the UK Information Commissioner&apos;s Office.
                </p>
              </section>


              <section
                id="cookies"
                className={styles.policyBlock}
              >
                <div className={styles.blockHeading}>
                  <Cookie
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Cookies and similar technologies
                    </p>

                    <h2>
                      Optional technologies remain under your control.
                    </h2>
                  </div>
                </div>

                <p>
                  AIGO-OS uses necessary browser technologies for functions
                  such as remembering privacy preferences and supporting
                  requested website or security functionality.
                </p>

                <p>
                  Optional analytics technologies remain disabled through
                  the AIGO-OS consent system unless you choose to allow
                  them where consent is required.
                </p>

                <div className={styles.cookiePanel}>
                  <div>
                    <strong>
                      Review your preferences
                    </strong>

                    <p>
                      You can change your optional technology choices at
                      any time.
                    </p>
                  </div>

                  <div className={styles.cookieActions}>
                    <CookieSettingsButton />

                    <Link href="/cookies">
                      Cookie Policy
                    </Link>
                  </div>
                </div>
              </section>


              <section
                id="children"
                className={styles.policyBlock}
              >
                <p className={styles.sectionLabel}>
                  Children
                </p>

                <h2>
                  AIGO-OS is intended for professional and organisational use.
                </h2>

                <p>
                  The AIGO-OS website and services are not directed at
                  children. We do not intentionally design website forms
                  or commercial services to collect personal information
                  from children.
                </p>
              </section>


              <section
                id="changes"
                className={styles.policyBlock}
              >
                <p className={styles.sectionLabel}>
                  Changes
                </p>

                <h2>
                  This policy will evolve with the website and services.
                </h2>

                <p>
                  We may update this Privacy Policy when our services,
                  processing activities, technology, providers or legal
                  obligations change.
                </p>

                <p>
                  The date at the top of this page identifies the latest
                  published version. Where appropriate, material changes
                  may also be brought to your attention through the website
                  or another appropriate channel.
                </p>
              </section>


              <section
                id="contact"
                className={styles.policyBlock}
              >
                <div className={styles.blockHeading}>
                  <Mail
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Contact
                    </p>

                    <h2>
                      Questions about privacy or personal information.
                    </h2>
                  </div>
                </div>

                <p>
                  If you have a question about this Privacy Policy, how
                  AIGO-OS handles personal information, or an applicable
                  privacy right, contact us through the AIGO-OS contact
                  channel.
                </p>

                <Link
                  href="/company/contact"
                  className={styles.contactButton}
                >
                  Contact AIGO-OS
                </Link>

                <p className={styles.identityNote}>
                  Before public launch, the legal identity and formal
                  contact information of the organisation responsible for
                  AIGO-OS should be confirmed here if different from the
                  AIGO-OS trading identity.
                </p>
              </section>
            </div>
          </div>
        </PublicContainer>
      </section>
    </main>
  );
}

