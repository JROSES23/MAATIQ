import { LucideIcon, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

interface KpiCardProps {
  title: string;
  value: string | number;
  change: string;
  icon: LucideIcon;
  color: string;
}

export function KpiCard({ title, value, change, icon: Icon, color }: KpiCardProps): JSX.Element {
  return (
    <Card className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="rounded-2xl p-3" style={{ backgroundColor: `${color}20` }}>
          <Icon className="h-6 w-6" style={{ color }} />
        </div>
        <div className="flex items-center gap-1 text-xs text-emerald-600">
          <TrendingUp className="h-3 w-3" />
          {change}
        </div>
      </div>
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <p className="text-4xl font-bold text-slate-800">{value}</p>
      </div>
    </Card>
  );
}
