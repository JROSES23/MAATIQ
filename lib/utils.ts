import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export function toRiskCategory(score: number): "bajo" | "medio" | "alto" {
  if (score > 75) return "alto";
  if (score >= 40) return "medio";
  return "bajo";
}

export function riskColorClass(category: "bajo" | "medio" | "alto"): string {
  if (category === "alto") return "bg-red-500";
  if (category === "medio") return "bg-amber-500";
  return "bg-emerald-500";
}
