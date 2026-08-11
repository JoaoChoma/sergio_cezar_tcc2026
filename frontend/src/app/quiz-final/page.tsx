import type { Metadata } from "next";
import { FinalQuizPage } from "@/components/final/FinalQuizPage";

export const metadata: Metadata = {
  title: "Quiz final | Rota React",
  description: "Avaliação final da trilha de React.",
};

export default function PaginaQuizFinal() {
  return <FinalQuizPage />;
}
