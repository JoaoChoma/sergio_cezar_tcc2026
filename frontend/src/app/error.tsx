"use client";

import Link from "next/link";
import { Home, RotateCcw } from "lucide-react";
import { SystemState } from "@/components/shared/SystemState";

export default function Erro({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-surface-soft px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <SystemState
          variant="error"
          eyebrow="Erro inesperado"
          title="Esta etapa não pôde ser carregada."
          description="Seu progresso salvo não foi apagado. Tente novamente ou volte para a visão geral."
          details={
            error.digest ? (
              <p>
                Código para suporte: <strong>{error.digest}</strong>
              </p>
            ) : undefined
          }
          action={
            <>
              <button
                type="button"
                onClick={reset}
                className={[
                  "inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 font-black",
                  "text-white",
                ].join(" ")}
              >
                <RotateCcw className="h-4 w-4" /> Tentar novamente
              </button>
              <Link
                href="/dashboard"
                className={[
                  "inline-flex items-center gap-2 rounded-md border-2 border-brand px-5 py-3",
                  "font-black text-brand",
                ].join(" ")}
              >
                <Home className="h-4 w-4" /> Visão geral
              </Link>
            </>
          }
        />
      </div>
    </main>
  );
}
