"use client";

import { useQuery } from "@tanstack/react-query";
import {
  AlertCircle,
  FileSearch,
  LoaderCircle,
  Search,
} from "lucide-react";
import Link from "next/link";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useAuthentication } from "../../../providers/authentication-provider";
import { useTenant } from "../../../providers/tenant-provider";
import {
  searchCustomerConsole,
  type CustomerSearchResult,
} from "../../../../lib/api/customer-search";

function formatDate(value: string | null): string {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
  }).format(date);
}

function resultTypeLabel(value: string): string {
  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (character) =>
      character.toUpperCase(),
    );
}

function SearchResultCard({
  result,
}: {
  result: CustomerSearchResult;
}) {
  return (
    <Link
      className="block rounded-2xl border p-5"
      href={result.href}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide opacity-55">
            {resultTypeLabel(result.resultType)}
          </p>

          <h3 className="mt-2 font-semibold">
            {result.title}
          </h3>
        </div>

        {result.createdAt ? (
          <span className="text-xs opacity-55">
            {formatDate(result.createdAt)}
          </span>
        ) : null}
      </div>

      {result.description ? (
        <p className="mt-3 text-sm opacity-65">
          {result.description}
        </p>
      ) : null}
    </Link>
  );
}

export default function CustomerSearchPage() {
  const authentication = useAuthentication();
  const { tenantId, workspaceId } = useTenant();

  const [inputValue, setInputValue] = useState("");
  const [debouncedQuery, setDebouncedQuery] =
    useState("");

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setDebouncedQuery(inputValue.trim());
    }, 300);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [inputValue]);

  const enabled =
    authentication.isLoaded &&
    authentication.isAuthenticated &&
    Boolean(authentication.accessToken) &&
    Boolean(tenantId) &&
    debouncedQuery.length >= 2;

  const searchQuery = useQuery({
    queryKey: [
      "customer",
      "search",
      tenantId,
      workspaceId,
      debouncedQuery,
    ],
    queryFn: () =>
      searchCustomerConsole(debouncedQuery),
    enabled,
  });

  const groupedResults = useMemo(() => {
    const groups = new Map<
      string,
      CustomerSearchResult[]
    >();

    for (const result of searchQuery.data?.results ??
      []) {
      const existing =
        groups.get(result.resultType) ?? [];

      existing.push(result);
      groups.set(result.resultType, existing);
    }

    return Array.from(groups.entries());
  }, [searchQuery.data?.results]);

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border p-8">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl border p-4">
            <Search
              aria-hidden="true"
              className="size-6"
            />
          </div>

          <div>
            <p className="text-sm font-medium opacity-65">
              Tenant-aware discovery
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Search
            </h2>

            <p className="mt-3 max-w-2xl opacity-70">
              Search roles, permissions, profiles,
              invitations, and tenant audit activity.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border p-6">
        <label
          className="text-sm font-medium"
          htmlFor="customer-search"
        >
          Search customer console
        </label>

        <div className="mt-3 flex items-center gap-3 rounded-xl border px-4">
          <Search
            aria-hidden="true"
            className="size-5 opacity-55"
          />

          <input
            className="w-full bg-transparent py-3 outline-none"
            id="customer-search"
            onChange={(event) =>
              setInputValue(event.target.value)
            }
            placeholder="Search by name, email, role, permission, event..."
            type="search"
            value={inputValue}
          />
        </div>

        <p className="mt-2 text-xs opacity-55">
          Enter at least two characters.
        </p>
      </section>

      {searchQuery.isLoading ? (
        <div className="flex items-center gap-3 rounded-2xl border p-6">
          <LoaderCircle
            aria-hidden="true"
            className="size-5 animate-spin"
          />
          <span>Searching...</span>
        </div>
      ) : null}

      {searchQuery.isError ? (
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
                Search could not be completed
              </h3>

              <p className="mt-2 text-sm opacity-65">
                Confirm the API is running and your role
                has search access.
              </p>

              <button
                className="mt-4 rounded-lg border px-4 py-2 text-sm"
                onClick={() => {
                  void searchQuery.refetch();
                }}
                type="button"
              >
                Try again
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {debouncedQuery.length >= 2 &&
      !searchQuery.isLoading &&
      !searchQuery.isError &&
      searchQuery.data?.total === 0 ? (
        <section className="rounded-2xl border p-10 text-center">
          <FileSearch
            aria-hidden="true"
            className="mx-auto size-8 opacity-40"
          />

          <h3 className="mt-4 font-semibold">
            No results found
          </h3>

          <p className="mt-2 text-sm opacity-65">
            No customer-console records matched “
            {debouncedQuery}”.
          </p>
        </section>
      ) : null}

      {groupedResults.map(([type, results]) => (
        <section
          className="rounded-2xl border"
          key={type}
        >
          <div className="border-b p-6">
            <h2 className="text-lg font-semibold">
              {resultTypeLabel(type)}
            </h2>

            <p className="mt-1 text-sm opacity-65">
              {results.length} result
              {results.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-2">
            {results.map((result) => (
              <SearchResultCard
                key={`${result.resultType}:${result.id}`}
                result={result}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
