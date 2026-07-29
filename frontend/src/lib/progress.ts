export type AchievementDefinition = {
  iconKey:
    | "book"
    | "route"
    | "flame"
    | "zap"
    | "trophy"
    | "code"
    | "quiz"
    | "certificate";
};
export type PrototypeProgress = {
  xp: number;
  streak: number;
  completedLessons: string[];
  mistakes: string[];
  profile: { name: string; email: string };
};
export const initialProgress: PrototypeProgress = {
  xp: 0,
  streak: 0,
  completedLessons: [],
  mistakes: [],
  profile: { name: "Você", email: "" },
};
export const PROGRESS_STORAGE_KEY = "rota-react-progress";
