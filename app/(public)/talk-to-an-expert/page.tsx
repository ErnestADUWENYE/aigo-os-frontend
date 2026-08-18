import {
  Building2,
  Mail,
  MessageSquareText,
  Send,
  UserRound,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


export default function TalkToAnExpertPage() {
  return (
    <main>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Talk to an Expert
              </p>

              <h1>
                Bring us the AI question your organisation needs to answer.
              </h1>

              <p className={styles.lead}>
                Tell us what you are trying to understand, govern or assess.
                We will use the context you provide to make the conversation
                relevant to your AI environment and business priorities.
              </p>
            </div>

            <aside className={styles.heroAside}>
              <span>
                A focused conversation
              </span>

              <p>
                This is for teams exploring AI governance, AI agents,
                enterprise context, business impact or how AIGO-OS may
                fit into their operating environment.
              </p>
            </aside>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.formSection}>
        <PublicContainer>
          <div className={styles.formLayout}>
            <aside className={styles.formIntro}>
              <p className={styles.sectionLabel}>
                Your context
              </p>

              <h2>
                Start with the problem, not the product.
              </h2>

              <p>
                You do not need to arrive with a defined AIGO-OS use case.
                Give us the question, constraint or operating challenge you
                are working through.
              </p>

              <div className={styles.expertNote}>
                <MessageSquareText
                  size={21}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <p>
                  The more context you provide, the less time the conversation
                  needs to spend establishing the basics.
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
                  <label htmlFor="topic">
                    What would you like to discuss?
                    <span aria-hidden="true">*</span>
                  </label>

                  <div className={styles.selectWrap}>
                    <select
                      id="topic"
                      name="topic"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select a topic
                      </option>

                      <option value="ai-governance">
                        AI governance
                      </option>

                      <option value="ai-agents">
                        AI agents
                      </option>

                      <option value="business-impact">
                        AI business impact
                      </option>

                      <option value="enterprise-visibility">
                        Enterprise AI visibility
                      </option>

                      <option value="implementation">
                        Implementation and integration
                      </option>

                      <option value="operating-model">
                        Governance operating model
                      </option>

                      <option value="other">
                        Other
                      </option>
                    </select>
                  </div>
                </div>


                <div className={styles.field}>
                  <label htmlFor="question">
                    What question are you trying to answer?
                    <span aria-hidden="true">*</span>
                  </label>

                  <textarea
                    id="question"
                    name="question"
                    rows={5}
                    placeholder="Describe the question, decision or governance challenge you are working through."
                    required
                  />
                </div>


                <div className={styles.field}>
                  <label htmlFor="environment">
                    Anything useful to know about your current AI environment?
                  </label>

                  <textarea
                    id="environment"
                    name="environment"
                    rows={4}
                    placeholder="For example: AI agents, models, enterprise platforms, governance processes, current tooling or business areas involved."
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
                      Talk to an Expert
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
