"use client";

import { useState } from "react";

type Decision =
  | "ALLOW"
  | "DENY"
  | "REVIEW REQUIRED"
  | "ESCALATE";

type Scenario = {
  id: string;
  actor: string;
  action: string;
  target: string;
  authority: string;
  purpose: string;
  risk: string;
  riskScore: number;
  threshold: string;
  humanPolicy: string;
  decision: Decision;
  explanation: string;
  receipt: string;
};

const scenarios: Scenario[] = [
  {
    id: "payment",
    actor: "Procurement Agent 07",
    action: "Issue supplier payment",
    target: "$48,200",
    authority: "Payments up to $25,000",
    purpose: "Approved procurement settlement",
    risk: "Elevated",
    riskScore: 78,
    threshold: "$25,000 autonomous limit",
    humanPolicy: "Finance approval required above threshold",
    decision: "REVIEW REQUIRED",
    explanation:
      "The actor is recognized and the business purpose is valid, but the requested amount exceeds its autonomous authority.",
    receipt: "GR-2026-0811-48200",
  },
  {
    id: "data",
    actor: "Customer Support Agent",
    action: "Export customer dataset",
    target: "14,820 records",
    authority: "Read and summarize customer records",
    purpose: "Support case investigation",
    risk: "High",
    riskScore: 92,
    threshold: "No bulk export authority",
    humanPolicy: "Data export requires explicit approval",
    decision: "DENY",
    explanation:
      "The actor may access customer records individually, but bulk export is outside its delegated authority and purpose.",
    receipt: "GR-2026-0811-14820",
  },
  {
    id: "deploy",
    actor: "Release Automation Agent",
    action: "Deploy approved release",
    target: "Production / EU",
    authority: "Deploy signed releases",
    purpose: "Scheduled production release",
    risk: "Low",
    riskScore: 24,
    threshold: "Change window active",
    humanPolicy: "No additional review required",
    decision: "ALLOW",
    explanation:
      "Identity, release provenance, authority, environment and deployment window all satisfy the active governance policy.",
    receipt: "GR-2026-0811-EU042",
  },
  {
    id: "privilege",
    actor: "Security Operations Agent",
    action: "Grant privileged role",
    target: "Production administrator",
    authority: "Investigate and contain incidents",
    purpose: "Incident response",
    risk: "Critical",
    riskScore: 97,
    threshold: "Privilege elevation restricted",
    humanPolicy: "Security authority approval required",
    decision: "ESCALATE",
    explanation:
      "The actor is legitimate, but permanent privilege elevation exceeds the authority delegated for automated incident response.",
    receipt: "GR-2026-0811-PRIV7",
  },
];

const stages = [
  {
    key: "identity",
    label: "Actor Passport",
    detail: "Identity and operating context established",
  },
  {
    key: "authority",
    label: "Authority",
    detail: "Delegated machine authority evaluated",
  },
  {
    key: "purpose",
    label: "Purpose",
    detail: "Requested action compared with intended purpose",
  },
  {
    key: "risk",
    label: "Risk Intelligence",
    detail: "Contextual risk and operating conditions evaluated",
  },
  {
    key: "human",
    label: "Human Policy",
    detail: "Escalation and intervention rules applied",
  },
  {
    key: "decision",
    label: "Decision",
    detail: "Runtime governance outcome enforced",
  },
];

function decisionClass(decision: Decision) {
  return decision.toLowerCase().replace(/\s+/g, "-");
}

