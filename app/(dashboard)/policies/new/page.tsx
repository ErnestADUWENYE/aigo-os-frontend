import ResourcePage from "@/components/shared/ResourcePage";

export default function Page() {
  return (
    <ResourcePage
      title="AIGO Platform"
      description="This page is part of the mature AIGO governance platform."
      sections={[
        {
          title: "Coming Online",
          description:
            "This workspace page is ready and will be connected to live platform data.",
        },
      ]}
    />
  );
}