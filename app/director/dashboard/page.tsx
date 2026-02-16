"use client";

import { Topbar } from "@/components/common/Topbar";
import { DirectorKpis } from "@/components/roles/DirectorKpis";
import { Card } from "@/components/ui/card";
import { LineChart } from "@/components/charts/LineChart";
import { ProgressBar } from "@/components/charts/ProgressBar";
import { courses, getCourseRisk, students, tutoringSessions, weeklyActivity } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function DirectorDashboardPage(): JSX.Element {
  const alto = students.filter((s) => s.riskCategory === "alto").length;
  const medio = students.filter((s) => s.riskCategory === "medio").length;
  const bajo = students.filter((s) => s.riskCategory === "bajo").length;
  const tutoriasActivas = tutoringSessions.filter((s) => s.status === "activa").length;

  const criticalCourses = courses
    .map((course) => ({ ...course, risk: getCourseRisk(course.id) }))
    .sort((a, b) => b.risk - a.risk)
    .slice(0, 5);

  const pieData = [
    { name: "1° medio", value: students.filter((s) => s.cursoId === "c5").length, color: "#3B82F6" },
    { name: "2° medio", value: students.filter((s) => ["c1", "c2"].includes(s.cursoId)).length, color: "#A78BFA" },
    { name: "3° medio", value: students.filter((s) => ["c3", "c4"].includes(s.cursoId)).length, color: "#0EA5E9" }
  ];

  return (
    <div className="space-y-6">
      <Topbar title="Dashboard - Analíticas Predictivas" showPeriod />
      <DirectorKpis alto={alto} medio={medio} bajo={bajo} tutoriasActivas={tutoriasActivas} />
      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <Card>
          <h3 className="mb-4 text-lg font-semibold">Evolución % riesgo alto últimas 8 semanas</h3>
          <LineChart data={weeklyActivity} xKey="week" yKey="riesgoAltoPct" color="#EF4444" />
        </Card>
        <Card className="space-y-4">
          <h3 className="text-lg font-semibold">Cursos Críticos</h3>
          {criticalCourses.map((course) => (
            <div key={course.id} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>{course.nombre}</span><span>{course.risk}%</span>
              </div>
              <ProgressBar value={course.risk} color="#EF4444" />
              <Button size="sm" variant="secondary" className="w-full">Ver detalle</Button>
            </div>
          ))}
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="mb-4 text-lg font-semibold">Distribución por nivel</h3>
          <div className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80}>
                  {pieData.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="space-y-4">
          <h3 className="text-lg font-semibold">Estadísticas Tutorías</h3>
          <div className="rounded-2xl bg-blue-50 p-4">
            <p className="text-sm text-slate-500">Tutorías realizadas mes</p>
            <p className="text-3xl font-bold text-slate-800">{tutoringSessions.filter((s) => s.status === "completada").length}</p>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-4">
            <p className="text-sm text-slate-500">Mejora promedio riesgo</p>
            <p className="text-3xl font-bold text-slate-800">18%</p>
          </div>
          {/* TODO: Reemplazar mock con modelo ML real */}
        </Card>
      </div>
    </div>
  );
}
