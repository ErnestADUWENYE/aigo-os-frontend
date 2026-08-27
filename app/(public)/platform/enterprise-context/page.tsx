"use client";

import Link from "next/link";

import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Database,
  FileText,
  Layers3,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


const contextCards = [
  {
    icon: Building2,
    label: "Organisation",
    title: "Ownership and responsibility",
    description:
      "Understand who owns the object, which organisational area it belongs to and where responsibility sits.",
    facts: [
      ["Business area", "Customer Operations"],
      ["Accountable team", "Digital Services"],
      ["Ownership state", "Assigned"],
    ],
  },

  {
    icon: Workflow,
    label: "Business",
    title: "Purpose and operating role",
    description:
      "Understand the business capability, process, service or outcome the enterprise object supports.",
    facts: [
      ["Business capability", "Customer Service"],
      ["Operating role", "Core service"],
      ["Business use", "Customer interaction"],
    ],
  },

  {
    icon: Layers3,
    label: "Technology",
    title: "Technology position",
    description:
      "Understand the applications, platforms, environments and technology classifications surrounding the object.",
    facts: [
      ["Environment", "Production"],
      ["Technology class", "Business application"],
      ["Service relationship", "Shared"],
    ],
  },

  {
    icon: ShieldCheck,
    label: "Governance",
    title: "Governance context",
    description:
      "Connect policies, requirements, controls, classifications and governance obligations that apply.",
    facts: [
      ["Governance scope", "In scope"],
      ["Classification", "Business critical"],
      ["Control relationship", "Established"],
    ],
  },

  {
    icon: Database,
    label: "Data",
    title: "Information context",
    description:
      "Understand the data domains, sensitivity, business use and information classifications associated with the object.",
    facts: [
      ["Data domain", "Customer"],
      ["Sensitivity", "Confidential"],
      ["Data use", "Operational"],
    ],
  },

  {
    icon: BrainCircuit,
    label: "AI",
    title: "AI context",
    description:
      "Understand models, agents and AI-enabled capabilities as part of the wider enterprise environment.",
    facts: [
      ["AI relationship", "AI enabled"],
      ["Capability", "Decision support"],
      ["Operating role", "Assisted"],
    ],
  },
];


