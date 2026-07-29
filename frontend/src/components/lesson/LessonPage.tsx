import Link from "next/link";
import { CodeBlock } from "@/components/shared/CodeBlock";
import { StudentShell } from "@/components/shared/StudentShell";
import type { Lesson } from "@/data/lessons";
export function LessonPage({ lesson }: { lesson: Lesson }) {
  return (
    <StudentShell active="/trilha">
      <Link href="/trilha" className="font-bold text-brand">
        ← Voltar para a trilha
      </Link>
      <article className="mx-auto mt-8 max-w-4xl">
        <header className="border-b border-slate-200 pb-8">
          <p className="text-sm font-black text-amber-700">
            {lesson.world.toUpperCase()}
          </p>
          <h1 className="mt-3 text-5xl font-black text-brand">
            {lesson.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {lesson.objective}
          </p>
        </header>
        {lesson.sections.map((section) => (
          <section
            key={section.title}
            className="border-b border-slate-200 py-10"
          >
            <h2 className="text-3xl font-black text-brand">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-base leading-8 text-slate-700"
              >
                {paragraph}
              </p>
            ))}
            {section.code && (
              <div className="mt-6">
                <CodeBlock
                  filename="Exemplo.tsx"
                  lines={section.code.split("\n")}
                />
              </div>
            )}
          </section>
        ))}
      </article>
    </StudentShell>
  );
}
