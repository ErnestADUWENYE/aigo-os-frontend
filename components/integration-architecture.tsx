"use client";

import { useEffect, useState } from "react";

const pathways = [
  {
    label: "AI ENVIRONMENT",
    source: "AI systems and operating environments",
    provides:
      "Discovery signals, technical identity, capabilities, relationships and lifecycle changes.",
    usedBy:
      "Actor discovery, correlation, Actor Passports and continuous reassessment.",
    result:
      "AIGO-OS establishes which governed AI actor the enterprise is reasoning about.",
  },
  {
    label: "IDENTITY AND ACCESS",
    source: "Enterprise identity and access context",
    provides:
      "Identity, authentication, ownership, credentials, permissions and access relationships.",
    usedBy:
      "Actor identity, ownership resolution and Machine Authority.",
    result:
      "AIGO-OS distinguishes technical access from the authority required for governed action.",
  },
  {
    label: "OBSERVABILITY",
    source: "Operational and runtime signals",
    provides:
      "Relevant events, state changes, telemetry and observed operating conditions.",
    usedBy:
      "Continuous monitoring, Business Significance, Risk Intelligence and reassessment.",
    result:
      "Operational signals become governance context rather than another isolated dashboard.",
  },
  {
    label: "SECURITY",
    source: "Enterprise security context",
    provides:
      "Relevant findings, control signals, security state and changes that may affect governance.",
    usedBy:
      "Risk Intelligence, governance decisions and reassessment.",
    result:
      "Security context contributes to the governance decision without AIGO-OS replacing the security platform.",
  },
  {
    label: "POLICY AND GRC",
    source: "Governance, risk and policy context",
    provides:
      "Policies, controls, obligations, risk context and assurance requirements.",
    usedBy:
      "Governance reasoning, decisions, evidence and assurance.",
    result:
      "Organizational governance context remains connected to AI activity and decision evidence.",
  },
  {
    label: "BUSINESS CONTEXT",
    source: "Enterprise business systems and relationships",
    provides:
      "Processes, capabilities, resources, stakeholders and organizational context.",
    usedBy:
      "Business Significance, Risk Intelligence and governance prioritization.",
    result:
      "AIGO-OS can reason about why AI activity matters to the enterprise, not only what happened technically.",
  },
];

export function IntegrationArchitecture() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % pathways.length);
    }, 3400);

    return () => window.clearInterval(timer);
  }, []);

  const pathway = pathways[active];

  return (
    <div className="aigo-integration-architecture">
      <div className="aigo-integration-architecture__tabs">
        {pathways.map((item, index) => (
          <button
            className={
              active === index
                ? "aigo-integration-architecture__tab aigo-integration-architecture__tab--active"
                : "aigo-integration-architecture__tab"
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

      <div className="aigo-integration-architecture__flow">
        <article className="aigo-integration-architecture__source">
          <span>SOURCE CONTEXT</span>
          <h3>{pathway.source}</h3>
          <p>{pathway.provides}</p>
        </article>

        <div className="aigo-integration-architecture__signal">
          <i />
          <small>CONTEXT ENTERS AIGO-OS</small>
        </div>

        <article className="aigo-integration-architecture__core">
          <span>AIGO-OS</span>

          <strong>Governance Operating System</strong>

          <div>
            <small>Identity</small>
            <small>Authority</small>
            <small>Business Significance</small>
            <small>Risk</small>
            <small>Decision</small>
            <small>Evidence</small>
          </div>

          <p>{pathway.usedBy}</p>
        </article>

        <div className="aigo-integration-architecture__signal">
          <i />
          <small>GOVERNANCE CONTEXT</small>
        </div>

        <article className="aigo-integration-architecture__result">
          <span>WHY THE CONNECTION MATTERS</span>
          <p>{pathway.result}</p>
        </article>
      </div>
    </div>
  );
}
