import {
    Activity,
    CheckCircle2,
    Database,
    HeartPulse,
    Server,
    ShieldCheck,
  } from "lucide-react";
  import MetricCard from "@/components/shared/MetricCard";
  import PageShell from "@/components/shared/PageShell";
  
  const services = [
    {
      name: "AIGO API",
      status: "Operational",
      latency: "82ms",
      owner: "Platform",
    },
    {
      name: "Governance Engine",
      status: "Operational",
      latency: "105ms",
      owner: "Governance",
    },
    {
      name: "Evidence Store",
      status: "Operational",
      latency: "94ms",
      owner: "Compliance",
    },
    {
      name: "Integration Sync",
      status: "Degraded",
      latency: "310ms",
      owner: "Operations",
    },
  ];
  
  export default function PlatformHealthPage() {
    return (
      <PageShell
        title="Platform Health"
        description="Monitor AIGO backend services, governance engine, evidence store, integrations, sync jobs, and operational readiness."
      >
        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard label="Overall Status" value="OK" helper="Platform available" />
          <MetricCard label="API Latency" value="82ms" helper="Average response" />
          <MetricCard label="Sync Jobs" value={14} helper="Last 24 hours" />
          <MetricCard label="Issues" value={1} helper="Needs attention" />
        </div>
  
        <section className="rounded-xl border border-gray-200 bg-white">
          <div className="border-b border-gray-200 p-5">
            <div className="flex items-center gap-2">
              <HeartPulse className="h-5 w-5 text-gray-500" />
              <h2 className="font-semibold text-gray-900">Service Status</h2>
            </div>
          </div>
  
          <div className="divide-y divide-gray-100">
            {services.map((service) => (
              <div
                key={service.name}
                className="grid gap-4 p-5 md:grid-cols-4"
              >
                <div>
                  <p className="font-medium text-gray-900">{service.name}</p>
                  <p className="text-sm text-gray-500">
                    Owner: {service.owner}
                  </p>
                </div>
  
                <p className="text-sm text-gray-600">
                  Status: {service.status}
                </p>
  
                <p className="text-sm text-gray-600">
                  Latency: {service.latency}
                </p>
  
                <p className="text-sm text-gray-400">
                  Last checked recently
                </p>
              </div>
            ))}
          </div>
        </section>
  
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <Server className="h-5 w-5 text-gray-500" />
  
            <h3 className="mt-3 font-semibold text-gray-900">
              API Availability
            </h3>
  
            <p className="mt-2 text-sm text-gray-500">
              Track FastAPI service health, response latency, request errors, and environment readiness.
            </p>
          </div>
  
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <Database className="h-5 w-5 text-gray-500" />
  
            <h3 className="mt-3 font-semibold text-gray-900">
              Data Stores
            </h3>
  
            <p className="mt-2 text-sm text-gray-500">
              Monitor evidence storage, audit log persistence, record freshness, and sync integrity.
            </p>
          </div>
  
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <ShieldCheck className="h-5 w-5 text-gray-500" />
  
            <h3 className="mt-3 font-semibold text-gray-900">
              Governance Reliability
            </h3>
  
            <p className="mt-2 text-sm text-gray-500">
              Ensure policies, controls, risk workflows, review queues, and alerts remain operational.
            </p>
          </div>
        </div>
  
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-gray-500" />
            <h2 className="font-semibold text-gray-900">
              Operational Readiness
            </h2>
          </div>
  
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
              <CheckCircle2 className="h-5 w-5 text-gray-500" />
              <p className="mt-2 text-sm text-gray-600">
                Authentication, app routing, services, hooks, and core governance pages are available.
              </p>
            </div>
  
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
              <CheckCircle2 className="h-5 w-5 text-gray-500" />
              <p className="mt-2 text-sm text-gray-600">
                Next maturity step is replacing static page data with live records from your FastAPI backend.
              </p>
            </div>
          </div>
        </section>
      </PageShell>
    );
  }