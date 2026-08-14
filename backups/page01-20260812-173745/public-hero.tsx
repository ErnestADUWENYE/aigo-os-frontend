"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const phases = [
  {
    label: "DISCOVER",
    title: "Know what AI is operating.",
    detail: "Agents / Models / AI applications / Automations",
  },
  {
    label: "IDENTITY",
    title: "Establish who and what is operating.",
    detail: "Ownership / Purpose / Relationships / Operating context",
  },
  {
    label: "AUTHORITY",
    title: "Define what it is authorized to do.",
    detail: "Actions / Resources / Scope / Conditions / Human approval",
  },
  {
    label: "SIGNIFICANCE",
    title: "Understand what it means to the business.",
    detail: "Materiality / Urgency / Business impact / Stakeholders",
  },
  {
    label: "DECIDE",
    title: "Determine the appropriate governance response.",
    detail: "Allow / Deny / Review / Escalate / Suspend",
  },
  {
    label: "PROVE",
    title: "Preserve the evidence behind the decision.",
    detail: "Decision context / Evidence / Governance Receipt",
  },
];

export function PublicHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % phases.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="aigo-public-hero">
      <div className="aigo-public-shell aigo-public-hero__grid">
        <div className="aigo-public-hero__copy">
          <div className="aigo-public-kicker">
            AUTONOMY-FIRST AI GOVERNANCE OPERATING SYSTEM
          </div>

          <h1>
            AI can act.
            <span>Enterprises need governance that can keep up.</span>
          </h1>

          <p className="aigo-public-hero__lead">
            AIGO-OS continuously discovers enterprise AI, establishes
            governance identity and authority, interprets business significance
            and risk, makes explainable governance decisions, governs supported
            execution paths and preserves the evidence behind governed outcomes.
          </p>

          <div className="aigo-public-actions">
            <Link
              className="aigo-public-button aigo-public-button--primary"
              href="/contact?intent=demo"
            >
              Request a Demo
              <span aria-hidden="true" className="aigo-ui-arrow" />
            </Link>

            <Link
              className="aigo-public-button aigo-public-button--secondary"
              href="/product"
            >
              Explore AIGO-OS
            </Link>
          </div>

          <div className="aigo-public-definition">
            <strong>What AIGO-OS calls an AI Actor</strong>
            <p>
              An AI system participating in enterprise activity, including
              agents, models, AI applications, automations and AI-enabled
              services represented within AIGO-OS governance context.
            </p>
          </div>
        </div>

        <div className="aigo-public-engine">
          <div className="aigo-public-engine__top">
            <div>
              <span>AIGO-OS</span>
              <strong>Governance Operating System</strong>
            </div>

            <div className="aigo-public-live">
              <i />
              CONTINUOUS
            </div>
          </div>

          <div className="aigo-public-engine__stage">
            <div className="aigo-public-engine__orbit aigo-public-engine__orbit--one" />
            <div className="aigo-public-engine__orbit aigo-public-engine__orbit--two" />

            <div className="aigo-public-engine__core">
              <span>{phases[active].label}</span>
              <strong>{phases[active].title}</strong>
              <p>{phases[active].detail}</p>
            </div>

            <div className="aigo-public-engine__nodes">
              {phases.map((phase, index) => (
                <button
                  className={
                    index === active
                      ? "aigo-public-engine__node aigo-public-engine__node--active"
                      : "aigo-public-engine__node"
                  }
                  key={phase.label}
                  onClick={() => setActive(index)}
                  type="button"
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {phase.label}
                </button>
              ))}
            </div>
          </div>

          <div className="aigo-public-engine__bottom">
            <span>Identity</span>
            <span>Authority</span>
            <span>Significance</span>
            <span>Risk</span>
            <span>Decision</span>
            <span>Evidence</span>
          </div>
        </div>
      </div>
    </section>
  );
}
