import { motion } from "framer-motion";
import { ParallaxTitle } from "../ui/ParallaxTitle";
import { SkillBadge } from "../ui/SkillBadge";

const skillCategories = [
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

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30 relative">
      <div className="max-w-6xl mx-auto">
        <ParallaxTitle>Skills</ParallaxTitle>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
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

        {/* Experience Stats */}
        <motion.div
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "50+", label: "Projects Delivered" },
            { value: "25+", label: "Team Members Led" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
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
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
