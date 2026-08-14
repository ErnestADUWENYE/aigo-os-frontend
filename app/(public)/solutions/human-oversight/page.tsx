import { AigoUseCasePage } from "@/components/aigo-use-case-page";

export default function Page() {
  return (
    <AigoUseCasePage
      eyebrow="Human Oversight"
      title="Keep people in authority without putting people in every loop."
      lead="Autonomy loses its value if every routine action waits for manual approval. Governance loses credibility if consequential actions never reach human judgement. AIGO-OS is designed to distinguish between the two."
      problemTitle="Human oversight should be deliberate, not universal or absent."
      problemBody="Different AI activities carry different levels of authority, consequence, uncertainty and policy obligation. A governance system therefore needs to determine when autonomous operation remains appropriate and when a person must review, approve, resolve ambiguity or take responsibility."
      existingControls={[
        {
          title: "Manual approval workflows",
          body:
            "Provide human checkpoints but can become operational bottlenecks when applied indiscriminately to routine activity.",
        },
        {
          title: "Automation platforms",
          body:
            "Execute defined workflows efficiently but do not independently determine when governance context requires human authority.",
        },
        {
          title: "Policy",
          body:
            "Can define circumstances requiring oversight. AIGO-OS helps connect those requirements to changing AI context and governance decisions.",
        },
      ]}
      aigoCapabilities={[
        {
          title: "Actor Passport",
          body:
            "Establish which governed AI actor is involved and the context associated with it.",
        },
        {
          title: "Machine Authority",
          body:
            "Define where autonomous authority ends and human authority begins.",
        },
        {
          title: "Business Significance",
          body:
            "Help determine whether the activity is material enough to justify human attention.",
        },
        {
          title: "Risk Intelligence",
          body:
            "Interpret risk and uncertainty in the context of the activity and its potential consequence.",
        },
        {
          title: "Governance Decision",
          body:
            "Support outcomes such as allow, review required, escalate, deny or suspend.",
        },
        {
          title: "Governance Receipt",
          body:
            "Preserve why human involvement was or was not required at decision time.",
        },
      ]}
      decisionContext={[
        "Is autonomous authority sufficient?",
        "Is the activity materially significant?",
        "Does policy require human judgement?",
        "Is uncertainty acceptable?",
        "Is escalation required?",
        "Which authority should receive the exception?",
      ]}
      businessOutcomes={[
        "Preserve autonomy for activity that remains within established governance boundaries.",
        "Direct human attention toward consequential, ambiguous or policy-mandated exceptions.",
        "Avoid using universal manual approval as a substitute for contextual governance.",
        "Keep the reason for human involvement traceable.",
      ]}
      closingTitle="Use human judgement where it adds governance value."
    />
  );
}
