"use client";
import { useState } from "react";
import { StudentShell } from "@/components/shared/StudentShell";
export function CertificatePage() {
  const [issued, setIssued] = useState(false);
  return (
    <StudentShell active="/certificado">
      <p className="text-sm font-black text-amber-700">CERTIFICADO SIMBÓLICO</p>
      <h1 className="mt-2 text-5xl font-black text-brand">
        Registro interno de conclusão
      </h1>
      <p className="mt-4 max-w-2xl leading-7 text-slate-600">
        Este certificado pertence à plataforma acadêmica Rota React
      </p>
      {issued ? (
        <section className="mt-10 border-8 border-double border-brand bg-white p-12 text-center">
          <h2 className="text-4xl font-black text-brand">
            Certificado simbólico de conclusão
          </h2>
        </section>
      ) : (
        <button
          onClick={() => setIssued(true)}
          className="mt-8 rounded-md bg-brand px-5 py-3 font-black text-white"
        >
          Emitir certificado
        </button>
      )}
    </StudentShell>
  );
}
