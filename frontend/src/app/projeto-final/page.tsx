import type { Metadata } from "next";
import { FinalProjectPage } from "@/components/final/FinalProjectPage";

export const metadata: Metadata = {
  title: "Projeto final | Rota React",
  description:
    "Projeto guiado construído passo a passo com os conceitos praticados na trilha.",
};

export default function PaginaProjetoFinal() {
  return <FinalProjectPage />;
}
