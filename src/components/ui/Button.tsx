"use client";

import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

type MotionButtonProps = MotionProps & React.ComponentPropsWithoutRef<"button">;

interface ButtonProps extends Omit<MotionButtonProps, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "gradient";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-mono font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-hacker-bg disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden";

    const variants = {
      primary:
        "bg-terminal-green text-black hover:bg-terminal-green/90 focus:ring-terminal-green/50 shadow-glow-green",
      secondary:
        "bg-hacker-card text-white border border-terminal-green/20 hover:border-terminal-green/50 hover:bg-terminal-green/10 focus:ring-terminal-green/30",
      outline:
        "border border-terminal-green/30 text-terminal-green hover:bg-terminal-green/10 focus:ring-terminal-green/30",
      ghost:
        "text-gray-400 hover:text-terminal-green hover:bg-terminal-green/5 focus:ring-terminal-green/30",
      danger:
        "bg-terminal-red text-white hover:bg-terminal-red/90 focus:ring-terminal-red/50 shadow-glow-red",
      gradient:
        "bg-gradient-to-r from-terminal-green via-cyan-400 to-terminal-green text-black hover:brightness-110 focus:ring-cyan-300/50 shadow-glow-green",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs gap-1.5",
      md: "px-6 py-2.5 text-sm gap-2",
      lg: "px-8 py-3 text-sm gap-2.5",
      xl: "px-10 py-4 text-base gap-3",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        {...props}
      >
        {/* Shine effect */}
        <span className="absolute inset-0 overflow-hidden">
          <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
        </span>

        {/* Content */}
        <span className="relative flex items-center justify-center gap-2">
          {isLoading ? (
            <svg
              className="h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : (
            <>
              {leftIcon && <span className="shrink-0">{leftIcon}</span>}
              {children}
              {rightIcon && <span className="shrink-0">{rightIcon}</span>}
            </>
          )}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
