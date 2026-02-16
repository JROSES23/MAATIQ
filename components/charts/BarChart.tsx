"use client";

import { ResponsiveContainer, BarChart as RBarChart, XAxis, YAxis, Tooltip, Bar } from "recharts";

interface BarChartProps {
  data: { name: string; value: number }[];
}

export function BarChart({ data }: BarChartProps): JSX.Element {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <RBarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#3B82F6" radius={[8, 8, 0, 0]} />
      </RBarChart>
    </ResponsiveContainer>
  );
}
