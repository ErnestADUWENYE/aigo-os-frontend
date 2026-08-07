"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  AlertCircle,
  Building2,
  Check,
  Globe2,
  LoaderCircle,
  Mail,
  MapPin,
  Palette,
  Save,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import {
  type FormEvent,
  useState,
} from "react";

import { useAuthentication } from "../../../providers/authentication-provider";
import { useAuthorization } from "../../../providers/authorization-provider";
import { useTenant } from "../../../providers/tenant-provider";
import { useTheme } from "../../../../design-system/themes/provider";
import { themeList } from "../../../../design-system/themes/registry";
import type { ThemeId } from "../../../../design-system/themes/types";
import {
  getCustomerAppearanceSettings,
  getCustomerOrganizationSettings,
  type OrganizationSettings,
  updateCustomerAppearanceSettings,
  updateCustomerOrganizationSettings,
} from "../../../../lib/api/customer-settings";

type SettingsFormState = {
  name: string;
  industry: string;
  primaryRegion: string;
  regulatoryScope: string;
  governanceOwnerName: string;
  complianceContactEmail: string;
};

function createInitialForm(
  settings: OrganizationSettings,
): SettingsFormState {
  return {
    name: settings.name,
    industry: settings.industry ?? "",
    primaryRegion: settings.primaryRegion ?? "",
    regulatoryScope:
      settings.regulatoryScope.join(", "),
    governanceOwnerName:
      settings.governanceOwnerName ?? "",
    complianceContactEmail:
      settings.complianceContactEmail ?? "",
  };
}

function Field({
  id,
  label,
  description,
  value,
  onChange,
  type = "text",
}: {
  id: string;
  label: string;
  description: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email";
}) {
  return (
    <div>
      <label
        className="text-sm font-medium"
        htmlFor={id}
      >
        {label}
      </label>

      <p className="mt-1 text-xs opacity-60">
        {description}
      </p>

      <input
        className="mt-3 w-full rounded-xl border bg-transparent px-4 py-3 outline-none"
        id={id}
        onChange={(event) =>
          onChange(event.target.value)
        }
        type={type}
        value={value}
      />
    </div>
  );
}

