"use client";

import {
  ChevronDown,
  ChevronUp,
  LoaderCircle,
  Plus,
  Save,
  Trash2,
  Users,
} from "lucide-react";
import {
  useMemo,
  useState,
} from "react";

import { useCustomerTeamMemberships } from "../../../app/hooks/use-customer-team-memberships";
import { useCustomerTeams } from "../../../app/hooks/use-customer-teams";


type ProfileOption = {
  id: string;
  fullName: string | null;
  email: string;
  isActive: boolean;
};

function slugifyTeamName(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}


function TeamMembers({
  teamId,
  profiles,
}: {
  teamId: string;
  profiles: ProfileOption[];
}) {
  const memberships =
    useCustomerTeamMemberships(teamId);

  const [profileId, setProfileId] =
    useState("");
  const [role, setRole] =
    useState("MEMBER");

  const profileMap = useMemo(
    () =>
      new Map(
        profiles.map((profile) => [
          profile.id,
          profile,
        ]),
      ),
    [profiles],
  );

  const assignedProfileIds = new Set(
    (memberships.data ?? []).map(
      (membership) => membership.profileId,
    ),
  );

  const availableProfiles = profiles.filter(
    (profile) =>
      profile.isActive &&
      !assignedProfileIds.has(profile.id),
  );

  const addMember = async () => {
    if (!profileId) {
      return;
    }

    await memberships.addMember({
      profileId,
      role,
    });

    setProfileId("");
    setRole("MEMBER");
  };

  return (
    <div className="border-t p-5">
      <div className="flex items-center gap-2">
        <Users
          aria-hidden="true"
          className="size-4"
        />

        <h4 className="font-medium">
          Team members
        </h4>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_180px_auto]">
        <select
          className="min-w-0 rounded-lg border bg-transparent px-3 py-2 text-sm"
          onChange={(event) => {
            setProfileId(event.target.value);
          }}
          value={profileId}
        >
          <option value="">
            Select a profile
          </option>

          {availableProfiles.map((profile) => (
            <option
              key={profile.id}
              value={profile.id}
            >
              {profile.fullName ?? profile.email}
            </option>
          ))}
        </select>

        <select
          className="rounded-lg border bg-transparent px-3 py-2 text-sm"
          onChange={(event) => {
            setRole(event.target.value);
          }}
          value={role}
        >
          <option value="MEMBER">
            Member
          </option>

          <option value="LEAD">
            Lead
          </option>

          <option value="OWNER">
            Owner
          </option>
        </select>

        <button
          className="flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium disabled:opacity-50"
          disabled={
            !profileId ||
            memberships.isAdding
          }
          onClick={() => {
            void addMember();
          }}
          type="button"
        >
          {memberships.isAdding ? (
            <LoaderCircle
              aria-hidden="true"
              className="size-4 animate-spin"
            />
          ) : (
            <Plus
              aria-hidden="true"
              className="size-4"
            />
          )}

          Add member
        </button>
      </div>

      {memberships.isLoading ? (
        <div className="mt-5 flex items-center gap-2 text-sm opacity-65">
          <LoaderCircle
            aria-hidden="true"
            className="size-4 animate-spin"
          />
          Loading team members...
        </div>
      ) : null}

      {memberships.isError ? (
        <p
          className="mt-5 text-sm opacity-70"
          role="alert"
        >
          Team members could not be loaded.
        </p>
      ) : null}

      {!memberships.isLoading &&
      (memberships.data?.length ?? 0) === 0 ? (
        <p className="mt-5 text-sm opacity-60">
          No members are assigned to this team.
        </p>
      ) : null}

      <div className="mt-5 divide-y rounded-xl border">
        {(memberships.data ?? []).map(
          (membership) => {
            const profile = profileMap.get(
              membership.profileId,
            );

            return (
              <div
                className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between"
                key={membership.id}
              >
                <div className="min-w-0">
                  <p className="truncate font-medium">
                    {profile?.fullName ??
                      profile?.email ??
                      membership.profileId}
                  </p>

                  <p className="mt-1 truncate text-xs opacity-55">
                    {profile?.email ??
                      membership.profileId}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <select
                    className="rounded-lg border bg-transparent px-3 py-2 text-xs"
                    disabled={memberships.isUpdating}
                    onChange={(event) => {
                      void memberships.updateMember({
                        membershipId:
                          membership.id,
                        input: {
                          role:
                            event.target.value,
                          status:
                            membership.status,
                        },
                      });
                    }}
                    value={membership.role}
                  >
                    <option value="MEMBER">
                      Member
                    </option>

                    <option value="LEAD">
                      Lead
                    </option>

                    <option value="OWNER">
                      Owner
                    </option>
                  </select>

                  <select
                    className="rounded-lg border bg-transparent px-3 py-2 text-xs"
                    disabled={memberships.isUpdating}
                    onChange={(event) => {
                      void memberships.updateMember({
                        membershipId:
                          membership.id,
                        input: {
                          role:
                            membership.role,
                          status:
                            event.target.value,
                        },
                      });
                    }}
                    value={membership.status}
                  >
                    <option value="ACTIVE">
                      Active
                    </option>

                    <option value="INACTIVE">
                      Inactive
                    </option>
                  </select>

                  <button
                    aria-label="Remove team member"
                    className="rounded-lg border p-2 disabled:opacity-50"
                    disabled={memberships.isRemoving}
                    onClick={() => {
                      void memberships.removeMember(
                        membership.id,
                      );
                    }}
                    type="button"
                  >
                    <Trash2
                      aria-hidden="true"
                      className="size-4"
                    />
                  </button>
                </div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}


export function TeamsPanel({
  profiles,
}: {
  profiles: ProfileOption[];
}) {
  const teams = useCustomerTeams();

  const [expandedTeamId, setExpandedTeamId] =
    useState<string | null>(null);

  const [isCreatingTeam, setIsCreatingTeam] =
    useState(false);

  const [teamName, setTeamName] =
    useState("");

  const [teamSlug, setTeamSlug] =
    useState("");

  const [teamDescription, setTeamDescription] =
    useState("");

  const [teamOwnerProfileId, setTeamOwnerProfileId] =
    useState("");

  const [createError, setCreateError] =
    useState<string | null>(null);

  const createTeam = async () => {
    const name = teamName.trim();
    const slug =
      teamSlug.trim() || slugifyTeamName(name);

    if (!name || !slug) {
      setCreateError(
        "Team name and identifier are required.",
      );
      return;
    }

    setCreateError(null);

    try {
      const team = await teams.createTeam({
        name,
        slug,
        description:
          teamDescription.trim() || null,
        ownerProfileId:
          teamOwnerProfileId || null,
      });

      setTeamName("");
      setTeamSlug("");
      setTeamDescription("");
      setTeamOwnerProfileId("");
      setIsCreatingTeam(false);
      setExpandedTeamId(team.id);
    } catch {
      setCreateError(
        "Team could not be created.",
      );
    }
  };

  return (
    <section className="rounded-2xl border">
      <div className="border-b p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Users
                aria-hidden="true"
                className="size-5"
              />

              <h2 className="text-lg font-semibold">
                Teams
              </h2>
            </div>

            <p className="mt-2 text-sm opacity-65">
              Manage operational teams and their member assignments.
            </p>
          </div>

          <button
            className="flex shrink-0 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium"
            onClick={() => {
              setCreateError(null);
              setIsCreatingTeam((current) => !current);
            }}
            type="button"
          >
            <Plus
              aria-hidden="true"
              className="size-4"
            />

            New team
          </button>
        </div>
      </div>

      {isCreatingTeam ? (
        <div className="border-b p-6">
          <div className="grid gap-5 lg:grid-cols-2">
            <div>
              <label
                className="text-sm font-medium"
                htmlFor="new-team-name"
              >
                Team name
              </label>

              <input
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2"
                id="new-team-name"
                onChange={(event) => {
                  const value = event.target.value;

                  setTeamName(value);

                  if (!teamSlug) {
                    setTeamSlug(
                      slugifyTeamName(value),
                    );
                  }
                }}
                placeholder="Risk Operations"
                value={teamName}
              />
            </div>

            <div>
              <label
                className="text-sm font-medium"
                htmlFor="new-team-slug"
              >
                Team identifier
              </label>

              <input
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2"
                id="new-team-slug"
                onChange={(event) => {
                  setTeamSlug(
                    slugifyTeamName(
                      event.target.value,
                    ),
                  );
                }}
                placeholder="risk-operations"
                value={teamSlug}
              />
            </div>

            <div className="lg:col-span-2">
              <label
                className="text-sm font-medium"
                htmlFor="new-team-description"
              >
                Description
              </label>

              <textarea
                className="mt-2 min-h-24 w-full rounded-lg border bg-transparent px-3 py-2"
                id="new-team-description"
                onChange={(event) => {
                  setTeamDescription(
                    event.target.value,
                  );
                }}
                placeholder="Describe the team's operational responsibility."
                value={teamDescription}
              />
            </div>

            <div className="lg:col-span-2">
              <label
                className="text-sm font-medium"
                htmlFor="new-team-owner"
              >
                Team owner
              </label>

              <select
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2"
                id="new-team-owner"
                onChange={(event) => {
                  setTeamOwnerProfileId(
                    event.target.value,
                  );
                }}
                value={teamOwnerProfileId}
              >
                <option value="">
                  No owner assigned
                </option>

                {profiles
                  .filter(
                    (profile) => profile.isActive,
                  )
                  .map((profile) => (
                    <option
                      key={profile.id}
                      value={profile.id}
                    >
                      {profile.fullName ??
                        profile.email}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {createError ? (
            <p
              className="mt-4 text-sm"
              role="alert"
            >
              {createError}
            </p>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              className="flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium disabled:opacity-50"
              disabled={
                teams.isCreating ||
                !teamName.trim()
              }
              onClick={() => {
                void createTeam();
              }}
              type="button"
            >
              {teams.isCreating ? (
                <LoaderCircle
                  aria-hidden="true"
                  className="size-4 animate-spin"
                />
              ) : (
                <Save
                  aria-hidden="true"
                  className="size-4"
                />
              )}

              {teams.isCreating
                ? "Creating..."
                : "Create team"}
            </button>

            <button
              className="rounded-lg border px-4 py-2 text-sm"
              disabled={teams.isCreating}
              onClick={() => {
                setIsCreatingTeam(false);
                setCreateError(null);
              }}
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}

      {teams.isLoading ? (
        <div className="flex items-center gap-2 p-6 text-sm opacity-65">
          <LoaderCircle
            aria-hidden="true"
            className="size-4 animate-spin"
          />
          Loading teams...
        </div>
      ) : null}

      {teams.isError ? (
        <div
          className="p-6 text-sm opacity-70"
          role="alert"
        >
          Teams could not be loaded.
        </div>
      ) : null}

      {!teams.isLoading &&
      !teams.isError &&
      (teams.data?.length ?? 0) === 0 ? (
        <div className="p-8 text-center">
          <Users
            aria-hidden="true"
            className="mx-auto size-8 opacity-35"
          />

          <h3 className="mt-4 font-semibold">
            No teams
          </h3>

          <p className="mt-2 text-sm opacity-65">
            Teams will appear here after they are created.
          </p>
        </div>
      ) : null}

      <div className="divide-y">
        {(teams.data ?? []).map((team) => {
          const owner = profiles.find(
            (profile) =>
              profile.id ===
              team.ownerProfileId,
          );

          const expanded =
            expandedTeamId === team.id;

          return (
            <article key={team.id}>
              <div className="p-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-medium">
                        {team.name}
                      </h3>

                      <span className="rounded-full border px-2.5 py-1 text-xs">
                        {team.status}
                      </span>
                    </div>

                    <p className="mt-1 text-xs opacity-55">
                      {team.slug}
                    </p>

                    <p className="mt-3 text-sm opacity-65">
                      {team.description ??
                        "No team description provided."}
                    </p>

                    <p className="mt-3 text-xs opacity-55">
                      Owner:{" "}
                      {owner?.fullName ??
                        owner?.email ??
                        "Not assigned"}
                    </p>
                  </div>

                  <button
                    className="flex shrink-0 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium"
                    onClick={() => {
                      setExpandedTeamId(
                        expanded
                          ? null
                          : team.id,
                      );
                    }}
                    type="button"
                  >
                    Manage members

                    {expanded ? (
                      <ChevronUp
                        aria-hidden="true"
                        className="size-4"
                      />
                    ) : (
                      <ChevronDown
                        aria-hidden="true"
                        className="size-4"
                      />
                    )}
                  </button>
                </div>
              </div>

              {expanded ? (
                <TeamMembers
                  profiles={profiles}
                  teamId={team.id}
                />
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}

