"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  variant?: "default" | "terminal" | "outlined" | "glow";
  hover?: "none" | "lift" | "glow" | "border";
  padding?: "none" | "sm" | "md" | "lg";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      hover = "border",
      padding = "md",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = "transition-all duration-300";

    const variants = {
      default:
        "bg-hacker-card border border-terminal-green/10",
      terminal:
        "bg-hacker-card border border-terminal-green/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-terminal-green/5 before:to-transparent before:pointer-events-none",
      outlined:
        "bg-transparent border border-terminal-green/20",
      glow:
        "bg-hacker-card border border-terminal-green/30 shadow-glow-green",
    };

    const hoverEffects = {
      none: "",
      lift: "hover:-translate-y-1",
      glow: "hover:shadow-glow-green hover:border-terminal-green/40",
      border: "hover:border-terminal-green/40",
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
