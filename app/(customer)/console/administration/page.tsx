"use client";

import { useQuery } from "@tanstack/react-query";
import {
  AlertCircle,
  Building2,
  CheckCircle2,
  Factory,
  Globe2,
  Layers3,
  LoaderCircle,
  Mail,
  MapPin,
  Network,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";

import { useAuthentication } from "../../../providers/authentication-provider";
import { useAuthorization } from "../../../providers/authorization-provider";
import { useTenant } from "../../../providers/tenant-provider";
import {
  loadTenantAdministrationSnapshot,
  type OrganizationalUnit,
} from "../../../../lib/api/customer-tenant-administration";

function MetricCard({
  label,
  value,
  detail,
  icon,
}: {
  label: string;
  value: number | string;
  detail: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium opacity-65">
            {label}
          </p>

          <p className="mt-3 text-3xl font-semibold tracking-tight">
            {value}
          </p>

          <p className="mt-2 text-sm opacity-65">
            {detail}
          </p>
        </div>

        <div className="rounded-xl border p-3">
          {icon}
        </div>
      </div>
    </article>
  );
}

function LoadFailure({
  retry,
}: {
  retry: () => void;
}) {
  return (
    <section
      className="rounded-2xl border p-6"
      role="alert"
    >
      <div className="flex items-start gap-3">
        <AlertCircle
          aria-hidden="true"
          className="mt-0.5 size-5"
        />

        <div>
          <h2 className="font-semibold">
            Administration data could not be loaded
          </h2>

          <p className="mt-2 text-sm opacity-65">
            Confirm that the API is running and that your
            current role can read organization, workspace,
            profile, membership, invitation, unit, and
            settings data.
          </p>

          <button
            className="mt-4 rounded-lg border px-4 py-2 text-sm"
            onClick={retry}
            type="button"
          >
            Try again
          </button>
        </div>
      </div>
    </section>
  );
}

function OrganizationalUnitRow({
  unit,
  parentName,
}: {
  unit: OrganizationalUnit;
  parentName: string | null;
}) {
  return (
    <article className="p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-medium">
            {unit.name}
          </h3>

          <p className="mt-1 text-xs opacity-55">
            {unit.slug}
          </p>
        </div>

        <span className="rounded-full border px-3 py-1 text-xs">
          {unit.status}
        </span>
      </div>

      <p className="mt-3 text-sm opacity-65">
        {unit.description ??
          "No organizational-unit description provided."}
      </p>

      <p className="mt-3 text-xs opacity-55">
        Parent: {parentName ?? "Organization root"}
      </p>
    </article>
  );
}

function formatInvitationExpiry(value: string): string {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Unknown expiry";
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
  }).format(date);
}

