import {
  Building2,
  Mail,
  MessageSquareText,
  Send,
  UserRound,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Contact AIGO-OS
              </p>

              <h1>
                Get in touch.
              </h1>

              <p className={styles.intro}>
                Have a general question about AIGO-OS, the company,
                partnerships or something else? Send us a message and
                give us enough context to route it appropriately.
              </p>
            </div>

            <div className={styles.heroAside}>
              <span>
                General enquiries
              </span>

              <p>
                This form is for enquiries that do not belong to a
                dedicated product evaluation, demo or commercial route.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.contactSection}>
        <PublicContainer>
          <div className={styles.contactLayout}>
            <aside className={styles.formIntro}>
              <p className={styles.sectionLabel}>
                Contact us
              </p>

              <h2>
                Tell us what you need.
              </h2>

              <p>
                Give us a little context about who you are and what you
                would like to discuss. The more specific the message,
                the easier it is to direct it to the right place.
              </p>

              <div className={styles.contextNote}>
                <MessageSquareText
                  size={20}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>
                  For product evaluations, demos or commercial discussions,
                  use the dedicated AIGO-OS pages for those conversations.
                </span>
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


                <div className={styles.field}>
                  <label htmlFor="company">
                    Company or organisation
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
                    />
                  </div>
                </div>


                <div className={styles.field}>
                  <label htmlFor="topic">
                    What would you like to contact us about?
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

                      <option value="general">
                        General enquiry
                      </option>

                      <option value="partnerships">
                        Partnerships
                      </option>

                      <option value="media">
                        Media and press
                      </option>

                      <option value="corporate">
                        Company / corporate
                      </option>

                      <option value="website">
                        Website feedback
                      </option>

                      <option value="other">
                        Other
                      </option>
                    </select>
                  </div>
                </div>


                <div className={styles.field}>
                  <label htmlFor="message">
                    Tell us more
                    <span aria-hidden="true">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    placeholder="Tell us what you would like to discuss and include any context that would help us understand your enquiry."
                    required
                  />
                </div>


                <div className={styles.formFooter}>
                  <p className={styles.privacy}>
                    By submitting this form, you are providing information
                    so AIGO-OS can respond to your enquiry. Please do not
                    include confidential or sensitive information.
                  </p>

                  <button
                    type="submit"
                    className={styles.submitButton}
                  >
                    <span>
                      Send message
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
    </>
  );
}
