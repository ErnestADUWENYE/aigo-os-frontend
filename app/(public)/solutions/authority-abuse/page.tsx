import { AigoUseCasePage } from "@/components/aigo-use-case-page";

export default function Page() {
  return (
    <AigoUseCasePage
      eyebrow="Prevent Authority Abuse"
      title="Recognized identity does not make every exercise of authority legitimate."
      lead="An AI actor can be known, authenticated and intentionally deployed while still attempting to exercise authority outside its intended scope, conditions or purpose. AIGO-OS keeps authority connected to governance context."
      problemTitle="Authority can be valid in one context and inappropriate in another."
      problemBody="Machine authority is not simply a permanent permission flag. Scope, purpose, operating conditions, lifecycle state, relationships and human approval requirements can change whether an action remains within the authority the enterprise intended to delegate."
      existingControls={[
        {
          title: "Authentication",
          body:
            "Confirms identity but does not establish that every action performed by that identity remains inside delegated business authority.",
        },
        {
          title: "Permissions",
          body:
            "Define technical access but often lack the contextual boundaries required to govern autonomous enterprise action.",
        },
        {
          title: "Audit logs",
          body:
            "Record activity after or during execution. Governance requires the authority context behind the decision as well.",
        },
      ]}
      aigoCapabilities={[
        {
          title: "Actor Passport",
          body:
            "Resolve the governed identity, purpose, ownership, lifecycle and relationships of the actor.",
        },
        {
          title: "Machine Authority",
          body:
            "Represent the scope, actions, resources, conditions and human boundaries attached to delegated authority.",
        },
        {
          title: "Business Significance",
          body:
            "Determine how important the affected business capability, process or stakeholder context may be.",
        },
        {
          title: "Risk Intelligence",
          body:
            "Interpret authority gaps and changing conditions in the broader governance context.",
        },
        {
          title: "Governance Decision",
          body:
            "Determine the appropriate response when effective authority does not support the intended activity.",
        },
        {
          title: "Evidence",
          body:
            "Preserve which authority was evaluated and why the resulting governance outcome followed.",
        },
      ]}
      decisionContext={[
        "Which authority is currently effective?",
        "Is the requested action inside its scope?",
        "Are required conditions still true?",
        "Has the actor or environment changed?",
        "Does policy require additional authority?",
        "Should the activity proceed or stop?",
      ]}
      businessOutcomes={[
        "Keep recognized AI identities from being treated as unrestricted sources of authority.",
        "Make changing authority conditions visible to governance reasoning.",
        "Respond when autonomous activity moves outside delegated scope or purpose.",
        "Preserve evidence of the authority basis used for consequential decisions.",
      ]}
      closingTitle="Make delegated machine authority explicit, contextual and reviewable."
    />
  );
}
