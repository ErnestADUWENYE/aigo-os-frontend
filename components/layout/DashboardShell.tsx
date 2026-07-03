import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />

      <div className="lg:ml-72">
        <Topbar />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}