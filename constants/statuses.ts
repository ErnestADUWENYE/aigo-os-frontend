export const STATUS_LABELS = {
    active: "Active",
    inactive: "Inactive",
    monitoring: "Monitoring",
    suspended: "Suspended",
    retired: "Retired",
  
    draft: "Draft",
    in_review: "In Review",
    approved: "Approved",
    rejected: "Rejected",
    deployed: "Deployed",
    archived: "Archived",
  
    open: "Open",
    assigned: "Assigned",
    investigating: "Investigating",
    resolved: "Resolved",
    closed: "Closed",
  
    pending: "Pending",
    verified: "Verified",
    failed: "Failed",
    completed: "Completed",
  } as const;
  
  export const STATUS_BADGE_VARIANTS = {
    active: "success",
    approved: "success",
    resolved: "success",
    completed: "success",
    verified: "success",
  
    monitoring: "info",
    in_review: "info",
    assigned: "info",
  
    draft: "neutral",
    inactive: "neutral",
    archived: "neutral",
    retired: "neutral",
  
    open: "warning",
    pending: "warning",
    investigating: "warning",
  
    suspended: "danger",
    rejected: "danger",
    failed: "danger",
    closed: "neutral",
  } as const;