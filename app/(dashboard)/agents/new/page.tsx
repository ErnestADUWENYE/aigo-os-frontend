// app/(dashboard)/agents/new/page.tsx
import ResourcePage from "@/components/shared/ResourcePage";

export default function NewAgentPage() {
  return (
    <ResourcePage
      title="Register New Agent"
      description="Create a governed AI agent profile with owner, purpose, autonomy, and risk posture."
      sections={[
        { title: "Agent Identity", description: "Capture name, description, owner, business unit, and use case." },
        { title: "Governance Details", description: "Assign risk level, autonomy level, policies, controls, and review workflow." },
      ]}
    />
  );
}