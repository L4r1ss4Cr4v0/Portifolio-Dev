import { useRef } from "react";
import { CustomButton } from "./CustomButton";
import { useTranslation } from "react-i18next";
import { sendForm } from "@emailjs/browser";

export default function CustomForms() {
  const { t } = useTranslation();
  const form = useRef();

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  function sendEmail(e) {
    e.preventDefault();

    sendForm(serviceId, templateId, form.current, {
      publicKey: publicKey,
    }).then(
      () => {
        console.log("Sucesso ao enviar o email!");
      },
      (error) => {
        console.log("Falha durante o envio do email! Razão:", error.text);
      },
    );
  }
  return (
    <form className="space-y-6 " ref={form} onSubmit={sendEmail}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            {t("contact.form.nameLabel")}
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-foreground/30 focus:outline-none transition-colors"
            placeholder={t("contact.form.namePlaceholder")}
            name="name"
            required
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
            name="email"
            required
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
          name="subject"
          required
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
          name="message"
          required
        />
      </div>

      <CustomButton
        type="submit"
        variant="glass"
        label={t("contact.form.submitButton")}
      ></CustomButton>
    </form>
  );
}
