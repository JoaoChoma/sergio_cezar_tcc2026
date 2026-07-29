import type { Metadata } from "next";
import { ReviewCenterPage } from "@/components/review/ReviewCenterPage";

export const metadata: Metadata = {
  title: "Central de revisão | Rota React",
  description: "Revise exercícios errados e conceitos frágeis da trilha React.",
};

export default function RevisaoPage() {
  return <ReviewCenterPage />;
}
