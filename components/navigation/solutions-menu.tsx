import Link from "next/link";

import styles from "./solutions-menu.module.css";

type Props = {
  onNavigate?: () => void;
};

const governCases = [
  {
    title: "AI Agent Accountability",
    href: "/solutions/ai-agent-accountability",
    description: "Clarify ownership and responsibility around autonomous AI activity.",
  },
  {
    title: "AI Agent Access Authority",
    href: "/solutions/ai-agent-access-authority",
    description: "Understand what AI agents are permitted to access and act on.",
  },
  {
    title: "AI Agent Sprawl",
    href: "/solutions/ai-agent-sprawl",
    description: "Bring distributed AI agents into a clearer enterprise view.",
  },
  {
    title: "AI Governance Priorities",
    href: "/solutions/ai-governance-priorities",
    description: "Identify which governance issues require attention first.",
  },
];

const impactCases = [
  {
    title: "AI Business Dependencies",
    href: "/solutions/ai-business-dependencies",
    description: "Understand the business processes and services that depend on AI.",
  },
  {
    title: "AI Change Business Impact",
    href: "/solutions/ai-change-business-impact",
    description: "See how AI changes may affect business operations and services.",
  },
  {
    title: "AI Incident Business Impact",
    href: "/solutions/ai-incident-business-impact",
    description: "Connect AI incidents to the business areas and dependencies affected.",
  },
];

export function SolutionsMenu({ onNavigate }: Props) {
  return (
    <div className={styles.menu}>

      <div className={styles.topBar}>
        <div>
          <span className={styles.eyebrow}>
            USE CASES
          </span>

          <strong>
            Start with the business problem.
          </strong>
        </div>

        <span className={styles.topNote}>
          AIGO-OS Govern + AIGO-OS Impact
        </span>
      </div>


      <div className={styles.groups}>

        <section className={styles.group}>
          <div className={styles.groupHeader}>
            <span className={styles.productNumber}>
              01
            </span>

            <div>
              <span className={styles.productType}>
                AI Governance Intelligence
              </span>

              <strong>
                AIGO-OS Govern
              </strong>
            </div>
          </div>

          <nav
            className={styles.caseList}
            aria-label="AIGO-OS Govern use cases"
          >
            {governCases.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={styles.caseItem}
              >
                <strong>
                  {item.title}
                </strong>

                <span>
                  {item.description}
                </span>
              </Link>
            ))}
          </nav>
        </section>


        <section className={styles.group}>
          <div className={styles.groupHeader}>
            <span className={styles.productNumber}>
              02
            </span>

            <div>
              <span className={styles.productType}>
                AI Business Impact Intelligence
              </span>

              <strong>
                AIGO-OS Impact
              </strong>
            </div>
          </div>

          <nav
            className={styles.caseList}
            aria-label="AIGO-OS Impact use cases"
          >
            {impactCases.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={styles.caseItem}
              >
                <strong>
                  {item.title}
                </strong>

                <span>
                  {item.description}
                </span>
              </Link>
            ))}
          </nav>
        </section>

      </div>
    </div>
  );
}
