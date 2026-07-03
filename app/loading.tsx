import Spinner from "@/components/ui/Spinner";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Spinner label="Loading AIGO OS..." />
    </div>
  );
}