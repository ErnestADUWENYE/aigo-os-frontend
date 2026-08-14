"use client";

import Link from "next/link";
import { useState } from "react";

import styles from "@/styles/page03-actor-passports.module.css";

type PassportTab =
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

const passportDetails: Record<
  PassportTab,
  {
    label: string;
    title: string;
    fields: string[];
  }
> = {
  identity: {
    label: "Identity",
    title: "Persistent actor identity",
    fields: [
      "Actor ID: ACT-0007",
      "Type: AI Actor",
      "Environment: Production",
      "Platform: Enterprise Agent Runtime",
    ],
  },

  purpose: {
    label: "Purpose",
    title: "Why the actor exists",
    fields: [
      "Supplier onboarding",
      "Procurement support",
      "Approved enterprise use",
      "Operational scope defined",
    ],
  },

  ownership: {
    label: "Ownership",
    title: "Who is accountable",
    fields: [
      "Business owner: Procurement",
      "Technical owner: Enterprise Automation",
      "Responsible team: Procurement Technology",
    ],
  },

  relationships: {
    label: "Relationships",
    title: "What the actor is connected to",
    fields: [
      "Procurement Platform",
      "Supplier Management",
      "Initiate Payment tool",
      "Supplier Records",
    ],
  },

  authority: {
    label: "Authority",
    title: "Delegated autonomy reference",
    fields: [
      "Machine Authority: MA-2041",
      "Status: Active",
      "Operating limits defined",
      "Human approval conditions linked",
    ],
  },

  governance: {
    label: "Governance",
    title: "Current governance context",
    fields: [
      "Policy relationships linked",
      "Risk context associated",
      "Governance state: Governed",
      "Evidence history available",
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
      "Shows the capability that may require authority and additional governance.",
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
    businessFunction: string;
    assessment: string;
  }
> = {
  assistant: {
    name: "Customer Service Assistant",
    purpose: "Customer support",
    authority: "Limited",
    businessFunction: "Customer Operations",
    assessment: "Higher governance attention",
  },

  credit: {
    name: "Credit Decision Agent",
    purpose: "Credit decisioning",
    authority: "Extended",
    businessFunction: "Finance",
    assessment: "Different significance assessment",
  },
};

const passportDimensions = [
  {
    title: "Identity",
    items: [
      "Actor ID",
      "Actor type",
      "Environment",
      "External identifiers",
    ],
  },

  {
    title: "Purpose",
    items: [
      "Declared purpose",
      "Business function",
      "Approved use",
      "Operational scope",
    ],
  },

  {
    title: "Ownership",
    items: [
      "Business owner",
      "Technical owner",
      "Responsible team",
    ],
  },

  {
    title: "Relationships",
    items: [
      "Applications",
      "Tools",
      "APIs",
      "Data",
      "Business processes",
    ],
  },

  {
    title: "Authority",
    items: [
      "Authority profile",
      "Delegation status",
      "Approval dependencies",
    ],
  },

  {
    title: "Governance",
    items: [
      "Policies",
      "Risk relationships",
      "Governance state",
      "Evidence history",
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
  const [passportTab, setPassportTab] =
    useState<PassportTab>("identity");

  const [relationship, setRelationship] =
    useState<RelationshipKey>("authority");

  const [actor, setActor] =
    useState<ActorKey>("assistant");

  const activePassport = passportDetails[passportTab];
  const activeRelationship = relationships[relationship];
  const activeActor = actors[actor];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} aria-hidden="true" />

        <div className={styles.shell}>
          <div className={styles.heroLayout}>
            <div className={styles.heroCopy}>
              <p className={styles.blueEyebrow}>
                ACTOR PASSPORTS
              </p>

              <h1>
                <span>Know the AI actor</span>
                <span>before you govern its activity.</span>
              </h1>

              <p className={styles.heroLead}>
                AIGO-OS creates a persistent governance identity
                for AI actors across the enterprise.
              </p>

              <p className={styles.heroSupporting}>
                Actor Passports bring together identity, purpose,
                ownership, relationships, capabilities, authority
                references and governance context so AIGO-OS can
                understand who or what is acting.
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
              className={styles.assemblyScene}
              aria-label="Digital Actor Passport assembly for Procurement Agent 07"
            >
              <div className={styles.sceneLabel}>
                <span>GOVERNANCE IDENTITY ASSEMBLY</span>
                <strong>Procurement Agent 07</strong>
              </div>

              <div className={`${styles.flyingObject} ${styles.flyIdentity}`}>
                <span>AI PLATFORM</span>
                <strong>procurement-agent-07</strong>
              </div>

              <div className={`${styles.flyingObject} ${styles.flyPurpose}`}>
                <span>PURPOSE</span>
                <strong>Supplier onboarding</strong>
              </div>

              <div className={`${styles.flyingObject} ${styles.flyOwner}`}>
                <span>BUSINESS OWNER</span>
                <strong>Procurement</strong>
              </div>

              <div className={`${styles.flyingObject} ${styles.flyProcess}`}>
                <span>BUSINESS PROCESS</span>
                <strong>Supplier Management</strong>
              </div>

              <div className={`${styles.flyingObject} ${styles.flyAuthority}`}>
                <span>MACHINE AUTHORITY</span>
                <strong>MA-2041</strong>
              </div>

              <div className={`${styles.flyingObject} ${styles.flyPolicy}`}>
                <span>POLICY</span>
                <strong>Third Party Payment Control</strong>
              </div>

              <div className={styles.digitalPassport}>
                <div className={styles.passportInnerBorder} />

                <div className={styles.passportHeader}>
                  <div>
                    <span>ACTOR PASSPORT</span>
                    <strong>AIGO-OS</strong>
                  </div>

                  <span className={styles.activeStatus}>
                    ACTIVE
                  </span>
                </div>

                <div className={styles.actorIdentity}>
                  <div className={styles.actorSeal}>
                    <span />
                  </div>

                  <div>
                    <strong>PROCUREMENT AGENT 07</strong>
                    <span>AI ACTOR</span>
                  </div>
                </div>

                <div className={styles.passportFields}>
                  <div>
                    <span>Actor ID</span>
                    <strong>ACT-0007</strong>
                  </div>

                  <div>
                    <span>Environment</span>
                    <strong>Production</strong>
                  </div>

                  <div>
                    <span>Purpose</span>
                    <strong>Supplier onboarding</strong>
                  </div>

                  <div>
                    <span>Owner</span>
                    <strong>Procurement</strong>
                  </div>
                </div>

                <div className={styles.authorityBand}>
                  <span>MACHINE AUTHORITY</span>
                  <strong>MA-2041</strong>
                  <small>Delegation active</small>
                </div>

                <div className={styles.passportEstablished}>
                  <span />
                  <strong>Governance identity established</strong>
                </div>
              </div>
            </div>
          </div>


          <div className={styles.passportInspector}>
            <div className={styles.interactionPrompt}>
              <span>EXPLORE THE DIGITAL PASSPORT</span>
              <strong>Select a dimension</strong>
            </div>

            <div className={styles.passportTabs}>
              {(Object.keys(passportDetails) as PassportTab[]).map(
                (key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setPassportTab(key)}
                    className={
                      passportTab === key
                        ? styles.passportTabActive
                        : styles.passportTab
                    }
                  >
                    {passportDetails[key].label}
                  </button>
                ),
              )}
            </div>

            <div className={styles.inspectorResult}>
              <div>
                <span>SELECTED DIMENSION</span>
                <strong>{activePassport.title}</strong>
              </div>

              <div className={styles.inspectorTokens}>
                {activePassport.fields.map((field) => (
                  <span key={field}>{field}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.identitySection}>
        <div className={styles.shell}>
          <div className={styles.splitHeading}>
            <div>
              <p className={styles.goldEyebrow}>
                AI ACTOR IDENTITY
              </p>

              <h2 className={styles.darkHeadline}>
                <span>The same AI actor can appear differently</span>
                <span>across the enterprise.</span>
              </h2>
            </div>

            <div className={styles.darkBody}>
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


          <div className={styles.identityResolution}>
            <div className={styles.identitySources}>
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

            <div className={styles.resolveCore}>
              <div>
                <span />
              </div>

              <small>IDENTITY RESOLUTION</small>
              <strong>One actor</strong>
            </div>

            <div className={styles.resolvedActor}>
              <span>ACTOR PASSPORT</span>
              <strong>Procurement Agent 07</strong>
              <small>Persistent governance identity</small>

              <div>
                Resolved
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.inventorySection}>
        <div className={styles.shell}>
          <div className={styles.splitHeading}>
            <div>
              <p className={styles.goldEyebrow}>
                GOVERNANCE IDENTITY
              </p>

              <h2 className={styles.lightHeadline}>
                <span>An inventory tells you that AI exists.</span>
                <span>A passport tells governance what it is.</span>
              </h2>
            </div>

            <div className={styles.lightBody}>
              <p>
                Discovery matters, but an inventory does not provide
                enough context for continuous operational governance.
              </p>
            </div>
          </div>

          <div className={styles.comparison}>
            <article className={styles.comparisonCard}>
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

            <div className={styles.comparisonConnector}>
              <span />
              <strong>More context required</strong>
            </div>

            <article className={styles.passportComparisonCard}>
              <span>ACTOR PASSPORT</span>
              <h3>Persistent governance identity</h3>

              <div>
                <span>Identity</span>
                <span>Purpose</span>
                <span>Ownership</span>
                <span>Relationships</span>
                <span>Authority</span>
                <span>Governance context</span>
                <span>Evidence history</span>
              </div>
            </article>
          </div>

          <p className={styles.highlight}>
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

          <div className={styles.contextLayout}>
            <div className={styles.dimensionGrid}>
              {passportDimensions.map((dimension, index) => (
                <article
                  className={styles.dimensionCard}
                  key={dimension.title}
                >
                  <div className={styles.dimensionHeader}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className={styles.dimensionOrb}>
                      <span />
                    </div>
                  </div>

                  <h3>{dimension.title}</h3>

                  <div className={styles.dimensionTokens}>
                    {dimension.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.integrationStrip}>
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
          <div className={styles.splitHeading}>
            <div>
              <p className={styles.goldEyebrow}>
                RELATIONSHIPS AND AUTHORITY
              </p>

              <h2 className={styles.darkHeadline}>
                <span>Knowing the actor is the foundation.</span>
                <span>Knowing its authority comes next.</span>
              </h2>
            </div>

            <div className={styles.darkBody}>
              <p>
                The significance of AI activity depends partly on
                what the actor is connected to and what autonomy has
                actually been delegated to it.
              </p>
            </div>
          </div>

          <div className={styles.relationshipWorkspace}>
            <div className={styles.relationshipButtons}>
              {(Object.keys(relationships) as RelationshipKey[]).map(
                (key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setRelationship(key)}
                    className={
                      relationship === key
                        ? styles.relationshipButtonActive
                        : styles.relationshipButton
                    }
                  >
                    <span>{relationships[key].label}</span>
                    <strong>{relationships[key].value}</strong>
                  </button>
                ),
              )}
            </div>

            <div className={styles.actorHub}>
              <div className={styles.actorHubOrb}>
                <span />
              </div>

              <span>ACTOR PASSPORT</span>
              <strong>Procurement Agent 07</strong>
            </div>

            <div className={styles.relationshipDetail}>
              <span>SELECTED RELATIONSHIP</span>
              <strong>{activeRelationship.label}</strong>

              <p>{activeRelationship.explanation}</p>
            </div>
          </div>

          <div className={styles.authorityConnection}>
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
          <div className={styles.splitHeading}>
            <div>
              <p className={styles.goldEyebrow}>
                PASSPORT IN ACTION
              </p>

              <h2 className={styles.lightHeadline}>
                <span>Resolve the actor before interpreting</span>
                <span>the activity.</span>
              </h2>
            </div>

            <div className={styles.lightBody}>
              <p>
                The event may only provide an actor reference.
                The Actor Passport gives that reference governance meaning.
              </p>
            </div>
          </div>

          <div className={styles.actionFlow}>
            <article className={styles.incomingActivity}>
              <span>INCOMING ACTIVITY</span>

              <strong>Create supplier payment</strong>

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

            <div className={styles.resolveStep}>
              <div>
                <span />
              </div>

              <strong>Resolve actor</strong>
            </div>

            <article className={styles.resolvedActivity}>
              <span>ACTOR PASSPORT</span>

              <strong>Procurement Agent 07</strong>

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

          <div className={styles.contextEvolution}>
            <div>
              <span>PERSISTENT IDENTITY</span>
              <strong>Procurement Agent 07</strong>
            </div>

            <div className={styles.evolutionStates}>
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
              The same action can carry different meaning when
              the actor, purpose, business function and delegated
              authority change.
            </p>
          </div>

          <div className={styles.actorComparison}>
            <div className={styles.actorControls}>
              <button
                type="button"
                onClick={() => setActor("assistant")}
                className={
                  actor === "assistant"
                    ? styles.actorButtonActive
                    : styles.actorButton
                }
              >
                Customer Service Assistant
              </button>

              <button
                type="button"
                onClick={() => setActor("credit")}
                className={
                  actor === "credit"
                    ? styles.actorButtonActive
                    : styles.actorButton
                }
              >
                Credit Decision Agent
              </button>
            </div>

            <div className={styles.sameAction}>
              <span>SAME ACTION</span>
              <strong>
                Approve customer credit adjustment
              </strong>
            </div>

            <div className={styles.actorContext}>
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
                  <dd>{activeActor.businessFunction}</dd>
                </div>
              </dl>
            </div>

            <div className={styles.assessmentResult}>
              <span>BUSINESS SIGNIFICANCE</span>
              <strong>{activeActor.assessment}</strong>
              <p>The action is identical. The actor context is not.</p>
            </div>
          </div>

          <div className={styles.traceabilityBar}>
            <div>
              <span>ACTOR PASSPORT</span>
              <strong>Governance history follows the actor</strong>
            </div>

            <div className={styles.traceItems}>
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
                    ? styles.modelStageActive
                    : styles.modelStage
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
        <div className={styles.finalGlow} />

        <div className={styles.finalInner}>
          <p className={styles.blueEyebrow}>
            ACTOR PASSPORTS
          </p>

          <h2>
            Give every AI actor a persistent governance identity.
          </h2>

          <p>
            Connect AI actors to their purpose, ownership,
            relationships, authority and governance context so
            AIGO-OS can understand who or what is acting before
            determining what that activity means to the business.
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
