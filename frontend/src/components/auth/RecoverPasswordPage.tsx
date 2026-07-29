"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
export function RecoverPasswordPage() {
  const [sent, setSent] = useState(false);
  return (
    <main className="grid min-h-screen place-items-center bg-surface-soft p-8">
      <form
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          setSent(true);
        }}
        className="w-full max-w-lg rounded-panel bg-white p-8 shadow-panel"
      >
        <p className="text-sm font-black text-amber-700">RECUPERAR ACESSO</p>
        <h1 className="mt-3 text-3xl font-black text-brand">
          Recupere sua senha
        </h1>
        <p className="mt-3 text-slate-600">
          Informe o e-mail utilizado no cadastro.
        </p>
        <input
          type="email"
          required
          autoComplete="email"
          className="mt-6 w-full rounded-md border border-slate-300 px-4 py-3"
          placeholder="voce@exemplo.com"
        />
        <button className="mt-5 w-full rounded-md bg-brand px-5 py-3 font-black text-white">
          Enviar instruções
        </button>
        {sent && (
          <p
            role="status"
            className="mt-4 rounded-md bg-emerald-50 p-3 text-sm font-bold text-emerald-800"
          >
            Se o endereço estiver cadastrado, as instruções serão enviadas.
          </p>
        )}
        <Link
          href="/login"
          className="mt-5 block text-center font-bold text-brand"
        >
          Voltar ao login
        </Link>
      </form>
    </main>
  );
}
