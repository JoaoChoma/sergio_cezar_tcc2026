import {
  BookOpenCheck,
  ChartNoAxesColumnIncreasing,
  Flame,
  Medal,
  ShieldCheck,
  Sparkles,
  Trophy,
  Zap,
  type LucideIcon,
} from "lucide-react";

type IconContent = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const landingHeroBenefits = [
  "React do zero",
  "Desafios práticos",
  "Trilha por mundos",
];

export const reactReasons = [
  "Biblioteca muito utilizada para criar interfaces web",
  "Presente em produtos digitais, empresas e startups",
  "Base importante para aprender Next.js",
  "Habilidade valorizada para desenvolvimento frontend",
];

export const gamificationItems: IconContent[] = [
  {
    title: "XP por prática",
    text: "Recompensas acompanham práticas avaliáveis e revisões sem substituir o objetivo pedagógico.",
    icon: Zap,
  },
  {
    title: "Conquistas por marco",
    text: "Conquistas ajudam você a reconhecer evoluções importantes no aprendizado.",
    icon: Medal,
  },
  {
    title: "Progresso por módulo",
    text: "Barras e estados de conclusão mostram onde você está e qual é o próximo passo.",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: "Sequência de estudo",
    text: "Sequências incentivam constância, mas sem transformar a jornada em pressão desnecessária.",
    icon: Flame,
  },
];

export const appOutcomes = [
  {
    title: "Componentes reutilizáveis",
    text: "Você aprende a dividir a interface em partes menores e mais fáceis de manter.",
  },
  {
    title: "Estado e interação",
    text: "Desafios mostram como botões, formulários e listas respondem às suas ações.",
  },
  {
    title: "Rotas e telas",
    text: "A trilha apresenta como organizar uma aplicação com páginas e navegação.",
  },
  {
    title: "Projeto e certificado simbólico",
    text: "O percurso termina com um app final para revisar conceitos e registrar a conclusão.",
  },
];

export const authHighlights: IconContent[] = [
  {
    title: "Trilha progressiva",
    text: "Aprenda React em mundos, módulos e desafios conectados.",
    icon: BookOpenCheck,
  },
  {
    title: "XP e conquistas",
    text: "Acompanhe sua evolução, seus níveis e os marcos da jornada.",
    icon: Trophy,
  },
  {
    title: "Feedback visual",
    text: "Veja claramente o que avançou e qual é o próximo passo.",
    icon: Sparkles,
  },
];

export const authBenefits = [
  { label: "Comece pela base", value: "Fundamentos", icon: ShieldCheck },
  { label: "Avance praticando", value: "Desafios guiados", icon: Zap },
  {
    label: "Veja sua evolução",
    value: "Progresso claro",
    icon: ChartNoAxesColumnIncreasing,
  },
];
