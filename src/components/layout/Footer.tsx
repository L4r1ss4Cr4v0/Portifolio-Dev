import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CustomButton } from "../CustomButton";
import { EMAIL, socialLinks } from "@/lib/itens";
import { useState } from "react";
import { useResume } from "../ResumeProvider";

export function Footer() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState<boolean>(false);

  const openResume = useResume();

  async function copyEmail() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16 px-6 sm:px-10 md:px-20">
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
            {t("footer.closingMessage")}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-primary-foreground/50 text-lg font-mono">
            © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex flex-col-reverse items-center gap-5">
          <CustomButton label={t("navigation.resume")} onClick={openResume} />

          <div className="flex justify-end items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) =>
              label !== "contact.email" ? (
                <CustomButton
                  asChild
                  key={label}
                  className="hover:border-[--hold-btn-border]"
                >
                  <a href={href} target="_blank" aria-label={label}>
                    <Icon className="w-5 h-5" />
                  </a>
                </CustomButton>
              ) : (
                <CustomButton
                  key={label}
                  icon={<Icon className="hover:border-[--hold-btn-border]" />}
                  onClick={copyEmail}
                  showFloatingLabel={true}
                  floatingLabelText={copied ? "Email copiado" : "Copiar email"}
                />
              ),
            )}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
