import type { Metadata } from "next";
import { CatalogWorldRoute } from "@/components/catalog/CatalogWorldRoute";

export const metadata: Metadata = {
  title: "Mundo | Rota React",
  description: "Mundo e módulos da trilha Rota React.",
};

export default async function MundoPage({
  params,
}: {
  params: Promise<{ mundo: string }>;
}) {
  const { mundo } = await params;
  return <CatalogWorldRoute slug={mundo} />;
}
