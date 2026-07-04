// app/(dashboard)/models/[modelId]/page.tsx
import ResourcePage from "@/components/shared/ResourcePage";

export default async function ModelDetailPage({
  params,
}: {
  params: Promise<{ modelId: string }>;
}) {
  const { modelId } = await params;

  return (
    <ResourcePage
      title="Model Details"
      description={`Model governance profile for ${modelId}.`}
      sections={[
        { title: "Model Profile", description: "Provider, version, capability, limitations, and usage boundaries." },
        { title: "Linked Agents", description: "AI agents and systems depending on this model." },
      ]}
    />
  );
}