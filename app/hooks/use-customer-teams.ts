"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  createCustomerTeam,
  deleteCustomerTeam,
  listCustomerTeams,
  type CreateCustomerTeamInput,
  type UpdateCustomerTeamInput,
  updateCustomerTeam,
} from "../../lib/api/customer-teams";

import { useAuthentication } from "../providers/authentication-provider";
import { useTenant } from "../providers/tenant-provider";


export function useCustomerTeams() {
  const authentication = useAuthentication();
  const tenant = useTenant();
  const queryClient = useQueryClient();

  const queryKey = [
    "customer",
    "teams",
    tenant.tenantId,
    tenant.workspaceId,
  ];

  const enabled =
    authentication.isLoaded &&
    authentication.isAuthenticated &&
    Boolean(authentication.accessToken) &&
    Boolean(tenant.tenantId);

  const query = useQuery({
    queryKey,
    queryFn: listCustomerTeams,
    enabled,
    retry: false,
  });

  const refresh = async () => {
    await queryClient.invalidateQueries({
      queryKey,
    });
  };

  const createMutation = useMutation({
    mutationFn: (
      input: CreateCustomerTeamInput,
    ) => createCustomerTeam(input),
    onSuccess: refresh,
  });

  const updateMutation = useMutation({
    mutationFn: ({
      teamId,
      input,
    }: {
      teamId: string;
      input: UpdateCustomerTeamInput;
    }) => updateCustomerTeam(teamId, input),
    onSuccess: refresh,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCustomerTeam,
    onSuccess: refresh,
  });

  return {
    ...query,
    enabled,
    createTeam: createMutation.mutateAsync,
    updateTeam: updateMutation.mutateAsync,
    deleteTeam: deleteMutation.mutateAsync,
    isCreating: createMutation.isPending,
    isUpdating: updateMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
}
