import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import {
  HTMLMotionProps,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, ReactNode } from "react";

const buttonVariants = {
  default: `
    flex items-center gap-3 px-6 py-3
    rounded-full border border-primary-foreground/30
    hover:border-primary-foreground/60
    transition-colors duration-300
   font-medium tracking-wide
  `,

  glass: `
    relative
    px-[60px] py-[10px]
    border-2 border-black
    text-black
    font-semibold
    bg-transparent
    rounded-full
    overflow-hidden
    transition-colors duration-300
    w-full

    after:content-['']
    after:absolute
    after:inset-0
    after:bg-black
    after:scale-x-0
    after:origin-left
    after:transition-transform
    after:duration-300
    after:z-0

    hover:after:scale-x-100
    hover:text-white
  `,

  outline: `flex items-center justify-center gap-4 px-8 py-4 rounded-2xl font-medium transition-all duration-300 border-2 border-border bg-background hover:bg-secondary `,
  filled: `flex items-center justify-center gap-4 px-8 py-4 rounded-2xl font-medium transition-all duration-300 bg-primary/90 text-primary-foreground hover:bg-primary`,
};

const MotionSlot = motion.create(Slot);

type ButtonProps = {
  asChild?: boolean;
  variant?: keyof typeof buttonVariants;
  icon?: React.ReactNode;
  label?: string;
  onClick?: Function;
  showFloatingLabel?: boolean;
  floatingLabelText?: string;
  children?: ReactNode;
} & Omit<HTMLMotionProps<"button">, "children">;

export function CustomButton({
  asChild = false,
  variant = "default",
  className,
  onClick,
  children,
  icon,
  label,
  showFloatingLabel = false,
  floatingLabelText = "",
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateLabel = useSpring(useMotionValue(0), {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });
  const opacity = useSpring(0);

  function handleMouse(e: React.MouseEvent<HTMLButtonElement>) {
    if (!ref.current || !showFloatingLabel) return;

    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const velocityX = offsetX * 0.3;
    rotateLabel.set(-velocityX);
  }

  function handleMouseEnter() {
    if (showFloatingLabel) {
      opacity.set(1);
    }
  }

  function handleMouseLeave() {
    if (showFloatingLabel) {
      opacity.set(0);
      rotateLabel.set(0);
    }
  }

  if (asChild) {
    return (
      <MotionSlot
        ref={ref}
        className={cn(
          `
          relative isolate
          inline-flex items-center justify-center gap-2
          font-md text-sm
          transition-colors duration-300
          hover:cursor-pointer
          `,
          buttonVariants[variant],
          className,
        )}
        whileHover={variant === "default" ? { scale: 1.02 } : undefined}
        whileTap={variant === "default" ? { scale: 0.98 } : undefined}
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </MotionSlot>
    );
  }

  return (
    <motion.button
      ref={ref}
      className={cn(
        `
        relative isolate
        inline-flex items-center justify-center gap-2
        font-md text-sm 
        transition-colors duration-300
        hover:cursor-pointer
        `,
        buttonVariants[variant],
        className,
      )}
      whileHover={variant === "default" ? { scale: 1.02 } : undefined}
      whileTap={variant === "default" ? { scale: 0.98 } : undefined}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="shrink-0">{icon}</span>}
        {label && <span>{label}</span>}
      </span>

      {showFloatingLabel && floatingLabelText && (
        <motion.div
          className="absolute pointer-events-none z-[100] px-3 py-1.5 bg-black text-white text-xs rounded-md whitespace-nowrap shadow-lg"
          style={{
            left: x,
            top: y,
            opacity,
            rotate: rotateLabel,
            x: "-50%",
            y: "-120%",
          }}
        >
          {floatingLabelText}
        </motion.div>
      )}
    </motion.button>
  );
}
