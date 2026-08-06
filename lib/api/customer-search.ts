import { apiClient } from "./client";

export type CustomerSearchResult = {
  resultType: string;
  id: string;
  title: string;
  description: string | null;
  href: string;
  createdAt: string | null;
};

export type CustomerSearchResponse = {
  organizationId: string;
  workspaceId: string | null;
  query: string;
  total: number;
  results: CustomerSearchResult[];
};

type CustomerSearchResultApiResponse = {
  result_type: string;
  id: string;
  title: string;
  description: string | null;
  href: string;
  created_at: string | null;
};

type CustomerSearchApiResponse = {
  organization_id: string;
  workspace_id: string | null;
  query: string;
  total: number;
  results: CustomerSearchResultApiResponse[];
};

export async function searchCustomerConsole(
  query: string,
): Promise<CustomerSearchResponse> {
  const response =
    await apiClient.get<CustomerSearchApiResponse>(
      "/customer/search",
      {
        params: {
          query,
        },
      },
    );

  return {
    organizationId: response.data.organization_id,
    workspaceId: response.data.workspace_id,
    query: response.data.query,
    total: response.data.total,
    results: response.data.results.map((result) => ({
      resultType: result.result_type,
      id: result.id,
      title: result.title,
      description: result.description,
      href: result.href,
      createdAt: result.created_at,
    })),
  };
}
