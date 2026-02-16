import { Topbar } from "@/components/common/Topbar";
import { Card } from "@/components/ui/card";
import { grades, students } from "@/lib/mock-data";

export default function ProfesorEstudiantePage({ params }: { params: { cursoId: string; estudianteId: string } }): JSX.Element {
  const student = students.find((item) => item.id === params.estudianteId);
  const studentGrades = grades.filter((grade) => grade.estudianteId === params.estudianteId);

  return (
    <div className="space-y-6">
      <Topbar title={`Detalle estudiante: ${student?.nombre ?? params.estudianteId}`} />
      <Card className="space-y-3">
        <p className="font-semibold">Promedio: {student?.promedio.toFixed(1)}</p>
        {studentGrades.slice(0, 6).map((grade) => (
          <div key={grade.id} className="flex justify-between rounded-2xl bg-slate-50 p-2 text-sm">
            <span>{grade.tipo}</span>
            <span>{grade.puntaje}/{grade.maxPuntaje}</span>
          </div>
        ))}
      </Card>
    </div>
  );
}
