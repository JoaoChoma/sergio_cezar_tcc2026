import type { Metadata } from "next";
import { CatalogLessonRoute } from "@/components/catalog/CatalogLessonRoute";

export const metadata: Metadata = {
  title: "Aula | Rota React",
  description: "Conteúdo, exemplos e exercícios da trilha Rota React.",
};
export const dynamic = "force-dynamic";

export default async function AulaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CatalogLessonRoute id={id} />;
}
