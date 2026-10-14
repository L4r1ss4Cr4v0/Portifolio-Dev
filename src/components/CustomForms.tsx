import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { sendForm } from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import FormAlert from "@/components/FormAlert";
import { CustomButton } from "./CustomButton";

type AlertState = { type: "error" | "success"; message: string } | null;

const recaptchaLang: Record<string, string> = {
  ptBR: "pt-BR",
  pt: "pt-BR",
  en: "en",
  es: "es",
};

export default function CustomForms() {
  const { t, i18n } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [alert, setAlert] = useState<AlertState>(null);
  const [sending, setSending] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  function getErrorMessage(error: { status?: number; text?: string }) {
    // Sem status = a requisição nem chegou ao servidor (rede caiu, bloqueio...)
    if (!error?.status) return t("contact.form.errors.network");
    if (error.status === 429) return t("contact.form.errors.tooManyRequests");
    if (error.status === 400 || error.status === 412)
      return t("contact.form.errors.invalidRequest");
    if (error.status >= 500) return t("contact.form.errors.server");
    return t("contact.form.errors.generic");
  }

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAlert(null);

    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }

    setSending(true);

    sendForm(serviceId, templateId, form.current!, { publicKey })
      .then(() => {
        setAlert({ type: "success", message: t("contact.form.success") });
        form.current?.reset();
      })
      .catch((error) => {
        console.error("Falha durante o envio do email:", error);
        setAlert({ type: "error", message: getErrorMessage(error) });
      })
      .finally(() => {
        setSending(false);
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
      });
  }

  return (
    <form className="space-y-6" ref={form} onSubmit={sendEmail}>
      {alert && (
        <FormAlert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
          autoCloseMs={alert.type === "success" ? 6000 : undefined}
        />
      )}
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

      <div className="space-y-2">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={recaptchaSiteKey}
          hl={recaptchaLang[i18n.language] ?? "en"}
          onChange={(token) => {
            setCaptchaToken(token);
            if (token) setCaptchaError(false);
          }}
          onExpired={() => setCaptchaToken(null)}
        />
        {captchaError && (
          <p className="text-sm text-red-500">
            {t("contact.form.captchaError")}
          </p>
        )}
      </div>

      <CustomButton
        type="submit"
        variant="glass"
        label={t("contact.form.submitButton")}
      />
    </form>
  );
}
