"use client";

import { motion } from "framer-motion";
import { Sparkles, Layout, ShoppingCart, Rocket, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES, SAAS_PRODUCTS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "🛠️": Sparkles,
  "🎯": Layout,
  "🛒": ShoppingCart,
  "🚀": Rocket,
};

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            Servicios
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Soluciones de desarrollo web personalizadas para tu negocio
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || Sparkles;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:border-primary/50 transition-colors group">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Mis Productos SaaS
            </h3>
            <div className="flex justify-center">
              {SAAS_PRODUCTS.map((saas) => (
                <motion.div
                  key={saas.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="max-w-md w-full bg-gradient-to-br from-violet-500/10 to-purple-500/10 border-violet-500/20 hover:border-violet-500/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-violet-500/20 flex items-center justify-center">
                          <Sparkles className="w-7 h-7 text-violet-500" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold">{saas.name}</h4>
                          <p className="text-muted-foreground text-sm mt-1">
                            {saas.description}
                          </p>
                          {saas.demoUrl && (
                            <Button variant="link" size="sm" asChild className="mt-2 p-0">
                              <a
                                href={saas.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Ver demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
