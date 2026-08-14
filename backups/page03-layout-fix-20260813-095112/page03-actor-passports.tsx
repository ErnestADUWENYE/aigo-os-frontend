"use client";

import Link from "next/link";
import { useState } from "react";

import styles from "@/styles/page03-actor-passports.module.css";

type PassportDimension =
  | "identity"
  | "purpose"
  | "ownership"
  | "relationships"
  | "authority"
  | "governance";

type RelationshipKey =
  | "owner"
  | "process"
  | "tool"
  | "authority"
  | "policy";

type ActorKey = "assistant" | "credit";

const passportDimensions: Record<
  PassportDimension,
  {
    label: string;
    title: string;
    description: string;
    fields: string[];
  }
> = {
  identity: {
    label: "Identity",
    title: "Persistent actor identity",
    description:
      "Connect the representations of the same AI actor across enterprise systems.",
    fields: [
      "ACT-0007",
      "Procurement Agent 07",
      "AI Actor",
      "Production",
    ],
  },

  purpose: {
    label: "Purpose",
    title: "Declared business purpose",
    description:
      "Record why the actor exists and the enterprise use it is expected to support.",
    fields: [
      "Supplier onboarding",
      "Procurement support",
      "Approved use",
      "Defined scope",
    ],
  },

  ownership: {
    label: "Ownership",
    title: "Accountable ownership",
    description:
      "Keep the actor connected to accountable business and technical ownership.",
    fields: [
      "Procurement",
      "Enterprise Automation",
      "Procurement Technology",
    ],
  },

  relationships: {
    label: "Relationships",
    title: "Connected enterprise context",
    description:
      "Understand which systems, processes, tools and resources are related to the actor.",
    fields: [
      "Procurement Platform",
      "Supplier Management",
      "Initiate Payment",
      "Supplier Records",
    ],
  },

  authority: {
    label: "Authority",
    title: "Machine Authority reference",
    description:
      "Connect the actor to the autonomy, conditions and limits delegated by the enterprise.",
    fields: [
      "MA-2041",
      "Active delegation",
      "Operating limit defined",
      "Human approval linked",
    ],
  },

  governance: {
    label: "Governance",
    title: "Current governance context",
    description:
      "Associate relevant policy, risk, governance state and evidence with the actor.",
    fields: [
      "Policy linked",
      "Risk context",
      "Governed state",
      "Evidence available",
    ],
  },
};

const relationships: Record<
  RelationshipKey,
  {
    label: string;
    value: string;
    explanation: string;
  }
> = {
  owner: {
    label: "Business Owner",
    value: "Director of Procurement",
    explanation:
      "Connects the actor to accountable business ownership.",
  },

  process: {
    label: "Business Process",
    value: "Supplier Management",
    explanation:
      "Places the actor inside the business process affected by its activity.",
  },

  tool: {
    label: "Tool",
    value: "Initiate Payment",
    explanation:
      "Identifies the capability that may require authority and additional governance.",
  },

  authority: {
    label: "Machine Authority",
    value: "MA-2041",
    explanation:
      "Links the actor to the autonomy and limits delegated by the enterprise.",
  },

  policy: {
    label: "Policy",
    value: "Third Party Payment Control",
    explanation:
      "Associates relevant governance requirements with the actor and its activity.",
  },
};

const actors: Record<
  ActorKey,
  {
    name: string;
    purpose: string;
    authority: string;
    function: string;
    significance: string;
  }
> = {
  assistant: {
    name: "Customer Service Assistant",
    purpose: "Customer support",
    authority: "Limited",
    function: "Customer Operations",
    significance: "Higher governance attention",
  },

  credit: {
    name: "Credit Decision Agent",
    purpose: "Credit decisioning",
    authority: "Extended",
    function: "Finance",
    significance: "Different significance assessment",
  },
};

