"use client";

import { useState } from "react";

import styles from "@/styles/page01-home.module.css";

type ScenarioKey = "routine" | "material" | "restricted";

const scenarios = {
  routine: {
    label: "Routine",
    amount: "$1,200",
    supplier: "Established supplier",
    authority: "$50,000",
    process: "Routine procurement",
    significance: "ROUTINE",
    governance: "PROCEED",
    explanation:
      "The transaction is within delegated authority, follows a routine business process and does not currently require additional human intervention.",
  },

  material: {
    label: "Material",
    amount: "$48,200",
    supplier: "Established supplier",
    authority: "$50,000",
    process: "Material payment",
    significance: "MATERIAL",
    governance: "ADDITIONAL CONTROL",
    explanation:
      "The action remains within nominal authority, but its financial consequence and business materiality require stronger governance before execution.",
  },

  restricted: {
    label: "Outside Authority",
    amount: "$78,500",
    supplier: "New supplier",
    authority: "$50,000",
    process: "Non-routine payment",
    significance: "HIGH",
    governance: "HUMAN AUTHORITY REQUIRED",
    explanation:
      "The requested action exceeds delegated machine authority and combines elevated financial exposure with a non-routine business context.",
  },
} satisfies Record<
  ScenarioKey,
  {
    label: string;
    amount: string;
    supplier: string;
    authority: string;
    process: string;
    significance: string;
    governance: string;
    explanation: string;
  }
>;

export function Page01BusinessContext() {
  const [active, setActive] = useState<ScenarioKey>("routine");

  const scenario = scenarios[active];

  return (
    <section className={styles.contextSection}>
      <div className={styles.sectionShell}>
        <div className={styles.sectionIntro}>
          <p className={styles.lightEyebrow}>
            BUSINESS CONTEXT
          </p>

          <h2 className={styles.sectionTitle}>
            The same AI activity can mean something very different
            to the business.
          </h2>

          <p className={styles.sectionLead}>
            A technically permitted action is not automatically an
            appropriate business action. AIGO-OS evaluates who is
            acting, what authority exists, what is affected, the
            potential consequence and the governance conditions that
            apply at that moment.
          </p>
        </div>

        <div className={styles.contextDemo}>
          <div className={styles.demoControls}>
            <span className={styles.demoLabel}>
              Change the business context
            </span>

            <div
              className={styles.scenarioButtons}
              role="group"
              aria-label="Business context scenarios"
            >
              {(Object.keys(scenarios) as ScenarioKey[]).map((key) => (
                <button
                  className={
                    active === key
                      ? styles.scenarioButtonActive
                      : styles.scenarioButton
                  }
                  key={key}
                  onClick={() => setActive(key)}
                  type="button"
                >
                  {scenarios[key].label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.activityCard}>
            <div className={styles.activityHeading}>
              <div>
                <span className={styles.demoLabel}>
                  AI ACTIVITY
                </span>

                <strong>
                  Create supplier payment
                </strong>
              </div>

              <span className={styles.liveStatus}>
                Context evaluated
              </span>
            </div>

            <dl className={styles.contextGrid}>
              <div>
                <dt>Amount</dt>
                <dd>{scenario.amount}</dd>
              </div>

              <div>
                <dt>Supplier</dt>
                <dd>{scenario.supplier}</dd>
              </div>

              <div>
                <dt>Machine authority</dt>
                <dd>{scenario.authority}</dd>
              </div>

              <div>
                <dt>Business process</dt>
                <dd>{scenario.process}</dd>
              </div>
            </dl>

            <div className={styles.contextFlow}>
              <div className={styles.contextFlowStage}>
                <span>Activity</span>
                <strong>Create payment</strong>
              </div>

              <div
                className={styles.flowConnector}
                aria-hidden="true"
              />

              <div className={styles.contextFlowStage}>
                <span>Business Significance</span>
                <strong>{scenario.significance}</strong>
              </div>

              <div
                className={styles.flowConnector}
                aria-hidden="true"
              />

              <div className={styles.contextFlowStage}>
                <span>Governance</span>
                <strong>{scenario.governance}</strong>
              </div>
            </div>

            <p className={styles.contextExplanation}>
              {scenario.explanation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
