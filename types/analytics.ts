export type MetricTrend = "up" | "down" | "stable";

export type MetricHealth =
  | "healthy"
  | "attention"
  | "warning"
  | "critical";

export type AnalyticsTimeRange =
  | "24h"
  | "7d"
  | "30d"
  | "90d"
  | "6m"
  | "1y"
  | "custom";

export type AnalyticsMetric = {
  id: string;
  label: string;
  value: number;
  formatted_value?: string;
  previous_value?: number;
  change_percentage?: number;
  trend: MetricTrend;
  health?: MetricHealth;
  unit?: string;
};

export type TimeSeriesDataPoint = {
  timestamp: string;
  value: number;
  label?: string;
};

export type TimeSeriesMetric = {
  id: string;
  name: string;
  unit?: string;
  data: TimeSeriesDataPoint[];
};

export type RiskDistribution = {
  low: number;
  medium: number;
  high: number;
  critical: number;
};

export type GovernanceAnalytics = {
  organization_id: string;
  workspace_id?: string;
  time_range: AnalyticsTimeRange;
  total_ai_systems: number;
  total_agents: number;
  active_agents: number;
  high_risk_agents: number;
  critical_risk_agents: number;
  active_policies: number;
  policy_violations: number;
  blocked_actions: number;
  escalated_actions: number;
  open_reviews: number;
  overdue_reviews: number;
  approval_rate: number;
  mean_review_time_minutes: number;
  open_incidents: number;
  critical_incidents: number;
  active_alerts: number;
  critical_alerts: number;
  overall_risk_score: number;
  compliance_score: number;
  control_effectiveness_score: number;
  policy_coverage_percentage: number;
  risk_distribution: RiskDistribution;
  generated_at: string;
};

export type AgentAnalytics = {
  agent_id: string;
  total_actions: number;
  allowed_actions: number;
  blocked_actions: number;
  warned_actions: number;
  escalated_actions: number;
  policy_violations: number;
  review_count: number;
  incident_count: number;
  current_risk_score: number;
  risk_trend: MetricTrend;
  last_activity_at?: string;
};

export type PolicyAnalytics = {
  policy_id: string;
  evaluation_count: number;
  match_count: number;
  violation_count: number;
  block_count: number;
  warning_count: number;
  escalation_count: number;
  false_positive_count?: number;
  effectiveness_score?: number;
};

export type ComplianceAnalytics = {
  framework_id: string;
  framework_name: string;
  total_requirements: number;
  implemented_requirements: number;
  partially_implemented_requirements: number;
  missing_requirements: number;
  coverage_percentage: number;
  evidence_coverage_percentage: number;
  overdue_actions: number;
};