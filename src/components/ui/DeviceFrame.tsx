import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DeviceFrameProps {
  children: React.ReactNode;
  className?: string;
  type?: 'tablet' | 'phone' | 'laptop';
}

export function DeviceFrame({ 
  children, 
  className = '',
  type = 'tablet'
}: DeviceFrameProps) {
  const frameStyles = {
    tablet: 'rounded-[2rem] p-3 aspect-[4/3]',
    phone: 'rounded-[2rem] p-2 aspect-[9/16]',
    laptop: 'rounded-2xl p-2 aspect-[16/10]',
  };

  return (
    <motion.div
      className={cn(
        'bg-primary shadow-2xl overflow-hidden',
        frameStyles[type],
        className
      )}
      whileHover={{ scale: 1.02, rotateY: 5 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="w-full h-full bg-background rounded-xl overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
}