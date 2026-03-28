# Portfolio Freelance - Next.js + Supabase

Landing page profesional para desarrollador freelance especializado en Next.js y Supabase.

## 🚀 Quick Start

```bash
cd landing-page
npm install
npm run dev
```

Abre http://localhost:3000

## 🛠️ Personalización

### 1. Datos Personales

Edita `lib/constants.ts`:

```typescript
export const PERSONAL_INFO = {
  name: "Tu Nombre",
  initials: "TN", // Para el logo
  title: "Desarrollador Full-Stack",
  subtitle: "Especializado en Next.js + Supabase",
  description: "Tu descripción...",
  email: "tu-email@ejemplo.com",
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-usuario",
  available: true, // Disponibilidad
};
```

### 2. Proyectos

Edita el array `PROJECTS` en `lib/constants.ts`:

```typescript
export const PROJECTS = [
  {
    id: 1,
    title: "Nombre del Proyecto",
    description: "Descripción breve...",
    tags: ["Next.js", "Supabase", "Tailwind"],
    demoUrl: "https://tu-demo.com",
    codeUrl: "https://github.com/tu-repo",
    image: "saas", // s: saas, dashboard, ecommerce, landing
  },
  // ...
];
```

### 3. Testimonials

Edita el array `TESTIMONIALS` en `lib/constants.ts`.

### 4. Stack Tecnológico

Edita el array `STACK` en `lib/constants.ts`.

## 📦 Instalar Dependencias

```bash
npm install
```

## 🏃 Comandos

```bash
npm run dev      # Desarrollo
npm run build    # Producción
npm run start    # Servidor producción
npm run lint    # Linter
```

## 🎨 shadcn/ui

Los componentes ya están incluidos. Para agregar más:

```bash
npx shadcn@latest add button card badge avatar separator sheet input textarea
```

## 🌙 Dark Mode

El tema oscuro está habilitado por defecto. Para cambiar:

Edita `app/layout.tsx`:

```typescript
defaultTheme="dark" // o "light"
```

## 🚀 Deploy a Vercel

1. Haz push a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Configura:
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Deploy!

## 📁 Estructura

```
├── app/
│   ├── globals.css      # Estilos globales + Tailwind
│   ├── layout.tsx        # Root layout
│   └── page.tsx         # Página principal
├── components/
│   ├── ui/              # Componentes shadcn/ui
│   ├── navbar.tsx       # Navegación
│   ├── hero.tsx         # Sección hero
│   ├── about.tsx        # Sobre mí
│   ├── stack.tsx        # Stack tecnológico
│   ├── projects.tsx     # Proyectos
│   ├── testimonials.tsx # Testimonios
│   ├── contact.tsx      # Contacto
│   └── footer.tsx       # Footer
├── lib/
│   ├── constants.ts     # Textos configurables
│   └── utils.ts         # Utilidades (cn)
└── hooks/
    └── use-scroll.ts    # Hook para scroll
```

## 🔧 Tecnologías

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- Lucide React
- next-themes

## 📝 Licencia

MIT
