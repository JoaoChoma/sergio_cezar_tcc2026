import { StudentShell } from "@/components/shared/StudentShell";
export function StudentDashboard() {
  return (
    <StudentShell active="/dashboard">
      <section className="rounded-panel bg-brand p-10 text-white shadow-panel">
        <p className="text-sm font-black text-brand-accent">VISÃO GERAL</p>
        <h1 className="mt-3 text-5xl font-black">Sua rota começa aqui.</h1>
        <p className="mt-4 max-w-2xl text-blue-100">
          Acompanhe seu nível, sua prática diária e a próxima atividade.
        </p>
      </section>
      <section className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          ["Nível", "1"],
          ["XP", "0"],
          ["Ofensiva", "0 dias"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="border-l-4 border-brand-accent bg-white p-6"
          >
            <span className="text-sm font-bold text-slate-500">{label}</span>
            <strong className="mt-2 block text-3xl text-brand">{value}</strong>
          </div>
        ))}
      </section>
      <section className="mt-10 border-t border-slate-200 pt-8">
        <h2 className="text-3xl font-black text-brand">Próxima atividade</h2>
        <div className="mt-4 flex items-center justify-between bg-white p-6">
          <div>
            <strong className="text-xl text-brand">O que é React</strong>
            <p className="mt-1 text-slate-600">
              React, SPA, Virtual DOM e componentes.
            </p>
          </div>
          <span className="font-black text-slate-500">Atividade inicial</span>
        </div>
      </section>
    </StudentShell>
  );
}
