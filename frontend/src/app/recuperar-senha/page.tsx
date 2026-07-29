import type { Metadata } from "next";
import { RecoverPasswordPage } from "@/components/auth/RecoverPasswordPage";

export const metadata: Metadata = {
  title: "Recuperar senha | Rota React",
  description: "Recupere o acesso à sua conta Rota React.",
};

export default function PaginaRecuperarSenha() {
  return <RecoverPasswordPage />;
}
