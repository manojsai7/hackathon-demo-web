"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Users, Trophy, Rocket, ChevronDown, Sparkles, Calendar, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { HACKATHON_CONFIG } from "@/lib/constants";

// Intro Animation Component
function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => onComplete(), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing background effect */}
        <motion.div
          className="absolute h-64 w-64 rounded-full bg-primary-600/30 blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: phase >= 1 ? 1 : 0, rotate: phase >= 1 ? 0 : -180 }}
          transition={{ type: "spring", damping: 15 }}
          className="relative z-10 mb-8"
        >
          <div className="flex h-24 w-24 items-center justify-center bg-primary-600">
            <Code2 className="h-12 w-12 text-white" />
          </div>
          <motion.div
            className="absolute inset-0 bg-primary-600"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{ filter: "blur(20px)" }}
          />
        </motion.div>

        {/* Text animations */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 20 }}
          className="mb-2 text-4xl font-black uppercase tracking-wider text-white md:text-6xl"
        >
          {HACKATHON_CONFIG.name}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 3 ? 1 : 0 }}
          className="font-mono text-lg text-primary-500"
        >
          LOADING INNOVATION...
        </motion.p>

        {/* Progress bar */}
        <motion.div
          className="mt-8 h-1 w-48 overflow-hidden bg-zinc-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-full bg-primary-600"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

// Stats data
const stats = [
  { label: "Participants", value: "500+", icon: Users },
  { label: "In Prizes", value: "₹5L+", icon: Trophy },
  { label: "Hours", value: "36", icon: Clock },
  { label: "Tracks", value: "5", icon: Rocket },
];

// Features data
const features = [
  {
    icon: Code2,
    title: "Build & Learn",
    description: "Work on real-world problems with cutting-edge technologies",
  },
  {
    icon: Users,
    title: "Network",
    description: "Connect with like-minded developers and industry mentors",
  },
  {
    icon: Trophy,
    title: "Win Big",
    description: "Compete for prizes worth over ₹5 Lakhs",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Turn your hackathon project into a real startup",
  },
];

// Tracks data
const tracks = [
  { name: "AI/ML", color: "from-blue-600 to-cyan-600" },
  { name: "Web3", color: "from-purple-600 to-pink-600" },
  { name: "FinTech", color: "from-green-600 to-emerald-600" },
  { name: "HealthTech", color: "from-red-600 to-orange-600" },
  { name: "Open Innovation", color: "from-yellow-600 to-amber-600" },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Check if user has seen intro in this session
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      setShowIntro(false);
      setIntroComplete(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setIntroComplete(true);
    sessionStorage.setItem("hasSeenIntro", "true");
    setTimeout(() => setShowIntro(false), 500);
  };

  return (
    <>
      {/* Intro Animation */}
      <AnimatePresence>
        {showIntro && !introComplete && (
          <IntroAnimation onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <main className="bg-black">
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900/50 to-black" />
            <motion.div
              animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-600/20 blur-3xl"
            />
            <motion.div
              animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
              transition={{ duration: 25, repeat: Infinity }}
              className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent-600/20 blur-3xl"
            />
          </div>

          {/* Grid pattern */}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: introComplete ? 1 : 0, y: introComplete ? 0 : 20 }}
              transition={{ delay: 0.2 }}
              className="mx-auto max-w-6xl text-center"
            >
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 border border-primary-600/30 bg-primary-600/10 px-4 py-2 text-sm font-mono text-primary-400">
                <Sparkles className="h-4 w-4" />
                <span>March 15-16, 2026 • 36 Hours of Innovation</span>
              </div>

              {/* Main heading */}
              <h1 className="mb-6 text-5xl font-black uppercase leading-tight tracking-wider text-white md:text-7xl lg:text-8xl">
                Ready to build{" "}
                <span className="bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500 bg-clip-text text-transparent">
                  something incredible
                </span>
                ?
              </h1>

              {/* Tagline */}
              <p className="mx-auto mb-12 max-w-2xl text-lg font-mono text-gray-400 md:text-xl">
                {HACKATHON_CONFIG.description}. Join the biggest student hackathon
                and turn your wildest ideas into reality.
              </p>

              {/* CTA Buttons */}
              <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/register">
                  <Button
                    variant="gradient"
                    size="xl"
                    rightIcon={<ArrowRight className="h-5 w-5" />}
                  >
                    Count me in!
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="xl">
                    Learn more
                  </Button>
                </Link>
              </div>

              {/* Event info */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-300">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary-500" />
                  <span>March 15-16, 2026</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-neutral-600" />
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent-500" />
                  <span>{HACKATHON_CONFIG.venue.name}</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-neutral-600" />
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary-500" />
                  <span>500+ Participants</span>
                </div>
              </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: introComplete ? 1 : 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-gray-500"
              >
                <ChevronDown className="h-6 w-6" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-white/10 bg-zinc-900/50 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="mx-auto mb-4 h-8 w-8 text-primary-500" />
                  <div className="text-3xl font-black text-white md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-mono text-sm uppercase tracking-wider text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-black uppercase tracking-wider text-white md:text-5xl">
                Why <span className="text-primary-500">Join</span> Us?
              </h2>
              <p className="mx-auto max-w-2xl font-mono text-gray-400">
                More than just a hackathon – it&apos;s an experience that will transform your skills
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group border border-white/10 bg-zinc-900/50 p-6 transition-all hover:border-primary-600/50"
                >
                  <feature.icon className="mb-4 h-10 w-10 text-primary-500 transition-transform group-hover:scale-110" />
                  <h3 className="mb-2 text-xl font-bold uppercase text-white">
                    {feature.title}
                  </h3>
                  <p className="font-mono text-sm text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tracks Section */}
        <section className="border-y border-white/10 bg-zinc-900/30 py-24">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-black uppercase tracking-wider text-white md:text-5xl">
                Hackathon <span className="text-primary-500">Tracks</span>
              </h2>
              <p className="mx-auto max-w-2xl font-mono text-gray-400">
                Choose your battleground and build solutions that matter
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {tracks.map((track, index) => (
                <motion.div
                  key={track.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`cursor-pointer border border-white/10 bg-gradient-to-br ${track.color} p-6 text-center transition-all hover:border-white/30`}
                >
                  <span className="text-lg font-bold uppercase tracking-wider text-white">
                    {track.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-4xl font-black uppercase tracking-wider text-white md:text-5xl">
                Ready to <span className="text-primary-500">Hack</span>?
              </h2>
              <p className="mx-auto mb-10 max-w-xl font-mono text-gray-400">
                Join 500+ developers, designers, and innovators for 36 hours of building,
                learning, and competing for amazing prizes.
              </p>
              <Link href="/register">
                <Button
                  variant="gradient"
                  size="xl"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                >
                  Register Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
