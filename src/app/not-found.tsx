"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Search, Coffee } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-dark-base px-4">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 30, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center">
        {/* 404 animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative">
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="block text-9xl font-bold text-white md:text-[12rem]"
            >
              4
            </motion.span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl"
            >
              🔍
            </motion.span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              className="text-9xl font-bold text-white md:text-[12rem]"
            >
              0
            </motion.span>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              className="text-9xl font-bold text-white md:text-[12rem]"
            >
              4
            </motion.span>
          </div>
        </motion.div>

        {/* Fun message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Oops! This page pulled an all-nighter and crashed 💤
          </h1>
          <p className="mx-auto max-w-md text-gray-400">
            Looks like this page is still being hacked together. Maybe it&apos;s
            grabbing some coffee? Either way, let&apos;s get you back on track!
          </p>
        </motion.div>

        {/* Fun stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 flex items-center justify-center gap-6 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <Coffee className="h-4 w-4" />
            <span>3,247 coffees consumed</span>
          </div>
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4" />
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
          <Link href="/">
            <Button variant="gradient" size="lg" leftIcon={<Home className="h-5 w-5" />}>
              Back to Home
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            leftIcon={<ArrowLeft className="h-5 w-5" />}
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </motion.div>

        {/* Easter egg hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-12 text-xs text-gray-600"
        >
          Pro tip: The real hackathon is the friends we made along the way 🚀
        </motion.p>
      </div>
    </div>
  );
}
