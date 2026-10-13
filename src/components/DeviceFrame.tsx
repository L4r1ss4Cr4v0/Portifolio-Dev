import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface DeviceFrameProps {
  children: React.ReactNode;
  className?: string;
  type?: "tablet" | "phone" | "laptop";
  onProjectClick?: () => void;
}

export function DeviceFrame({
  children,
  className = "",
  type = "tablet",
  onProjectClick,
}: DeviceFrameProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  const frameStyles = {
    tablet: "rounded-lg aspect-[4/3]",
    phone: "rounded-lg aspect-[9/16]",
    laptop: "rounded-lg aspect-[16/10]",
  };

  return (
    <motion.div
      className={cn(
        "shadow-2xl overflow-hidden hover:cursor-pointer relative w-full max-w-xl",
        frameStyles[type],
        className,
      )}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformStyle: "preserve-3d" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onProjectClick}
    >
      <motion.div
        className="w-full h-full bg-background overflow-hidden"
        animate={{
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>

      {!!onProjectClick && (
        <motion.div
          className="absolute inset-0 bg-black/30 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {!!onProjectClick && (
        <motion.button
          className="absolute inset-0 m-auto 
                 w-fit h-fit
                 bg-white text-black font-semibold 
                 px-8 py-3 rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
            y: isHovered ? 0 : 10,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => {
            e.stopPropagation();
            onProjectClick && onProjectClick();
          }}
        >
          {t("common.viewProject")}
        </motion.button>
      )}
    </motion.div>
  );
}
