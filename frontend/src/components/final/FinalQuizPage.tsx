"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { StudentShell } from "@/components/shared/StudentShell";
const questions = [
  {
    question: "Qual Hook mantém estado local?",
    options: ["useEffect", "useState", "useRoute"],
    answer: 1,
  },
  {
    question: "Qual propriedade identifica itens de uma lista?",
    options: ["key", "className", "value"],
    answer: 0,
  },
  {
    question: "Qual Hook sincroniza efeitos externos?",
    options: ["useState", "useMemo", "useEffect"],
    answer: 2,
  },
];
export function FinalQuizPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  return (
    <StudentShell active="/trilha">
      <p className="text-sm font-black text-amber-700">QUIZ FINAL</p>
      <h1 className="mt-2 text-5xl font-black text-brand">
        Revise os conceitos principais
      </h1>
      <div className="mt-9 space-y-8">
        {questions.map((item, index) => (
          <fieldset
            key={item.question}
            className="border-t border-slate-200 pt-6"
          >
            <legend className="text-xl font-black text-brand">
              {index + 1}. {item.question}
            </legend>
            <div className="mt-4 space-y-2">
              {item.options.map((option, optionIndex) => (
                <label key={option} className="flex gap-3 bg-white p-4">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    checked={answers[index] === optionIndex}
                    onChange={() =>
                      setAnswers({ ...answers, [index]: optionIndex })
                    }
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
      <button
        disabled={Object.keys(answers).length !== questions.length}
        onClick={() => {
          const score = questions.filter(
            (item, index) => answers[index] === item.answer,
          ).length;
          sessionStorage.setItem("rota-react-quiz-score", String(score));
          router.push("/resultado-final");
        }}
        className="mt-8 rounded-md bg-brand px-5 py-3 font-black text-white disabled:opacity-50"
      >
        Finalizar tentativa
      </button>
    </StudentShell>
  );
}
