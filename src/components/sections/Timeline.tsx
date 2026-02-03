"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Coffee,
  Rocket,
  Code,
  Upload,
  Presentation,
  Trophy,
  Clock,
} from "lucide-react";
import { TIMELINE } from "@/lib/constants";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  calendar: Calendar,
  coffee: Coffee,
  rocket: Rocket,
  code: Code,
  upload: Upload,
  presentation: Presentation,
  trophy: Trophy,
};

export default function Timeline() {
  return (
    <section id="timeline" className="relative bg-dark-elevated py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute -left-20 bottom-1/4 h-96 w-96 rounded-full bg-accent-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-accent-500/10 px-4 py-2 text-sm font-medium text-accent-400">
            Event Schedule
          </span>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            36 hours of{" "}
            <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
              pure innovation
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Here&apos;s how the action unfolds. Mark your calendars and get ready for
            an unforgettable experience!
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary-500 via-primary-600 to-accent-500 md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-8">
            {TIMELINE.map((event, index) => {
              const Icon = iconMap[event.icon] || Clock;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`ml-12 w-full md:ml-0 md:w-[calc(50%-40px)] ${
                      isLeft ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="group relative overflow-hidden rounded-2xl border border-dark-border bg-dark-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary-500/50 hover:shadow-glow"
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

                      <div className="relative">
                        {/* Date & Time badge */}
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <span className="rounded-lg bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-400">
                            {event.date}
                          </span>
                          <span className="rounded-lg bg-dark-elevated px-3 py-1 text-xs font-medium text-gray-400">
                            {event.time}
                          </span>
                        </div>

                        <h3 className="mb-2 text-xl font-bold text-white">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center icon */}
                  <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-dark-border bg-dark-card text-primary-400 md:left-1/2 md:-translate-x-1/2">
                    <Icon className="h-4 w-4" />
                  </div>

                  {/* Empty space for other side */}
                  <div className="hidden w-[calc(50%-40px)] md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-dark-border bg-dark-card px-6 py-3 text-gray-300">
            <Clock className="h-5 w-5 text-accent-400" />
            <span>
              Can&apos;t wait? Add to calendar and never miss a beat!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
