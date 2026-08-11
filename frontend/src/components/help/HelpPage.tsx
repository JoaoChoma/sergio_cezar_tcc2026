import { StudentShell } from "@/components/shared/StudentShell";
const topics = [
  {
    title: "Como funciona o XP",
    text: "XP é concedido por práticas avaliáveis e pelo quiz final.",
  },
  {
    title: "Como funciona a ofensiva",
    text: [
      "Uma prática válida mantém a sequência diária, mesmo quando",
      "a resposta está incorreta.",
    ].join(" "),
  },
  {
    title: "Como o certificado é liberado",
    text: [
      "A emissão simbólica ocorre depois das aulas, do projeto",
      "guiado e do quiz final.",
    ].join(" "),
  },
];
export function HelpPage() {
  return (
    <StudentShell active="/ajuda">
      <p className="text-sm font-black text-amber-700">COMO FUNCIONA</p>
      <h1 className="mt-2 text-5xl font-black text-brand">
        Entenda sua jornada
      </h1>
      <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
        {topics.map((topic) => (
          <section key={topic.title} className="bg-white p-6">
            <h2 className="text-2xl font-black text-brand">{topic.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{topic.text}</p>
          </section>
        ))}
      </div>
    </StudentShell>
  );
}
