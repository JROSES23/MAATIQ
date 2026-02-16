import { Topbar } from "@/components/common/Topbar";
import { Card } from "@/components/ui/card";
import { students, tutoringSessions } from "@/lib/mock-data";

export default function DirectorTutoriasPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <Topbar title="Tutorías entre pares" />
      <Card className="space-y-3">
        {tutoringSessions.map((session) => {
          const tutor = students.find((student) => student.id === session.tutorId);
          const tutorado = students.find((student) => student.id === session.tutoradoId);
          return (
            <div key={session.id} className="flex items-center justify-between rounded-2xl bg-slate-50 p-3 text-sm">
              <span>{tutor?.nombre} → {tutorado?.nombre}</span>
              <span>{session.status}</span>
            </div>
          );
        })}
      </Card>
    </div>
  );
}
