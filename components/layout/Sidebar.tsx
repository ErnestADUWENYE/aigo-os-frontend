"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  LayoutDashboard,
  Bot,
  ShieldCheck,
  ClipboardCheck,
  AlertTriangle,
  Bell,
  BarChart3,
  FileText,
  Gavel,
  Activity,
  Settings,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Agents", href: "/agents", icon: Bot },
  { label: "Policies", href: "/policies", icon: ShieldCheck },
  { label: "Reviews", href: "/reviews", icon: ClipboardCheck },
  { label: "Incidents", href: "/incidents", icon: AlertTriangle },
  { label: "Alerts", href: "/alerts", icon: Bell },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Reports", href: "/reports", icon: FileText },
  { label: "Governance", href: "/governance", icon: Gavel },
  { label: "Risk", href: "/risk", icon: Activity },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r border-gray-200 bg-white lg:flex lg:flex-col">
      <div className="border-b border-gray-200 px-6 py-5">
        <h1 className="text-xl font-bold text-gray-900">AIGO OS</h1>
        <p className="text-sm text-gray-500">AI Governance Platform</p>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                active
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}