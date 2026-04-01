export const PERSONAL_INFO = {
  name: "Mijel",
  initials: "MD",
  title: "Desarrollador Full-Stack",
  subtitle: "Especializado en Next.js + Supabase",
  description:
    "Construyo aplicaciones modernas, rápidas y escalables. Entregas rápidas y código limpio.",
  email: "mijel.dev@gmail.com",
  github: "https://github.com/mijelDeve",
  linkedin: "https://www.linkedin.com/in/mijeldev/",
  available: true,
  photo: "/images/profile.jpg",
};

export const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#contacto", label: "Contacto" },
];

export const STRENGTHS = [
  "Next.js 15 (App Router)",
  "Supabase",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "PostgreSQL",
  "AWS",
  "Docker",
];

export const STACK = [
  { name: "Next.js", icon: "⚡" },
  { name: "TypeScript", icon: "📘" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Supabase", icon: "🔥" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "📦" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "🔧" },
];

export const PROJECTS = [
  {
    id: 6,
    title: "Creador de Flujos con IA",
    description:
      "Herramienta que transforma descripciones de procesos en diagramas de flujo visuales. Solo ingresa el texto de tu proceso y la IA lo genera automáticamente.",
    tags: ["Next.js", "Supabase", "AI", "Tailwind CSS"],
    demoUrl: "https://creador-flujos-nextjs.vercel.app/",
    codeUrl: undefined,
    image: "flujos",
  },
  {
    id: 5,
    title: "Contabilizador de Pichangas",
    description:
      "App para organizar partidos de fútbol con amigos. Registra goles, maneja equipos y muestra un ranking general de los mejores jugadores.",
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
    demoUrl: "https://contabilidad-pichangas.vercel.app/",
    codeUrl: "https://github.com/mijelDeve",
    image: "pichangas",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Excelente trabajo. Entregó antes de lo esperado y el código estaba muy bien estructurado. Repetiría sin duda.",
    name: "Juan Pérez",
    role: "CEO, StartupXYZ",
  },
  {
    id: 2,
    quote:
      "Muy profesional y detallista. Entendió perfectamente los requerimientos y propuso mejoras técnicas valiosas.",
    name: "María García",
    role: "CTO, TechCorp",
  },
  {
    id: 3,
    quote:
      "Gran comunicación durante todo el proyecto. El resultado superó nuestras expectativas.",
    name: "Carlos López",
    role: "Founder, AppIdeas",
  },
];

export const FOOTER_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#contacto", label: "Contacto" },
];
