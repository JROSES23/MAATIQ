import { Topbar } from "@/components/common/Topbar";
import { Card } from "@/components/ui/card";

export default function ProfesorTutoriasPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <Topbar title="Tutorías de mi curso" />
      <Card>
        <p className="text-slate-600">Gestión de matching automático tutor ↔ tutorado.</p>
      </Card>
    </div>
  );
}
