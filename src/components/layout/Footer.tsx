"use client";

import Link from "next/link";
import { Github, Twitter, Instagram, Linkedin, Mail, Heart } from "lucide-react";

const footerLinks = {
  pages: [
    { label: "About", href: "/about" },
    { label: "Schedule", href: "/schedule" },
    { label: "Prizes", href: "/prizes" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Code of Conduct", href: "/code-of-conduct" },
  ],
};

const socials = [
  { icon: Twitter, href: "https://twitter.com/innohack", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/innohack", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/innohack", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/innohack", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block font-heading text-2xl font-bold text-white mb-4">
              <span className="text-rose-400">Inno</span>Hack
            </Link>
            <p className="text-neutral-400 text-sm max-w-md mb-6">
              36 hours of building, breaking, and shipping. Join 500+ hackers 
              for the most intense hackathon of the year.
            </p>
            <a
              href="mailto:hello@innohack.dev"
              className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@innohack.dev
            </a>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-semibold text-white mb-4">Pages</h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-rose-500" /> in India
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="text-sm text-neutral-500">
            © 2026 InnoHack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
