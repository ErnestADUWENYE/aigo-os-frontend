"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  Bot,
  Boxes,
  BrainCircuit,
  Building2,
  Fingerprint,
  Network,
  ServerCog,
  ShieldCheck,
} from "lucide-react";

import styles from "@/styles/page03-actor-passports.module.css";


type PassportFieldKey =
  | "purpose"
  | "owner"
  | "relationships";


const passportFields = [
  {
    key: "purpose" as PassportFieldKey,
    label: "DECLARED PURPOSE",
    value: "Production operations support",
    icon: BrainCircuit,
    tone: "gold",
  },
  {
    key: "owner" as PassportFieldKey,
    label: "ACCOUNTABLE OWNER",
    value: "Platform Operations",
    icon: Building2,
    tone: "green",
  },
  {
    key: "relationships" as PassportFieldKey,
    label: "OPERATING RELATIONSHIPS",
    value: "Observability, ITSM and cloud",
    icon: Network,
    tone: "violet",
  },
];


const representations = [
  {
    label: "AGENT RUNTIME",
    value: "ops-agent-17",
    icon: Bot,
  },
  {
    label: "SERVICE IDENTITY",
    value: "svc-platform-ops-ai",
    icon: ServerCog,
  },
  {
    label: "APPLICATION",
    value: "Operations Copilot",
    icon: Boxes,
  },
  {
    label: "MODEL DEPLOYMENT",
    value: "reasoning-runtime-v4",
    icon: BrainCircuit,
  },
];


const passportContents = [
  {
    number: "01",
    title: "AI Actor identity",
    description:
      "Maintain one persistent identity for the AI Actor across connected systems and changing technical representations.",
    icon: Fingerprint,
  },
  {
    number: "02",
    title: "Purpose and ownership",
    description:
      "Keep the AI Actor connected to why it exists and the people or functions accountable for it.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Operating relationships",
    description:
      "Maintain the relevant applications, services, tools and enterprise relationships associated with the AI Actor.",
    icon: Network,
  },
];


