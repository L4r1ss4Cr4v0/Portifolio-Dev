import { useEffect } from "react";
import { AlertCircle, CheckCircle2, X } from "lucide-react";

type FormAlertProps = {
  type: "error" | "success";
  message: string;
  onClose: () => void;
  autoCloseMs?: number; // opcional: fecha sozinho após X ms
};

const styles = {
  error: "border-red-500/30 bg-red-500/10 text-red-500",
  success: "border-green-500/30 bg-green-500/10 text-green-500",
};

export default function FormAlert({
  type,
  message,
  onClose,
  autoCloseMs,
}: FormAlertProps) {
  useEffect(() => {
    if (!autoCloseMs) return;
    const timer = setTimeout(onClose, autoCloseMs);
    return () => clearTimeout(timer);
  }, [autoCloseMs, onClose, message]);

  const Icon = type === "error" ? AlertCircle : CheckCircle2;

  return (
    <div
      role={type === "error" ? "alert" : "status"}
      aria-live={type === "error" ? "assertive" : "polite"}
      className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${styles[type]}`}
    >
      <Icon className="mt-0.5 h-4 w-4 shrink-0" />
      <p className="flex-1">{message}</p>
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="shrink-0 opacity-70 transition-opacity hover:opacity-100"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
