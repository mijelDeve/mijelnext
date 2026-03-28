"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Container,
  Cloud,
  GitBranch,
  Terminal,
  Box,
  Palette,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { STACK } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Next.js": Code2,
  "TypeScript": Code2,
  "Tailwind": Palette,
  "Supabase": Database,
  "PostgreSQL": Database,
  "Docker": Container,
  "AWS": Cloud,
  "Git": GitBranch,
};

export function Stack() {
  return (
    <section id="stack" className="py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Mi Stack</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Tecnologías con las que trabajo día a día para construir aplicaciones
            modernas y escalables.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STACK.map((tech, index) => {
              const Icon = iconMap[tech.name] || Terminal;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="hover:border-primary/50 transition-colors">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="font-medium">{tech.name}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
