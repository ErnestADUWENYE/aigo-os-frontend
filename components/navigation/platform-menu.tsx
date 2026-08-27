import Link from "next/link";

import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  FileSearch,
  GitBranch,
  Network,
  PlugZap,
} from "lucide-react";

import styles from "./platform-menu.module.css";

type PlatformMenuProps = {
  onNavigate?: () => void;
};

const capabilities = [
  {
    icon: PlugZap,
    meta: "Connect",
    title: "Enterprise Connectivity",
    href: "/platform/enterprise-connectivity",
    description:
      "Connect the enterprise systems where governance, technology, AI and business information already lives.",
  },
  {
    icon: Building2,
    meta: "Understand",
    title: "Enterprise Context",
    href: "/platform/enterprise-context",
    description:
      "Give connected information a consistent organisational and business meaning.",
  },
  {
    icon: GitBranch,
    meta: "Relate",
    title: "Relationship & Dependency Intelligence",
    href: "/platform/relationship-dependency-intelligence",
    description:
      "Understand how governance, technology, AI and business entities relate to and depend on one another.",
  },
  {
    icon: Activity,
    meta: "Keep current",
    title: "Continuous Intelligence",
    href: "/platform/continuous-intelligence",
    description:
      "Keep enterprise context and relationships current as systems, conditions and dependencies change.",
  },
  {
    icon: BrainCircuit,
    meta: "Reason",
    title: "Contextual Reasoning",
    href: "/platform/contextual-reasoning",
    description:
      "Reason across connected enterprise context to answer governance and business-impact questions.",
  },
  {
    icon: FileSearch,
    meta: "Explain",
    title: "Explainability & Traceability",
    href: "/platform/explainability-traceability",
    description:
      "Show the sources, relationships, context and current conditions behind material AIGO-OS conclusions.",
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
            Connect enterprise context. Understand what it means.
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
