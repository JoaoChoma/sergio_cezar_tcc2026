import type { Metadata } from "next";
import { ProgressProvider } from "@/contexts/ProgressContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rota React",
  description: "Plataforma gamificada para aprender React.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <ProgressProvider>{children}</ProgressProvider>
      </body>
    </html>
  );
}
