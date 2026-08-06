import { apiClient } from "./client";

export type AssuranceOverview = {
  organizationId: string;
  workspaceId: string | null;

  controlsTotal: number;
  controlsTested: number;
  controlsFailed: number;

  findingsOpen: number;
  findingsClosed: number;

  evidencePending: number;
  evidenceApproved: number;

  assessmentsActive: number;
  complianceFrameworks: string[];

  lastActivity: string | null;
};

type AssuranceOverviewApiResponse = {
  organization_id: string;
  workspace_id: string | null;

  controls_total: number;
  controls_tested: number;
  controls_failed: number;

  findings_open: number;
  findings_closed: number;

  evidence_pending: number;
  evidence_approved: number;

  assessments_active: number;
  compliance_frameworks: string[];

  last_activity: string | null;
};

function mapAssuranceOverview(
  overview: AssuranceOverviewApiResponse,
): AssuranceOverview {
  return {
    organizationId: overview.organization_id,
    workspaceId: overview.workspace_id,

    controlsTotal: overview.controls_total,
    controlsTested: overview.controls_tested,
    controlsFailed: overview.controls_failed,

    findingsOpen: overview.findings_open,
    findingsClosed: overview.findings_closed,

    evidencePending: overview.evidence_pending,
    evidenceApproved: overview.evidence_approved,

    assessmentsActive: overview.assessments_active,
    complianceFrameworks:
      overview.compliance_frameworks,

    lastActivity: overview.last_activity,
  };
}

export async function getCustomerAssuranceOverview(): Promise<
  AssuranceOverview
> {
  const response =
    await apiClient.get<AssuranceOverviewApiResponse>(
      "/customer/assurance/overview",
    );

  return mapAssuranceOverview(response.data);
}
