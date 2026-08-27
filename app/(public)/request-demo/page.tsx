"use client";

import Link from "next/link";
import {
  Building2,
  Mail,
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


export default function RequestDemoPage() {
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

        role:
          String(formData.get("role") ?? "").trim(),

        demoFocus:
          String(formData.get("demoFocus") ?? "").trim(),

        objective:
          String(formData.get("objective") ?? "").trim(),

        question:
          String(formData.get("question") ?? "").trim(),

        environment:
          String(formData.get("environment") ?? "").trim(),
      };


      const response = await fetch(
        "/api/request-demo",
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
          "We could not send your demo request."
        );
      }


      form.reset();

      setSubmitState("success");

      setMessage(
        "Thank you. Your demo request has been sent to AIGO-OS."
      );
    }
    catch (error) {
      console.error(
        "Request Demo submission failed:",
        error
      );

      setSubmitState("error");

      setMessage(
        "We could not send your demo request. Please try again."
      );
    }
  }


  const isSubmitting =
    submitState === "submitting";


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
                See AIGO-OS around the questions that matter to your organisation.
              </h1>

              <p className={styles.lead}>
                Tell us what you need to understand, govern or assess.
                We will use that context to focus the AIGO-OS demonstration
                on the problems, relationships and business questions that
                matter to your organisation.
              </p>
            </div>


            <aside className={styles.heroAside}>
              <span>
                One platform. Your focus.
              </span>

              <strong>
                A demonstration built around your priorities.
              </strong>

              <p>
                Explore Governance Intelligence, Business Impact Intelligence,
                how they work together, or the broader AIGO-OS platform.
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
                Tell us what you need to see.
              </h2>

              <p>
                You do not need to understand the AIGO-OS architecture before
                requesting a demonstration. Tell us what matters to your
                organisation and we will focus the session accordingly.
              </p>

              <div className={styles.demoNote}>
                <strong>
                  A useful demo starts with your question.
                </strong>

                <p>
                  Give us the business, governance or operating context behind
                  your interest. That helps us demonstrate AIGO-OS through a
                  relevant scenario rather than a generic product tour.
                </p>
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
                  <label htmlFor="demoFocus">
                    What should we focus on during the demo?
                    <span aria-hidden="true">*</span>
                  </label>

                  <div className={styles.selectWrap}>
                    <select
                      id="demoFocus"
                      name="demoFocus"
                      defaultValue=""
                      required
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select a focus
                      </option>

                      <option value="governance-intelligence">
                        Governance Intelligence
                      </option>

                      <option value="business-impact-intelligence">
                        Business Impact Intelligence
                      </option>

                      <option value="connected-intelligence">
                        How Govern and Impact work together
                      </option>

                      <option value="platform-overview">
                        Full AIGO-OS platform overview
                      </option>

                      <option value="unsure">
                        Not sure yet
                      </option>
                    </select>
                  </div>
                </div>


                <div className={styles.field}>
                  <label htmlFor="objective">
                    What are you trying to understand or improve?
                    <span aria-hidden="true">*</span>
                  </label>

                  <div className={styles.selectWrap}>
                    <select
                      id="objective"
                      name="objective"
                      defaultValue=""
                      required
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select the closest fit
                      </option>

                      <option value="governance-state">
                        Understand AI governance state
                      </option>

                      <option value="controls-coverage">
                        Understand policies, controls and governance coverage
                      </option>

                      <option value="ownership-accountability">
                        Clarify ownership and accountability
                      </option>

                      <option value="governance-change-impact">
                        Understand governance impact when things change
                      </option>

                      <option value="business-impact">
                        Understand AI business impact
                      </option>

                      <option value="dependencies">
                        Understand business and service dependencies
                      </option>

                      <option value="change-impact">
                        Understand the business impact of change
                      </option>

                      <option value="incident-impact">
                        Understand the business impact of incidents
                      </option>

                      <option value="enterprise-context">
                        Connect AI activity with enterprise context
                      </option>

                      <option value="relationships">
                        Understand relationships across the AI environment
                      </option>

                      <option value="other">
                        Something else
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
                    placeholder="Tell us what you are trying to understand, improve or make a decision about."
                    required
                  />
                </div>


                <div className={styles.field}>
                  <label htmlFor="environment">
                    Anything useful to know about your current environment?
                  </label>

                  <textarea
                    id="environment"
                    name="environment"
                    rows={4}
                    placeholder="For example: AI systems, models, AI-enabled applications, enterprise platforms, governance processes or business services involved."
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
                    Please do not include confidential, regulated or sensitive
                    information in this form. See our{" "}
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
                        : "Request a Demo"}
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


