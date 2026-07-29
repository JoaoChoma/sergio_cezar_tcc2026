"use client";
import { useContext } from "react";
import { ProgressContext } from "@/contexts/ProgressContext";
export function useProgress() {
  const value = useContext(ProgressContext);
  if (!value)
    throw new Error("useProgress deve ser usado dentro de ProgressProvider");
  return value;
}
