"use client";

import { useEffect, useState } from "react";

const governanceStages = [
  {
    label: "ACTOR",
    title: "Establish governance identity",
    body:
      "Resolve which governed AI actor is involved, its purpose, ownership, relationships and current operating context.",
  },
  {
    label: "AUTHORITY",
    title: "Determine effective authority",
    body:
      "Evaluate what the actor may do, which resources are in scope, which conditions apply and where human authority is required.",
  },
  {
    label: "SIGNIFICANCE",
    title: "Interpret business significance",
    body:
      "Connect the activity to materiality, urgency, business impact, affected stakeholders, capabilities and processes.",
  },
  {
    label: "RISK",
    title: "Evaluate governance-relevant risk",
    body:
      "Interpret relevant risk signals in the context of the actor, authority, dependencies and business significance.",
  },
  {
    label: "DECISION",
    title: "Make an explainable governance decision",
    body:
      "Bring governance context together to determine whether the appropriate outcome is allow, deny, review, escalate or suspend.",
  },
  {
    label: "EVIDENCE",
    title: "Preserve the decision context",
    body:
      "Keep the actor, authority, risk, policy, decision and resulting outcome connected for assurance and reconstruction.",
  },
];

const decisionOutcomes = [
  "ALLOW",
  "DENY",
  "REVIEW REQUIRED",
  "ESCALATE",
  "SUSPEND",
];

export function AigoActionDecisionDemo() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % governanceStages.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  const stage = governanceStages[active];

  return (
    <section className="aigo-decision-demo">
      <div className="public-section-shell">
        <div className="aigo-decision-demo__heading">
          <div>
            <span>GOVERNANCE DECISIONING</span>

            <h2>
              A decision should reflect more than a rule match.
            </h2>
          </div>

          <p>
            AIGO-OS brings identity, authority, business significance,
            risk, policy and current context together so governance
            decisions remain explainable and connected to evidence.
          </p>
        </div>

        <div className="aigo-decision-demo__workspace">
          <div className="aigo-decision-demo__rail">
            {governanceStages.map((item, index) => (
              <button
                className={
                  index === active
                    ? "aigo-decision-demo__stage aigo-decision-demo__stage--active"
                    : "aigo-decision-demo__stage"
                }
                key={item.label}
                onClick={() => setActive(index)}
                type="button"
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{item.label}</strong>
              </button>
            ))}
          </div>

          <div className="aigo-decision-demo__focus">
            <div className="aigo-decision-demo__focus-top">
              <span>{stage.label}</span>
              <small>ACTIVE GOVERNANCE CONTEXT</small>
            </div>

            <div className="aigo-decision-demo__focus-body">
              <span className="aigo-decision-demo__number">
                {String(active + 1).padStart(2, "0")}
              </span>

              <h3>{stage.title}</h3>

              <p>{stage.body}</p>
            </div>

            <div className="aigo-decision-demo__signal">
              <i />
              <span>
                Context remains connected as governance reasoning progresses.
              </span>
            </div>
          </div>

          <div className="aigo-decision-demo__result">
            <span>GOVERNANCE OUTCOMES</span>

            <div className="aigo-decision-demo__outcomes">
              {decisionOutcomes.map((outcome) => (
                <strong key={outcome}>
                  {outcome}
                </strong>
              ))}
            </div>

            <div className="aigo-decision-demo__evidence">
              <small>CONNECTED EVIDENCE</small>

              <div>
                <span>Actor</span>
                <span>Authority</span>
                <span>Significance</span>
                <span>Risk</span>
                <span>Policy</span>
                <span>Decision</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
