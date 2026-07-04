export default function DashboardLoading() {
    return (
      <div className="space-y-6 p-6">
        <div className="h-7 w-56 animate-pulse rounded bg-gray-200" />
        <div className="grid gap-4 md:grid-cols-4">
          <div className="h-28 animate-pulse rounded-xl bg-gray-100" />
          <div className="h-28 animate-pulse rounded-xl bg-gray-100" />
          <div className="h-28 animate-pulse rounded-xl bg-gray-100" />
          <div className="h-28 animate-pulse rounded-xl bg-gray-100" />
        </div>
        <div className="h-64 animate-pulse rounded-xl bg-gray-100" />
      </div>
    );
  }