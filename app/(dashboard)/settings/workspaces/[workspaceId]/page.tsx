import ResourcePage from "@/components/shared/ResourcePage";

export default async function Page({
  params,
}: {
  params: Promise<Record<string, string>>;
}) {
  const resolvedParams = await params;
  const id = Object.values(resolvedParams)[0];

  return (
    <ResourcePage
      title="Record Details"
      description={`Governance record ${id}.`}
      sections={[
        {
          title: "Overview",
          description:
            "View profile, ownership, status, governance history, and related activity.",
        },
      ]}
    />
  );
}