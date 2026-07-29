"use client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
export function OnboardingPage() {
  const router = useRouter();
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    localStorage.setItem(
      "rota-react-profile",
      JSON.stringify({
        name: data.get("name"),
        goal: data.get("goal"),
        experience: data.get("experience"),
      }),
    );
    router.push("/");
  }
  return (
    <main className="grid min-h-screen place-items-center bg-surface-soft p-8">
      <form
        onSubmit={submit}
        className="w-full max-w-2xl rounded-panel bg-white p-9 shadow-panel"
      >
        <p className="text-sm font-black text-amber-700">PRIMEIRO ACESSO</p>
        <h1 className="mt-3 text-4xl font-black text-brand">
          Conte um pouco sobre sua rota
        </h1>
        <label className="mt-7 block font-bold">
          Como você quer ser chamado?
          <input
            name="name"
            required
            className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3"
          />
        </label>
        <label className="mt-5 block font-bold">
          Seu objetivo
          <select
            name="goal"
            className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3"
          >
            <option>Aprender os fundamentos</option>
            <option>Preparar um projeto acadêmico</option>
          </select>
        </label>
        <label className="mt-5 block font-bold">
          Experiência anterior
          <select
            name="experience"
            className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3"
          >
            <option>Nenhuma</option>
            <option>Conheço HTML, CSS e JavaScript</option>
          </select>
        </label>
        <button className="mt-7 w-full rounded-md bg-brand-accent px-5 py-3 font-black text-brand">
          Ir para visão geral
        </button>
      </form>
    </main>
  );
}
