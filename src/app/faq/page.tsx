"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const faqs = [
  {
    category: "GENERAL",
    questions: [
      {
        q: "What is INNOHACK?",
        a: "INNOHACK is a 36-hour national-level hackathon where developers, designers, and innovators come together to build solutions to real-world problems. It's organized to foster innovation and provide a platform for students to showcase their skills.",
      },
      {
        q: "When and where is INNOHACK happening?",
        a: "INNOHACK 2K26 will take place on March 15-16, 2026. The event will be held at our partner institution's campus. Detailed venue information will be shared with registered participants.",
      },
      {
        q: "Is there a registration fee?",
        a: "Yes, there is a nominal registration fee that covers meals, swag kit, and event infrastructure. The exact amount will be displayed during registration.",
      },
    ],
  },
  {
    category: "PARTICIPATION",
    questions: [
      {
        q: "Who can participate?",
        a: "INNOHACK is open to all college students across India. You need a valid college ID to participate. Both undergraduate and postgraduate students are welcome.",
      },
      {
        q: "What's the team size?",
        a: "Teams can have 2-4 members. Solo participation is not allowed as we believe in the power of collaboration. Don't have a team? No worries—we have team formation sessions!",
      },
      {
        q: "Can I participate if I'm a beginner?",
        a: "Absolutely! INNOHACK welcomes participants of all skill levels. We have workshops, mentors, and resources to help you learn and build. The best projects often come from fresh perspectives.",
      },
    ],
  },
  {
    category: "TECHNICAL",
    questions: [
      {
        q: "What can I build?",
        a: "You can build anything that fits within our tracks: AI/ML, Web3, FinTech, HealthTech, or Open Innovation. Your project should be started from scratch during the hackathon—no pre-built projects allowed.",
      },
      {
        q: "What should I bring?",
        a: "Bring your laptop, chargers, any hardware you need, valid college ID, and most importantly—your ideas! We'll provide power strips, internet, food, and a place to crash if you need rest.",
      },
      {
        q: "What tech stack can I use?",
        a: "Any! We don't restrict your technology choices. Use whatever languages, frameworks, and tools you're comfortable with. Cloud credits and API access will be provided by our sponsors.",
      },
    ],
  },
  {
    category: "LOGISTICS",
    questions: [
      {
        q: "Will food be provided?",
        a: "Yes! We provide all meals, snacks, and beverages throughout the 36-hour event. We accommodate dietary restrictions—just let us know during registration.",
      },
      {
        q: "Can I sleep during the hackathon?",
        a: "You can, but you probably won't want to! We'll have a designated rest area with sleeping bags if you need to recharge. Coffee will be your best friend.",
      },
      {
        q: "What COVID protocols are in place?",
        a: "We follow all government guidelines. Temperature checks, sanitizer stations, and well-ventilated spaces will be available. We recommend being fully vaccinated.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-b border-terminal-green/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-sm font-mono text-gray-300 group-hover:text-terminal-green transition-colors pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-terminal-green shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-xs font-mono text-gray-500 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
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
              background: "radial-gradient(ellipse, rgba(0, 255, 0, 0.1) 0%, transparent 70%)",
            }}
          />
          
          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="protocol-box mx-auto mb-6 w-fit">
                <HelpCircle className="w-3 h-3" />
                HELP_DOCUMENTATION
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-wider mb-6">
                FREQUENTLY <span className="text-terminal-green glow-text-subtle">ASKED</span>
              </h1>
              <p className="text-gray-500 font-mono text-sm max-w-xl mx-auto">
                Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, reach out to us.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6">
            {faqs.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono text-terminal-green">
                    /// {section.category}
                  </span>
                  <div className="flex-1 h-px bg-terminal-green/20" />
                </div>
                <div className="terminal-card">
                  {section.questions.map((faq) => (
                    <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-16 border-t border-terminal-green/10">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Still have <span className="text-terminal-green">questions</span>?
              </h2>
              <p className="text-xs font-mono text-gray-500 mb-6">
                Can&apos;t find the answer you&apos;re looking for? Reach out to our team.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-terminal-green text-black font-mono font-bold text-sm tracking-wider hover:bg-terminal-green/90 transition-colors"
              >
                CONTACT_US
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
