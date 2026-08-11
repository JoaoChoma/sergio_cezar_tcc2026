import type { Metadata } from "next";
import { ProfilePage } from "@/components/profile/ProfilePage";

export const metadata: Metadata = {
  title: "Perfil | Rota React",
  description: "Dados e preferências do perfil de estudos.",
};

export default function PaginaPerfil() {
  return <ProfilePage />;
}
