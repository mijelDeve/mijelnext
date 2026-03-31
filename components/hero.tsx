"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-lg text-muted-foreground mb-4">
              Hola, soy {PERSONAL_INFO.name}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {PERSONAL_INFO.title}{" "}
              <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                {PERSONAL_INFO.subtitle}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              {PERSONAL_INFO.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg">
                <a href="#proyectos">
                  Ver mis proyectos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contacto">Contactarme ahora</a>
              </Button>
            </div>
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-violet-600 rounded-xl rotate-3 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-bl from-violet-600 to-primary rounded-xl -rotate-3 opacity-20" />
              <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl border border-zinc-800">
                <div className="bg-zinc-900 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-zinc-500">terminal</span>
                </div>
                <div className="p-4 font-mono text-xs md:text-sm text-zinc-300 space-y-1">
                  <div>
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400 ml-2">~</span>
                    <span className="text-zinc-400 ml-1">neofetch</span>
                  </div>
                  <div className="text-zinc-400 ml-4">
                    <span className="text-yellow-400">████████████████</span> usuario@desktop
                  </div>
                  <div className="text-zinc-400 ml-4">
                    OS: <span className="text-purple-400">Next.js + Supabase</span>
                  </div>
                  <div className="text-zinc-400 ml-4">
                    Rama: <span className="text-cyan-400">Full-Stack Developer</span>
                  </div>
                  <div className="text-zinc-400 ml-4">
                    Café: <span className="text-green-400">Infinito</span>
                  </div>
                  
                  <div className="mt-3">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400 ml-2">~</span>
                    <span className="text-zinc-400 ml-1">cat historia.txt</span>
                  </div>
                  <div className="text-zinc-400 ml-4">Estudio desarrollo web desde 2020.</div>
                  <div className="text-zinc-400 ml-4">Me apasiona crear soluciones elegantes.</div>
                  
                  <div className="mt-3">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400 ml-2">~</span>
                    <span className="text-zinc-400 ml-1">ping skills</span>
                  </div>
                  <div className="text-green-400 ml-4">✓ React • TypeScript • Node.js • PostgreSQL</div>
                  
                  <div className="mt-3">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400 ml-2">~</span>
                    <span className="text-zinc-400 ml-1">echo $MOTIVACION</span>
                  </div>
                  <div className="text-yellow-300 ml-4">{`"Construir cosas que funcionan y solving problemas"`}</div>
                  
                  <div className="mt-3">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400 ml-2">~</span>
                    <span className="text-zinc-400 ml-1 animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
