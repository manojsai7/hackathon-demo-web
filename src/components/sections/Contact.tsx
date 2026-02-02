"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail, Phone, MapPin, MessageCircle, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";
import { HACKATHON_CONFIG, ORGANIZERS } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact form:", data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative bg-dark-base py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-accent-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-400">
            Get in Touch
          </span>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            We&apos;d love to{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              hear from you
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Have questions, suggestions, or just want to say hi? Drop us a
            message and we&apos;ll get back to you within 24 hours!
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card variant="glass" padding="lg">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Input
                    label="Your Name"
                    placeholder="John Doe"
                    error={errors.name?.message}
                    {...register("name")}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="john@example.com"
                    error={errors.email?.message}
                    {...register("email")}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <select
                    className="w-full rounded-xl border border-dark-border bg-dark-card px-4 py-3 text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    {...register("subject")}
                  >
                    <option value="">Select a topic</option>
                    <option value="registration">Registration Query</option>
                    <option value="payment">Payment Issue</option>
                    <option value="sponsorship">Sponsorship Inquiry</option>
                    <option value="general">General Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    className="w-full rounded-xl border border-dark-border bg-dark-card px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    placeholder="Tell us what's on your mind..."
                    rows={5}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  isLoading={isSubmitting}
                  leftIcon={
                    isSubmitted ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <Send className="h-5 w-5" />
                    )
                  }
                >
                  {isSubmitted ? "Message Sent!" : "Send Message"}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quick contact cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Card variant="default" hover="lift" className="group">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400 transition-colors group-hover:bg-primary-500/20">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email us at</p>
                    <a
                      href={`mailto:${HACKATHON_CONFIG.contact.email}`}
                      className="font-medium text-white hover:text-primary-400"
                    >
                      {HACKATHON_CONFIG.contact.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card variant="default" hover="lift" className="group">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 transition-colors group-hover:bg-accent-500/20">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call us at</p>
                    <a
                      href={`tel:${HACKATHON_CONFIG.contact.phone}`}
                      className="font-medium text-white hover:text-accent-400"
                    >
                      {HACKATHON_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Venue card */}
            <Card variant="glass" className="group">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Venue</p>
                  <p className="font-medium text-white">
                    {HACKATHON_CONFIG.venue.name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {HACKATHON_CONFIG.venue.address}
                  </p>
                  <a
                    href={HACKATHON_CONFIG.venue.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm text-primary-400 hover:underline"
                  >
                    View on Maps →
                  </a>
                </div>
              </div>
            </Card>

            {/* Community links */}
            <Card variant="gradient" className="overflow-hidden">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20 text-green-400">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white">Join our community</p>
                  <p className="text-sm text-gray-400">
                    Get instant answers on Discord or WhatsApp
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={HACKATHON_CONFIG.social.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#5865F2]/20 px-4 py-2 text-sm font-medium text-[#5865F2] transition-colors hover:bg-[#5865F2]/30"
                >
                  Discord
                </a>
                <a
                  href={HACKATHON_CONFIG.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-500/20 px-4 py-2 text-sm font-medium text-green-400 transition-colors hover:bg-green-500/30"
                >
                  WhatsApp
                </a>
                <a
                  href={HACKATHON_CONFIG.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-400 transition-colors hover:bg-blue-500/30"
                >
                  Telegram
                </a>
              </div>
            </Card>

            {/* Organizers */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Meet the Organizers
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {ORGANIZERS.slice(0, 4).map((organizer) => (
                  <motion.a
                    key={organizer.name}
                    href={organizer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 rounded-xl border border-dark-border bg-dark-card/50 p-3 transition-colors hover:border-primary-500/30"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-sm font-bold text-white">
                      {organizer.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {organizer.name}
                      </p>
                      <p className="text-xs text-gray-400">{organizer.role}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
