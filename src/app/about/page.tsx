"use client";

import { motion } from "framer-motion";
import { Users, Award, Lightbulb, Code, Coffee } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const features = [
  {
    icon: Lightbulb,
    title: "Real Problems, Real Impact",
    description:
      "We don't do toy projects. Our challenges come from actual companies facing actual problems. Your solution might ship.",
  },
  {
    icon: Users,
    title: "Find Your People",
    description:
      "Whether you're a designer, dev, or just curious—you'll find your crew here. Teams are formed on-site. Solo? No problem.",
  },
  {
    icon: Code,
    title: "Build Fast, Learn Faster",
    description:
      "Workshops on day 1. Mentors on call. Stack of your choice. We give you tools, you bring the fire.",
  },
  {
    icon: Award,
    title: "₹5L+ in Prizes",
    description:
      "Cash prizes, internship offers, cloud credits, swag, and bragging rights. Winners get noticed.",
  },
];

const stats = [
  { number: "36", label: "Hours Non-Stop" },
  { number: "500+", label: "Hackers" },
  { number: "50+", label: "Mentors" },
  { number: "₹5L+", label: "Prize Pool" },
];

const criteria = [
  { label: "Innovation", value: 30, color: "bg-red-600" },
  { label: "Technical Depth", value: 25, color: "bg-orange-600" },
  { label: "Real-World Impact", value: 25, color: "bg-amber-600" },
  { label: "UX & Design", value: 20, color: "bg-red-500" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 bg-black">
        {/* Hero Section */}
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
          
          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-block mb-4 text-red-500 font-mono text-sm tracking-widest uppercase border border-red-600/30 bg-red-600/10 px-4 py-2">
                About InnoHack
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider text-white mb-6 leading-tight">
                Not Another <span className="text-red-500">Boring</span> Hackathon
              </h1>
              <p className="text-gray-500 font-mono text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                We built InnoHack because we were tired of hackathons that felt like 
                glorified coding marathons with stale pizza. This one&apos;s different.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-16 border-y border-neutral-800/50">
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
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-neutral-500 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why InnoHack */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why hackers choose us
              </h2>
              <p className="text-neutral-400 max-w-xl">
                We&apos;ve been to enough hackathons to know what sucks. So we fixed it.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-orange-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
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
        <section className="py-20 lg:py-28 bg-neutral-900/30">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How we judge
              </h2>
              <p className="text-neutral-400">
                No BS criteria. Here&apos;s exactly what our judges look for.
              </p>
            </motion.div>

            <div className="space-y-6">
              {criteria.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{item.label}</span>
                    <span className="text-neutral-400 font-mono text-sm">{item.value}%</span>
                  </div>
                  <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Team */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Built by hackers, for hackers
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-8">
                Our organizing team includes past hackathon winners, startup founders, 
                and engineers who&apos;ve shipped products to millions. We know what a great 
                hackathon looks like because we&apos;ve been searching for one ourselves.
              </p>
              <div className="flex items-center justify-center gap-3 text-neutral-500">
                <Coffee className="w-5 h-5" />
                <span>Fueled by caffeine and chaos</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
