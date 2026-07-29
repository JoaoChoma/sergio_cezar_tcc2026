import type { Metadata } from "next";
import { StudentDashboard } from "@/components/dashboard/StudentDashboard";

export const metadata: Metadata = {
  title: "Dashboard | Rota React",
  description:
    "Visão geral de aprendizagem com nível, XP, ofensiva, progresso e próxima atividade.",
};

export default function DashboardPage() {
  return <StudentDashboard />;
}
