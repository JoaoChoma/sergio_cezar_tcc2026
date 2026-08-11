"use client";
import { FormEvent, useState } from "react";
import { StudentShell } from "@/components/shared/StudentShell";
import { useProgress } from "@/hooks/useProgress";
export function ProfilePage() {
  const { progress, updateProfile, resetProgress } = useProgress();
  const [saved, setSaved] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    updateProfile({
      name: String(data.get("name")),
      email: String(data.get("email")),
    });
    setSaved(true);
  }
  return (
    <StudentShell active="/perfil">
      <p className="text-sm font-black text-amber-700">PERFIL</p>
      <h1 className="mt-2 text-5xl font-black text-brand">Seus dados</h1>
      <form
        onSubmit={submit}
        className="mt-9 max-w-2xl border-t border-slate-200 pt-7"
      >
        <label className="block font-bold">
          Nome
          <input
            name="name"
            defaultValue={progress.profile.name}
            required
            className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3"
          />
        </label>
        <label className="mt-5 block font-bold">
          E-mail
          <input
            name="email"
            type="email"
            defaultValue={progress.profile.email}
            required
            className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3"
          />
        </label>
        <button className="mt-6 rounded-md bg-brand px-5 py-3 font-black text-white">
          Salvar alterações
        </button>
        {saved && (
          <span className="ml-4 font-bold text-emerald-700">
            Alterações salvas
          </span>
        )}
      </form>
      <button
        onClick={resetProgress}
        className="mt-12 text-sm font-bold text-red-700"
      >
        Reiniciar progresso demonstrativo
      </button>
    </StudentShell>
  );
}
