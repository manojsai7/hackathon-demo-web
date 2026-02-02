"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, ExternalLink, Code } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { PAST_WINNERS } from "@/lib/constants";

const years = ["All", ...Array.from(new Set(PAST_WINNERS.map((w) => w.year.toString())))];
const awards = [
  "All",
  ...Array.from(new Set(PAST_WINNERS.map((w) => w.award))),
];

export default function Achievements() {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedAward, setSelectedAward] = useState("All");

  const filteredWinners = PAST_WINNERS.filter((winner) => {
    const yearMatch =
      selectedYear === "All" || winner.year.toString() === selectedYear;
    const awardMatch =
      selectedAward === "All" || winner.award === selectedAward;
    return yearMatch && awardMatch;
  });

  return (
    <section id="achievements" className="relative bg-dark-elevated py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute -right-40 bottom-1/3 h-96 w-96 rounded-full bg-primary-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400">
            Hall of Fame
          </span>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Past champions who{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              changed the game
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            These incredible teams turned their 36-hour ideas into reality. Get
            inspired by their innovation and creativity!
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Year filter */}
          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedYear === year
                    ? "bg-primary-500 text-white"
                    : "bg-dark-card text-gray-400 hover:bg-dark-elevated hover:text-white"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="h-6 w-px bg-dark-border" />

          {/* Award filter */}
          <div className="flex flex-wrap gap-2">
            {awards.map((award) => (
              <button
                key={award}
                onClick={() => setSelectedAward(award)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedAward === award
                    ? "bg-purple-500 text-white"
                    : "bg-dark-card text-gray-400 hover:bg-dark-elevated hover:text-white"
                }`}
              >
                {award}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Winners grid - Bento style */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredWinners.map((winner, index) => (
              <motion.div
                key={`${winner.teamName}-${winner.year}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={index === 0 ? "lg:col-span-2 lg:row-span-1" : ""}
              >
                <Card
                  variant="glass"
                  hover="glow"
                  padding="none"
                  className="group h-full overflow-hidden"
                >
                  {/* Image placeholder with gradient overlay */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-dark-card to-dark-elevated">
                    {/* Placeholder pattern */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">
                        {winner.award.includes("Champion") ? "🏆" : winner.award.includes("Runner") ? "🥈" : "💡"}
                      </div>
                    </div>
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent" />

                    {/* Award badge */}
                    <div className="absolute left-4 top-4">
                      <Badge
                        variant={
                          winner.award.includes("Champion")
                            ? "gradient"
                            : winner.award.includes("Runner")
                            ? "info"
                            : "success"
                        }
                      >
                        <Trophy className="mr-1 h-3 w-3" />
                        {winner.award}
                      </Badge>
                    </div>

                    {/* Year badge */}
                    <div className="absolute right-4 top-4">
                      <Badge variant="default">{winner.year}</Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Team & Project */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white">
                        {winner.project}
                      </h3>
                      <p className="text-sm text-primary-400">
                        by {winner.teamName}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="mb-4 text-sm text-gray-400">
                      {winner.description}
                    </p>

                    {/* Tech stack */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {winner.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-dark-elevated px-3 py-1 text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Team members & college */}
                    <div className="flex items-center justify-between border-t border-dark-border pt-4">
                      <div>
                        <p className="text-xs text-gray-500">Team Members</p>
                        <p className="text-sm text-gray-300">
                          {winner.members.slice(0, 2).join(", ")}
                          {winner.members.length > 2 &&
                            ` +${winner.members.length - 2}`}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">College</p>
                        <p className="text-sm text-gray-300">{winner.college}</p>
                      </div>
                    </div>

                    {/* View project link */}
                    {winner.projectUrl && (
                      <a
                        href={winner.projectUrl}
                        className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-dark-border bg-dark-elevated/50 py-2 text-sm text-gray-400 transition-colors hover:bg-dark-elevated hover:text-white"
                      >
                        <Code className="h-4 w-4" />
                        View Project
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredWinners.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center"
          >
            <p className="text-gray-400">No winners found with selected filters.</p>
          </motion.div>
        )}

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-dark-border bg-dark-card/50 p-8 backdrop-blur-sm">
            <Trophy className="h-12 w-12 text-yellow-400" />
            <h3 className="text-2xl font-bold text-white">
              Your name could be here next year!
            </h3>
            <p className="max-w-md text-gray-400">
              Join InnoHack 2026 and build something that inspires the next
              generation of innovators.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
