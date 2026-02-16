import { Topbar } from "@/components/common/Topbar";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { courses } from "@/lib/mock-data";

export default function ProfesorDashboardPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <Topbar title="Dashboard Profesor" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id}>
            <p className="text-lg font-semibold">{course.nombre}</p>
            <p className="text-sm text-slate-500">{course.materia}</p>
            <Link className="mt-3 inline-block text-sm font-semibold text-blue-600" href={`/profesor/${course.id}`}>Abrir curso</Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
