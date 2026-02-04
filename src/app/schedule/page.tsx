"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Coffee, Code, Users, Award, Mic, Pizza } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const schedule = {
  day1: {
    date: "March 15, 2026 (Saturday)",
    events: [
      { time: "08:00", title: "Check-in Opens", icon: MapPin, desc: "Grab your badge, find your spot" },
      { time: "09:00", title: "Opening Ceremony", icon: Mic, desc: "Kickoff, sponsors intro, rules" },
      { time: "10:00", title: "Team Formation", icon: Users, desc: "Find your crew or form one" },
      { time: "10:30", title: "Hacking Begins!", icon: Code, desc: "Clock starts. Build something." },
      { time: "12:30", title: "Lunch", icon: Pizza, desc: "Fuel up. Long night ahead." },
      { time: "14:00", title: "Workshop: API Masterclass", icon: Code, desc: "Build integrations that work" },
      { time: "16:00", title: "Workshop: Design Sprint", icon: Users, desc: "UI/UX in 60 minutes" },
      { time: "19:00", title: "Dinner", icon: Pizza, desc: "More food. You'll need it." },
      { time: "21:00", title: "Mentor Check-ins", icon: Users, desc: "Get feedback, pivot if needed" },
      { time: "23:00", title: "Midnight Snacks", icon: Coffee, desc: "Energy drinks available" },
    ],
  },
  day2: {
    date: "March 16, 2026 (Sunday)",
    events: [
      { time: "02:00", title: "Late Night Fun", icon: Coffee, desc: "Mini-games, music, vibes" },
      { time: "07:00", title: "Breakfast", icon: Pizza, desc: "Wake up. Or don't sleep at all." },
      { time: "10:00", title: "Code Freeze Warning", icon: Clock, desc: "2 hours left to build" },
      { time: "12:00", title: "Code Freeze", icon: Code, desc: "Stop coding. Start presenting." },
      { time: "12:30", title: "Lunch + Prep", icon: Pizza, desc: "Polish those slides" },
      { time: "13:30", title: "Demo Presentations", icon: Mic, desc: "Show what you built" },
      { time: "16:00", title: "Judging", icon: Award, desc: "Judges deliberate" },
      { time: "17:00", title: "Awards Ceremony", icon: Award, desc: "Winners announced!" },
      { time: "18:00", title: "Closing & Networking", icon: Users, desc: "Celebrate, connect, go home" },
    ],
  },
};

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 bg-black">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0 bg-black" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.15) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(220, 38, 38, 0.15) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          {/* Red glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
            style={{
              background: "radial-gradient(ellipse, rgba(220, 38, 38, 0.15) 0%, transparent 70%)",
            }}
          />
          
          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-4 text-red-500 font-mono text-sm tracking-widest uppercase border border-red-600/30 bg-red-600/10 px-4 py-2">
                Schedule
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider text-white mb-6">
                36 Hours. <span className="text-red-500">Every Minute</span> Counts.
              </h1>
              <p className="text-gray-500 font-mono text-lg max-w-xl mx-auto">
                Here&apos;s the game plan. Times are approximate—we&apos;re hackers, not accountants.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-24 bg-zinc-950">
          <div className="mx-auto max-w-4xl px-6">
            {/* Day 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-red-600 flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-wide text-white">Day 1</h2>
                  <p className="text-gray-500 font-mono">{schedule.day1.date}</p>
                </div>
              </div>

              <div className="space-y-4">
                {schedule.day1.events.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-4 p-4 bg-zinc-900/50 border border-white/10 hover:border-red-600/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="font-mono text-red-500 font-bold">{event.time}</span>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 bg-zinc-800 border border-white/10 flex items-center justify-center text-gray-500 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-colors">
                      <event.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold uppercase tracking-wide">{event.title}</h3>
                      <p className="text-gray-500 font-mono text-sm">{event.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Day 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-orange-600 flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-wide text-white">Day 2</h2>
                  <p className="text-gray-500 font-mono">{schedule.day2.date}</p>
                </div>
              </div>

              <div className="space-y-4">
                {schedule.day2.events.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-4 p-4 bg-zinc-900/50 border border-white/10 hover:border-orange-600/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="font-mono text-orange-500 font-bold">{event.time}</span>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 bg-zinc-800 border border-white/10 flex items-center justify-center text-gray-500 group-hover:bg-orange-600 group-hover:border-orange-600 group-hover:text-white transition-colors">
                      <event.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold uppercase tracking-wide">{event.title}</h3>
                      <p className="text-gray-500 font-mono text-sm">{event.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-black border-t border-white/10">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-black uppercase tracking-wider text-white mb-4">Ready to Join?</h2>
            <p className="text-gray-500 font-mono mb-8">
              Registration closes when we hit capacity. Don&apos;t wait.
            </p>
            <a
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wide hover:bg-red-700 transition-all hover:shadow-[0_0_40px_rgba(220,38,38,0.5)]"
            >
              Register Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
