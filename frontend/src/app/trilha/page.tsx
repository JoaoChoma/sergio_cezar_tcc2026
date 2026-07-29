import type { Metadata } from "next";
import { LearningTrailPage } from "@/components/trail/LearningTrailPage";

export const metadata: Metadata = {
  title: "Trilha | Rota React",
  description:
    "Mapa de aprendizagem com mundos, módulos, progresso e próxima atividade.",
};

export default function TrilhaPage() {
  return <LearningTrailPage />;
}
