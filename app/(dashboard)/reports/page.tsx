import Link from "next/link";
import { FileBarChart, Download, ShieldCheck, Clock } from "lucide-react";
import MetricCard from "@/components/shared/MetricCard";
import PageShell from "@/components/shared/PageShell";

const reports = [
  {
    id: "report-executive-ai-risk",
    title: "Executive AI Risk Summary",
    type: "Executive",
    status: "Ready",
    owner: "Risk Office",
  },
  {
    id: "report-control-evidence",
    title: "Control Evidence Readiness",
    type: "Audit",
    status: "Draft",
    owner: "Compliance",
  },
  {
    id: "report-framework-coverage",
    title: "Framework Coverage Report",
    type: "Compliance",
    status: "Ready",
    owner: "Governance Office",
  },
];

export default function ReportsPage() {
  return (
    <PageShell
      title="Reports"
      description="Generate executive, audit, risk, compliance, evidence, and governance reports for AIGO oversight."
      action={
        <Link
          href="/reports/generate"
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Generate Report
        </Link>
      }
    >
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Reports" value={18} helper="Generated outputs" />
        <MetricCard label="Ready" value={11} helper="Available exports" />
        <MetricCard label="Drafts" value={5} helper="Needs review" />
        <MetricCard label="Scheduled" value={4} helper="Recurring reports" />
      </div>

      <section className="rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-5">
          <div className="flex items-center gap-2">
            <FileBarChart className="h-5 w-5 text-gray-500" />
            <h2 className="font-semibold text-gray-900">Report Library</h2>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {reports.map((report) => (
            <Link
              key={report.id}
              href={`/reports/${report.id}`}
              className="grid gap-4 p-5 transition hover:bg-gray-50 md:grid-cols-5"
            >
              <div className="md:col-span-2">
                <p className="font-medium text-gray-900">{report.title}</p>
                <p className="text-sm text-gray-500">Type: {report.type}</p>
              </div>

              <p className="text-sm text-gray-600">Status: {report.status}</p>
              <p className="text-sm text-gray-600">Owner: {report.owner}</p>
              <p className="text-sm text-gray-400">View report →</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <ShieldCheck className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">
            Compliance Reporting
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Package framework coverage, control status, evidence readiness, and gaps.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <Download className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">Export Packages</h3>
          <p className="mt-2 text-sm text-gray-500">
            Prepare board, audit, regulator, and internal governance exports.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <Clock className="h-5 w-5 text-gray-500" />
          <h3 className="mt-3 font-semibold text-gray-900">
            Scheduled Reporting
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Automate recurring governance, risk, compliance, and executive reports.
          </p>
        </div>
      </div>
    </PageShell>
  );
}