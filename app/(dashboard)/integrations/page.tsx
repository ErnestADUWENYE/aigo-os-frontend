// app/(dashboard)/integrations/page.tsx
import ResourcePage from "@/components/shared/ResourcePage";

export default function IntegrationsPage() {
  return (
    <ResourcePage
      title="Integrations"
      description="Connect AIGO with model providers, cloud systems, ticketing, identity, and evidence sources."
      metrics={[
        { label: "Connected", value: 8 },
        { label: "Available", value: 21 },
        { label: "Failed", value: 1 },
        { label: "Syncing", value: 3 },
      ]}
      sections={[
        { title: "Connected Systems", description: "Cloud, identity, model, monitoring, and GRC integrations." },
        { title: "Sync Health", description: "Track authentication, sync status, and ingestion reliability." },
      ]}
    />
  );
}