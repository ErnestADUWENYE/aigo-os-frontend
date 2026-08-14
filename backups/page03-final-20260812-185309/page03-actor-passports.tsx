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
  | "application"
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
      "Operating organization: Enterprise Operations",
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
      "Financial operating limit defined",
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
    why: string;
  }
> = {
  owner: {
    label: "Business Owner",
    value: "Director of Procurement",
    why:
      "Links the actor to accountable business ownership and the organizational authority responsible for its use.",
  },

  process: {
    label: "Business Process",
    value: "Supplier Management",
    why:
      "Places the actor inside the business process affected by its activity.",
  },

  application: {
    label: "Application",
    value: "Procurement Platform",
    why:
      "Shows the enterprise application in which the actor participates and where business consequences may occur.",
  },

  tool: {
    label: "Tool",
    value: "Initiate Payment",
    why:
      "Connects technical capability to an action that may require authority, policy and business context.",
  },

  authority: {
    label: "Machine Authority",
    value: "MA-2041",
    why:
      "Links the actor to the autonomy and limits formally delegated by the enterprise.",
  },

  policy: {
    label: "Policy",
    value: "Third Party Payment Control",
    why:
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
    result: string;
  }
> = {
  assistant: {
    name: "Customer Service Assistant",
    purpose: "Customer support",
    authority: "Limited",
    function: "Customer Operations",
    result: "Higher governance attention",
  },

  credit: {
    name: "Credit Decision Agent",
    purpose: "Credit decisioning",
    authority: "Extended",
    function: "Finance",
    result: "Different significance assessment",
  },
};

const passportDimensions = [
  {
    title: "Identity",
    copy:
      "The persistent identity of the AI actor within AIGO-OS.",
    fields: [
      "Actor ID",
      "Actor name",
      "Actor type",
      "Status",
      "Environment",
      "External identifiers",
    ],
  },

  {
    title: "Purpose",
    copy:
      "Why the actor exists and the business functions it is expected to support.",
    fields: [
      "Declared purpose",
      "Business function",
      "Approved use",
      "Operational scope",
    ],
  },

  {
    title: "Ownership",
    copy:
      "The accountable organizational relationships associated with the actor.",
    fields: [
      "Business owner",
      "Technical owner",
      "Responsible team",
      "Operating organization",
    ],
  },

  {
    title: "Relationships",
    copy:
      "The enterprise entities connected to the actor.",
    fields: [
      "Applications",
      "Models",
      "Tools",
      "APIs",
      "Data resources",
      "Business services",
    ],
  },

  {
    title: "Capabilities",
    copy:
      "The actions and functions associated with the actor.",
    fields: [
      "Available tools",
      "Supported actions",
      "Connected systems",
      "Operational capabilities",
    ],
  },

  {
    title: "Authority Reference",
    copy:
      "The relationship between the actor and its Machine Authority.",
    fields: [
      "Authority profile",
      "Delegation source",
      "Authority status",
      "Approval dependencies",
    ],
  },

  {
    title: "Governance Context",
    copy:
      "Governance information associated with the actor.",
    fields: [
      "Risk relationships",
      "Applicable policies",
      "Controls",
      "Governance state",
      "Exceptions",
    ],
  },

  {
    title: "Evidence History",
    copy:
      "Governance evidence associated with the actor over time.",
    fields: [
      "Governance decisions",
      "Human interventions",
      "Governance Receipts",
      "Authority changes",
    ],
  },
];

const timeline = [
  {
    number: "01",
    title: "Created",
    copy:
      "Purpose established, owner assigned and initial relationships recorded.",
  },

  {
    number: "02",
    title: "Authority delegated",
    copy:
      "Machine Authority linked and permitted operating scope established.",
  },

  {
    number: "03",
    title: "Relationship changed",
    copy:
      "A new business system and additional capability become relevant.",
  },

  {
    number: "04",
    title: "Authority revised",
    copy:
      "An operating limit changes and a human approval condition is introduced.",
  },

  {
    number: "05",
    title: "Governance history grows",
    copy:
      "Decisions, interventions and Governance Receipts accumulate around the same actor.",
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
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />

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
                understand who or what is acting before determining
                the Business Significance of its activity.
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

              <div className={styles.heroTerms}>
                <span>Identity</span>
                <span>Purpose</span>
                <span>Ownership</span>
                <span>Relationships</span>
                <span>Authority</span>
                <span>Governance context</span>
              </div>
            </div>


            <div
              className={styles.assemblyScene}
              aria-label="Digital Actor Passport assembly simulation for Procurement Agent 07"
            >
              <div className={styles.assemblyStageLabel}>
                <span>LIVE GOVERNANCE IDENTITY ASSEMBLY</span>
                <strong>Procurement Agent 07</strong>
              </div>

              <div className={styles.sourceIdentity}>
                <span>AI PLATFORM</span>
                <strong>procurement-agent-07</strong>
              </div>

              <div className={styles.sourcePurpose}>
                <span>PURPOSE</span>
                <strong>Supplier onboarding</strong>
              </div>

              <div className={styles.sourceOwner}>
                <span>BUSINESS OWNER</span>
                <strong>Procurement</strong>
              </div>

              <div className={styles.sourceRelationship}>
                <span>BUSINESS PROCESS</span>
                <strong>Supplier Management</strong>
              </div>

              <div className={styles.sourceAuthority}>
                <span>MACHINE AUTHORITY</span>
                <strong>MA-2041</strong>
              </div>

              <div className={styles.sourcePolicy}>
                <span>POLICY</span>
                <strong>Third Party Payment Control</strong>
              </div>

              <span className={styles.pathOne} aria-hidden="true" />
              <span className={styles.pathTwo} aria-hidden="true" />
              <span className={styles.pathThree} aria-hidden="true" />
              <span className={styles.pathFour} aria-hidden="true" />
              <span className={styles.pathFive} aria-hidden="true" />
              <span className={styles.pathSix} aria-hidden="true" />

              <div className={styles.digitalPassport}>
                <div className={styles.passportEdge} aria-hidden="true" />

                <div className={styles.passportHeader}>
                  <div>
                    <span>ACTOR PASSPORT</span>
                    <strong>AIGO-OS</strong>
                  </div>

                  <span className={styles.passportStatus}>
                    ACTIVE
                  </span>
                </div>

                <div className={styles.passportIdentity}>
                  <div className={styles.passportSeal}>
                    <span />
                  </div>

                  <div>
                    <strong>PROCUREMENT AGENT 07</strong>
                    <span>AI ACTOR</span>
                  </div>
                </div>

                <div className={styles.passportMainData}>
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

                <div className={styles.passportAuthority}>
                  <span>MACHINE AUTHORITY</span>
                  <strong>MA-2041</strong>
                  <small>Delegation active</small>
                </div>

                <div className={styles.passportCompletion}>
                  <span className={styles.completionDot} />
                  <strong>Governance identity established</strong>
                </div>
              </div>

              <div className={styles.assemblySequence}>
                <span>Identity resolved</span>
                <span>Purpose established</span>
                <span>Ownership linked</span>
                <span>Relationships mapped</span>
                <span>Authority linked</span>
                <span>Governance connected</span>
              </div>
            </div>
          </div>


          <div className={styles.passportInspector}>
            <div className={styles.passportTabs}>
              {(Object.keys(passportDetails) as PassportTab[]).map(
                (key) => (
                  <button
                    type="button"
                    key={key}
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

            <div className={styles.passportInspectorContent}>
              <div>
                <span>INSPECT PASSPORT DIMENSION</span>
                <strong>{activePassport.title}</strong>
              </div>

              <div className={styles.inspectorFields}>
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
          <div className={styles.editorialSplit}>
            <div>
              <p className={styles.goldEyebrow}>
                AI ACTOR IDENTITY
              </p>

              <h2 className={styles.lightHeadline}>
                <span>The same AI actor can appear</span>
                <span>differently across the enterprise.</span>
              </h2>
            </div>

            <div className={styles.editorialCopy}>
              <p>
                One system may know an application identity.
                Another may know a service account. An AI platform
                may know an agent ID. A business system may only
                record the account that performed an action.
              </p>

              <p>
                Actor Passports connect those representations to one
                persistent governance identity.
              </p>
            </div>
          </div>

          <div className={styles.identityResolver}>
            <div className={styles.identifierColumn}>
              <div className={styles.identifierObject}>
                <span>AI PLATFORM</span>
                <strong>procurement-agent-07</strong>
              </div>

              <div className={styles.identifierObject}>
                <span>IDENTITY SYSTEM</span>
                <strong>svc-ai-proc-07</strong>
              </div>

              <div className={styles.identifierObject}>
                <span>ERP</span>
                <strong>automation-user-491</strong>
              </div>

              <div className={styles.identifierObject}>
                <span>API GATEWAY</span>
                <strong>client-aigo-proc-07</strong>
              </div>

              <div className={styles.identifierObject}>
                <span>GRC</span>
                <strong>AI-USECASE-204</strong>
              </div>
            </div>

            <div className={styles.resolutionCore}>
              <div className={styles.resolutionRing}>
                <span />
              </div>

              <span>IDENTITY RESOLUTION</span>
              <strong>One actor</strong>
            </div>

            <div className={styles.resolvedPassport}>
              <span>ACTOR PASSPORT</span>

              <strong>Procurement Agent 07</strong>

              <p>
                Persistent governance identity
              </p>

              <div>Resolved</div>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.inventorySection}>
        <div className={styles.shell}>
          <div className={styles.editorialSplit}>
            <div>
              <p className={styles.goldEyebrow}>
                GOVERNANCE IDENTITY
              </p>

              <h2 className={styles.darkHeadline}>
                <span>An inventory tells you that AI exists.</span>
                <span>A passport tells governance what it is.</span>
              </h2>
            </div>

            <div className={styles.editorialCopyDark}>
              <p>
                Discovery is necessary, but existence alone is not
                enough for operational governance.
              </p>

              <p>
                AIGO-OS needs to understand the actor behind the
                activity, why it exists, who is accountable for it
                and which governance information belongs to it.
              </p>
            </div>
          </div>

          <div className={styles.comparisonScene}>
            <div className={styles.inventoryObject}>
              <span className={styles.objectEyebrow}>
                INVENTORY RECORD
              </span>

              <h3>AI system record</h3>

              <div className={styles.recordRows}>
                <span>Name</span>
                <span>Type</span>
                <span>Vendor</span>
                <span>Status</span>
                <span>Location</span>
              </div>
            </div>

            <div className={styles.comparisonCenter}>
              <span />
              <strong>Governance context</strong>
            </div>

            <div className={styles.passportObject}>
              <span className={styles.objectEyebrow}>
                ACTOR PASSPORT
              </span>

              <h3>Persistent governance identity</h3>

              <div className={styles.recordRows}>
                <span>Identity</span>
                <span>Purpose</span>
                <span>Ownership</span>
                <span>Relationships</span>
                <span>Capabilities</span>
                <span>Authority reference</span>
                <span>Governance context</span>
                <span>Evidence history</span>
              </div>
            </div>
          </div>

          <p className={styles.highlightStatement}>
            Discovery establishes that an AI actor exists.
            The Actor Passport establishes who or what governance
            is dealing with.
          </p>
        </div>
      </section>


      <section className={styles.structureSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <p className={styles.blueEyebrow}>
              PASSPORT STRUCTURE
            </p>

            <h2>
              <span>One governance identity.</span>
              <span>Multiple dimensions of context.</span>
            </h2>

            <p>
              An Actor Passport organizes the information AIGO-OS
              needs to consistently recognize and govern an AI actor
              across connected systems.
            </p>
          </div>

          <div className={styles.dimensionGrid}>
            {passportDimensions.map((dimension, index) => (
              <article
                key={dimension.title}
                className={styles.dimensionCard}
              >
                <div className={styles.dimensionTop}>
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <div className={styles.dimensionOrb}>
                    <span />
                  </div>
                </div>

                <h3>{dimension.title}</h3>

                <p>{dimension.copy}</p>

                <div className={styles.fieldTokens}>
                  {dimension.fields.map((field) => (
                    <span key={field}>{field}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className={styles.integrationSection}>
        <div className={styles.shell}>
          <div className={styles.editorialSplit}>
            <div>
              <p className={styles.goldEyebrow}>
                CONNECTED CONTEXT
              </p>

              <h2 className={styles.lightHeadline}>
                <span>Build governance identity from the systems</span>
                <span>the enterprise already uses.</span>
              </h2>
            </div>

            <div className={styles.editorialCopy}>
              <p>
                AIGO-OS does not require every piece of Actor
                Passport information to originate inside AIGO-OS.
              </p>

              <p>
                Connected enterprise systems contribute specific
                parts of the governance context.
              </p>
            </div>
          </div>

          <div className={styles.integrationScene}>
            <div className={styles.sourceStack}>
              <div>
                <span>AI PLATFORMS</span>
                <strong>Identifiers and capabilities</strong>
              </div>

              <div>
                <span>IDENTITY AND ACCESS</span>
                <strong>Accounts and access relationships</strong>
              </div>

              <div>
                <span>IT AND ASSET SYSTEMS</span>
                <strong>Applications and ownership</strong>
              </div>

              <div>
                <span>GRC AND POLICY</span>
                <strong>Risk, controls and policy</strong>
              </div>

              <div>
                <span>BUSINESS SYSTEMS</span>
                <strong>Processes and business entities</strong>
              </div>
            </div>

            <div className={styles.integrationCore}>
              <div className={styles.integrationCoreObject}>
                <span>AIGO-OS</span>
                <strong>Actor Passport</strong>
                <small>Context assembly</small>
              </div>
            </div>

            <div className={styles.assembledPassport}>
              <span>PERSISTENT GOVERNANCE IDENTITY</span>

              <strong>Procurement Agent 07</strong>

              <div>
                <span>Identity</span>
                <span>Purpose</span>
                <span>Ownership</span>
                <span>Authority</span>
                <span>Governance state</span>
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
          <div className={styles.sectionHeadingDark}>
            <p className={styles.goldEyebrow}>
              ACTOR RELATIONSHIPS
            </p>

            <h2>
              AI actors do not operate in isolation.
            </h2>

            <p>
              Select a relationship to see why it matters to governance.
            </p>
          </div>

          <div className={styles.relationshipScene}>
            <div className={styles.relationshipControls}>
              {(Object.keys(relationships) as RelationshipKey[]).map(
                (key) => (
                  <button
                    type="button"
                    key={key}
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

            <div className={styles.relationshipActor}>
              <div className={styles.relationshipActorOrb}>
                <span />
              </div>

              <span>ACTOR PASSPORT</span>
              <strong>Procurement Agent 07</strong>
            </div>

            <div className={styles.relationshipMeaning}>
              <span>WHY THIS RELATIONSHIP MATTERS</span>
              <strong>{activeRelationship.label}</strong>
              <p>{activeRelationship.why}</p>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.authorityBridgeSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <p className={styles.blueEyebrow}>
              IDENTITY AND AUTHORITY
            </p>

            <h2>
              <span>Knowing the actor is the foundation.</span>
              <span>Knowing its authority comes next.</span>
            </h2>
          </div>

          <div className={styles.authorityBridge}>
            <div className={styles.bridgeObject}>
              <span>ACTOR PASSPORT</span>

              <strong>Who or what is acting?</strong>

              <div>
                <span>Identity</span>
                <span>Purpose</span>
                <span>Owner</span>
                <span>Relationships</span>
                <span>Capabilities</span>
              </div>
            </div>

            <div className={styles.bridgeConnector}>
              <span />
            </div>

            <div className={styles.bridgeObject}>
              <span>MACHINE AUTHORITY</span>

              <strong>
                What has it been authorized to do?
              </strong>

              <div>
                <span>Actions</span>
                <span>Resources</span>
                <span>Scope</span>
                <span>Conditions</span>
                <span>Limits</span>
              </div>
            </div>
          </div>

          <div className={styles.significanceDestination}>
            <span>BUSINESS SIGNIFICANCE</span>

            <strong>
              Identity and authority become part of the context
              used to determine what the activity means.
            </strong>
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


      <section className={styles.resolutionScenarioSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeadingDark}>
            <p className={styles.goldEyebrow}>
              ACTOR RESOLUTION
            </p>

            <h2>
              Resolve the actor before interpreting the activity.
            </h2>
          </div>

          <div className={styles.scenarioScene}>
            <div className={styles.eventObject}>
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
            </div>

            <div className={styles.scenarioResolve}>
              <div className={styles.scenarioPulse} />
              <span>RESOLVE</span>
            </div>

            <div className={styles.scenarioPassport}>
              <span>ACTOR PASSPORT</span>

              <strong>Procurement Agent 07</strong>

              <dl>
                <div>
                  <dt>Purpose</dt>
                  <dd>Procurement automation</dd>
                </div>

                <div>
                  <dt>Business owner</dt>
                  <dd>Procurement</dd>
                </div>

                <div>
                  <dt>Machine Authority</dt>
                  <dd>MA-2041</dd>
                </div>

                <div>
                  <dt>Relevant relationship</dt>
                  <dd>New supplier workflow</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className={styles.scenarioOutcome}>
            <span>NEXT CAPABILITY</span>
            <strong>Business Significance</strong>

            <p>
              The event provides an actor reference.
              The Actor Passport gives that reference governance meaning.
            </p>
          </div>
        </div>
      </section>


      <section className={styles.timelineSection}>
        <div className={styles.shell}>
          <div className={styles.editorialSplit}>
            <div>
              <p className={styles.goldEyebrow}>
                LIVING GOVERNANCE CONTEXT
              </p>

              <h2 className={styles.darkHeadline}>
                <span>AI identity is persistent.</span>
                <span>Its governance context can change.</span>
              </h2>
            </div>

            <div className={styles.editorialCopyDark}>
              <p>
                Ownership, relationships, capabilities, authority
                and policy can change while the underlying actor
                remains the same.
              </p>
            </div>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineActor}>
              <div className={styles.timelineActorOrb}>
                <span />
              </div>

              <strong>Procurement Agent 07</strong>
              <span>Persistent identity</span>
            </div>

            <div className={styles.timelineStates}>
              {timeline.map((item) => (
                <div
                  key={item.number}
                  className={styles.timelineState}
                >
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                  <p>{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className={styles.significanceSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <p className={styles.blueEyebrow}>
              FROM IDENTITY TO SIGNIFICANCE
            </p>

            <h2>
              Business Significance starts with knowing who or what is acting.
            </h2>

            <p>
              The same activity can carry different meaning when
              the actor, purpose, ownership and delegated authority change.
            </p>
          </div>

          <div className={styles.actorSwitchScene}>
            <div className={styles.actorSwitchControls}>
              <button
                type="button"
                onClick={() => setActor("assistant")}
                className={
                  actor === "assistant"
                    ? styles.actorSwitchButtonActive
                    : styles.actorSwitchButton
                }
              >
                Customer Service Assistant
              </button>

              <button
                type="button"
                onClick={() => setActor("credit")}
                className={
                  actor === "credit"
                    ? styles.actorSwitchButtonActive
                    : styles.actorSwitchButton
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

            <div className={styles.selectedActor}>
              <span>ACTOR CONTEXT</span>
              <strong>{activeActor.name}</strong>

              <dl>
                <div>
                  <dt>Purpose</dt>
                  <dd>{activeActor.purpose}</dd>
                </div>

                <div>
                  <dt>Machine Authority</dt>
                  <dd>{activeActor.authority}</dd>
                </div>

                <div>
                  <dt>Business function</dt>
                  <dd>{activeActor.function}</dd>
                </div>
              </dl>
            </div>

            <div className={styles.significanceResult}>
              <span>DOWNSTREAM EFFECT</span>
              <strong>{activeActor.result}</strong>

              <p>
                The action is identical. The actor context is not.
              </p>
            </div>
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


      <section className={styles.traceabilitySection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeadingDark}>
            <p className={styles.goldEyebrow}>
              TRACEABILITY
            </p>

            <h2>
              Keep governance connected to the actor over time.
            </h2>
          </div>

          <div className={styles.traceabilityScene}>
            <div className={styles.tracePassport}>
              <div className={styles.traceOrb}>
                <span />
              </div>

              <span>ACTOR PASSPORT</span>
              <strong>Procurement Agent 07</strong>
            </div>

            <div className={styles.traceEvents}>
              <span>Authority created</span>
              <span>Authority revised</span>
              <span>Governance decision</span>
              <span>Human intervention</span>
              <span>Governance Receipt</span>
              <span>Policy relationship changed</span>
              <span>Governance decision</span>
              <span>Governance Receipt</span>
            </div>
          </div>

          <p className={styles.traceStatement}>
            Governance history follows the actor.
          </p>
        </div>
      </section>


      <section className={styles.modelSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <p className={styles.blueEyebrow}>
              THE AIGO-OS GOVERNANCE MODEL
            </p>

            <h2>
              Actor Passports are the identity foundation of AIGO-OS.
            </h2>
          </div>

          <div className={styles.modelSequence}>
            {governanceStages.map((item, index) => (
              <div
                key={item}
                className={
                  index === 0
                    ? styles.modelStageActive
                    : styles.modelStage
                }
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className={styles.finalCta}>
        <div className={styles.finalCtaGlow} />

        <div className={styles.finalCtaInner}>
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
