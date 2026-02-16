import { AlertTriangle, CircleDashed, ShieldCheck, Users } from "lucide-react";
import { KpiCard } from "@/components/charts/KpiCard";

interface DirectorKpisProps {
  alto: number;
  medio: number;
  bajo: number;
  tutoriasActivas: number;
}

export function DirectorKpis({ alto, medio, bajo, tutoriasActivas }: DirectorKpisProps): JSX.Element {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <KpiCard title="Estudiantes Riesgo Alto" value={alto} change="+2.4%" icon={AlertTriangle} color="#EF4444" />
      <KpiCard title="Estudiantes Riesgo Medio" value={medio} change="-1.1%" icon={CircleDashed} color="#F59E0B" />
      <KpiCard title="Estudiantes Riesgo Bajo" value={bajo} change="+3.1%" icon={ShieldCheck} color="#10B981" />
      <KpiCard title="Tutorías Activas" value={tutoriasActivas} change="+12%" icon={Users} color="#3B82F6" />
    </div>
  );
}
