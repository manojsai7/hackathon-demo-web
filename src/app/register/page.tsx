"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check, Loader2, Users, Calendar, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const schema = z.object({
  fullName: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone number"),
  college: z.string().min(2, "College name required"),
  year: z.string().min(1, "Select your year"),
  experience: z.string().min(1, "Select experience level"),
  teamStatus: z.string().min(1, "Select team status"),
  tshirtSize: z.string().min(1, "Select t-shirt size"),
  dietaryRestrictions: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to the terms"),
});

type FormData = z.infer<typeof schema>;

const eventDetails = [
  { icon: Calendar, label: "March 15-16, 2026" },
  { icon: MapPin, label: "Tech Hub, Bangalore" },
  { icon: Users, label: "500+ Hackers Expected" },
];

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-20 flex items-center justify-center px-6 bg-black">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md"
          >
            <div className="w-20 h-20 bg-green-600 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-black uppercase tracking-wider text-white mb-4">You&apos;re In!</h1>
            <p className="text-gray-500 font-mono mb-8">
              Check your email for confirmation and next steps. See you at InnoHack!
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold uppercase tracking-wide hover:bg-red-700 transition-colors"
            >
              Back to Home
            </a>
          </motion.div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 bg-black">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 lg:py-24">
          <div className="absolute inset-0 bg-black" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.15) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(220, 38, 38, 0.15) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          {/* Red glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
            style={{
              background: "radial-gradient(ellipse, rgba(220, 38, 38, 0.15) 0%, transparent 70%)",
            }}
          />
          
          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block mb-4 text-red-500 font-mono text-sm tracking-widest uppercase border border-red-600/30 bg-red-600/10 px-4 py-2">
                Registration
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Secure your spot
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-400">
                {eventDetails.map((detail) => (
                  <div key={detail.label} className="flex items-center gap-2">
                    <detail.icon className="w-5 h-5 text-green-400" />
                    <span>{detail.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section className="py-8 pb-24">
          <div className="mx-auto max-w-2xl px-6">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-neutral-900/50 rounded-2xl border border-neutral-800 p-8"
            >
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register("fullName")}
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-green-500 transition-colors"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-400">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-green-500 transition-colors"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Phone *
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-green-500 transition-colors"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* College & Year */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      College/University *
                    </label>
                    <input
                      {...register("college")}
                      type="text"
                      placeholder="IIT Bombay"
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-green-500 transition-colors"
                    />
                    {errors.college && (
                      <p className="mt-1 text-sm text-red-400">{errors.college.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Year of Study *
                    </label>
                    <select
                      {...register("year")}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white focus:outline-none focus:border-green-500 transition-colors"
                    >
                      <option value="">Select year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                      <option value="pg">Post Graduate</option>
                      <option value="working">Working Professional</option>
                    </select>
                    {errors.year && (
                      <p className="mt-1 text-sm text-red-400">{errors.year.message}</p>
                    )}
                  </div>
                </div>

                {/* Experience & Team Status */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Hackathon Experience *
                    </label>
                    <select
                      {...register("experience")}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white focus:outline-none focus:border-green-500 transition-colors"
                    >
                      <option value="">Select experience</option>
                      <option value="first">This is my first!</option>
                      <option value="1-2">1-2 hackathons</option>
                      <option value="3-5">3-5 hackathons</option>
                      <option value="5+">5+ hackathons</option>
                    </select>
                    {errors.experience && (
                      <p className="mt-1 text-sm text-red-400">{errors.experience.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Team Status *
                    </label>
                    <select
                      {...register("teamStatus")}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white focus:outline-none focus:border-green-500 transition-colors"
                    >
                      <option value="">Select status</option>
                      <option value="solo">Looking for a team</option>
                      <option value="partial">Have some teammates</option>
                      <option value="complete">Team is complete</option>
                    </select>
                    {errors.teamStatus && (
                      <p className="mt-1 text-sm text-red-400">{errors.teamStatus.message}</p>
                    )}
                  </div>
                </div>

                {/* T-shirt & Dietary */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      T-Shirt Size *
                    </label>
                    <select
                      {...register("tshirtSize")}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white focus:outline-none focus:border-green-500 transition-colors"
                    >
                      <option value="">Select size</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                    {errors.tshirtSize && (
                      <p className="mt-1 text-sm text-red-400">{errors.tshirtSize.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Dietary Restrictions
                    </label>
                    <input
                      {...register("dietaryRestrictions")}
                      type="text"
                      placeholder="Vegetarian, Vegan, etc."
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <input
                    {...register("agreeToTerms")}
                    type="checkbox"
                    id="terms"
                    className="mt-1 w-5 h-5 rounded border-neutral-700 bg-neutral-800 text-green-500 focus:ring-green-500"
                  />
                  <label htmlFor="terms" className="text-sm text-neutral-400">
                    I agree to the{" "}
                    <a href="#" className="text-green-400 hover:underline">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-green-400 hover:underline">
                      Code of Conduct
                    </a>
                    . I understand the registration fee of ₹299 is non-refundable.
                  </label>
                </div>
                {errors.agreeToTerms && (
                  <p className="text-sm text-red-400">{errors.agreeToTerms.message}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Complete Registration
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-neutral-500">
                  You&apos;ll be redirected to payment after this step.
                </p>
              </div>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
