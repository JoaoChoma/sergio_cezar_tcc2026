import type { Metadata } from "next";
import { FinalResultPage } from "@/components/final/FinalResultPage";

export const metadata: Metadata = {
  title: "Resultado final | Rota React",
  description: "Resumo da trajetória concluída na Rota React.",
};

export default function PaginaResultadoFinal() {
  return <FinalResultPage />;
}
