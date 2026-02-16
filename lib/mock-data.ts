import { addDays, subWeeks, format } from "date-fns";
import { Course, Grade, Student, TutoringSession, UpcomingTask, WeeklyActivity } from "@/lib/types";
import { toRiskCategory } from "@/lib/utils";

export const courses: Course[] = [
  { id: "c1", nombre: "2°A Matemáticas", nivel: "2° medio", materia: "Matemáticas", profesorId: "p1", estudiantesIds: [] },
  { id: "c2", nombre: "2°B Lenguaje", nivel: "2° medio", materia: "Lenguaje", profesorId: "p2", estudiantesIds: [] },
  { id: "c3", nombre: "3°A Física", nivel: "3° medio", materia: "Física", profesorId: "p3", estudiantesIds: [] },
  { id: "c4", nombre: "3°B Historia", nivel: "3° medio", materia: "Historia", profesorId: "p4", estudiantesIds: [] },
  { id: "c5", nombre: "1°A Inglés", nivel: "1° medio", materia: "Inglés", profesorId: "p5", estudiantesIds: [] }
];

const studentSeeds = [
  "Vicente Muñoz", "Martina Rojas", "Benjamín Soto", "Florencia Díaz", "Tomás Vargas",
  "Josefa Contreras", "Matías Herrera", "Antonia Sepúlveda", "Agustín Paredes", "Isidora Fuentes",
  "Emilia Salinas", "Diego Morales", "Catalina Reyes", "Ignacio Mella", "Javiera Araya",
  "Alonso Yáñez", "Amanda Bustos", "Cristóbal Caro", "Francisca Leiva", "Sofía Navarro"
];

function buildStudent(index: number): Student {
  const cursoId = courses[index % courses.length].id;
  const promedio = Number((3.7 + ((index * 0.31) % 3.1)).toFixed(1));
  const asistencia = 72 + ((index * 7) % 28);
  const diasSinLogin = (index * 3) % 16;
  const tareasCompletadasPct = 50 + ((index * 9) % 48);
  const riskScoreRaw = (7.0 - promedio) * 20 + diasSinLogin * 3 + (100 - asistencia) / 2;
  const riskScore = Math.max(5, Math.min(99, Math.round(riskScoreRaw)));
  return {
    id: `s${index + 1}`,
    nombre: studentSeeds[index],
    cursoId,
    promedio,
    asistencia,
    diasSinLogin,
    tareasCompletadasPct,
    riskScore,
    riskCategory: toRiskCategory(riskScore)
  };
}

export const students: Student[] = studentSeeds.map((_, index) => buildStudent(index));

courses.forEach((course) => {
  course.estudiantesIds = students.filter((student) => student.cursoId === course.id).map((student) => student.id);
});

export const grades: Grade[] = students.flatMap((student, sIndex) => {
  const count = 5 + (sIndex % 4);
  return Array.from({ length: count }, (_, gIndex) => {
    const maxPuntaje = 70;
    const puntaje = Math.round(35 + ((sIndex * 9 + gIndex * 7) % 33));
    return {
      id: `${student.id}-g${gIndex + 1}`,
      estudianteId: student.id,
      cursoId: student.cursoId,
      fecha: format(addDays(new Date(2024, 2, 1), sIndex * 3 + gIndex * 11), "yyyy-MM-dd"),
      tipo: (gIndex % 3 === 0 ? "prueba" : gIndex % 3 === 1 ? "quiz" : "tarea") as "prueba" | "quiz" | "tarea",
      puntaje,
      maxPuntaje
    };
  });
});

export const weeklyActivity: WeeklyActivity[] = Array.from({ length: 8 }, (_, i) => ({
  week: format(subWeeks(new Date(), 7 - i), "dd/MM"),
  loginsDiariosProm: 1 + (i % 4),
  minutosActivosProm: 22 + i * 8,
  recursosVistos: 18 + i * 3,
  riesgoAltoPct: 34 - i * 2 + (i % 2)
}));

export const tutoringSessions: TutoringSession[] = Array.from({ length: 10 }, (_, i) => {
  const tutor = students[(i + 2) % students.length];
  const tutorado = students[(i + 11) % students.length];
  return {
    id: `t${i + 1}`,
    tutorId: tutor.id,
    tutoradoId: tutorado.id,
    cursoId: tutor.cursoId,
    status: i % 3 === 0 ? "completada" : "activa",
    fecha: format(addDays(new Date(), i - 4), "yyyy-MM-dd")
  };
});

export const upcomingTasks: UpcomingTask[] = [
  { id: "u1", estudianteId: "s1", titulo: "Guía Álgebra - Ecuaciones", fecha: format(addDays(new Date(), 2), "dd/MM/yyyy"), estado: "pendiente" },
  { id: "u2", estudianteId: "s1", titulo: "Ensayo Comprensión Lectora", fecha: format(addDays(new Date(), 4), "dd/MM/yyyy"), estado: "en progreso" },
  { id: "u3", estudianteId: "s1", titulo: "Laboratorio de Física", fecha: format(addDays(new Date(), 6), "dd/MM/yyyy"), estado: "pendiente" }
];

export function getCourseRisk(courseId: string): number {
  const courseStudents = students.filter((student) => student.cursoId === courseId);
  if (!courseStudents.length) return 0;
  return Math.round(courseStudents.reduce((acc, student) => acc + student.riskScore, 0) / courseStudents.length);
}
