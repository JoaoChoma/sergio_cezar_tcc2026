"use client";
import { useState } from "react";
import Link from "next/link";
import { StudentShell } from "@/components/shared/StudentShell";
const steps = [
  "Criar a estrutura da aplicação",
  "Extrair componentes",
  "Conectar dados por props",
  "Adicionar estado e eventos",
  "Renderizar uma lista",
  "Organizar a navegação",
];
export function FinalProjectPage() {
  const [current, setCurrent] = useState(0);
  return (
    <StudentShell active="/trilha">
      <p className="text-sm font-black text-amber-700">PROJETO GUIADO</p>
      <h1 className="mt-2 text-5xl font-black text-brand">
        Monte uma aplicação de estudos passo a passo
      </h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.55fr_1fr]">
        <ol className="space-y-2">
          {steps.map((step, index) => (
            <li
              key={step}
              className={[
                "border-l-4 p-4",
                index === current
                  ? "border-brand-accent bg-white"
                  : "border-slate-200",
              ].join(" ")}
            >
              {index + 1}. {step}
            </li>
          ))}
        </ol>
        <section className="bg-white p-8">
          <p className="text-sm font-black text-amber-700">
            ETAPA {current + 1}
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand">
            {steps[current]}
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            passo a passo de um projeto pratico
          </p>
          {current < steps.length - 1 ? (
            <button
              onClick={() => {
                setCurrent((value) => value + 1);
                window.scrollTo({ top: 0 });
              }}
              className="mt-7 rounded-md bg-brand px-5 py-3 font-black text-white"
            >
              Concluir esta etapa
            </button>
          ) : (
            <Link
              href="/quiz-final"
              className="mt-7 inline-flex rounded-md bg-brand-accent px-5 py-3 font-black text-brand"
            >
              Ir para o quiz final
            </Link>
          )}
        </section>
      </div>
    </StudentShell>
  );
}
