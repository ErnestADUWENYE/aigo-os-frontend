import { AigoUseCasePage } from "@/components/aigo-use-case-page";

export default function Page() {
  return (
    <AigoUseCasePage
      eyebrow="Control Excessive Agency"
      title="Keep autonomous AI inside the authority the enterprise intended."
      lead="AI can remain correctly authenticated and technically permitted while still exercising more functionality, freedom or autonomy than the organization intended. AIGO-OS helps make that operating boundary governable."
      problemTitle="Capability can expand faster than accountability."
      problemBody="As AI systems gain tools, permissions, integrations and the ability to act across workflows, the important question is no longer only whether the system has access. The enterprise must also determine whether the action fits the actor's delegated authority, intended purpose, current conditions and required level of oversight."
      existingControls={[
        {
          title: "Identity and access",
          body:
            "Establish who or what is authenticated and which resources can be reached. They do not alone determine whether every technically possible action is appropriate.",
        },
        {
          title: "Observability",
          body:
            "Shows runtime activity and technical behavior. It can reveal what occurred without independently establishing the actor's business authority.",
        },
        {
          title: "Policy and GRC",
          body:
            "Define organizational requirements and controls. The remaining challenge is carrying that context into the governance of changing machine activity.",
        },
      ]}
      aigoCapabilities={[
        {
          title: "Actor Passport",
          body:
            "Establish the governed identity, ownership, purpose, relationships and lifecycle context of the AI actor.",
        },
        {
          title: "Machine Authority",
          body:
            "Represent the actions, resources, scope, conditions and human boundaries that define delegated authority.",
        },
        {
          title: "Business Significance",
          body:
            "Determine how consequential the activity may be to business capabilities, processes and stakeholders.",
        },
        {
          title: "Risk Intelligence",
          body:
            "Interpret relevant risk signals in the context of the actor's authority, dependencies and current operating conditions.",
        },
        {
          title: "Governance Decision",
          body:
            "Bring the available context together to determine the appropriate governance response.",
        },
        {
          title: "Governance Receipt",
          body:
            "Preserve the context, governance basis, decision and outcome for later reconstruction.",
        },
      ]}
      decisionContext={[
        "Who or what is acting?",
        "What authority applies?",
        "What is the intended purpose?",
        "Which resources are affected?",
        "What conditions are currently true?",
        "How significant could the action be?",
      ]}
      businessOutcomes={[
        "Preserve useful autonomy without treating every technically possible action as automatically acceptable.",
        "Reduce the gap between machine capability and the authority the enterprise intended to delegate.",
        "Apply human involvement where authority, policy or consequence requires judgement.",
        "Keep evidence connected to consequential governance decisions.",
      ]}
      closingTitle="Govern autonomy without giving up control of enterprise authority."
    />
  );
}
