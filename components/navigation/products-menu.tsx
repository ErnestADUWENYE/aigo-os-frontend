import Link from "next/link";

import styles from "./products-menu.module.css";

type Props = {
  onNavigate?: () => void;
};

export function ProductsMenu({ onNavigate }: Props) {
  return (
    <div className={styles.menu}>

      <div className={styles.topBar}>
        <div className={styles.topCopy}>
          <span className={styles.eyebrow}>
            AIGO-OS PRODUCTS
          </span>

          <strong>
            Intelligence built for action.
          </strong>
        </div>

        <Link
          href="/products"
          onClick={onNavigate}
          className={styles.overviewLink}
        >
          Products Overview
        </Link>
      </div>


      <div className={styles.products}>

        <Link
          href="/products/aigo-os-govern"
          onClick={onNavigate}
          className={styles.product}
        >
          <div className={styles.productHeading}>
            <span className={styles.number}>
              01
            </span>

            <div>
              <span className={styles.category}>
                Governance
              </span>

              <h3>
                AIGO-OS Govern
              </h3>

              <p className={styles.subtitle}>
                AI Governance Intelligence
              </p>
            </div>
          </div>

          <div className={styles.detailList}>
            <span>Accountability</span>
            <span>Governance priorities</span>
            <span>Business context</span>
          </div>

          <span className={styles.explore}>
            Explore Govern
          </span>
        </Link>


        <Link
          href="/products/aigo-os-impact"
          onClick={onNavigate}
          className={styles.product}
        >
          <div className={styles.productHeading}>
            <span className={styles.number}>
              02
            </span>

            <div>
              <span className={styles.category}>
                Business Impact
              </span>

              <h3>
                AIGO-OS Impact
              </h3>

              <p className={styles.subtitle}>
                AI Business Impact Intelligence
              </p>
            </div>
          </div>

          <div className={styles.detailList}>
            <span>Operational impact</span>
            <span>Dependencies</span>
            <span>Management intelligence</span>
          </div>

          <span className={styles.explore}>
            Explore Impact
          </span>
        </Link>

      </div>

    </div>
  );
}
