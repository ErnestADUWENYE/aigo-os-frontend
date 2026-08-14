"use client";

import Link from "next/link";

import {
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  Clock3,
  Database,
  FileCheck2,
  FileJson,
  Fingerprint,
  Search,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import styles from "@/styles/page08-governance-receipts.module.css";


const receiptContents = [
  {
    number: "01",
    title: "AI Actor",
    text:
      "The governed AI Actor associated with the activity.",
  },
  {
    number: "02",
    title: "AI Activity",
    text:
      "The activity AIGO-OS understood and evaluated.",
  },
  {
    number: "03",
    title: "AI Authority Boundary",
    text:
      "The delegated authority understood for the AI Actor at that time.",
  },
  {
    number: "04",
    title: "Business Significance",
    text:
      "The business meaning and relevance of the activity.",
  },
  {
    number: "05",
    title: "Governance Decisions",
    text:
      "The AI Governance Decision and any Human Governance Decision involved.",
  },
  {
    number: "06",
    title: "Evidence & References",
    text:
      "Relevant timestamps, policy references, source records and decision ownership.",
  },
];


const uses = [
  {
    icon: Search,
    title: "Investigate",
    text:
      "Reconstruct how an AI activity was understood and governed at the time.",
  },
  {
    icon: FileCheck2,
    title: "Assure",
    text:
      "Provide structured evidence for governance, risk, compliance and internal review.",
  },
  {
    icon: Building2,
    title: "Understand patterns",
    text:
      "See where AI activity repeatedly reaches authority, governance or human-review thresholds.",
  },
  {
    icon: ShieldCheck,
    title: "Improve controls",
    text:
      "Use historical governance evidence to refine authority, controls and operating policies.",
  },
];


export function Page08GovernanceReceipts() {
  return (
    <main className={styles.page}>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />

        <div className={styles.shell}>
          <div className={styles.heroLayout}>

            <div className={styles.heroCopy}>
              <p className={styles.blueEyebrow}>
                GOVERNANCE RECEIPTS
              </p>

              <h1>
                Preserve a clear record of how AI activity was understood and governed.
              </h1>

              <p className={styles.heroLead}>
                AIGO-OS creates an AI Governance Receipt that brings
                together the AI Actor, activity, authority, business
                significance and governance decisions associated with
                a governed event.
              </p>

              <p className={styles.heroSupporting}>
                Each receipt provides a durable record of what AIGO-OS
                understood at the time and the decisions that followed.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/contact?intent=demo"
                  className={styles.primaryButton}
                >
                  Request a Demo
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>

                <a
                  href="#receipt-example"
                  className={styles.secondaryButton}
                >
                  See one receipt
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>


            <div className={styles.heroVisual}>
              <div className={styles.receiptPanel}>

                <div className={styles.receiptTop}>
                  <div className={styles.receiptIcon}>
                    <FileCheck2 size={26} aria-hidden="true" />
                  </div>

                  <div>
                    <span>AI GOVERNANCE RECEIPT</span>

                    <strong>
                      AGR-2026-00841
                    </strong>
                  </div>
                </div>


                <div className={styles.receiptSummary}>

                  <div>
                    <span>AI ACTOR</span>
                    <strong>
                      Production Operations AI Agent
                    </strong>
                  </div>

                  <div>
                    <span>AI GOVERNANCE DECISION</span>
                    <strong>
                      Human Authority Required
                    </strong>
                  </div>

                  <div>
                    <span>HUMAN GOVERNANCE DECISION</span>
                    <strong>
                      Approve with Conditions
                    </strong>
                  </div>

                </div>


                <div className={styles.receiptStatus}>
                  <CheckCircle2 size={18} aria-hidden="true" />

                  <div>
                    <span>RECORD STATUS</span>
                    <strong>
                      Governance event recorded
                    </strong>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          PURPOSE
      ====================================================== */}

      <section className={styles.purposeSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.goldEyebrow}>
                THE PURPOSE
              </p>

              <h2>
                Make governed AI activity traceable after the decision is made.
              </h2>
            </div>

            <p>
              Governance Receipts assemble the relevant outputs from
              the AIGO-OS governance flow into one structured record
              that can be reviewed, searched and referenced later.
            </p>
          </div>


          <div className={styles.purposeFlow}>

            <article className={styles.flowCard}>
              <span>INPUT</span>

              <strong>
                Connected governance context
              </strong>

              <p>
                AI Actor, authority, business significance, governance
                decisions and supporting references.
              </p>
            </article>


            <ArrowRight
              className={styles.flowArrow}
              size={24}
              aria-hidden="true"
            />


            <article className={`${styles.flowCard} ${styles.flowCardActive}`}>
              <span>CAPABILITY</span>

              <strong>
                Governance Receipts
              </strong>

              <p>
                Assemble the relevant governance event into a durable,
                structured record.
              </p>
            </article>


            <ArrowRight
              className={styles.flowArrow}
              size={24}
              aria-hidden="true"
            />


            <article className={styles.flowCard}>
              <span>FINAL OUTPUT</span>

              <strong>
                AI Governance Receipt
              </strong>

              <p>
                A packaged record of what was understood, decided and recorded.
              </p>
            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <section className={styles.contentsSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntroCentered}>
            <p className={styles.blueDarkEyebrow}>
              WHAT THE RECEIPT CONTAINS
            </p>

            <h2>
              Bring the important governance context into one record.
            </h2>

            <p>
              The receipt captures the context needed to understand
              the governance event without turning every underlying
              system log into part of the receipt itself.
            </p>
          </div>


          <div className={styles.contentsGrid}>
            {receiptContents.map((item) => (
              <article
                className={styles.contentCard}
                key={item.number}
              >
                <span>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          HOW IT IS CREATED
      ====================================================== */}

      <section className={styles.assemblySection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.goldEyebrow}>
                HOW IT IS CREATED
              </p>

              <h2>
                Assemble the governance record from context AIGO-OS already understands.
              </h2>
            </div>

            <p>
              Governance Receipts do not repeat the work of the
              earlier capabilities. They package the relevant outputs
              and event references into one durable record.
            </p>
          </div>


          <div className={styles.assemblyFlow}>

            <article className={styles.assemblyCard}>
              <Fingerprint size={23} aria-hidden="true" />

              <span>AI ACTOR CONTEXT</span>

              <h3>
                Actor Passports
              </h3>

              <p>
                Which AI Actor was involved.
              </p>
            </article>


            <ArrowRight
              className={styles.assemblyArrow}
              size={22}
              aria-hidden="true"
            />


            <article className={styles.assemblyCard}>
              <ShieldCheck size={23} aria-hidden="true" />

              <span>AUTHORITY</span>

              <h3>
                Machine Authority
              </h3>

              <p>
                What authority was understood for the AI Actor.
              </p>
            </article>


            <ArrowRight
              className={styles.assemblyArrow}
              size={22}
              aria-hidden="true"
            />


            <article className={styles.assemblyCard}>
              <Building2 size={23} aria-hidden="true" />

              <span>BUSINESS CONTEXT</span>

              <h3>
                Business Significance
              </h3>

              <p>
                What the AI activity meant to the affected business context.
              </p>
            </article>


            <ArrowRight
              className={styles.assemblyArrow}
              size={22}
              aria-hidden="true"
            />


            <article className={styles.assemblyCard}>
              <UserCheck size={23} aria-hidden="true" />

              <span>DECISIONS</span>

              <h3>
                Governance outcomes
              </h3>

              <p>
                AI and human governance decisions associated with the event.
              </p>
            </article>

          </div>


          <div className={styles.assemblyOutput}>
            <FileCheck2 size={24} aria-hidden="true" />

            <div>
              <span>ASSEMBLED OUTPUT</span>

              <strong>
                AI Governance Receipt
              </strong>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          ONE RECEIPT
      ====================================================== */}

      <section
        className={styles.exampleSection}
        id="receipt-example"
      >
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.goldEyebrow}>
                EXAMPLE AI GOVERNANCE RECEIPT
              </p>

              <h2>
                See the governance event as one connected record.
              </h2>
            </div>

            <p>
              The receipt keeps the most important decision context
              together while preserving references to relevant source
              systems and governance records.
            </p>
          </div>


          <div className={styles.exampleReceipt}>

            <div className={styles.exampleHeader}>
              <div>
                <span>AI GOVERNANCE RECEIPT</span>

                <h3>
                  AGR-2026-00841
                </h3>
              </div>

              <div className={styles.exampleTime}>
                <Clock3 size={17} aria-hidden="true" />
                Governance event recorded
              </div>
            </div>


            <div className={styles.exampleDetails}>

              <div>
                <span>AI ACTOR</span>
                <strong>
                  Production Operations AI Agent
                </strong>
              </div>

              <div>
                <span>AI ACTIVITY</span>
                <strong>
                  Restart a critical production service
                </strong>
              </div>

              <div>
                <span>AI AUTHORITY BOUNDARY</span>
                <strong>
                  Approved low-impact remediation
                </strong>
              </div>

              <div>
                <span>BUSINESS SIGNIFICANCE</span>
                <strong>
                  Critical customer-facing service
                </strong>
              </div>

              <div>
                <span>AI GOVERNANCE DECISION</span>
                <strong>
                  Human Authority Required
                </strong>
              </div>

              <div>
                <span>HUMAN GOVERNANCE DECISION</span>
                <strong>
                  Approve with Conditions
                </strong>
              </div>

              <div>
                <span>GOVERNANCE BASIS</span>
                <strong>
                  Critical-service change policy
                </strong>
              </div>

              <div>
                <span>DECISION OWNER</span>
                <strong>
                  Authorised Service Owner
                </strong>
              </div>

              <div>
                <span>SOURCE REFERENCE</span>
                <strong>
                  Connected enterprise workflow record
                </strong>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          STORAGE / ACCESS
      ====================================================== */}

      <section className={styles.accessSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.goldEyebrow}>
                STORED FOR USE
              </p>

              <h2>
                Keep the receipt available as a first-class AIGO-OS record.
              </h2>
            </div>

            <p>
              Authorised users can search and review receipts in
              AIGO-OS, while organisations can also reference or
              integrate them with existing enterprise evidence systems.
            </p>
          </div>


          <div className={styles.accessGrid}>

            <article className={styles.accessCard}>
              <Database size={25} aria-hidden="true" />

              <span>RECORD</span>

              <h3>
                Stored in AIGO-OS
              </h3>

              <p>
                The AI Governance Receipt remains available as a
                structured governance record.
              </p>
            </article>


            <article className={styles.accessCard}>
              <Search size={25} aria-hidden="true" />

              <span>DISCOVERY</span>

              <h3>
                Search and filter
              </h3>

              <p>
                Find receipts by AI Actor, business service, decision,
                date, authority, owner or other available context.
              </p>
            </article>


            <article className={styles.accessCard}>
              <FileJson size={25} aria-hidden="true" />

              <span>INTEGRATION</span>

              <h3>
                Share structured evidence
              </h3>

              <p>
                Make receipt data available to connected enterprise
                systems through supported integrations and exports.
              </p>
            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          VALUE
      ====================================================== */}

      <section className={styles.valueSection}>
        <div className={styles.shell}>

          <div className={styles.sectionIntroDark}>
            <div>
              <p className={styles.blueEyebrow}>
                WHY GOVERNANCE RECEIPTS MATTER
              </p>

              <h2>
                Turn individual AI governance events into evidence the organisation can use.
              </h2>
            </div>

            <p>
              Over time, Governance Receipts help organisations
              understand not only what happened, but where authority,
              controls and human intervention are repeatedly being tested.
            </p>
          </div>


          <div className={styles.valueGrid}>
            {uses.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className={styles.valueCard}
                  key={item.title}
                >
                  <div className={styles.valueIcon}>
                    <Icon size={22} aria-hidden="true" />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL OUTPUT
      ====================================================== */}

      <section className={styles.outputSection}>
        <div className={styles.shell}>

          <div className={styles.outputGrid}>

            <div className={styles.outputCopy}>
              <p className={styles.blueDarkEyebrow}>
                THE OUTPUT
              </p>

              <h2>
                AI Governance Receipt
              </h2>

              <p>
                A durable, structured record of the AI activity,
                the context AIGO-OS understood at the time, the
                governance decisions made and the supporting references.
              </p>
            </div>


            <div className={styles.outputPanel}>
              <div className={styles.outputIcon}>
                <FileCheck2 size={30} aria-hidden="true" />
              </div>

              <span>GOVERNANCE RECEIPT</span>

              <h3>
                From individual evidence to organisational insight.
              </h3>

              <p>
                Receipts provide the historical foundation for review,
                assurance, investigation and deeper understanding of
                how AI is operating across the organisation.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
