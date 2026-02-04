"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X } from "lucide-react";
import { HACKATHON_CONFIG } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "HOME", code: "0x00" },
  { href: "/about", label: "ABOUT", code: "0x01" },
  { href: "/schedule", label: "SCHEDULE", code: "0x02" },
  { href: "/prizes", label: "PRIZES", code: "0x03" },
  { href: "/faq", label: "FAQ", code: "0x04" },
  { href: "/contact", label: "CONTACT", code: "0x05" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-hacker-bg/95 backdrop-blur-md border-b border-terminal-green/20"
            : "bg-transparent"
        }`}
      >
        {/* Top status bar */}
        <div className="hidden md:flex items-center justify-between px-6 py-1 text-[10px] font-mono text-terminal-green/60 border-b border-terminal-green/10 bg-black/50">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="status-online" />
              SYSTEM_ONLINE
            </span>
            <span>NODE_ID: INNOHACK_2K26</span>
          </div>
          <div className="flex items-center gap-4">
            <span>UTC+5:30</span>
            <span className="text-terminal-green">{time}</span>
          </div>
        </div>

        <nav className="flex h-14 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-8 h-8 border border-terminal-green/50 bg-terminal-green/10">
              <Terminal className="w-4 h-4 text-terminal-green" />
              <div className="absolute inset-0 bg-terminal-green/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-display font-bold tracking-wider text-white">
                {HACKATHON_CONFIG.name.toUpperCase()}
              </span>
              <span className="text-[8px] text-terminal-green/60 tracking-widest">
                PROTOCOL_V2.0
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 text-xs font-mono tracking-wider text-gray-400 hover:text-terminal-green transition-colors"
              >
                <span className="text-terminal-green/40 mr-1">[{link.code}]</span>
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-px bg-terminal-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/register"
              className="relative px-6 py-2 text-xs font-mono font-bold tracking-wider bg-terminal-green text-black hover:bg-terminal-green/90 transition-colors overflow-hidden group"
            >
              <span className="relative z-10">INITIALIZE_REGISTRATION</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden items-center justify-center w-10 h-10 border border-terminal-green/30 text-terminal-green"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-14 z-40 bg-hacker-bg/98 backdrop-blur-lg border-b border-terminal-green/20 md:hidden"
          >
            <div className="p-4 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 py-3 text-sm font-mono text-gray-400 hover:text-terminal-green transition-colors border-b border-terminal-green/10"
                  >
                    <span className="text-terminal-green/40">{link.code}</span>
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  href="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-3 text-center text-sm font-mono font-bold bg-terminal-green text-black"
                >
                  INITIALIZE_REGISTRATION
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
