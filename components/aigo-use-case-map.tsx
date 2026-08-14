"use client";

import { useEffect, useState } from "react";

const useCases = [
  {
    label: "EXCESSIVE AGENCY",
    problem: "AI operates beyond intended autonomy.",
    authority: "Authority boundary must be evaluated.",
    significance: "Business consequence must be understood.",
    response: "Governance determines the appropriate response.",
  },
  {
    label: "TOOL USE",
    problem: "Technical access does not establish appropriate use.",
    authority: "Actor, capability, resource and conditions matter.",
    significance: "Tool use must be interpreted in business context.",
    response: "Governance evaluates whether the activity should proceed.",
  },
  {
    label: "HUMAN OVERSIGHT",
    problem: "Not every action needs review. Some clearly do.",
    authority: "Autonomous and human authority boundaries must be explicit.",
    significance: "Materiality and uncertainty help determine attention.",
    response: "Governance can allow, review, escalate, deny or suspend.",
  },
  {
    label: "AUTHORITY ABUSE",
    problem: "Known identity does not make every action legitimate.",
    authority: "Effective authority can change with scope and conditions.",
    significance: "Consequences depend on what the activity can affect.",
    response: "Governance responds when activity exceeds delegated authority.",
  },
];

export function AigoUseCaseMap() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % useCases.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const useCase = useCases[active];

  return (
    <div className="aigo-use-case-map">
      <div className="aigo-use-case-map__tabs">
        {useCases.map((item, index) => (
          <button
            className={
              index === active
                ? "aigo-use-case-map__tab aigo-use-case-map__tab--active"
                : "aigo-use-case-map__tab"
            }
            key={item.label}
            onClick={() => setActive(index)}
            type="button"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.label}</strong>
          </button>
        ))}
      </div>

      <div className="aigo-use-case-map__workspace">
        <div className="aigo-use-case-map__problem">
          <span>GOVERNANCE PROBLEM</span>
          <strong>{useCase.problem}</strong>
        </div>

        <div className="aigo-use-case-map__connector">
          <i />
        </div>

        <div className="aigo-use-case-map__context">
          <span>AIGO-OS GOVERNANCE CONTEXT</span>

          <div>
            <article>
              <small>IDENTITY</small>
              <strong>Who or what is acting?</strong>
            </article>

            <article>
              <small>AUTHORITY</small>
              <strong>{useCase.authority}</strong>
            </article>

            <article>
              <small>BUSINESS SIGNIFICANCE</small>
              <strong>{useCase.significance}</strong>
            </article>

            <article>
              <small>RISK AND POLICY</small>
              <strong>
                What additional governance context applies?
              </strong>
            </article>
          </div>
        </div>

        <div className="aigo-use-case-map__connector">
          <i />
        </div>

        <div className="aigo-use-case-map__decision">
          <span>GOVERNANCE RESPONSE</span>
          <strong>{useCase.response}</strong>

          <div>
            <small>ALLOW</small>
            <small>DENY</small>
            <small>REVIEW</small>
            <small>ESCALATE</small>
            <small>SUSPEND</small>
          </div>
        </div>
      </div>
    </div>
  );
}
