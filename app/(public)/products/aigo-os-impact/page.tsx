import { StructuredData } from "@/components/public/structured-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import Link from "next/link";

import {
  Activity,
  ArrowRight,
  BrainCircuit,
  Building2,
  CircleAlert,
  GitBranch,
  Layers3,
  Network,
  Radar,
  Route,
  Workflow,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";
import { ProductResources } from "@/components/products/product-resources";

import styles from "./page.module.css";



export const metadata = createPageMetadata({
  title: "AIGO-OS Impact",
  description:
    "AIGO-OS Impact connects AI activity and enterprise relationships with business services, dependencies and potential operational consequence.",
  path: "/products/aigo-os-impact",
  keywords: [
    "AIGO-OS Impact",
    "AI business impact",
    "AI dependency intelligence",
  ],
});
const capabilities = [
  {
    icon: Building2,
    label: "Business Context",
    title: "Connect technology to the business around it.",
    text:
      "Relate applications, services, platforms, data and AI to the business services, processes, products, customers and operating areas that depend on them.",
    signal: "Business context intelligence",
  },
  {
    icon: Network,
    label: "Business Dependencies",
    title: "Know what depends on what.",
    text:
      "See direct, indirect and shared dependencies so the business consequence of a technology issue is not limited to the system where it started.",
    signal: "Dependency intelligence",
    featured: true,
  },
  {
    icon: Workflow,
    label: "Change Impact",
    title: "See what a planned change could affect.",
    text:
      "Connect technology, architecture, data and AI changes to the services, processes and business outcomes that may be exposed before the change takes place.",
    signal: "Change impact intelligence",
  },
  {
    icon: Activity,
    label: "Incident Impact",
    title: "Understand what an incident means to the business.",
    text:
      "Translate operational incidents into affected services, processes, customers, regions and other business consequences while the technical teams continue working in their existing tools.",
    signal: "Incident impact intelligence",
  },
  {
    icon: Radar,
    label: "Business Significance",
    title: "Know why one issue matters more than another.",
    text:
      "Evaluate business criticality, customer exposure, dependency concentration, regulatory relevance and other context so significance is explained rather than reduced to a severity label.",
    signal: "Significance intelligence",
  },
  {
    icon: Layers3,
    label: "Management Intelligence",
    title: "Give management the business picture.",
    text:
      "Bring incidents, change, dependencies and business significance together so management can see what is affected, why it matters and where attention is needed.",
    signal: "Management intelligence",
  },
];



const impactSolutions = [
  {
    eyebrow: "CHANGE EXPOSURE",
    title: "Change Impact Analysis",
    href: "/solutions/unknown-change-impact",
    text:
      "Understand which business services, operations, customer journeys and shared dependencies could be exposed before a proposed technology change takes place.",
    signal: "Before change",
  },
  {
    eyebrow: "ACTIVE DISRUPTION",
    title: "Incident Business Impact",
    href: "/solutions/unclear-incident-business-impact",
    text:
      "Connect an operational incident to the business services, processes, customers and operating areas that depend on the affected technology.",
    signal: "During disruption",
  },
  {
    eyebrow: "CONNECTED ENTERPRISE",
    title: "Dependency Analysis",
    href: "/solutions/hidden-dependencies",
    text:
      "See what an application, service, platform, data asset or AI capability depends on and what business activity ultimately depends on it.",
    signal: "Dependency context",
  },
  {
    eyebrow: "SERVICE CONTINUITY",
    title: "Critical Service Dependency Analysis",
    href: "/solutions/unclear-critical-service-dependencies",
    text:
      "Understand the applications, technology, information, platforms and other enterprise dependencies that must remain available for a critical service to operate.",
    signal: "Critical services",
  },
] as const;
const connectedSources = [
  "IT service management",
  "CMDB",
  "Observability",
  "Enterprise architecture",
  "Application inventory",
  "Business services",
  "AI platforms",
  "Data platforms",
];


export default function AigoOsImpactPage() {
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
            name: "AIGO-OS Impact",
            path: "/products/aigo-os-impact",
          },
        ])}
      />
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                AIGO-OS Impact
              </p>

              <h1 className={styles.heroTitle}>
                <span>Know what the business depends on.</span>
                <span>See what change or disruption could affect.</span>
              </h1>

              <p className={styles.heroText}>
                AIGO-OS Impact connects technology, service and business
                context so organisations can understand the business
                consequences of change, dependency and disruption.
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
                Business impact intelligence across applications, services,
                infrastructure, data and AI.
              </p>
            </div>


            <div className={styles.impactBoard}>

              <div className={styles.boardHeader}>
                <div>
                  <span>AIGO-OS Impact</span>
                  <strong>Business impact view</strong>
                </div>

                <div className={styles.liveState}>
                  <i aria-hidden="true" />
                  Evaluating
                </div>
              </div>


              <div className={styles.eventCard}>
                <div className={styles.eventIcon}>
                  <Activity size={20} aria-hidden="true" />
                </div>

                <div>
                  <span>Operational event</span>

                  <strong>
                    Shared identity service degraded
                  </strong>

                  <p>
                    A technical issue has been detected in a service used
                    across several digital channels.
                  </p>
                </div>
              </div>


              <div className={styles.impactPath}>

                <div>
                  <span>Technology</span>
                  <strong>Identity Platform</strong>
                </div>

                <ArrowRight
                  size={17}
                  className={styles.pathArrow}
                  aria-hidden="true"
                />

                <div>
                  <span>Business services</span>
                  <strong>3 affected</strong>
                </div>

                <ArrowRight
                  size={17}
                  className={styles.pathArrow}
                  aria-hidden="true"
                />

                <div className={styles.pathAttention}>
                  <span>Business exposure</span>
                  <strong>Customer access</strong>
                </div>

              </div>


              <div className={styles.significancePanel}>
                <div>
                  <span>Why this matters</span>

                  <strong>
                    Customer facing services share the same dependency.
                  </strong>
                </div>

                <div className={styles.significanceFacts}>
                  <span>3 critical services</span>
                  <span>2 regions</span>
                  <span>Customer login affected</span>
                </div>
              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.positionSection}>
        <PublicContainer>
          <div className={styles.positionGrid}>

            <p className={styles.sectionLabel}>
              The role of Impact
            </p>

            <div className={styles.positionCopy}>
              <h2>
                Operational systems tell you what happened.
                <span> AIGO-OS Impact shows what it means to the business.</span>
              </h2>

              <p>
                Enterprises already monitor applications, infrastructure,
                changes and incidents through operational platforms. The
                harder question is how those events relate to business
                services, processes, customers, products and other outcomes.
              </p>

              <p>
                Impact connects those relationships so teams do not have to
                reconstruct the business consequence manually every time
                something changes or fails.
              </p>
            </div>

          </div>
        </PublicContainer>
      </section>



      <section className={styles.solutionsSection}>
        <PublicContainer>

          <div className={styles.solutionsHeader}>
            <div className={styles.solutionsHeading}>
              <p className={styles.sectionLabel}>
                Where Impact is used
              </p>

              <h2>
                Start with the business-impact question
                <span> that operational systems cannot answer alone.</span>
              </h2>
            </div>

            <p className={styles.solutionsIntro}>
              AIGO-OS Impact applies connected business context to specific
              operational questions. Explore the situations where teams need
              to understand dependency, exposure and business consequence
              rather than only the technical event.
            </p>
          </div>


          <div className={styles.solutionGrid}>
            {impactSolutions.map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className={styles.solutionCard}
              >
                <div className={styles.solutionCardTop}>
                  <span className={styles.solutionEyebrow}>
                    {solution.eyebrow}
                  </span>

                  <span
                    className={styles.solutionArrow}
                    aria-hidden="true"
                  >
                    <ArrowRight
                      size={17}
                      strokeWidth={1.8}
                    />
                  </span>
                </div>

                <div className={styles.solutionCardBody}>
                  <h3>
                    {solution.title}
                  </h3>

                  <p>
                    {solution.text}
                  </p>
                </div>

                <div className={styles.solutionCardFooter}>
                  <span>
                    {solution.signal}
                  </span>

                  <strong>
                    Explore solution
                  </strong>
                </div>
              </Link>
            ))}
          </div>


          <div className={styles.solutionPrinciple}>
            <div className={styles.solutionPrincipleMark}>
              <GitBranch
                size={21}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </div>

            <div>
              <span>
                ONE CONNECTED IMPACT MODEL
              </span>

              <strong>
                The question changes. The enterprise relationships underneath
                it remain connected.
              </strong>

              <p>
                Dependency analysis establishes what is connected. Change and
                incident analysis use those relationships to explain where
                business exposure may appear and why it matters.
              </p>
            </div>
          </div>

        </PublicContainer>
      </section>
      <section className={styles.contextSection}>
        <PublicContainer>

          <div className={styles.contextHeader}>
            <div>
              <p className={styles.sectionLabelLight}>
                Connected business context
              </p>

              <h2>
                Follow the path from technology to business consequence.
              </h2>
            </div>

            <p>
              Impact uses the relationships already represented across the
              enterprise to understand which business services, processes and
              outcomes depend on the technology underneath them.
            </p>
          </div>


          <div className={styles.contextStage}>

            <div className={styles.contextSource}>
              <span>Technology</span>

              <div>
                <strong>Payments API</strong>
                <small>Application service</small>
              </div>
            </div>


            <div className={styles.contextConnector}>
              <ArrowRight size={21} aria-hidden="true" />
            </div>


            <div className={styles.contextMiddle}>
              <span>Business service</span>

              <div>
                <strong>Online Checkout</strong>
                <small>Customer transaction service</small>
              </div>
            </div>


            <div className={styles.contextConnector}>
              <ArrowRight size={21} aria-hidden="true" />
            </div>


            <div className={styles.contextOutcome}>
              <span>Business consequence</span>

              <div>
                <strong>Digital Sales</strong>
                <small>Revenue sensitive customer journey</small>
              </div>
            </div>

          </div>


          <div className={styles.sourceCloud}>
            {connectedSources.map((source) => (
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
                Business impact intelligence
              </p>

              <h2>
                Understand what is connected.
                <span> Understand what could be affected.</span>
              </h2>
            </div>

            <p>
              Impact turns technical and service relationships into business
              understanding so teams can see dependency, potential exposure
              and actual impact without replacing the operational systems
              they already use.
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


      <section className={styles.incidentSection}>
        <PublicContainer>
          <div className={styles.incidentGrid}>

            <div className={styles.incidentCopy}>
              <p className={styles.sectionLabel}>
                Incident impact
              </p>

              <h2>
                A technical incident is only the beginning of the story.
              </h2>

              <p>
                Impact follows the affected dependency chain so the business
                consequence becomes visible while technical teams continue
                managing the incident in their existing operational tools.
              </p>
            </div>


            <div className={styles.incidentScenario}>

              <div className={styles.scenarioHeader}>
                <div>
                  <span>Current incident</span>
                  <strong>Inventory database latency</strong>
                </div>

                <div className={styles.scenarioState}>
                  <i aria-hidden="true" />
                  Active
                </div>
              </div>


              <div className={styles.scenarioFlow}>

                <div>
                  <span>Technical service</span>
                  <strong>Inventory Database</strong>
                </div>

                <div>
                  <span>Application</span>
                  <strong>Warehouse Fulfilment</strong>
                </div>

                <div>
                  <span>Business process</span>
                  <strong>Order Dispatch</strong>
                </div>

                <div className={styles.scenarioImpact}>
                  <span>Potential business effect</span>
                  <strong>Customer delivery delay</strong>
                </div>

              </div>


              <div className={styles.scenarioFinding}>
                <CircleAlert size={18} aria-hidden="true" />

                <div>
                  <span>Impact intelligence</span>

                  <strong>
                    Seven distribution centres depend on the affected service.
                  </strong>

                  <p>
                    Fulfilment capacity is concentrated in the affected
                    dependency, increasing the potential reach of the incident.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.changeSection}>
        <PublicContainer>
          <div className={styles.changeGrid}>

            <div className={styles.changeScenario}>

              <div className={styles.changeHeader}>
                <div>
                  <span>Planned change</span>

                  <strong>
                    Authentication service upgrade
                  </strong>
                </div>

                <span>Saturday 22:00</span>
              </div>


              <div className={styles.changeExposure}>

                <div>
                  <span>Customer channels</span>
                  <strong>4</strong>
                  <small>share the service</small>
                </div>

                <div>
                  <span>Critical services</span>
                  <strong>2</strong>
                  <small>depend on authentication</small>
                </div>

                <div className={styles.changeExposureAttention}>
                  <span>Business exposure</span>
                  <strong>High</strong>
                  <small>because of shared dependency</small>
                </div>

              </div>


              <div className={styles.changeReason}>
                <Route size={20} aria-hidden="true" />

                <div>
                  <span>Why the exposure is significant</span>

                  <strong>
                    Customer Portal, Mobile Banking, Advisor Portal and the
                    Partner API share the same authentication service.
                  </strong>
                </div>
              </div>

            </div>


            <div className={styles.changeCopy}>
              <p className={styles.sectionLabelLight}>
                Change impact
              </p>

              <h2>
                Understand business exposure before the change happens.
              </h2>

              <p>
                Change records often describe the technical component being
                modified. Impact adds the business relationships around that
                component so teams can see what services and customer
                journeys may be exposed.
              </p>

              <p>
                AIGO-OS Impact does not approve the change. It gives the
                people making that decision better business context.
              </p>
            </div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.significanceSection}>
        <PublicContainer>

          <div className={styles.significanceHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Business significance
              </p>

              <h2>
                Do not stop at High, Medium or Low.
              </h2>
            </div>

            <p>
              Impact explains the business conditions behind significance so
              management can understand why an event or change deserves
              attention.
            </p>
          </div>


          <div className={styles.significanceBoard}>

            <div className={styles.significanceSummary}>
              <span>Business significance</span>

              <strong>
                Material customer exposure
              </strong>

              <p>
                The affected technology supports a shared customer facing
                capability across critical digital services.
              </p>
            </div>


            <div className={styles.significanceGrid}>

              <div>
                <span>Critical services</span>
                <strong>3</strong>
                <small>depend on the affected technology</small>
              </div>

              <div>
                <span>Customer exposure</span>
                <strong>Digital access</strong>
                <small>customer facing journey involved</small>
              </div>

              <div>
                <span>Dependency</span>
                <strong>Shared</strong>
                <small>multiple services use the same component</small>
              </div>

              <div>
                <span>Geography</span>
                <strong>2 regions</strong>
                <small>potentially affected</small>
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
                AI business impact
              </p>

              <h2>
                AI belongs inside the business dependency picture.
              </h2>

              <p>
                AI systems and agents support applications, services and
                business processes just like other enterprise technology.
                Impact makes those relationships explicit so a model change,
                agent failure or AI dependency can be understood in terms of
                the business that relies on it.
              </p>
            </div>


            <div className={styles.aiPath}>
              <div>
                <span>AI agent</span>
                <strong>Service Assistant</strong>
              </div>

              <ArrowRight size={17} aria-hidden="true" />

              <div>
                <span>Business process</span>
                <strong>Case Routing</strong>
              </div>

              <ArrowRight size={17} aria-hidden="true" />

              <div>
                <span>Business outcome</span>
                <strong>Customer Service</strong>
              </div>
            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.managementSection}>
        <PublicContainer>

          <div className={styles.managementHeader}>
            <div>
              <p className={styles.sectionLabelLight}>
                Management intelligence
              </p>

              <h2>
                See what is affecting the business and why.
              </h2>
            </div>

            <p>
              Impact brings the most important business consequences together
              so management can move from technical events to a clear view of
              service, customer and operational exposure.
            </p>
          </div>


          <div className={styles.managementBoard}>

            <div className={styles.managementLead}>
              <span>Current business impact</span>

              <strong>
                Customer access is the most concentrated exposure.
              </strong>

              <p>
                Two active technology issues and one planned change share
                dependencies with critical digital services.
              </p>
            </div>


            <div className={styles.managementMetrics}>

              <div>
                <span>Business services affected</span>
                <strong>7</strong>
                <small>across current incidents</small>
              </div>

              <div>
                <span>Shared dependencies</span>
                <strong>3</strong>
                <small>require close attention</small>
              </div>

              <div>
                <span>Planned change</span>
                <strong>1</strong>
                <small>with material business exposure</small>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.finalSection}>
        <PublicContainer>

          <div className={styles.finalPanel}>

            <div className={styles.finalCopy}>
              <p className={styles.sectionLabelLight}>
                AIGO-OS Impact
              </p>

              <h2 className={styles.finalTitle}>
                <span>Know what the business depends on.</span>
                <span>Understand what happens when it changes.</span>
              </h2>

              <p>
                Connect technology activity to business consequence and give
                management a clearer view of dependency, exposure and impact.
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
          <ProductResources product="Impact" />
        </PublicContainer>
      </div>
    </>    </>
  );
}

