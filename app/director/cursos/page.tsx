import Link from "next/link";
import { Topbar } from "@/components/common/Topbar";
import { Card } from "@/components/ui/card";
import { courses, getCourseRisk } from "@/lib/mock-data";

export default function DirectorCursosPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <Topbar title="Cursos" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="space-y-2">
            <p className="text-lg font-semibold">{course.nombre}</p>
            <p className="text-sm text-slate-500">Profesor: {course.profesorId}</p>
            <p className="text-sm text-slate-500">Riesgo promedio: {getCourseRisk(course.id)}</p>
            <Link href={`/director/cursos/${course.id}`} className="text-sm font-semibold text-blue-600">Ver curso</Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
