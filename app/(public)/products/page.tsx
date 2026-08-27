import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  CircleAlert,
  FileCheck2,
  GitBranch,
  Layers3,
  Network,
  RefreshCw,
  SearchCheck,
  ShieldCheck,
  Waypoints,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";



export const metadata = createPageMetadata({
  title: "AIGO-OS Products",
  description:
    "Explore AIGO-OS Govern and AIGO-OS Impact, products designed to connect AI governance state with enterprise context and business significance.",
  path: "/products",
  keywords: [
    "AI governance products",
    "AIGO-OS Govern",
    "AIGO-OS Impact",
  ],
});
const governCapabilities = [
  {
    label: "Applicability",
    title: "Control Applicability",
    text:
      "Determine which controls and governance requirements apply in the context of the business, technology, service or governed subject.",
    icon: SearchCheck,
  },
  {
    label: "Coverage",
    title: "Control Coverage",
    text:
      "Understand whether applicable governance expectations are actually represented by the controls and assurance structures already in place.",
    icon: ShieldCheck,
  },
  {
    label: "Relationships",
    title: "Policy and Requirement Mapping",
    text:
      "Connect policies, requirements, controls and enterprise context so governance relationships can be understood rather than reviewed in isolation.",
    icon: GitBranch,
  },
  {
    label: "Accountability",
    title: "Ownership and Accountability",
    text:
      "Expose where responsibility is established, where accountability is unclear and where governance decisions still need an accountable owner.",
    icon: Building2,
  },
  {
    label: "Change",
    title: "Governance Change Impact",
    text:
      "Re-evaluate governance conclusions when the underlying facts, relationships, criticality or enterprise context changes.",
    icon: RefreshCw,
  },
  {
    label: "Assurance",
    title: "Assurance and Fit & Gap",
    text:
      "Bring applicability, coverage and evidence together to expose governance gaps and focus assurance attention where it matters.",
    icon: FileCheck2,
  },
] as const;


const impactCapabilities = [
  {
    label: "Context",
    title: "Business Context",
    text:
      "Connect operational and technology information to the business services, processes, customers, products and operating structures that give it meaning.",
    icon: Building2,
  },
  {
    label: "Dependencies",
    title: "Dependency Intelligence",
    text:
      "Understand what an enterprise component depends on, what depends on it and how those relationships continue through the organization.",
    icon: Network,
  },
  {
    label: "Critical services",
    title: "Critical Service Dependencies",
    text:
      "See the applications, information, platforms and technology that must remain available for an important business service to operate.",
    icon: Layers3,
  },
  {
    label: "Incidents",
    title: "Incident Business Impact",
    text:
      "Translate an operational incident into affected business services, processes and areas so response teams can understand business consequence.",
    icon: CircleAlert,
  },
  {
    label: "Changes",
    title: "Change Impact",
    text:
      "Understand potential business exposure before a proposed technology or operational change is introduced.",
    icon: RefreshCw,
  },
  {
    label: "Significance",
    title: "Business Significance",
    text:
      "Distinguish technical activity from the business consequence that should influence prioritization, escalation and management attention.",
    icon: Waypoints,
  },
] as const;


const governUseCases = [
  {
    title: "Disconnected Policies and Controls",
    href: "/solutions/disconnected-policies-controls",
  },
  {
    title: "Unclear Control Applicability",
    href: "/solutions/unclear-control-applicability",
  },
  {
    title: "Unclear Control Coverage",
    href: "/solutions/unclear-control-coverage",
  },
  {
    title: "Unclear Ownership and Accountability",
    href: "/solutions/unclear-ownership-accountability",
  },
  {
    title: "Unknown Governance Change Impact",
    href: "/solutions/unknown-governance-change-impact",
  },
];


const impactUseCases = [
  {
    title: "Unclear Critical Service Dependencies",
    href: "/solutions/unclear-critical-service-dependencies",
  },
  {
    title: "Unclear Incident Business Impact",
    href: "/solutions/unclear-incident-business-impact",
  },
  {
    title: "Unknown Change Impact",
    href: "/solutions/unknown-change-impact",
  },
];


function Arrow() {
  return (
    <ArrowRight
      size={17}
      strokeWidth={1.8}
      aria-hidden="true"
    />
  );
}


