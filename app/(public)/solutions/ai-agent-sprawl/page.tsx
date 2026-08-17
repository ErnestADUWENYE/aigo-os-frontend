import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

const estateProblems = [
  {
    number: "01",
    title: "Distributed ownership",
    text:
      "Agents can emerge across different teams without one clear enterprise view of responsibility.",
  },
  {
    number: "02",
    title: "Duplicated capability",
    text:
      "Similar agents can be created in parallel across functions without a shared understanding of overlap.",
  },
  {
    number: "03",
    title: "Visibility gaps",
    text:
      "Management may know individual agents exist without understanding the wider estate they form together.",
  },
];

export default function AIAgentSprawlPage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                AIGO-OS Govern Use Case
              </p>

              <h1>
                Bring a fragmented AI agent estate into one enterprise view.
              </h1>

              <p className={styles.heroText}>
                AI Agent Sprawl helps organizations understand where agents
                exist, who owns them, where capabilities overlap and which parts
                of the estate need governance attention.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/request-demo"
                  className={styles.primaryButton}
                >
                  Request a Demo
                </Link>

                <Link
                  href="/products/aigo-os-govern"
                  className={styles.secondaryButton}
                >
                  Explore AIGO-OS Govern
                </Link>
              </div>
            </div>


            <div className={styles.estateView}>

              <div className={styles.estateHeader}>
                <div>
                  <span>
                    AI Agent Estate
                  </span>

                  <strong>
                    Enterprise distribution
                  </strong>
                </div>

                <span className={styles.estateState}>
                  12 agents visible
                </span>
              </div>


              <div className={styles.estateGrid}>

                <div className={styles.businessGroup}>
                  <span>
                    Customer Operations
                  </span>

                  <div className={styles.agentCluster}>
                    <div>
                      <strong>Service Agent</strong>
                      <small>Owned</small>
                    </div>

                    <div>
                      <strong>Support Agent</strong>
                      <small>Owned</small>
                    </div>

                    <div className={styles.agentAttention}>
                      <strong>Escalation Agent</strong>
                      <small>Owner unclear</small>
                    </div>
                  </div>
                </div>


                <div className={styles.businessGroup}>
                  <span>
                    Finance Operations
                  </span>

                  <div className={styles.agentCluster}>
                    <div>
                      <strong>Invoice Agent</strong>
                      <small>Owned</small>
                    </div>

                    <div className={styles.agentAttention}>
                      <strong>Adjustment Agent</strong>
                      <small>Overlap detected</small>
                    </div>
                  </div>
                </div>


                <div className={styles.businessGroup}>
                  <span>
                    Enterprise Technology
                  </span>

                  <div className={styles.agentCluster}>
                    <div>
                      <strong>Access Agent</strong>
                      <small>Owned</small>
                    </div>

                    <div>
                      <strong>Support Copilot</strong>
                      <small>Owned</small>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.problemSection}>
        <PublicContainer>

          <div className={styles.problemHeader}>
            <p className={styles.sectionLabel}>
              Sprawl problem
            </p>

            <h2>
              The problem is not that agents exist. It is that the estate becomes difficult to understand.
            </h2>
          </div>


          <div className={styles.problemGrid}>
            {estateProblems.map((item) => (
              <article
                key={item.number}
                className={styles.problemItem}
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


      <section className={styles.distributionSection}>
        <PublicContainer>

          <div className={styles.distributionGrid}>

            <div className={styles.distributionCopy}>
              <p className={styles.sectionLabelLight}>
                Distributed estate
              </p>

              <h2>
                Agents can spread across the organization faster than governance visibility.
              </h2>

              <p>
                Teams may deploy useful agents independently, but the enterprise
                still needs to understand the combined estate, its ownership and
                where duplication or unmanaged growth is emerging.
              </p>
            </div>


            <div className={styles.distributionBoard}>

              <div className={styles.distributionColumn}>
                <span>
                  Customer Operations
                </span>

                <div>
                  <strong>
                    4 agents
                  </strong>

                  <small>
                    1 ownership exception
                  </small>
                </div>
              </div>

              <div className={styles.distributionColumn}>
                <span>
                  Finance Operations
                </span>

                <div>
                  <strong>
                    3 agents
                  </strong>

                  <small>
                    1 capability overlap
                  </small>
                </div>
              </div>

              <div className={styles.distributionColumn}>
                <span>
                  Enterprise Technology
                </span>

                <div>
                  <strong>
                    5 agents
                  </strong>

                  <small>
                    ownership established
                  </small>
                </div>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.overlapSection}>
        <PublicContainer>

          <div className={styles.overlapHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Capability overlap
              </p>

              <h2>
                Similar agents can appear in different parts of the business for different reasons.
              </h2>
            </div>

            <p>
              Sprawl becomes more important when multiple agents begin serving
              similar purposes without shared ownership or enterprise visibility.
            </p>
          </div>


          <div className={styles.overlapLayout}>

            <div className={styles.overlapAgent}>
              <span>
                Customer Operations
              </span>

              <strong>
                Customer Resolution Agent
              </strong>

              <p>
                Handles customer service exceptions.
              </p>
            </div>


            <div className={styles.overlapCenter}>
              <span>
                Capability overlap
              </span>

              <strong>
                Issue resolution
              </strong>

              <p>
                Similar operating purpose appears in two separate agents.
              </p>
            </div>


            <div className={styles.overlapAgent}>
              <span>
                Finance Operations
              </span>

              <strong>
                Adjustment Resolution Agent
              </strong>

              <p>
                Handles financial service exceptions.
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.consolidationSection}>
        <PublicContainer>

          <div className={styles.consolidationGrid}>

            <div className={styles.consolidationIntro}>
              <p className={styles.sectionLabelLight}>
                Enterprise visibility
              </p>

              <h2>
                A clearer estate view makes governance questions easier to prioritize.
              </h2>
            </div>


            <div className={styles.consolidationBoard}>

              <div className={styles.summaryPanel}>
                <span>
                  Total agents
                </span>

                <strong>
                  12
                </strong>
              </div>

              <div className={styles.summaryPanel}>
                <span>
                  Ownership exceptions
                </span>

                <strong>
                  2
                </strong>
              </div>

              <div className={styles.summaryPanel}>
                <span>
                  Capability overlaps
                </span>

                <strong>
                  1
                </strong>
              </div>

              <div className={styles.summaryPanelStrong}>
                <span>
                  Governance attention
                </span>

                <strong>
                  3 items
                </strong>
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
                See AI Agent Sprawl in AIGO-OS
              </p>

              <h2>
                See how a distributed agent estate can become easier to understand and govern.
              </h2>

              <p>
                Request a demo to see how AIGO-OS Govern can bring agent
                ownership, overlap and governance attention into one enterprise view.
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

