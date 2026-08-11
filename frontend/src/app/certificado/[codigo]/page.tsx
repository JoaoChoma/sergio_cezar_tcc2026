import type { Metadata } from "next";
import { CertificateValidationPage } from "@/components/certificate/CertificateValidationPage";

export const metadata: Metadata = {
  title: "Consultar certificado simbólico | Rota React",
  description: "Consulta individual do certificado simbólico da Rota React.",
};

export default async function PaginaValidarCertificado({
  params,
}: {
  params: Promise<{ codigo: string }>;
}) {
  const { codigo } = await params;
  return <CertificateValidationPage code={codigo} />;
}
