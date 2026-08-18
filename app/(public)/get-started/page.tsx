import {
  Building2,
  Mail,
  Send,
  UserRound,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

export default function GetStartedPage() {
  return (
    <main>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Get Started
              </p>

              <h1>
                Start a commercial conversation about AIGO-OS.
              </h1>

              <p className={styles.lead}>
                Tell us about your organisation, what you are evaluating and
                how you expect AIGO-OS to be used. We can discuss licensing,
                deployment, procurement and the commercial path from
                evaluation to adoption.
              </p>
            </div>

            <aside className={styles.heroAside}>
              <span>
                Enterprise commercial enquiries
              </span>

              <strong>
                Pricing depends on scope.
              </strong>

              <p>
                AIGO-OS does not currently use a public self-service pricing
                model. Commercial terms can reflect product scope, deployment,
                organisational requirements and intended use.
              </p>
            </aside>
          </div>
        </PublicContainer>
      </section>

      <section className={styles.salesSection}>
        <PublicContainer>
          <div className={styles.salesLayout}>
            <aside className={styles.salesIntro}>
              <p className={styles.sectionLabel}>
                Commercial enquiry
              </p>

              <h2>
                Tell us what you are considering.
              </h2>

              <p>
                Give us enough information to understand the likely scope of
                the conversation. You do not need to have procurement or
                deployment fully defined yet.
              </p>

              <div className={styles.scopeNote}>
                <strong>
                  This page is for commercial discussions.
                </strong>

                <p>
                  Product demonstrations and exploratory governance
                  conversations have their own dedicated routes.
                </p>
              </div>
            </aside>

            <div className={styles.formCard}>
              <form className={styles.form}>
                <div className={styles.twoColumn}>
                  <div className={styles.field}>
                    <label htmlFor="firstName">
                      First name
                      <span aria-hidden="true">*</span>
                    </label>

                    <div className={styles.inputWrap}>
                      <UserRound
                        size={17}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />

                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="lastName">
                      Last name
                      <span aria-hidden="true">*</span>
                    </label>

                    <div className={styles.inputWrap}>
                      <UserRound
                        size={17}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />

                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">
                    Work email
                    <span aria-hidden="true">*</span>
                  </label>

                  <div className={styles.inputWrap}>
                    <Mail
                      size={17}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className={styles.twoColumn}>
                  <div className={styles.field}>
                    <label htmlFor="company">
                      Company or organisation
                      <span aria-hidden="true">*</span>
                    </label>

                    <div className={styles.inputWrap}>
                      <Building2
                        size={17}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />

                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="role">
                      Your role
                    </label>

                    <input
                      id="role"
                      name="role"
                      type="text"
                      className={styles.plainInput}
                      autoComplete="organization-title"
                      placeholder="e.g. CIO, Procurement, AI Governance Lead"
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="interest">
                    What are you interested in?
                    <span aria-hidden="true">*</span>
                  </label>

                  <div className={styles.selectWrap}>
                    <select
                      id="interest"
                      name="interest"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select an area
                      </option>

                      <option value="govern">
                        AIGO-OS Govern
                      </option>

                      <option value="impact">
                        AIGO-OS Impact
                      </option>

                      <option value="both">
                        Govern and Impact
                      </option>

                      <option value="platform">
                        AIGO-OS platform capabilities
                      </option>

                      <option value="unsure">
                        Not sure yet
                      </option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="commercialTopic">
                    What would you like to discuss?
                    <span aria-hidden="true">*</span>
                  </label>

                  <div className={styles.selectWrap}>
                    <select
                      id="commercialTopic"
                      name="commercialTopic"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select a commercial topic
                      </option>

                      <option value="pricing">
                        Pricing and licensing
                      </option>

                      <option value="procurement">
                        Procurement
                      </option>

                      <option value="deployment">
                        Deployment scope
                      </option>

                      <option value="evaluation">
                        Evaluation to adoption
                      </option>

                      <option value="enterprise">
                        Enterprise rollout
                      </option>

                      <option value="contracting">
                        Contracting and commercial terms
                      </option>

                      <option value="other">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="timeline">
                    Expected timeline
                  </label>

                  <div className={styles.selectWrap}>
                    <select
                      id="timeline"
                      name="timeline"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a timeline
                      </option>

                      <option value="now">
                        Evaluating now
                      </option>

                      <option value="quarter">
                        Within 3 months
                      </option>

                      <option value="six-months">
                        Within 6 months
                      </option>

                      <option value="year">
                        Within 12 months
                      </option>

                      <option value="planning">
                        Early planning
                      </option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">
                    Tell us about the commercial context
                    <span aria-hidden="true">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Describe what you are evaluating, expected scope, deployment considerations, procurement requirements or anything else useful for the conversation."
                    required
                  />
                </div>

                <div className={styles.formFooter}>
                  <p className={styles.privacy}>
                    Please do not include confidential, regulated or sensitive
                    information in this form.
                  </p>

                  <button
                    type="submit"
                    className={styles.submitButton}
                  >
                    <span>
                      Start the conversation
                    </span>

                    <Send
                      size={17}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </PublicContainer>
      </section>
    </main>
  );
}
