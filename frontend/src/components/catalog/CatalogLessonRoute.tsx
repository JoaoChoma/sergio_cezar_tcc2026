import Link from "next/link";
import { LessonPage } from "@/components/lesson/LessonPage";
import { prototypeLessons } from "@/data/lessons";
export function CatalogLessonRoute({ id }: { id: string }) {
  const lesson = prototypeLessons.find((item) => item.id === id);
  if (!lesson)
    return (
      <main className="grid min-h-screen place-items-center">
        <Link href="/trilha">Aula não encontrada. Voltar.</Link>
      </main>
    );
  return <LessonPage lesson={lesson} />;
}
