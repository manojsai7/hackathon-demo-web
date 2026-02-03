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
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-950/30 via-neutral-950 to-neutral-950" />
          
          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-4 text-orange-400 font-mono text-sm tracking-wider uppercase">
                Schedule
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                36 hours. Every minute counts.
              </h1>
              <p className="text-neutral-400 text-lg max-w-xl mx-auto">
                Here&apos;s the game plan. Times are approximate—we&apos;re hackers, not accountants.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            {/* Day 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Day 1</h2>
                  <p className="text-neutral-400">{schedule.day1.date}</p>
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
                    className="flex gap-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="font-mono text-orange-400 font-semibold">{event.time}</span>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-700 group-hover:text-white transition-colors">
                      <event.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{event.title}</h3>
                      <p className="text-neutral-500 text-sm">{event.desc}</p>
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Day 2</h2>
                  <p className="text-neutral-400">{schedule.day2.date}</p>
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
                    className="flex gap-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="font-mono text-amber-400 font-semibold">{event.time}</span>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-700 group-hover:text-white transition-colors">
                      <event.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{event.title}</h3>
                      <p className="text-neutral-500 text-sm">{event.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-neutral-800">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to join?</h2>
            <p className="text-neutral-400 mb-8">
              Registration closes when we hit capacity. Don&apos;t wait.
            </p>
            <a
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
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
