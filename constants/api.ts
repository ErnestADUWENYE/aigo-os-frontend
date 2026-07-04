export const API_CONFIG = {
    BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000",
    TIMEOUT_MS: 30000,
  } as const;
  
  export const API_ENDPOINTS = {
    HEALTH: "/health",
  
    AGENTS: "/agents",
    POLICIES: "/policies",
    REVIEWS: "/reviews",
    INCIDENTS: "/incidents",
    ALERTS: "/alerts",
    ANALYTICS: "/analytics",
    REPORTS: "/reports",
  
    GOVERNANCE: "/governance",
    RISK: "/risk",
    CONTROLS: "/controls",
    FRAMEWORKS: "/frameworks",
    EVIDENCE: "/evidence",
    AUDIT: "/audit",
  
    AI_SYSTEMS: "/ai-systems",
    MODELS: "/models",
    DATA_SOURCES: "/data-sources",
    TOOLS: "/tools",
  
    INTEGRATIONS: "/integrations",
    API_KEYS: "/api-keys",
    SERVICE_ACCOUNTS: "/service-accounts",
    WEBHOOKS: "/webhooks",
  } as const;