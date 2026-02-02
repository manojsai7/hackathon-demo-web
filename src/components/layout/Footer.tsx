"use client";

import { motion } from "framer-motion";
import { Heart, Github, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { HACKATHON_CONFIG } from "@/lib/constants";

const footerLinks = {
  quickLinks: [
    { label: "About", href: "#about" },
    { label: "Timeline", href: "#timeline" },
    { label: "Prizes", href: "#prizes" },
    { label: "Register", href: "#register" },
    { label: "FAQ", href: "#faq" },
  ],
  resources: [
    { label: "Code of Conduct", href: "/code-of-conduct" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
  ],
  community: [
    { label: "Discord Server", href: HACKATHON_CONFIG.social.discord, external: true },
    { label: "WhatsApp Group", href: HACKATHON_CONFIG.social.whatsapp, external: true },
    { label: "Telegram Channel", href: HACKATHON_CONFIG.social.telegram, external: true },
  ],
};

const socialLinks = [
  { icon: Twitter, href: HACKATHON_CONFIG.social.twitter, label: "Twitter" },
  { icon: Instagram, href: HACKATHON_CONFIG.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: HACKATHON_CONFIG.social.linkedin, label: "LinkedIn" },
  { icon: Github, href: "https://github.com/innohack", label: "GitHub" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative border-t border-dark-border bg-dark-base">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-accent-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {HACKATHON_CONFIG.name}
                </h3>
                <p className="text-sm text-gray-400">Build the Future</p>
              </div>
            </div>
            <p className="mb-6 text-sm text-gray-400">
              Join the biggest student hackathon of the year. 36 hours of coding,
              creativity, and collaboration.
            </p>

            {/* Contact info */}
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${HACKATHON_CONFIG.contact.email}`}
                className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {HACKATHON_CONFIG.contact.email}
              </a>
              <a
                href={`tel:${HACKATHON_CONFIG.contact.phone}`}
                className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4" />
                {HACKATHON_CONFIG.contact.phone}
              </a>
              <a
                href={HACKATHON_CONFIG.venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-gray-400 transition-colors hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                {HACKATHON_CONFIG.venue.name}
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Join Community
            </h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-dark-border bg-dark-card/50 text-gray-400 transition-all hover:border-primary-500/50 hover:bg-dark-card hover:text-white"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-dark-border pt-8 md:flex-row"
        >
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {HACKATHON_CONFIG.name}. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-gray-400">
            Made with{" "}
            <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> by
            the {HACKATHON_CONFIG.name} Team
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
