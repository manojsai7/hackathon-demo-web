"use client";

import { motion } from "framer-motion";
import { Target, Users, Award, Lightbulb, Zap, Code } from "lucide-react";
import Card from "@/components/ui/Card";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "Tackle real-world problems across healthcare, education, sustainability, and more. Your creativity has no limits here.",
  },
  {
    icon: Users,
    title: "Build Your Tribe",
    description:
      "Connect with like-minded innovators, form teams with diverse skills, and forge friendships that last beyond the hackathon.",
  },
  {
    icon: Code,
    title: "Learn by Doing",
    description:
      "Hands-on workshops, mentorship from industry experts, and the freedom to experiment with cutting-edge tech.",
  },
  {
    icon: Award,
    title: "Win Big",
    description:
      "Compete for ₹5 Lakhs+ in prizes, internship opportunities, and the chance to turn your idea into a real startup.",
  },
];

const judgingCriteria = [
  { label: "Innovation & Creativity", value: 30 },
  { label: "Technical Complexity", value: 25 },
  { label: "Impact & Feasibility", value: 25 },
  { label: "Design & User Experience", value: 20 },
];

export default function About() {
  return (
    <section id="about" className="relative bg-dark-base py-24 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-accent-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-400">
            About InnoHack
          </span>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            More than just a{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              hackathon
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            InnoHack isn&apos;t your typical hackathon. It&apos;s a 36-hour journey where
            creativity meets technology—backed by professional hackathon teams
            and mentors who&apos;ve shipped real products. Are you ready to push
            your limits?
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                variant="glass"
                hover="glow"
                className="group h-full"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 p-3 text-primary-400 transition-colors group-hover:from-primary-500/30 group-hover:to-accent-500/30">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Two column layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Theme & Objectives */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/20 text-primary-400">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Theme: Tech for Tomorrow
                </h3>
              </div>
              <p className="text-gray-400">
                This year, we challenge you to build solutions that create a
                positive impact on society. Whether it&apos;s making healthcare
                accessible, revolutionizing education, or tackling climate
                change—your code can change the world.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">
                Problem Tracks
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "🏥 HealthTech",
                  "📚 EdTech",
                  "💰 FinTech",
                  "🌱 Sustainability",
                  "💡 Open Innovation",
                ].map((track) => (
                  <span
                    key={track}
                    className="rounded-full border border-dark-border bg-dark-card px-4 py-2 text-sm text-gray-300"
                  >
                    {track}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-primary-500/20 bg-primary-500/5 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/20 text-primary-400">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">
                    Pro tip from past winners
                  </h4>
                  <p className="text-sm text-gray-400">
                    &quot;Don&apos;t try to build everything. Focus on one killer feature
                    and nail it. A polished MVP beats a half-baked full
                    product every time.&quot;
                  </p>
                  <p className="mt-2 text-sm text-primary-400">
                    — Team CodeCrafters, Winners 2025
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Judging Criteria */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card variant="glass" padding="lg">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/20 text-accent-400">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Judging Criteria
                </h3>
              </div>

              <p className="mb-6 text-gray-400">
                Our panel of industry experts and mentors will evaluate your
                projects based on these key areas:
              </p>

              <div className="space-y-6">
                {judgingCriteria.map((criteria, index) => (
                  <motion.div
                    key={criteria.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium text-white">
                        {criteria.label}
                      </span>
                      <span className="text-sm font-semibold text-primary-400">
                        {criteria.value}%
                      </span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-dark-elevated">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${criteria.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-dark-border bg-dark-elevated/50 p-4">
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-white">Remember:</span>{" "}
                  It&apos;s not about using the fanciest tech stack. It&apos;s about
                  solving a real problem in a creative way that actually works!
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
