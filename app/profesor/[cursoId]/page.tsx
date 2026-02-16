import { Topbar } from "@/components/common/Topbar";
import { ProfessorStudentTable } from "@/components/roles/ProfessorStudentTable";
import { courses, students } from "@/lib/mock-data";

export default function ProfesorCursoPage({ params }: { params: { cursoId: string } }): JSX.Element {
  const course = courses.find((item) => item.id === params.cursoId);
  const courseStudents = students.filter((student) => student.cursoId === params.cursoId);

  return (
    <div className="space-y-6">
      <Topbar title={`Dashboard > Curso ${course?.nombre ?? params.cursoId}`} />
      <ProfessorStudentTable students={courseStudents} cursoId={params.cursoId} />
    </div>
  );
}
