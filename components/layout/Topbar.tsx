import { publicEnvironment } from "@/lib/config/environment";

import {
  Bell,
  ChevronDown,
  CircleHelp,
  Menu,
} from "lucide-react";

export function Topbar() {
  return (
    <header className="aigo-dark-header flex h-[76px] items-center justify-between border-b border-[#33445e] bg-[#24334b] px-5 md:px-8">
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Open navigation"
          className="grid h-9 w-9 place-items-center rounded-lg border border-[#526780] text-white lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-[#c6d2e1]">AIGO-OS</span>
          <span className="text-[#8296af]">/</span>
          <span className="font-medium text-white">
            Platform overview
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="mr-2 hidden items-center gap-2 rounded-lg border border-[#376882] bg-[#213d56] px-3 py-2 md:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2caedc]" />

          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9ce6fb]">
            {publicEnvironment.name}
          </span>
        </div>

        <button
          type="button"
          aria-label="Help"
          className="grid h-9 w-9 place-items-center rounded-lg text-[#d4deea] transition hover:bg-[#30435e] hover:text-white"
        >
          <CircleHelp className="h-[18px] w-[18px]" />
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="grid h-9 w-9 place-items-center rounded-lg text-[#d4deea] transition hover:bg-[#30435e] hover:text-white"
        >
          <Bell className="h-[18px] w-[18px]" />
        </button>

        <button
          type="button"
          aria-label="Account menu"
          className="ml-1 flex items-center gap-2 rounded-lg border border-[#40536c] bg-[#2b3d57] px-2 py-1.5"
        >
          <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-[#55c8ed] to-[#1768a7] text-[10px] font-black text-white">
            AO
          </div>

          <ChevronDown className="hidden h-3.5 w-3.5 text-[#d6e0eb] sm:block" />
        </button>
      </div>
    </header>
  );
}
