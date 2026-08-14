import Link from "next/link";

import styles from "@/styles/page01-home.module.css";

const useCases = [
  {
    number: "01",
    title: "Establish Accountable AI Identity",
    copy:
      "Resolve fragmented AI identities and technical representations into accountable organisational context.",
    signal: "AI identity context",
    result: "Accountable AI identity",
  },
  {
    number: "02",
    title: "Assess Excessive Agency",
    copy:
      "Assess whether AI authority, functionality or autonomy extends beyond its intended purpose or operating conditions.",
    signal: "Authority and autonomy",
    result: "Agency assessment",
  },
  {
    number: "03",
    title: "Assess AI Authority & Privilege",
    copy:
      "Understand the permissions, access and delegated authority available to an AI Actor in enterprise context.",
    signal: "Identity and privilege",
    result: "Authority assessment",
  },
  {
    number: "04",
    title: "Establish Human Oversight",
    copy:
      "Bring accountable human judgment into AI activity when governance, consequence or authority requires it.",
    signal: "Governance requirement",
    result: "Human oversight",
  },
  {
    number: "05",
    title: "Prioritise AI Governance",
    copy:
      "Focus governance attention where AI authority and activity carry the greatest business significance.",
    signal: "Business significance",
    result: "Governance priority",
  },
  {
    number: "06",
    title: "Build AI Governance Evidence",
    copy:
      "Preserve the context, authority and decisions needed for traceability, assurance and audit.",
    signal: "Governance decision",
    result: "Governance evidence",
  },
];

const governanceStages = [
  "Connect",
  "Identify",
  "Authorize",
  "Understand",
  "Determine Significance",
  "Govern",
  "Prove",
  "Reassess",
];

