import { useTranslation } from "react-i18next";

export function useResumeDownload() {
  const { i18n, t } = useTranslation();

  function download() {
    const link = document.createElement("a");
    link.href = `/files/${i18n.language}/${t(
      "navigation.resume"
    )} - Larissa Cravo Carvalho Câmara Santos.pdf`;
    link.download = `${t(
      "navigation.resume"
    )} - Larissa Cravo Carvalho Câmara Santos.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return { download };
}
