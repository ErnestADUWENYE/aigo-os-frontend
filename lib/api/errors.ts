export type ApiErrorPayload = {
  detail?: string;
  message?: string;
  error?: string;
  request_id?: string;
};

export class AigoApiError extends Error {
  readonly status: number;
  readonly requestId?: string;
  readonly payload?: ApiErrorPayload;

  constructor({
    message,
    status,
    requestId,
    payload,
  }: {
    message: string;
    status: number;
    requestId?: string;
    payload?: ApiErrorPayload;
  }) {
    super(message);

    this.name = "AigoApiError";
    this.status = status;
    this.requestId = requestId;
    this.payload = payload;
  }
}
