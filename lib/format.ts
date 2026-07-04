export function formatDate(value?: string | Date | null) {
    if (!value) return "N/A";
  
    const date = typeof value === "string" ? new Date(value) : value;
  
    if (Number.isNaN(date.getTime())) return "Invalid date";
  
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  }
  
  export function formatDateTime(value?: string | Date | null) {
    if (!value) return "N/A";
  
    const date = typeof value === "string" ? new Date(value) : value;
  
    if (Number.isNaN(date.getTime())) return "Invalid date";
  
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  }
  
  export function formatPercent(value?: number | null) {
    if (value === null || value === undefined) return "N/A";
  
    return `${value.toFixed(0)}%`;
  }
  
  export function formatNumber(value?: number | null) {
    if (value === null || value === undefined) return "N/A";
  
    return new Intl.NumberFormat("en").format(value);
  }
  
  export function humanize(value?: string | null) {
    if (!value) return "N/A";
  
    return value
      .replaceAll("_", " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }