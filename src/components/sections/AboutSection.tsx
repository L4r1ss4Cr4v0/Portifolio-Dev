import { motion } from "framer-motion";
import { GlassCard } from "../GlassCard";
import { ParallaxTitle } from "../ParallaxTitle";
import { Trans, useTranslation } from "react-i18next";
import { hightlights } from "@/lib/itens";

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <ParallaxTitle>{t("navigation.about")}</ParallaxTitle>

        <div className="grid lg:grid-cols-2 gap-16 mt-8">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
              <Trans
                i18nKey="about.title"
                components={[<span className="text-pink-600" />]}
              />
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <Trans
                  i18nKey="about.paragraph1"
                  components={[<span className="text-[--bold] font-medium" />]}
                />
              </p>
              <p>
                <Trans
                  i18nKey="about.paragraph2"
                  components={[<span className="text-[--bold] font-medium" />]}
                />
              </p>
              <p>
                <Trans
                  i18nKey="about.paragraph3"
                  components={[<span className="text-[--bold] font-medium" />]}
                />
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {hightlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard className="h-full">
                    <Icon className="w-8 h-8 mb-4 text-pink-600" />
                    <h4 className="text-xl font-semibold mb-2">
                      {t(`stats.${item.key}.value`)}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t(`stats.${item.key}.label`)}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
