import { DashboardLayout } from "@/components/common/DashboardLayout";
import { RouteGuard } from "@/components/common/RouteGuard";

export default function EstudianteLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <RouteGuard role="estudiante">
      <DashboardLayout role="estudiante">{children}</DashboardLayout>
    </RouteGuard>
  );
}
