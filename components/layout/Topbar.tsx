"use client";

import { UserButton } from "@clerk/nextjs";
import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
        <Search className="h-4 w-4 text-gray-400" />

        <input
          placeholder="Search agents, policies, incidents..."
          className="w-72 text-sm outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>

        <UserButton />
      </div>
    </header>
  );
}