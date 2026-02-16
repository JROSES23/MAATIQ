import { Topbar } from "@/components/common/Topbar";
import { Card } from "@/components/ui/card";

export default function EstudianteCursosPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <Topbar title="Mis cursos" />
      <Card>Resumen de asignaturas y progreso semanal.</Card>
    </div>
  );
}
