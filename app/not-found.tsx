import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-2xl font-bold text-gray-900">
        Page not found
      </h1>

      <p className="mt-2 max-w-md text-gray-500">
        The AIGO OS page you requested does not exist or may have been moved.
      </p>

      <div className="mt-6">
        <Link href="/dashboard">
          <Button>Return to dashboard</Button>
        </Link>
      </div>
    </div>
  );
}