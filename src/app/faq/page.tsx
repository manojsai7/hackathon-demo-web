"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What even is a hackathon?",
        a: "It's a 36-hour event where you team up with others to build a working prototype of an app, website, or tool. Think of it as a creative sprint where you learn fast, break things, and (hopefully) make something cool.",
      },
      {
        q: "Who can participate?",
        a: "Anyone! Students, professionals, hobbyists—if you're curious and willing to learn, you're in. We welcome all skill levels from complete beginners to seasoned developers.",
      },
      {
        q: "Do I need to know how to code?",
        a: "Nope. Teams need designers, idea people, presenters, and project managers too. If you can't code, you can learn during our workshops or contribute in other ways.",
      },
      {
        q: "Is it free?",
        a: "There's a small registration fee (₹299 per person) to ensure commitment. This covers food, swag, and event costs. Trust us, it's worth way more.",
      },
    ],
  },
  {
    category: "Teams & Registration",
    questions: [
      {
        q: "Do I need a team to register?",
        a: "Nope! You can register solo and form a team at the event. We'll have team formation activities on Day 1. Many winning teams are formed on-site.",
      },
      {
        q: "What's the team size?",
        a: "2-4 members per team. No solo submissions, no 10-person squads. Find your balance.",
      },
      {
        q: "Can I participate remotely?",
        a: "This is an in-person event only. Part of the magic is being in the room with 500 other hackers. Virtual just isn't the same.",
      },
      {
        q: "How do I register my team?",
        a: "Each member registers individually. During the event, you'll link up with your team through our portal. If you already have teammates, just register together.",
      },
    ],
  },
  {
    category: "During the Event",
    questions: [
      {
        q: "What should I bring?",
        a: "Laptop, charger, any hardware you need, toiletries, a change of clothes, and a sleeping bag if you want to nap. We provide food, Wi-Fi, and power strips.",
      },
      {
        q: "Will there be food?",
        a: "Yes! Breakfast, lunch, dinner, and midnight snacks. Vegetarian and vegan options available. Energy drinks and coffee will flow freely.",
      },
      {
        q: "Can I sleep at the venue?",
        a: "Yes, we'll have designated quiet areas. Bring a sleeping bag or blanket. Most hackers power through, but rest is important.",
      },
      {
        q: "What tech/tools can I use?",
        a: "Anything you want! Any language, framework, API, or platform. Pre-existing code must be declared. We encourage using our sponsor APIs for bonus points.",
      },
    ],
  },
  {
    category: "Judging & Prizes",
    questions: [
      {
        q: "How are projects judged?",
        a: "Innovation (30%), Technical Complexity (25%), Real-World Impact (25%), and Design/UX (20%). Judges are industry professionals and past hackathon winners.",
      },
      {
        q: "When do I need to submit?",
        a: "Code freeze is at 12:00 PM on Day 2. You'll have until then to push your code. Presentations happen right after lunch.",
      },
      {
        q: "What if my project doesn't work?",
        a: "It happens! Judges understand that hackathon projects are MVPs. Focus on demonstrating your idea and what you learned. The demo matters more than perfection.",
      },
      {
        q: "How are prizes distributed?",
        a: "Prize money is split equally among team members. Track prizes are separate from main prizes—you can win both. Payments processed within 2 weeks.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-800 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-white font-medium pr-8 group-hover:text-rose-400 transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform ${
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
            <p className="pb-5 text-neutral-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-950/30 via-neutral-950 to-neutral-950" />
          
          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-4 text-rose-400 font-mono text-sm tracking-wider uppercase">
                FAQ
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Got questions?
              </h1>
              <p className="text-neutral-400 text-lg max-w-xl mx-auto">
                We probably have answers. If not, hit us up.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6">
            {faqs.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="mb-12 last:mb-0"
              >
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-sm font-mono">
                    {sectionIndex + 1}
                  </span>
                  {section.category}
                </h2>
                <div className="bg-neutral-900/50 rounded-2xl border border-neutral-800 px-6">
                  {section.questions.map((faq) => (
                    <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-16 border-t border-neutral-800">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <MessageCircle className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Still confused?</h2>
            <p className="text-neutral-400 mb-8">
              Reach out and we&apos;ll get back to you within 24 hours.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-800 text-white font-semibold rounded-xl hover:bg-neutral-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