const contextDimensions = [
  {
    number: "01",
    title: "Identity",
    items: [
      "Actor ID",
      "Actor type",
      "Environment",
      "External identifiers",
    ],
  },
  {
    number: "02",
    title: "Purpose",
    items: [
      "Declared purpose",
      "Business function",
      "Approved use",
      "Operational scope",
    ],
  },
  {
    number: "03",
    title: "Ownership",
    items: [
      "Business owner",
      "Technical owner",
      "Responsible team",
    ],
  },
  {
    number: "04",
    title: "Relationships",
    items: [
      "Applications",
      "Tools",
      "APIs",
      "Processes",
      "Data",
    ],
  },
  {
    number: "05",
    title: "Authority",
    items: [
      "Authority profile",
      "Delegation status",
      "Approval conditions",
    ],
  },
  {
    number: "06",
    title: "Governance",
    items: [
      "Policies",
      "Risk",
      "Governance state",
      "Evidence",
    ],
  },
];

const governanceStages = [
  "Actor Passport",
  "Machine Authority",
  "Business Significance",
  "Governance Decisioning",
  "Human Authority",
  "Governance Receipts",
];

export function Page03ActorPassports() {
  const [dimension, setDimension] =
    useState<PassportDimension>("identity");

  const [relationship, setRelationship] =
    useState<RelationshipKey>("authority");

  const [actor, setActor] =
    useState<ActorKey>("assistant");

  const activeDimension = passportDimensions[dimension];
  const activeRelationship = relationships[relationship];
  const activeActor = actors[actor];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />

        <div className={styles.shell}>
          <div className={styles.heroLayout}>
            <div className={styles.heroCopy}>
              <p className={styles.blueEyebrow}>
                ACTOR PASSPORTS
              </p>

              <h1 className={styles.heroTitle}>
                <span>Know the AI actor</span>
                <span>before you govern its activity.</span>
              </h1>

              <p className={styles.heroLead}>
                AIGO-OS creates a persistent governance identity
                for AI actors across the enterprise.
              </p>

              <p className={styles.heroSupporting}>
                Actor Passports bring together identity, purpose,
                ownership, relationships, authority and governance
                context so AIGO-OS can understand who or what is acting.
              </p>

              <div className={styles.heroActions}>
                <Link href="/demo" className={styles.primaryButton}>
                  Request a Demo
                </Link>

                <Link
                  href="/product/authority"
                  className={styles.secondaryButton}
                >
                  Explore Machine Authority
                </Link>
              </div>
            </div>


            <div
              className={styles.passportStage}
              aria-label="Open digital Actor Passport for Procurement Agent 07"
            >
              <div className={styles.stageHeading}>
                <span>LIVE PASSPORT ASSEMBLY</span>
                <strong>Enterprise context becomes governance identity</strong>
              </div>


              <div className={`${styles.contextChip} ${styles.chipIdentity}`}>
                <span>IDENTITY</span>
                <strong>procurement-agent-07</strong>
              </div>

              <div className={`${styles.contextChip} ${styles.chipPurpose}`}>
                <span>PURPOSE</span>
                <strong>Supplier onboarding</strong>
              </div>

              <div className={`${styles.contextChip} ${styles.chipOwner}`}>
                <span>BUSINESS OWNER</span>
                <strong>Procurement</strong>
              </div>

              <div className={`${styles.contextChip} ${styles.chipProcess}`}>
                <span>BUSINESS PROCESS</span>
                <strong>Supplier Management</strong>
              </div>

              <div className={`${styles.contextChip} ${styles.chipAuthority}`}>
                <span>MACHINE AUTHORITY</span>
                <strong>MA-2041</strong>
              </div>

              <div className={`${styles.contextChip} ${styles.chipPolicy}`}>
                <span>POLICY</span>
                <strong>Third Party Payment Control</strong>
              </div>


              <div className={styles.openPassport}>
                <div className={styles.passportShadow} aria-hidden="true" />

                <div className={styles.passportLeft}>
                  <div className={styles.pageEdgeLeft} />

                  <div className={styles.passportBrand}>
                    <span>ACTOR PASSPORT</span>
                    <strong>AIGO-OS</strong>
                  </div>

                  <div className={styles.identityBlock}>
                    <div className={styles.identitySeal}>
                      <span />
                    </div>

                    <div>
                      <strong>PROCUREMENT AGENT 07</strong>
                      <span>AI ACTOR</span>
                    </div>
                  </div>

                  <div className={styles.identityFields}>
                    <div className={styles.passportField}>
                      <span>Actor ID</span>
                      <strong>ACT-0007</strong>
                    </div>

                    <div className={styles.passportField}>
                      <span>Environment</span>
                      <strong>Production</strong>
                    </div>

                    <div className={`${styles.passportField} ${styles.fieldIdentity}`}>
                      <span>External identity</span>
                      <strong>procurement-agent-07</strong>
                    </div>

                    <div className={`${styles.passportField} ${styles.fieldOwner}`}>
                      <span>Business owner</span>
                      <strong>Procurement</strong>
                    </div>
                  </div>
                </div>


                <div className={styles.passportSpine}>
                  <span />
                </div>


                <div className={styles.passportRight}>
                  <div className={styles.pageEdgeRight} />

                  <div className={styles.passportRightHeader}>
                    <div>
                      <span>GOVERNANCE CONTEXT</span>
                      <strong>ACTIVE</strong>
                    </div>

                    <div className={styles.statusLight}>
                      <span />
                    </div>
                  </div>

                  <div className={styles.rightFields}>
                    <div className={`${styles.passportField} ${styles.fieldPurpose}`}>
                      <span>Purpose</span>
                      <strong>Supplier onboarding</strong>
                    </div>

                    <div className={`${styles.passportField} ${styles.fieldProcess}`}>
                      <span>Business process</span>
                      <strong>Supplier Management</strong>
                    </div>

                    <div className={`${styles.passportField} ${styles.fieldAuthority}`}>
                      <span>Machine Authority</span>
                      <strong>MA-2041</strong>
                    </div>

                    <div className={`${styles.passportField} ${styles.fieldPolicy}`}>
                      <span>Policy</span>
                      <strong>Third Party Payment Control</strong>
                    </div>
                  </div>

                  <div className={styles.passportComplete}>
                    <span />
                    <strong>Governance identity established</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className={styles.passportExplorer}>
            <div className={styles.explorerHeader}>
              <div>
                <span>INTERACTIVE PASSPORT</span>
                <strong>Select a raised dimension to inspect it</strong>
              </div>

              <span className={styles.explorerHint}>
                Interactive
              </span>
            </div>

            <div className={styles.passportTabs}>
              {(Object.keys(passportDimensions) as PassportDimension[]).map(
                (key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setDimension(key)}
                    className={
                      dimension === key
                        ? styles.passportTabActive
                        : styles.passportTab
                    }
                  >
                    <span />
                    {passportDimensions[key].label}
                  </button>
                ),
              )}
            </div>

            <div className={styles.dimensionResult}>
              <div>
                <span>SELECTED DIMENSION</span>
                <strong>{activeDimension.title}</strong>
                <p>{activeDimension.description}</p>
              </div>

              <div className={styles.dimensionValues}>
                {activeDimension.fields.map((field) => (
                  <span key={field}>{field}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.identitySection}>
        <div className={styles.shell}>
          <div className={styles.editorialGrid}>
            <div>
              <p className={styles.goldEyebrow}>
                AI ACTOR IDENTITY
              </p>

              <h2 className={styles.darkHeadline}>
                <span>The same AI actor can appear differently</span>
                <span>across the enterprise.</span>
              </h2>
            </div>

            <div className={styles.darkCopy}>
              <p>
                Applications, identity systems, AI platforms and
                business systems can each represent the same actor
                using a different identifier.
              </p>

              <p>
                AIGO-OS connects those fragments to one persistent
                governance identity.
              </p>
            </div>
          </div>


          <div className={styles.identityResolver}>
            <div className={styles.identifierStack}>
              <div>
                <span>AI PLATFORM</span>
                <strong>procurement-agent-07</strong>
              </div>

              <div>
                <span>IDENTITY SYSTEM</span>
                <strong>svc-ai-proc-07</strong>
              </div>

              <div>
                <span>ERP</span>
                <strong>automation-user-491</strong>
              </div>

              <div>
                <span>API GATEWAY</span>
                <strong>client-aigo-proc-07</strong>
              </div>

              <div>
                <span>GRC</span>
                <strong>AI-USECASE-204</strong>
              </div>
            </div>

            <div className={styles.resolutionMechanism}>
              <div className={styles.resolutionOrb}>
                <span />
              </div>

              <span>RESOLVE</span>
              <strong>One actor</strong>
            </div>

            <div className={styles.resolvedIdentity}>
              <span>ACTOR PASSPORT</span>
              <strong>Procurement Agent 07</strong>
              <small>Persistent governance identity</small>

              <div>
                <span />
                Resolved
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.inventorySection}>
        <div className={styles.shell}>
          <div className={styles.editorialGrid}>
            <div>
              <p className={styles.goldEyebrow}>
                GOVERNANCE IDENTITY
              </p>

              <h2 className={styles.lightHeadline}>
                <span>An inventory tells you that AI exists.</span>
                <span>A passport tells governance what it is.</span>
              </h2>
            </div>

            <div className={styles.lightCopy}>
              <p>
                Discovery matters, but an inventory alone does not
                provide enough context for continuous operational governance.
              </p>
            </div>
          </div>


          <div className={styles.inventoryComparison}>
            <article className={styles.inventoryCard}>
              <span>INVENTORY RECORD</span>

              <h3>AI system record</h3>

              <div>
                <span>Name</span>
                <span>Type</span>
                <span>Vendor</span>
                <span>Status</span>
                <span>Location</span>
              </div>
            </article>

            <div className={styles.comparisonBridge}>
              <span />
              <strong>Context required</strong>
            </div>

            <article className={styles.passportCard}>
              <span>ACTOR PASSPORT</span>

              <h3>Persistent governance identity</h3>

              <div>
                <span>Identity</span>
                <span>Purpose</span>
                <span>Ownership</span>
                <span>Relationships</span>
                <span>Authority</span>
                <span>Governance</span>
                <span>Evidence</span>
              </div>
            </article>
          </div>

          <p className={styles.sectionStatement}>
            Discovery establishes that an AI actor exists.
            The Actor Passport establishes who or what governance is dealing with.
          </p>
        </div>
      </section>


      <section className={styles.contextSection}>
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <p className={styles.blueEyebrow}>
              PASSPORT CONTEXT
            </p>

            <h2>
              <span>One governance identity.</span>
              <span>Built from connected enterprise context.</span>
            </h2>

            <p>
              Different systems contribute different parts of the
              passport. AIGO-OS brings the relevant context together
              around the persistent actor identity.
            </p>
          </div>


          <div className={styles.contextGrid}>
            {contextDimensions.map((item) => (
              <article
                key={item.number}
                className={styles.contextCard}
              >
                <div className={styles.contextCardHeader}>
                  <span>{item.number}</span>

                  <div>
                    <span />
                  </div>
                </div>

                <h3>{item.title}</h3>

                <div className={styles.contextTokens}>
                  {item.items.map((value) => (
                    <span key={value}>{value}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>


          <div className={styles.integrationRail}>
            <div>
              <span>AI PLATFORMS</span>
              <strong>Identifiers and capabilities</strong>
            </div>

            <div>
              <span>IDENTITY AND ACCESS</span>
              <strong>Accounts and relationships</strong>
            </div>

            <div>
              <span>IT AND ASSET SYSTEMS</span>
              <strong>Applications and ownership</strong>
            </div>

            <div>
              <span>GRC AND POLICY</span>
              <strong>Risk, policy and controls</strong>
            </div>

            <div>
              <span>BUSINESS SYSTEMS</span>
              <strong>Processes and business entities</strong>
            </div>
          </div>

          <div className={styles.sectionAction}>
            <Link
              href="/integrations"
              className={styles.secondaryButton}
            >
              Explore Integrations
            </Link>
          </div>
        </div>
      </section>


      <section className={styles.relationshipSection}>
        <div className={styles.shell}>
          <div className={styles.editorialGrid}>
            <div>
              <p className={styles.goldEyebrow}>
                RELATIONSHIPS AND AUTHORITY
              </p>

              <h2 className={styles.darkHeadline}>
                <span>Knowing the actor is the foundation.</span>
                <span>Knowing its authority comes next.</span>
              </h2>
            </div>

            <div className={styles.darkCopy}>
              <p>
                The significance of AI activity depends partly on
                what the actor is connected to and what autonomy has
                actually been delegated to it.
              </p>
            </div>
          </div>


          <div className={styles.relationshipWorkspace}>
            <div className={styles.relationshipControls}>
              {(Object.keys(relationships) as RelationshipKey[]).map(
                (key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setRelationship(key)}
                    className={
                      relationship === key
                        ? styles.relationshipControlActive
                        : styles.relationshipControl
                    }
                  >
                    <span>{relationships[key].label}</span>
                    <strong>{relationships[key].value}</strong>
                  </button>
                ),
              )}
            </div>

            <div className={styles.relationshipActor}>
              <div className={styles.relationshipOrb}>
                <span />
              </div>

              <span>ACTOR PASSPORT</span>
              <strong>Procurement Agent 07</strong>
            </div>

            <div className={styles.relationshipExplanation}>
              <span>SELECTED RELATIONSHIP</span>
              <strong>{activeRelationship.label}</strong>
              <p>{activeRelationship.explanation}</p>
            </div>
          </div>


          <div className={styles.authorityBridge}>
            <article>
              <span>ACTOR PASSPORT</span>
              <strong>Who or what is acting?</strong>
            </article>

            <div>
              <span />
            </div>

            <article>
              <span>MACHINE AUTHORITY</span>
              <strong>What has it been authorized to do?</strong>
            </article>
          </div>

          <div className={styles.sectionAction}>
            <Link
              href="/product/authority"
              className={styles.primaryButton}
            >
              Explore Machine Authority
            </Link>
          </div>
        </div>
      </section>


      <section className={styles.actionSection}>
        <div className={styles.shell}>
          <div className={styles.editorialGrid}>
            <div>
              <p className={styles.goldEyebrow}>
                PASSPORT IN ACTION
              </p>

              <h2 className={styles.lightHeadline}>
                <span>Resolve the actor before interpreting</span>
                <span>the activity.</span>
              </h2>
            </div>

            <div className={styles.lightCopy}>
              <p>
                An incoming event may only provide an actor reference.
                The Actor Passport gives that reference governance meaning.
              </p>
            </div>
          </div>


          <div className={styles.activityFlow}>
            <article className={styles.activityCard}>
              <span>INCOMING ACTIVITY</span>

              <h3>Create supplier payment</h3>

              <dl>
                <div>
                  <dt>Actor reference</dt>
                  <dd>svc-ai-proc-07</dd>
                </div>

                <div>
                  <dt>Amount</dt>
                  <dd>GBP 87,500</dd>
                </div>

                <div>
                  <dt>Supplier</dt>
                  <dd>Northstar Components</dd>
                </div>
              </dl>
            </article>

            <div className={styles.activityResolver}>
              <div>
                <span />
              </div>

              <strong>Resolve actor</strong>
            </div>

            <article className={styles.activityPassport}>
              <span>ACTOR PASSPORT</span>

              <h3>Procurement Agent 07</h3>

              <dl>
                <div>
                  <dt>Purpose</dt>
                  <dd>Procurement automation</dd>
                </div>

                <div>
                  <dt>Owner</dt>
                  <dd>Procurement</dd>
                </div>

                <div>
                  <dt>Machine Authority</dt>
                  <dd>MA-2041</dd>
                </div>

                <div>
                  <dt>Business process</dt>
                  <dd>Supplier Management</dd>
                </div>
              </dl>
            </article>
          </div>


          <div className={styles.identityEvolution}>
            <div>
              <span>PERSISTENT IDENTITY</span>
              <strong>Procurement Agent 07</strong>
            </div>

            <div>
              <span>Created</span>
              <span>Authority delegated</span>
              <span>Relationship changed</span>
              <span>Authority revised</span>
              <span>Governance history grows</span>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.significanceSection}>
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <p className={styles.blueEyebrow}>
              FROM IDENTITY TO SIGNIFICANCE
            </p>

            <h2>
              <span>Business Significance starts with knowing</span>
              <span>who or what is acting.</span>
            </h2>

            <p>
              The same action can carry different meaning when the
              actor, purpose, business function and delegated authority change.
            </p>
          </div>


          <div className={styles.actorComparison}>
            <div className={styles.actorControls}>
              <button
                type="button"
                onClick={() => setActor("assistant")}
                className={
                  actor === "assistant"
                    ? styles.actorControlActive
                    : styles.actorControl
                }
              >
                Customer Service Assistant
              </button>

              <button
                type="button"
                onClick={() => setActor("credit")}
                className={
                  actor === "credit"
                    ? styles.actorControlActive
                    : styles.actorControl
                }
              >
                Credit Decision Agent
              </button>
            </div>

            <div className={styles.sameActionCard}>
              <span>SAME ACTION</span>
              <strong>Approve customer credit adjustment</strong>
            </div>

            <div className={styles.actorContextCard}>
              <span>ACTOR CONTEXT</span>
              <strong>{activeActor.name}</strong>

              <dl>
                <div>
                  <dt>Purpose</dt>
                  <dd>{activeActor.purpose}</dd>
                </div>

                <div>
                  <dt>Authority</dt>
                  <dd>{activeActor.authority}</dd>
                </div>

                <div>
                  <dt>Business function</dt>
                  <dd>{activeActor.function}</dd>
                </div>
              </dl>
            </div>

            <div className={styles.significanceCard}>
              <span>BUSINESS SIGNIFICANCE</span>
              <strong>{activeActor.significance}</strong>
              <p>The action is identical. The actor context is not.</p>
            </div>
          </div>


          <div className={styles.traceabilityStrip}>
            <div>
              <span>ACTOR PASSPORT</span>
              <strong>Governance history follows the actor</strong>
            </div>

            <div>
              <span>Authority revision</span>
              <span>Governance decision</span>
              <span>Human intervention</span>
              <span>Governance Receipt</span>
            </div>
          </div>


          <div className={styles.governanceModel}>
            {governanceStages.map((stage, index) => (
              <div
                key={stage}
                className={
                  index === 0
                    ? styles.governanceStageActive
                    : styles.governanceStage
                }
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{stage}</strong>
              </div>
            ))}
          </div>

          <div className={styles.sectionAction}>
            <Link
              href="/product/business-significance"
              className={styles.primaryButton}
            >
              Explore Business Significance
            </Link>
          </div>
        </div>
      </section>


      <section className={styles.finalCta}>
        <div className={styles.finalGlow} aria-hidden="true" />

        <div className={styles.finalInner}>
          <p className={styles.blueEyebrow}>
            ACTOR PASSPORTS
          </p>

          <h2>
            Give every AI actor a persistent governance identity.
          </h2>

          <p>
            Connect AI actors to purpose, ownership, relationships,
            authority and governance context before determining what
            their activity means to the business.
          </p>

          <div className={styles.heroActions}>
            <Link href="/demo" className={styles.primaryButton}>
              Request a Demo
            </Link>

            <Link
              href="/product/authority"
              className={styles.secondaryButton}
            >
              Explore Machine Authority
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
