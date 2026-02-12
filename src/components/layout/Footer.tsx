import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { CustomButton } from "../ui/button/CustomButton";
import { CV } from "@/lib/itens";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/larissa-cravo-carvalho-camara-santos-154b66306/",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/L4r1ss4Cr4v0/", label: "GitHub" },
  { icon: Mail, href: "mailto:larissacravoccamara@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-3 gap-12 items-center"
      >
        <div className="space-y-4">
          <h3 className="text-lg font-semibold tracking-wide uppercase">
            Larissa Cravo Carvalho Câmara Santos
          </h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Espero que tenha gostado dos meus projetos, currículo e, acima de
            tudo, da minha pessoa
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-primary-foreground/50 text-lg font-mono">
            © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex flex-col-reverse items-center gap-5">
          <CustomButton asChild>
            <a href={`/${CV}`} download={CV}>
              <Download /> Download
            </a>
          </CustomButton>
          <div className="flex justify-end items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="p-3 rounded-full border border-primary-foreground/20 hover:border-primary-foreground/50 hover:bg-primary-foreground/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
