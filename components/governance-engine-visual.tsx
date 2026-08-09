import Image from "next/image";
import type { CSSProperties } from "react";

const enterpriseInputs = [
  "AI Agents",
  "Models",
  "AI Apps",
  "Automations",
];

const governanceStages = [
  "Discover",
  "Correlate",
  "Passport",
  "Authority",
  "Risk",
  "Decide",
];

const governedOutcomes = [
  "Known",
  "Authorized",
  "Monitored",
  "Traceable",
];

export function GovernanceEngineVisual() {
  return (
    <div
      aria-label="Enterprise AI flowing through the AIGO-OS governance engine"
      className="governance-engine"
    >
      <div className="governance-engine__heading">
        <span className="governance-engine__live">
          <i />
          Live governance
        </span>

        <span className="governance-engine__status">
          Continuous
        </span>
      </div>

      <div className="governance-engine__flow">
        <div className="governance-engine__inputs">
          <div className="governance-engine__column-label">
            Enterprise AI
          </div>

          {enterpriseInputs.map((input, index) => (
            <div
              className="governance-input"
              key={input}
              style={{ "--input-index": index } as CSSProperties}
            >
              <span className="governance-input__signal" />
              <span>{input}</span>
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="governance-engine__connector governance-engine__connector--in"
        >
          <span />
          <span />
          <span />
        </div>

        <div className="governance-engine__core">
          <div className="governance-engine__brand">
            <Image
              alt="AIGO-OS"
              className="governance-engine__logo"
              height={100}
              priority
              src="/branding/aigo-os-logo-dark.png"
              width={190}
            />

            <span>Governance engine</span>
          </div>

          <div className="governance-engine__stages">
            {governanceStages.map((stage, index) => (
              <div
                className="governance-stage"
                key={stage}
              >
                <span className="governance-stage__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="governance-stage__label">
                  {stage}
                </span>

                <span className="governance-stage__state">
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="governance-engine__connector governance-engine__connector--out"
        >
          <span />
          <span />
          <span />
        </div>

        <div className="governance-engine__outcomes">
          <div className="governance-engine__column-label">
            Governed state
          </div>

          {governedOutcomes.map((outcome) => (
            <div className="governance-outcome" key={outcome}>
              <span className="governance-outcome__check">
                &#10003;
              </span>
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="governance-engine__footer">
        <div>
          <span className="governance-engine__metric-label">
            Actor
          </span>
          <strong>Claims Assistant</strong>
        </div>

        <div>
          <span className="governance-engine__metric-label">
            Authority
          </span>
          <strong>Verified</strong>
        </div>

        <div>
          <span className="governance-engine__metric-label">
            Risk
          </span>
          <strong>Within policy</strong>
        </div>

        <div>
          <span className="governance-engine__metric-label">
            Decision
          </span>
          <strong>Allow</strong>
        </div>
      </div>
    </div>
  );
}