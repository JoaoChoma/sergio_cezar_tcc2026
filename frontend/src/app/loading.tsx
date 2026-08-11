import { SystemState } from "@/components/shared/SystemState";

export default function Carregando() {
  return (
    <main className="min-h-screen bg-surface-soft px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <SystemState
          variant="loading"
          eyebrow="Carregando"
          title="Preparando a próxima etapa"
          description="Os dados e componentes da página estão sendo organizados."
        />
      </div>
    </main>
  );
}
