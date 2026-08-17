import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

const mappingDimensions = [
  {
    number: "01",
    title: "Business function",
    value: "Customer Operations",
    text: "Place AI inside the part of the organization where it is used.",
  },
  {
    number: "02",
    title: "Business process",
    value: "Customer Support",
    text: "Connect AI to the process where work and decisions take place.",
  },
  {
    number: "03",
    title: "Business service",
    value: "Customer Assistance",
    text: "Identify the service that may depend on the AI capability.",
  },
  {
    number: "04",
    title: "Business ownership",
    value: "Digital Operations",
    text: "Retain the team responsible for the surrounding business activity.",
  },
];

export default function AIBusinessMappingPage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Platform Capability 02
              </p>

              <h1>
                Map AI to the business structures it serves.
              </h1>

              <p className={styles.heroText}>
                AI Business Mapping connects AI systems and activity to
                business functions, processes, services and ownership so
                their operational relationships are explicit.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/talk-to-an-expert"
                  className={styles.primaryButton}
                >
                  Talk to an Expert
                </Link>

                <Link
                  href="/platform"
                  className={styles.secondaryButton}
                >
                  Platform Overview
                </Link>
              </div>
            </div>


            <div className={styles.mapScene}>

              <div className={styles.mapSurface}>

                <div className={styles.mapHeader}>
                  <div>
                    <span>AI Business Mapping</span>
                    <strong>Business relationship view</strong>
                  </div>

                  <span className={styles.mapState}>
                    Mapped
                  </span>
                </div>


                <div className={styles.relationshipMap}>

                  <div className={styles.aiSide}>
                    <span className={styles.mapLabel}>
                      AI
                    </span>

                    <div className={styles.aiAsset}>
                      <span>AI activity</span>

                      <strong>
                        Customer service agent
                      </strong>

                      <small>
                        Active capability
                      </small>
                    </div>
                  </div>


                  <div className={styles.relationshipLane}>
                    <span />
                    <span />
                    <span />
                  </div>


                  <div className={styles.businessSide}>
                    <span className={styles.mapLabel}>
                      Business
                    </span>

                    <div className={styles.businessTarget}>
                      <span>Function</span>
                      <strong>Customer Operations</strong>
                    </div>

                    <div className={styles.businessTarget}>
                      <span>Process</span>
                      <strong>Customer Support</strong>
                    </div>

                    <div className={styles.businessTarget}>
                      <span>Owner</span>
                      <strong>Digital Operations</strong>
                    </div>
                  </div>

                </div>


                <div className={styles.mapFooter}>
                  <span>
                    Relationship established
                  </span>

                  <strong>
                    Business context available
                  </strong>
                </div>

              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.relationshipSection}>
        <PublicContainer>

          <div className={styles.relationshipHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Business relationships
              </p>

              <h2>
                AI does not operate in an organizational vacuum.
              </h2>
            </div>

            <p>
              Mapping establishes the business relationships that explain
              where AI is used, which processes depend on it and who owns
              the surrounding work.
            </p>
          </div>


          <div className={styles.relationshipMatrix}>

            <div className={styles.matrixOrigin}>
              <span>
                AI capability
              </span>

              <strong>
                Customer service agent
              </strong>
            </div>


            <div className={styles.matrixRelationships}>
              {mappingDimensions.map((item) => (
                <div
                  key={item.number}
                  className={styles.matrixRow}
                >
                  <span className={styles.matrixNumber}>
                    {item.number}
                  </span>

                  <div>
                    <span className={styles.matrixType}>
                      {item.title}
                    </span>

                    <strong>
                      {item.value}
                    </strong>
                  </div>

                  <p>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.domainSection}>
        <PublicContainer>

          <div className={styles.domainGrid}>

            <div className={styles.domainCopy}>
              <p className={styles.sectionLabelLight}>
                Business domain view
              </p>

              <h2>
                Mapping shows where AI sits across the operating model.
              </h2>

              <p>
                The same AI capability can participate in multiple business
                relationships. AIGO-OS keeps those relationships visible
                without reducing the organization to a generic technical map.
              </p>
            </div>


            <div className={styles.domainCanvas}>

              <div className={styles.domainBand}>
                <span>
                  Business domain
                </span>

                <strong>
                  Customer Operations
                </strong>
              </div>

              <div className={styles.domainColumns}>

                <div>
                  <span>
                    Process
                  </span>

                  <strong>
                    Customer Support
                  </strong>

                  <p>
                    Operational process using the AI capability.
                  </p>
                </div>

                <div>
                  <span>
                    Service
                  </span>

                  <strong>
                    Customer Assistance
                  </strong>

                  <p>
                    Business service influenced by the capability.
                  </p>
                </div>

                <div>
                  <span>
                    Ownership
                  </span>

                  <strong>
                    Digital Operations
                  </strong>

                  <p>
                    Team responsible for the surrounding activity.
                  </p>
                </div>

              </div>


              <div className={styles.domainAi}>
                <span>
                  Mapped AI
                </span>

                <strong>
                  Customer service agent
                </strong>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.mappingValueSection}>
        <PublicContainer>

          <div className={styles.mappingValueHeader}>
            <p className={styles.sectionLabel}>
              Why mapping changes the analysis
            </p>

            <h2>
              A technical record becomes a business relationship.
            </h2>
          </div>


          <div className={styles.mappingValueLayout}>

            <div className={styles.unmappedView}>
              <span className={styles.viewLabel}>
                Unmapped
              </span>

              <div className={styles.unmappedAsset}>
                <span>AI system</span>
                <strong>Customer service agent</strong>
              </div>

              <p>
                The AI capability is visible, but the surrounding
                operating relationships must still be discovered manually.
              </p>
            </div>


            <div className={styles.mappedView}>
              <span className={styles.viewLabel}>
                Business mapped
              </span>

              <div className={styles.mappedRows}>

                <div>
                  <span>AI</span>
                  <strong>Customer service agent</strong>
                </div>

                <div>
                  <span>Function</span>
                  <strong>Customer Operations</strong>
                </div>

                <div>
                  <span>Process</span>
                  <strong>Customer Support</strong>
                </div>

                <div>
                  <span>Owner</span>
                  <strong>Digital Operations</strong>
                </div>

              </div>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.handoffSection}>
        <PublicContainer>

          <div className={styles.handoff}>
            <div>
              <p className={styles.sectionLabelLight}>
                Next capability
              </p>

              <h2>
                Activity & Event Correlation
              </h2>

              <p>
                Once AI is mapped to the business, activity can be
                understood alongside the enterprise events around it.
              </p>
            </div>

            <Link
              href="/platform/activity-event-correlation"
              className={styles.nextLink}
            >
              Continue to capability 03
            </Link>
          </div>

        </PublicContainer>
      </section>
    </>
  );
}



