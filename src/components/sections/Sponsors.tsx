"use client";

import { motion } from "framer-motion";
import { Building2, ExternalLink } from "lucide-react";
import { SPONSORS } from "@/lib/constants";

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative bg-dark-base py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-accent-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-400">
            Our Partners
          </span>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Backed by{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              industry leaders
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            These amazing companies make InnoHack possible. They&apos;re not just
            sponsors—they&apos;re your future employers, mentors, and partners!
          </p>
        </motion.div>

        {/* Title sponsor */}
        {SPONSORS.title.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-yellow-400">
              Title Sponsor
            </h3>
            <div className="flex justify-center">
              {SPONSORS.title.map((sponsor) => (
                <motion.a
                  key={sponsor.name}
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-3xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-12 transition-all hover:border-yellow-500/50"
                >
                  {/* Placeholder for sponsor logo */}
                  <div className="flex h-20 items-center justify-center text-4xl font-bold text-white/80">
                    <Building2 className="mr-3 h-12 w-12 text-yellow-400" />
                    {sponsor.name}
                  </div>
                  <div className="mt-4 text-center">
                    <span className="rounded-full bg-yellow-500/20 px-4 py-1 text-sm font-medium text-yellow-400">
                      Presenting Partner
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Platinum sponsors */}
        {SPONSORS.platinum.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
              Platinum Partners
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {SPONSORS.platinum.map((sponsor, index) => (
                <motion.a
                  key={sponsor.name}
                  href="#"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group flex h-32 w-64 items-center justify-center rounded-2xl border border-dark-border bg-dark-card/50 p-6 transition-all hover:border-primary-500/50 hover:bg-dark-card"
                >
                  <div className="flex items-center gap-2 text-xl font-semibold text-white/70 group-hover:text-white">
                    <Building2 className="h-8 w-8 text-primary-400" />
                    {sponsor.name}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Gold sponsors */}
        {SPONSORS.gold.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
              Gold Partners
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {SPONSORS.gold.map((sponsor, index) => (
                <motion.a
                  key={sponsor.name}
                  href="#"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group flex h-24 w-52 items-center justify-center rounded-xl border border-dark-border bg-dark-card/30 p-4 transition-all hover:border-yellow-500/30 hover:bg-dark-card/50"
                >
                  <div className="flex items-center gap-2 text-lg font-medium text-white/60 group-hover:text-white">
                    <Building2 className="h-6 w-6 text-yellow-400/70" />
                    {sponsor.name}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Silver sponsors */}
        {SPONSORS.silver.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
              Silver Partners
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {SPONSORS.silver.map((sponsor, index) => (
                <motion.a
                  key={sponsor.name}
                  href="#"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="group flex h-20 w-44 items-center justify-center rounded-lg border border-dark-border/50 bg-dark-card/20 p-3 transition-all hover:border-dark-border hover:bg-dark-card/40"
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white/80">
                    <Building2 className="h-5 w-5 text-gray-500" />
                    {sponsor.name}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Become a sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-dashed border-dark-border bg-dark-card/20 p-8">
            <Building2 className="h-10 w-10 text-gray-500" />
            <div>
              <h3 className="text-lg font-semibold text-white">
                Interested in sponsoring?
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Connect with 500+ talented students and boost your brand!
              </p>
            </div>
            <a
              href="mailto:sponsors@innohack.dev"
              className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-6 py-2 text-sm font-medium text-primary-400 transition-colors hover:bg-primary-500/20"
            >
              Get in touch
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
