import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialButtonProps {
  icon: LucideIcon;
  label: string;
  href?: string;
  variant?: 'outline' | 'filled';
  className?: string;
}

export function SocialButton({ 
  icon: Icon, 
  label, 
  href = '#',
  variant = 'outline',
  className = ''
}: SocialButtonProps) {
  const variants = {
    outline: 'border-2 border-border bg-background hover:bg-secondary',
    filled: 'bg-primary text-primary-foreground hover:bg-primary/90',
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'flex items-center justify-center gap-4 px-8 py-4 rounded-2xl font-medium transition-all duration-300',
        variants[variant],
        className
      )}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-sm tracking-wide uppercase">{label}</span>
      <Icon className="w-5 h-5" />
    </motion.a>
  );
}