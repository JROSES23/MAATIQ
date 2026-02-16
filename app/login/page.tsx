"use client";

import { useRouter } from "next/navigation";
import { ComponentType, useEffect } from "react";
import { GraduationCap, User, UserCog } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { Role } from "@/lib/types";

const roles: { role: Role; label: string; icon: ComponentType<{ className?: string }> }[] = [
  { role: "director", label: "Entrar como Director", icon: UserCog },
  { role: "profesor", label: "Entrar como Profesor", icon: GraduationCap },
  { role: "estudiante", label: "Entrar como Estudiante", icon: User }
];

export default function LoginPage(): JSX.Element {
  const { currentUser, setRole } = useAuth();
  const router = useRouter();


  useEffect(() => {
    if (currentUser) {
      router.replace(`/${currentUser.rol}/dashboard`);
    }
  }, [currentUser, router]);

  const handleLogin = (role: Role): void => {
    setRole(role);
    router.push(`/${role}/dashboard`);
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center p-6">
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-slate-800">MAATIQ</h1>
        <p className="mt-2 text-slate-700">Analítica predictiva para éxito académico</p>
      </div>
      <div className="grid w-full gap-6 md:grid-cols-3">
        {roles.map(({ role, label, icon: Icon }) => (
          <button
            key={role}
            onClick={() => handleLogin(role)}
            className="card-modern flex h-48 flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-1"
          >
            <Icon className="h-11 w-11 text-blue-600" />
            <span className="text-lg font-semibold text-slate-700">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
