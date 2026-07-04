export type ApiSuccessResponse<T> = {
    success: true;
    data: T;
    message?: string;
    request_id?: string;
    timestamp?: string;
  };
  
  export type ApiValidationError = {
    field?: string;
    message: string;
    code?: string;
  };
  
  export type ApiErrorResponse = {
    success: false;
    message: string;
    code?: string;
    status?: number;
    details?: unknown;
    validation_errors?: ApiValidationError[];
    request_id?: string;
    timestamp?: string;
  };
  
  export type ApiResponse<T> =
    | ApiSuccessResponse<T>
    | ApiErrorResponse;
  
  export type ApiRequestContext = {
    request_id?: string;
    correlation_id?: string;
    organization_id?: string;
    workspace_id?: string;
  };
  
  export type ApiHealthStatus =
    | "healthy"
    | "degraded"
    | "unhealthy";
  
  export type ApiHealthResponse = {
    status: ApiHealthStatus;
    service: string;
    version?: string;
    environment?: string;
    database?: ApiHealthStatus;
    dependencies?: Record<string, ApiHealthStatus>;
    timestamp: string;
  };