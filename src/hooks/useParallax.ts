import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxOptions {
  offset?: number;
  speed?: number;
}

export function useParallax(options: ParallaxOptions = {}) {
  const { offset = 300, speed = 0.5 } = options;
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [offset * speed, -offset * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  
  return { ref, y, opacity, scrollYProgress };
}

export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
}