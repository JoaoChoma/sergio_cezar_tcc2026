import { reactReasons } from "@/data/platform";
import { LandingCheckIcon } from "@/components/landing/LandingCheckIcon";

export function LandingReasonsSection() {
  return (
    <section id="react" className="bg-white py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
        <div>
          <span className="rounded-md bg-brand px-3 py-2 text-sm font-black text-white">
            Por que aprender React?
          </span>
          <h2 className="mt-5 text-3xl font-black text-brand sm:text-4xl">
            React conecta teoria de interfaces com uma habilidade usada no
            mercado.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Para iniciantes, React também ajuda a entender componentização,
            estado, propriedades e criação de interfaces modernas de forma
            incremental.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {reactReasons.map((reason) => (
            <div
              key={reason}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm"
            >
              <span className="grid h-9 w-9 place-items-center rounded-md bg-emerald-50 text-emerald-700">
                <LandingCheckIcon />
              </span>
              <p className="mt-4 text-base font-bold leading-6 text-slate-800">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
