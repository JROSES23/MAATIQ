"use client";

import { ResponsiveContainer, LineChart as RLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Area } from "recharts";

interface LineChartProps {
  data: Record<string, string | number>[];
  xKey: string;
  yKey: string;
  color: string;
}

export function LineChart({ data, xKey, yKey, color }: LineChartProps): JSX.Element {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <RLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey={yKey} stroke="none" fill={color} fillOpacity={0.16} />
        <Line type="monotone" dataKey={yKey} stroke={color} strokeWidth={3} dot={{ r: 3 }} />
      </RLineChart>
    </ResponsiveContainer>
  );
}
