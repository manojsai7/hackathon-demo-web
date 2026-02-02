"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="relative bg-dark-base py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-400">
            What They Say
          </span>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Stories from past{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              innovators
            </span>
          </h2>
        </motion.div>

        {/* Testimonial slider */}
        <div className="relative">
          {/* Main testimonial */}
          <div className="overflow-hidden rounded-3xl border border-dark-border bg-dark-card/50 p-8 backdrop-blur-sm md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                {/* Quote icon */}
                <Quote className="mx-auto mb-6 h-12 w-12 text-primary-500/30" />

                {/* Quote text */}
                <blockquote className="mb-8 text-xl text-gray-300 md:text-2xl lg:text-3xl">
                  &quot;{TESTIMONIALS[current].quote}&quot;
                </blockquote>

                {/* Stars */}
                <div className="mb-6 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Author info */}
                <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-2xl font-bold text-white">
                    {TESTIMONIALS[current].name[0]}
                  </div>
                  <div className="text-center md:text-left">
                    <p className="font-semibold text-white">
                      {TESTIMONIALS[current].name}
                    </p>
                    <p className="text-sm text-gray-400">
                      {TESTIMONIALS[current].college}
                    </p>
                    <p className="text-sm text-primary-400">
                      {TESTIMONIALS[current].role} • {TESTIMONIALS[current].year}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-dark-border bg-dark-card text-gray-400 transition-all hover:bg-dark-elevated hover:text-white md:-translate-x-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-dark-border bg-dark-card text-gray-400 transition-all hover:bg-dark-elevated hover:text-white md:translate-x-full"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  current === index
                    ? "w-8 bg-primary-500"
                    : "w-2 bg-dark-border hover:bg-dark-elevated"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
