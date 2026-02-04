"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Github, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { HACKATHON_CONFIG } from "@/lib/constants";

const footerLinks = {
  pages: [
    { label: "About", href: "/about" },
    { label: "Schedule", href: "/schedule" },
    { label: "Prizes", href: "/prizes" },
    { label: "FAQ", href: "/faq" },
    { label: "Register", href: "/register" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Code of Conduct", href: "/code-of-conduct" },
  ],
};

const socials = [
  { icon: Twitter, href: HACKATHON_CONFIG.social.twitter, label: "Twitter" },
  { icon: Instagram, href: HACKATHON_CONFIG.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: HACKATHON_CONFIG.social.linkedin, label: "LinkedIn" },
  { icon: Github, href: "https://github.com/innohack", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 inline-block font-black text-2xl uppercase tracking-wider text-white">
              <span className="text-red-600">Inno</span>Hack
            </Link>
            <p className="mb-6 max-w-md text-sm font-mono text-gray-400">
              36 hours of building, breaking, and shipping. Join 500+ hackers 
              for the most intense hackathon of the year.
            </p>
            <a
              href="mailto:hello@innohack.dev"
              className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 transition-colors hover:text-white"
            >
              <Mail className="w-4 h-4" />
              hello@innohack.dev
            </a>
          </div>

          {/* Pages */}
          <div>
            <h3 className="mb-4 font-black uppercase tracking-wide text-white">Pages</h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-mono text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-black uppercase tracking-wide text-white">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-mono text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row"
        >
          <p className="flex items-center gap-1 text-sm font-mono text-gray-500">
            Made with <Heart className="h-4 w-4 text-red-600" /> in India
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center text-gray-500 transition-colors hover:bg-zinc-800 hover:text-white"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="text-sm font-mono text-gray-500">
            © 2026 InnoHack. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
