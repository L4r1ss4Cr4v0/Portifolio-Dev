"use client";

import "/node_modules/flag-icons/css/flag-icons.min.css";
import {
  Combobox,
  ComboboxContent,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@/components/ui/combobox";
import { Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import { languages } from "@/lib/itens";
import { useTranslation } from "react-i18next";

export function LanguageCombobox() {
  const { i18n } = useTranslation();

  const changeLanguages = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Combobox items={languages}>
        <ComboboxTrigger
          className={
            "p-3 h-fit rounded-2xl border-2 border-border bg-background hover:bg-secondary"
          }
        >
          <Globe2 />
        </ComboboxTrigger>
        <ComboboxContent align="center">
          <ComboboxList>
            {({ language, flag, code }) => (
              <ComboboxItem
                key={language}
                value={language}
                onClick={() => changeLanguages(code)}
              >
                <span className={`fi fi-${flag}`}></span>
                {language}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </motion.div>
  );
}
