import { useInView as useFramerInView } from 'framer-motion';
import { useRef } from 'react';

interface UseInViewOptions {
  once?: boolean;
  amount?: number | 'some' | 'all';
}

export function useInView(options: UseInViewOptions = {}) {
  const { once = true, amount = 0.3 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useFramerInView(ref, { once, amount });
  
  return { ref, isInView };
}