export function getRiskScore(level?: string | null) {
    switch (level) {
      case "low":
        return 25;
      case "medium":
        return 50;
      case "high":
        return 75;
      case "critical":
        return 100;
      default:
        return 0;
    }
  }
  
  export function getRiskBadgeVariant(level?: string | null) {
    switch (level) {
      case "low":
        return "success";
      case "medium":
        return "warning";
      case "high":
        return "danger";
      case "critical":
        return "critical";
      default:
        return "neutral";
    }
  }
  
  export function getRiskLabel(level?: string | null) {
    if (!level) return "Unknown";
  
    return level.charAt(0).toUpperCase() + level.slice(1);
  }
  
  export function isHighRisk(level?: string | null) {
    return level === "high" || level === "critical";
  }