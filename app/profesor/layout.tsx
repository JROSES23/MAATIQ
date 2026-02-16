import { DashboardLayout } from "@/components/common/DashboardLayout";
import { RouteGuard } from "@/components/common/RouteGuard";

export default function ProfesorLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <RouteGuard role="profesor">
      <DashboardLayout role="profesor">{children}</DashboardLayout>
    </RouteGuard>
  );
}
