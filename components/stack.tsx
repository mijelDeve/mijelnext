"use client";

import { motion } from "framer-motion";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiSupabase, SiPostgresql, SiDocker, SiGithub, SiReact, SiNodedotjs } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { STACK } from "@/lib/constants";

const iconMap: Record<string, { icon: React.ComponentType<{ size?: number; className?: string }>; color: string }> = {
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "Tailwind": { icon: SiTailwindcss, color: "#06B6D4" },
  "Supabase": { icon: SiSupabase, color: "#3ECF8E" },
  "PostgreSQL": { icon: SiPostgresql, color: "#336791" },
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "AWS": { icon: SiGithub, color: "#FF9900" }, // Fallback - AWS no disponible en Si
  "Git": { icon: SiGithub, color: "#F05032" },
  "React": { icon: SiReact, color: "#61DAFB" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
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
              const { icon: Icon, color } = iconMap[tech.name] || { icon: SiNextdotjs, color: "#888888" };
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
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${color}15` }}
                      >
                        <span style={{ color }}>
                          <Icon size={24} className="transition-transform hover:scale-110" />
                        </span>
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
