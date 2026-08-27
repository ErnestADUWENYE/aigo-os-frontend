import type { Metadata } from "next";

import {
  BarChart3,
  Check,
  Cookie,
  Settings2,
  ShieldCheck,
} from "lucide-react";

import { CookieSettingsButton } from "@/components/public/cookie-settings-button";
import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


export const metadata: Metadata = {
  title: "Cookie Policy",

  description:
    "Learn how AIGO-OS uses cookies and similar technologies, which technologies are necessary, how optional analytics are controlled, and how to manage your preferences.",

  alternates: {
    canonical: "/cookies",
  },

  robots: {
    index: true,
    follow: true,
  },
};


const currentTechnologies = [
  {
    name: "Consent preferences",
    technology: "Browser local storage",
    purpose:
      "Remembers your cookie and privacy choices so we do not ask you to make the same choice on every page visit.",
    category: "Necessary",
    duration:
      "Stored until you clear browser storage or AIGO-OS changes the consent version.",
  },
  {
    name: "Authentication and security",
    technology: "Cookies or similar technologies where required",
    purpose:
      "May be used when you access sign-in or authenticated AIGO-OS services to maintain secure sessions, protect access and provide functionality you request.",
    category: "Necessary",
    duration:
      "Depends on the relevant authentication or security function.",
  },
  {
    name: "Website analytics",
    technology: "Optional analytics technologies",
    purpose:
      "May be used to understand how visitors use the public website and help improve its content, navigation and performance.",
    category: "Analytics",
    duration:
      "Disabled unless you choose to allow analytics. Specific durations will be documented when an analytics service is enabled.",
  },
];


