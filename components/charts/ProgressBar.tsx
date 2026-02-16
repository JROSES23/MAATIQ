interface ProgressBarProps {
  value: number;
  color?: string;
}

export function ProgressBar({ value, color = "#EF4444" }: ProgressBarProps): JSX.Element {
  return (
    <div className="h-2 w-full rounded-full bg-slate-100">
      <div className="h-2 rounded-full" style={{ width: `${Math.min(100, value)}%`, backgroundColor: color }} />
    </div>
  );
}
