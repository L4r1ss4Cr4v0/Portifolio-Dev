import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["hsl(0 0% 90% / 0.6)", "hsl(0 0% 100% / 0.8)"]
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
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.nav
        className="glass-nav rounded-full px-6 py-3 flex items-center justify-between"
        style={{ background: navBackground }}
      >
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 tracking-wide uppercase"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <motion.button
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-border bg-background/50 text-sm font-medium hover:bg-secondary transition-all duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Curriculo
          <Download className="w-4 h-4" />
        </motion.button>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 glass-card p-4 md:hidden"
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
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-border">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border bg-background/50 text-sm font-medium hover:bg-secondary transition-all duration-200">
                  Curriculum
                  <Download className="w-4 h-4" />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </motion.nav>
    </motion.header>
  );
}
