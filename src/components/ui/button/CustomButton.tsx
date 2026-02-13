import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { HTMLMotionProps, motion } from "framer-motion";

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
    text-black text-md font-semibold
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

const MotionSlot = motion(Slot);

type ButtonProps = {
  asChild?: boolean;
  variant?: keyof typeof buttonVariants;
  icon?: React.ReactNode;
  label?: string;
} & HTMLMotionProps<"button">;

export function CustomButton({
  asChild = false,
  variant = "default",
  className,
  children,
  icon,
  label,
  ...props
}: ButtonProps) {
  const Comp = asChild ? MotionSlot : motion.button;

  return (
    <Comp
      className={cn(
        `
        relative isolate
        inline-flex items-center justify-center gap-2
        font-md text-sm
        transition-colors duration-300
        hover:cursor-pointer
        `,
        buttonVariants[variant],
        className
      )}
      whileHover={variant === "default" && { scale: 1.02 }}
      whileTap={variant === "default" && { scale: 0.98 }}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <span className="relative z-10 flex items-center gap-2">
          {icon && <span className="shrink-0">{icon}</span>}
          {label && <span>{label}</span>}
        </span>
      )}
    </Comp>
  );
}
