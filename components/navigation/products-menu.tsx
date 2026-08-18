import Link from "next/link";

import {
  ArrowUpRight,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import styles from "./products-menu.module.css";

type Props = {
  onNavigate?: () => void;
};

const products = [
  {
    icon: ShieldCheck,
    category: "Governance",
    title: "AIGO-OS Govern",
    subtitle: "AI Governance Intelligence",
    href: "/products/aigo-os-govern",
    description:
      "Bring accountability, authority and business context into AI governance decisions.",
    details: [
      "Accountability",
      "Governance priorities",
      "Business context",
    ],
    action: "Explore Govern",
  },
  {
    icon: Workflow,
    category: "Business impact",
    title: "AIGO-OS Impact",
    subtitle: "AI Business Impact Intelligence",
    href: "/products/aigo-os-impact",
    description:
      "Relate AI activity and change to operational dependencies and potential business impact.",
    details: [
      "Operational impact",
      "Dependencies",
      "Management intelligence",
    ],
    action: "Explore Impact",
  },
];

export function ProductsMenu({
  onNavigate,
}: Props) {
  return (
    <div className={styles.menu}>
      <div className={styles.topBar}>
        <div className={styles.topCopy}>
          <span className={styles.eyebrow}>
            AIGO-OS Products
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

          <ArrowUpRight
            size={15}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </Link>
      </div>

      <div className={styles.products}>
        {products.map((product) => {
          const Icon = product.icon;

          return (
            <Link
              key={product.href}
              href={product.href}
              onClick={onNavigate}
              className={styles.product}
            >
              <div className={styles.productTop}>
                <div className={styles.iconWrap}>
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <ArrowUpRight
                  className={styles.cardArrow}
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <div className={styles.productCopy}>
                <span className={styles.category}>
                  {product.category}
                </span>

                <h3>
                  {product.title}
                </h3>

                <p className={styles.subtitle}>
                  {product.subtitle}
                </p>

                <p className={styles.description}>
                  {product.description}
                </p>
              </div>

              <div className={styles.detailList}>
                {product.details.map((detail) => (
                  <span key={detail}>
                    {detail}
                  </span>
                ))}
              </div>

              <span className={styles.explore}>
                {product.action}

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
