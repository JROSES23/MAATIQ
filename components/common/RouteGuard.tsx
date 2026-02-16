"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Role } from "@/lib/types";

export function RouteGuard({ role, children }: { role: Role; children: React.ReactNode }): JSX.Element | null {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.replace("/login");
      return;
    }
    if (currentUser.rol !== role) {
      router.replace(`/${currentUser.rol}/dashboard`);
    }
  }, [currentUser, role, router]);

  if (!currentUser || currentUser.rol !== role) return null;
  return <>{children}</>;
}
