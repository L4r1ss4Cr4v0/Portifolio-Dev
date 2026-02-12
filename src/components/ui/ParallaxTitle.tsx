import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxTitleProps {
  children: string;
  className?: string;
}

export function ParallaxTitle({
  children,
  className = "",
}: ParallaxTitleProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="overflow-hidden py-8">
      <motion.h2
        className={`section-title parallax-title select-none text-zinc-700 ${className}`}
        style={{ x }}
      >
        {children}
      </motion.h2>
    </div>
  );
}
