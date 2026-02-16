"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Role, User } from "@/lib/types";

interface AuthContextValue {
  currentUser: User | null;
  setRole: (role: Role) => void;
  logout: () => void;
}

const roleToUser: Record<Role, User> = {
  director: { id: "u-director", nombre: "Carolina Pizarro", rol: "director" },
  profesor: { id: "u-profesor", nombre: "Sebastián Núñez", rol: "profesor" },
  estudiante: { id: "s1", nombre: "Vicente Muñoz", rol: "estudiante" }
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const savedRole = window.localStorage.getItem("maatiq-role") as Role | null;
    if (savedRole && roleToUser[savedRole]) {
      setCurrentUser(roleToUser[savedRole]);
    }
  }, []);

  const setRole = (role: Role): void => {
    // TODO: Conectar con Supabase aquí
    setCurrentUser(roleToUser[role]);
    window.localStorage.setItem("maatiq-role", role);
  };

  const logout = (): void => {
    setCurrentUser(null);
    window.localStorage.removeItem("maatiq-role");
  };

  const value = useMemo(() => ({ currentUser, setRole, logout }), [currentUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
}
