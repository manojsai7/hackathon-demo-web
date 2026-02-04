"use client";

import { motion } from "framer-motion";
import { Users, Award, Code2, Target } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const stats = [
  { number: "36", label: "HOURS_RUNTIME" },
  { number: "500+", label: "HACKERS_DEPLOYED" },
  { number: "50+", label: "MENTORS_ONLINE" },
  { number: "₹5L+", label: "PRIZE_POOL" },
];

const features = [
  {
    icon: Target,
    title: "REAL_WORLD_PROBLEMS",
    description: "Our challenges come from actual companies facing actual problems. Your solution might ship to production.",
  },
  {
    icon: Users,
    title: "FIND_YOUR_SQUAD",
    description: "Whether you're a designer, developer, or just curious—you'll find your crew here. Teams are formed on-site.",
  },
  {
    icon: Code2,
    title: "BUILD_FAST_LEARN_FASTER",
    description: "Workshops on day 1. Mentors on call. Stack of your choice. We give you tools, you bring the fire.",
  },
  {
    icon: Award,
    title: "MASSIVE_REWARDS",
    description: "Cash prizes, internship offers, cloud credits, swag, and bragging rights. Winners get noticed.",
  },
];

const criteria = [
  { label: "INNOVATION", value: 30, color: "bg-terminal-green" },
  { label: "TECHNICAL_DEPTH", value: 25, color: "bg-terminal-cyan" },
  { label: "REAL_WORLD_IMPACT", value: 25, color: "bg-terminal-amber" },
  { label: "UX_DESIGN", value: 20, color: "bg-terminal-red" },
];

const timeline = [
  { phase: "PHASE_01", title: "REGISTRATION", date: "FEB 1 - MAR 10", status: "ACTIVE" },
  { phase: "PHASE_02", title: "IDEATION_ROUND", date: "MAR 11-12", status: "PENDING" },
  { phase: "PHASE_03", title: "HACKATHON_DAY", date: "MAR 15-16", status: "PENDING" },
  { phase: "PHASE_04", title: "RESULTS", date: "MAR 16", status: "PENDING" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 bg-hacker-bg">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          {/* Grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-50" />
          
          {/* Gradient glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
            style={{
              background: "radial-gradient(ellipse, rgba(0, 255, 0, 0.1) 0%, transparent 70%)",
            }}
          />
          
          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="protocol-box mx-auto mb-6 w-fit">
                <span className="status-online" />
                ABOUT_PROTOCOL
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-wider mb-6">
                NOT ANOTHER <span className="text-terminal-green glow-text-subtle">BORING</span> HACKATHON
              </h1>
              <p className="text-gray-500 font-mono text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                We built INNOHACK because we were tired of hackathons that felt like 
                glorified coding marathons with stale pizza. This one&apos;s different.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-16 border-y border-terminal-green/10">
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
                  <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[10px] font-mono text-terminal-green/60 tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why InnoHack */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-xs font-mono text-terminal-green tracking-widest">
                {"/// SYSTEM_FEATURES"}
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-white">
                Why <span className="text-terminal-green">INNOHACK</span>?
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
                  className="terminal-card p-6 hover:border-terminal-green/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 border border-terminal-green/30 bg-terminal-green/5 shrink-0">
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

        {/* Judging Criteria */}
        <section className="py-24 border-y border-terminal-green/10 bg-black">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-xs font-mono text-terminal-green tracking-widest">
                {"/// EVALUATION_METRICS"}
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-white">
                Judging <span className="text-terminal-green">Criteria</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {criteria.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-gray-400">{item.label}</span>
                    <span className="text-xs font-mono text-terminal-green">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-hacker-card border border-terminal-green/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`h-full ${item.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-xs font-mono text-terminal-green tracking-widest">
                {"/// EXECUTION_TIMELINE"}
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-white">
                Event <span className="text-terminal-green">Timeline</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`terminal-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    item.status === "ACTIVE" ? "border-terminal-green/40" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono ${
                      item.status === "ACTIVE" ? "text-terminal-green" : "text-gray-600"
                    }`}>
                      {item.phase}
                    </span>
                    <span className="text-sm font-mono font-bold text-white">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-gray-500">{item.date}</span>
                    <span className={`px-2 py-1 text-[10px] font-mono border ${
                      item.status === "ACTIVE" 
                        ? "border-terminal-green/30 text-terminal-green bg-terminal-green/10" 
                        : "border-gray-700 text-gray-500"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
