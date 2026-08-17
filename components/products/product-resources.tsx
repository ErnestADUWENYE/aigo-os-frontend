import Link from "next/link";

import styles from "./product-resources.module.css";

type ProductResourcesProps = {
  product: "Govern" | "Impact";
};

export function ProductResources({
  product,
}: ProductResourcesProps) {
  const productName = `AIGO-OS ${product}`;

  return (
    <section className={styles.section}>

      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>
            Product Resources
          </p>

          <h2>
            Supporting resources for {productName}.
          </h2>
        </div>

        <p className={styles.intro}>
          Technical implementation, product guidance and enterprise
          assurance remain accessible without competing with the
          product capabilities themselves.
        </p>
      </div>


      <div className={styles.resources}>

        <Link
          href="/integrations"
          className={styles.resource}
        >
          <span className={styles.index}>
            01
          </span>

          <div className={styles.resourceCopy}>
            <span className={styles.label}>
              Connect
            </span>

            <strong>
              Integrations
            </strong>

            <p>
              Technical implementation, connection methods,
              authentication, APIs and integration guidance.
            </p>
          </div>

          <span className={styles.action}>
            View Integrations
          </span>
        </Link>


        <Link
          href="/help"
          className={styles.resource}
        >
          <span className={styles.index}>
            02
          </span>

          <div className={styles.resourceCopy}>
            <span className={styles.label}>
              Use
            </span>

            <strong>
              Help Center
            </strong>

            <p>
              Product guidance, administration help,
              how-to information and troubleshooting.
            </p>
          </div>

          <span className={styles.action}>
            Visit Help Center
          </span>
        </Link>


        <Link
          href="/trust"
          className={styles.resource}
        >
          <span className={styles.index}>
            03
          </span>

          <div className={styles.resourceCopy}>
            <span className={styles.label}>
              Trust
            </span>

            <strong>
              Privacy & Trust
            </strong>

            <p>
              Security, privacy, compliance, data protection,
              architecture and assurance information.
            </p>
          </div>

          <span className={styles.action}>
            View Privacy & Trust
          </span>
        </Link>

      </div>

    </section>
  );
}
