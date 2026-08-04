import { LoadingState } from "@/components/system/LoadingState";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#e8eef6]">
      <LoadingState
        title="Opening AIGO-OS"
        description="Preparing your secure workspace..."
      />
    </main>
  );
}