function OrganizationSettingsForm({
  settings,
  tenantId,
}: {
  settings: OrganizationSettings;
  tenantId: string | null;
}) {
  const queryClient = useQueryClient();

  const [form, setForm] = useState<SettingsFormState>(
    () => createInitialForm(settings),
  );

  const mutation = useMutation({
    mutationFn: updateCustomerOrganizationSettings,
    onSuccess(updatedSettings) {
      queryClient.setQueryData(
        [
          "customer",
          "settings",
          "organization",
          tenantId,
        ],
        updatedSettings,
      );

      setForm(createInitialForm(updatedSettings));
    },
  });

  function updateField(
    field: keyof SettingsFormState,
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function submit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    mutation.mutate({
      name: form.name.trim(),
      industry: form.industry.trim() || null,
      primaryRegion:
        form.primaryRegion.trim() || null,
      regulatoryScope: form.regulatoryScope
        .split(",")
        .map((scope) => scope.trim())
        .filter(Boolean),
      governanceOwnerName:
        form.governanceOwnerName.trim() || null,
      complianceContactEmail:
        form.complianceContactEmail.trim() || null,
    });
  }

  return (
    <form
      className="rounded-2xl border"
      onSubmit={submit}
    >
      <div className="border-b p-6">
        <h2 className="text-lg font-semibold">
          Organization profile
        </h2>

        <p className="mt-1 text-sm opacity-65">
          Core customer identity and compliance contacts.
        </p>
      </div>

      <div className="grid gap-6 p-6 md:grid-cols-2">
        <div className="flex gap-3">
          <Building2
            aria-hidden="true"
            className="mt-9 size-5 shrink-0"
          />

          <div className="flex-1">
            <Field
              description="The customer-facing organization name."
              id="organization-name"
              label="Organization name"
              onChange={(value) =>
                updateField("name", value)
              }
              value={form.name}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Globe2
            aria-hidden="true"
            className="mt-9 size-5 shrink-0"
          />

          <div className="flex-1">
            <Field
              description="Primary business sector or industry."
              id="industry"
              label="Industry"
              onChange={(value) =>
                updateField("industry", value)
              }
              value={form.industry}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <MapPin
            aria-hidden="true"
            className="mt-9 size-5 shrink-0"
          />

          <div className="flex-1">
            <Field
              description="Primary data or operational region."
              id="primary-region"
              label="Primary region"
              onChange={(value) =>
                updateField("primaryRegion", value)
              }
              value={form.primaryRegion}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <ShieldCheck
            aria-hidden="true"
            className="mt-9 size-5 shrink-0"
          />

          <div className="flex-1">
            <Field
              description="Comma-separated frameworks or regulations."
              id="regulatory-scope"
              label="Regulatory scope"
              onChange={(value) =>
                updateField(
                  "regulatoryScope",
                  value,
                )
              }
              value={form.regulatoryScope}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <UserRound
            aria-hidden="true"
            className="mt-9 size-5 shrink-0"
          />

          <div className="flex-1">
            <Field
              description="Named owner for governance oversight."
              id="governance-owner"
              label="Governance owner"
              onChange={(value) =>
                updateField(
                  "governanceOwnerName",
                  value,
                )
              }
              value={form.governanceOwnerName}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Mail
            aria-hidden="true"
            className="mt-9 size-5 shrink-0"
          />

          <div className="flex-1">
            <Field
              description="Primary compliance contact address."
              id="compliance-email"
              label="Compliance contact"
              onChange={(value) =>
                updateField(
                  "complianceContactEmail",
                  value,
                )
              }
              type="email"
              value={form.complianceContactEmail}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t p-6">
        <div className="text-sm">
          {mutation.isSuccess ? (
            <span className="flex items-center gap-2">
              <Check
                aria-hidden="true"
                className="size-4"
              />
              Organization settings saved.
            </span>
          ) : null}

          {mutation.isError ? (
            <span role="alert">
              Settings could not be saved.
            </span>
          ) : null}
        </div>

        <button
          className="flex items-center gap-2 rounded-lg border px-4 py-2"
          disabled={
            mutation.isPending ||
            !form.name.trim()
          }
          type="submit"
        >
          {mutation.isPending ? (
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

          Save settings
        </button>
      </div>
    </form>
  );
}

export default function CustomerSettingsPage() {
  const authentication = useAuthentication();
const authorization = useAuthorization();
  const queryClient = useQueryClient();
  const { tenantId, tenantName } = useTenant();
  const { themeId, setThemeId } = useTheme();

  const enabled =
    authentication.isLoaded &&
    authentication.isAuthenticated &&
    Boolean(authentication.accessToken) &&
    Boolean(tenantId);

  const organizationQuery = useQuery({
    queryKey: [
      "customer",
      "settings",
      "organization",
      tenantId,
    ],
    queryFn: getCustomerOrganizationSettings,
    enabled,
  });

  const appearanceQuery = useQuery({
    queryKey: [
      "customer",
      "settings",
      "appearance",
      tenantId,
    ],
    queryFn: getCustomerAppearanceSettings,
    enabled,
  });

  const appearanceMutation = useMutation({
    mutationFn: updateCustomerAppearanceSettings,
    onSuccess(settings) {
      queryClient.setQueryData(
        [
          "customer",
          "settings",
          "appearance",
          tenantId,
        ],
        settings,
      );

      setThemeId(settings.defaultBackgroundDesign);
    },
  });

  function selectOrganizationTheme(
    nextThemeId: ThemeId,
  ) {
    appearanceMutation.mutate(nextThemeId);
  }

  const isLoading =
    organizationQuery.isLoading ||
    appearanceQuery.isLoading;

  const isError =
    organizationQuery.isError ||
    appearanceQuery.isError;

const canManageSettings = authorization.canAny([
  "organization.admin",
  "organization.settings.read",
  "organization.settings.manage",
]);

if (!canManageSettings) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <section className="rounded-2xl border p-8 text-center">
        <h1 className="text-2xl font-semibold">
          Access denied
        </h1>

        <p className="mt-3 text-sm opacity-70">
          You do not have permission to access Settings.
        </p>
      </section>
    </main>
  );
}
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border p-8">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl border p-4">
            <Building2
              aria-hidden="true"
              className="size-6"
            />
          </div>

          <div>
            <p className="text-sm font-medium opacity-65">
              Organization configuration
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Settings
            </h2>

            <p className="mt-3 max-w-2xl opacity-70">
              Configure organization identity, operating
              region, regulatory coverage, ownership, and
              the default customer-console appearance.
            </p>

            <p className="mt-3 text-sm opacity-55">
              {tenantName ?? tenantId}
            </p>
          </div>
        </div>
      </section>

      {isLoading ? (
        <div className="flex items-center gap-3 rounded-2xl border p-6">
          <LoaderCircle
            aria-hidden="true"
            className="size-5 animate-spin"
          />
          <span>Loading organization settings...</span>
        </div>
      ) : null}

      {isError ? (
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
              <h3 className="font-semibold">
                Settings could not be loaded
              </h3>

              <p className="mt-2 text-sm opacity-65">
                Your current role may not have organization
                settings access.
              </p>

              <button
                className="mt-4 rounded-lg border px-4 py-2 text-sm"
                onClick={() => {
                  void organizationQuery.refetch();
                  void appearanceQuery.refetch();
                }}
                type="button"
              >
                Try again
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {organizationQuery.data ? (
        <OrganizationSettingsForm
          key={[
            organizationQuery.data.organizationId,
            organizationQuery.data.name,
            organizationQuery.data.industry,
            organizationQuery.data.primaryRegion,
            organizationQuery.data.regulatoryScope.join(","),
            organizationQuery.data.governanceOwnerName,
            organizationQuery.data.complianceContactEmail,
          ].join(":")}
          settings={organizationQuery.data}
          tenantId={tenantId}
        />
      ) : null}

      <section className="rounded-2xl border">
        <div className="border-b p-6">
          <div className="flex items-center gap-3">
            <Palette
              aria-hidden="true"
              className="size-5"
            />

            <div>
              <h2 className="text-lg font-semibold">
                Organization appearance
              </h2>

              <p className="mt-1 text-sm opacity-65">
                Select the default background design for
                organization users.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-3">
          {themeList.map((theme) => {
            const organizationThemeId =
              appearanceQuery.data
                ?.defaultBackgroundDesign;

            const isOrganizationDefault =
              organizationThemeId === theme.id;

            const isEffective =
              themeId === theme.id;

            return (
              <button
                className="rounded-2xl border p-5 text-left"
                disabled={appearanceMutation.isPending}
                key={theme.id}
                onClick={() =>
                  selectOrganizationTheme(theme.id)
                }
                type="button"
              >
                <div
                  className="h-24 rounded-xl border"
                  style={{
                    background: theme.tokens.gradient,
                  }}
                />

                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">
                      {theme.name}
                    </h3>

                    <p className="mt-2 text-sm opacity-65">
                      {theme.description}
                    </p>
                  </div>

                  {isEffective ? (
                    <Check
                      aria-hidden="true"
                      className="size-5"
                    />
                  ) : null}
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border px-3 py-1">
                    {theme.appearance}
                  </span>

                  {isOrganizationDefault ? (
                    <span className="rounded-full border px-3 py-1">
                      Organization default
                    </span>
                  ) : null}

                  {isEffective ? (
                    <span className="rounded-full border px-3 py-1">
                      Active
                    </span>
                  ) : null}
                </div>
              </button>
            );
          })}
        </div>

        {appearanceMutation.isError ? (
          <p
            className="border-t p-6 text-sm"
            role="alert"
          >
            The organization appearance could not be saved.
          </p>
        ) : null}
      </section>
    </div>
  );
}


