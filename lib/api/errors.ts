export class ApiError extends Error {
  readonly code: string;
  readonly status: number;
  readonly requestId?: string;

  constructor({
    code,
    message,
    status,
    requestId,
  }: {
    code: string;
    message: string;
    status: number;
    requestId?: string;
  }) {
    super(message);

    this.name = "ApiError";
    this.code = code;
    this.status = status;
    this.requestId = requestId;
  }
}
