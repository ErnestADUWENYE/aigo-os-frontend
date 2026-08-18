import Link from "next/link";

import {
  ArrowUpRight,
  GitBranch,
  KeyRound,
  ListChecks,
  Network,
  RefreshCw,
  ShieldCheck,
  TriangleAlert,
  UserRoundCheck,
  Workflow,
} from "lucide-react";

import styles from "./solutions-menu.module.css";

type Props = {
  onNavigate?: () => void;
};

const governCases = [
  {
    icon: UserRoundCheck,
    title: "AI Agent Accountability",
    href: "/solutions/ai-agent-accountability",
    description:
      "Clarify ownership and responsibility around autonomous AI activity.",
  },
  {
    icon: KeyRound,
    title: "AI Agent Access Authority",
    href: "/solutions/ai-agent-access-authority",
    description:
      "Understand what AI agents are permitted to access and act on.",
  },
  {
    icon: Network,
    title: "AI Agent Sprawl",
    href: "/solutions/ai-agent-sprawl",
    description:
      "Bring distributed AI agents into a clearer enterprise view.",
  },
  {
    icon: ListChecks,
    title: "AI Governance Priorities",
    href: "/solutions/ai-governance-priorities",
    description:
      "Identify which governance issues require attention first.",
  },
];

const impactCases = [
  {
    icon: GitBranch,
    title: "AI Business Dependencies",
    href: "/solutions/ai-business-dependencies",
    description:
      "Understand the business processes and services that depend on AI.",
  },
  {
    icon: RefreshCw,
    title: "AI Change Business Impact",
    href: "/solutions/ai-change-business-impact",
    description:
      "See how AI changes may affect business operations and services.",
  },
  {
    icon: TriangleAlert,
    title: "AI Incident Business Impact",
    href: "/solutions/ai-incident-business-impact",
    description:
      "Connect AI incidents to the business areas and dependencies affected.",
  },
];

export function SolutionsMenu({
  onNavigate,
}: Props) {
  return (
    <div className={styles.menu}>
      <div className={styles.topBar}>
        <span className={styles.eyebrow}>
          Use Cases
        </span>

        <span className={styles.topNote}>
          Govern and Impact
        </span>
      </div>

      <div className={styles.groups}>
        <section className={styles.group}>
          <div
            className={`${styles.groupHeader} ${styles.governHeader}`}
          >
            <div
              className={`${styles.groupIcon} ${styles.governIcon}`}
            >
              <ShieldCheck
                size={23}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </div>

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
            {governCases.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className={styles.caseItem}
                >
                  <div
                    className={`${styles.caseIcon} ${styles.governCaseIcon}`}
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <div className={styles.caseCopy}>
                    <strong>
                      {item.title}
                    </strong>

                    <span>
                      {item.description}
                    </span>
                  </div>

                  <ArrowUpRight
                    className={styles.caseArrow}
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>
        </section>

        <section className={styles.group}>
          <div
            className={`${styles.groupHeader} ${styles.impactHeader}`}
          >
            <div
              className={`${styles.groupIcon} ${styles.impactIcon}`}
            >
              <Workflow
                size={23}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </div>

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
            {impactCases.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className={styles.caseItem}
                >
                  <div
                    className={`${styles.caseIcon} ${styles.impactCaseIcon}`}
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <div className={styles.caseCopy}>
                    <strong>
                      {item.title}
                    </strong>

                    <span>
                      {item.description}
                    </span>
                  </div>

                  <ArrowUpRight
                    className={styles.caseArrow}
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>
        </section>
      </div>
    </div>
  );
}
