import Link from "next/link";

import styles from "./platform-menu.module.css";

type PlatformMenuProps = {
  onNavigate?: () => void;
};

const capabilities = [
  {
    meta: "Enterprise foundation",
    title: "Enterprise Context",
    href: "/platform/enterprise-context",
    description:
      "Enterprise environment around AI activity.",
  },
  {
    meta: "Business relationships",
    title: "AI Business Mapping",
    href: "/platform/ai-business-mapping",
    description:
      "AI connected to business functions, processes and ownership.",
  },
  {
    meta: "Operational context",
    title: "Activity & Event Correlation",
    href: "/platform/activity-event-correlation",
    description:
      "AI activity understood alongside relevant enterprise events.",
  },
  {
    meta: "Interpretation",
    title: "Contextual Intelligence",
    href: "/platform/contextual-intelligence",
    description:
      "Business context retained during interpretation.",
  },
  {
    meta: "Management view",
    title: "Management Intelligence",
    href: "/platform/management-intelligence",
    description:
      "Connected context prepared for management use.",
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

          <p>
            Five connected capabilities form the intelligence
            foundation behind AIGO-OS Govern and Impact.
          </p>
        </div>

        <Link
          href="/platform"
          onClick={onNavigate}
          className={styles.overviewButton}
        >
          Platform Overview
        </Link>
      </div>


      <div className={styles.capabilityArea}>
        <div className={styles.capabilityHeader}>
          <span>
            Platform capabilities
          </span>

          <span>
            Select a capability
          </span>
        </div>

        <nav
          className={styles.capabilityGrid}
          aria-label="Platform capabilities"
        >
          {capabilities.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={styles.capabilityItem}
            >
              <div className={styles.number}>
                {String(index + 1).padStart(2, "0")}
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
            </Link>
          ))}
        </nav>
      </div>

    </div>
  );
}
