"use client";

import { useState } from "react";
import { Topbar } from "@/components/common/Topbar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StudentProgressCard } from "@/components/roles/StudentProgressCard";
import { courses, upcomingTasks, tutoringSessions, students } from "@/lib/mock-data";
import { useAuth } from "@/lib/auth-context";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function EstudianteDashboardPage(): JSX.Element {
  const { currentUser } = useAuth();
  const [tab, setTab] = useState<"Como Tutor" | "Como Tutorado">("Como Tutor");
  const student = students.find((item) => item.id === currentUser?.id) ?? students[0];

  const zone = student.riskCategory === "alto" ? "Zona Roja" : student.riskCategory === "medio" ? "Zona Amarilla" : "Zona Verde";
  const zoneClass = student.riskCategory === "alto" ? "bg-red-500" : student.riskCategory === "medio" ? "bg-amber-500" : "bg-emerald-500";

  const approval = student.riskCategory === "alto" ? "Baja" : student.riskCategory === "medio" ? "Media" : "Alta";
  const donutData = [
    { name: "riesgo", value: student.riskScore, color: "#EF4444" },
    { name: "seguro", value: 100 - student.riskScore, color: "#10B981" }
  ];

  const myCourses = courses.filter((course) => course.id === student.cursoId);

  return (
    <div className="space-y-6">
      <Topbar title={`Hola, ${student.nombre}`} />
      <div className="card-modern flex items-center justify-between">
        <p className="text-lg font-semibold text-slate-700">Estado actual</p>
        <Badge className={`${zoneClass} text-white`}>{zone}</Badge>
      </div>
      <Card>
        <h3 className="mb-2 text-lg font-semibold">Tu probabilidad de aprobar: {approval}</h3>
        <div className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={donutData} dataKey="value" innerRadius={50} outerRadius={80}>
                {donutData.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {myCourses.map((course) => (
          <StudentProgressCard key={course.id} curso={course.nombre} progreso={student.tareasCompletadasPct} promedio={student.promedio} />
        ))}
      </div>
      <Card className="space-y-3">
        <h3 className="text-lg font-semibold">Próximas tareas</h3>
        {upcomingTasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between rounded-2xl bg-slate-50 p-3 text-sm">
            <span>{task.titulo}</span>
            <span>{task.fecha}</span>
          </div>
        ))}
      </Card>
      <Card className="space-y-3">
        <div className="flex gap-2">
          <button className={`rounded-2xl px-3 py-2 text-sm ${tab === "Como Tutor" ? "bg-blue-500 text-white" : "bg-slate-100"}`} onClick={() => setTab("Como Tutor")}>Como Tutor</button>
          <button className={`rounded-2xl px-3 py-2 text-sm ${tab === "Como Tutorado" ? "bg-blue-500 text-white" : "bg-slate-100"}`} onClick={() => setTab("Como Tutorado")}>Como Tutorado</button>
        </div>
        {tutoringSessions
          .filter((session) => (tab === "Como Tutor" ? session.tutorId === student.id : session.tutoradoId === student.id))
          .slice(0, 3)
          .map((session) => (
            <div key={session.id} className="rounded-2xl bg-slate-50 p-3 text-sm">Sesión {session.id} - {session.fecha} ({session.status})</div>
          ))}
      </Card>
    </div>
  );
}
