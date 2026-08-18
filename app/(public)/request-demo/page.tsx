import {
  Building2,
  Mail,
  Send,
  UserRound,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


export default function RequestDemoPage() {
  return (
    <main>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Request a Demo
              </p>

              <h1>
                See AIGO-OS around the problem you need to solve.
              </h1>

              <p className={styles.lead}>
                Tell us what you want to understand or govern. We will use
                that context to make the demonstration relevant to your
                enterprise environment rather than give you a generic
                product walkthrough.
              </p>
            </div>

            <aside className={styles.heroAside}>
              <span>
                Your demo
              </span>

              <strong>
                Built around your use case.
              </strong>

              <p>
                A demonstration can focus on AIGO-OS Govern, AIGO-OS Impact,
                or how the platform connects AI activity with enterprise
                context.
              </p>
            </aside>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.demoSection}>
        <PublicContainer>
          <div className={styles.demoLayout}>
            <aside className={styles.demoIntro}>
              <p className={styles.sectionLabel}>
                Demo request
              </p>

              <h2>
                Show us what matters to you.
              </h2>

              <p>
                Give us enough context to understand what you would like
                the demonstration to focus on.
              </p>

              <div className={styles.demoNote}>
                <strong>
                  A useful demo starts with a real question.
                </strong>

                <p>
                  You do not need to know which AIGO-OS capability you need.
                  Describe the governance or business-impact problem and we
                  can structure the session around it.
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
                      placeholder="e.g. CIO, AI Governance Lead"
                    />
                  </div>
                </div>


                <div className={styles.field}>
                  <label htmlFor="product">
                    What would you like to see?
                    <span aria-hidden="true">*</span>
                  </label>

                  <div className={styles.selectWrap}>
                    <select
                      id="product"
                      name="product"
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
                        Govern and Impact together
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
                  <label htmlFor="useCase">
                    What problem or use case should the demo focus on?
                    <span aria-hidden="true">*</span>
                  </label>

                  <div className={styles.selectWrap}>
                    <select
                      id="useCase"
                      name="useCase"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select a use case
                      </option>

                      <option value="agent-accountability">
                        AI agent accountability
                      </option>

                      <option value="agent-access">
                        AI agent access authority
                      </option>

                      <option value="agent-sprawl">
                        AI agent sprawl
                      </option>

                      <option value="governance-priorities">
                        AI governance priorities
                      </option>

                      <option value="dependencies">
                        AI business dependencies
                      </option>

                      <option value="change-impact">
                        AI change business impact
                      </option>

                      <option value="incident-impact">
                        AI incident business impact
                      </option>

                      <option value="enterprise-context">
                        Enterprise AI context and visibility
                      </option>

                      <option value="other">
                        Other
                      </option>
                    </select>
                  </div>
                </div>


                <div className={styles.field}>
                  <label htmlFor="question">
                    What would make this demo useful for you?
                    <span aria-hidden="true">*</span>
                  </label>

                  <textarea
                    id="question"
                    name="question"
                    rows={6}
                    placeholder="Tell us the question, challenge or decision you would like the demonstration to address."
                    required
                  />
                </div>


                <div className={styles.field}>
                  <label htmlFor="environment">
                    Tell us about your current AI environment
                  </label>

                  <textarea
                    id="environment"
                    name="environment"
                    rows={4}
                    placeholder="For example: AI agents, models, AI-enabled platforms, existing governance tooling or relevant enterprise systems."
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
                      Request a Demo
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
