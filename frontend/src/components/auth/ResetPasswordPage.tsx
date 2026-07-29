"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
export function ResetPasswordPage({ token }: { token: string }) {
  const [done, setDone] = useState(false);
  return (
    <main className="grid min-h-screen place-items-center bg-surface-soft p-8">
      <form
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          setDone(true);
        }}
        className="w-full max-w-lg rounded-panel bg-white p-8 shadow-panel"
      >
        <p className="text-sm font-black text-amber-700">NOVA SENHA</p>
        <h1 className="mt-3 text-3xl font-black text-brand">
          Defina uma nova senha
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Solicitação recebida: {token.slice(0, 8)}...
        </p>
        <input
          type="password"
          minLength={8}
          required
          autoComplete="new-password"
          className="mt-6 w-full rounded-md border border-slate-300 px-4 py-3"
          placeholder="Nova senha"
        />
        <input
          type="password"
          minLength={8}
          required
          autoComplete="new-password"
          className="mt-4 w-full rounded-md border border-slate-300 px-4 py-3"
          placeholder="Confirmar senha"
        />
        <button className="mt-5 w-full rounded-md bg-brand px-5 py-3 font-black text-white">
          Redefinir senha
        </button>
        {done && (
          <Link
            href="/login"
            className="mt-4 block rounded-md bg-emerald-50 p-3 text-center font-bold text-emerald-800"
          >
            Senha atualizada. Entrar
          </Link>
        )}
      </form>
    </main>
  );
}
