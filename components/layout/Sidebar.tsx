import Link from "next/link";
import {
  Boxes,
  Gauge,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const navigation = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "System",
    icon: Gauge,
    children: ["Health"],
  },
  {
    label: "Workspace",
    icon: Boxes,
    disabled: true,
  },
  {
    label: "Identity & access",
    icon: ShieldCheck,
    disabled: true,
  },
];

export function Sidebar() {
  return (
    <aside className="hidden w-[272px] shrink-0 border-r border-[#31445f] bg-[#1d2a3f] lg:flex lg:flex-col">
      <div className="flex h-[76px] items-center gap-3 border-b border-[#30425d] px-6">
        <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#b8e2f3] bg-[#edf8fc]">
          <Sparkles className="h-5 w-5 text-[#168fca]" />
        </div>

        <div>
          <div className="text-[15px] font-bold tracking-[0.2em] text-white">
            AIGO-OS
          </div>

          <div className="mt-0.5 text-xs text-[#d7e0eb]">
            Intelligence control plane
          </div>
        </div>
      </div>

      <div className="px-4 py-5">
        <div className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b5c5d8]">
          Platform
        </div>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label}>
                <div
                  className={[
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition",
                    item.active
                      ? "border border-[#4c7795] bg-[#294c69] text-white"
                      : "text-[#f1f5f9] hover:bg-[#2a3d57]",
                    item.disabled ? "opacity-75" : "",
                  ].join(" ")}
                >
                  <Icon className="h-[18px] w-[18px] shrink-0" />

                  <span className="flex-1 font-medium">
                    {item.label}
                  </span>

                  {item.disabled ? (
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-[#c4cfdd]">
                      Soon
                    </span>
                  ) : null}
                </div>

                {item.children ? (
                  <div className="ml-[21px] mt-1 border-l border-[#536a86] pl-5">
                    <Link
                      href="/status"
                      className="block rounded-lg px-2 py-2 text-sm font-medium text-white transition hover:bg-[#2a3d57] hover:text-[#9eeaff]"
                    >
                      Health
                    </Link>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto border-t border-[#30425d] p-4">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white transition hover:bg-[#2a3d57]"
        >
          <Settings className="h-[18px] w-[18px]" />
          Platform settings
        </button>

        <div className="mt-3 rounded-xl border border-[#455b76] bg-[#23344d] p-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#32d39b]" />

            <span className="text-xs font-semibold text-white">
              Local environment
            </span>
          </div>

          <p className="mt-2 text-[11px] leading-5 text-[#d5deea]">
            Isolated from Demo and Production.
          </p>
        </div>
      </div>
    </aside>
  );
}
