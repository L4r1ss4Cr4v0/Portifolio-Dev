import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { ParallaxTitle } from "../ParallaxTitle";
import { DeviceFrame } from "../DeviceFrame";
import { useTranslation } from "react-i18next";
import { projects, techsTagsColors } from "@/lib/itens";
import { SkillBadge } from "../SkillBadge";
import { CustomButton } from "../CustomButton";
import { ProjectPreview } from "../ProjectPreview";

export function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ParallaxTitle>{t("navigation.projects")}</ParallaxTitle>

        <div className="mt-16 space-y-32">
          {projects.map((project, index) => {
            const title = project.name;
            const description = t(`projects.${project.key}.description`);

            const hasLink = !!project.link;
            const hasGithub = !!project.github;

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
                  <DeviceFrame
                    type="tablet"
                    onProjectClick={
                      hasLink
                        ? () =>
                            window.open(
                              project.link!,
                              "_blank",
                              "noopener,noreferrer",
                            )
                        : undefined
                    }
                  >
                    <ProjectPreview
                      image={project.image}
                      title={title}
                      gradient={project["placeholder-color"]}
                    />
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
                      <SkillBadge
                        key={tech}
                        name={tech}
                        index={index}
                        borderColor={techsTagsColors[tech]}
                        variant="outline"
                      />
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {hasGithub && (
                      <CustomButton
                        onClick={() =>
                          window.open(
                            project.github!,
                            "_blank",
                            "noopener,noreferrer",
                          )
                        }
                        variant="filled"
                        label={t("common.viewGithub")}
                        icon={<Github className="w-4 h-4" />}
                      />
                    )}
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
