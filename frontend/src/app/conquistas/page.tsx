import type { Metadata } from "next";
import { AchievementsPage } from "@/components/achievements/AchievementsPage";

export const metadata: Metadata = {
  title: "Conquistas | Rota React",
  description: "Acompanhe as conquistas obtidas ao longo da trilha de React.",
};

export default function PaginaConquistas() {
  return <AchievementsPage />;
}