export function Page03ActorPassports() {
  const [activeField, setActiveField] =
    useState<PassportFieldKey>("purpose");


  useEffect(() => {
    const order: PassportFieldKey[] = [
      "purpose",
      "owner",
      "relationships",
    ];

    const timer = window.setInterval(() => {
      setActiveField((current) => {
        const currentIndex = order.indexOf(current);

        return order[
          (currentIndex + 1) % order.length
        ];
      });
    }, 1900);

    return () => window.clearInterval(timer);
  }, []);


  return (
    <main className={styles.page}>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className={styles.hero}>
        <div
          className={styles.heroGrid}
          aria-hidden="true"
        />

        <div
          className={styles.heroGlow}
          aria-hidden="true"
        />

        <div className={styles.shell}>
          <div className={styles.heroLayout}>

            <div className={styles.heroCopy}>
              <p className={styles.blueEyebrow}>
                AI ACTOR PASSPORTS
              </p>

              <h1 className={styles.heroTitle}>
                Know the AI Actor behind the activity.
              </h1>

              <p className={styles.heroLead}>
                AIGO-OS establishes a persistent identity and
                connected context for each identified AI Actor.
              </p>

              <p className={styles.heroSupporting}>
                Different systems may represent the same AI Actor
                through different identities, applications,
                runtimes or workloads. AIGO-OS connects those
                representations to one AI Actor Passport.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/contact?intent=demo"
                  className={styles.primaryButton}
                >
                  Request a Demo

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </Link>

                <a
                  href="#actor-example"
                  className={styles.secondaryButton}
                >
                  See one example

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>


            <div className={styles.passportStage}>
              <div className={styles.passportCard}>

                <div className={styles.passportTop}>
                  <div className={styles.passportSeal}>
                    <Fingerprint
                      size={27}
                      aria-hidden="true"
                    />
                  </div>

                  <div className={styles.passportName}>
                    <span>
                      AI ACTOR PASSPORT
                    </span>

                    <strong>
                      Production Operations AI Agent
                    </strong>

                    <small>
                      AI Actor ID: ai-actor-prod-ops-017
                    </small>
                  </div>
                </div>


                <div className={styles.passportFields}>
                  {passportFields.map((field) => {
                    const Icon = field.icon;
                    const active =
                      activeField === field.key;

                    return (
                      <button
                        key={field.key}
                        type="button"
                        onClick={() =>
                          setActiveField(field.key)
                        }
                        className={[
                          styles.passportField,
                          styles[
                            `passportField_${field.tone}`
                          ],
                          active
                            ? styles.passportFieldActive
                            : "",
                        ].join(" ")}
                      >
                        <span className={styles.fieldIcon}>
                          <Icon
                            size={17}
                            aria-hidden="true"
                          />
                        </span>

                        <span className={styles.fieldCopy}>
                          <small>
                            {field.label}
                          </small>

                          <strong>
                            {field.value}
                          </strong>
                        </span>
                      </button>
                    );
                  })}
                </div>


                <div className={styles.passportMeaning}>
                  <span>
                    OUTPUT
                  </span>

                  <p>
                    A persistent AI Actor Passport that keeps
                    identity, purpose, ownership and operating
                    relationships connected over time.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          HOW AIGO-OS IDENTIFIES THE AI ACTOR
      ====================================================== */}

      <section className={styles.coreSection}>
        <div className={styles.shell}>

          <div className={styles.coreIntro}>
            <p className={styles.goldEyebrow}>
              FROM TECHNICAL REPRESENTATIONS TO AN AI ACTOR
            </p>

            <h2>
              Determine which AI Actor is behind the activity.
            </h2>

            <p>
              AIGO-OS uses identifiers and relationships from
              connected systems to determine which technical
              representations belong to the same AI Actor.
            </p>
          </div>


          <div className={styles.conceptFlow}>

            <article className={styles.conceptCard}>
              <div className={styles.conceptTop}>
                <span className={styles.conceptNumber}>
                  01
                </span>

                <div className={styles.conceptIcon}>
                  <ServerCog
                    size={23}
                    aria-hidden="true"
                  />
                </div>
              </div>

              <span className={styles.conceptLabel}>
                OBSERVE
              </span>

              <h3>
                Read the available technical context
              </h3>

              <p>
                Connected systems provide AI identifiers,
                service identities, applications, runtimes
                and relationship information associated with
                the activity.
              </p>
            </article>


            <div
              className={styles.conceptConnector}
              aria-hidden="true"
            >
              <span>
                AIGO-OS RELATES
              </span>

              <div className={styles.connectorLine}>
                <i />
                <ArrowRight size={20} />
              </div>
            </div>


            <article
              className={`${styles.conceptCard} ${styles.conceptCardActor}`}
            >
              <div className={styles.conceptTop}>
                <span className={styles.conceptNumber}>
                  02
                </span>

                <div className={styles.conceptIcon}>
                  <Network
                    size={23}
                    aria-hidden="true"
                  />
                </div>
              </div>

              <span className={styles.conceptLabel}>
                RESOLVE
              </span>

              <h3>
                Connect what belongs together
              </h3>

              <p>
                AIGO-OS uses the available identifiers and
                relationships to determine which technical
                representations refer to the same AI Actor.
              </p>
            </article>


            <div
              className={styles.conceptConnector}
              aria-hidden="true"
            >
              <span>
                AIGO-OS IDENTIFIES
              </span>

              <div className={styles.connectorLine}>
                <i />
                <ArrowRight size={20} />
              </div>
            </div>


            <article
              className={`${styles.conceptCard} ${styles.conceptCardPassport}`}
            >
              <div className={styles.conceptTop}>
                <span className={styles.conceptNumber}>
                  03
                </span>

                <div className={styles.conceptIcon}>
                  <Fingerprint
                    size={23}
                    aria-hidden="true"
                  />
                </div>
              </div>

              <span className={styles.conceptLabel}>
                ESTABLISH
              </span>

              <h3>
                Establish the AI Actor identity
              </h3>

              <p>
                Once the relationship can be established,
                AIGO-OS creates the persistent AI Actor identity
                used across the platform.
              </p>
            </article>

          </div>


          <div className={styles.coreBoundary}>
            <strong>
              If there is not enough information to identify the
              AI Actor reliably, AIGO-OS keeps the relationship
              unresolved.
            </strong>
          </div>


          {/* WHAT THE PASSPORT MAINTAINS */}

          <div className={styles.capabilityIntro}>
            <p className={styles.blueEyebrowLight}>
              WHAT THE AI ACTOR PASSPORT MAINTAINS
            </p>

            <h2>
              Keep the AI Actor and its relevant enterprise context connected.
            </h2>

            <p>
              The AI Actor Passport provides the persistent
              context that later AIGO-OS capabilities can use.
            </p>
          </div>


          <div className={styles.definitionGrid}>
            {passportContents.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className={styles.definitionCard}
                  key={item.number}
                >
                  <div className={styles.definitionIcon}>
                    <Icon
                      size={22}
                      aria-hidden="true"
                    />
                  </div>

                  <span>
                    {item.number}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

        </div>
      </section>


      {/* =====================================================
          ONE CLEAR EXAMPLE
      ====================================================== */}

      <section
        className={styles.exampleSection}
        id="actor-example"
      >
        <div className={styles.shell}>

          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.blueLightEyebrow}>
                ONE CLEAR EXAMPLE
              </p>

              <h2>
                Several technical representations. One AI Actor.
              </h2>
            </div>

            <p>
              Connected systems may describe different parts of
              the same AI Actor. AIGO-OS connects the available
              context and maintains the result in one AI Actor
              Passport.
            </p>
          </div>


          <div className={styles.exampleGrid}>

            <div className={styles.representationsPanel}>
              <div className={styles.panelHeading}>
                <span>
                  TECHNICAL REPRESENTATIONS
                </span>

                <strong>
                  What connected systems may provide
                </strong>
              </div>


              <div className={styles.representationGrid}>
                {representations.map((representation) => {
                  const Icon = representation.icon;

                  return (
                    <article
                      className={styles.representationCard}
                      key={representation.label}
                    >
                      <div className={styles.representationIcon}>
                        <Icon
                          size={20}
                          aria-hidden="true"
                        />
                      </div>

                      <span>
                        {representation.label}
                      </span>

                      <strong>
                        {representation.value}
                      </strong>
                    </article>
                  );
                })}
              </div>
            </div>


            <div className={styles.associateBridge}>
              <span>
                AIGO-OS RESOLVES
              </span>

              <i />

              <Fingerprint
                size={26}
                aria-hidden="true"
              />

              <strong>
                ONE AI ACTOR
              </strong>

              <i />
            </div>


            <div className={styles.actorPanel}>
              <div className={styles.actorPanelTop}>
                <div>
                  <span className={styles.actorPanelLabel}>
                    IDENTIFIED AI ACTOR
                  </span>

                  <h3>
                    Production Operations AI Agent
                  </h3>

                  <p className={styles.actorId}>
                    AI Actor ID: ai-actor-prod-ops-017
                  </p>
                </div>

                <div className={styles.actorPanelIcon}>
                  <Fingerprint
                    size={28}
                    aria-hidden="true"
                  />
                </div>
              </div>


              <p className={styles.actorPanelDescription}>
                The available connected context establishes that
                these technical representations relate to the
                same AI Actor.
              </p>


              <div className={styles.actorContextGrid}>
                <article>
                  <span>
                    DECLARED PURPOSE
                  </span>

                  <strong>
                    Production operations support
                  </strong>
                </article>

                <article>
                  <span>
                    ACCOUNTABLE OWNER
                  </span>

                  <strong>
                    Platform Operations
                  </strong>
                </article>

                <article>
                  <span>
                    OPERATING RELATIONSHIPS
                  </span>

                  <strong>
                    Observability, ITSM and cloud
                  </strong>
                </article>
              </div>


              <div className={styles.persistenceNote}>
                <span>
                  OUTPUT
                </span>

                <strong>
                  AI Actor Passport
                </strong>

                <p>
                  A persistent record that keeps the AI Actor
                  identity and relevant context connected as its
                  technical environment changes.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          HANDOFF TO MACHINE AUTHORITY
      ====================================================== */}

      <section className={styles.connectedSection}>
        <div className={styles.shell}>

          <div className={styles.boundaryPanel}>
            <div className={styles.boundaryCopy}>
              <p className={styles.blueEyebrowLight}>
                IDENTITY IS NOT AUTHORITY
              </p>

              <h2>
                Identifying the AI Actor does not define its authority.
              </h2>

              <p>
                AI Actor Passports establish which AI Actor is
                acting. Machine Authority establishes what autonomy
                the organisation has delegated to that AI Actor.
              </p>
            </div>


            <div className={styles.boundaryCompare}>

              <article className={styles.boundaryCell}>
                <span>
                  AI ACTOR PASSPORT
                </span>

                <strong>
                  Which AI Actor is acting?
                </strong>
              </article>


              <div
                className={styles.boundaryArrow}
                aria-hidden="true"
              >
                <ArrowRight size={22} />
              </div>


              <article className={styles.boundaryCell}>
                <span>
                  MACHINE AUTHORITY
                </span>

                <strong>
                  What authority has this AI Actor been given?
                </strong>
              </article>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className={styles.finalSection}>
        <div className={styles.shell}>

          <div className={styles.finalGrid}>
            <div>
              <p className={styles.goldEyebrow}>
                AI ACTOR PASSPORTS
              </p>

              <h2>
                Start with a known AI Actor.
              </h2>
            </div>


            <div>
              <p>
                Establish the AI Actor identity first. Then
                determine the authority available to that
                AI Actor through Machine Authority.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/platform/machine-authority"
                  className={styles.primaryButton}
                >
                  Explore Machine Authority

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/contact?intent=demo"
                  className={styles.secondaryButton}
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

