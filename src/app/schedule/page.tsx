"use client";

import { motion } from "framer-motion";
import { Clock, Coffee, Code2, Trophy, Users, Utensils, Mic, Rocket } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const scheduleDay1 = [
  { time: "08:00", event: "REGISTRATION_OPEN", icon: Users, type: "logistics" },
  { time: "09:00", event: "OPENING_CEREMONY", icon: Mic, type: "ceremony" },
  { time: "10:00", event: "HACKATHON_BEGINS", icon: Rocket, type: "main" },
  { time: "10:30", event: "WORKSHOP: AI/ML_FUNDAMENTALS", icon: Code2, type: "workshop" },
  { time: "13:00", event: "LUNCH_BREAK", icon: Utensils, type: "break" },
  { time: "14:00", event: "WORKSHOP: WEB3_DEVELOPMENT", icon: Code2, type: "workshop" },
  { time: "16:00", event: "MENTOR_SESSIONS_BEGIN", icon: Users, type: "mentoring" },
  { time: "19:00", event: "DINNER_BREAK", icon: Utensils, type: "break" },
  { time: "21:00", event: "MIDNIGHT_SNACKS", icon: Coffee, type: "break" },
  { time: "23:59", event: "DAY_1_ENDS", icon: Clock, type: "logistics" },
];

const scheduleDay2 = [
  { time: "00:00", event: "CODING_CONTINUES", icon: Code2, type: "main" },
  { time: "03:00", event: "LATE_NIGHT_REFRESHMENTS", icon: Coffee, type: "break" },
  { time: "07:00", event: "BREAKFAST", icon: Utensils, type: "break" },
  { time: "10:00", event: "CODE_FREEZE", icon: Clock, type: "main" },
  { time: "10:30", event: "DEMO_PREPARATION", icon: Code2, type: "main" },
  { time: "11:00", event: "JUDGING_BEGINS", icon: Trophy, type: "ceremony" },
  { time: "14:00", event: "LUNCH_BREAK", icon: Utensils, type: "break" },
  { time: "15:00", event: "FINAL_PRESENTATIONS", icon: Mic, type: "ceremony" },
  { time: "17:00", event: "CLOSING_CEREMONY", icon: Trophy, type: "ceremony" },
  { time: "18:00", event: "NETWORKING_SESSION", icon: Users, type: "logistics" },
];

const typeColors: Record<string, string> = {
  main: "border-terminal-green/40 bg-terminal-green/5",
  workshop: "border-terminal-cyan/40 bg-terminal-cyan/5",
  ceremony: "border-terminal-amber/40 bg-terminal-amber/5",
  break: "border-gray-700 bg-gray-900/50",
  mentoring: "border-terminal-purple/40 bg-terminal-purple/5",
  logistics: "border-gray-700 bg-gray-900/50",
};

const typeTextColors: Record<string, string> = {
  main: "text-terminal-green",
  workshop: "text-terminal-cyan",
  ceremony: "text-terminal-amber",
  break: "text-gray-500",
  mentoring: "text-terminal-purple",
  logistics: "text-gray-500",
};

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 bg-hacker-bg">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
            style={{
              background: "radial-gradient(ellipse, rgba(0, 255, 0, 0.1) 0%, transparent 70%)",
            }}
          />
          
          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="protocol-box mx-auto mb-6 w-fit">
                <span className="status-online" />
                EXECUTION_TIMELINE
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-wider mb-6">
                EVENT <span className="text-terminal-green glow-text-subtle">SCHEDULE</span>
              </h1>
              <p className="text-gray-500 font-mono text-sm max-w-xl mx-auto">
                36 hours of non-stop hacking. Here&apos;s your mission briefing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6">
            {/* Day 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="px-4 py-2 bg-terminal-green text-black font-mono font-bold text-sm">
                  DAY_01
                </div>
                <span className="text-xs font-mono text-gray-500">MARCH 15, 2026</span>
              </div>

              <div className="space-y-3">
                {scheduleDay1.map((item, i) => (
                  <motion.div
                    key={`d1-${i}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex items-center gap-4 p-4 border ${typeColors[item.type]} transition-colors`}
                  >
                    <span className="text-xs font-mono text-terminal-green w-14 shrink-0">
                      {item.time}
                    </span>
                    <item.icon className={`w-4 h-4 shrink-0 ${typeTextColors[item.type]}`} />
                    <span className={`text-sm font-mono ${typeTextColors[item.type]}`}>
                      {item.event}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Day 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="px-4 py-2 bg-terminal-amber text-black font-mono font-bold text-sm">
                  DAY_02
                </div>
                <span className="text-xs font-mono text-gray-500">MARCH 16, 2026</span>
              </div>

              <div className="space-y-3">
                {scheduleDay2.map((item, i) => (
                  <motion.div
                    key={`d2-${i}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex items-center gap-4 p-4 border ${typeColors[item.type]} transition-colors`}
                  >
                    <span className="text-xs font-mono text-terminal-amber w-14 shrink-0">
                      {item.time}
                    </span>
                    <item.icon className={`w-4 h-4 shrink-0 ${typeTextColors[item.type]}`} />
                    <span className={`text-sm font-mono ${typeTextColors[item.type]}`}>
                      {item.event}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Legend */}
        <section className="py-12 border-t border-terminal-green/10">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-terminal-green" />
                <span className="text-gray-500">MAIN_EVENT</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-terminal-cyan" />
                <span className="text-gray-500">WORKSHOP</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-terminal-amber" />
                <span className="text-gray-500">CEREMONY</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-terminal-purple" />
                <span className="text-gray-500">MENTORING</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-600" />
                <span className="text-gray-500">BREAK</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
