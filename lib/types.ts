export type Role = "director" | "profesor" | "estudiante";
export type RiskCategory = "bajo" | "medio" | "alto";

export interface User {
  id: string;
  nombre: string;
  rol: Role;
}

export interface Course {
  id: string;
  nombre: string;
  nivel: string;
  materia: string;
  profesorId: string;
  estudiantesIds: string[];
}

export interface Student {
  id: string;
  nombre: string;
  cursoId: string;
  promedio: number;
  asistencia: number;
  diasSinLogin: number;
  tareasCompletadasPct: number;
  riskScore: number;
  riskCategory: RiskCategory;
}

export interface Grade {
  id: string;
  estudianteId: string;
  cursoId: string;
  fecha: string;
  tipo: "prueba" | "quiz" | "tarea";
  puntaje: number;
  maxPuntaje: number;
}

export interface WeeklyActivity {
  week: string;
  loginsDiariosProm: number;
  minutosActivosProm: number;
  recursosVistos: number;
  riesgoAltoPct: number;
}

export interface TutoringSession {
  id: string;
  tutorId: string;
  tutoradoId: string;
  cursoId: string;
  status: "activa" | "completada";
  fecha: string;
}

export interface UpcomingTask {
  id: string;
  estudianteId: string;
  titulo: string;
  fecha: string;
  estado: "pendiente" | "en progreso";
}
