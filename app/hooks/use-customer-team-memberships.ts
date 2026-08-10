"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  createTeamMembership,
  deleteTeamMembership,
  listTeamMemberships,
  type CreateTeamMembershipInput,
  type UpdateTeamMembershipInput,
  updateTeamMembership,
} from "../../lib/api/customer-team-memberships";

import { useAuthentication } from "../providers/authentication-provider";
import { useTenant } from "../providers/tenant-provider";


export function useCustomerTeamMemberships(
  teamId: string | null,
) {
  const authentication = useAuthentication();
  const tenant = useTenant();
  const queryClient = useQueryClient();

  const enabled =
    authentication.isLoaded &&
    authentication.isAuthenticated &&
    Boolean(authentication.accessToken) &&
    Boolean(tenant.tenantId) &&
    Boolean(teamId);

  const queryKey = [
    "customer",
    "team-memberships",
    tenant.tenantId,
    tenant.workspaceId,
    teamId,
  ];

  const query = useQuery({
    queryKey,
    queryFn: () =>
      listTeamMemberships(
        teamId as string,
      ),
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
      input: CreateTeamMembershipInput,
    ) =>
      createTeamMembership(
        teamId as string,
        input,
      ),
    onSuccess: refresh,
  });

  const updateMutation = useMutation({
    mutationFn: ({
      membershipId,
      input,
    }: {
      membershipId: string;
      input: UpdateTeamMembershipInput;
    }) =>
      updateTeamMembership(
        teamId as string,
        membershipId,
        input,
      ),
    onSuccess: refresh,
  });

  const deleteMutation = useMutation({
    mutationFn: (
      membershipId: string,
    ) =>
      deleteTeamMembership(
        teamId as string,
        membershipId,
      ),
    onSuccess: refresh,
  });

  return {
    ...query,
    enabled,

    addMember: createMutation.mutateAsync,
    updateMember: updateMutation.mutateAsync,
    removeMember: deleteMutation.mutateAsync,

    isAdding: createMutation.isPending,
    isUpdating: updateMutation.isPending,
    isRemoving: deleteMutation.isPending,
  };
}
