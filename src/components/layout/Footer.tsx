"use client";

import Link from "next/link";
import { Terminal, Github, Instagram, Linkedin, Twitter, Mail, MapPin, ExternalLink } from "lucide-react";
import { HACKATHON_CONFIG } from "@/lib/constants";

const quickLinks = [
  { href: "/about", label: "ABOUT" },
  { href: "/schedule", label: "SCHEDULE" },
  { href: "/prizes", label: "PRIZES" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "CONTACT" },
];

const policies = [
  { href: "/policies/privacy", label: "PRIVACY_POLICY" },
  { href: "/policies/terms", label: "TERMS_CONDITIONS" },
  { href: "/policies/refund", label: "REFUND_POLICY" },
];

const socials = [
  { icon: Github, href: HACKATHON_CONFIG.social.github, label: "GitHub" },
  { icon: Instagram, href: HACKATHON_CONFIG.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: HACKATHON_CONFIG.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: HACKATHON_CONFIG.social.twitter, label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-terminal-green/20 bg-black">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10">
        {/* CTA Section */}
        <div className="border-b border-terminal-green/20 py-16">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <div className="protocol-box mx-auto mb-6 w-fit">
              <span className="status-processing" />
              SLOTS_LIMITED
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              SYSTEMS<span className="text-terminal-green">READY</span>?
            </h2>
            <p className="text-gray-500 font-mono text-sm mb-8 max-w-md mx-auto">
              Allocation is processed on a first-come, first-serve basis.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-3 bg-terminal-green text-black font-mono font-bold text-sm tracking-wider hover:bg-terminal-green/90 transition-colors"
            >
              REGISTER_NOW
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Main Footer */}
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-12 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 border border-terminal-green/50 bg-terminal-green/10">
                  <Terminal className="w-5 h-5 text-terminal-green" />
                </div>
                <div>
                  <span className="block text-lg font-display font-bold text-white">
                    {HACKATHON_CONFIG.name.toUpperCase()}
                  </span>
                  <span className="text-[10px] text-terminal-green/60 tracking-widest">
                    2K26
                  </span>
                </div>
              </Link>
              <p className="text-xs text-gray-500 font-mono leading-relaxed mb-6">
                Empowering the next generation of innovators. 24 hours of creation, collaboration, and code.
              </p>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 border border-terminal-green/20 text-terminal-green/60 hover:text-terminal-green hover:border-terminal-green/50 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xs font-mono text-terminal-green mb-4 tracking-wider">
                {"/// QUICK_LINKS"}
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs font-mono text-gray-500 hover:text-terminal-green transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-xs font-mono text-terminal-green mb-4 tracking-wider">
                {"/// POLICIES"}
              </h3>
              <ul className="space-y-2">
                {policies.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs font-mono text-gray-500 hover:text-terminal-green transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-mono text-terminal-green mb-4 tracking-wider">
                {"/// CONTACT"}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-terminal-green/60 mt-0.5 shrink-0" />
                  <span className="text-xs font-mono text-gray-500">
                    {HACKATHON_CONFIG.venue.name}<br />
                    {HACKATHON_CONFIG.venue.address}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-terminal-green/60 shrink-0" />
                  <a
                    href={`mailto:${HACKATHON_CONFIG.contact.email}`}
                    className="text-xs font-mono text-gray-500 hover:text-terminal-green transition-colors"
                  >
                    {HACKATHON_CONFIG.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-terminal-green/10 py-6">
          <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] font-mono text-gray-600">
              © 2026 {HACKATHON_CONFIG.name.toUpperCase()}. ALL_RIGHTS_RESERVED.
            </p>
            <p className="text-[10px] font-mono text-gray-600">
              CRAFTED WITH <span className="text-terminal-red">♥</span> BY THE INNOHACK TEAM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
