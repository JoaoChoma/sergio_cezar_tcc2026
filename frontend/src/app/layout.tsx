import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
