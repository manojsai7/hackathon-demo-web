"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Instagram, Linkedin, Twitter, Check, Loader2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { HACKATHON_CONFIG } from "@/lib/constants";

const contactInfo = [
  {
    icon: Mail,
    label: "EMAIL",
    value: HACKATHON_CONFIG.contact.email,
    href: `mailto:${HACKATHON_CONFIG.contact.email}`,
  },
  { icon: Phone, label: "PHONE", value: HACKATHON_CONFIG.contact.phone, href: `tel:${HACKATHON_CONFIG.contact.phone.replace(/\s+/g, "")}` },
  { icon: MapPin, label: "LOCATION", value: HACKATHON_CONFIG.venue.address, href: HACKATHON_CONFIG.venue.mapUrl },
];

const socials = [
  { icon: Github, href: HACKATHON_CONFIG.social.github, label: "GitHub" },
  { icon: Instagram, href: HACKATHON_CONFIG.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: HACKATHON_CONFIG.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: HACKATHON_CONFIG.social.twitter, label: "Twitter" },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    setTimeout(() => setIsSuccess(false), 3000);
  };

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
                <span className="status-online" />
                ESTABLISH_CONNECTION
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-wider mb-6">
                GET IN <span className="text-terminal-green glow-text-subtle">TOUCH</span>
              </h1>
              <p className="text-gray-500 font-mono text-sm max-w-xl mx-auto">
                Have questions, sponsorship inquiries, or just want to say hi? We&apos;d love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="terminal-card">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-terminal-red" />
                    <div className="terminal-dot bg-terminal-amber" />
                    <div className="terminal-dot bg-terminal-green" />
                    <span className="ml-4 text-xs font-mono text-gray-500">message@innohack:~</span>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-terminal-green mb-2">
                        NAME_
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-black border border-terminal-green/20 text-white font-mono text-sm focus:border-terminal-green focus:outline-none transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-mono text-terminal-green mb-2">
                        EMAIL_
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-black border border-terminal-green/20 text-white font-mono text-sm focus:border-terminal-green focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-mono text-terminal-green mb-2">
                        SUBJECT_
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-black border border-terminal-green/20 text-white font-mono text-sm focus:border-terminal-green focus:outline-none transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-mono text-terminal-green mb-2">
                        MESSAGE_
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-black border border-terminal-green/20 text-white font-mono text-sm focus:border-terminal-green focus:outline-none transition-colors resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting || isSuccess}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-terminal-green text-black font-mono font-bold text-sm tracking-wider hover:bg-terminal-green/90 disabled:opacity-50 transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          TRANSMITTING...
                        </>
                      ) : isSuccess ? (
                        <>
                          <Check className="w-4 h-4" />
                          MESSAGE_SENT
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          SEND_MESSAGE
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Info Cards */}
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.label === "LOCATION" ? "_blank" : undefined}
                    rel={info.label === "LOCATION" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-6 terminal-card hover:border-terminal-green/40 transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 border border-terminal-green/30 bg-terminal-green/5 shrink-0">
                      <info.icon className="w-5 h-5 text-terminal-green" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-terminal-green/60 mb-1">
                        {info.label}
                      </div>
                      <div className="text-sm font-mono text-white">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}

                {/* Social Links */}
                <div className="terminal-card p-6">
                  <div className="text-xs font-mono text-terminal-green mb-4">
                    {"/// SOCIAL_LINKS"}
                  </div>
                  <div className="flex items-center gap-3">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 border border-terminal-green/20 text-terminal-green/60 hover:text-terminal-green hover:border-terminal-green/50 transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
