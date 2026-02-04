"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Users, Clock, Code, Trophy, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const highlights = [
  { icon: Clock, label: "36 Hours" },
  { icon: Users, label: "500+ Hackers" },
  { icon: Trophy, label: "₹5L+ Prizes" },
  { icon: Code, label: "Build Anything" },
];

const features = [
  {
    title: "Real Challenges",
    desc: "Problems from actual companies. Your solution might ship.",
  },
  {
    title: "Expert Mentors",
    desc: "Engineers from top startups on-call to help you build.",
  },
  {
    title: "Free Food & Swag",
    desc: "All meals covered. Everyone leaves with goodies.",
  },
  {
    title: "Career Opportunities",
    desc: "Internship offers and job opportunities from sponsors.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-950/20 via-transparent to-transparent" />
          
          {/* Grid pattern - subtle */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center">
            {/* Date badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm text-neutral-400"
            >
              <Calendar className="w-4 h-4 text-rose-400" />
              <span>March 15-16, 2026</span>
              <span className="text-neutral-600">•</span>
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>Bangalore</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]"
            >
              Build something
              <br />
              <span className="text-rose-400">worth shipping.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10"
            >
              36 hours. 500+ hackers. One weekend to turn your idea 
              into something real. No fluff, just building.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-rose-500 text-white font-semibold rounded-xl hover:bg-rose-600 transition-colors"
              >
                Register Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border border-neutral-700 text-white font-medium rounded-xl hover:bg-neutral-800 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Highlight stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-8"
            >
              {highlights.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-neutral-400">
                  <item.icon className="w-5 h-5 text-rose-400" />
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 rounded-full border-2 border-neutral-700 flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-neutral-500 rounded-full"
              />
            </div>
          </motion.div>
        </section>

        {/* What's InnoHack */}
        <section className="py-24 lg:py-32 bg-neutral-900/50">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Not your average hackathon.
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                We&apos;ve been to enough hackathons to know what sucks. 
                So we built one that doesn&apos;t.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Everything you need to know
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/about"
                className="group p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-rose-500/50 transition-all"
              >
                <h3 className="font-semibold text-white mb-2 group-hover:text-rose-400 transition-colors">
                  About InnoHack →
                </h3>
                <p className="text-sm text-neutral-400">
                  What we&apos;re about, why we do this, and what makes us different.
                </p>
              </Link>
              <Link
                href="/schedule"
                className="group p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-rose-500/50 transition-all"
              >
                <h3 className="font-semibold text-white mb-2 group-hover:text-rose-400 transition-colors">
                  Event Schedule →
                </h3>
                <p className="text-sm text-neutral-400">
                  Hour-by-hour breakdown of the entire 36-hour event.
                </p>
              </Link>
              <Link
                href="/prizes"
                className="group p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-rose-500/50 transition-all"
              >
                <h3 className="font-semibold text-white mb-2 group-hover:text-rose-400 transition-colors">
                  Prizes & Tracks →
                </h3>
                <p className="text-sm text-neutral-400">
                  ₹5 Lakhs+ in prizes across multiple categories.
                </p>
              </Link>
              <Link
                href="/faq"
                className="group p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-rose-500/50 transition-all"
              >
                <h3 className="font-semibold text-white mb-2 group-hover:text-rose-400 transition-colors">
                  FAQ →
                </h3>
                <p className="text-sm text-neutral-400">
                  Got questions? We probably have answers.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 lg:py-32 border-t border-neutral-800">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Zap className="w-12 h-12 text-rose-400 mx-auto mb-6" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to build?
              </h2>
              <p className="text-neutral-400 mb-8">
                Registration closes when we hit capacity. Don&apos;t wait.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                Secure Your Spot
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
