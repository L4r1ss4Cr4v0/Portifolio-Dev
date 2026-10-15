import { motion } from "framer-motion";
import { ParallaxTitle } from "../ParallaxTitle";
import { GlassCard } from "../GlassCard";
import { useTranslation } from "react-i18next";
import { contactInfo } from "@/lib/itens";
import CustomForms, { type FormStatus } from "../CustomForms";
import { useState } from "react";
import { cn } from "@/lib/utils";
import CircleShape from "../CircleShape";

export function ContactSection() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto ">
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
                    <item.icon className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {t(item.label)}
                    </div>
                    <div className="font-medium">
                      {item.value !== "contact.position"
                        ? item.value
                        : t(item.value)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pos-absolute "
          >
            {/* <CircleShape /> */}
            <GlassCard
              className={cn(
                "p-8 z-50 transition-[border-color,box-shadow] duration-300",
                formStatus === "error" &&
                  "border-red-500 shadow-[0_0_0_1px_rgba(239,68,68,0.4),0_0_24px_rgba(239,68,68,0.25)]",
                formStatus === "success" &&
                  "border-green-500 shadow-[0_0_0_1px_rgba(34,197,94,0.4),0_0_24px_rgba(34,197,94,0.25)]",
              )}
              hover={false}
            >
              <CustomForms onStatusChange={setFormStatus} />
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
