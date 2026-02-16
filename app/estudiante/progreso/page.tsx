import { Topbar } from "@/components/common/Topbar";
import { Card } from "@/components/ui/card";

export default function EstudianteProgresoPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <Topbar title="Progreso" />
      <Card>Visualización de rendimiento histórico y recomendaciones.</Card>
    </div>
  );
}