export function AigoActionDecisionDemo() {
  const [activeId, setActiveId] = useState(scenarios[0].id);

  const scenario =
    scenarios.find((item) => item.id === activeId) ??
    scenarios[0];

  return (
    <section className="aigo-live-demo">
      <div className="aigo-home-shell">
        <div className="aigo-live-demo__heading">
          <div>
            <p className="aigo-home-eyebrow">
              AIGO-OS in action
            </p>

            <h2>
              See the governance decision,
              <span>not just the governance description.</span>
            </h2>
          </div>

          <p>
            Select an illustrative enterprise action and
            follow how AIGO-OS evaluates identity,
            authority, purpose, risk and human oversight
            before producing an enforceable decision.
          </p>
        </div>

        <div className="aigo-live-demo__scenarios">
          {scenarios.map((item) => (
            <button
              className={
                item.id === activeId
                  ? "aigo-live-demo__scenario aigo-live-demo__scenario--active"
                  : "aigo-live-demo__scenario"
              }
              key={item.id}
              onClick={() => setActiveId(item.id)}
              type="button"
            >
              <span>{item.actor}</span>
              <strong>{item.action}</strong>
              <small>{item.target}</small>
            </button>
          ))}
        </div>

        <div
          className="aigo-live-demo__workspace"
          key={scenario.id}
        >
          <div className="aigo-live-demo__request">
            <div className="aigo-live-demo__panel-head">
              <span>Illustrative action request</span>
              <strong>LIVE EVALUATION</strong>
            </div>

            <div className="aigo-live-demo__actor">
              <div className="aigo-live-demo__actor-icon">
                AI
              </div>

              <div>
                <span>Autonomous actor</span>
                <strong>{scenario.actor}</strong>
              </div>
            </div>

            <div className="aigo-live-demo__request-grid">
              <div>
                <span>Requested action</span>
                <strong>{scenario.action}</strong>
              </div>

              <div>
                <span>Target</span>
                <strong>{scenario.target}</strong>
              </div>

              <div>
                <span>Delegated authority</span>
                <strong>{scenario.authority}</strong>
              </div>

              <div>
                <span>Declared purpose</span>
                <strong>{scenario.purpose}</strong>
              </div>
            </div>
          </div>

          <div className="aigo-live-demo__engine">
            <div className="aigo-live-demo__engine-head">
              <div>
                <span>AIGO-OS CONTROL PLANE</span>
                <strong>Runtime governance evaluation</strong>
              </div>

              <div className="aigo-live-demo__pulse">
                <i />
                Evaluating
              </div>
            </div>

            <div className="aigo-live-demo__stages">
              {stages.map((stage, index) => (
                <div
                  className="aigo-live-demo__stage"
                  key={stage.key}
                  style={{
                    animationDelay: `${index * 110}ms`,
                  }}
                >
                  <div className="aigo-live-demo__stage-index">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <strong>{stage.label}</strong>
                    <span>{stage.detail}</span>
                  </div>

                  <i />
                </div>
              ))}
            </div>

            <div className="aigo-live-demo__risk">
              <div>
                <span>Contextual risk</span>
                <strong>{scenario.risk}</strong>
              </div>

              <div className="aigo-live-demo__risk-meter">
                <i
                  style={{
                    width: `${scenario.riskScore}%`,
                  }}
                />
              </div>

              <strong>{scenario.riskScore}/100</strong>
            </div>
          </div>

          <div className="aigo-live-demo__result">
            <div className="aigo-live-demo__panel-head">
              <span>Governance outcome</span>
              <strong>ENFORCED</strong>
            </div>

            <div
              className={`aigo-live-demo__decision aigo-live-demo__decision--${decisionClass(
                scenario.decision,
              )}`}
            >
              <span>Decision</span>
              <strong>{scenario.decision}</strong>
            </div>

            <p className="aigo-live-demo__explanation">
              {scenario.explanation}
            </p>

            <div className="aigo-live-demo__facts">
              <div>
                <span>Control threshold</span>
                <strong>{scenario.threshold}</strong>
              </div>

              <div>
                <span>Human policy</span>
                <strong>{scenario.humanPolicy}</strong>
              </div>
            </div>

            <div className="aigo-live-demo__receipt">
              <div>
                <span>Governance receipt</span>
                <strong>{scenario.receipt}</strong>
              </div>

              <div className="aigo-live-demo__receipt-check">
                ✓
              </div>
            </div>
          </div>
        </div>

        <div className="aigo-live-demo__evidence">
          <span>Actor identified</span>
          <i />
          <span>Authority evaluated</span>
          <i />
          <span>Context interpreted</span>
          <i />
          <span>Decision enforced</span>
          <i />
          <span>Evidence preserved</span>
        </div>
      </div>
    </section>
  );
}
