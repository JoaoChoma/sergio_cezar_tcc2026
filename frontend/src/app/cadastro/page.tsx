import type { Metadata } from "next";
import { AuthPage } from "@/components/auth/AuthPage";

export const metadata: Metadata = {
  title: "Cadastro | Rota React",
  description: "Crie sua conta para iniciar a trilha gamificada de React.",
};

export default function CadastroPage() {
  return <AuthPage mode="register" />;
}
