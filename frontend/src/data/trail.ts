import {
  Atom,
  Blocks,
  MousePointerClick,
  Route,
  Trophy,
  type LucideIcon,
} from "lucide-react";
export type ModuleStatus = "completed" | "current" | "locked";
export type TrailWorld = {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  lessons: { slug: string; title: string }[];
};
export const prototypeWorlds: TrailWorld[] = [
  {
    id: 1,
    slug: "primeiros-passos",
    title: "Primeiros Passos",
    description: "Entenda React e prepare o ambiente.",
    icon: Atom,
    lessons: [
      { slug: "o-que-e-react", title: "O que é React" },
      { slug: "instalacao-e-ambiente", title: "Instalação e Ambiente" },
    ],
  },
  {
    id: 2,
    slug: "construindo-interfaces",
    title: "Construindo Interfaces",
    description: "Crie interfaces com JSX, componentes e props.",
    icon: Blocks,
    lessons: [
      { slug: "jsx", title: "JSX" },
      { slug: "componentes-e-props", title: "Componentes e Props" },
    ],
  },
  {
    id: 3,
    slug: "interatividade",
    title: "Interatividade",
    description: "Use eventos, estado, formulários e listas.",
    icon: MousePointerClick,
    lessons: [
      { slug: "eventos-e-usestate", title: "Eventos e useState" },
      { slug: "formularios-e-listas", title: "Formulários e Listas" },
    ],
  },
  {
    id: 4,
    slug: "aplicacoes-reais",
    title: "Aplicações Reais",
    description: "Sincronize dados e organize a navegação.",
    icon: Route,
    lessons: [
      { slug: "useeffect", title: "O hook useEffect" },
      { slug: "navegacao", title: "Navegação" },
    ],
  },
  {
    id: 5,
    slug: "desafio-final",
    title: "Desafio Final",
    description: "Construa uma aplicação guiada.",
    icon: Trophy,
    lessons: [{ slug: "projeto-final", title: "Projeto guiado" }],
  },
];
