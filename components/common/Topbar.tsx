"use client";

import { Bell, Search } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Select } from "@/components/ui/select";
import { useAuth } from "@/lib/auth-context";

interface TopbarProps {
  title: string;
  showPeriod?: boolean;
}

export function Topbar({ title, showPeriod = false }: TopbarProps): JSX.Element {
  const { currentUser } = useAuth();

  return (
    <header className="card-modern flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        {showPeriod && (
          <Select>
            <option>Último mes</option>
            <option>Último trimestre</option>
            <option>Año académico</option>
          </Select>
        )}
        <div className="hidden items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2 md:flex">
          <Search className="h-4 w-4 text-slate-500" />
          <span className="text-sm text-slate-500">Buscar...</span>
        </div>
        <button className="rounded-xl bg-slate-100 p-2">
          <Bell className="h-4 w-4 text-slate-600" />
        </button>
        <Avatar name={currentUser?.nombre ?? "Usuario"} />
      </div>
    </header>
  );
}
