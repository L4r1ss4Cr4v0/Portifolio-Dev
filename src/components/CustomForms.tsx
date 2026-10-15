import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { sendForm } from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { CustomButton } from "./CustomButton";

type AlertState = { type: "error" | "success"; message: string } | null;

export type FormStatus = "idle" | "error" | "success";

type CustomFormsProps = {
  onStatusChange?: (status: FormStatus) => void;
};

const recaptchaLang: Record<string, string> = {
  ptBR: "pt-BR",
  pt: "pt-BR",
  en: "en",
  es: "es",
};

export default function CustomForms({ onStatusChange }: CustomFormsProps) {
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

  const status: FormStatus = alert?.type ?? (captchaError ? "error" : "idle");

  useEffect(() => {
    onStatusChange?.(status);
  }, [status, onStatusChange]);

  function getErrorMessage(error: { status?: number; text?: string }) {
    if (!error?.status) return t("contact.form.errors.network");
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
      {captchaError && (
        <p className=" text-red-500 text-center">
          {t("contact.form.captchaError")}
        </p>
      )}
      {alert && (
        <p className="text-green-600 text-center mb-8">{alert.message}</p>
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
      </div>
      {captchaError ? (
        <CustomButton
          type="submit"
          variant="glass"
          className="border-red-600 text-red-600 after:bg-red-600"
          label={t("contact.form.submitButton")}
        />
      ) : alert ? (
        <CustomButton
          type="submit"
          variant="glass"
          className="border-green-600 text-green-600 after:bg-green-600"
          label={t("contact.form.submitButton")}
        />
      ) : (
        <CustomButton
          type="submit"
          variant="glass"
          label={t("contact.form.submitButton")}
        />
      )}
    </form>
  );
}
