import { StudentShell } from "@/components/shared/StudentShell";
const achievements = [
  { title: "Primeira coordenada", requirement: "Concluir a primeira aula" },
  { title: "Ritmo de prática", requirement: "Praticar em dias consecutivos" },
  { title: "Rota completa", requirement: "Concluir os cinco mundos" },
];
export function AchievementsPage() {
  return (
    <StudentShell active="/conquistas">
      <p className="text-sm font-black text-amber-700">CONQUISTAS</p>
      <h1 className="mt-2 text-5xl font-black text-brand">
        Marcos da sua jornada
      </h1>
      <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
        {achievements.map((item, index) => (
          <div
            key={item.title}
            className="flex items-center justify-between bg-white p-6"
          >
            <div>
              <strong className="text-xl text-brand">{item.title}</strong>
              <p className="mt-1 text-slate-600">{item.requirement}</p>
            </div>
            <span className="text-sm font-black text-slate-500">
              {index === 0 ? "EM PROGRESSO" : "BLOQUEADA"}
            </span>
          </div>
        ))}
      </div>
    </StudentShell>
  );
}
