"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  variant?: "default" | "glass" | "gradient" | "outlined";
  hover?: "none" | "lift" | "glow" | "scale";
  padding?: "none" | "sm" | "md" | "lg";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      hover = "lift",
      padding = "md",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = "transition-all duration-300";

    const variants = {
      default:
        "bg-zinc-900/50 border border-white/10",
      glass:
        "bg-zinc-900/50 backdrop-blur-xl border border-white/10",
      gradient:
        "bg-gradient-to-br from-primary-600/10 via-primary-700/10 to-accent-600/10 border border-white/10",
      outlined:
        "bg-transparent border border-white/10",
    };

    const hoverEffects = {
      none: "",
      lift: "hover:-translate-y-1 hover:border-primary-600/50",
      glow: "hover:shadow-glow hover:border-primary-600/50",
      scale: "hover:scale-[1.02]",
    };

    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          hoverEffects[hover],
          paddings[padding],
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export default Card;
