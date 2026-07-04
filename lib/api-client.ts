import axiosClient from "./axios";
import type { ApiErrorResponse } from "@/types";

export type RequestOptions = {
  token?: string | null;
  organizationId?: string;
  workspaceId?: string;
};

function buildHeaders(options?: RequestOptions) {
  return {
    ...(options?.token ? { Authorization: `Bearer ${options.token}` } : {}),
    ...(options?.organizationId
      ? { "X-Organization-Id": options.organizationId }
      : {}),
    ...(options?.workspaceId ? { "X-Workspace-Id": options.workspaceId } : {}),
  };
}

function normalizeError(error: unknown): ApiErrorResponse {
  if (
    typeof error === "object" &&
    error !== null &&
    "response" in error
  ) {
    const axiosError = error as {
      response?: {
        status?: number;
        data?: {
          message?: string;
          detail?: string;
          code?: string;
          details?: unknown;
        };
      };
    };

    return {
      success: false,
      status: axiosError.response?.status,
      message:
        axiosError.response?.data?.message ||
        axiosError.response?.data?.detail ||
        "AIGO OS request failed.",
      code: axiosError.response?.data?.code,
      details: axiosError.response?.data?.details,
    };
  }

  return {
    success: false,
    message: "Unexpected AIGO OS client error.",
  };
}

export const apiClient = {
  async get<T>(url: string, options?: RequestOptions): Promise<T> {
    try {
      const response = await axiosClient.get<T>(url, {
        headers: buildHeaders(options),
      });

      return response.data;
    } catch (error) {
      throw normalizeError(error);
    }
  },

  async post<T, B = unknown>(
    url: string,
    body?: B,
    options?: RequestOptions
  ): Promise<T> {
    try {
      const response = await axiosClient.post<T>(url, body, {
        headers: buildHeaders(options),
      });

      return response.data;
    } catch (error) {
      throw normalizeError(error);
    }
  },

  async put<T, B = unknown>(
    url: string,
    body?: B,
    options?: RequestOptions
  ): Promise<T> {
    try {
      const response = await axiosClient.put<T>(url, body, {
        headers: buildHeaders(options),
      });

      return response.data;
    } catch (error) {
      throw normalizeError(error);
    }
  },

  async patch<T, B = unknown>(
    url: string,
    body?: B,
    options?: RequestOptions
  ): Promise<T> {
    try {
      const response = await axiosClient.patch<T>(url, body, {
        headers: buildHeaders(options),
      });

      return response.data;
    } catch (error) {
      throw normalizeError(error);
    }
  },

  async delete<T>(url: string, options?: RequestOptions): Promise<T> {
    try {
      const response = await axiosClient.delete<T>(url, {
        headers: buildHeaders(options),
      });

      return response.data;
    } catch (error) {
      throw normalizeError(error);
    }
  },
};