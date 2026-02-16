import { Topbar } from "@/components/common/Topbar";
import { Card } from "@/components/ui/card";
import { courses, students } from "@/lib/mock-data";

export default function DirectorCursoDetallePage({ params }: { params: { cursoId: string } }): JSX.Element {
  const course = courses.find((item) => item.id === params.cursoId);
  const courseStudents = students.filter((student) => student.cursoId === params.cursoId);

  if (!course) return <div className="card-modern">Curso no encontrado.</div>;

  return (
    <div className="space-y-6">
      <Topbar title={`Detalle ${course.nombre}`} />
      <Card>
        <p className="text-lg font-semibold">{course.nombre}</p>
        <p className="text-slate-600">Total estudiantes: {courseStudents.length}</p>
      </Card>
    </div>
  );
}
