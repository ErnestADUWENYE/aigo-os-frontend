import styles from "@/styles/platform-capability-sequence.module.css";

export type PlatformCapability =
  | "actor-passports"
  | "machine-authority"
  | "business-significance"
  | "governance-decisioning"
  | "human-authority"
  | "governance-receipts";

type Props = {
  active: PlatformCapability;
};

const capabilities = [
  {
    id: "actor-passports",
    number: "01",
    title: "Actor Passports",
    description: "Establish who or what is acting.",
  },
  {
    id: "machine-authority",
    number: "02",
    title: "Machine Authority",
    description: "Establish what autonomy has been delegated.",
  },
  {
    id: "business-significance",
    number: "03",
    title: "Business Significance",
    description: "Determine what the activity means now.",
  },
  {
    id: "governance-decisioning",
    number: "04",
    title: "Governance Decisioning",
    description: "Determine what governance should apply.",
  },
  {
    id: "human-authority",
    number: "05",
    title: "Human Authority & Intervention",
    description: "Bring accountable human judgment in when required.",
  },
  {
    id: "governance-receipts",
    number: "06",
    title: "Governance Receipts",
    description: "Preserve evidence of what was understood, decided and done.",
  },
] as const;

export function PlatformCapabilitySequence({
  active,
}: Props) {
  return (
    <div className={styles.grid}>
      {capabilities.map((capability) => {
        const isActive = capability.id === active;

        return (
          <article
            key={capability.id}
            className={[
              styles.card,
              isActive ? styles.activeCard : "",
            ].join(" ")}
          >
            <div className={styles.topRow}>
              <span className={styles.number}>
                {capability.number}
              </span>

              {isActive ? (
                <span className={styles.current}>
                  CURRENT CAPABILITY
                </span>
              ) : null}
            </div>

            <h3>{capability.title}</h3>

            <p>{capability.description}</p>

            {isActive ? (
              <span
                className={styles.activeEdge}
                aria-hidden="true"
              />
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
