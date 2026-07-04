// app/(dashboard)/models/new/page.tsx
import ResourcePage from "@/components/shared/ResourcePage";

export default function NewModelPage() {
  return (
    <ResourcePage
      title="Add Model"
      description="Register a new AI model with provider, version, purpose, and governance metadata."
      sections={[
        { title: "Model Details", description: "Capture model name, provider, version, modality, and deployment context." },
        { title: "Evaluation", description: "Attach safety, accuracy, fairness, and compliance evaluation results." },
      ]}
    />
  );
}