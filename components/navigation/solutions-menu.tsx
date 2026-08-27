import Link from "next/link";

import {
  ArrowUpRight,
  CircleAlert,
  FileWarning,
  GitBranch,
  Network,
  SearchX,
  ShieldAlert,
  UserRoundX,
  Workflow,
} from "lucide-react";

import {
  governSolutions,
  impactSolutions,
} from "./solution-catalogue";

import styles from "./solutions-menu.module.css";


type Props = {
  onNavigate?: () => void;
};


const governIcons = [
  ShieldAlert,
  GitBranch,
  SearchX,
  FileWarning,
  UserRoundX,
];


const impactIcons = [
  GitBranch,
  CircleAlert,
  Network,
  Workflow,
];


export function SolutionsMenu({
  onNavigate,
}: Props) {
  return (
    <div className={styles.menu}>

      <div className={styles.topBar}>
        <div>
          <span className={styles.eyebrow}>
            Solutions
          </span>

          <strong className={styles.topTitle}>
            By Use Case
          </strong>

          <p className={styles.topDescription}>
            Start with the enterprise problem you need to understand.
          </p>
        </div>

        <span className={styles.topNote}>
          Govern + Impact
        </span>
      </div>


      <div className={styles.groups}>

        {/* ===================================================
            AIGO-OS GOVERN
            =================================================== */}

        <section className={styles.group}>

          <div
            className={`${styles.groupHeader} ${styles.governHeader}`}
          >
            <div
              className={`${styles.groupIcon} ${styles.governIcon}`}
            >
              <ShieldAlert
                size={22}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </div>

            <div>
              <span className={styles.productType}>
                Governance Intelligence
              </span>

              <strong>
                AIGO-OS Govern
              </strong>

              <p className={styles.productDescription}>
                Understand governance problems using connected
                enterprise context and explainable reasoning.
              </p>
            </div>
          </div>


          <nav
            className={styles.caseList}
            aria-label="AIGO-OS Govern use cases"
          >
            {governSolutions.map((item, index) => {
              const Icon = governIcons[index];

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
                      size={16}
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
                    size={14}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

        </section>


        {/* ===================================================
            AIGO-OS IMPACT
            =================================================== */}

        <section className={styles.group}>

          <div
            className={`${styles.groupHeader} ${styles.impactHeader}`}
          >
            <div
              className={`${styles.groupIcon} ${styles.impactIcon}`}
            >
              <Workflow
                size={22}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </div>

            <div>
              <span className={styles.productType}>
                Business Impact Intelligence
              </span>

              <strong>
                AIGO-OS Impact
              </strong>

              <p className={styles.productDescription}>
                Understand dependencies and business consequences
                across connected enterprise context.
              </p>
            </div>
          </div>


          <nav
            className={styles.caseList}
            aria-label="AIGO-OS Impact use cases"
          >
            {impactSolutions.map((item, index) => {
              const Icon = impactIcons[index];

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
                      size={16}
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
                    size={14}
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
