export type FrameworkStatus =
  | "active"
  | "in_progress"
  | "inactive"
  | "archived";

export type FrameworkType =
  | "regulatory"
  | "standard"
  | "industry"
  | "internal";

export type FrameworkRequirementStatus =
  | "not_started"
  | "in_progress"
  | "implemented"
  | "partially_implemented"
  | "not_applicable";

export type FrameworkRequirement = {
  id: string;
  framework_id: string;
  code: string;
  title: string;
  description?: string;
  domain?: string;
  status: FrameworkRequirementStatus;
  control_ids?: string[];
  evidence_ids?: string[];
  owner?: string;
  due_date?: string;
  created_at: string;
  updated_at?: string;
};

export type GovernanceFramework = {
  id: string;
  organization_id: string;
  workspace_id: string;
  name: string;
  short_name: string;
  version?: string;
  type: FrameworkType;
  description?: string;
  status: FrameworkStatus;
  jurisdiction?: string;
  coverage_percentage?: number;
  requirement_count?: number;
  implemented_requirement_count?: number;
  requirements?: FrameworkRequirement[];
  created_at: string;
  updated_at?: string;
};