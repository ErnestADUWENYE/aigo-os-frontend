import styles from "@/styles/page01-home.module.css";

const sourceGroups = [
  {
    title: "AI SYSTEMS",
    items: ["AI Agents", "AI Applications", "AI Platforms"],
  },
  {
    title: "OPERATIONS",
    items: ["Observability", "Security", "IT Operations"],
  },
  {
    title: "ENTERPRISE CONTEXT",
    items: ["Identity", "Risk and Policy", "Business Systems"],
  },
];

const contextSignals = [
  "Actor",
  "Authority",
  "Context",
  "Risk",
  "Policy",
];

export function Page01HeroVisual() {
  return (
    <div
      className={styles.heroVisual}
      aria-label="AIGO-OS governance flow. Enterprise AI and operational systems provide signals to AIGO-OS. AIGO-OS correlates actor identity, authority, business context, risk and policy to determine Business Significance and the appropriate governance decision."
    >
      <div className={styles.heroVisualSources}>
        {sourceGroups.map((group, groupIndex) => (
          <div
            className={styles.sourceGroup}
            key={group.title}
            style={{
              animationDelay: `${groupIndex * 140}ms`,
            }}
          >
            <span className={styles.sourceGroupLabel}>
              {group.title}
            </span>

            <div className={styles.sourceItems}>
              {group.items.map((item) => (
                <span className={styles.sourceItem} key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.signalBridge} aria-hidden="true">
        <span className={styles.signalLine} />
        <span className={styles.signalPulse} />
      </div>

      <div className={styles.aigoCore}>
        <div className={styles.coreTopline}>
          GOVERNANCE OPERATING SYSTEM
        </div>

        <div className={styles.coreBrand}>
          AIGO-OS
        </div>

        <div className={styles.contextSignals}>
          {contextSignals.map((signal) => (
            <span className={styles.contextSignal} key={signal}>
              {signal}
            </span>
          ))}
        </div>

        <div className={styles.correlationLine}>
          <span>Correlate</span>
          <span>Interpret</span>
          <span>Determine</span>
        </div>

        <div className={styles.significancePanel}>
          <span className={styles.panelLabel}>
            BUSINESS SIGNIFICANCE
          </span>

          <strong>
            Material financial action
          </strong>

          <p>
            Authority, transaction value, business process,
            policy and consequence require additional governance.
          </p>
        </div>

        <div className={styles.decisionPanel}>
          <span className={styles.panelLabel}>
            GOVERNANCE DECISION
          </span>

          <strong className={styles.decisionState}>
            HUMAN AUTHORITY REQUIRED
          </strong>

          <span className={styles.decisionMeta}>
            Execution held pending accountable approval
          </span>
        </div>
      </div>
    </div>
  );
}
