"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthPresentation } from "@/components/auth/AuthPresentation";

export function AuthPage({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const isLogin = mode === "login";
  const [pending, setPending] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    window.setTimeout(() => router.push("/"), 350);
  }
  return (
    <main className="grid min-h-screen bg-surface-soft lg:grid-cols-[1.05fr_0.95fr]">
      <AuthPresentation isLogin={isLogin} />
      <AuthForm isLogin={isLogin}>
        <form
          onSubmit={submit}
          className="w-full max-w-xl rounded-panel bg-white p-8 shadow-panel"
        >
          <p className="text-sm font-black uppercase tracking-widest text-amber-700">
            {isLogin ? "Acessar conta" : "Criar conta"}
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand">
            {isLogin ? "Continue sua rota" : "Comece sua jornada"}
          </h2>
          {!isLogin && (
            <label className="mt-6 block text-sm font-bold">
              Nome
              <input
                name="name"
                autoComplete="name"
                required
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3"
              />
            </label>
          )}
          <label className="mt-5 block text-sm font-bold">
            E-mail
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3"
            />
          </label>
          <label className="mt-5 block text-sm font-bold">
            Senha
            <input
              name="password"
              type="password"
              autoComplete={isLogin ? "current-password" : "new-password"}
              minLength={8}
              required
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3"
            />
          </label>
          <button
            disabled={pending}
            className="mt-7 w-full rounded-md bg-brand-accent px-5 py-3 font-black text-brand disabled:opacity-60"
          >
            {pending ? "Aguarde..." : isLogin ? "Entrar" : "Cadastrar"}
          </button>
          <p className="mt-5 text-center text-sm text-slate-600">
            {isLogin ? "Ainda não tem conta?" : "Já possui conta?"}{" "}
            <Link
              href={isLogin ? "/cadastro" : "/login"}
              className="font-black text-brand"
            >
              {isLogin ? "Cadastrar" : "Entrar"}
            </Link>
          </p>
        </form>
      </AuthForm>
    </main>
  );
}