function ContextFlashcards() {
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
        (current + 1) % contextCards.length
      );
    }, 4000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);


  const getPosition = (index: number) => {
    const total = contextCards.length;

    let difference = index - activeIndex;

    if (difference > total / 2) {
      difference -= total;
    }

    if (difference < -total / 2) {
      difference += total;
    }

    if (difference === 0) {
      return "active";
    }

    if (difference === 1) {
      return "next";
    }

    if (difference === -1) {
      return "previous";
    }

    if (difference === 2) {
      return "farNext";
    }

    if (difference === -2) {
      return "farPrevious";
    }

    return "hidden";
  };


  const active = contextCards[activeIndex];


  return (
    <div className={styles.experience}>

      <div className={styles.objectPanel}>

        <div className={styles.objectTop}>
          <span className={styles.objectEyebrow}>
            Example enterprise object
          </span>

          <span className={styles.liveIndicator}>
            <i aria-hidden="true" />

            Context building
          </span>
        </div>


        <div className={styles.objectIdentity}>
          <span>
            Business application
          </span>

          <strong>
            Customer Service Application
          </strong>

          <p>
            One enterprise object understood through the organisational,
            business, technology, governance, data and AI context around it.
          </p>
        </div>


        <div className={styles.objectContext}>
          <span>
            Context in view
          </span>

          <strong>
            {active.label}
          </strong>
        </div>

      </div>


      <div className={styles.stageColumn}>

        <div
          className={styles.stage}
          aria-live="polite"
        >
          {contextCards.map((card, index) => {
            const Icon = card.icon;
            const position = getPosition(index);

            return (
              <button
                key={card.label}
                type="button"
                className={[
                  styles.flashcard,
                  styles[position],
                ].join(" ")}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${card.label} context`}
                aria-pressed={index === activeIndex}
              >

                <div className={styles.cardHeader}>

                  <div className={styles.iconWrap}>
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <span>
                    {card.label}
                  </span>

                </div>


                <div className={styles.cardBody}>

                  <small>
                    Enterprise context
                  </small>

                  <strong>
                    {card.title}
                  </strong>

                  <p>
                    {card.description}
                  </p>

                </div>

              </button>
            );
          })}
        </div>


        <div className={styles.detailPanel}>

          <div className={styles.detailHeading}>
            <span>
              {active.label} context
            </span>

            <strong>
              {active.title}
            </strong>
          </div>


          <div className={styles.factGrid}>
            {active.facts.map(([label, value]) => (
              <div key={label}>
                <span>
                  {label}
                </span>

                <strong>
                  {value}
                </strong>
              </div>
            ))}
          </div>

        </div>


        <div
          className={styles.controls}
          aria-label="Enterprise context dimensions"
        >
          {contextCards.map((card, index) => (
            <button
              key={card.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={
                index === activeIndex
                  ? styles.controlActive
                  : styles.control
              }
              aria-label={`Show ${card.label} context`}
              aria-current={
                index === activeIndex
                  ? "true"
                  : undefined
              }
            >
              <span className={styles.controlDot} />
            </button>
          ))}
        </div>

      </div>

    </div>
  );
}


export default function EnterpriseContextPage() {
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
                  ENTERPRISE CONTEXT
                </strong>
              </div>


              <h1 className={styles.heroTitle}>
                <span>
                  Know what enterprise information
                </span>

                <span>
                  actually means here.
                </span>
              </h1>


              <p className={styles.heroText}>
                AIGO-OS gives connected enterprise information consistent
                organisational and business meaning so the same application,
                service, policy, control, AI system or other enterprise object
                can be understood in context across the organisation.
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


            <div className={styles.contextProfileVisual}>

  <div className={styles.profileHeader}>
    <span>
      Enterprise context in progress
    </span>

    <strong>
      One connected record becomes an understandable enterprise object.
    </strong>
  </div>


  <div className={styles.profileStage}>

    <div className={styles.profileObject}>

      <div className={styles.profileObjectTop}>
        <span>
          Connected enterprise object
        </span>

        <i aria-hidden="true" />
      </div>

      <strong>
        Business Application
      </strong>

      <small>
        Context is being established from connected enterprise information.
      </small>

    </div>


    <div className={`${styles.contextLayer} ${styles.layerOrganisation}`}>
      <span>
        Organisation
      </span>

      <strong>
        Ownership and responsibility
      </strong>

      <small>
        Accountable business area
      </small>
    </div>


    <div className={`${styles.contextLayer} ${styles.layerBusiness}`}>
      <span>
        Business
      </span>

      <strong>
        Purpose and operating role
      </strong>

      <small>
        Business capability and use
      </small>
    </div>


    <div className={`${styles.contextLayer} ${styles.layerTechnology}`}>
      <span>
        Technology
      </span>

      <strong>
        Technology position
      </strong>

      <small>
        Environment and service classification
      </small>
    </div>


    <div className={`${styles.contextLayer} ${styles.layerGovernance}`}>
      <span>
        Governance
      </span>

      <strong>
        Applicable governance context
      </strong>

      <small>
        Requirements, controls and scope
      </small>
    </div>


    <div className={`${styles.contextLayer} ${styles.layerData}`}>
      <span>
        Data & AI
      </span>

      <strong>
        Information and AI context
      </strong>

      <small>
        Data use, sensitivity and AI relationship
      </small>
    </div>

  </div>


  <div className={styles.profileResult}>

    <div>
      <span>
        AIGO-OS result
      </span>

      <strong>
        Enterprise context established
      </strong>
    </div>

    <small>
      The object can now be understood consistently across Govern and Impact.
    </small>

  </div>

</div>

          </div>
        </PublicContainer>
      </section>


      <section className={styles.problemSection}>
        <PublicContainer>

          <div className={styles.problemGrid}>

            <p className={styles.sectionLabel}>
              The context gap
            </p>

            <div>

              <h2>
                A record can be accurate and still tell only part of the story.
              </h2>

              <p>
                An application inventory may identify an application.
                A service platform may identify its owner. Architecture may
                describe its dependencies. GRC may show applicable controls.
                Data and AI platforms may describe other important relationships.
              </p>

              <p>
                The challenge is understanding those facts as one enterprise
                object with a consistent meaning across the organisation.
              </p>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.modelSection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>

            <div>
              <p className={styles.sectionLabelLight}>
                Context around the enterprise object
              </p>

              <h2>
                See the different meanings surrounding the same thing.
              </h2>
            </div>

            <p>
              AIGO-OS keeps these dimensions connected rather than forcing
              people to reconstruct them manually from separate systems.
            </p>

          </div>


          <ContextFlashcards />

        </PublicContainer>
      </section>


      <section className={styles.normalisationSection}>
        <PublicContainer>

          <div className={styles.normalisationGrid}>

            <div className={styles.normalisationCopy}>

              <p className={styles.sectionLabel}>
                Resolve inconsistent language
              </p>

              <h2>
                Different systems can describe the same enterprise reality differently.
              </h2>

              <p>
                AIGO-OS can relate different identifiers, names,
                classifications and source terminology to the enterprise
                object they represent while preserving where each fact came from.
              </p>

            </div>


            <div className={styles.normalisationVisual}>

              <div className={styles.sourceTerms}>

                <div>
                  <span>Service management</span>
                  <strong>Customer Support App</strong>
                </div>

                <div>
                  <span>Architecture</span>
                  <strong>Customer Service Platform</strong>
                </div>

                <div>
                  <span>Governance</span>
                  <strong>APP-2048</strong>
                </div>

              </div>


              <ArrowRight
                size={20}
                strokeWidth={1.6}
                className={styles.resolveArrow}
                aria-hidden="true"
              />


              <div className={styles.resolvedContext}>
                <span>
                  Resolved enterprise object
                </span>

                <strong>
                  Customer Service Application
                </strong>

                <p>
                  Different source references are connected to one
                  understandable enterprise object without erasing
                  their original sources.
                </p>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.definitionSection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>

            <div>
              <p className={styles.sectionLabelLight}>
                Organisation-specific meaning
              </p>

              <h2>
                Context should reflect how the organisation actually operates.
              </h2>
            </div>

            <p>
              Enterprise terms such as critical, production, customer-facing,
              material or in scope only become useful when their meaning is
              understood in the context of the organisation using them.
            </p>

          </div>


          <div className={styles.definitionBoard}>

            <div className={styles.definitionSource}>

              <div>
                <FileText
                  size={19}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>
                  Enterprise definition
                </span>
              </div>

              <strong>
                Business critical
              </strong>

              <p>
                Defined by the organisation according to its own operational,
                customer, regulatory or other material considerations.
              </p>

            </div>


            <div className={styles.definitionSource}>

              <div>
                <ShieldCheck
                  size={19}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>
                  Connected conditions
                </span>
              </div>

              <strong>
                Context around the object
              </strong>

              <p>
                Ownership, business role, technology position, governance,
                information and other connected facts provide the surrounding meaning.
              </p>

            </div>


            <div className={styles.definitionResult}>

              <span>
                AIGO-OS context
              </span>

              <strong>
                Meaning becomes usable across Govern and Impact.
              </strong>

              <div>
                <small>Governance</small>
                <small>Technology</small>
                <small>Business</small>
                <small>AI</small>
              </div>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.productSection}>
        <PublicContainer>

          <div className={styles.sectionHeader}>

            <div>
              <p className={styles.sectionLabel}>
                Shared context, different use
              </p>

              <h2>
                Govern and Impact use the same enterprise meaning differently.
              </h2>
            </div>

            <p>
              Enterprise Context gives both products a consistent foundation
              without turning the platform capability itself into a governance
              or business-impact workflow.
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
                Understand governance in the context of the organisation.
              </h3>

              <p>
                Use ownership, scope, classifications, business role and other
                enterprise context when interpreting requirements, controls,
                coverage and assurance.
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
                Understand technology in the context of the business.
              </h3>

              <p>
                Use criticality, ownership, business purpose and operating
                context when interpreting what an incident, change,
                dependency or technical condition means.
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


      <section className={styles.boundarySection}>
        <PublicContainer>

          <div className={styles.boundaryPanel}>

            <div>

              <p className={styles.sectionLabel}>
                Keep the source visible
              </p>

              <h2>
                Shared meaning does not erase source authority.
              </h2>

              <p>
                AIGO-OS can establish a consistent enterprise understanding
                while retaining the source systems and records that support it.
              </p>

            </div>


            <div className={styles.boundaryExample}>

              <span>
                Enterprise context
              </span>

              <strong>
                Customer Service Application is business critical.
              </strong>

              <small>
                Supported by connected business, service and governance context
              </small>

              <ArrowRight
                size={18}
                aria-hidden="true"
              />

              <span>
                Source evidence remains traceable
              </span>

            </div>

          </div>

        </PublicContainer>
      </section>


      <section className={styles.nextSection}>
        <PublicContainer>

          <Link
            href="/platform/relationship-dependency-intelligence"
            className={styles.nextCapability}
          >

            <div>
              <span>
                Explore next
              </span>

              <strong>
                Relationship & Dependency Intelligence
              </strong>

              <p>
                Once enterprise objects have consistent meaning,
                AIGO-OS can understand how they relate to and depend on one another.
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




