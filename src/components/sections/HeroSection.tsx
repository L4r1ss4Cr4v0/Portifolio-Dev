import { motion } from "framer-motion";
import { Github, Linkedin, Mouse } from "lucide-react";
import { SkillBadge } from "../SkillBadge";
import { GITHUB, LINKEDIN, skills, techsTagsColors } from "@/lib/itens";
import { AnimatedText } from "../AnimatedText";
import TiltedCard from "../TiltedCard";
import { Trans, useTranslation } from "react-i18next";
import { CustomButton } from "../CustomButton";

export function HeroSection() {
  const { t } = useTranslation();

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 pt-28 sm:pt-32 pb-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 sm:space-y-8 min-w-0 text-center lg:text-left"
          >
            <div className="space-y-4">
              <h1 className="text-4xl min-[400px]:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] break-words">
                <span className="font-light">
                  <Trans
                    i18nKey="hero.greeting"
                    components={[<strong className="font-bold" />]}
                  />
                </span>

                <br />
                <AnimatedText
                  text={t("hero.name")}
                  className="text-foreground justify-center lg:justify-start"
                  delay={0.3}
                />
              </h1>

              <motion.p
                className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {t("hero.description")}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {skills.map((skill, index) => (
                <SkillBadge
                  key={skill}
                  name={skill}
                  index={index}
                  borderColor={techsTagsColors[skill]}
                  variant="outline"
                />
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <CustomButton
                asChild
                variant="outline"
                className="text-sm tracking-wide uppercase w-full sm:w-auto"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href={LINKEDIN} target="_blank">
                  {t("common.viewLinkedIn")}
                  <Linkedin />
                </a>
              </CustomButton>

              <CustomButton
                asChild
                variant="filled"
                className="text-sm tracking-wide uppercase w-full sm:w-auto"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href={GITHUB} target="_blank">
                  {t("common.viewGithub")}
                  <Github />
                </a>
              </CustomButton>
            </motion.div>
          </motion.div>

          <TiltedCard
            imageSrc="Perfil.jpg"
            altText="Foto de perfil"
            containerHeight="auto"
            containerWidth="100%"
            imageWidth="min(100%, 500px)"
            aspectRatio="1 / 1"
            showMobileWarning={false}
            rotateAmplitude={10}
            scaleOnHover={1.05}
          />
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 p-3 rounded-full border border-border hover:bg-zinc-200 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        whileHover={{ y: 5 }}
      >
        <Mouse className="w-8 h-8 text-muted-foreground hover:text-pink-600" />
      </motion.button>
    </section>
  );
}
