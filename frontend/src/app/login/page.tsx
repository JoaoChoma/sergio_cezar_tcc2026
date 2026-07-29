import type { Metadata } from "next";
import { AuthPage } from "@/components/auth/AuthPage";

export const metadata: Metadata = {
  title: "Entrar | Rota React",
  description: "Acesse sua trilha de aprendizagem gamificada de React.",
};

export default function LoginPage() {
  return <AuthPage mode="login" />;
}
