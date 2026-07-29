"use client";
import Link from "next/link";
import { useState } from "react";
import { StudentShell } from "@/components/shared/StudentShell";
import { prototypeWorlds } from "@/data/trail";
export function LearningTrailPage() {
  const [selected, setSelected] = useState(1);
  const active =
    prototypeWorlds.find((world) => world.id === selected) ??
    prototypeWorlds[0];
  return (
    <StudentShell active="/trilha">
      <header className="border-b border-slate-200 pb-8">
        <p className="text-sm font-black text-amber-700">MAPA DA JORNADA</p>
        <h1 className="mt-2 text-5xl font-black text-brand">
          Mundos da Rota React
        </h1>
        <p className="mt-3 text-slate-600">
          Explore a estrutura completa antes de iniciar as atividades.
        </p>
      </header>
      <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {prototypeWorlds.map((world) => {
            const Icon = world.icon;
            return (
              <button
                key={world.id}
                onClick={() => setSelected(world.id)}
                className={[
                  "flex w-full items-center gap-5 p-6 text-left",
                  selected === world.id ? "bg-brand text-white" : "bg-white",
                ].join(" ")}
              >
                <Icon className="h-7 w-7" />
                <span>
                  <small className="font-black">MUNDO {world.id}</small>
                  <strong className="block text-xl">{world.title}</strong>
                  <span className="text-sm opacity-80">
                    {world.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
        <aside className="self-start bg-brand p-7 text-white">
          <p className="text-sm font-black text-brand-accent">
            MUNDO SELECIONADO
          </p>
          <h2 className="mt-2 text-3xl font-black">{active.title}</h2>
          <p className="mt-3 text-blue-100">{active.description}</p>
          <div className="mt-6 space-y-3">
            {active.lessons.map((lesson) => (
              <Link
                key={lesson.slug}
                href={`/aulas/${lesson.slug}`}
                className="block rounded-md bg-white/10 p-4 font-bold"
              >
                {lesson.title}
              </Link>
            ))}
          </div>
          <Link
            href={`/trilha/${active.slug}`}
            className="mt-6 inline-flex rounded-md bg-brand-accent px-4 py-3 font-black text-brand"
          >
            Abrir este mundo
          </Link>
        </aside>
      </div>
    </StudentShell>
  );
}
