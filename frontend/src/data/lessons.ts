export type LessonSetupGuide = {
  title: string;
  description: string;
  requirements: string[];
  steps: {
    title: string;
    description: string;
    action: string;
    command?: string[];
    check?: string;
    tip?: string;
  }[];
  troubleshooting: string[];
};
export type Lesson = {
  id: string;
  title: string;
  world: string;
  worldTitle: string;
  objective: string;
  summary: string;
  duration: string;
  xp: number;
  topics: { title: string }[];
  practice: string;
  checkpoint: string;
  codeFile: string;
  codeLines: string[];
  quiz: { question: string; answer: string };
  sections: { title: string; paragraphs: string[]; code?: string }[];
};
const details = {
  worldTitle: "Rota React",
  summary: "Conteúdo introdutório com leitura e exemplo.",
  duration: "15 min",
  xp: 100,
  topics: [{ title: "React" }],
  practice: "Pratique o conceito apresentado.",
  checkpoint: "Explique o conceito com suas palavras.",
  codeFile: "App.tsx",
  codeLines: [
    "export default function App() {",
    "  return <h1>Rota React</h1>;",
    "}",
  ],
  quiz: {
    question: "Qual conceito foi apresentado?",
    answer: "Revise a seção principal.",
  },
};
export const prototypeLessons: Lesson[] = [
  {
    ...details,
    id: "o-que-e-react",
    title: "O que é React",
    world: "Primeiros Passos",
    objective: [
      "Entender por que React existe e como interfaces são",
      "organizadas.",
    ].join(" "),
    sections: [
      {
        title: "React",
        paragraphs: [
          [
            "React é uma biblioteca JavaScript voltada à construção de",
            "interfaces baseadas em componentes. A abordagem",
            "declarativa permite descrever o resultado visual esperado",
            "e reutilizar partes da interface.",
          ].join(" "),
        ],
      },
      {
        title: "SPA e Virtual DOM",
        paragraphs: [
          [
            "Aplicações de página única atualizam partes da interface",
            "sem recarregar todo o documento.",
          ].join(" "),
          [
            "O Virtual DOM ajuda o React a identificar atualizações",
            "necessárias.",
          ].join(" "),
        ],
      },
    ],
  },
  {
    ...details,
    id: "instalacao-e-ambiente",
    title: "Instalação e Ambiente",
    world: "Primeiros Passos",
    objective: "Preparar Node.js, npm e um projeto React.",
    sections: [
      {
        title: "Ferramentas",
        paragraphs: [
          [
            "Node.js executa ferramentas JavaScript fora do navegador e",
            "npm gerencia dependências.",
          ].join(" "),
        ],
      },
      {
        title: "Primeiro projeto",
        paragraphs: [
          [
            "Crie o projeto, instale dependências e execute o servidor",
            "de desenvolvimento.",
          ].join(" "),
        ],
        code: "npm create vite@latest\nnpm install\nnpm run dev",
      },
    ],
  },
  {
    ...details,
    id: "jsx",
    title: "JSX",
    world: "Construindo Interfaces",
    objective: "Representar a interface com uma sintaxe declarativa.",
    sections: [
      {
        title: "Sintaxe JSX",
        paragraphs: [
          [
            "JSX combina marcação e expressões JavaScript em uma mesma",
            "estrutura.",
          ].join(" "),
        ],
        code: "const titulo = 'Rota React';\nreturn <h1>{titulo}</h1>;",
      },
    ],
  },
  {
    ...details,
    id: "componentes-e-props",
    title: "Componentes e Props",
    world: "Construindo Interfaces",
    objective: "Criar blocos reutilizáveis e receber dados.",
    sections: [
      {
        title: "Componentes",
        paragraphs: [
          [
            "Componentes funcionais são funções que retornam elementos",
            "da interface.",
          ].join(" "),
        ],
        code: "function Saudacao({ nome }) {\n  return <p>Olá, {nome}!</p>;\n}",
      },
    ],
  },
  {
    ...details,
    id: "eventos-e-usestate",
    title: "Eventos e useState",
    world: "Interatividade",
    objective: "Responder a eventos e atualizar estado.",
    sections: [
      {
        title: "Estado",
        paragraphs: [
          "useState mantém informações que mudam durante a interação.",
        ],
        code: "const [contador, setContador] = useState(0);",
      },
    ],
  },
  {
    ...details,
    id: "formularios-e-listas",
    title: "Formulários e Listas",
    world: "Interatividade",
    objective: "Controlar entradas e renderizar coleções.",
    sections: [
      {
        title: "Listas",
        paragraphs: [
          [
            "map transforma dados em elementos e cada item precisa de",
            "uma key estável.",
          ].join(" "),
        ],
        code: "itens.map((item) => <li key={item.id}>{item.nome}</li>)",
      },
    ],
  },
  {
    ...details,
    id: "useeffect",
    title: "O hook useEffect",
    world: "Aplicações Reais",
    objective: "Sincronizar a interface com efeitos externos.",
    sections: [
      {
        title: "Efeitos",
        paragraphs: ["useEffect executa sincronizações após a renderização."],
        code: "useEffect(() => {\n  document.title = titulo;\n}, [titulo]);",
      },
    ],
  },
  {
    ...details,
    id: "navegacao",
    title: "Navegação",
    world: "Aplicações Reais",
    objective: "Conectar páginas e rotas.",
    sections: [
      {
        title: "Rotas",
        paragraphs: [
          [
            "A navegação associa caminhos a diferentes telas da",
            "aplicação.",
          ].join(" "),
        ],
      },
    ],
  },
];
