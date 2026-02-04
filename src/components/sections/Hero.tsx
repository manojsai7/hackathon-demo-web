"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Calendar } from "lucide-react";
import Button from "../ui/Button";
import CountdownTimer from "./CountdownTimer";
import { RegistrationCounter } from "./AnimatedCounter";
import { HACKATHON_CONFIG } from "../../lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900/50 to-black" />

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-600/20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 30, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent-600/20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-primary-600/10 blur-3xl"
        />
      </div>

      {/* Grid pattern overlay - HackFest style */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
        <div className="mx-auto max-w-6xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 border border-primary-600/30 bg-primary-600/10 px-4 py-2 text-sm font-mono text-primary-400"
          >
            <Sparkles className="h-4 w-4" />
            <span>March 15-16, 2026 • 36 Hours of Innovation</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-5xl font-black uppercase leading-tight tracking-wider text-white md:text-7xl lg:text-8xl"
          >
            Ready to build{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500 bg-clip-text text-transparent">
                something incredible
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-3 w-full origin-left bg-gradient-to-r from-primary-600/40 to-accent-600/40 blur-sm"
              />
            </span>
            ?
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-12 max-w-2xl text-lg font-mono text-gray-400 md:text-xl"
          >
            {HACKATHON_CONFIG.description}. Join the biggest student hackathon
            and turn your wildest ideas into reality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
              <Button
                variant="primary"
              size="xl"
              rightIcon={<ArrowRight className="h-5 w-5" />}
              onClick={() => {
                document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Count me in!
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn more
            </Button>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <CountdownTimer />
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mx-auto max-w-2xl"
          >
            <RegistrationCounter
              current={HACKATHON_CONFIG.capacity.currentTeams}
              max={HACKATHON_CONFIG.capacity.maxTeams}
            />
          </motion.div>

          {/* Quick info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-300"
          >
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary-500" />
              <span>March 15-16, 2026</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-neutral-600" />
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-accent-500" />
              <span>500+ Participants</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-neutral-600" />
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary-500" />
              <span>₹5 Lakhs+ in Prizes</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="h-8 w-5 rounded-full border-2 border-gray-600 p-1">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-primary-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
