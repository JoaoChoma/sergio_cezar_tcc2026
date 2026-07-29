"use client";
import Link from "next/link";
import { StudentShell } from "@/components/shared/StudentShell";
import { useProgress } from "@/hooks/useProgress";
export function ReviewCenterPage() {
  const { progress } = useProgress();
  return (
    <StudentShell active="/revisao">
      <p className="text-sm font-black text-amber-700">CENTRAL DE REVISÃO</p>
      <h1 className="mt-2 text-5xl font-black text-brand">
        Reforce conceitos frágeis
      </h1>
      {progress.mistakes.length === 0 ? (
        <div className="mt-10 border-l-4 border-emerald-500 bg-white p-7">
          <h2 className="text-2xl font-black text-brand">
            Nenhuma revisão pendente
          </h2>
          <p className="mt-2 text-slate-600">
            Exercícios respondidos incorretamente aparecerão aqui.
          </p>
          <Link
            href="/trilha"
            className="mt-5 inline-block font-black text-brand"
          >
            Continuar trilha →
          </Link>
        </div>
      ) : (
        <ul className="mt-8 space-y-3">
          {progress.mistakes.map((item) => (
            <li key={item} className="bg-white p-5 font-bold text-brand">
              Revisar exercício: {item}
            </li>
          ))}
        </ul>
      )}
    </StudentShell>
  );
}
