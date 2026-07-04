export const RISK_LEVELS = [
    { label: "Low", value: "low", score: 25 },
    { label: "Medium", value: "medium", score: 50 },
    { label: "High", value: "high", score: 75 },
    { label: "Critical", value: "critical", score: 100 },
  ] as const;
  
  export const RISK_CATEGORIES = [
    "privacy",
    "security",
    "safety",
    "bias",
    "legal",
    "compliance",
    "operational",
    "financial",
    "reputational",
  ] as const;
  
  export const AUTONOMY_LEVELS = [
    { label: "Assistive", value: "assistive" },
    { label: "Supervised", value: "supervised" },
    { label: "Semi-autonomous", value: "semi_autonomous" },
    { label: "Fully autonomous", value: "fully_autonomous" },
  ] as const;