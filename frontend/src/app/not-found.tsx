import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Brand } from "@/components/shared/Brand";
import { SystemState } from "@/components/shared/SystemState";

export default function PaginaNaoEncontrada() {
  return (
    <main className="min-h-screen bg-surface-soft px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <Brand subtitle="Navegação da plataforma" dark />
        <div className="mt-8">
          <SystemState
            variant="not-found"
            eyebrow="Erro 404"
            title="Esta rota não existe no mapa."
            description="O endereço pode ter sido digitado incorretamente ou a página pode ter mudado de lugar."
            action={
              <>
                <Link
                  href="/"
                  className={[
                    "inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 font-black",
                    "text-white",
                  ].join(" ")}
                >
                  <Home className="h-4 w-4" /> Ir para o início
                </Link>
                <Link
                  href="/#trilha"
                  className={[
                    "inline-flex items-center gap-2 rounded-md border-2 border-brand px-5 py-3",
                    "font-black text-brand",
                  ].join(" ")}
                >
                  <ArrowLeft className="h-4 w-4" /> Conhecer a trilha
                </Link>
              </>
            }
          />
        </div>
      </div>
    </main>
  );
}
