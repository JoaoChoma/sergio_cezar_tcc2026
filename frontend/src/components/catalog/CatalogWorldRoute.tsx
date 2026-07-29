import Link from "next/link";
import { WorldDetailPage } from "@/components/world/WorldDetailPage";
import { prototypeWorlds } from "@/data/trail";
export function CatalogWorldRoute({ slug }: { slug: string }) {
  const world = prototypeWorlds.find((item) => item.slug === slug);
  if (!world)
    return (
      <main className="grid min-h-screen place-items-center">
        <Link href="/trilha">Mundo não encontrado. Voltar.</Link>
      </main>
    );
  return <WorldDetailPage worldSlug={world.slug} />;
}
