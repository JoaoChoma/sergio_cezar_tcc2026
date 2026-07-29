import Link from "next/link";
import { Brand } from "@/components/shared/Brand";

const items: ReadonlyArray<readonly [string, string]> = [
  ["/dashboard", "Visão geral"],
  ["/trilha", "Trilha"],
];

export function StudentSidebar({ active }: { active: string }) {
  return (
    <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col bg-brand p-5 text-white">
      <Brand subtitle="Área de aprendizagem" />
      {items.length > 0 && (
        <nav className="mt-8 space-y-2">
          {items.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={[
                "block rounded-md px-4 py-3 font-bold",
                active === href
                  ? "bg-brand-accent text-brand"
                  : "hover:bg-white/10",
              ].join(" ")}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
      <Link
        href="/login"
        className="mt-auto rounded-md px-4 py-3 font-bold hover:bg-white/10"
      >
        Sair
      </Link>
    </aside>
  );
}
