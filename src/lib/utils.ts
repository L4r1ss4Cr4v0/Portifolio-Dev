import { clsx, type ClassValue } from "clsx";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatToSlug(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getResumeInfo() {
  const { i18n, t } = useTranslation();

  const url = `/files/${i18n.language}/${t(
    "navigation.resume",
  )}%20-%20Larissa Cravo Carvalho Câmara Santos.pdf`;
  const downloadedFileName = `${t(
    "navigation.resume",
  )} - Larissa Cravo Carvalho Câmara Santos.pdf`;
  return [url, downloadedFileName];
}
