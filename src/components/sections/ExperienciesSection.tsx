import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { ParallaxTitle } from "../ParallaxTitle";
import { GlassCard } from "../GlassCard";
import { experiences } from "@/lib/itens";
import { Trans, useTranslation } from "react-i18next";

export function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section id="experience" className=" px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <ParallaxTitle>{t(`experiencies.title`)}</ParallaxTitle>

        <div className="relative ">
          <div className="absolute left-5 top-0 bottom-0 w-px -translate-x-1/2 bg-[--bold]" />

          <div className="space-y-8 sm:space-y-12 mt-10">
            {experiences.map((exp) => (
              <motion.div
                key={exp.key}
                className="relative flex"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="absolute left-0 top-6 z-10 flex items-center justify-center w-10 h-10 rounded-full glass-card"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  <exp.icon className="w-5 h-5 text-[--primary]" />
                </motion.div>

                <div className="ml-14 sm:ml-16 w-full">
                  <GlassCard className="p-6 sm:p-8">
                    <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-wider bg-secondary rounded-full text-secondary-foreground mb-4">
                      {t(`experiencies.${exp.key}.period`)}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                      {t(`experiencies.${exp.key}.role`)}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-base">
                      <span className="font-medium text-foreground/80">
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {t(`experiencies.${exp.key}.location`)}
                      </span>
                    </div>

                    <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      <Trans
                        i18nKey={`experiencies.${exp.key}.description`}
                        components={[
                          <span className="text-[--bold] font-medium" />,
                        ]}
                      />
                    </p>

                    <div className="flex flex-wrap gap-2.5 mt-6">
                      {(
                        t(`experiencies.${exp.key}.tags`, {
                          returnObjects: true,
                        }) as string[]
                      ).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs sm:text-sm font-mono border border-pink-600 rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