export default function CookiesPage() {
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
                Cookie Policy
              </h1>

              <p className={styles.lead}>
                This policy explains how AIGO-OS uses cookies and similar
                technologies on this website, what they are used for, and
                the choices available to you.
              </p>

              <p className={styles.updated}>
                Last updated: 27 August 2026
              </p>
            </div>


            <aside className={styles.heroAside}>
              <div className={styles.asideIcon}>
                <Settings2
                  size={22}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <span>
                Your choices
              </span>

              <strong>
                Optional technologies stay under your control.
              </strong>

              <p>
                You can accept or reject optional analytics technologies
                and revisit your choice at any time.
              </p>

              <div className={styles.settingsAction}>
                <CookieSettingsButton />
              </div>
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

              <nav aria-label="Cookie Policy sections">
                <a href="#about">
                  About this policy
                </a>

                <a href="#technologies">
                  Cookies and similar technologies
                </a>

                <a href="#current-use">
                  What AIGO-OS currently uses
                </a>

                <a href="#necessary">
                  Necessary technologies
                </a>

                <a href="#analytics">
                  Analytics
                </a>

                <a href="#choices">
                  Your choices
                </a>

                <a href="#third-parties">
                  Third-party technologies
                </a>

                <a href="#changes">
                  Changes to this policy
                </a>
              </nav>
            </aside>


            <div className={styles.policyContent}>
              <section
                id="about"
                className={styles.policyBlock}
              >
                <p className={styles.sectionLabel}>
                  About this policy
                </p>

                <h2>
                  How this website uses storage and access technologies.
                </h2>

                <p>
                  AIGO-OS uses a limited number of technologies to operate
                  this website, remember privacy choices and support secure
                  access to services where required.
                </p>

                <p>
                  Some technologies are necessary for a service you request
                  or for essential website security and operation. Other
                  technologies, such as optional analytics, are not enabled
                  through our consent system unless you choose to allow them.
                </p>
              </section>


              <section
                id="technologies"
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
                      The rules apply to more than traditional cookies.
                    </h2>
                  </div>
                </div>

                <p>
                  Cookies are small pieces of information that a website
                  can store through your browser. Websites may also use
                  similar technologies, including local storage and other
                  browser storage mechanisms.
                </p>

                <p>
                  This policy uses the term &quot;cookies and similar
                  technologies&quot; to describe these technologies together
                  where appropriate.
                </p>
              </section>


              <section
                id="current-use"
                className={styles.policyBlock}
              >
                <p className={styles.sectionLabel}>
                  Current use
                </p>

                <h2>
                  Technologies used by the AIGO-OS website.
                </h2>

                <p>
                  The table below describes the current categories of
                  storage and access technologies relevant to this website.
                  We will update this policy when our use of these
                  technologies materially changes.
                </p>


                <div className={styles.technologyTable}>
                  {currentTechnologies.map((item) => (
                    <article
                      key={item.name}
                      className={styles.technologyRow}
                    >
                      <div className={styles.technologyTop}>
                        <strong>
                          {item.name}
                        </strong>

                        <span>
                          {item.category}
                        </span>
                      </div>

                      <dl>
                        <div>
                          <dt>
                            Technology
                          </dt>

                          <dd>
                            {item.technology}
                          </dd>
                        </div>

                        <div>
                          <dt>
                            Purpose
                          </dt>

                          <dd>
                            {item.purpose}
                          </dd>
                        </div>

                        <div>
                          <dt>
                            Duration
                          </dt>

                          <dd>
                            {item.duration}
                          </dd>
                        </div>
                      </dl>
                    </article>
                  ))}
                </div>
              </section>


              <section
                id="necessary"
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
                      Necessary
                    </p>

                    <h2>
                      Technologies required for core functionality.
                    </h2>
                  </div>
                </div>

                <p>
                  Necessary technologies support functions such as
                  remembering your privacy choice, providing services you
                  request, protecting access and maintaining website
                  security.
                </p>

                <div className={styles.callout}>
                  <Check
                    size={19}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <p>
                    Necessary technologies are not controlled by the
                    optional analytics switch because disabling them may
                    prevent requested functionality or security controls
                    from operating correctly.
                  </p>
                </div>
              </section>


              <section
                id="analytics"
                className={styles.policyBlock}
              >
                <div className={styles.blockHeading}>
                  <BarChart3
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Analytics
                    </p>

                    <h2>
                      Optional analytics require your choice.
                    </h2>
                  </div>
                </div>

                <p>
                  AIGO-OS provides an Analytics preference in its privacy
                  controls so optional website measurement can remain
                  disabled unless you choose to allow it.
                </p>

                <p>
                  At the time of this policy update, the consent layer does
                  not itself activate an analytics provider merely because
                  the Analytics option exists. If AIGO-OS enables an
                  analytics service, that service must respect the
                  applicable consent choice and this policy will be updated
                  with relevant provider and duration information.
                </p>
              </section>


              <section
                id="choices"
                className={styles.policyBlock}
              >
                <p className={styles.sectionLabel}>
                  Your choices
                </p>

                <h2>
                  Accept, reject or change your preferences.
                </h2>

                <p>
                  When the consent panel is presented, you can accept
                  optional technologies, reject non-essential technologies,
                  or open the preference controls to make a more specific
                  choice.
                </p>

                <p>
                  Your preference is stored in your browser so the website
                  can remember it. You can reopen the preference controls
                  at any time using the Cookie settings control in the
                  website footer.
                </p>

                <div className={styles.managePanel}>
                  <div>
                    <strong>
                      Review your current preferences
                    </strong>

                    <p>
                      Changing your mind later is part of the same consent
                      process. You do not need to clear your browser data
                      just to update your AIGO-OS preference.
                    </p>
                  </div>

                  <div className={styles.manageButton}>
                    <CookieSettingsButton />
                  </div>
                </div>

                <p>
                  You can also use your browser settings to block or delete
                  cookies and other stored website data. Browser controls
                  may affect functionality on websites that rely on
                  necessary storage.
                </p>
              </section>


              <section
                id="third-parties"
                className={styles.policyBlock}
              >
                <p className={styles.sectionLabel}>
                  Third parties
                </p>

                <h2>
                  Services used to operate website functionality.
                </h2>

                <p>
                  Some website functions may rely on third-party technology,
                  for example authentication, security, infrastructure or
                  communication services. Where those services store or
                  access information on your device, their use must be
                  assessed according to its purpose and the applicable
                  privacy requirements.
                </p>

                <p>
                  AIGO-OS does not treat a third-party technology as
                  necessary simply because it is provided by a third party.
                  The purpose for which the technology is used determines
                  how it is handled.
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
                  We will update this policy when our use changes.
                </h2>

                <p>
                  We may update this Cookie Policy when technologies,
                  providers, purposes or legal requirements change.
                </p>

                <p>
                  Where a change materially affects the choices previously
                  provided to you, AIGO-OS may update the consent version
                  and ask you to review your preferences again.
                </p>
              </section>
            </div>
          </div>
        </PublicContainer>
      </section>
    </main>
  );
}

