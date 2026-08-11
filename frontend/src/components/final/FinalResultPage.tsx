"use client";
import Link from "next/link";
import { StudentShell } from "@/components/shared/StudentShell";
export function FinalResultPage() {
  const score =
    typeof window === "undefined"
      ? 0
      : Number(sessionStorage.getItem("rota-react-quiz-score") ?? 0);
  const approved = score >= 2;
  return (
    <StudentShell active="/trilha">
      <section className="bg-brand p-10 text-white">
        <p className="text-sm font-black text-brand-accent">RESULTADO FINAL</p>
        <h1 className="mt-3 text-5xl font-black">
          {approved ? "Base inicial consolidada" : "Revise alguns conceitos"}
        </h1>
        <p className="mt-4 text-xl text-blue-100">
          Você acertou {score} de 3 questões.
        </p>
      </section>
      <div className="mt-8 bg-white p-7">
        {approved ? (
          <Link href="/certificado" className="font-black text-brand">
            Solicitar certificado simbólico →
          </Link>
        ) : (
          <Link href="/revisao" className="font-black text-brand">
            Abrir central de revisão →
          </Link>
        )}
      </div>
    </StudentShell>
  );
}
