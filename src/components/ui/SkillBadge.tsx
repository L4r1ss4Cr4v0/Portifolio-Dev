import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  borderColor?: string;
  index: number;
  variant?: "default" | "outline" | "filled";
}

export function SkillBadge({
  name,
  borderColor,
  index,
  variant = "default",
}: SkillBadgeProps) {
  const variants = {
    default: "bg-secondary text-secondary-foreground border border-border",
    outline:
      "border-[3px] border-foreground/20 text-foreground hover:border-foreground/40",
    filled: "bg-primary text-primary-foreground",
  };

  return (
    <motion.span
      className={cn(
        "inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-default",
        variants[variant],
        `hover:border-[var(--border-color)]`
      )}
      style={{ "--border-color": borderColor } as React.CSSProperties}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.05 }}
    >
      {name}
    </motion.span>
  );
}
