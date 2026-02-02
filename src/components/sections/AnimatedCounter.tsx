"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
    duration: duration * 1000,
  });

  const rounded = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {displayValue.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

interface StatsDisplayProps {
  stats: {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
    icon?: React.ReactNode;
  }[];
}

export function StatsDisplay({ stats }: StatsDisplayProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-2xl border border-dark-border bg-dark-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary-500/50"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

          {/* Icon */}
          {stat.icon && (
            <div className="mb-3 inline-flex rounded-lg bg-primary-500/10 p-2 text-primary-500">
              {stat.icon}
            </div>
          )}

          {/* Value */}
          <div className="relative">
            <AnimatedCounter
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              className="text-3xl font-bold text-white md:text-4xl"
            />
          </div>

          {/* Label */}
          <p className="mt-2 text-sm text-gray-400">{stat.label}</p>

          {/* Decorative element */}
          <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-primary-500/20 to-transparent blur-2xl" />
        </motion.div>
      ))}
    </div>
  );
}

interface RegistrationCounterProps {
  current: number;
  max: number;
}

export function RegistrationCounter({ current, max }: RegistrationCounterProps) {
  const percentage = (current / max) * 100;
  const isNearCapacity = percentage >= 80;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border p-6 transition-all duration-300",
        isNearCapacity
          ? "border-orange-500/50 bg-orange-500/10"
          : "border-dark-border bg-dark-card/50 backdrop-blur-sm"
      )}
    >
      {/* Pulse animation for urgency */}
      {isNearCapacity && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10" />
      )}

      <div className="relative">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-4xl font-bold text-white md:text-5xl">
              <AnimatedCounter value={current} />
            </span>
            <span className="ml-1 text-lg text-gray-400">/ {max}</span>
          </div>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-sm font-medium",
              isNearCapacity
                ? "bg-orange-500/20 text-orange-400"
                : "bg-primary-500/20 text-primary-400"
            )}
          >
            {isNearCapacity ? "🔥 Filling fast!" : "Teams registered"}
          </span>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-dark-elevated">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={cn(
              "h-full rounded-full",
              isNearCapacity
                ? "bg-gradient-to-r from-orange-500 to-red-500"
                : "bg-gradient-to-r from-primary-500 to-accent-500"
            )}
          />
        </div>

        <p className="mt-2 text-sm text-gray-500">
          {max - current} spots remaining
        </p>
      </div>
    </motion.div>
  );
}
