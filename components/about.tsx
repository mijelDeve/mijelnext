"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre mí</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative w-40 h-40 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-violet-600 rounded-2xl rotate-6 opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-bl from-violet-600 to-primary rounded-2xl -rotate-6 opacity-30" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border">
                <Image
                  src="/images/profile.jpg"
                  alt={PERSONAL_INFO.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
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
