"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, ChartLine, Handshake, Settings, User, Menu } from "lucide-react";
import { Role } from "@/lib/types";
import { cn } from "@/lib/utils";
import { courses } from "@/lib/mock-data";
import { ComponentType, useState } from "react";

interface SidebarProps {
  role: Role;
}

const linksByRole: Record<Role, { href: string; label: string; icon: ComponentType<{ className?: string }> }[]> = {
  director: [
    { href: "/director/dashboard", label: "Dashboard", icon: ChartLine },
    { href: "/director/cursos", label: "Cursos", icon: BookOpen },
    { href: "/director/tutorias", label: "Tutorías", icon: Handshake },
    { href: "/director/configuracion", label: "Configuración", icon: Settings }
  ],
  profesor: [
    { href: "/profesor/dashboard", label: "Dashboard", icon: ChartLine },
    { href: `/profesor/${courses[0]?.id ?? "c1"}`, label: "Mi Curso", icon: BookOpen },
    { href: "/profesor/tutorias", label: "Tutorías", icon: Handshake }
  ],
  estudiante: [
    { href: "/estudiante/dashboard", label: "Dashboard", icon: ChartLine },
    { href: "/estudiante/mis-cursos", label: "Mis Cursos", icon: BookOpen },
    { href: "/estudiante/tutorias", label: "Tutorías", icon: Handshake },
    { href: "/estudiante/progreso", label: "Progreso", icon: User }
  ]
};

export function Sidebar({ role }: SidebarProps): JSX.Element {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="fixed left-4 top-4 z-50 rounded-xl bg-slate-800 p-2 text-white md:hidden" onClick={() => setOpen(!open)}>
        <Menu className="h-5 w-5" />
      </button>
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform bg-slate-800 p-5 text-white transition-transform md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <h2 className="mb-8 mt-8 text-2xl font-bold md:mt-0">MAATIQ</h2>
        <nav className="space-y-2">
          {linksByRole[role].map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition-colors",
                  active ? "bg-blue-500 text-white" : "text-slate-200 hover:bg-slate-700"
                )}
                onClick={() => setOpen(false)}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
