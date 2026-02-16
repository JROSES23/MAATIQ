"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { RiskBadge } from "@/components/charts/RiskBadge";
import { Select } from "@/components/ui/select";
import { Student } from "@/lib/types";
import { Table } from "@/components/ui/table";

export function ProfessorStudentTable({ students, cursoId }: { students: Student[]; cursoId: string }): JSX.Element {
  const [filter, setFilter] = useState("Todos");

  const filtered = useMemo(() => {
    const mapped = [...students].sort((a, b) => b.riskScore - a.riskScore);
    if (filter === "Todos") return mapped;
    return mapped.filter((student) => student.riskCategory === filter.toLowerCase());
  }, [students, filter]);

  return (
    <div className="card-modern space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Estudiantes del Curso</h3>
        <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>Todos</option>
          <option>Alto</option>
          <option>Medio</option>
          <option>Bajo</option>
        </Select>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <thead>
            <tr className="text-left text-sm text-slate-500">
              <th className="px-3 py-2">Avatar</th><th className="px-3 py-2">Nombre</th><th className="px-3 py-2">Risk Score</th><th className="px-3 py-2">Promedio</th><th className="px-3 py-2">Días sin login</th><th className="px-3 py-2">% Tareas</th><th className="px-3 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((student, idx) => (
              <tr key={student.id} className={`border-t text-sm ${idx % 2 === 0 ? "bg-slate-50/70" : "bg-white"} hover:bg-blue-50`}>
                <td className="px-3 py-3"><Avatar name={student.nombre} /></td>
                <td className="px-3 py-3 font-medium">{student.nombre}</td>
                <td className="px-3 py-3"><RiskBadge score={student.riskScore} /></td>
                <td className="px-3 py-3">{student.promedio.toFixed(1)}</td>
                <td className="px-3 py-3">{student.diasSinLogin}</td>
                <td className="px-3 py-3">{student.tareasCompletadasPct}%</td>
                <td className="px-3 py-3">
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="secondary">Notificar</Button>
                    <Link href={`/profesor/${cursoId}/${student.id}`}><Button size="sm">Ver detalle</Button></Link>
                    <Button size="sm" variant="danger">Asignar tutor</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
