import { gamificationItems } from "@/data/platform";

export function LandingGamificationSection() {
  return (
    <section id="gamificacao" className="bg-white py-16">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <span className="rounded-md bg-brand px-3 py-2 text-sm font-black text-white">
            Gamificação educacional
          </span>
          <h2 className="mt-5 text-3xl font-black text-brand sm:text-4xl">
            Aprender programação dá vontade de continuar.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Ganhe XP, mantenha sua ofensiva de estudos e desbloqueie conquistas
            enquanto constrói sua base técnica em React.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {gamificationItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={[
                  "rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm transition",
                  "hover:-translate-y-1 hover:border-amber-200 hover:shadow-panel",
                ].join(" ")}
              >
                <span className={[
                  "grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-amber-700 ring-1",
                  "ring-amber-100",
                ].join(" ")}>
                  <Icon className="h-5 w-5" strokeWidth={2.35} />
                </span>
                <h3 className="mt-4 text-lg font-black text-brand">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
