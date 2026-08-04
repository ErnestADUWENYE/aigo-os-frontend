import { AppShell } from "@/components/layout/AppShell";
import { PlatformOverview } from "@/components/platform/PlatformOverview";

export default function Home() {
  return (
    <AppShell>
      <PlatformOverview />
    </AppShell>
  );
}
