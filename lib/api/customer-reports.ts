import { apiClient } from "./client";

export type CustomerReport = {
  id: string;
  organizationId: string;
  workspaceId: string | null;
  name: string;
  category: string;
  status: string;
  generatedAt: string;
  generatedBy: string | null;
  sourceEventType: string;
  sourceEntityId: string | null;
  downloadAvailable: boolean;
};

export type CustomerReportList = {
  organizationId: string;
  workspaceId: string | null;
  totalReports: number;
  completedReports: number;
  pendingReports: number;
  failedReports: number;
  supportsDownloads: boolean;
  exportFormats: string[];
  reports: CustomerReport[];
};

type CustomerReportApiResponse = {
  id: string;
  organization_id: string;
  workspace_id: string | null;
  name: string;
  category: string;
  status: string;
  generated_at: string;
  generated_by: string | null;
  source_event_type: string;
  source_entity_id: string | null;
  download_available: boolean;
};

type CustomerReportListApiResponse = {
  organization_id: string;
  workspace_id: string | null;
  total_reports: number;
  completed_reports: number;
  pending_reports: number;
  failed_reports: number;
  supports_downloads: boolean;
  export_formats: string[];
  reports: CustomerReportApiResponse[];
};

function mapReport(
  report: CustomerReportApiResponse,
): CustomerReport {
  return {
    id: report.id,
    organizationId: report.organization_id,
    workspaceId: report.workspace_id,
    name: report.name,
    category: report.category,
    status: report.status,
    generatedAt: report.generated_at,
    generatedBy: report.generated_by,
    sourceEventType: report.source_event_type,
    sourceEntityId: report.source_entity_id,
    downloadAvailable: report.download_available,
  };
}

export async function listCustomerReports(): Promise<
  CustomerReportList
> {
  const response =
    await apiClient.get<CustomerReportListApiResponse>(
      "/customer/reports",
    );

  return {
    organizationId: response.data.organization_id,
    workspaceId: response.data.workspace_id,
    totalReports: response.data.total_reports,
    completedReports:
      response.data.completed_reports,
    pendingReports: response.data.pending_reports,
    failedReports: response.data.failed_reports,
    supportsDownloads:
      response.data.supports_downloads,
    exportFormats: response.data.export_formats,
    reports: response.data.reports.map(mapReport),
  };
}
