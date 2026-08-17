import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

const dependencyTypes = [
  {
    number: "01",
    title: "Direct dependency",
    text:
      "A business process relies directly on an AI capability to operate.",
  },
  {
    number: "02",
    title: "Service dependency",
    text:
      "A business service depends on a process that itself depends on AI.",
  },
  {
    number: "03",
    title: "Operational dependency",
    text:
      "A wider business function may depend on several connected services and processes.",
  },
];

export default function AIBusinessDependenciesPage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                AIGO-OS Impact Use Case
              </p>

              <h1>
                See which parts of the business depend on AI.
              </h1>

              <p className={styles.heroText}>
                AI Business Dependencies connects AI capabilities to the
                processes, services and business functions that rely on them,
                so operational dependence is visible before something changes.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/request-demo"
                  className={styles.primaryButton}
                >
                  Request a Demo
                </Link>

                <Link
                  href="/products/aigo-os-impact"
                  className={styles.secondaryButton}
                >
                  Explore AIGO-OS Impact
                </Link>
              </div>
            </div>


            <div className={styles.dependencyMap}>

              <div className={styles.mapHeader}>
                <div>
                  <span>
                    Business dependency view
                  </span>

                  <strong>
                    Customer Operations
                  </strong>
                </div>

                <span className={styles.mapState}>
                  Connected
                </span>
              </div>


              <div className={styles.mapBody}>

                <div className={styles.sourceNode}>
                  <span>
                    AI capability
                  </span>

                  <strong>
                    Customer service agent
                  </strong>
                </div>


                <div className={styles.dependencyPath}>
                  <span />
                  <span />
                  <span />
                </div>


                <div className={styles.targetStack}>
                  <div>
                    <span>
                      Process
                    </span>

                    <strong>
                      Customer Support
                    </strong>
                  </div>

                  <div>
                    <span>
                      Service
                    </span>

                    <strong>
                      Customer Assistance
                    </strong>
                  </div>

                  <div>
                    <span>
                      Business function
                    </span>

                    <strong>
                      Customer Operations
                    </strong>
                  </div>
                </div>

              </div>


              <div className={styles.mapFooter}>
                <span>
                  Dependency chain visible
                </span>

                <strong>
                  Business reliance retained
                </strong>
              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.typesSection}>
        <PublicContainer>

          <div className={styles.typesHeader}>
            <p className={styles.sectionLabel}>
              Types of dependency
            </p>

            <h2>
              Business reliance can be direct, indirect and operational.
            </h2>
          </div>


          <div className={styles.typesGrid}>
            {dependencyTypes.map((item) => (
              <article
                key={item.number}
                className={styles.typeItem}
              >
                <span>
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>
              </article>
            ))}
          </div>

        </PublicContainer>
      </section>


      <section className={styles.chainSection}>
        <PublicContainer>

          <div className={styles.chainGrid}>

            <div className={styles.chainCopy}>
              <p className={styles.sectionLabelLight}>
                Dependency chain
              </p>

              <h2>
                One AI capability can sit beneath several layers of business reliance.
              </h2>

              <p>
                AIGO-OS Impact keeps those layers connected so the business
                does not have to rediscover them only after an incident or change.
              </p>
            </div>


            <div className={styles.chainBoard}>

              <div className={styles.chainStagePrimary}>
                <span>
                  AI capability
                </span>

                <strong>
                  Customer service agent
                </strong>
              </div>

              <div className={styles.chainStage}>
                <span>
                  Process
                </span>

                <strong>
                  Customer Support
                </strong>

                <small>
                  Direct dependency
                </small>
              </div>

              <div className={styles.chainStage}>
                <span>
                  Service
                </span>

                <strong>
                  Customer Assistance
                </strong>

                <small>
                  Service dependency
                </small>
              </div>

              <div className={styles.chainStageStrong}>
                <span>
                  Business function
                </span>

                <strong>
                  Customer Operations
                </strong>

                <small>
                  Operational dependency
                </small>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.depthSection}>
        <PublicContainer>

          <div className={styles.depthHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Dependency depth
              </p>

              <h2>
                The farther a dependency travels, the harder it can be to see manually.
              </h2>
            </div>

            <p>
              A technical dependency may be obvious. The business service,
              customer process or operational function depending on it may not be.
            </p>
          </div>


          <div className={styles.depthLayout}>

            <div className={styles.depthColumn}>
              <span>
                Layer 01
              </span>

              <strong>
                AI capability
              </strong>

              <p>
                Customer service agent
              </p>
            </div>


            <div className={styles.depthColumn}>
              <span>
                Layer 02
              </span>

              <strong>
                Operating process
              </strong>

              <p>
                Customer Support
              </p>
            </div>


            <div className={styles.depthColumn}>
              <span>
                Layer 03
              </span>

              <strong>
                Business service
              </strong>

              <p>
                Customer Assistance
              </p>
            </div>


            <div className={styles.depthColumnEmphasis}>
              <span>
                Layer 04
              </span>

              <strong>
                Business function
              </strong>

              <p>
                Customer Operations
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.exposureSection}>
        <PublicContainer>

          <div className={styles.exposureGrid}>

            <div className={styles.exposureIntro}>
              <p className={styles.sectionLabelLight}>
                Business exposure
              </p>

              <h2>
                Dependency visibility makes potential business exposure easier to understand.
              </h2>
            </div>


            <div className={styles.exposureBoard}>

              <div className={styles.exposureRow}>
                <span>
                  AI capability
                </span>

                <strong>
                  Customer service agent
                </strong>

                <small>
                  Source dependency
                </small>
              </div>

              <div className={styles.exposureRow}>
                <span>
                  Process reliance
                </span>

                <strong>
                  Customer Support
                </strong>

                <small>
                  Directly dependent
                </small>
              </div>

              <div className={styles.exposureRow}>
                <span>
                  Service reliance
                </span>

                <strong>
                  Customer Assistance
                </strong>

                <small>
                  Indirectly dependent
                </small>
              </div>

              <div className={styles.exposureRowStrong}>
                <span>
                  Business exposure
                </span>

                <strong>
                  Customer Operations
                </strong>

                <small>
                  High significance
                </small>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.demoSection}>
        <PublicContainer>

          <div className={styles.demoPanel}>
            <div>
              <p className={styles.sectionLabelLight}>
                See AI Business Dependencies in AIGO-OS
              </p>

              <h2>
                See how AI dependencies can stay connected to the business structures that rely on them.
              </h2>

              <p>
                Request a demo to see how AIGO-OS Impact can make
                direct and indirect business dependencies easier to understand.
              </p>
            </div>

            <Link
              href="/request-demo"
              className={styles.demoButton}
            >
              Request a Demo
            </Link>
          </div>

        </PublicContainer>
      </section>
    </>
  );
}

