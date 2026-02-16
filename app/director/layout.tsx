import { DashboardLayout } from "@/components/common/DashboardLayout";
import { RouteGuard } from "@/components/common/RouteGuard";

export default function DirectorLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <RouteGuard role="director">
      <DashboardLayout role="director">{children}</DashboardLayout>
    </RouteGuard>
  );
}
