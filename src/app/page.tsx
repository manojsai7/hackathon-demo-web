"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Terminal, 
  ChevronDown, 
  ExternalLink,
  Users,
  Trophy,
  Clock,
  Zap,
  Code2,
  Shield,
  Cpu,
  Database
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { HACKATHON_CONFIG } from "@/lib/constants";

// Binary Rain Component
function BinaryRain() {
  const columns = 30;
  const [binaryColumns, setBinaryColumns] = useState<
    { id: number; left: string; delay: number; duration: number; content: string }[]
  >([]);

  useEffect(() => {
    const nextColumns = Array.from({ length: columns }, (_, i) => ({
      id: i,
      left: `${(i / columns) * 100}%`,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 10,
      content: Array.from({ length: 50 }, () => (Math.random() > 0.5 ? "1" : "0")).join("\n"),
    }));
    setBinaryColumns(nextColumns);
  }, [columns]);

  return (
    <div className="binary-rain">
      {binaryColumns.map((col) => (
        <div
          key={col.id}
          className="binary-column"
          style={{
            left: col.left,
            animationDelay: `${col.delay}s`,
            animationDuration: `${col.duration}s`,
          }}
        >
          {col.content}
        </div>
      ))}
    </div>
  );
}

// Terminal Intro Animation
function TerminalIntro({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  
  const terminalLines = useMemo(() => [
    "> ESTABLISHING_CONNECTION...",
    "> PROTOCOL: INNOHACK_2K26",
    "> STATUS: ONLINE",
    "> LOADING_HACKATHON_INTERFACE...",
    "> WELCOME_HACKER",
    "> INITIALIZATION_COMPLETE",
  ], []);

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, terminalLines[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onComplete, 800);
      return () => clearTimeout(timer);
    }
  }, [currentLine, terminalLines, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-2xl mx-4">
        <div className="terminal-card">
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-dot bg-terminal-red" />
            <div className="terminal-dot bg-terminal-amber" />
            <div className="terminal-dot bg-terminal-green" />
            <span className="ml-4 text-xs font-mono text-gray-500">terminal@innohack:~</span>
          </div>
          
          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mb-2 ${line.includes("COMPLETE") ? "text-terminal-green" : "text-gray-400"}`}
              >
                {line}
              </motion.div>
            ))}
            <span className="inline-block w-2 h-4 bg-terminal-green animate-blink" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Stats data
const stats = [
  { value: "500+", label: "HACKERS_DEPLOYED", icon: Users },
  { value: "₹5L+", label: "PRIZE_POOL", icon: Trophy },
  { value: "36", label: "HOURS_RUNTIME", icon: Clock },
  { value: "50+", label: "MENTORS_ONLINE", icon: Zap },
];

// Features
const features = [
  {
    icon: Code2,
    title: "BUILD_DEPLOY",
    description: "Transform your ideas into working prototypes in 36 hours",
  },
  {
    icon: Shield,
    title: "INDUSTRY_MENTORSHIP",
    description: "Get guidance from engineering leaders at top tech companies",
  },
  {
    icon: Cpu,
    title: "PREMIUM_RESOURCES",
    description: "Access cloud credits, APIs, and developer tools worth lakhs",
  },
  {
    icon: Database,
    title: "CAREER_LAUNCHPAD",
    description: "Top performers get direct interview opportunities",
  },
];

// Tracks
const tracks = [
  { name: "AI/ML", code: "0x01", color: "text-terminal-cyan" },
  { name: "WEB3", code: "0x02", color: "text-terminal-purple" },
  { name: "FINTECH", code: "0x03", color: "text-terminal-green" },
  { name: "HEALTHTECH", code: "0x04", color: "text-terminal-red" },
  { name: "OPEN_INNOVATION", code: "0x05", color: "text-terminal-amber" },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      {/* Terminal Intro */}
      <AnimatePresence>
        {showIntro && !introComplete && (
          <TerminalIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <Navbar />

      <main className="bg-hacker-bg">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen overflow-hidden">
          {/* Binary Rain Background */}
          <BinaryRain />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 grid-pattern" />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hacker-bg/50 to-hacker-bg" />
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
            style={{
              background: "radial-gradient(ellipse, rgba(0, 255, 0, 0.08) 0%, transparent 60%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: introComplete ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-5xl text-center"
            >
              {/* Protocol Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="protocol-box mx-auto mb-8"
              >
                <span className="status-online" />
                PROTOCOL_V2.0.26
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white tracking-wider mb-2">
                  <span className="text-terminal-green glow-text-subtle">INNO</span>HACK
                </h1>
                <div className="flex items-center justify-center gap-4 text-sm font-mono text-gray-500">
                  <span>2K26</span>
                  <span className="w-1 h-1 bg-terminal-green rounded-full" />
                  <span>&lt; NATIONAL_LEVEL_24HR_HACKATHON /&gt;</span>
                </div>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mx-auto mb-10 max-w-xl text-sm md:text-base font-mono text-gray-400 leading-relaxed"
              >
                {HACKATHON_CONFIG.description}. Join 500+ developers for 36 hours of creation, collaboration, and code.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              >
                <Link
                  href="/register"
                  className="group relative px-8 py-3 bg-terminal-green text-black font-mono font-bold text-sm tracking-wider overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    INITIALIZE_REGISTRATION
                    <ExternalLink className="w-4 h-4" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-3 border border-terminal-green/30 text-terminal-green font-mono text-sm tracking-wider hover:bg-terminal-green/10 transition-colors"
                >
                  VIEW_DOCUMENTATION
                </Link>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-gray-500"
              >
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-terminal-green" />
                  MARCH 15-16, 2026
                </span>
                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-terminal-green" />
                  500+ PARTICIPANTS
                </span>
                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                <span className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-terminal-green" />
                  ₹5L+ PRIZES
                </span>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: introComplete ? 1 : 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-terminal-green/50"
              >
                <span className="text-[10px] font-mono tracking-widest">SCROLL_DOWN</span>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Marquee */}
        <div className="border-y border-terminal-green/20 bg-black py-3 overflow-hidden">
          <div className="marquee-container">
            <div className="marquee-content">
              {Array.from({ length: 20 }).map((_, i) => (
                <span key={i} className="mx-8 text-sm font-mono text-terminal-green/60">
                  /// HACK · BUILD · DEPLOY ///
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-20 border-b border-terminal-green/10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-4 text-terminal-green" />
                  <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono text-gray-500 tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-xs font-mono text-terminal-green tracking-widest">
                /// SYSTEM_MODULES
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-white">
                Why <span className="text-terminal-green">Compete</span>?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="terminal-card p-6 group hover:border-terminal-green/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 border border-terminal-green/30 bg-terminal-green/5">
                      <feature.icon className="w-6 h-6 text-terminal-green" />
                    </div>
                    <div>
                      <h3 className="text-sm font-mono font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-xs font-mono text-gray-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tracks Section */}
        <section className="py-24 border-y border-terminal-green/10 bg-black">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-xs font-mono text-terminal-green tracking-widest">
                /// COMPETITION_TRACKS
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-white">
                Choose Your <span className="text-terminal-green">Battleground</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {tracks.map((track, i) => (
                <motion.div
                  key={track.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="terminal-card p-6 text-center cursor-pointer hover:border-terminal-green/40 transition-all"
                >
                  <span className={`block text-[10px] font-mono mb-2 ${track.color}`}>
                    {track.code}
                  </span>
                  <span className="block text-sm font-mono font-bold text-white">
                    {track.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Terminal className="w-12 h-12 mx-auto mb-6 text-terminal-green" />
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                READY TO <span className="text-terminal-green">HACK</span>?
              </h2>
              <p className="text-sm font-mono text-gray-500 mb-8 max-w-md mx-auto">
                Join 500+ developers, designers, and innovators. 36 hours. One mission. Build something incredible.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-10 py-4 bg-terminal-green text-black font-mono font-bold text-sm tracking-wider hover:bg-terminal-green/90 transition-colors"
              >
                INITIALIZE_REGISTRATION
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
