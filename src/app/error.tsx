"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-dark-base px-4">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-red-500/20"
        >
          <AlertTriangle className="h-12 w-12 text-red-400" />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Oops! Something went wrong 😅
          </h1>
          <p className="mx-auto mb-8 max-w-md text-gray-400">
            Don&apos;t worry, it happens to the best of us. Our dev team has been
            notified and is probably already debugging with a cup of coffee!
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            variant="gradient"
            size="lg"
            leftIcon={<RefreshCw className="h-5 w-5" />}
            onClick={reset}
          >
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" size="lg" leftIcon={<Home className="h-5 w-5" />}>
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Error digest for support */}
        {error.digest && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-xs text-gray-600"
          >
            Error ID: {error.digest}
          </motion.p>
        )}
      </div>
    </div>
  );
}
