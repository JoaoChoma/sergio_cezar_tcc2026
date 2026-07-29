import Link from "next/link";
import { StudentShell } from "@/components/shared/StudentShell";
import { prototypeWorlds } from "@/data/trail";
export function WorldDetailPage({ worldSlug }: { worldSlug: string }) {
  const world =
    prototypeWorlds.find((item) => item.slug === worldSlug) ??
    prototypeWorlds[0];
  const Icon = world.icon;
  return (
    <StudentShell active="/trilha">
      <Link href="/trilha" className="font-bold text-brand">
        ← Voltar ao mapa
      </Link>
      <header className="mt-7 border-l-8 border-brand-accent bg-brand p-10 text-white">
        <Icon className="h-10 w-10" />
        <p className="mt-5 text-sm font-black text-brand-accent">
          MUNDO {world.id}
        </p>
        <h1 className="mt-2 text-5xl font-black">{world.title}</h1>
        <p className="mt-4 max-w-2xl text-blue-100">{world.description}</p>
      </header>
      <section className="mt-10">
        <h2 className="text-3xl font-black text-brand">Aulas deste mundo</h2>
        <div className="mt-5 divide-y divide-slate-200 border-y border-slate-200">
          {world.lessons.map((lesson, index) => (
            <Link
              key={lesson.slug}
              href={`/aulas/${lesson.slug}`}
              className="flex items-center justify-between bg-white p-6"
            >
              <span>
                <small className="font-black text-amber-700">
                  ETAPA {index + 1}
                </small>
                <strong className="mt-1 block text-xl text-brand">
                  {lesson.title}
                </strong>
              </span>
              <span className="font-black text-brand">Abrir →</span>
            </Link>
          ))}
        </div>
      </section>
    </StudentShell>
  );
}
