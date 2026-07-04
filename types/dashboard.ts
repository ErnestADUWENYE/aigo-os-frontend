export type DashboardMetric = {
    title: string;
    value: string | number;
    description?: string;
    change?: string;
    trend?: "up" | "down" | "neutral";
  };
  
  export type DashboardSummary = {
    registered_agents: number;
    active_policies: number;
    open_reviews: number;
    critical_alerts: number;
    policy_coverage: number;
    risk_exposure: "low" | "medium" | "high" | "critical";
    compliance_readiness: string;
  };