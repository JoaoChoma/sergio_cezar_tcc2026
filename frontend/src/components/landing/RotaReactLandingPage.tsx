"use client";
import Link from "next/link";
import { useState } from "react";
import { Atom, Blocks, MousePointerClick, Route, Trophy } from "lucide-react";
import { Brand } from "@/components/shared/Brand";
import { LandingCheckIcon } from "@/components/landing/LandingCheckIcon";
import { LandingReasonsSection } from "@/components/landing/LandingReasonsSection";
import { LandingGamificationSection } from "@/components/landing/LandingGamificationSection";
import { appOutcomes, landingHeroBenefits } from "@/data/platform";
const worlds = [
  { id: 1, title: "Primeiros Passos", topics: "React e ambiente", icon: Atom },
  {
    id: 2,
    title: "Construindo Interfaces",
    topics: "JSX, componentes e props",
    icon: Blocks,
  },
  {
    id: 3,
    title: "Interatividade",
    topics: "Eventos, estado e formulários",
    icon: MousePointerClick,
  },
  {
    id: 4,
    title: "Aplicações Reais",
    topics: "Efeitos e navegação",
    icon: Route,
  },
  {
    id: 5,
    title: "Desafio Final",
    topics: "Projeto guiado, quiz e certificado",
    icon: Trophy,
  },
];
export function RotaReactLandingPage() {
  const [selectedWorld, setSelectedWorld] = useState(1);
  const activeWorld =
    worlds.find((world) => world.id === selectedWorld) ?? worlds[0];
  return (
    <main className="min-h-screen bg-surface-soft text-slate-950">
      <section className="bg-brand text-white">
        <div className="mx-auto max-w-7xl px-8 py-6">
          <nav className="flex items-center justify-between gap-6">
            <Brand subtitle="Aprendizagem gamificada de React" />
            <div className="flex items-center gap-3">
              <Link href="/login" className="font-bold">
                Entrar
              </Link>
              <Link
                href="/cadastro"
                className="rounded-md bg-brand-accent px-4 py-2 font-black text-brand"
              >
                Cadastrar
              </Link>
            </div>
          </nav>
          <div className="grid items-center gap-12 py-16 lg:grid-cols-2">
            <div>
              <span className="rounded-md bg-white/10 px-3 py-2 text-sm font-bold">
                React para iniciantes
              </span>
              <h1 className="mt-6 text-5xl font-black leading-tight">
                Aprenda React passo a passo com desafios e progresso visual.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                Construa uma base sólida em React por uma trilha progressiva,
                com exemplos, prática guiada e feedback claro.
              </p>
              <Link
                href="/cadastro"
                className="mt-7 inline-flex rounded-md bg-brand-accent px-6 py-3 font-black text-brand"
              >
                Iniciar aprendizado
              </Link>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {landingHeroBenefits.map((item) => (
                  <div key={item} className="rounded-lg bg-white/10 p-4">
                    <LandingCheckIcon />
                    <strong className="mt-3 block">{item}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-panel bg-white p-6 text-slate-900 shadow-panel">
              <p className="text-sm font-bold text-slate-500">
                Como você aprende
              </p>
              <h2 className="mt-2 text-3xl font-black text-brand">
                Do conceito à prática em pequenas etapas
              </h2>
              <div className="mt-6 rounded-lg bg-code p-5 font-mono text-sm text-blue-50">
                <span className="text-brand-accent">function</span> OlaReact()
                &#123;
                <br />
                &nbsp;&nbsp;<span className="text-cyan-300">return</span>{" "}
                &lt;h1&gt;Olá, React!&lt;/h1&gt;;
                <br />
                &#125;
              </div>
            </div>
          </div>
        </div>
      </section>
      <LandingReasonsSection />
      <section className="mx-auto grid max-w-7xl gap-10 px-8 py-16 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <span className="rounded-md bg-amber-100 px-3 py-2 text-sm font-black text-amber-800">
            Mapa da jornada
          </span>
          <h2 className="mt-5 text-4xl font-black text-brand">
            A trilha vira um caminho de progressão.
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Cada mundo apresenta uma etapa clara do aprendizado.
          </p>
          <div className="mt-6 rounded-panel bg-white p-6 shadow-panel">
            <strong className="text-xl text-brand">
              Mundo {activeWorld.id} · {activeWorld.title}
            </strong>
            <p className="mt-2 text-slate-600">{activeWorld.topics}</p>
          </div>
        </div>
        <div className="space-y-4 rounded-panel bg-white p-6 shadow-panel">
          {worlds.map((world) => {
            const Icon = world.icon;
            return (
              <button
                key={world.id}
                onClick={() => setSelectedWorld(world.id)}
                className={[
                  "flex w-full items-center gap-4 rounded-lg border p-4 text-left transition",
                  world.id === selectedWorld
                    ? "border-brand bg-brand text-white"
                    : "border-slate-200 hover:border-brand-accent",
                ].join(" ")}
              >
                <Icon className="h-7 w-7" />
                <span>
                  <strong className="block">
                    Mundo {world.id} · {world.title}
                  </strong>
                  <small>{world.topics}</small>
                </span>
              </button>
            );
          })}
        </div>
      </section>
      <LandingGamificationSection />
      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="rounded-panel bg-brand p-10 text-white">
          <h2 className="text-4xl font-black">
            Construa seu primeiro app React.
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {appOutcomes.map((item) => (
              <div
                key={item.title}
                className="rounded-lg bg-white p-5 text-brand"
              >
                <strong>{item.title}</strong>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-brand px-8 py-10 text-blue-100">
        <div className="mx-auto max-w-7xl">
          <Brand subtitle="Aprendizagem gamificada de React" />
          <p className="mt-4 text-sm">
            Projeto acadêmico sem fins comerciais · Ciência da Computação · TCC
            2026.
          </p>
        </div>
      </footer>
    </main>
  );
}
