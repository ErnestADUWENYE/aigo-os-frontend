import Link from "next/link";

import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  Network,
} from "lucide-react";

import styles from "./platform-menu.module.css";

type PlatformMenuProps = {
  onNavigate?: () => void;
};

const capabilities = [
  {
    icon: Building2,
    meta: "Enterprise foundation",
    title: "Enterprise Context",
    href: "/platform/enterprise-context",
    description:
      "Understand the enterprise environment surrounding AI activity.",
  },
  {
    icon: Network,
    meta: "Business relationships",
    title: "AI Business Mapping",
    href: "/platform/ai-business-mapping",
    description:
      "Relate AI to the business functions, processes and dependencies around it.",
  },
  {
    icon: Activity,
    meta: "Operational context",
    title: "Activity & Event Correlation",
    href: "/platform/activity-event-correlation",
    description:
      "Connect AI signals with relevant operational and enterprise events.",
  },
  {
    icon: BrainCircuit,
    meta: "Interpretation",
    title: "Contextual Intelligence",
    href: "/platform/contextual-intelligence",
    description:
      "Interpret AI activity together with existing enterprise context.",
  },
  {
    icon: ChartNoAxesCombined,
    meta: "Management view",
    title: "Management Intelligence",
    href: "/platform/management-intelligence",
    description:
      "Present connected context in a form management teams can use.",
  },
];

export function PlatformMenu({
  onNavigate,
}: PlatformMenuProps) {
  return (
    <div className={styles.menu}>
      <div className={styles.overviewBar}>
        <div className={styles.overviewCopy}>
          <span className={styles.overviewMeta}>
            AIGO-OS Platform
          </span>

          <strong>
            Understand AI in business context.
          </strong>
        </div>

        <Link
          href="/platform"
          onClick={onNavigate}
          className={styles.overviewButton}
        >
          Platform Overview

          <ArrowUpRight
            size={15}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </Link>
      </div>

      <div className={styles.capabilityArea}>
        <div className={styles.capabilityHeader}>
          <span>
            Platform capabilities
          </span>

          <span>
            Explore a capability
          </span>
        </div>

        <nav
          className={styles.capabilityGrid}
          aria-label="Platform capabilities"
        >
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={styles.capabilityItem}
              >
                <div className={styles.iconWrap}>
                  <Icon
                    size={20}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <div className={styles.itemCopy}>
                  <span className={styles.meta}>
                    {item.meta}
                  </span>

                  <strong>
                    {item.title}
                  </strong>

                  <p>
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight
                  className={styles.itemArrow}
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
