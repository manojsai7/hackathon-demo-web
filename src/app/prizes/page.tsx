"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Gift, Zap, Cloud, Code2, Laptop } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const mainPrizes = [
  {
    rank: "01",
    title: "FIRST_PLACE",
    prize: "₹1,00,000",
    icon: Trophy,
    color: "terminal-amber",
    perks: ["CASH_PRIZE", "INTERNSHIP_OFFERS", "PREMIUM_SWAG", "CLOUD_CREDITS"],
  },
  {
    rank: "02",
    title: "SECOND_PLACE",
    prize: "₹60,000",
    icon: Medal,
    color: "terminal-green",
    perks: ["CASH_PRIZE", "INTERVIEW_FAST_TRACK", "PREMIUM_SWAG"],
  },
  {
    rank: "03",
    title: "THIRD_PLACE",
    prize: "₹40,000",
    icon: Award,
    color: "terminal-cyan",
    perks: ["CASH_PRIZE", "DEVELOPER_TOOLS", "PREMIUM_SWAG"],
  },
];

const trackPrizes = [
  { track: "AI/ML", prize: "₹25,000", icon: Zap },
  { track: "WEB3", prize: "₹25,000", icon: Code2 },
  { track: "FINTECH", prize: "₹25,000", icon: Laptop },
  { track: "HEALTHTECH", prize: "₹25,000", icon: Gift },
  { track: "OPEN_INNOVATION", prize: "₹25,000", icon: Cloud },
];

const allParticipants = [
  "FREE_MEALS_36HR",
  "HACKATHON_SWAG_KIT",
  "CERTIFICATE_OF_PARTICIPATION",
  "NETWORKING_ACCESS",
  "WORKSHOP_ACCESS",
  "MENTOR_SESSIONS",
];

export default function PrizesPage() {
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
              background: "radial-gradient(ellipse, rgba(255, 176, 0, 0.1) 0%, transparent 70%)",
            }}
          />
          
          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="protocol-box mx-auto mb-6 w-fit">
                <span className="status-online" />
                REWARD_ALLOCATION
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-wider mb-6">
                PRIZES & <span className="text-terminal-amber glow-text-subtle">REWARDS</span>
              </h1>
              <p className="text-gray-500 font-mono text-sm max-w-xl mx-auto">
                Over ₹5 Lakhs in cash prizes, swag, and opportunities. Build something incredible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Prizes */}
        <section className="py-16 border-t border-terminal-green/10">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-xs font-mono text-terminal-green tracking-widest">
                {"/// GRAND_PRIZES"}
              </span>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {mainPrizes.map((prize, i) => (
                <motion.div
                  key={prize.rank}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`terminal-card p-8 text-center border-${prize.color}/30 hover:border-${prize.color}/50 transition-colors`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 border border-${prize.color}/30 bg-${prize.color}/10 mb-6`}>
                    <prize.icon className={`w-8 h-8 text-${prize.color}`} />
                  </div>
                  <div className={`text-xs font-mono text-${prize.color} mb-2`}>
                    RANK_{prize.rank}
                  </div>
                  <h3 className="text-lg font-mono font-bold text-white mb-4">
                    {prize.title}
                  </h3>
                  <div className="text-3xl font-display font-black text-white mb-6">
                    {prize.prize}
                  </div>
                  <div className="space-y-2">
                    {prize.perks.map((perk) => (
                      <div key={perk} className="text-[10px] font-mono text-gray-500">
                        + {perk}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Track Prizes */}
        <section className="py-16 border-t border-terminal-green/10 bg-black">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-xs font-mono text-terminal-green tracking-widest">
                {"/// TRACK_SPECIFIC_PRIZES"}
              </span>
              <h2 className="mt-4 text-2xl md:text-4xl font-display font-bold text-white">
                Best in <span className="text-terminal-green">Track</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {trackPrizes.map((prize, i) => (
                <motion.div
                  key={prize.track}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="terminal-card p-6 text-center hover:border-terminal-green/40 transition-colors"
                >
                  <prize.icon className="w-6 h-6 mx-auto mb-4 text-terminal-green" />
                  <div className="text-[10px] font-mono text-gray-500 mb-2">{prize.track}</div>
                  <div className="text-lg font-display font-bold text-white">{prize.prize}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Participants */}
        <section className="py-16 border-t border-terminal-green/10">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-xs font-mono text-terminal-green tracking-widest">
                {"/// UNIVERSAL_REWARDS"}
              </span>
              <h2 className="mt-4 text-2xl md:text-4xl font-display font-bold text-white">
                For <span className="text-terminal-green">All Participants</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {allParticipants.map((perk, i) => (
                <motion.div
                  key={perk}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 border border-terminal-green/10 bg-hacker-card"
                >
                  <span className="text-terminal-green">✓</span>
                  <span className="text-xs font-mono text-gray-400">{perk}</span>
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
