export type CodeCheckChallenge = {
  id: string;
  prompt: string;
  criteria: { id: string; label: string }[];
};
export type CompleteCodeChallenge = {
  id: string;
  prompt: string;
  codeLines: (
    | { type: "text"; text: string }
    | {
        type: "blank";
        id: string;
        before: string;
        after: string;
        placeholder: string;
      }
  )[];
};
export type OrderCodeChallenge = {
  id: string;
  prompt: string;
  blocks: { id: string; text: string }[];
};
export type QuizChallenge = {
  id: string;
  prompt: string;
  options: { id: string; text: string }[];
};
export type LessonChallenge = {
  id: string;
  lessonId: string;
  question: string;
  options: string[];
  answer: number;
  xp: number;
};
export const prototypeChallenges: LessonChallenge[] = [
  {
    id: "react-library",
    lessonId: "o-que-e-react",
    question: "Qual afirmação descreve melhor React?",
    options: [
      "Uma biblioteca para interfaces",
      "Um banco de dados",
      "Um sistema operacional",
    ],
    answer: 0,
    xp: 20,
  },
  {
    id: "jsx-expression",
    lessonId: "jsx",
    question: "Como inserir uma expressão JavaScript no JSX?",
    options: ["Com chaves", "Com colchetes", "Com comentários"],
    answer: 0,
    xp: 20,
  },
  {
    id: "state-update",
    lessonId: "eventos-e-usestate",
    question: "Qual Hook mantém estado local?",
    options: ["useEffect", "useState", "useRoute"],
    answer: 1,
    xp: 25,
  },
];
