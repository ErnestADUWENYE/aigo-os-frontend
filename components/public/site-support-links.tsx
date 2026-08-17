import Link from "next/link";

import styles from "./site-support-links.module.css";

export function SiteSupportLinks() {
  return (
    <div className={styles.support}>
      <div className={styles.label}>
        Support & Enterprise
      </div>

      <nav
        className={styles.links}
        aria-label="Support and enterprise resources"
      >
        <Link href="/help">
          Help Center
        </Link>

        <Link href="/integrations">
          Integrations
        </Link>

        <Link href="/trust">
          Privacy & Trust
        </Link>

        <Link href="/contact-sales">
          Contact Sales
        </Link>

        <Link href="/talk-to-an-expert">
          Talk to an Expert
        </Link>
      </nav>
    </div>
  );
}

