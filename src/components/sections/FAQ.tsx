"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { FAQ_DATA, HACKATHON_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-dark-elevated py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 bottom-1/4 h-96 w-96 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-accent-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-400">
            Got Questions?
          </span>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Can&apos;t find what you&apos;re looking for? Drop us a message and we&apos;ll get
            back to you faster than you can say &quot;hackathon&quot;!
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  "group w-full rounded-2xl border bg-dark-card/50 p-6 text-left transition-all duration-300",
                  openIndex === index
                    ? "border-primary-500/50 shadow-glow"
                    : "border-dark-border hover:border-dark-border/80"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors",
                        openIndex === index
                          ? "bg-primary-500/20 text-primary-400"
                          : "bg-dark-elevated text-gray-500 group-hover:text-gray-400"
                      )}
                    >
                      <HelpCircle className="h-5 w-5" />
                    </div>
                    <span
                      className={cn(
                        "pt-2 text-lg font-medium transition-colors",
                        openIndex === index ? "text-white" : "text-gray-300"
                      )}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "mt-2 flex-shrink-0 transition-colors",
                      openIndex === index ? "text-primary-400" : "text-gray-500"
                    )}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="ml-14 mt-4 text-gray-400">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-dark-border bg-dark-card/50 p-8 backdrop-blur-sm sm:flex-row">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 text-primary-400">
              <MessageCircle className="h-7 w-7" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-white">
                Still have questions?
              </h3>
              <p className="text-sm text-gray-400">
                Reach out at{" "}
                <a
                  href={`mailto:${HACKATHON_CONFIG.contact.email}`}
                  className="text-primary-400 hover:underline"
                >
                  {HACKATHON_CONFIG.contact.email}
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