export function Page01CoreSections() {
  return (
    <>
      <section className={styles.actionBoundarySection}>
        <div className={styles.page01Shell}>
          <div className={styles.editorialSplit}>
            <div>
              <p className={styles.goldEyebrow}>WHY AIGO-OS NOW</p>

              <h2 className={styles.controlledHeadline}>
                <span>Enterprise AI has crossed</span>
                <span>the action boundary.</span>
              </h2>
            </div>

            <div className={styles.editorialCopyRaised}>
              <p>
                AI is moving beyond generating answers. It can participate
                in workflows, use enterprise tools and interact with
                systems that affect real operations.
              </p>

              <p>
                That changes the governance problem. Technical access alone
                cannot determine whether an action is appropriate in its
                current business context.
              </p>
            </div>
          </div>

          <div className={styles.actionJourney}>
            <div className={styles.journeyStage}>
              <span className={styles.journeyNumber}>01</span>

              <div className={styles.journeyOrb} aria-hidden="true">
                <span />
              </div>

              <h3>Generate</h3>

              <p>
                AI produces content, analysis and recommendations.
              </p>
            </div>

            <div className={styles.journeyStage}>
              <span className={styles.journeyNumber}>02</span>

              <div className={styles.journeyOrb} aria-hidden="true">
                <span />
                <span />
              </div>

              <h3>Reason</h3>

              <p>
                AI interprets context and determines possible next steps.
              </p>
            </div>

            <div className={styles.journeyStage}>
              <span className={styles.journeyNumber}>03</span>

              <div className={styles.journeyOrb} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <h3>Use tools</h3>

              <p>
                AI can call APIs, use applications and participate in
                enterprise workflows.
              </p>
            </div>

            <div className={styles.journeyStage}>
              <span className={styles.journeyNumber}>04</span>

              <div
                className={`${styles.journeyOrb} ${styles.journeyOrbActive}`}
                aria-hidden="true"
              >
                <span />
                <span />
              </div>

              <h3>Take action</h3>

              <p>
                AI can increasingly influence or change real business
                operations.
              </p>
            </div>
          </div>

          <div className={styles.governanceQuestion}>
            <div>
              <span className={styles.governanceQuestionLabel}>
                THE GOVERNANCE QUESTION
              </span>
            </div>

            <div className={styles.governanceQuestionCopy}>
              <strong>
                Access tells you what an AI system can reach.
              </strong>

              <strong>
                AIGO-OS helps govern what it should be allowed to do.
              </strong>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.positionSection}>
        <div className={styles.page01Shell}>
          <div className={styles.editorialSplit}>
            <div>
              <p className={styles.goldEyebrow}>WHERE AIGO-OS FITS</p>

              <h2 className={styles.controlledHeadline}>
  <span>Not another dashboard.</span>
  <span className="page01HeadlineKeep">
    A governance operating system for autonomous
  </span>
  <span>enterprise AI.</span>
</h2>
            </div>

            <div className={styles.editorialCopyRaised}>
              <p>
                Identity, observability, security and GRC remain important.
                AIGO-OS is designed to work with that enterprise context
                rather than replace it.
              </p>

              <p>
                Its role is to connect relevant context to the continuous
                governance of enterprise AI.
              </p>
            </div>
          </div>

          <div className={styles.enterpriseLandscape}>
            <article className={styles.landscapeCard}>
              <span className={styles.landscapeLabel}>
                OBSERVABILITY
              </span>

              <h3>What is happening technically?</h3>

              <p>
                Operational signals, telemetry, system state and changing
                conditions.
              </p>

              <div className={styles.aigoAdds}>
                <span>AIGO-OS ADDS</span>

                <strong>
                  Relevant operational signals become governance context.
                </strong>
              </div>
            </article>

            <article className={styles.landscapeCard}>
              <span className={styles.landscapeLabel}>
                IDENTITY AND ACCESS
              </span>

              <h3>Who can reach what?</h3>

              <p>
                Identity, roles, privileges, credentials and technical
                access.
              </p>

              <div className={styles.aigoAdds}>
                <span>AIGO-OS ADDS</span>

                <strong>
                  The authority question: what may this AI actor actually do?
                </strong>
              </div>
            </article>

            <article className={styles.landscapeCard}>
              <span className={styles.landscapeLabel}>GRC</span>

              <h3>What policies, risks and obligations apply?</h3>

              <p>
                Policies, controls, risks, assessments, attestations and
                compliance workflows.
              </p>

              <div className={styles.aigoAdds}>
                <span>AIGO-OS ADDS</span>

                <strong>
                  Governance requirements connect to AI state, decisions,
                  supported actions and evidence.
                </strong>
              </div>
            </article>

            <article className={styles.landscapeCard}>
              <span className={styles.landscapeLabel}>
                AI INVENTORY
              </span>

              <h3>What AI exists?</h3>

              <p>
                Records of AI systems, models, applications and related
                assets.
              </p>

              <div className={styles.aigoAdds}>
                <span>AIGO-OS ADDS</span>

                <strong>
                  Persistent governance identity, relationships, authority
                  and changing governance state.
                </strong>
              </div>
            </article>
          </div>
        </div>
      </section>


      <section className={styles.gopSection}>
        <div className={styles.page01Shell}>
          <div className={styles.gopHeading}>
            <p className={styles.blueEyebrow}>
              THE OPERATING MODEL
            </p>

            <h2>Govern. Operate. Prove.</h2>

            <p>
              Establish governance context, keep it connected to changing
              enterprise conditions and preserve the evidence behind
              consequential decisions.
            </p>
          </div>

          <div className={styles.gopScene}>
            <article className={styles.gopCard}>
              <span className={styles.gopNumber}>01</span>

              <div className={styles.gopObject} aria-hidden="true">
                <div className={styles.gopDisc}>
                  <span className={styles.gopCore} />
                </div>

                <div className={styles.gopOrbit}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <span className={styles.gopLabel}>GOVERN</span>

              <h3>
                Establish the governance context for autonomous operation.
              </h3>

              <div className={styles.gopTokens}>
                <span>Discovery</span>
                <span>Actor identity</span>
                <span>Relationships</span>
                <span>Authority</span>
                <span>Business Significance</span>
                <span>Risk</span>
                <span>Policy</span>
              </div>
            </article>

            <article className={styles.gopCard}>
              <span className={styles.gopNumber}>02</span>

              <div className={styles.gopObject} aria-hidden="true">
                <div className={styles.gopDisc}>
                  <span className={styles.gopCore} />
                </div>

                <div className={styles.gopSignalRail}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <span className={styles.gopLabel}>OPERATE</span>

              <h3>
                Keep governance connected to a changing enterprise
                environment.
              </h3>

              <div className={styles.gopTokens}>
                <span>Integrations</span>
                <span>Continuous signals</span>
                <span>Monitoring</span>
                <span>Execution paths</span>
                <span>Human exceptions</span>
                <span>Reassessment</span>
              </div>
            </article>

            <article className={styles.gopCard}>
              <span className={styles.gopNumber}>03</span>

              <div className={styles.gopObject} aria-hidden="true">
                <div className={styles.receiptObject}>
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <span className={styles.gopLabel}>PROVE</span>

              <h3>
                Preserve enough context to reconstruct governance decisions.
              </h3>

              <div className={styles.gopTokens}>
                <span>Decision reasoning</span>
                <span>Evidence</span>
                <span>Governance Receipts</span>
                <span>Audit trail</span>
                <span>Assurance</span>
                <span>Reporting</span>
              </div>
            </article>
          </div>
        </div>
      </section>


      <section className={styles.solutionsSection}>
        <div className={styles.page01Shell}>
          <div className={styles.solutionsIntro}>
            <div>
              <p className={styles.goldEyebrow}>SOLUTIONS</p>

              <span className={styles.useCasePill}>BY USE CASE</span>

              <h2 className={styles.controlledHeadlineDark}>
                <span>Govern the problems that emerge</span>
                <span>when AI begins to act.</span>
              </h2>
            </div>

            <div className={styles.solutionsIntroCopy}>
              <p>
                These are governance problems, not isolated product
                features.
              </p>

              <p>
                AIGO-OS brings identity, authority, Business Significance,
                risk, policy, decisioning and evidence together around each
                one.
              </p>
            </div>
          </div>

          <div className={styles.useCaseGrid}>
            {useCases.map((useCase) => (
              <article className={styles.useCaseCard} key={useCase.number}>
                <div className={styles.useCaseTop}>
                  <span>{useCase.number}</span>

                  <div className={styles.useCaseIndicator} aria-hidden="true">
                    <span />
                  </div>
                </div>

                <h3>{useCase.title}</h3>

                <p>{useCase.copy}</p>

                <div className={styles.useCaseFlow}>
                  <div>
                    <span>Signal</span>
                    <strong>{useCase.signal}</strong>
                  </div>

                  <div className={styles.useCaseConnector} aria-hidden="true" />

                  <div>
                    <span>Governance</span>
                    <strong>{useCase.result}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.sectionAction}>
            <Link href="/solutions" className={styles.lightActionButton}>
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>


      <section className={styles.loopSection}>
        <div className={styles.page01Shell}>
          <div className={styles.loopIntro}>
            <p className={styles.blueEyebrow}>
              HOW AIGO-OS WORKS
            </p>

            <h2>
              A continuous governance loop for enterprise AI.
            </h2>

            <p>
              Governance context must keep changing as AI actors,
              authority, business conditions, risks and requirements change.
            </p>
          </div>

          <div className={styles.loopVisual}>
            <div className={styles.loopRail} aria-hidden="true" />

            {governanceStages.map((stage, index) => (
              <div className={styles.loopStage} key={stage}>
                <span className={styles.loopIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.loopNode} aria-hidden="true" />

                <strong>{stage}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className={styles.finalPage01Cta}>
        <div className={styles.finalCtaGlow} aria-hidden="true" />

        <div className={styles.finalCtaInner}>
          <p className={styles.blueEyebrow}>AIGO-OS</p>

          <h2>
            <span>Know what AI activity means to your business.</span>
            <span>Know what governance should apply, as it happens.</span>
          </h2>

          <p>
            Connect AIGO-OS to the systems your enterprise already uses and
            establish a governance layer for AI identity, authority,
            Business Significance, decisioning and evidence.
          </p>

          <div className={styles.finalCtaActions}>
            <Link href="/demo" className={styles.primaryButton}>
              Request a Demo
            </Link>

            <Link href="/get-started" className={styles.secondaryButton}>
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


