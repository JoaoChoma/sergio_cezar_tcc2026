import Link from "next/link";
import { ArrowLeft, Bot } from "lucide-react";
import { Brand } from "@/components/shared/Brand";
import { authBenefits } from "@/data/platform";
export function AuthPresentation({ isLogin }: { isLogin: boolean }) {
  return (
    <aside className="relative overflow-hidden bg-brand px-5 py-5 text-white sm:px-8 lg:px-10">
      <div className="absolute left-10 top-24 h-40 w-40 rounded-full bg-brand-accent/20 blur-3xl" />
      <div className="absolute bottom-20 right-6 h-52 w-52 rounded-full bg-cyan-300/15 blur-3xl" />
      <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full border border-white/10" />
      <div className="relative z-10 flex min-h-full flex-col">
        <nav className="flex items-center justify-between gap-4">
          <Brand subtitle="Aprendizagem gamificada de React" />
          <Link
            href="/"
            className={[
              "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-bold",
              "text-blue-50 transition hover:bg-white/10 focus:outline-none focus:ring-2",
              "focus:ring-brand-accent",
            ].join(" ")}
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.3} />
            Voltar
          </Link>
        </nav>
        <div
          className={`my-auto grid ${isLogin ? "gap-5 py-7 lg:py-8" : "gap-4 py-5 lg:py-6"}`}
        >
          <div className="flex items-center gap-5">
            <span
              className={[
                "grid h-20 w-20 shrink-0 place-items-center rounded-panel border-4 border-brand",
                "bg-white text-brand shadow-panel",
              ].join(" ")}
              aria-hidden="true"
            >
              <Bot className="h-10 w-10" strokeWidth={2.3} />
            </span>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-accent">
                Rota React
              </p>
              <h1
                className={[
                  "mt-2 max-w-xl font-black leading-tight",
                  isLogin ? "text-4xl" : "text-3xl sm:text-4xl",
                ].join(" ")}
              >
                Uma rota clara para aprender React sem se perder no caminho.
              </h1>
            </div>
          </div>
          <p
            className={[
              "max-w-2xl text-blue-50",
              isLogin ? "text-lg leading-8" : "text-base leading-7",
            ].join(" ")}
          >
            A área de aprendizagem reúne trilha, desafios, XP, conquistas e
            feedback visual, do primeiro conceito ao projeto final.
          </p>
          <div className="grid border-y border-white/15 sm:grid-cols-3">
            {authBenefits.map((badge) => {
              const BadgeIcon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className={[
                    "border-b border-white/15 last:border-b-0 sm:border-b-0 sm:border-r",
                    "sm:last:border-r-0",
                    isLogin ? "p-4" : "p-3",
                  ].join(" ")}
                >
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-accent text-brand">
                    <BadgeIcon className="h-4 w-4" strokeWidth={2.4} />
                  </span>
                  <span
                    className={[
                      isLogin ? "mt-4" : "mt-3",
                      "block text-xs font-bold uppercase tracking-[0.14em] text-blue-200",
                    ].join(" ")}
                  >
                    {badge.label}
                  </span>
                  <strong
                    className={`mt-1 block font-black text-white ${isLogin ? "text-lg" : "text-base"}`}
                  >
                    {badge.value}
                  </strong>
                </div>
              );
            })}
          </div>
        </div>
        <p className="relative z-10 text-xs leading-5 text-blue-200">
          Projeto acadêmico sem fins comerciais · Trabalho de Conclusão de Curso
          em Ciência da Computação.
        </p>
      </div>
    </aside>
  );
}