export default function ProductsPage() {
  return (
    <main className={styles.page}>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className={styles.hero}>
        <PublicContainer>

          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                AIGO-OS PRODUCTS
              </p>

              <h1>
                Enterprise intelligence for governance and business impact.
              </h1>

              <p className={styles.heroLead}>
                AIGO-OS Govern and AIGO-OS Impact turn connected enterprise
                information into two distinct forms of management intelligence.
              </p>

              <p className={styles.heroText}>
                Govern explains what applies, what is covered, what changed and
                where governance attention is required. Impact explains what
                depends on what, what is affected and why an operational event
                or proposed change matters to the business.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/products/aigo-os-govern"
                  className={styles.heroPrimary}
                >
                  Explore Govern
                  <Arrow />
                </Link>

                <Link
                  href="/products/aigo-os-impact"
                  className={styles.heroSecondary}
                >
                  Explore Impact
                  <Arrow />
                </Link>
              </div>
            </div>


            <div className={styles.portfolioVisual}>

              <div className={styles.contextSurface}>
                <span className={styles.contextLabel}>
                  CONNECTED ENTERPRISE CONTEXT
                </span>

                <strong>
                  Business, governance and technology relationships
                </strong>

                <div className={styles.contextSignals}>
                  <span>Services</span>
                  <span>Controls</span>
                  <span>Applications</span>
                  <span>Policies</span>
                  <span>Information</span>
                  <span>Ownership</span>
                </div>
              </div>


              <div className={styles.productLensGrid}>

                <Link
                  href="/products/aigo-os-govern"
                  className={styles.governLens}
                >
                  <div className={styles.lensIcon}>
                    <ShieldCheck
                      size={22}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <span>AIGO-OS GOVERN</span>

                  <strong>
                    Governance Intelligence
                  </strong>

                  <p>
                    Applicability, coverage, accountability, change and
                    assurance.
                  </p>
                </Link>


                <Link
                  href="/products/aigo-os-impact"
                  className={styles.impactLens}
                >
                  <div className={styles.lensIcon}>
                    <Network
                      size={22}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <span>AIGO-OS IMPACT</span>

                  <strong>
                    Business Impact Intelligence
                  </strong>

                  <p>
                    Dependencies, incidents, changes and business consequence.
                  </p>
                </Link>

              </div>


              <div className={styles.visualConclusion}>
                <CheckCircle2
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <p>
                  One connected enterprise foundation. Two management
                  intelligence products.
                </p>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          PRODUCT DISTINCTION
          ===================================================== */}

      <section className={styles.distinctionSection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionLabel}>
                THE PRODUCT PORTFOLIO
              </p>

              <h2>
                Different questions require
                <span> different intelligence.</span>
              </h2>
            </div>

            <p>
              Govern and Impact use connected enterprise context differently.
              They are complementary products, not duplicate views of the same
              problem.
            </p>
          </div>


          <div className={styles.distinctionGrid}>

            <article className={styles.governOverview}>

              <div className={styles.overviewTop}>
                <div className={styles.overviewIdentity}>
                  <span>AIGO-OS GOVERN</span>
                  <strong>Governance Intelligence</strong>
                </div>

                <ShieldCheck
                  size={27}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </div>

              <h3>
                What should apply, what is covered and where does governance
                attention belong?
              </h3>

              <p>
                Govern interprets connected governance information in enterprise
                context. It helps teams understand applicability, coverage,
                accountability, change and assurance without manually
                reconstructing those relationships for every review.
              </p>

              <div className={styles.questionCloud}>
                <span>What applies?</span>
                <span>Is it covered?</span>
                <span>Who owns it?</span>
                <span>What changed?</span>
                <span>Where is the gap?</span>
              </div>

              <Link
                href="/products/aigo-os-govern"
                className={styles.overviewLink}
              >
                Explore AIGO-OS Govern
                <Arrow />
              </Link>

            </article>


            <article className={styles.impactOverview}>

              <div className={styles.overviewTop}>
                <div className={styles.overviewIdentity}>
                  <span>AIGO-OS IMPACT</span>
                  <strong>Business Impact Intelligence</strong>
                </div>

                <Network
                  size={27}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </div>

              <h3>
                What is connected, what is affected and why does it matter to
                the business?
              </h3>

              <p>
                Impact connects technology and operational activity to the
                enterprise relationships around it. It helps teams understand
                dependencies, affected services and business consequence before
                or during operational decisions.
              </p>

              <div className={styles.questionCloud}>
                <span>What depends on it?</span>
                <span>What is affected?</span>
                <span>Which service?</span>
                <span>Who is exposed?</span>
                <span>How significant?</span>
              </div>

              <Link
                href="/products/aigo-os-impact"
                className={styles.overviewLink}>
                Explore AIGO-OS Impact
                <Arrow />
              </Link>

            </article>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          GOVERN DOCUMENTATION
          ===================================================== */}

      <section className={styles.governSection}>
        <PublicContainer>

          <div className={styles.productSectionHeader}>

            <div className={styles.productSectionTitle}>
              <span className={styles.governMark}>
                <ShieldCheck
                  size={23}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </span>

              <div>
                <p className={styles.governLabel}>
                  AIGO-OS GOVERN
                </p>

                <h2>
                  Governance intelligence built around the conclusion.
                </h2>
              </div>
            </div>

            <div className={styles.productSectionIntro}>
              <p>
                Governance information already exists across policies,
                requirements, controls, systems, services and ownership
                structures. Govern connects that information so teams can
                understand the governance conclusion in context.
              </p>

              <Link href="/products/aigo-os-govern">
                Full Govern product overview
                <Arrow />
              </Link>
            </div>

          </div>


          <div className={styles.capabilityComposition}>

            <div className={styles.capabilityStatement}>
              <span>THE GOVERN QUESTION</span>

              <strong>
                Given this enterprise context, what governance conclusion
                should we reach now?
              </strong>

              <p>
                Govern does not replace the systems where governance records
                are managed. It provides the connected interpretation layer
                needed to understand those records together.
              </p>

              <div className={styles.statementSignals}>
                <span>Interpret</span>
                <span>Evaluate</span>
                <span>Re-evaluate</span>
              </div>
            </div>


            <div className={styles.capabilityGrid}>
              {governCapabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <article
                    className={styles.capabilityCard}
                    key={capability.title}
                  >
                    <div className={styles.capabilityIcon}>
                      <Icon
                        size={20}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <span>{capability.label}</span>

                    <strong>{capability.title}</strong>

                    <p>{capability.text}</p>
                  </article>
                );
              })}
            </div>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          IMPACT DOCUMENTATION
          ===================================================== */}

      <section className={styles.impactSection}>
        <PublicContainer>

          <div className={styles.productSectionHeader}>

            <div className={styles.productSectionTitle}>
              <span className={styles.impactMark}>
                <Network
                  size={23}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </span>

              <div>
                <p className={styles.impactLabel}>
                  AIGO-OS IMPACT
                </p>

                <h2>
                  Business impact intelligence built around relationships.
                </h2>
              </div>
            </div>

            <div className={styles.productSectionIntro}>
              <p>
                Operational systems can show that something happened. Impact
                adds the connected business context needed to understand which
                services, processes and enterprise relationships may be
                affected.
              </p>

              <Link href="/products/aigo-os-impact">
                Full Impact product overview
                <Arrow />
              </Link>
            </div>

          </div>


          <div className={styles.impactComposition}>

            <div className={styles.impactCapabilityGrid}>
              {impactCapabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <article
                    className={styles.impactCapability}
                    key={capability.title}
                  >
                    <div className={styles.impactCapabilityIcon}>
                      <Icon
                        size={20}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <span>{capability.label}</span>

                    <strong>{capability.title}</strong>

                    <p>{capability.text}</p>
                  </article>
                );
              })}
            </div>


            <div className={styles.impactStatement}>
              <span>THE IMPACT QUESTION</span>

              <strong>
                Given this event or proposed change, where does business
                consequence appear?
              </strong>

              <p>
                Impact retains the relationship between technology and the
                business so teams can move from technical activity to
                enterprise consequence without rebuilding context manually.
              </p>

              <div className={styles.impactPath}>
                <div>
                  <span>Operational signal</span>
                  <strong>Incident or change</strong>
                </div>

                <div>
                  <span>Connected context</span>
                  <strong>Dependencies and services</strong>
                </div>

                <div>
                  <span>Business understanding</span>
                  <strong>Exposure and significance</strong>
                </div>
              </div>
            </div>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          SHARED FOUNDATION
          ===================================================== */}

      <section className={styles.foundationSection}>
        <PublicContainer>

          <div className={styles.foundationHeader}>
            <div>
              <p className={styles.sectionLabel}>
                SHARED INTELLIGENCE FOUNDATION
              </p>

              <h2>
                The products see different questions through the same
                enterprise context.
              </h2>
            </div>

            <p>
              AIGO-OS connects information that is normally separated across
              governance, technology and business systems. Govern and Impact
              apply different intelligence to that connected context.
            </p>
          </div>


          <div className={styles.foundationVisual}>

            <div className={styles.foundationSources}>
              <span>Policies</span>
              <span>Controls</span>
              <span>Services</span>
              <span>Processes</span>
              <span>Applications</span>
              <span>Information</span>
              <span>Technology</span>
              <span>Ownership</span>
            </div>


            <div className={styles.foundationCore}>
              <div className={styles.coreIcon}>
                <Layers3
                  size={25}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </div>

              <span>AIGO-OS ENTERPRISE CONTEXT</span>

              <strong>
                Connected relationships with business meaning
              </strong>

              <p>
                Enterprise information is interpreted together rather than as
                isolated records.
              </p>
            </div>


            <div className={styles.foundationOutputs}>

              <div className={styles.foundationGovern}>
                <ShieldCheck
                  size={21}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>GOVERN</span>

                <strong>
                  Governance conclusions
                </strong>

                <p>
                  Applicability, coverage, accountability, change and
                  assurance.
                </p>
              </div>

              <div className={styles.foundationImpact}>
                <Network
                  size={21}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>IMPACT</span>

                <strong>
                  Business impact conclusions
                </strong>

                <p>
                  Dependencies, affected services, exposure and significance.
                </p>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          USE CASES
          ===================================================== */}

      <section className={styles.useCaseSection}>
        <PublicContainer>

          <div className={styles.useCaseHeader}>
            <p className={styles.sectionLabelLight}>
              START WITH THE PROBLEM
            </p>

            <h2>
              Move from the question you have to the product intelligence you
              need.
            </h2>

            <p>
              The solution pages address specific enterprise problems. The
              product pages explain the broader intelligence capability behind
              them.
            </p>
          </div>


          <div className={styles.useCaseColumns}>

            <div className={styles.useCaseColumn}>
              <div className={styles.useCaseProduct}>
                <ShieldCheck
                  size={20}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <div>
                  <span>AIGO-OS GOVERN</span>
                  <strong>Governance questions</strong>
                </div>
              </div>

              <div className={styles.useCaseLinks}>
                {governUseCases.map((useCase) => (
                  <Link
                    href={useCase.href}
                    key={useCase.title}
                  >
                    <span>{useCase.title}</span>
                    <Arrow />
                  </Link>
                ))}
              </div>
            </div>


            <div className={styles.useCaseColumn}>
              <div className={styles.useCaseProduct}>
                <Network
                  size={20}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <div>
                  <span>AIGO-OS IMPACT</span>
                  <strong>Business impact questions</strong>
                </div>
              </div>

              <div className={styles.useCaseLinks}>
                {impactUseCases.map((useCase) => (
                  <Link
                    href={useCase.href}
                    key={useCase.title}
                  >
                    <span>{useCase.title}</span>
                    <Arrow />
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          PRODUCT CHOICE
          ===================================================== */}

      <section className={styles.choiceSection}>
        <PublicContainer>

          <div className={styles.choiceShell}>

            <div className={styles.choiceCopy}>
              <p className={styles.sectionLabel}>
                WHICH PRODUCT?
              </p>

              <h2>
                Choose according to the decision you need to make.
              </h2>

              <p>
                Some organizations begin with Govern, others with Impact. Where
                governance and operational consequence meet, the products can
                work from the same connected enterprise context.
              </p>
            </div>


            <div className={styles.choiceCards}>

              <Link
                href="/products/aigo-os-govern"
                className={styles.choiceGovern}
              >
                <ShieldCheck
                  size={23}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>CHOOSE GOVERN WHEN</span>

                <strong>
                  The primary question is what should apply, whether it is
                  covered, who is accountable or what governance conclusion
                  changed.
                </strong>

                <div>
                  Explore Govern
                  <Arrow />
                </div>
              </Link>


              <Link
                href="/products/aigo-os-impact"
                className={styles.choiceImpact}
              >
                <Network
                  size={23}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>CHOOSE IMPACT WHEN</span>

                <strong>
                  The primary question is what depends on something, what is
                  affected or what an incident or proposed change means to the
                  business.
                </strong>

                <div>
                  Explore Impact
                  <Arrow />
                </div>
              </Link>

            </div>

          </div>

        </PublicContainer>
      </section>


      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className={styles.finalSection}>
        <PublicContainer>

          <div className={styles.finalPanel}>

            <div className={styles.finalCopy}>
              <p>AIGO-OS PRODUCTS</p>

              <h2>
                See the full intelligence model behind each product.
              </h2>

              <span>
                Explore the detailed product pages or speak with the AIGO-OS
                team about where Govern and Impact fit within your enterprise.
              </span>
            </div>


            <div className={styles.finalActions}>
              <Link
                href="/products/aigo-os-govern"
                className={styles.finalPrimary}
              >
                Explore Govern
                <Arrow />
              </Link>

              <Link
                href="/products/aigo-os-impact"
                className={styles.finalSecondary}
              >
                Explore Impact
                <Arrow />
              </Link>

              <Link
                href="/talk-to-an-expert"
                className={styles.finalContact}
              >
                Talk to an Expert
              </Link>
            </div>

          </div>

        </PublicContainer>
      </section>

    </main>
  );
}



