"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { PERSONAL_INFO, STRENGTHS } from "@/lib/constants";

export function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre mí</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Avatar className="w-32 h-32 border-2 border-primary/20">
              <AvatarFallback className="text-3xl bg-gradient-to-br from-primary to-violet-500 text-white">
                {PERSONAL_INFO.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-lg text-muted-foreground mb-6">
                Soy un desarrollador full-stack apasionado por crear
                experiencias digitales modernas y eficientes. Me especializo en
                arquitecturas escalables con Next.js y Supabase, siempre
                enfocado en entregar código limpio y mantenible.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Con experiencia en proyectos de diverso tipo, desde MVPs hasta
                aplicaciones empresariales, me adapto rápidamente a nuevos
                desafíos y tecnologías.
              </p>
              <Separator className="my-6" />
              <h3 className="font-semibold mb-4">Mis fortalezas:</h3>
              <div className="flex flex-wrap gap-2">
                {STRENGTHS.map((strength, index) => (
                  <span
                    key={index}
                    className="text-sm px-3 py-1 bg-card border rounded-full text-muted-foreground"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
