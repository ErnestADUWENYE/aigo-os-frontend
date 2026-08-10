"use client";

import {
  ImagePlus,
  LoaderCircle,
  RotateCcw,
  Save,
  Upload,
} from "lucide-react";
import Image from "next/image";
import {
  type ChangeEvent,
  useState,
} from "react";

import { useCustomerBranding } from "../../../app/hooks/use-customer-branding";


const MAX_LOGO_BYTES = 5 * 1024 * 1024;

const ALLOWED_LOGO_TYPES = new Set([
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/svg+xml",
]);


export function BrandingPanel({
  fallbackName,
}: {
  fallbackName: string;
}) {
  const branding = useCustomerBranding();

  const [displayNameOverride, setDisplayNameOverride] =
    useState<string | null>(null);
  const [altTextOverride, setAltTextOverride] =
    useState<string | null>(null);

  const displayName =
    displayNameOverride ??
    branding.data?.organizationDisplayName ??
    fallbackName;

  const altText =
    altTextOverride ??
    branding.data?.organizationLogoAltText ??
    "";
  const [file, setFile] =
    useState<File | null>(null);
  const [previewUrl, setPreviewUrl] =
    useState<string | null>(null);
  const [validationError, setValidationError] =
    useState<string | null>(null);
  const [message, setMessage] =
    useState<string | null>(null);

  const selectFile = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const selected =
      event.target.files?.[0] ?? null;

    setValidationError(null);
    setMessage(null);

    if (!selected) {
      return;
    }

    if (!ALLOWED_LOGO_TYPES.has(selected.type)) {
      setValidationError(
        "Use PNG, JPEG, WebP, or SVG.",
      );

      event.target.value = "";
      return;
    }

    if (selected.size > MAX_LOGO_BYTES) {
      setValidationError(
        "Logo must be 5 MB or smaller.",
      );

      event.target.value = "";
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setFile(selected);
    setPreviewUrl(
      URL.createObjectURL(selected),
    );
  };

  const saveBranding = async () => {
    setValidationError(null);
    setMessage(null);

    try {
      await branding.updateBranding({
        organizationDisplayName:
          displayName.trim() || null,
        organizationLogoAltText:
          altText.trim() || null,
      });

      setMessage("Branding settings saved.");
    } catch {
      setValidationError(
        "Branding settings could not be saved.",
      );
    }
  };

  const uploadLogo = async () => {
    if (!file) {
      return;
    }

    setValidationError(null);
    setMessage(null);

    try {
      await branding.uploadLogo({
        file,
        altText:
          altText.trim() || null,
      });

      setFile(null);

      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }

      setPreviewUrl(null);
      setMessage("Organization logo uploaded.");
    } catch {
      setValidationError(
        "Logo upload failed.",
      );
    }
  };

  const resetPreview = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setPreviewUrl(null);
    setFile(null);
    setValidationError(null);
  };

  if (branding.isLoading) {
    return (
      <section className="rounded-2xl border p-6">
        <div className="flex items-center gap-2 text-sm opacity-65">
          <LoaderCircle
            aria-hidden="true"
            className="size-4 animate-spin"
          />

          Loading branding...
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border">
      <div className="border-b p-6">
        <div className="flex items-center gap-2">
          <ImagePlus
            aria-hidden="true"
            className="size-5"
          />

          <h2 className="text-lg font-semibold">
            Organization branding
          </h2>
        </div>

        <p className="mt-2 max-w-2xl text-sm opacity-65">
          Identify your organization inside AIGO while
          preserving AIGO as the product identity.
        </p>
      </div>

      <div className="grid gap-8 p-6 xl:grid-cols-[320px_minmax(0,1fr)]">
        <div>
          <p className="text-sm font-medium">
            Logo preview
          </p>

          <div className="mt-3 flex min-h-48 items-center justify-center overflow-hidden rounded-2xl border p-6">
            {previewUrl ? (
              <Image
                alt={
                  altText.trim() ||
                  `${displayName || fallbackName} logo`
                }
                className="max-h-36 max-w-full object-contain"
                height={144}
                src={previewUrl}
                unoptimized
                width={288}
              />
            ) : (
              <div className="text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border text-xl font-semibold">
                  A
                </div>

                <p className="mt-3 text-sm font-medium">
                  AIGO identity
                </p>

                <p className="mt-1 text-xs opacity-55">
                  Customer logo not previewed
                </p>
              </div>
            )}
          </div>

          <label className="mt-4 flex cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium">
            <Upload
              aria-hidden="true"
              className="size-4"
            />

            Choose logo

            <input
              accept=".png,.jpg,.jpeg,.webp,.svg,image/png,image/jpeg,image/webp,image/svg+xml"
              className="sr-only"
              onChange={selectFile}
              type="file"
            />
          </label>

          <p className="mt-2 text-xs opacity-55">
            PNG, JPEG, WebP or SVG. Maximum 5 MB.
          </p>

          {file ? (
            <div className="mt-3 flex gap-2">
              <button
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm disabled:opacity-50"
                disabled={branding.isUploading}
                onClick={() => {
                  void uploadLogo();
                }}
                type="button"
              >
                {branding.isUploading ? (
                  <LoaderCircle
                    aria-hidden="true"
                    className="size-4 animate-spin"
                  />
                ) : (
                  <Upload
                    aria-hidden="true"
                    className="size-4"
                  />
                )}

                Upload
              </button>

              <button
                aria-label="Clear logo preview"
                className="rounded-lg border p-2"
                onClick={resetPreview}
                type="button"
              >
                <RotateCcw
                  aria-hidden="true"
                  className="size-4"
                />
              </button>
            </div>
          ) : null}
        </div>

        <div className="min-w-0 space-y-5">
          <div>
            <label
              className="text-sm font-medium"
              htmlFor="organization-display-name"
            >
              Organization display name
            </label>

            <input
              className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2"
              id="organization-display-name"
              maxLength={200}
              onChange={(event) => {
                setDisplayNameOverride(event.target.value);
              }}
              value={displayName}
            />

            <p className="mt-2 text-xs opacity-55">
              Displayed as tenant identity inside AIGO.
            </p>
          </div>

          <div>
            <label
              className="text-sm font-medium"
              htmlFor="organization-logo-alt-text"
            >
              Logo alt text
            </label>

            <input
              className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2"
              id="organization-logo-alt-text"
              maxLength={500}
              onChange={(event) => {
                setAltTextOverride(event.target.value);
              }}
              placeholder={`${displayName || fallbackName} logo`}
              value={altText}
            />

            <p className="mt-2 text-xs opacity-55">
              Accessible description of the organization logo.
            </p>
          </div>

          {branding.data?.organizationLogoAssetId ? (
            <div className="rounded-xl border p-4 text-sm">
              <p className="font-medium">
                Current logo
              </p>

              <p className="mt-1 break-all text-xs opacity-55">
                Asset:{" "}
                {branding.data.organizationLogoAssetId}
              </p>
            </div>
          ) : (
            <div className="rounded-xl border p-4 text-sm">
              <p className="font-medium">
                AIGO fallback active
              </p>

              <p className="mt-1 opacity-60">
                No organization logo has been assigned yet.
              </p>
            </div>
          )}

          {validationError ? (
            <p
              className="text-sm"
              role="alert"
            >
              {validationError}
            </p>
          ) : null}

          {message ? (
            <p
              className="text-sm"
              role="status"
            >
              {message}
            </p>
          ) : null}

          <button
            className="flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium disabled:opacity-50"
            disabled={branding.isSaving}
            onClick={() => {
              void saveBranding();
            }}
            type="button"
          >
            {branding.isSaving ? (
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

            Save branding
          </button>
        </div>
      </div>
    </section>
  );
}


