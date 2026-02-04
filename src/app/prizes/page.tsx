"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, Gift, Zap, Cloud, Cpu } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const mainPrizes = [
  {
    place: "1st",
    title: "Grand Champion",
    prize: "₹2,00,000",
    perks: ["Trophy", "Internship fast-track", "1-on-1 mentorship"],
    color: "from-yellow-400 to-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
  },
  {
    place: "2nd",
    title: "First Runner-up",
    prize: "₹1,25,000",
    perks: ["Trophy", "Startup credits", "Mentorship session"],
    color: "from-neutral-300 to-neutral-400",
    bgColor: "bg-neutral-400/10",
    borderColor: "border-neutral-400/30",
  },
  {
    place: "3rd",
    title: "Second Runner-up",
    prize: "₹75,000",
    perks: ["Trophy", "Cloud credits", "Swag kit"],
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
  },
];

const trackPrizes = [
  {
    track: "Best AI/ML Hack",
    prize: "₹25,000",
    icon: Cpu,
    sponsor: "Powered by TensorFlow",
  },
  {
    track: "Best Web3 Project",
    prize: "₹25,000",
    icon: Zap,
    sponsor: "Sponsored by Polygon",
  },
  {
    track: "Best Social Impact",
    prize: "₹20,000",
    icon: Star,
    sponsor: "For projects that matter",
  },
  {
    track: "Best UI/UX Design",
    prize: "₹15,000",
    icon: Award,
    sponsor: "Figma credits included",
  },
  {
    track: "Best Use of Cloud",
    prize: "₹15,000",
    icon: Cloud,
    sponsor: "AWS/Azure credits",
  },
  {
    track: "Best First-Timer Team",
    prize: "₹10,000",
    icon: Gift,
    sponsor: "For hackathon newbies",
  },
];

const perks = [
  "Internship opportunities with sponsor companies",
  "Cloud credits worth ₹50,000+",
  "Premium swag for all participants",
  "Networking with industry leaders",
  "Certificate of participation",
  "Lifetime bragging rights",
];

export default function PrizesPage() {
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
                Prizes
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider text-white mb-6">
                <span className="text-red-500">₹5 Lakhs+</span> Up For Grabs
              </h1>
              <p className="text-gray-500 font-mono text-lg max-w-xl mx-auto">
                We&apos;re not here to hand out participation trophies. Build something 
                great, and you&apos;ll be rewarded.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Prizes */}
        <section className="py-16 lg:py-24 bg-zinc-950">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {mainPrizes.map((prize, index) => (
                <motion.div
                  key={prize.place}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative p-8 bg-zinc-900/50 border border-white/10 hover:border-red-600/50 transition-all ${
                    index === 0 ? "md:-mt-4 md:mb-4 border-amber-500/50" : ""
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${prize.color} mb-6`}>
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-gray-500 font-mono uppercase tracking-wider mb-1">{prize.place} Place</div>
                  <h3 className="text-2xl font-black uppercase tracking-wide text-white mb-2">{prize.title}</h3>
                  <div className={`text-4xl font-black bg-gradient-to-r ${prize.color} bg-clip-text text-transparent mb-6`}>
                    {prize.prize}
                  </div>
                  <ul className="space-y-2">
                    {prize.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2 text-gray-500 font-mono text-sm">
                        <Star className="w-4 h-4 text-red-500" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Track Prizes */}
        <section className="py-16 lg:py-24 bg-neutral-900/30">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Track Prizes</h2>
              <p className="text-neutral-400">
                Special categories with dedicated prize pools
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trackPrizes.map((track, index) => (
                <motion.div
                  key={track.track}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 mb-4">
                    <track.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{track.track}</h3>
                  <div className="text-2xl font-bold text-rose-400 mb-2">{track.prize}</div>
                  <p className="text-neutral-500 text-sm">{track.sponsor}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Perks */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Everyone Wins Something</h2>
              <p className="text-neutral-400">
                Just for showing up and building. Seriously.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {perks.map((perk, index) => (
                <motion.div
                  key={perk}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-neutral-900/30 border border-neutral-800"
                >
                  <Gift className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span className="text-neutral-300">{perk}</span>
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
