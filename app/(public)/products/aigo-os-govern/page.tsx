import { StructuredData } from "@/components/public/structured-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import Link from "next/link";

import {
  Activity,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  CircleAlert,
  FileCheck2,
  FileText,
  Layers3,
  Radar,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";
import { ProductResources } from "@/components/products/product-resources";

import styles from "./page.module.css";



export const metadata = createPageMetadata({
  title: "AIGO-OS Govern",
  description:
    "AIGO-OS Govern helps organisations understand governance state, accountability, controls, relationships and management attention across enterprise AI.",
  path: "/products/aigo-os-govern",
  keywords: [
    "AIGO-OS Govern",
    "AI governance management",
    "enterprise AI governance",
  ],
});
const capabilities = [
  {
    icon: FileText,
    label: "Governance Interpretation",
    title: "Understand what the requirement means here.",
    text:
      "Turn policies, requirements, control objectives and controls into clear guidance grounded in the organisation's approved governance material, terminology and business context.",
    signal: "Interpretation intelligence",
  },
  {
    icon: ScanSearch,
    label: "Scope & Applicability",
    title: "Know what is in scope and what applies.",
    text:
      "See which policies, requirements and governance obligations apply to each business application, service, AI system and other governed asset.",
    signal: "Scope intelligence",
  },
  {
    icon: Layers3,
    label: "Governance Coverage",
    title: "Find what has not been covered.",
    text:
      "Compare the governed population with expected requirements, measures and controls to expose missing, stale or incomplete governance coverage.",
    signal: "Coverage intelligence",
  },
  {
    icon: Radar,
    label: "Continuous Monitoring",
    title: "See what a governance change affects.",
    text:
      "When policies, requirements, scope or mappings change, Govern follows that change through the connected governance environment and shows what may now require attention.",
    signal: "Change intelligence",
    featured: true,
  },
  {
    icon: FileCheck2,
    label: "Control Assurance Intelligence",
    title: "See where controls are struggling.",
    text:
      "Connect QA, QC and control assessment outcomes across services and controls to expose recurring evidence problems, effectiveness issues and unusual concentrations.",
    signal: "Assurance intelligence",
  },
  {
    icon: BrainCircuit,
    label: "Fit & Gap Intelligence",
    title: "Understand why weaknesses keep returning.",
    text:
      "Analyse repeated control weaknesses across services, technologies and governance cycles to identify patterns that may point to implementation, design or guidance problems.",
    signal: "Pattern intelligence",
  },
  {
    icon: ShieldCheck,
    label: "Management Intelligence",
    title: "Give management the connected picture.",
    text:
      "Bring scope, coverage, change, assurance and recurring weaknesses together so management can see what requires attention and understand why.",
    signal: "Management intelligence",
  },
];




const governSolutions = [
  {
    icon: FileText,
    eyebrow: "Governance relationships",
    title: "Disconnected Policies & Controls",
    href: "/solutions/disconnected-policies-controls",
    text: "Connect policies, requirements and controls across fragmented governance sources so teams can see how the pieces relate.",
  },
  {
    icon: ScanSearch,
    eyebrow: "Applicability",
    title: "Control Applicability",
    href: "/solutions/unclear-control-applicability",
    text: "Determine which controls apply from the actual business, technology, data and governance context of what is being governed.",
  },
  {
    icon: FileCheck2,
    eyebrow: "Traceability",
    title: "Policy & Requirement Mapping",
    href: "/products/aigo-os-govern",
    text: "Understand how policy statements, standards, requirements and controls connect without repeatedly reconstructing the mapping by hand.",
  },
  {
    icon: Layers3,
    eyebrow: "Coverage",
    title: "Control Coverage Analysis",
    href: "/solutions/unclear-control-coverage",
    text: "See where applicable requirements are covered and where missing, stale or incomplete governance coverage needs attention.",
  },
  {
    icon: Radar,
    eyebrow: "Change",
    title: "Governance Change Impact",
    href: "/solutions/unknown-governance-change-impact",
    text: "Follow changes in policies, requirements, controls or enterprise context through the governance relationships and conclusions they affect.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Accountability",
    title: "Ownership & Accountability Gaps",
    href: "/solutions/unclear-ownership-accountability",
    text: "Identify where ownership, responsibility or accountability is missing, unclear or inconsistent across the governed environment.",
  },
];

const connectedSources = [
  "GRC platforms",
  "IT service management",
  "Policy repositories",
  "Control libraries",
  "Enterprise architecture",
  "Asset inventories",
  "Assurance results",
  "AI inventories",
];


export default function AigoOsGovernPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Products",
            path: "/products",
          },
          {
            name: "AIGO-OS Govern",
            path: "/products/aigo-os-govern",
          },
        ])}
      />
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                AIGO-OS Govern
              </p>

              <h1 className={styles.heroTitle}>
                <span>Governance changes.</span>
                <span>Know what no longer holds.</span>
              </h1>

              <p className={styles.heroText}>
                AIGO-OS Govern connects governance information already held
                across your enterprise and continuously shows what should
                apply, what is covered, what has changed and where governance
                attention is needed.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/request-demo"
                  className={styles.primaryButton}
                >
                  Request a Demo
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>

                <Link
                  href="/talk-to-an-expert"
                  className={styles.secondaryButton}
                >
                  Talk to an Expert
                </Link>
              </div>

              <p className={styles.heroNote}>
                Enterprise governance intelligence for applications, services,
                technology and the growing governance demands created by AI.
              </p>
            </div>


            <div className={styles.intelligenceView}>
              <div className={styles.viewHeader}>
                <div>
                  <span>AIGO-OS Govern</span>
                  <strong>Continuous governance view</strong>
                </div>

                <div className={styles.liveState}>
                  <i aria-hidden="true" />
                  Monitoring
                </div>
              </div>


              <div className={styles.changeSignal}>
                <div className={styles.changeIcon}>
                  <Activity size={20} aria-hidden="true" />
                </div>

                <div>
                  <span>Governance change detected</span>

                  <strong>
                    Policy requirements updated
                  </strong>

                  <p>
                    The change affects requirements already connected to
                    business services in the governed population.
                  </p>
                </div>
              </div>


              <div className={styles.flow}>
                <div className={styles.flowItem}>
                  <span>Requirements affected</span>
                  <strong>14</strong>
                </div>

                <ArrowRight
                  className={styles.flowArrow}
                  size={17}
                  aria-hidden="true"
                />

                <div className={styles.flowItem}>
                  <span>Services affected</span>
                  <strong>27</strong>
                </div>

                <ArrowRight
                  className={styles.flowArrow}
                  size={17}
                  aria-hidden="true"
                />

                <div className={styles.flowItemAttention}>
                  <span>Coverage exceptions</span>
                  <strong>5</strong>
                </div>
              </div>


              <div className={styles.viewFooter}>
                <CircleAlert size={16} aria-hidden="true" />

                <span>
                  Attention is focused on the exceptions, not the entire
                  governed population.
                </span>
              </div>
            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.positionSection}>
        <PublicContainer>
          <div className={styles.positionGrid}>

            <p className={styles.sectionLabel}>
              The role of Govern
            </p>

            <div className={styles.positionCopy}>
              <h2>
                Your governance systems hold the records.
                <span> AIGO-OS Govern connects the picture.</span>
              </h2>

              <p>
                Enterprises already maintain policies, controls, inventories,
                risk information, ownership, evidence and assurance results
                across GRC platforms, IT service management tools and internal
                repositories.
              </p>

              <p>
                Govern does not ask you to rebuild that environment. It
                connects the relevant information and continuously interprets
                the governance state across it.
              </p>
            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.solutionsSection}>
        <PublicContainer>
          <div className={styles.solutionsHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Where Govern is used
              </p>

              <h2>
                Start with the governance problem.
                <span> Govern connects the context behind it.</span>
              </h2>
            </div>

            <div className={styles.solutionsIntro}>
              <p>
                Enterprises do not buy governance intelligence because they need
                another dashboard. They need to solve specific problems around
                policy relationships, applicability, coverage, change and
                accountability.
              </p>

              <Link href="/solutions" className={styles.solutionsOverviewLink}>
                Explore all solutions
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className={styles.solutionGrid}>
            {governSolutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <Link
                  key={solution.href}
                  href={solution.href}
                  className={styles.solutionCard}
                >
                  <div className={styles.solutionCardTop}>
                    <div className={styles.solutionIcon}>
                      <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                    </div>

                    <span className={styles.solutionNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className={styles.solutionCardCopy}>
                    <span>{solution.eyebrow}</span>
                    <h3>{solution.title}</h3>
                    <p>{solution.text}</p>
                  </div>

                  <div className={styles.solutionAction}>
                    <span>Explore solution</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </PublicContainer>
      </section>


      <section className={styles.interpretationSection}>
        <PublicContainer>

          <div className={styles.interpretationHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Governance interpretation
              </p>

              <h2>
                Turn governance language into guidance people can use.
              </h2>
            </div>

            <p>
              Policies and controls already exist across the enterprise.
              AIGO-OS Govern connects them to the organisation&apos;s approved
              definitions, mappings and business context so the people applying
              them can understand what they mean here.
            </p>
          </div>


          <div className={styles.governanceLibrary}>

            <div className={styles.libraryNav}>
              <span className={styles.libraryLabel}>
                Governance library
              </span>

              <div className={styles.libraryTabs}>
                <span className={styles.libraryTabActive}>
                  Policies
                </span>

                <span>
                  Requirements
                </span>

                <span>
                  Control objectives
                </span>

                <span>
                  Controls
                </span>
              </div>


              <div className={styles.policyList}>

                <div className={styles.policySelected}>
                  <span>Information Security Policy</span>

                  <strong>
                    Privileged Access Management
                  </strong>

                  <small>
                    Requirement 4.2.3 selected
                  </small>
                </div>


                <div>
                  <span>Identity & Access Policy</span>

                  <strong>
                    Access Governance
                  </strong>

                  <small>
                    8 connected requirements
                  </small>
                </div>


                <div>
                  <span>Technology Control Standard</span>

                  <strong>
                    Administrative Access
                  </strong>

                  <small>
                    5 connected controls
                  </small>
                </div>

              </div>
            </div>


            <div className={styles.requirementPanel}>

              <div className={styles.requirementHeader}>
                <div>
                  <span>
                    Information Security Policy
                  </span>

                  <strong>
                    Requirement 4.2.3
                  </strong>
                </div>

                <span className={styles.sourceStatus}>
                  Authoritative source
                </span>
              </div>


              <div className={styles.requirementText}>
                <span>
                  Policy requirement
                </span>

                <p>
                  Privileged access to production systems must be periodically
                  reviewed by an authorised individual.
                </p>
              </div>


              <div className={styles.interpretationCards}>

                <div className={styles.interpretationCardPrimary}>
                  <span>
                    What this means
                  </span>

                  <strong>
                    Production privileged accounts must be reviewed by an
                    authorised owner at the frequency defined by the
                    organisation.
                  </strong>

                  <p>
                    Govern keeps the explanation connected to the source
                    requirement rather than replacing the policy wording.
                  </p>
                </div>


                <div className={styles.contextDefinition}>
                  <span>
                    Organisation context
                  </span>

                  <div>
                    <small>Periodically</small>
                    <strong>Quarterly</strong>
                  </div>

                  <div>
                    <small>Authorised reviewer</small>
                    <strong>
                      Service owner or delegated control owner
                    </strong>
                  </div>

                  <div>
                    <small>Production systems</small>
                    <strong>
                      Services classified as production in the service inventory
                    </strong>
                  </div>
                </div>

              </div>


              <div className={styles.governanceConnections}>

                <div>
                  <span>Control objective</span>

                  <strong>
                    Maintain authorised privileged access
                  </strong>
                </div>

                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className={styles.interpretationArrow}
                />

                <div>
                  <span>Control</span>

                  <strong>
                    AC-17 · Quarterly Privileged Access Review
                  </strong>
                </div>

                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className={styles.interpretationArrow}
                />

                <div className={styles.connectionAttention}>
                  <span>Applies to</span>

                  <strong>
                    42 production services
                  </strong>
                </div>

              </div>

            </div>

          </div>


          <div className={styles.controlGuidance}>

            <div className={styles.guidanceIntro}>
              <span>
                From requirement to evidence
              </span>

              <strong>
                Help each person understand the same control from the role
                they are performing.
              </strong>
            </div>


            <div className={styles.guidanceGrid}>

              <div>
                <span>Service manager</span>

                <strong>
                  What needs to be demonstrated?
                </strong>

                <p>
                  The complete privileged account population, the review
                  performed for the required period and evidence of the
                  authorised review outcome.
                </p>
              </div>


              <div>
                <span>QA</span>

                <strong>
                  What should the evidence establish?
                </strong>

                <p>
                  Confirm that the evidence relates to the correct service,
                  population, assessment period and control requirement before
                  it progresses.
                </p>
              </div>


              <div>
                <span>QC</span>

                <strong>
                  What makes the evidence sufficient?
                </strong>

                <p>
                  Determine whether the evidence demonstrates the intended
                  control outcome and supports the design and effectiveness
                  expected by the organisation.
                </p>
              </div>

            </div>

          </div>


          <div className={styles.interpretationBoundary}>
            <CircleAlert size={17} aria-hidden="true" />

            <p>
              AIGO-OS Govern explains governance content from connected,
              authoritative enterprise sources. Where the organisation has not
              established an approved meaning, mapping or definition, Govern
              should surface that ambiguity rather than invent one.
            </p>
          </div>

        </PublicContainer>
      </section>


      <section className={styles.monitoringSection}>
        <PublicContainer>

          <div className={styles.monitoringHeader}>
            <div>
              <p className={styles.sectionLabelLight}>
                Continuous governance monitoring
              </p>

              <h2>
                Governance gaps should surface themselves, not wait to be found.
              </h2>
            </div>

            <p>
              Scope changes. Policies change. Requirements change. Control
              mappings change. Assurance results arrive. Govern keeps those
              moving parts connected and surfaces the exceptions that matter.
            </p>
          </div>


          <div className={styles.monitoringStage}>

            <div className={styles.sourceColumn}>
              <span className={styles.stageLabel}>
                Connected enterprise sources
              </span>

              <div className={styles.sourceStack}>
                {connectedSources.slice(0, 4).map((source) => (
                  <div key={source}>
                    <CheckCircle2 size={15} aria-hidden="true" />
                    <span>{source}</span>
                  </div>
                ))}
              </div>
            </div>


            <div className={styles.intelligenceCore}>
              <span>AIGO-OS Govern</span>

              <strong>
                Continuous governance intelligence
              </strong>

              <p>
                Connect. Compare. Detect. Explain.
              </p>
            </div>


            <div className={styles.signalColumn}>
              <span className={styles.stageLabel}>
                What Govern surfaces
              </span>

              <div className={styles.signalStack}>
                <div>
                  <span>Coverage</span>
                  <strong>Missing mappings</strong>
                </div>

                <div>
                  <span>Change</span>
                  <strong>New applicability</strong>
                </div>

                <div>
                  <span>Assurance</span>
                  <strong>Recurring weakness</strong>
                </div>

                <div>
                  <span>Management</span>
                  <strong>Priority exceptions</strong>
                </div>
              </div>
            </div>

          </div>


          <div className={styles.sourceFooter}>
            {connectedSources.slice(4).map((source) => (
              <span key={source}>
                {source}
              </span>
            ))}
          </div>

        </PublicContainer>
      </section>


      <section className={styles.capabilitiesSection}>
        <PublicContainer>

          <div className={styles.capabilitiesHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Governance intelligence
              </p>

              <h2>
                See where governance stands.
                <span> Know where attention is needed.</span>
              </h2>
            </div>

            <p>
              AIGO-OS Govern connects governance information across the
              enterprise to explain what requirements mean, show what applies,
              reveal what is covered, follow what has changed and identify
              where assurance or recurring weaknesses need attention.
            </p>
          </div>


          <div className={styles.capabilityGrid}>
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className={
                    capability.featured
                      ? `${styles.capabilityCard} ${styles.capabilityFeatured}`
                      : styles.capabilityCard
                  }
                >
                  <div className={styles.capabilityTop}>
                    <div className={styles.capabilityIcon}>
                      <Icon
                        size={22}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <span>
                      {capability.label}
                    </span>
                  </div>

                  <div className={styles.capabilityCopy}>
                    <h3>
                      {capability.title}
                    </h3>

                    <p>
                      {capability.text}
                    </p>

                    <div className={styles.capabilitySignal}>
                      {capability.signal}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        </PublicContainer>
      </section>


      <section className={styles.exampleSection}>
        <PublicContainer>
          <div className={styles.exampleGrid}>

            <div className={styles.exampleCopy}>
              <p className={styles.sectionLabel}>
                In practice
              </p>

              <h2>
                A policy changes. Govern follows what that change affects.
              </h2>

              <p>
                Instead of manually comparing multiple systems and
                spreadsheets, Govern connects the change to the governed
                population and shows where coverage may now require attention.
              </p>
            </div>


            <div className={styles.exampleFlow}>

              <div className={styles.exampleStep}>
                <span>Policy change</span>

                <strong>
                  Revised requirements detected
                </strong>

                <small>
                  14 requirements
                </small>
              </div>

              <ArrowRight
                className={styles.exampleConnector}
                size={18}
                aria-hidden="true"
              />

              <div className={styles.exampleStep}>
                <span>Applicability</span>

                <strong>
                  Governed population evaluated
                </strong>

                <small>
                  27 services affected
                </small>
              </div>

              <ArrowRight
                className={styles.exampleConnector}
                size={18}
                aria-hidden="true"
              />

              <div className={styles.exampleStepAttention}>
                <span>Coverage gap</span>

                <strong>
                  Expected coverage is incomplete
                </strong>

                <small>
                  5 services need attention
                </small>
              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.assuranceSection}>
        <PublicContainer>
          <div className={styles.assuranceGrid}>

            <div className={styles.assuranceScenario}>

              <div className={styles.scenarioHeader}>
                <div>
                  <span>Control assurance intelligence</span>
                  <strong>Access Review Control · AC-17</strong>
                </div>

                <span className={styles.period}>
                  Current cycle
                </span>
              </div>


              <div className={styles.scenarioPopulation}>

                <div>
                  <span>Control population</span>
                  <strong>42</strong>
                  <small>in-scope services</small>
                </div>

                <div>
                  <span>Evidence received</span>
                  <strong>38</strong>
                  <small>service submissions</small>
                </div>

                <div className={styles.scenarioAttention}>
                  <span>QC rejected</span>
                  <strong>7</strong>
                  <small>control assessments</small>
                </div>

              </div>


              <div className={styles.scenarioSignals}>

                <div className={styles.scenarioSignal}>
                  <div className={styles.signalIcon}>
                    <FileCheck2 size={18} aria-hidden="true" />
                  </div>

                  <div>
                    <span>QA signal</span>

                    <strong>
                      11 services needed additional evidence support.
                    </strong>

                    <p>
                      Missing population details and incomplete approval
                      records account for most of the evidence rework.
                    </p>
                  </div>
                </div>


                <div className={styles.scenarioSignal}>
                  <div className={styles.signalIcon}>
                    <CircleAlert size={18} aria-hidden="true" />
                  </div>

                  <div>
                    <span>QC signal</span>

                    <strong>
                      7 submissions did not demonstrate the expected control outcome.
                    </strong>

                    <p>
                      Five of those services use the same implementation approach.
                    </p>
                  </div>
                </div>

              </div>


              <div className={styles.patternFinding}>
                <div className={styles.patternIcon}>
                  <BrainCircuit size={20} aria-hidden="true" />
                </div>

                <div>
                  <span>Pattern identified</span>

                  <strong>
                    The weakness is concentrated, not random.
                  </strong>

                  <p>
                    Five rejected assessments come from related
                    customer-facing services using the same implementation
                    pattern.
                  </p>
                </div>
              </div>

            </div>


            <div className={styles.assuranceCopy}>
              <p className={styles.sectionLabelLight}>
                Assurance and Fit & Gap
              </p>

              <h2>
                See the pattern behind repeated control failures.
              </h2>

              <p>
                QA and QC happen in the systems your governance teams already
                use. Govern connects the results across controls, services and
                business areas so repeated weaknesses become visible.
              </p>

              <p>
                Fit & Gap intelligence then helps distinguish an isolated
                failure from a wider implementation, control design or
                guidance problem.
              </p>

              <div className={styles.fitGapCallout}>
                <span>Fit & Gap consideration</span>

                <strong>
                  Review the implementation guidance before the next governance cycle.
                </strong>

                <p>
                  The recurring pattern suggests the issue may be related to
                  how the control is implemented across this service
                  population rather than evidence quality alone.
                </p>
              </div>

              <div className={styles.boundaryNote}>
                AIGO-OS Govern observes and interprets assurance results.
                Evidence submission, QA and QC decisions remain in the
                organisation&apos;s existing GRC and workflow platforms.
              </div>
            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.managementSection}>
        <PublicContainer>

          <div className={styles.managementHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Management intelligence
              </p>

              <h2>
                Move from governance records to governance understanding.
              </h2>
            </div>

            <p>
              Management does not need another list of every control,
              requirement or assessment. Govern brings the important signals
              together and makes the reason behind them visible.
            </p>
          </div>


          <div className={styles.managementBoard}>

            <div className={styles.managementSummary}>
              <span>Governance health</span>

              <strong>
                Coverage remains strong, with emerging exceptions requiring attention.
              </strong>

              <p>
                Recent policy changes and current assurance results have
                created a small number of concentrated governance exceptions.
              </p>
            </div>


            <div className={styles.metricGrid}>

              <div className={styles.metric}>
                <span>Coverage</span>
                <strong>97%</strong>
                <small>Expected governance coverage</small>
              </div>

              <div className={styles.metricAttention}>
                <span>New requirements</span>
                <strong>14</strong>
                <small>Require applicability review</small>
              </div>

              <div className={styles.metricAttention}>
                <span>Coverage gaps</span>
                <strong>5</strong>
                <small>Services requiring attention</small>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.aiSection}>
        <PublicContainer>

          <div className={styles.aiPanel}>

            <div className={styles.aiIcon}>
              <BrainCircuit size={28} aria-hidden="true" />
            </div>

            <div className={styles.aiCopy}>
              <p className={styles.sectionLabel}>
                AI within enterprise governance
              </p>

              <h2>
                AI makes governance gaps harder to ignore.
              </h2>

              <p>
                AI systems and agents still operate inside business services,
                applications, policies, controls and risk environments.
                AIGO-OS Govern brings AI into the same connected governance
                view while preserving the additional context needed for
                autonomy, authority, accountability and rapid change.
              </p>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.finalSection}>
        <PublicContainer>

          <div className={styles.finalPanel}>

            <div className={styles.finalCopy}>
              <p className={styles.sectionLabelLight}>
                AIGO-OS Govern
              </p>

              <h2 className={styles.finalTitle}>
                <span>See the governance state you already have.</span>
                <span>Keep it continuously understood.</span>
              </h2>

              <p>
                Connect the governance environment across your enterprise,
                make requirements and controls easier to understand, and focus
                management attention where coverage, change, assurance or
                recurring gaps actually require it.
              </p>
            </div>

            <div className={styles.finalActions}>
              <Link
                href="/request-demo"
                className={styles.finalPrimary}
              >
                Request a Demo
                <ArrowRight size={16} aria-hidden="true" />
              </Link>

              <Link
                href="/talk-to-an-expert"
                className={styles.finalSecondary}
              >
                Talk to an Expert
              </Link>
            </div>

          </div>

        </PublicContainer>
      </section>


      <div className={styles.resourcesSection}>
        <PublicContainer>
          <ProductResources product="Govern" />
        </PublicContainer>
      </div>
    </>    </>
  );
}


