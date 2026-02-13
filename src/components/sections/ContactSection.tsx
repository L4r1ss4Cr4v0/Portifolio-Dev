import { motion } from "framer-motion";
import { AVAILABILITY, EMAIL, LOCATION } from "@/lib/itens";
import { Calendar, Mail, MapPin, Send } from "lucide-react";
import { CustomButton } from "../ui/button/CustomButton";
import { ParallaxTitle } from "../ParallaxTitle";
import { GlassCard } from "../GlassCard";
import { useTranslation } from "react-i18next";

const contactInfo = [
  { icon: Mail, label: "contact.email", value: EMAIL },
  { icon: MapPin, label: "contact.location", value: LOCATION },
  { icon: Calendar, label: "contact.availability", value: AVAILABILITY },
];

export function ContactSection() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <ParallaxTitle>{t("navigation.contact")}</ParallaxTitle>

        <div className="mt-16 grid lg:grid-cols-2 gap-16">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                {t("contact.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                {t("contact.description")}
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {t(item.label)}
                    </div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8" hover={false}>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      {t("contact.form.nameLabel")}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-foreground/30 focus:outline-none transition-colors"
                      placeholder={t("contact.form.namePlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      {t("contact.form.emailLabel")}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-foreground/30 focus:outline-none transition-colors"
                      placeholder={t("contact.form.emailPlaceholder")}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {t("contact.form.subjectLabel")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-foreground/30 focus:outline-none transition-colors"
                    placeholder={t("contact.form.subjectPlaceholder")}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {t("contact.form.messageLabel")}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-foreground/30 focus:outline-none transition-colors resize-none"
                    placeholder={t("contact.form.messagePlaceholder")}
                  />
                </div>

                <CustomButton
                  variant="glass"
                  label={t("contact.form.submitButton")}
                ></CustomButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
