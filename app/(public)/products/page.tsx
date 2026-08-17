import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

export default function ProductsPage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                AIGO-OS Products
              </p>

              <h1>
                Two products. One connected intelligence foundation.
              </h1>

              <p className={styles.heroText}>
                AIGO-OS Govern and AIGO-OS Impact use the same enterprise
                context, business mapping and contextual intelligence
                foundation to answer different management questions.
              </p>
            </div>


            <div className={styles.heroSummary}>
              <div>
                <span>
                  Product 01
                </span>

                <strong>
                  AIGO-OS Govern
                </strong>

                <p>
                  AI Governance Intelligence
                </p>
              </div>

              <div>
                <span>
                  Product 02
                </span>

                <strong>
                  AIGO-OS Impact
                </strong>

                <p>
                  AI Business Impact Intelligence
                </p>
              </div>
            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.productSplitSection}>
        <PublicContainer>

          <div className={styles.productSplit}>

            <article className={styles.governProduct}>
              <div className={styles.productTop}>
                <span className={styles.productNumber}>
                  01
                </span>

                <span className={styles.productCategory}>
                  AI Governance Intelligence
                </span>
              </div>

              <div className={styles.productBody}>
                <h2>
                  AIGO-OS Govern
                </h2>

                <p>
                  Understand accountability, authority and governance
                  priorities in the business context surrounding AI.
                </p>
              </div>

              <div className={styles.governView}>
                <div>
                  <span>
                    Accountability
                  </span>

                  <strong>
                    Responsible owner identified
                  </strong>
                </div>

                <div>
                  <span>
                    Authority
                  </span>

                  <strong>
                    Decision rights visible
                  </strong>
                </div>

                <div>
                  <span>
                    Governance priority
                  </span>

                  <strong>
                    Management review required
                  </strong>
                </div>
              </div>

              <Link
                href="/products/aigo-os-govern"
                className={styles.productLinkLight}
              >
                Explore AIGO-OS Govern
              </Link>
            </article>


            <article className={styles.impactProduct}>
              <div className={styles.productTop}>
                <span className={styles.productNumberDark}>
                  02
                </span>

                <span className={styles.productCategoryDark}>
                  AI Business Impact Intelligence
                </span>
              </div>

              <div className={styles.productBodyDark}>
                <h2>
                  AIGO-OS Impact
                </h2>

                <p>
                  Understand how AI incidents, changes and dependencies
                  connect to business impact.
                </p>
              </div>

              <div className={styles.impactView}>
                <div>
                  <span>
                    Incident
                  </span>

                  <strong>
                    Business area affected
                  </strong>
                </div>

                <div>
                  <span>
                    Change
                  </span>

                  <strong>
                    Operational consequence visible
                  </strong>
                </div>

                <div>
                  <span>
                    Dependency
                  </span>

                  <strong>
                    Business relationship retained
                  </strong>
                </div>
              </div>

              <Link
                href="/products/aigo-os-impact"
                className={styles.productLinkDark}
              >
                Explore AIGO-OS Impact
              </Link>
            </article>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.sharedSection}>
        <PublicContainer>

          <div className={styles.sharedHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Shared intelligence foundation
              </p>

              <h2>
                Both products start with the same connected business context.
              </h2>
            </div>

            <p>
              The difference is not the underlying enterprise context.
              The difference is the management question each product is
              designed to answer.
            </p>
          </div>


          <div className={styles.foundationFlow}>

            <div className={styles.foundationStage}>
              <span>
                Enterprise Context
              </span>

              <strong>
                Where AI sits in the organization
              </strong>
            </div>

            <div className={styles.foundationStage}>
              <span>
                AI Business Mapping
              </span>

              <strong>
                What business structures it serves
              </strong>
            </div>

            <div className={styles.foundationStage}>
              <span>
                Contextual Intelligence
              </span>

              <strong>
                What the connected activity means
              </strong>
            </div>

            <div className={styles.foundationDecision}>
              <div>
                <span>
                  Govern
                </span>

                <strong>
                  What needs governance attention?
                </strong>
              </div>

              <div>
                <span>
                  Impact
                </span>

                <strong>
                  What matters to the business?
                </strong>
              </div>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.choiceSection}>
        <PublicContainer>

          <div className={styles.choiceGrid}>

            <div className={styles.choiceIntro}>
              <p className={styles.sectionLabelLight}>
                Choose by management question
              </p>

              <h2>
                Start with what your organization needs to understand.
              </h2>
            </div>


            <div className={styles.choiceQuestions}>
              <Link
                href="/products/aigo-os-govern"
                className={styles.choiceItem}
              >
                <span>
                  Governance
                </span>

                <strong>
                  Who is accountable, what authority exists, and what needs governance attention?
                </strong>
              </Link>

              <Link
                href="/products/aigo-os-impact"
                className={styles.choiceItem}
              >
                <span>
                  Business impact
                </span>

                <strong>
                  What changed, what is affected, and where does the business impact sit?
                </strong>
              </Link>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.finalSection}>
        <PublicContainer>
          <div className={styles.finalPanel}>

            <div>
              <p className={styles.sectionLabelLight}>
                AIGO-OS Products
              </p>

              <h2>
                Explore the product that matches the question you need answered.
              </h2>
            </div>

            <div className={styles.finalActions}>
              <Link
                href="/products/aigo-os-govern"
                className={styles.finalPrimary}
              >
                AIGO-OS Govern
              </Link>

              <Link
                href="/products/aigo-os-impact"
                className={styles.finalSecondary}
              >
                AIGO-OS Impact
              </Link>
            </div>

          </div>
        </PublicContainer>
      </section>
    </>
  );
}

