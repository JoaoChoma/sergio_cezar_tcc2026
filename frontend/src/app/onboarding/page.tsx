import type { Metadata } from "next";
import { OnboardingPage } from "@/components/onboarding/OnboardingPage";

export const metadata: Metadata = {
  title: "Configuração inicial | Rota React",
  description:
    "Defina seu objetivo e comece a trilha de React com progresso zerado.",
};

export default function OnboardingRoute() {
  return <OnboardingPage />;
}
