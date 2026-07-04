// app/(dashboard)/models/page.tsx
import ResourcePage from "@/components/shared/ResourcePage";

export default function ModelsPage() {
  return (
    <ResourcePage
      title="Model Inventory"
      description="Track AI models, providers, versions, evaluations, and deployment risk."
      actions={[{ label: "Add Model", href: "/models/new" }]}
      metrics={[
        { label: "Models", value: 18 },
        { label: "Production", value: 9 },
        { label: "Deprecated", value: 2 },
        { label: "Pending Review", value: 4 },
      ]}
      sections={[
        { title: "Model Registry", description: "Central catalog of models used by AI agents and products." },
        { title: "Evaluation Status", description: "Track testing, bias checks, accuracy, safety, and approval readiness." },
      ]}
    />
  );
}