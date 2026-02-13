import { motion } from "framer-motion";
import { Github, Linkedin, Mouse } from "lucide-react";
import { SkillBadge } from "../SkillBadge";
import { GITHUB, LINKEDIN, skills } from "@/lib/itens";
import { CustomButton } from "../ui/button/CustomButton";
import DecryptedText from "../DecryptedText";
import { AnimatedText } from "../AnimatedText";
import TiltedCard from "../TiltedCard";
import { Trans, useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="font-light">
                  <Trans
                    i18nKey="hero.greeting"
                    components={[<strong className="font-bold" />]}
                  />
                </span>

                <br />
                <AnimatedText
                  text={t("hero.name")}
                  className="text-foreground"
                  delay={0.3}
                />
              </h1>

              <motion.p
                className="text-lg text-muted-foreground max-w-md leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {t("hero.description")}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {skills.map((skill, index) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  index={index}
                  borderColor={skill.color}
                  variant="outline"
                />
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <CustomButton
                asChild
                variant="outline"
                className="text-sm tracking-wide uppercase"
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
                className="text-sm tracking-wide uppercase"
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
            containerHeight="500px"
            imageHeight="500px"
            imageWidth="500px"
            rotateAmplitude={10}
            scaleOnHover={1.05}
          />
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full border border-border hover:bg-zinc-200 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        whileHover={{ y: 5 }}
      >
        <Mouse className="w-8 h-8 text-muted-foreground" />
      </motion.button>
    </section>
  );
}
