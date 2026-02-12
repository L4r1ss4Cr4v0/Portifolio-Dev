import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'glass-card p-6',
        hover && 'hover:shadow-lg transition-shadow duration-300',
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}