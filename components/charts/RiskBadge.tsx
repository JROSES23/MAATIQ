import { Badge } from "@/components/ui/badge";

export function RiskBadge({ score }: { score: number }): JSX.Element {
  const status = score > 75 ? "Alto" : score >= 40 ? "Medio" : "Bajo";
  const className = score > 75 ? "bg-red-500 text-white" : score >= 40 ? "bg-amber-500 text-white" : "bg-emerald-500 text-white";
  return <Badge className={className}>{status} ({score})</Badge>;
}
