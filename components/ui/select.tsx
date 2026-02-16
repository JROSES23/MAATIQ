import { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>): JSX.Element {
  return (
    <select className={cn("rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm", className)} {...props}>
      {children}
    </select>
  );
}
