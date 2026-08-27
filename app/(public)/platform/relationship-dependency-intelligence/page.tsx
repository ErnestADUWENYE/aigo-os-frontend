"use client";

import Link from "next/link";

import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  Building2,
  GitBranch,
  Network,
  Route,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


const relationshipViews = [
  {
    icon: Building2,
    label: "Organisation",
    relation: "OWNED BY",
    source: "Customer Service Application",
    target: "Digital Services",
    description:
      "Connect an enterprise object to the organisational area and accountable ownership around it.",
  },
  {
    icon: Workflow,
    label: "Business",
    relation: "SUPPORTS",
    source: "Customer Service Application",
    target: "Customer Support",
    description:
      "Understand the business capability, service or process supported by the technology.",
  },
  {
    icon: Network,
    label: "Technology",
    relation: "DEPENDS ON",
    source: "Customer Service Application",
    target: "Identity Platform",
    description:
      "Trace the technology and service dependencies required for the application to operate.",
  },
  {
    icon: ShieldCheck,
    label: "Governance",
    relation: "APPLIES TO",
    source: "Access Management Control",
    target: "Customer Service Application",
    description:
      "Understand which policies, requirements and controls apply to which parts of the enterprise.",
  },
  {
    icon: BrainCircuit,
    label: "AI",
    relation: "USES",
    source: "Customer Service Application",
    target: "AI Decision Support",
    description:
      "See AI models, agents and AI-enabled capabilities as part of the wider enterprise relationship model.",
  },
  {
    icon: Boxes,
    label: "Operations",
    relation: "RUNS ON",
    source: "Customer Service Application",
    target: "Shared Cloud Platform",
    description:
      "Connect operational services and shared platforms to the enterprise objects that rely on them.",
  },
];


function RelationshipExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        (current + 1) % relationshipViews.length
      );
    }, 4000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);


  const active = relationshipViews[activeIndex];
  const ActiveIcon = active.icon;


  return (
    <div className={styles.relationshipExplorer}>

      <div className={styles.explorerStage}>

        <div className={styles.explorerSource}>
          <span>
            Enterprise object
          </span>

          <strong>
            {active.source}
          </strong>
        </div>


        <div className={styles.relationshipConnector}>

          <span className={styles.signalStart} />

          <div className={styles.connectorLine}>
            <span />
          </div>

          <div className={styles.relationshipBadge}>
            <ActiveIcon
              size={17}
              strokeWidth={1.7}
              aria-hidden="true"
            />

            <strong>
              {active.relation}
            </strong>
          </div>

          <div className={styles.connectorLine}>
            <span />
          </div>

          <span className={styles.signalEnd} />

        </div>


        <div className={styles.explorerTarget}>
          <span>
            {active.label} context
          </span>

          <strong>
            {active.target}
          </strong>
        </div>

      </div>


      <div className={styles.explorerDetail}>

        <div>
          <span>
            Relationship understood
          </span>

          <strong>
            {active.source} {active.relation.toLowerCase()} {active.target}
          </strong>

          <p>
            {active.description}
          </p>
        </div>


        <div
          className={styles.explorerControls}
          aria-label="Relationship examples"
        >
          {relationshipViews.map((item, index) => (
            <button
              key={item.label}
              type="button"
              aria-label={`Show ${item.label} relationship`}
              aria-current={
                index === activeIndex
                  ? "true"
                  : undefined
              }
              className={
                index === activeIndex
                  ? styles.explorerControlActive
                  : styles.explorerControl
              }
              onClick={() => setActiveIndex(index)}
            >
              <span />
            </button>
          ))}
        </div>

      </div>

    </div>
  );
}


