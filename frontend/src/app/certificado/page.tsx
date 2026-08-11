import type { Metadata } from "next";
import { CertificatePage } from "@/components/certificate/CertificatePage";

export const metadata: Metadata = {
  title: "Certificado | Rota React",
  description:
    "Requisitos e emissão do certificado simbólico da plataforma Rota React.",
};

export default function PaginaCertificado() {
  return <CertificatePage />;
}
