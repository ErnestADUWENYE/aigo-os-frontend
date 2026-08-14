import { AigoUseCasePage } from "@/components/aigo-use-case-page";

export default function Page() {
  return (
    <AigoUseCasePage
      eyebrow="Prevent Inappropriate Tool Use"
      title="A tool being available does not mean every use of it is appropriate."
      lead="AI systems increasingly operate through enterprise tools, APIs and workflows. AIGO-OS helps govern whether a particular actor should exercise a particular capability in the current context."
      problemTitle="Tool access creates capability. It does not establish business authority."
      problemBody="Authentication and permission can establish that an AI actor can reach a tool or API. Governance must answer a different question: whether this actor should use that capability for this purpose, against this resource, under these conditions and with this level of autonomy."
      existingControls={[
        {
          title: "API and application permissions",
          body:
            "Determine whether the actor can technically call a tool or service. They do not fully express the business conditions surrounding each use.",
        },
        {
          title: "Security controls",
          body:
            "Protect credentials, resources and execution paths. Governance still needs context about purpose, authority and consequence.",
        },
        {
          title: "Runtime monitoring",
          body:
            "Provides evidence about tool calls and behavior. AIGO-OS uses relevant signals as governance context rather than duplicating the telemetry platform.",
        },
      ]}
      aigoCapabilities={[
        {
          title: "Actor Passport",
          body:
            "Resolve the governed actor and the purpose, ownership and relationships attached to it.",
        },
        {
          title: "Machine Authority",
          body:
            "Determine whether the requested tool capability sits inside the actor's defined authority.",
        },
        {
          title: "Business Significance",
          body:
            "Connect tool use to the business processes, stakeholders and consequences it may affect.",
        },
        {
          title: "Risk Intelligence",
          body:
            "Evaluate relevant operating and governance signals in the context of the proposed activity.",
        },
        {
          title: "Governance Decision",
          body:
            "Determine whether the activity may proceed, requires review, should be denied or needs escalation.",
        },
        {
          title: "Evidence",
          body:
            "Keep the basis for the governance decision connected to the resulting outcome.",
        },
      ]}
      decisionContext={[
        "Which actor is calling the tool?",
        "What capability is being exercised?",
        "Which resource is affected?",
        "Does authority cover this use?",
        "What business context applies?",
        "What governance conditions must hold?",
      ]}
      businessOutcomes={[
        "Keep access control and business authority from being treated as the same thing.",
        "Govern the use of enterprise capabilities without removing the value of useful machine autonomy.",
        "Apply contextual review to consequential or exceptional tool use.",
        "Preserve decision evidence around governed tool activity.",
      ]}
      closingTitle="Put governance between available capability and autonomous use."
    />
  );
}
