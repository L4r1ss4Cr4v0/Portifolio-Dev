import { motion } from "framer-motion";
import { ParallaxTitle } from "../ParallaxTitle";
import { SkillBadge } from "../SkillBadge";
import { useTranslation } from "react-i18next";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Python",
      "Go",
      "GraphQL",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    title: "Data & AI",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "TensorFlow",
      "OpenAI",
      "LangChain",
    ],
  },
];

const STATS = [
  { value: "10+", translationKey: "metrics.yearsExperience" },
  { value: "50+", translationKey: "metrics.projectsDelivered" },
  { value: "25+", translationKey: "metrics.teamMembersLed" },
  { value: "99%", translationKey: "metrics.clientSatisfaction" },
];

export function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30 relative">
      <div className="max-w-6xl mx-auto">
        <ParallaxTitle>{t("navigation.skills")}</ParallaxTitle>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-muted-foreground uppercase tracking-wider">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skill}
                    name={skill}
                    index={skillIndex + categoryIndex * 6}
                    variant="default"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.translationKey}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>

              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {t(stat.translationKey)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
