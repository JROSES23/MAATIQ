import { Topbar } from "@/components/common/Topbar";
import { Card } from "@/components/ui/card";

export default function EstudianteTutoriasPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <Topbar title="Mis tutorías" />
      <Card>Agenda de sesiones y objetivos de aprendizaje.</Card>
    </div>
  );
}
