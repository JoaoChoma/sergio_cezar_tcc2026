"use client";
import { useState } from "react";
import type { LessonChallenge } from "@/data/challenges";
export function LessonChallengePanel({
  challenges,
}: {
  challenges: LessonChallenge[];
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  if (challenges.length === 0) return null;
  const challenge = challenges[index];
  function verify() {
    if (selected === null) return;
    setFeedback(
      selected === challenge.answer
        ? `Resposta correta · +${challenge.xp} XP`
        : "Ainda não. Revise o conceito e tente novamente.",
    );
  }
  return (
    <section
      className={[
        "mx-auto my-10 max-w-4xl border-t-4 border-brand-accent bg-white p-7",
        "shadow-panel",
      ].join(" ")}
    >
      <p className="text-sm font-black text-amber-700">
        PRÁTICA {index + 1} DE {challenges.length}
      </p>
      <h2 className="mt-3 text-2xl font-black text-brand">
        {challenge.question}
      </h2>
      <div className="mt-5 space-y-3">
        {challenge.options.map((option, optionIndex) => (
          <button
            key={option}
            onClick={() => {
              setSelected(optionIndex);
              setFeedback("");
            }}
            className={[
              "block w-full rounded-md border p-4 text-left font-bold",
              selected === optionIndex
                ? "border-brand bg-blue-50"
                : "border-slate-200",
            ].join(" ")}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={verify}
        className="mt-5 rounded-md bg-brand px-5 py-3 font-black text-white"
      >
        Verificar exercício
      </button>
      {feedback && (
        <div
          role="status"
          className="mt-4 rounded-md bg-slate-100 p-4 font-bold text-slate-700"
        >
          {feedback}
        </div>
      )}
      {feedback.startsWith("Resposta correta") &&
        index < challenges.length - 1 && (
          <button
            onClick={() => {
              setIndex((value) => value + 1);
              setSelected(null);
              setFeedback("");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-4 font-black text-brand"
          >
            Concluir esta etapa →
          </button>
        )}
    </section>
  );
}
