import {
    Activity,
    AlertTriangle,
    BarChart3,
    Brain,
    ShieldCheck,
    TrendingDown,
    TrendingUp,
  } from "lucide-react";
  import MetricCard from "@/components/shared/MetricCard";
  import PageShell from "@/components/shared/PageShell";
  
  const riskDistribution = [
    { label: "Critical", value: 2, percentage: 18 },
    { label: "High", value: 7, percentage: 52 },
    { label: "Medium", value: 14, percentage: 74 },
    { label: "Low", value: 9, percentage: 42 },
  ];
  
  const governanceCoverage = [
    { label: "NIST AI RMF", value: 82 },
    { label: "ISO/IEC 42001", value: 71 },
    { label: "EU AI Act", value: 64 },
    { label: "Internal AI Policy", value: 91 },
  ];
  
  const operationalSignals = [
    {
      title: "AI assets under governance",
      value: "42",
      change: "+8%",
      direction: "up",
    },
    {
      title: "Residual high risks",
      value: "4",
      change: "-12%",
      direction: "down",
    },
    {
      title: "Control evidence gaps",
      value: "18",
      change: "-6%",
      direction: "down",
    },
    {
      title: "Open governance reviews",
      value: "19",
      change: "+3%",
      direction: "up",
    },
  ];
  
  export default function AnalyticsPage() {
    return (
      <PageShell
        title="Governance Analytics"
        description="Analyze AI governance posture, risk exposure, control effectiveness, compliance readiness, and operational trends."
      >
        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard
            label="Governance Score"
            value="82%"
            helper="Enterprise posture"
          />
          <MetricCard
            label="Risk Exposure"
            value="Medium"
            helper="Residual profile"
          />
          <MetricCard
            label="Control Coverage"
            value="76%"
            helper="Implemented controls"
          />
          <MetricCard
            label="Evidence Readiness"
            value="71%"
            helper="Audit usable"
          />
        </div>
  
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-gray-500" />
              <h2 className="font-semibold text-gray-900">
                Risk Distribution
              </h2>
            </div>
  
            <div className="mt-6 space-y-5">
              {riskDistribution.map((risk) => (
                <div key={risk.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-700">
                      {risk.label}
                    </span>
                    <span className="text-gray-500">
                      {risk.value} risks
                    </span>
                  </div>
  
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-gray-900"
                      style={{ width: `${risk.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
  
          <section className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-gray-500" />
              <h2 className="font-semibold text-gray-900">
                Framework Coverage
              </h2>
            </div>
  
            <div className="mt-6 space-y-5">
              {governanceCoverage.map((framework) => (
                <div key={framework.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-700">
                      {framework.label}
                    </span>
                    <span className="text-gray-500">
                      {framework.value}%
                    </span>
                  </div>
  
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-gray-900"
                      style={{ width: `${framework.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
  
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-gray-500" />
            <h2 className="font-semibold text-gray-900">
              Operational Signals
            </h2>
          </div>
  
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {operationalSignals.map((signal) => (
              <div
                key={signal.title}
                className="rounded-lg border border-gray-100 bg-gray-50 p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-semibold text-gray-900">
                    {signal.value}
                  </span>
  
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    {signal.direction === "up" ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
  
                    {signal.change}
                  </div>
                </div>
  
                <p className="mt-3 text-sm text-gray-600">
                  {signal.title}
                </p>
              </div>
            ))}
          </div>
        </section>
  
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <Brain className="h-5 w-5 text-gray-500" />
  
            <h3 className="mt-3 font-semibold text-gray-900">
              AI Asset Intelligence
            </h3>
  
            <p className="mt-2 text-sm text-gray-500">
              Analyze agents, models, autonomy levels, business impact, and
              governance maturity.
            </p>
          </div>
  
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <BarChart3 className="h-5 w-5 text-gray-500" />
  
            <h3 className="mt-3 font-semibold text-gray-900">
              Governance Trends
            </h3>
  
            <p className="mt-2 text-sm text-gray-500">
              Track risk reduction, control performance, evidence readiness, and
              compliance coverage.
            </p>
          </div>
  
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <Activity className="h-5 w-5 text-gray-500" />
  
            <h3 className="mt-3 font-semibold text-gray-900">
              Operational Intelligence
            </h3>
  
            <p className="mt-2 text-sm text-gray-500">
              Surface alerts, incidents, reviews, overdue actions, and emerging
              governance signals.
            </p>
          </div>
        </div>
      </PageShell>
    );
  }