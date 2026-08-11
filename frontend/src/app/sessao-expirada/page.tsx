import type { Metadata } from "next";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { Brand } from "@/components/shared/Brand";
import { SystemState } from "@/components/shared/SystemState";

export const metadata: Metadata = {
  title: "Sessão expirada | Rota React",
};

export default async function PaginaSessaoExpirada({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  const loginHref =
    next?.startsWith("/") && !next.startsWith("//")
      ? `/login?next=${encodeURIComponent(next)}`
      : "/login";
  return (
    <main className="min-h-screen bg-surface-soft px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <Brand subtitle="Segurança da conta" dark />
        <div className="mt-8">
          <SystemState
            variant="session"
            eyebrow="Sessão expirada"
            title="Entre novamente para continuar."
            description={[
              "Por segurança, o acesso foi encerrado após o período da sessão. Depois do",
              "login, você retornará ao ponto solicitado.",
            ].join(" ")}
            action={
              <Link
                href={loginHref}
                className={[
                  "inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 font-black",
                  "text-white",
                ].join(" ")}
              >
                <LogIn className="h-4 w-4" /> Voltar para entrar
              </Link>
            }
          />
        </div>
      </div>
    </main>
  );
}
