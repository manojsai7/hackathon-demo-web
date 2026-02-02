"use client";

import { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const inputType = type === "password" && showPassword ? "text" : type;

    return (
      <div className="w-full">
        {label && (
          <label
            className={cn(
              "mb-2 block text-sm font-medium transition-colors duration-200",
              isFocused
                ? "text-primary-500"
                : "text-gray-700 dark:text-gray-300",
              error && "text-red-500"
            )}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <span
                className={cn(
                  "text-gray-400 transition-colors",
                  isFocused && "text-primary-500",
                  error && "text-red-500"
                )}
              >
                {leftIcon}
              </span>
            </div>
          )}
          <input
            ref={ref}
            type={inputType}
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              "w-full rounded-xl border bg-white px-4 py-3 text-gray-900 transition-all duration-200",
              "placeholder:text-gray-400",
              "focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500",
              "dark:bg-dark-card dark:text-white dark:border-dark-border",
              "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-100 dark:disabled:bg-dark-elevated",
              leftIcon && "pl-11",
              (rightIcon || type === "password") && "pr-11",
              error
                ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                : "border-light-border dark:border-dark-border",
              className
            )}
            {...props}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          )}
          {rightIcon && type !== "password" && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
              <span className="text-gray-400">{rightIcon}</span>
            </div>
          )}
        </div>
        {(error || helperText) && (
          <p
            className={cn(
              "mt-2 text-sm",
              error ? "text-red-500" : "text-gray-500 dark:text-gray-400"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
