"use client";

import { motion } from "framer-motion";
import { Sparkles, Gift, Star } from "lucide-react";
import Card from "@/components/ui/Card";
import { PRIZES, HACKATHON_CONFIG } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";
import AnimatedCounter from "@/components/sections/AnimatedCounter";

export default function Prizes() {
  return (
    <section id="prizes" className="relative bg-dark-base py-24 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-primary-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-400">
            What&apos;s at Stake
          </span>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Prizes worth{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              <AnimatedCounter
                value={HACKATHON_CONFIG.prizePool}
                prefix="₹"
                suffix="+"
              />
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            It&apos;s not just about the money (but yeah, it helps 😉). Win
            internships, mentorship, tech goodies, and bragging rights for life!
          </p>
        </motion.div>

        {/* Main prizes - Top 3 */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {PRIZES.slice(0, 3).map((prize, index) => (
            <motion.div
              key={prize.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${index === 0 ? "md:order-2" : index === 1 ? "md:order-1" : "md:order-3"}`}
            >
              <Card
                variant="glass"
                hover="glow"
                padding="none"
                className={`group relative overflow-hidden ${
                  index === 0 ? "md:-mt-6" : ""
                }`}
              >
                {/* Gradient top bar */}
                <div
                  className={`h-2 bg-gradient-to-r ${prize.color}`}
                />

                <div className="p-6 text-center md:p-8">
                  {/* Icon */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mb-4 text-5xl md:text-6xl"
                  >
                    {prize.icon}
                  </motion.div>

                  {/* Position badge */}
                  <span
                    className={`mb-2 inline-block rounded-full bg-gradient-to-r ${prize.color} px-4 py-1 text-sm font-bold text-white`}
                  >
                    {prize.position} Place
                  </span>

                  {/* Title */}
                  <h3 className="mb-4 text-xl font-bold text-white">
                    {prize.title}
                  </h3>

                  {/* Prize amount */}
                  <div className="mb-6">
                    <span
                      className={`bg-gradient-to-r ${prize.color} bg-clip-text text-4xl font-bold text-transparent md:text-5xl`}
                    >
                      {formatCurrency(prize.amount)}
                    </span>
                  </div>

                  {/* Perks */}
                  <div className="space-y-2">
                    {prize.perks.map((perk) => (
                      <div
                        key={perk}
                        className="flex items-center justify-center gap-2 text-sm text-gray-400"
                      >
                        <Star className="h-4 w-4 text-yellow-400" />
                        {perk}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative sparkles for winner */}
                {index === 0 && (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute -right-6 -top-6 text-yellow-400/20"
                    >
                      <Sparkles className="h-24 w-24" />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute -bottom-6 -left-6 text-yellow-400/20"
                    >
                      <Sparkles className="h-20 w-20" />
                    </motion.div>
                  </>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Special category prizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="mb-6 text-center text-2xl font-bold text-white">
            Special Categories
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {PRIZES.slice(3).map((prize, index) => (
              <motion.div
                key={prize.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="default" hover="lift" className="group h-full">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${prize.color} text-2xl`}
                    >
                      {prize.icon}
                    </div>
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                        Special Award
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        {prize.title}
                      </h4>
                      <p
                        className={`bg-gradient-to-r ${prize.color} bg-clip-text text-xl font-bold text-transparent`}
                      >
                        {formatCurrency(prize.amount)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1">
                    {prize.perks.map((perk) => (
                      <p key={perk} className="text-sm text-gray-400">
                        • {perk}
                      </p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional perks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-dark-border bg-dark-card/50 p-6 backdrop-blur-sm md:p-8"
        >
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 text-primary-400">
              <Gift className="h-8 w-8" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="mb-2 text-xl font-bold text-white">
                Everyone&apos;s a winner here! 🎉
              </h3>
              <p className="text-gray-400">
                All participants receive a certificate, exclusive swag kit
                (T-shirt, stickers, goodies), meals throughout the event,
                networking opportunities, and memories that last a lifetime!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
