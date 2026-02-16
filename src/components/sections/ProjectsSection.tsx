import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { ParallaxTitle } from "../ParallaxTitle";
import { DeviceFrame } from "../DeviceFrame";
import { useTranslation } from "react-i18next";
import { projects } from "@/lib/itens";

export function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ParallaxTitle>{t("navigation.projects")}</ParallaxTitle>

        <div className="mt-16 space-y-32">
          {projects.map((project, index) => {
            const title = t(`projects.${project.key}.title`);
            const description = t(`projects.${project.key}.description`);

            return (
              <motion.div
                key={project.key}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <DeviceFrame type="tablet">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}
                    >
                      <motion.div
                        className="text-4xl font-bold text-foreground/20"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {title}
                      </motion.div>
                    </div>
                  </DeviceFrame>
                </div>

                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                    {title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-secondary-foreground border-[1px] "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <motion.button
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t("common.viewGithub")}
                      <Github className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
