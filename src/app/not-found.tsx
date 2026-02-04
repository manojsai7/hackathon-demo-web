"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Search, Coffee } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          style={{
            background: "radial-gradient(circle, rgba(220, 38, 38, 0.1) 0%, transparent 60%)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(220, 38, 38, 0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 text-center">
        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="text-9xl font-black text-white md:text-[12rem]">4</span>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 md:w-32 md:h-32 border-4 border-red-600 flex items-center justify-center"
            >
              <span className="text-5xl md:text-6xl font-black text-red-600">IH</span>
            </motion.div>
            <span className="text-9xl font-black text-white md:text-[12rem]">4</span>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="mb-4 text-2xl font-black uppercase tracking-wider text-white md:text-3xl">
            Page <span className="text-red-500">Not Found</span>
          </h1>
          <p className="mx-auto max-w-md text-gray-500 font-mono">
            Looks like this page is still being hacked together. Maybe it&apos;s
            grabbing some coffee? Let&apos;s get you back on track!
          </p>
        </motion.div>

        {/* Fun stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 flex items-center justify-center gap-6 text-sm text-gray-600 font-mono"
        >
          <div className="flex items-center gap-2">
            <Coffee className="h-4 w-4 text-red-500" />
            <span>3,247 coffees consumed</span>
          </div>
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-red-500" />
            <span>Page still searching itself</span>
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wide hover:bg-red-700 transition-all hover:shadow-[0_0_40px_rgba(220,38,38,0.5)]"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wide hover:bg-white/5 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>
        </motion.div>

        {/* Easter egg hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-12 text-xs font-mono text-gray-700"
        >
          Pro tip: The real hackathon is the friends we made along the way 🚀
        </motion.p>
      </div>
    </div>
  );
}
