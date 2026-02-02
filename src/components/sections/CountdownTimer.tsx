"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTimeRemaining } from "@/lib/utils";
import { HACKATHON_CONFIG } from "@/lib/constants";

interface TimeUnit {
  value: number;
  label: string;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0,
  });
  const [isUrgent, setIsUrgent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      const remaining = getTimeRemaining(HACKATHON_CONFIG.dates.registration.end);
      setTimeLeft(remaining);
      setIsUrgent(remaining.days < 1 && remaining.total > 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-24 w-20 animate-pulse rounded-xl bg-dark-card" />
        ))}
      </div>
    );
  }

  const timeUnits: TimeUnit[] = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  if (timeLeft.total <= 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 text-center"
      >
        <p className="text-2xl font-bold text-white">🚨 Registration Closed!</p>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-sm font-medium uppercase tracking-widest ${
          isUrgent ? "animate-pulse text-red-400" : "text-gray-400"
        }`}
      >
        {isUrgent ? "⏰ Last chance to register!" : "Registration closes in"}
      </motion.p>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div
              className={`relative overflow-hidden rounded-xl border p-4 md:p-6 transition-all duration-300 ${
                isUrgent
                  ? "border-red-500/50 bg-red-500/10"
                  : "border-dark-border bg-dark-card/80 backdrop-blur-sm hover:border-primary-500/50"
              }`}
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 ${
                  isUrgent
                    ? "bg-gradient-to-t from-red-500/20 to-transparent"
                    : "bg-gradient-to-t from-primary-500/20 to-transparent"
                }`}
              />

              <AnimatePresence mode="popLayout">
                <motion.span
                  key={unit.value}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`relative block text-center text-3xl font-bold md:text-5xl ${
                    isUrgent ? "text-red-400" : "text-white"
                  }`}
                >
                  {String(unit.value).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>

              <span className="relative mt-2 block text-center text-xs font-medium uppercase tracking-wider text-gray-500">
                {unit.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
