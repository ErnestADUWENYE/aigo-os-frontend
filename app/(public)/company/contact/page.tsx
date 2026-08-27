"use client";

import Link from "next/link";
import {
  Building2,
  Mail,
  MessageSquareText,
  Send,
  UserRound,
} from "lucide-react";

import {
  FormEvent,
  useState,
} from "react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


type SubmitState =
  | "idle"
  | "submitting"
  | "success"
  | "error";


export default function ContactPage() {
  const [submitState, setSubmitState] =
    useState<SubmitState>("idle");

  const [message, setMessage] =
    useState("");


  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;

    setSubmitState("submitting");
    setMessage("");

    try {
      const formData = new FormData(form);

      const payload = {
        firstName:
          String(formData.get("firstName") ?? "").trim(),

        lastName:
          String(formData.get("lastName") ?? "").trim(),

        email:
          String(formData.get("email") ?? "").trim(),

        company:
          String(formData.get("company") ?? "").trim(),

        topic:
          String(formData.get("topic") ?? "").trim(),

        message:
          String(formData.get("message") ?? "").trim(),
      };


      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(payload),
        }
      );


      const result = await response.json();


      if (!response.ok) {
        throw new Error(
          result?.error ||
          "We could not send your message."
        );
      }


      form.reset();

      setSubmitState("success");

      setMessage(
        "Thank you. Your message has been sent to AIGO-OS."
      );
    }
    catch (error) {
      console.error(
        "Contact submission failed:",
        error
      );

      setSubmitState("error");

      setMessage(
        "We could not send your message. Please try again."
      );
    }
  }


  const isSubmitting =
    submitState === "submitting";


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
                Start the right conversation.
              </h1>

              <p className={styles.intro}>
                Have a general question about AIGO-OS, the company,
                partnerships, media or something else? Send us a message
                and give us enough context to respond appropriately.
              </p>
            </div>


            <div className={styles.heroAside}>
              <span>
                General enquiries
              </span>

              <strong>
                For conversations that do not need a dedicated route.
              </strong>

              <p>
                Product demonstrations and focused expert discussions have
                their own pages. Use this form for broader company enquiries.
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
                would like to discuss. A clear message helps us understand
                the enquiry and respond appropriately.
              </p>

              <div className={styles.contextNote}>
                <MessageSquareText
                  size={20}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>
                  For product evaluation, request a demo. For a focused
                  discussion about a specific enterprise problem, use
                  Talk to an Expert.
                </span>
              </div>
            </aside>


            <div className={styles.formCard}>
              <form
                className={styles.form}
                onSubmit={handleSubmit}
              >
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
                      <option
                        value=""
                        disabled
                      >
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
                        Company and corporate
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


                {message ? (
                  <div
                    className={
                      submitState === "success"
                        ? styles.formSuccess
                        : styles.formError
                    }
                    role={
                      submitState === "error"
                        ? "alert"
                        : "status"
                    }
                    aria-live="polite"
                  >
                    {message}
                  </div>
                ) : null}


                <div className={styles.formFooter}>
                  <p className={styles.privacy}>
                    By submitting this form, you are providing information
                    so AIGO-OS can respond to your enquiry. Please do not
                    include confidential or sensitive information. See our{" "}
                    <Link href="/privacy">
                      Privacy Policy
                    </Link>
                    {" "}for information about how AIGO-OS handles personal information.
                  </p>

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    <span>
                      {isSubmitting
                        ? "Sending..."
                        : "Send message"}
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


