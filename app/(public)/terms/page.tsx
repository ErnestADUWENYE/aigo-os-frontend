import type { Metadata } from "next";

import Link from "next/link";

import {
  CircleAlert,
  ExternalLink,
  FileCheck2,
  Globe2,
  LockKeyhole,
  Scale,
  ShieldCheck,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


export const metadata: Metadata = {
  title: "Terms of Use",

  description:
    "Read the AIGO-OS Terms of Use governing access to and use of the public AIGO-OS website, content, services, intellectual property and related website functionality.",

  alternates: {
    canonical: "/terms",
  },

  robots: {
    index: true,
    follow: true,
  },
};


const acceptableUseItems = [
  "Use the website in a way that is unlawful, fraudulent or harmful.",
  "Attempt to gain unauthorised access to AIGO-OS systems, accounts, infrastructure or data.",
  "Probe, scan, test or circumvent security controls except through an authorised security testing or disclosure process.",
  "Introduce malware, malicious code, automated abuse or technology intended to disrupt the website or services.",
  "Scrape, extract or collect website content or data at a scale or in a manner that materially interferes with operation of the website.",
  "Impersonate another person or organisation, misrepresent your affiliation or submit information you are not authorised to provide.",
  "Use AIGO-OS branding, content or intellectual property in a way that falsely suggests endorsement, partnership or authorisation.",
];


export default function TermsPage() {
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
                Terms of Use
              </h1>

              <p className={styles.lead}>
                These Terms of Use govern access to and use of the public
                AIGO-OS website and the information, functionality and
                materials made available through it.
              </p>

              <p className={styles.updated}>
                Last updated: 27 August 2026
              </p>
            </div>


            <aside className={styles.heroAside}>
              <div className={styles.asideIcon}>
                <FileCheck2
                  size={23}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <span>
                Website terms
              </span>

              <strong>
                These terms apply to the public website.
              </strong>

              <p>
                Enterprise use of AIGO-OS products or services may be
                governed by separate commercial, subscription, service,
                data processing or other agreements.
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

              <nav aria-label="Terms of Use sections">
                <a href="#acceptance">
                  Acceptance
                </a>

                <a href="#scope">
                  Scope
                </a>

                <a href="#website">
                  Website information
                </a>

                <a href="#accounts">
                  Accounts and access
                </a>

                <a href="#acceptable-use">
                  Acceptable use
                </a>

                <a href="#intellectual-property">
                  Intellectual property
                </a>

                <a href="#submissions">
                  Information you submit
                </a>

                <a href="#third-parties">
                  Third-party services
                </a>

                <a href="#security">
                  Security
                </a>

                <a href="#availability">
                  Availability and changes
                </a>

                <a href="#disclaimers">
                  Disclaimers
                </a>

                <a href="#liability">
                  Liability
                </a>

                <a href="#privacy">
                  Privacy
                </a>

                <a href="#termination">
                  Restricting access
                </a>

                <a href="#changes">
                  Changes to these terms
                </a>

                <a href="#contact">
                  Contact
                </a>
              </nav>
            </aside>


            <div className={styles.policyContent}>
              <section
                id="acceptance"
                className={styles.policyBlock}
              >
                <p className={styles.sectionLabel}>
                  Acceptance
                </p>

                <h2>
                  Using this website means these terms apply.
                </h2>

                <p>
                  By accessing or using the public AIGO-OS website, you
                  agree to these Terms of Use to the extent permitted by
                  applicable law.
                </p>

                <p>
                  If you do not agree with these terms, you should not use
                  the website.
                </p>
              </section>


              <section
                id="scope"
                className={styles.policyBlock}
              >
                <div className={styles.blockHeading}>
                  <Globe2
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Scope
                    </p>

                    <h2>
                      Public website use is different from product use.
                    </h2>
                  </div>
                </div>

                <p>
                  These terms apply to the public AIGO-OS website,
                  including public product, platform, solution, resource,
                  company, trust, legal, contact and recruitment pages.
                </p>

                <p>
                  They do not replace any separate agreement governing
                  access to an AIGO-OS product, customer environment,
                  enterprise deployment, paid service, pilot, evaluation
                  or other commercial relationship.
                </p>

                <div className={styles.scopePanel}>
                  <strong>
                    Enterprise agreements take priority
                  </strong>

                  <p>
                    If you or your organisation enters into a separate
                    written agreement with AIGO-OS, that agreement governs
                    the subject matter it covers and takes priority over
                    these website terms where there is a conflict.
                  </p>
                </div>
              </section>


              <section
                id="website"
                className={styles.policyBlock}
              >
                <p className={styles.sectionLabel}>
                  Website information
                </p>

                <h2>
                  Public content is provided for general information.
                </h2>

                <p>
                  AIGO-OS publishes information about its company,
                  platform, products, capabilities, approach and related
                  topics through this website.
                </p>

                <p>
                  Website content may describe functionality that is in
                  development, planned, evolving or subject to change.
                  Public website material does not create a contractual
                  commitment that a particular feature, integration,
                  capability, availability date or commercial term will
                  be provided.
                </p>

                <p>
                  Specific commitments concerning products or services
                  should be contained in the applicable written agreement.
                </p>
              </section>


              <section
                id="accounts"
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
                      Accounts and access
                    </p>

                    <h2>
                      You are responsible for authorised use of your access.
                    </h2>
                  </div>
                </div>

                <p>
                  Some AIGO-OS functionality may require authentication,
                  invitations, organisation membership or other access
                  controls.
                </p>

                <p>
                  You must provide accurate information where reasonably
                  required, keep authentication credentials secure and
                  avoid sharing access in a way that defeats applicable
                  access controls.
                </p>

                <p>
                  You should notify AIGO-OS if you reasonably believe that
                  credentials, invitations or account access have been
                  compromised or misused.
                </p>
              </section>


              <section
                id="acceptable-use"
                className={styles.policyBlock}
              >
                <div className={styles.blockHeading}>
                  <ShieldCheck
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Acceptable use
                    </p>

                    <h2>
                      Do not misuse the website or interfere with its operation.
                    </h2>
                  </div>
                </div>

                <p>
                  You must not:
                </p>

                <ul className={styles.ruleList}>
                  {acceptableUseItems.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">
                        01
                      </span>

                      <p>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>

                <p>
                  Nothing in these restrictions is intended to prevent
                  legitimate activity that AIGO-OS has expressly authorised,
                  including activity carried out under an applicable
                  responsible disclosure or security testing process.
                </p>
              </section>


              <section
                id="intellectual-property"
                className={styles.policyBlock}
              >
                <p className={styles.sectionLabel}>
                  Intellectual property
                </p>

                <h2>
                  AIGO-OS content and branding remain protected.
                </h2>

                <p>
                  Unless otherwise stated, the website, its design,
                  software, text, graphics, branding, logos, product names,
                  documentation and other original material are owned by
                  AIGO-OS or used under appropriate permission and may be
                  protected by intellectual property laws.
                </p>

                <p>
                  You may access and use public website content for normal
                  informational and business evaluation purposes.
                </p>

                <p>
                  You may not reproduce, distribute, modify, sell, license,
                  republish or exploit protected AIGO-OS material beyond
                  what applicable law permits without appropriate
                  permission.
                </p>

                <p>
                  References to third-party names, products, services or
                  trademarks remain the property of their respective
                  owners.
                </p>
              </section>


              <section
                id="submissions"
                className={styles.policyBlock}
              >
                <p className={styles.sectionLabel}>
                  Information you submit
                </p>

                <h2>
                  Only provide information you are authorised to share.
                </h2>

                <p>
                  When you submit an enquiry, application, request,
                  feedback or other information through the website, you
                  confirm that you have the right to provide that
                  information for the purpose for which it is submitted.
                </p>

                <p>
                  You should not include confidential, regulated, highly
                  sensitive, proprietary or special-category information
                  in general website forms unless AIGO-OS has specifically
                  requested it through an appropriate channel.
                </p>

                <p>
                  Personal information submitted through the website is
                  handled as described in the{" "}
                  <Link href="/privacy">
                    Privacy Policy
                  </Link>.
                </p>
              </section>


              <section
                id="third-parties"
                className={styles.policyBlock}
              >
                <div className={styles.blockHeading}>
                  <ExternalLink
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Third parties
                    </p>

                    <h2>
                      External services have their own terms and practices.
                    </h2>
                  </div>
                </div>

                <p>
                  The website may contain links to third-party websites,
                  platforms, social networks, documentation or services.
                </p>

                <p>
                  A link does not necessarily mean that AIGO-OS controls,
                  endorses or accepts responsibility for the third party,
                  its content or its practices.
                </p>

                <p>
                  Your use of third-party services may be governed by
                  separate terms, privacy notices and other conditions
                  provided by the relevant third party.
                </p>
              </section>


              <section
                id="security"
                className={styles.policyBlock}
              >
                <div className={styles.blockHeading}>
                  <ShieldCheck
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Security
                    </p>

                    <h2>
                      Security concerns should be reported responsibly.
                    </h2>
                  </div>
                </div>

                <p>
                  You must not knowingly interfere with, disrupt or
                  compromise the security, integrity or availability of
                  the website or AIGO-OS systems.
                </p>

                <p>
                  If you identify a suspected vulnerability or security
                  issue, please report it through the security reporting
                  channel identified by AIGO-OS rather than exploiting,
                  publishing or expanding the issue unnecessarily.
                </p>

                <p>
                  More information is available on the{" "}
                  <Link href="/security">
                    Security page
                  </Link>.
                </p>
              </section>


              <section
                id="availability"
                className={styles.policyBlock}
              >
                <p className={styles.sectionLabel}>
                  Availability
                </p>

                <h2>
                  The public website may change.
                </h2>

                <p>
                  AIGO-OS may update, modify, remove, suspend or reorganise
                  public website content or functionality as the company,
                  platform and services develop.
                </p>

                <p>
                  We do not promise that the public website will always be
                  available, uninterrupted, error-free or compatible with
                  every device, browser, network or environment.
                </p>

                <p>
                  Service availability commitments for customers, if any,
                  belong in the applicable customer agreement rather than
                  these public website terms.
                </p>
              </section>


              <section
                id="disclaimers"
                className={styles.policyBlock}
              >
                <div className={styles.blockHeading}>
                  <CircleAlert
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Disclaimers
                    </p>

                    <h2>
                      Website information is not professional advice.
                    </h2>
                  </div>
                </div>

                <p>
                  Content on this website is provided for general
                  informational, product evaluation and business
                  communication purposes.
                </p>

                <p>
                  It is not legal, regulatory, compliance, financial,
                  accounting, cybersecurity or other professional advice.
                  Organisations remain responsible for obtaining
                  appropriate professional advice and making their own
                  governance, risk, security and business decisions.
                </p>

                <p>
                  To the extent permitted by applicable law, the public
                  website and its content are provided without warranties
                  that are not expressly stated in a binding written
                  agreement.
                </p>
              </section>


              <section
                id="liability"
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
                      Liability
                    </p>

                    <h2>
                      Applicable law determines what can and cannot be limited.
                    </h2>
                  </div>
                </div>

                <p>
                  To the maximum extent permitted by applicable law,
                  AIGO-OS is not responsible for indirect, incidental,
                  special or consequential loss arising solely from reliance
                  on or inability to use the public website.
                </p>

                <p>
                  Nothing in these terms excludes or limits responsibility
                  that cannot lawfully be excluded or limited.
                </p>

                <p>
                  Any liability relating to a paid product, enterprise
                  service, customer deployment or other contracted service
                  is governed by the applicable written agreement rather
                  than this website clause.
                </p>
              </section>


              <section
                id="privacy"
                className={styles.policyBlock}
              >
                <p className={styles.sectionLabel}>
                  Privacy
                </p>

                <h2>
                  Privacy and cookie choices are governed separately.
                </h2>

                <p>
                  Information about how AIGO-OS handles personal
                  information is available in our{" "}
                  <Link href="/privacy">
                    Privacy Policy
                  </Link>.
                </p>

                <p>
                  Information about cookies, browser storage and optional
                  website technologies is available in our{" "}
                  <Link href="/cookies">
                    Cookie Policy
                  </Link>.
                </p>
              </section>


              <section
                id="termination"
                className={styles.policyBlock}
              >
                <p className={styles.sectionLabel}>
                  Access restrictions
                </p>

                <h2>
                  Misuse may result in access being restricted.
                </h2>

                <p>
                  AIGO-OS may restrict or block access where reasonably
                  necessary to protect the website, users, systems,
                  information or legal rights, including where these terms
                  are materially breached or abusive activity is detected.
                </p>

                <p>
                  Access to authenticated products or enterprise services
                  may also be subject to separate contractual and account
                  rules.
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
                  These terms may be updated as the website evolves.
                </h2>

                <p>
                  AIGO-OS may update these Terms of Use to reflect changes
                  to the website, services, operating practices or legal
                  requirements.
                </p>

                <p>
                  The date shown at the top of this page identifies the
                  latest published version.
                </p>

                <p>
                  Continued use of the website after updated terms are
                  published means the updated terms apply to subsequent
                  use, subject to applicable law.
                </p>
              </section>


              <section
                id="contact"
                className={styles.policyBlock}
              >
                <p className={styles.sectionLabel}>
                  Contact
                </p>

                <h2>
                  Questions about these website terms.
                </h2>

                <p>
                  If you have a question about these Terms of Use or use of
                  the AIGO-OS website, contact AIGO-OS through the company
                  contact channel.
                </p>

                <Link
                  href="/company/contact"
                  className={styles.contactButton}
                >
                  Contact AIGO-OS
                </Link>


                <div className={styles.legalNote}>
                  <strong>
                    Legal identity and governing law
                  </strong>

                  <p>
                    Before public launch, AIGO-OS should insert the legal
                    name of the operating entity, its formal legal contact
                    information and the governing law or jurisdiction
                    applicable to these Terms of Use.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </PublicContainer>
      </section>
    </main>
  );
}
