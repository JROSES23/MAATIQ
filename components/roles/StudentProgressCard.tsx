import { Card } from "@/components/ui/card";

interface StudentProgressCardProps {
  curso: string;
  progreso: number;
  promedio: number;
}

export function StudentProgressCard({ curso, progreso, promedio }: StudentProgressCardProps): JSX.Element {
  return (
    <Card className="min-w-[250px] space-y-2">
      <p className="font-semibold text-slate-700">{curso}</p>
      <p className="text-sm text-slate-500">Progreso: {progreso}%</p>
      <div className="h-2 rounded-full bg-slate-100">
        <div className="h-2 rounded-full bg-blue-500" style={{ width: `${progreso}%` }} />
      </div>
      <p className="text-sm text-slate-500">Promedio: {promedio.toFixed(1)}</p>
    </Card>
  );
}
