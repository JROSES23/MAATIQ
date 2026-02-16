import { Topbar } from "@/components/common/Topbar";
import { Card } from "@/components/ui/card";

export default function DirectorConfiguracionPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <Topbar title="Configuración" />
      <Card>
        <p className="text-slate-700">Parámetros institucionales y alertas automáticas.</p>
        {/* TODO: Conectar con Supabase aquí */}
      </Card>
    </div>
  );
}
