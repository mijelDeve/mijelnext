"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/constants";

const projectImages: Record<string, { gradient: string; icon: string }> = {
  flujos: { gradient: "from-violet-600 to-purple-600", icon: "🔮" },
  pichangas: { gradient: "from-green-600 to-emerald-600", icon: "⚽" },
};

export function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            Proyectos Destacados
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Algunos de los proyectos en los que he trabajado, desde MVPs hasta
            aplicaciones completas.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => {
              const imageStyle = projectImages[project.image] || projectImages.landing;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:border-primary/50 transition-colors">
                    <div
                      className={`h-48 bg-gradient-to-br ${imageStyle.gradient} flex items-center justify-center`}
                    >
                      <span className="text-4xl">{imageStyle.icon}</span>
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ver demo
                        </a>
                      </Button>
                      {project.codeUrl ? (
                        <Button variant="ghost" size="sm" asChild>
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Código
                          </a>
                        </Button>
                      ) : (
                        <span className="text-xs text-muted-foreground px-2">
                          🔒 Código privado
                        </span>
                      )}
                    </CardFooter>
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
