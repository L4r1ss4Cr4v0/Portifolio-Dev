import { navItems } from "@/lib/itens";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useState, useEffect } from "react";
import { LanguageCombobox } from "../LanguageCombobox";
import { useTranslation } from "react-i18next";
import { CustomButton } from "../CustomButton";
import { useResume } from "../ResumeProvider";
import { Button } from "../ui/button";

interface Props {
  isDark: boolean;
  toggleDark: () => void;
}

export function Navbar({ isDark, toggleDark }: Props) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const openResume = useResume();

  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["--header-bg-f", "--header-bg-s"],
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="site-header fixed top-4 sm:top-6 inset-x-0 mx-auto z-50 w-[calc(100%-1.5rem)] sm:w-[95%] max-w-6xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.nav
        className="glass-nav rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2"
        style={{ background: navBackground }}
      >
        <ul className="nav-desktop items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 tracking-wide uppercase"
              >
                {t(item.label)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center gap-2 sm:gap-3">
          <CustomButton
            whileHover={{
              rotate: 360,
            }}
            whileTap={{
              rotate: 360,
            }}
            onClick={toggleDark}
            variant="outline"
            className="flex p-3 transition-none"
            icon={
              isDark ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )
            }
          />

          <LanguageCombobox />

          <CustomButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="nav-desktop px-5 py-2"
            label={t("navigation.resume")}
            variant="outline"
            onClick={openResume}
          />
        </div>

        <Button
          variant="outline"
          onClick={() => {
            setIsOpen(false);
            openResume();
          }}
          className="nav-mobile items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background/50 text-xs font-medium"
        >
          CV
          <Download className="w-3.5 h-3.5" />
        </Button>

        <button
          className="nav-mobile items-center justify-center p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {isOpen && (
          <motion.div
            className="nav-mobile-panel absolute top-full left-0 right-0 mt-2 glass-card p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="w-full px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors duration-200 tracking-wide uppercase text-left"
                  >
                    {t(item.label)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.nav>
    </motion.header>
  );
}