export default function CustomerAdministrationPage() {
  const authentication = useAuthentication();
const authorization = useAuthorization();

  const {
    tenantId,
    tenantName,
    workspaceId,
    workspaceName,
  } = useTenant();

  const queryEnabled =
    authentication.isLoaded &&
    authentication.isAuthenticated &&
    Boolean(authentication.accessToken) &&
    Boolean(tenantId);

  const administrationQuery = useQuery({
    queryKey: [
      "customer",
      "tenant-administration",
      tenantId,
      workspaceId,
    ],
    queryFn: () =>
      loadTenantAdministrationSnapshot(
        tenantId as string,
      ),
    enabled: queryEnabled,
  });

  const organizations =
    administrationQuery.data?.organizations ?? [];

  const workspaces =
    administrationQuery.data?.workspaces ?? [];

  const profiles =
    administrationQuery.data?.profiles ?? [];

  const memberships =
    administrationQuery.data?.memberships ?? [];

  const invitations =
    administrationQuery.data?.invitations ?? [];

  const organizationalUnits =
    administrationQuery.data?.organizationalUnits ??
    [];

  const settings =
    administrationQuery.data?.organizationSettings;

  const activeProfiles = profiles.filter(
    (profile) => profile.isActive,
  ).length;

  const activeMemberships = memberships.filter(
    (membership) =>
      membership.status.toUpperCase() === "ACTIVE",
  ).length;

  const pendingInvitations = invitations.filter(
    (invitation) =>
      invitation.status.toUpperCase() === "PENDING",
  ).length;

  const activeUnits = organizationalUnits.filter(
    (unit) =>
      unit.status.toUpperCase() === "ACTIVE",
  ).length;

  const unitNames = new Map(
    organizationalUnits.map((unit) => [
      unit.id,
      unit.name,
    ]),
  );

const canViewAdministration = authorization.canAny([
  "organization.admin",
  "memberships.read",
  "roles.read",
  "profiles.read",
  "organizational_units.read",
  "invitations.read",
]);

if (!canViewAdministration) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <section className="rounded-2xl border p-8 text-center">
        <h1 className="text-2xl font-semibold">
          Access denied
        </h1>

        <p className="mt-3 text-sm opacity-70">
          You do not have permission to access Administration.
        </p>
      </section>
    </main>
  );
}
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border p-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium opacity-65">
              <Building2
                aria-hidden="true"
                className="size-4"
              />
              Tenant and identity administration
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Administration
            </h2>

            <p className="mt-3 max-w-2xl opacity-70">
              Manage your organization structure,
              workspaces, people, memberships,
              invitations, and customer settings.
            </p>
          </div>

          <div className="rounded-2xl border p-5 text-sm">
            <p className="font-medium">
              {tenantName ??
                settings?.name ??
                "Selected organization"}
            </p>

            <p className="mt-1 opacity-65">
              {workspaceName ??
                (
                  workspaceId
                    ? "Selected workspace"
                    : "Organization-wide access"
                )}
            </p>
          </div>
        </div>
      </section>

      {administrationQuery.isLoading ? (
        <div className="flex items-center gap-3 rounded-2xl border p-6">
          <LoaderCircle
            aria-hidden="true"
            className="size-5 animate-spin"
          />
          <span>
            Loading tenant administration...
          </span>
        </div>
      ) : null}

      {administrationQuery.isError ? (
        <LoadFailure
          retry={() => {
            void administrationQuery.refetch();
          }}
        />
      ) : null}

      <section
        aria-label="Administration summary"
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-6"
      >
        <MetricCard
          label="Organizations"
          value={
            administrationQuery.isError
              ? "--"
              : organizations.length
          }
          detail="Accessible tenants"
          icon={
            <Building2
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Workspaces"
          value={
            administrationQuery.isError
              ? "--"
              : workspaces.length
          }
          detail="Accessible workspaces"
          icon={
            <Workflow
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Active profiles"
          value={
            administrationQuery.isError
              ? "--"
              : activeProfiles
          }
          detail={`${profiles.length} total profiles`}
          icon={
            <Users
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Active memberships"
          value={
            administrationQuery.isError
              ? "--"
              : activeMemberships
          }
          detail={`${memberships.length} assignments`}
          icon={
            <UserCheck
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Pending invitations"
          value={
            administrationQuery.isError
              ? "--"
              : pendingInvitations
          }
          detail={`${invitations.length} total invitations`}
          icon={
            <Mail
              aria-hidden="true"
              className="size-5"
            />
          }
        />

        <MetricCard
          label="Active units"
          value={
            administrationQuery.isError
              ? "--"
              : activeUnits
          }
          detail={`${organizationalUnits.length} total units`}
          icon={
            <Network
              aria-hidden="true"
              className="size-5"
            />
          }
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_1fr]">
        <div className="rounded-2xl border">
          <div className="border-b p-6">
            <h2 className="text-lg font-semibold">
              Organization profile
            </h2>

            <p className="mt-1 text-sm opacity-65">
              Customer identity and operating context.
            </p>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2">
            <article className="rounded-xl border p-5">
              <Building2
                aria-hidden="true"
                className="size-5"
              />

              <p className="mt-4 text-xs font-medium uppercase tracking-wide opacity-55">
                Organization
              </p>

              <p className="mt-2 font-semibold">
                {settings?.name ??
                  tenantName ??
                  "Unavailable"}
              </p>

              <p className="mt-1 text-sm opacity-65">
                {settings?.slug ?? tenantId}
              </p>
            </article>

            <article className="rounded-xl border p-5">
              <Factory
                aria-hidden="true"
                className="size-5"
              />

              <p className="mt-4 text-xs font-medium uppercase tracking-wide opacity-55">
                Industry
              </p>

              <p className="mt-2 font-semibold">
                {settings?.industry ??
                  "Not configured"}
              </p>

              <p className="mt-1 text-sm opacity-65">
                Status:{" "}
                {settings?.status ?? "Unknown"}
              </p>
            </article>

            <article className="rounded-xl border p-5">
              <MapPin
                aria-hidden="true"
                className="size-5"
              />

              <p className="mt-4 text-xs font-medium uppercase tracking-wide opacity-55">
                Primary region
              </p>

              <p className="mt-2 font-semibold">
                {settings?.primaryRegion ??
                  "Not configured"}
              </p>

              <p className="mt-1 text-sm opacity-65">
                Governance owner:{" "}
                {settings?.governanceOwnerName ??
                  "Not configured"}
              </p>
            </article>

            <article className="rounded-xl border p-5">
              <Globe2
                aria-hidden="true"
                className="size-5"
              />

              <p className="mt-4 text-xs font-medium uppercase tracking-wide opacity-55">
                Regulatory scope
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {settings?.regulatoryScope.length ? (
                  settings.regulatoryScope.map(
                    (scope) => (
                      <span
                        className="rounded-full border px-3 py-1 text-xs"
                        key={scope}
                      >
                        {scope}
                      </span>
                    ),
                  )
                ) : (
                  <span className="text-sm opacity-65">
                    Not configured
                  </span>
                )}
              </div>
            </article>
          </div>
        </div>

        <div className="rounded-2xl border">
          <div className="border-b p-6">
            <h2 className="text-lg font-semibold">
              Workspaces
            </h2>

            <p className="mt-1 text-sm opacity-65">
              Operational environments available in the
              selected organization.
            </p>
          </div>

          {workspaces.length === 0 &&
          !administrationQuery.isLoading ? (
            <div className="p-8 text-center text-sm opacity-65">
              No workspaces are available.
            </div>
          ) : null}

          <div className="divide-y">
            {workspaces.map((workspace) => (
              <article
                className="p-5"
                key={workspace.id}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-medium">
                      {workspace.name}
                    </h3>

                    <p className="mt-1 text-xs opacity-55">
                      {workspace.slug}
                    </p>
                  </div>

                  <span className="rounded-full border px-3 py-1 text-xs">
                    {workspace.status}
                  </span>
                </div>

                <p className="mt-3 text-sm opacity-65">
                  {workspace.description ??
                    "No workspace description provided."}
                </p>

                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {workspace.environment ? (
                    <span className="rounded-full border px-2.5 py-1">
                      {workspace.environment}
                    </span>
                  ) : null}

                  {workspace.region ? (
                    <span className="rounded-full border px-2.5 py-1">
                      {workspace.region}
                    </span>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border">
          <div className="border-b p-6">
            <h2 className="text-lg font-semibold">
              People and memberships
            </h2>

            <p className="mt-1 text-sm opacity-65">
              Active identities and their current tenant
              assignments.
            </p>
          </div>

          {profiles.length === 0 &&
          !administrationQuery.isLoading ? (
            <div className="p-8 text-center text-sm opacity-65">
              No profiles are available.
            </div>
          ) : null}

          <div className="divide-y">
            {profiles.slice(0, 10).map((profile) => {
              const profileMemberships =
                memberships.filter(
                  (membership) =>
                    membership.profileId ===
                    profile.id,
                );

              return (
                <article
                  className="p-5"
                  key={profile.id}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-medium">
                        {profile.fullName ??
                          profile.email}
                      </h3>

                      <p className="mt-1 text-sm opacity-65">
                        {profile.email}
                      </p>
                    </div>

                    <span className="flex items-center gap-1 rounded-full border px-3 py-1 text-xs">
                      <CheckCircle2
                        aria-hidden="true"
                        className="size-3"
                      />
                      {profile.isActive
                        ? "Active"
                        : "Inactive"}
                    </span>
                  </div>

                  <p className="mt-3 text-sm opacity-65">
                    {profile.jobTitle ??
                      "No job title"}
                    {profile.department
                      ? ` · ${profile.department}`
                      : ""}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {profileMemberships.map(
                      (membership) => (
                        <span
                          className="rounded-full border px-2.5 py-1 text-xs"
                          key={membership.id}
                        >
                          {membership.role} ·{" "}
                          {membership.status}
                        </span>
                      ),
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border">
          <div className="border-b p-6">
            <h2 className="text-lg font-semibold">
              Invitations
            </h2>

            <p className="mt-1 text-sm opacity-65">
              Pending and historical organization access
              invitations.
            </p>
          </div>

          {invitations.length === 0 &&
          !administrationQuery.isLoading ? (
            <div className="p-8 text-center text-sm opacity-65">
              No invitations are available.
            </div>
          ) : null}

          <div className="divide-y">
            {invitations.slice(0, 10).map(
              (invitation) => (
                <article
                  className="p-5"
                  key={invitation.id}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-medium">
                        {invitation.email}
                      </h3>

                      <p className="mt-1 text-sm opacity-65">
                        Role: {invitation.role}
                      </p>
                    </div>

                    <span className="rounded-full border px-3 py-1 text-xs">
                      {invitation.status}
                    </span>
                  </div>

                  <p className="mt-3 text-xs opacity-55">
                    Expires{" "}
                    {formatInvitationExpiry(
                      invitation.expiresAt,
                    )}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border">
        <div className="border-b p-6">
          <h2 className="text-lg font-semibold">
            Organizational structure
          </h2>

          <p className="mt-1 text-sm opacity-65">
            Departments, divisions, and other internal
            operating units.
          </p>
        </div>

        {organizationalUnits.length === 0 &&
        !administrationQuery.isLoading ? (
          <div className="p-8 text-center">
            <Layers3
              aria-hidden="true"
              className="mx-auto size-8 opacity-40"
            />

            <h3 className="mt-4 font-semibold">
              No organizational units
            </h3>

            <p className="mt-2 text-sm opacity-65">
              Units will appear here after they are
              configured.
            </p>
          </div>
        ) : null}

        <div className="grid gap-px md:grid-cols-2 xl:grid-cols-3">
          {organizationalUnits.map((unit) => (
            <OrganizationalUnitRow
              key={unit.id}
              unit={unit}
              parentName={
                unit.parentUnitId
                  ? unitNames.get(
                      unit.parentUnitId,
                    ) ?? null
                  : null
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
}





