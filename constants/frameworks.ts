export const GOVERNANCE_FRAMEWORKS = [
    {
      id: "nist-ai-rmf",
      name: "NIST AI Risk Management Framework",
      short_name: "NIST AI RMF",
      type: "standard",
    },
    {
      id: "iso-42001",
      name: "ISO/IEC 42001 AI Management System",
      short_name: "ISO 42001",
      type: "standard",
    },
    {
      id: "eu-ai-act",
      name: "EU Artificial Intelligence Act",
      short_name: "EU AI Act",
      type: "regulatory",
    },
    {
      id: "soc2-ai-controls",
      name: "SOC 2 AI Governance Controls",
      short_name: "SOC 2 AI",
      type: "standard",
    },
    {
      id: "internal-ai-policy",
      name: "Internal AI Governance Policy",
      short_name: "Internal Policy",
      type: "internal",
    },
  ] as const;
  
  export const FRAMEWORK_DOMAINS = [
    "governance",
    "risk_management",
    "data_governance",
    "model_governance",
    "human_oversight",
    "transparency",
    "security",
    "privacy",
    "monitoring",
    "incident_management",
    "auditability",
  ] as const;