export default function RelationshipDependencyIntelligencePage() {
  return (
    <>

      <section className={styles.hero}>
        <PublicContainer>

          <div className={styles.heroGrid}>

            <div className={styles.heroCopy}>

              <div className={styles.platformIdentity}>
                <span>
                  AIGO-OS PLATFORM
                </span>

                <strong>
                  RELATIONSHIP & DEPENDENCY INTELLIGENCE
                </strong>
              </div>


              <h1 className={styles.heroTitle}>
                <span>
                  Understand what connects.
                </span>

                <span>
                  See what depends on it.
                </span>
              </h1>


              <p className={styles.heroText}>
                AIGO-OS understands the relationships between governance,
                technology, AI, business and organisational entities so the
                enterprise can see what applies, what depends on what and
                where change or disruption can propagate.
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


            <div className={styles.relationshipVisual}>

              <div className={styles.visualHeader}>
                <span>
                  Live relationship view
                </span>

                <strong>
                  See how one enterprise object connects to the environment around it.
                </strong>
              </div>


              <div className={styles.relationshipHub}>

                <div className={styles.hubNodeGovernance}>
                  <span>
                    Governance
                  </span>

                  <strong>
                    Access Control
                  </strong>

                  <small>
                    APPLIES TO
                  </small>
                </div>


                <div className={styles.hubNodeTechnology}>
                  <span>
                    Technology
                  </span>

                  <strong>
                    Identity Platform
                  </strong>

                  <small>
                    DEPENDS ON
                  </small>
                </div>


                <div className={styles.hubCentral}>
                  <span>
                    Business application
                  </span>

                  <strong>
                    Customer Service Application
                  </strong>
                </div>


                <div className={styles.hubNodeBusiness}>
                  <span>
                    Business
                  </span>

                  <strong>
                    Customer Support
                  </strong>

                  <small>
                    SUPPORTS
                  </small>
                </div>


                <div className={styles.hubNodeAI}>
                  <span>
                    AI
                  </span>

                  <strong>
                    Decision Support
                  </strong>

                  <small>
                    USES
                  </small>
                </div>


                <span className={styles.lineGovernance}>
                  <i />
                </span>

                <span className={styles.lineTechnology}>
                  <i />
                </span>

                <span className={styles.lineBusiness}>
                  <i />
                </span>

                <span className={styles.lineAI}>
                  <i />
                </span>

              </div>


              <div className={styles.visualFooter}>
                <GitBranch
                  size={16}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>
                  Different relationship types connect the same enterprise object.
                </span>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.problemSection}>
        <PublicContainer>

          <div className={styles.problemGrid}>

            <p className={styles.sectionLabel}>
              Why relationships matter
            </p>


            <div>

              <h2>
                Enterprise consequences rarely stop where an event starts.
              </h2>

              <p>
                An application can depend on shared technology, support a
                business service, process sensitive information, use AI and
                be governed by multiple requirements at the same time.
              </p>

              <p>
                Understanding the object alone is not enough. AIGO-OS
                understands the relationships around it so the wider
                enterprise consequence can be followed.
              </p>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.relationshipSection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>

            <div>

              <p className={styles.sectionLabelLight}>
                Enterprise relationships
              </p>

              <h2>
                The connection between two objects has meaning of its own.
              </h2>

            </div>


            <p>
              AIGO-OS does not simply record that two things are connected.
              It understands whether one depends on, supports, owns, uses,
              governs or otherwise relates to the other.
            </p>

          </div>


          <RelationshipExplorer />

        </PublicContainer>
      </section>


      <section className={styles.dependencySection}>
        <PublicContainer>

          <div className={styles.dependencyGrid}>

            <div className={styles.dependencyCopy}>

              <p className={styles.sectionLabel}>
                Follow dependency paths
              </p>

              <h2>
                See beyond the first dependency.
              </h2>

              <p>
                A direct technical dependency can lead to a business
                consequence several relationships away. AIGO-OS can follow
                that path instead of stopping at the first connected object.
              </p>

            </div>


            <div className={styles.dependencyPath}>

              <div>
                <span>
                  Shared platform
                </span>

                <strong>
                  Identity Platform
                </strong>
              </div>

              <ArrowRight
                size={18}
                aria-hidden="true"
              />

              <div>
                <span>
                  Application
                </span>

                <strong>
                  Customer Service Application
                </strong>
              </div>

              <ArrowRight
                size={18}
                aria-hidden="true"
              />

              <div>
                <span>
                  Business service
                </span>

                <strong>
                  Customer Support
                </strong>
              </div>

              <ArrowRight
                size={18}
                aria-hidden="true"
              />

              <div className={styles.pathAttention}>
                <span>
                  Business outcome
                </span>

                <strong>
                  Customer access affected
                </strong>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.concentrationSection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>

            <div>

              <p className={styles.sectionLabelLight}>
                Shared dependencies
              </p>

              <h2>
                Find where many important services rely on the same thing.
              </h2>

            </div>


            <p>
              Shared technology can create concentrated enterprise exposure
              even when each application or service appears healthy when
              viewed individually.
            </p>

          </div>


          <div className={styles.concentrationBoard}>

            <div className={styles.sharedNode}>

              <span>
                Shared dependency
              </span>

              <strong>
                Identity Platform
              </strong>

              <p>
                Used across multiple enterprise services.
              </p>

            </div>


            <div className={styles.dependentServices}>

              <div>
                <span>Service</span>
                <strong>Customer Service</strong>
              </div>

              <div>
                <span>Service</span>
                <strong>Employee Services</strong>
              </div>

              <div>
                <span>Service</span>
                <strong>Partner Access</strong>
              </div>

              <div>
                <span>Service</span>
                <strong>Digital Operations</strong>
              </div>

            </div>


            <div className={styles.concentrationFinding}>

              <Route
                size={19}
                aria-hidden="true"
              />

              <div>

                <span>
                  Concentrated dependency
                </span>

                <strong>
                  Multiple business services rely on the same identity capability.
                </strong>

                <p>
                  A change or disruption in one shared dependency can therefore
                  create a much wider enterprise consequence.
                </p>

              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.governanceSection}>
        <PublicContainer>

          <div className={styles.governanceGrid}>

            <div className={styles.governanceChain}>

              <div>
                <span>
                  Policy
                </span>

                <strong>
                  Access Management Policy
                </strong>
              </div>

              <ArrowRight
                size={17}
                aria-hidden="true"
              />

              <div>
                <span>
                  Requirement
                </span>

                <strong>
                  Privileged Access Review
                </strong>
              </div>

              <ArrowRight
                size={17}
                aria-hidden="true"
              />

              <div>
                <span>
                  Control
                </span>

                <strong>
                  Access Review Control
                </strong>
              </div>

              <ArrowRight
                size={17}
                aria-hidden="true"
              />

              <div className={styles.governanceTarget}>
                <span>
                  Applies to
                </span>

                <strong>
                  Governed enterprise services
                </strong>
              </div>

            </div>


            <div className={styles.governanceCopy}>

              <p className={styles.sectionLabel}>
                Governance relationships
              </p>

              <h2>
                Not every important relationship is technical.
              </h2>

              <p>
                Policies relate to requirements. Requirements relate to
                controls. Controls apply to applications and services.
                Understanding those relationships is essential to knowing
                where governance applies and whether coverage remains complete.
              </p>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.productSection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>

            <div>

              <p className={styles.sectionLabel}>
                Shared relationship intelligence
              </p>

              <h2>
                Govern and Impact follow different paths through the same enterprise.
              </h2>

            </div>


            <p>
              The underlying relationships are shared. The products use them
              to answer different governance and business-impact questions.
            </p>

          </div>


          <div className={styles.productGrid}>

            <Link
              href="/products/aigo-os-govern"
              className={styles.productCard}
            >

              <span>
                AIGO-OS Govern
              </span>

              <h3>
                Understand what applies to what.
              </h3>

              <p>
                Connect policies, requirements, controls, applications,
                services and governed populations so applicability and
                coverage can be continuously understood.
              </p>

              <strong>
                Explore Govern
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                />
              </strong>

            </Link>


            <Link
              href="/products/aigo-os-impact"
              className={styles.productCard}
            >

              <span>
                AIGO-OS Impact
              </span>

              <h3>
                Understand what depends on what.
              </h3>

              <p>
                Follow technology, application, service, process, data,
                customer and AI relationships to understand where a change,
                incident or failure can create business consequence.
              </p>

              <strong>
                Explore Impact
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                />
              </strong>

            </Link>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.nextSection}>
        <PublicContainer>

          <Link
            href="/platform/continuous-intelligence"
            className={styles.nextCapability}
          >

            <div>

              <span>
                Explore next
              </span>

              <strong>
                Continuous Intelligence
              </strong>

              <p>
                Once relationships are understood, AIGO-OS can keep that
                enterprise picture current as systems, scope, dependencies
                and conditions change.
              </p>

            </div>

            <ArrowRight
              size={22}
              strokeWidth={1.7}
              aria-hidden="true"
            />

          </Link>

        </PublicContainer>
      </section>

    </>
  );
}

