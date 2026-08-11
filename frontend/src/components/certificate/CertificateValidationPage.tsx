import Link from "next/link";
export function CertificateValidationPage({ code }: { code: string }) {
  return (
    <main className="grid min-h-screen place-items-center bg-surface-soft p-8">
      <section className="max-w-xl bg-white p-9 text-center shadow-panel">
        <p className="text-sm font-black text-amber-700">CONSULTA LOCAL</p>
        <h1 className="mt-3 text-3xl font-black text-brand">
          Certificado simbólico
        </h1>
        <p className="mt-4 text-slate-600">Código consultado: {code}</p>
        <Link href="/" className="mt-6 inline-block font-black text-brand">
          Voltar ao início
        </Link>
      </section>
    </main>
  );
}
