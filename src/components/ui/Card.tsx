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
    const baseStyles = "rounded-2xl transition-all duration-300";

    const variants = {
      default:
        "bg-white dark:bg-dark-card border border-light-border dark:border-dark-border shadow-soft",
      glass:
        "bg-white/10 dark:bg-dark-card/50 backdrop-blur-lg border border-white/20 dark:border-dark-border/50",
      gradient:
        "bg-gradient-to-br from-primary-500/10 via-purple-500/10 to-accent-500/10 border border-primary-500/20",
      outlined:
        "bg-transparent border-2 border-light-border dark:border-dark-border",
    };

    const hoverEffects = {
      none: "",
      lift: "hover:-translate-y-1 hover:shadow-lifted",
      glow: "hover:shadow-glow hover:border-primary-500/50",
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
