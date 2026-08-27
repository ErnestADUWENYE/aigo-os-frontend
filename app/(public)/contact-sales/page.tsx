"use client";

import Link from "next/link";
import {
  Building2,
  BriefcaseBusiness,
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


export default function ContactSalesPage() {
  const [submitState, setSubmitState] =
    useState<SubmitState>("idle");

  const [statusMessage, setStatusMessage] =
    useState("");


  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;

    setSubmitState("submitting");
    setStatusMessage("");

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

        commercialInterest:
          String(
            formData.get("commercialInterest") ?? ""
          ).trim(),

        stage:
          String(formData.get("stage") ?? "").trim(),

        deployment:
          String(formData.get("deployment") ?? "").trim(),

        message:
          String(formData.get("message") ?? "").trim(),
      };


      const response = await fetch(
        "/api/contact-sales",
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
          "We could not send your sales enquiry."
        );
      }


      form.reset();

      setSubmitState("success");

      setStatusMessage(
        "Thank you. Your sales enquiry has been sent to AIGO-OS."
      );
    }
    catch (error) {
      console.error(
        "Contact Sales submission failed:",
        error
      );

      setSubmitState("error");

      setStatusMessage(
        "We could not send your sales enquiry. Please try again."
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
                Contact Sales
              </p>

              <h1>
                Discuss AIGO-OS for your organisation.
              </h1>

              <p className={styles.lead}>
                Talk with us about commercial evaluation, procurement,
                licensing, deployment requirements and bringing AIGO-OS
                into your organisation.
              </p>
            </div>


            <aside className={styles.heroAside}>
              <span>
                Enterprise conversation
              </span>

              <strong>
                Move from evaluation to commercial planning.
              </strong>

              <p>
                Use this route when your questions involve purchasing,
                procurement, deployment or the commercial requirements
                for adopting AIGO-OS.
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
                Tell us where the conversation stands.
              </h2>

              <p>
                Give us enough context to understand your organisation,
                your commercial interest and where you are in the
                evaluation or procurement process.
              </p>


              <div className={styles.salesContext}>
                <div>
                  <span>
                    Evaluate
                  </span>

                  <strong>
                    Commercial fit
                  </strong>
                </div>

                <div>
                  <span>
                    Plan
                  </span>

                  <strong>
                    Procurement and licensing
                  </strong>
                </div>

                <div>
                  <span>
                    Prepare
                  </span>

                  <strong>
                    Deployment requirements
                  </strong>
                </div>
              </div>


              <p className={styles.routeNote}>
                If you are still exploring what AIGO-OS does or want
                to see the platform first, Request a Demo is the
                better starting point.
              </p>
            </aside>


            <div className={styles.formCard}>
              <div className={styles.formHeading}>
                <span>
                  Contact Sales
                </span>

                <h3>
                  Start a commercial conversation.
                </h3>

                <p>
                  Tell us about your organisation and what you need
                  to discuss.
                </p>
              </div>


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

                    <div className={styles.inputWrap}>
                      <BriefcaseBusiness
                        size={17}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />

                      <input
                        id="role"
                        name="role"
                        type="text"
                        autoComplete="organization-title"
                        placeholder="e.g. CIO, Procurement Lead"
                      />
                    </div>
                  </div>
                </div>


                <div className={styles.field}>
                  <label htmlFor="commercialInterest">
                    What would you like to discuss?
                    <span aria-hidden="true">*</span>
                  </label>

                  <div className={styles.selectWrap}>
                    <select
                      id="commercialInterest"
                      name="commercialInterest"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select a commercial topic
                      </option>

                      <option value="commercial-evaluation">
                        Commercial evaluation
                      </option>

                      <option value="pricing-licensing">
                        Pricing and licensing
                      </option>

                      <option value="procurement">
                        Procurement
                      </option>

                      <option value="deployment">
                        Deployment requirements
                      </option>

                      <option value="enterprise-adoption">
                        Enterprise adoption
                      </option>

                      <option value="security-due-diligence">
                        Security or technical due diligence
                      </option>

                      <option value="other">
                        Other commercial enquiry
                      </option>
                    </select>
                  </div>
                </div>


                <div className={styles.twoColumn}>
                  <div className={styles.field}>
                    <label htmlFor="stage">
                      Where are you in the process?
                      <span aria-hidden="true">*</span>
                    </label>

                    <div className={styles.selectWrap}>
                      <select
                        id="stage"
                        name="stage"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Select a stage
                        </option>

                        <option value="exploring">
                          Exploring options
                        </option>

                        <option value="evaluating">
                          Actively evaluating
                        </option>

                        <option value="business-case">
                          Building a business case
                        </option>

                        <option value="procurement-planning">
                          Planning procurement
                        </option>

                        <option value="procurement">
                          In procurement
                        </option>

                        <option value="deployment-planning">
                          Planning deployment
                        </option>

                        <option value="unsure">
                          Not sure yet
                        </option>
                      </select>
                    </div>
                  </div>


                  <div className={styles.field}>
                    <label htmlFor="deployment">
                      Deployment consideration
                    </label>

                    <div className={styles.selectWrap}>
                      <select
                        id="deployment"
                        name="deployment"
                        defaultValue=""
                      >
                        <option value="">
                          Not specified
                        </option>

                        <option value="cloud">
                          Cloud
                        </option>

                        <option value="private-cloud">
                          Private cloud
                        </option>

                        <option value="on-premises">
                          On premises
                        </option>

                        <option value="hybrid">
                          Hybrid
                        </option>

                        <option value="undecided">
                          Still evaluating
                        </option>
                      </select>
                    </div>
                  </div>
                </div>


                <div className={styles.field}>
                  <label htmlFor="message">
                    What should we know about your requirements?
                    <span aria-hidden="true">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    placeholder="Tell us about the commercial, procurement, deployment or organisational requirements you would like to discuss."
                    required
                  />
                </div>


                {statusMessage ? (
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
                    {statusMessage}
                  </div>
                ) : null}


                <div className={styles.formFooter}>
                  <p className={styles.privacy}>
                    Please do not include confidential, regulated or
                    sensitive information in this form. See our{" "}
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
                        : "Contact Sales"}
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


