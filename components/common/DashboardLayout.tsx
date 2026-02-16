import { Sidebar } from "@/components/common/Sidebar";
import { Role } from "@/lib/types";

interface DashboardLayoutProps {
  role: Role;
  children: React.ReactNode;
}

export function DashboardLayout({ role, children }: DashboardLayoutProps): JSX.Element {
  return (
    <div className="min-h-screen md:pl-64">
      <Sidebar role={role} />
      <main className="p-4 md:p-6">{children}</main>
    </div>
  );
}
