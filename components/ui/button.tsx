import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
  danger: "bg-red-500 text-white hover:bg-red-600"
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base"
};

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(
        "rounded-2xl font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}
