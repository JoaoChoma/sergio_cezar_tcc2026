"use client";
import { createContext, useEffect, useState, type ReactNode } from "react";
import {
  initialProgress,
  PROGRESS_STORAGE_KEY,
  type PrototypeProgress,
} from "@/lib/progress";
type ProgressContextValue = {
  progress: PrototypeProgress;
  completeLesson(id: string): void;
  registerPractice(correct: boolean, id: string): void;
  updateProfile(profile: PrototypeProgress["profile"]): void;
  resetProgress(): void;
};
export const ProgressContext = createContext<ProgressContextValue | null>(null);
export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(initialProgress);
  useEffect(() => {
    const saved = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!saved) return;
    const timer = window.setTimeout(() => {
      try {
        setProgress(JSON.parse(saved) as PrototypeProgress);
      } catch {
        localStorage.removeItem(PROGRESS_STORAGE_KEY);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);
  function persist(next: PrototypeProgress) {
    setProgress(next);
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(next));
  }
  return (
    <ProgressContext.Provider
      value={{
        progress,
        completeLesson: (id) =>
          persist({
            ...progress,
            completedLessons: Array.from(
              new Set([...progress.completedLessons, id]),
            ),
            streak: Math.max(1, progress.streak),
          }),
        registerPractice: (correct, id) =>
          persist({
            ...progress,
            xp: progress.xp + (correct ? 20 : 0),
            streak: Math.max(1, progress.streak),
            mistakes: correct
              ? progress.mistakes
              : Array.from(new Set([...progress.mistakes, id])),
          }),
        updateProfile: (profile) => persist({ ...progress, profile }),
        resetProgress: () => persist(initialProgress),
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}
