"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  User,
  Mail,
  Phone,
  Building,
  Users,
  Code,
  CreditCard,
  Check,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Shield,
  Clock,
  Gift,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";
import { cn, formatCurrency } from "@/lib/utils";
import {
  HACKATHON_CONFIG,
  SKILLS_OPTIONS,
  EXPERIENCE_LEVELS,
  PROBLEM_TRACKS,
} from "@/lib/constants";

// Form schema
const registrationSchema = z.object({
  // Step 1: Personal Details
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  college: z.string().min(2, "Please enter your college name"),
  collegeId: z.string().min(1, "Please enter your college ID"),
  year: z.string().min(1, "Please select your year"),

  // Step 2: Team Details
  participationType: z.enum(["solo", "team"]),
  teamName: z.string().optional(),
  teamSize: z.string().optional(),
  teamMembers: z.string().optional(),

  // Step 3: Technical Profile
  skills: z.array(z.string()).min(1, "Please select at least one skill"),
  experience: z.string().min(1, "Please select your experience level"),
  github: z.string().optional(),
  portfolio: z.string().optional(),
  problemTrack: z.string().min(1, "Please select a problem track"),
});

type RegistrationData = z.infer<typeof registrationSchema>;

const steps = [
  { id: 1, title: "Personal Details", icon: User },
  { id: 2, title: "Team Info", icon: Users },
  { id: 3, title: "Technical Profile", icon: Code },
  { id: 4, title: "Payment", icon: CreditCard },
];

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      participationType: "team",
      skills: [],
    },
  });

  const participationType = watch("participationType");
  const isEarlyBird = new Date() < HACKATHON_CONFIG.dates.registration.earlyBird;
  const price =
    participationType === "solo"
      ? isEarlyBird
        ? HACKATHON_CONFIG.pricing.earlyBird.solo
        : HACKATHON_CONFIG.pricing.solo
      : isEarlyBird
      ? HACKATHON_CONFIG.pricing.earlyBird.team
      : HACKATHON_CONFIG.pricing.team;

  const nextStep = async () => {
    const fieldsToValidate: (keyof RegistrationData)[][] = [
      ["fullName", "email", "phone", "college", "collegeId", "year"],
      ["participationType"],
      ["skills", "experience", "problemTrack"],
    ];

    if (currentStep < 4) {
      const isValid = await trigger(fieldsToValidate[currentStep - 1]);
      if (isValid) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: RegistrationData) => {
    setIsSubmitting(true);
    
    // Simulate payment process
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log("Registration data:", data);
    setIsComplete(true);
    setIsSubmitting(false);
  };

  if (isComplete) {
    return (
      <section id="register" className="relative bg-dark-base py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500"
          >
            <Check className="h-12 w-12 text-white" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-4xl font-bold text-white"
          >
            You&apos;re in! 🎉
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8 text-lg text-gray-400"
          >
            Welcome to InnoHack 2026! Check your email for confirmation and
            next steps. See you at the hackathon!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href={HACKATHON_CONFIG.social.discord}
              className="inline-flex items-center gap-2 rounded-xl bg-primary-500/10 px-6 py-3 text-primary-400 transition-colors hover:bg-primary-500/20"
            >
              Join Discord
            </a>
            <a
              href={HACKATHON_CONFIG.social.whatsapp}
              className="inline-flex items-center gap-2 rounded-xl bg-green-500/10 px-6 py-3 text-green-400 transition-colors hover:bg-green-500/20"
            >
              Join WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="relative bg-dark-base py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-accent-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-accent-500/10 px-4 py-2 text-sm font-medium text-accent-400">
            Secure Your Spot
          </span>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Ready to{" "}
            <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
              make history
            </span>
            ?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Fill in your details, complete the payment, and you&apos;re all set for
            36 hours of innovation!
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card variant="glass" padding="none" className="overflow-hidden">
              {/* Step indicator */}
              <div className="border-b border-dark-border bg-dark-card/50 p-6">
                <div className="flex items-center justify-between">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                      <div
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-full transition-all",
                          currentStep > step.id
                            ? "bg-green-500 text-white"
                            : currentStep === step.id
                            ? "bg-primary-500 text-white"
                            : "bg-dark-elevated text-gray-500"
                        )}
                      >
                        {currentStep > step.id ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <step.icon className="h-5 w-5" />
                        )}
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={cn(
                            "mx-2 hidden h-0.5 w-12 transition-colors md:block lg:w-16",
                            currentStep > step.id
                              ? "bg-green-500"
                              : "bg-dark-border"
                          )}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between text-sm">
                  {steps.map((step) => (
                    <span
                      key={step.id}
                      className={cn(
                        "hidden md:block",
                        currentStep === step.id
                          ? "font-medium text-white"
                          : "text-gray-500"
                      )}
                    >
                      {step.title}
                    </span>
                  ))}
                </div>
              </div>

              {/* Form content */}
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {/* Step 1: Personal Details */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-semibold text-white">
                        Tell us about yourself
                      </h3>
                      <div className="grid gap-6 md:grid-cols-2">
                        <Input
                          label="Full Name"
                          placeholder="John Doe"
                          leftIcon={<User className="h-5 w-5" />}
                          error={errors.fullName?.message}
                          {...register("fullName")}
                        />
                        <Input
                          label="Email Address"
                          type="email"
                          placeholder="john@example.com"
                          leftIcon={<Mail className="h-5 w-5" />}
                          error={errors.email?.message}
                          {...register("email")}
                        />
                        <Input
                          label="Phone Number"
                          placeholder="+91 98765 43210"
                          leftIcon={<Phone className="h-5 w-5" />}
                          error={errors.phone?.message}
                          {...register("phone")}
                        />
                        <Input
                          label="College/University"
                          placeholder="IIT Delhi"
                          leftIcon={<Building className="h-5 w-5" />}
                          error={errors.college?.message}
                          {...register("college")}
                        />
                        <Input
                          label="College ID"
                          placeholder="2024CS1234"
                          error={errors.collegeId?.message}
                          {...register("collegeId")}
                        />
                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-300">
                            Year of Study
                          </label>
                          <select
                            className="w-full rounded-xl border border-dark-border bg-dark-card px-4 py-3 text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                            {...register("year")}
                          >
                            <option value="">Select year</option>
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                            <option value="4">4th Year</option>
                            <option value="5">5th Year</option>
                            <option value="pg">Post Graduate</option>
                          </select>
                          {errors.year && (
                            <p className="mt-1 text-sm text-red-500">
                              {errors.year.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Team Info */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-semibold text-white">
                        How are you participating?
                      </h3>

                      <Controller
                        name="participationType"
                        control={control}
                        render={({ field }) => (
                          <div className="grid gap-4 md:grid-cols-2">
                            <button
                              type="button"
                              onClick={() => field.onChange("solo")}
                              className={cn(
                                "flex flex-col items-center gap-3 rounded-2xl border-2 p-6 transition-all",
                                field.value === "solo"
                                  ? "border-primary-500 bg-primary-500/10"
                                  : "border-dark-border hover:border-dark-border/80"
                              )}
                            >
                              <User
                                className={cn(
                                  "h-8 w-8",
                                  field.value === "solo"
                                    ? "text-primary-400"
                                    : "text-gray-500"
                                )}
                              />
                              <div className="text-center">
                                <p className="font-semibold text-white">Solo</p>
                                <p className="text-sm text-gray-400">
                                  Hack alone like a lone wolf
                                </p>
                              </div>
                            </button>
                            <button
                              type="button"
                              onClick={() => field.onChange("team")}
                              className={cn(
                                "flex flex-col items-center gap-3 rounded-2xl border-2 p-6 transition-all",
                                field.value === "team"
                                  ? "border-primary-500 bg-primary-500/10"
                                  : "border-dark-border hover:border-dark-border/80"
                              )}
                            >
                              <Users
                                className={cn(
                                  "h-8 w-8",
                                  field.value === "team"
                                    ? "text-primary-400"
                                    : "text-gray-500"
                                )}
                              />
                              <div className="text-center">
                                <p className="font-semibold text-white">Team</p>
                                <p className="text-sm text-gray-400">
                                  Build with your squad (2-4 members)
                                </p>
                              </div>
                            </button>
                          </div>
                        )}
                      />

                      {participationType === "team" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="space-y-6"
                        >
                          <Input
                            label="Team Name"
                            placeholder="Code Crusaders"
                            leftIcon={<Users className="h-5 w-5" />}
                            {...register("teamName")}
                          />
                          <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                              Team Size
                            </label>
                            <select
                              className="w-full rounded-xl border border-dark-border bg-dark-card px-4 py-3 text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                              {...register("teamSize")}
                            >
                              <option value="2">2 Members</option>
                              <option value="3">3 Members</option>
                              <option value="4">4 Members</option>
                            </select>
                          </div>
                          <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                              Team Member Emails (comma separated)
                            </label>
                            <textarea
                              className="w-full rounded-xl border border-dark-border bg-dark-card px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                              placeholder="member1@email.com, member2@email.com"
                              rows={3}
                              {...register("teamMembers")}
                            />
                            <p className="mt-1 text-sm text-gray-500">
                              We&apos;ll send them an invite to join your team
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}

                  {/* Step 3: Technical Profile */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-semibold text-white">
                        Show off your skills
                      </h3>

                      {/* Skills */}
                      <div>
                        <label className="mb-3 block text-sm font-medium text-gray-300">
                          Technical Skills (select all that apply)
                        </label>
                        <Controller
                          name="skills"
                          control={control}
                          render={({ field }) => (
                            <div className="flex flex-wrap gap-2">
                              {SKILLS_OPTIONS.map((skill) => (
                                <button
                                  key={skill}
                                  type="button"
                                  onClick={() => {
                                    const current = field.value || [];
                                    if (current.includes(skill)) {
                                      field.onChange(
                                        current.filter((s) => s !== skill)
                                      );
                                    } else {
                                      field.onChange([...current, skill]);
                                    }
                                  }}
                                  className={cn(
                                    "rounded-full px-4 py-2 text-sm font-medium transition-all",
                                    field.value?.includes(skill)
                                      ? "bg-primary-500 text-white"
                                      : "bg-dark-elevated text-gray-400 hover:bg-dark-card"
                                  )}
                                >
                                  {skill}
                                </button>
                              ))}
                            </div>
                          )}
                        />
                        {errors.skills && (
                          <p className="mt-2 text-sm text-red-500">
                            {errors.skills.message}
                          </p>
                        )}
                      </div>

                      {/* Experience Level */}
                      <div>
                        <label className="mb-3 block text-sm font-medium text-gray-300">
                          Experience Level
                        </label>
                        <Controller
                          name="experience"
                          control={control}
                          render={({ field }) => (
                            <div className="grid gap-3 md:grid-cols-3">
                              {EXPERIENCE_LEVELS.map((level) => (
                                <button
                                  key={level.value}
                                  type="button"
                                  onClick={() => field.onChange(level.value)}
                                  className={cn(
                                    "rounded-xl border-2 p-4 text-left transition-all",
                                    field.value === level.value
                                      ? "border-primary-500 bg-primary-500/10"
                                      : "border-dark-border hover:border-dark-border/80"
                                  )}
                                >
                                  <p className="font-medium text-white">
                                    {level.label}
                                  </p>
                                  <p className="text-sm text-gray-400">
                                    {level.description}
                                  </p>
                                </button>
                              ))}
                            </div>
                          )}
                        />
                        {errors.experience && (
                          <p className="mt-2 text-sm text-red-500">
                            {errors.experience.message}
                          </p>
                        )}
                      </div>

                      {/* Problem Track */}
                      <div>
                        <label className="mb-3 block text-sm font-medium text-gray-300">
                          Preferred Problem Track
                        </label>
                        <Controller
                          name="problemTrack"
                          control={control}
                          render={({ field }) => (
                            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                              {PROBLEM_TRACKS.map((track) => (
                                <button
                                  key={track.value}
                                  type="button"
                                  onClick={() => field.onChange(track.value)}
                                  className={cn(
                                    "rounded-xl border-2 p-4 text-left transition-all",
                                    field.value === track.value
                                      ? "border-accent-500 bg-accent-500/10"
                                      : "border-dark-border hover:border-dark-border/80"
                                  )}
                                >
                                  <p className="font-medium text-white">
                                    {track.label}
                                  </p>
                                  <p className="text-sm text-gray-400">
                                    {track.description}
                                  </p>
                                </button>
                              ))}
                            </div>
                          )}
                        />
                        {errors.problemTrack && (
                          <p className="mt-2 text-sm text-red-500">
                            {errors.problemTrack.message}
                          </p>
                        )}
                      </div>

                      {/* Optional links */}
                      <div className="grid gap-6 md:grid-cols-2">
                        <Input
                          label="GitHub Profile (optional)"
                          placeholder="https://github.com/username"
                          {...register("github")}
                        />
                        <Input
                          label="Portfolio/LinkedIn (optional)"
                          placeholder="https://linkedin.com/in/username"
                          {...register("portfolio")}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Payment */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-semibold text-white">
                        Complete your registration
                      </h3>

                      {/* Price summary */}
                      <div className="rounded-2xl border border-dark-border bg-dark-elevated/50 p-6">
                        <div className="mb-4 flex items-center justify-between">
                          <span className="text-gray-400">Registration Type</span>
                          <span className="font-medium text-white">
                            {participationType === "solo" ? "Solo" : "Team"}
                          </span>
                        </div>
                        {isEarlyBird && (
                          <div className="mb-4 flex items-center justify-between">
                            <span className="text-gray-400">Early Bird Discount</span>
                            <span className="font-medium text-green-400">
                              -₹{participationType === "solo" ? 50 : 100}
                            </span>
                          </div>
                        )}
                        <div className="border-t border-dark-border pt-4">
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold text-white">
                              Total Amount
                            </span>
                            <span className="text-2xl font-bold text-primary-400">
                              {formatCurrency(price)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* What's included */}
                      <div className="rounded-2xl border border-dark-border bg-dark-card/30 p-6">
                        <h4 className="mb-4 font-semibold text-white">
                          What&apos;s included:
                        </h4>
                        <div className="grid gap-3 md:grid-cols-2">
                          {[
                            "36-hour hackathon access",
                            "All meals & refreshments",
                            "Exclusive swag kit & T-shirt",
                            "Mentorship sessions",
                            "Certificate of participation",
                            "Networking opportunities",
                          ].map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-2 text-sm text-gray-300"
                            >
                              <Check className="h-4 w-4 text-green-400" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Payment button */}
                      <div className="space-y-4">
                        <Button
                          type="submit"
                          variant="gradient"
                          size="xl"
                          className="w-full"
                          isLoading={isSubmitting}
                          leftIcon={<CreditCard className="h-5 w-5" />}
                        >
                          Pay {formatCurrency(price)} & Register
                        </Button>

                        {/* Trust indicators */}
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Shield className="h-4 w-4" />
                            SSL Secured
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            Instant Confirmation
                          </div>
                        </div>

                        {/* Payment methods */}
                        <div className="text-center">
                          <p className="mb-2 text-sm text-gray-500">
                            Powered by Razorpay
                          </p>
                          <div className="flex items-center justify-center gap-3 text-xs text-gray-600">
                            <span>UPI</span>
                            <span>•</span>
                            <span>Cards</span>
                            <span>•</span>
                            <span>Net Banking</span>
                            <span>•</span>
                            <span>Wallets</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation buttons */}
                {currentStep < 4 && (
                  <div className="mt-8 flex justify-between">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      leftIcon={<ArrowLeft className="h-4 w-4" />}
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      variant="primary"
                      onClick={nextStep}
                      rightIcon={<ArrowRight className="h-4 w-4" />}
                    >
                      Continue
                    </Button>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="mt-4">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={prevStep}
                      leftIcon={<ArrowLeft className="h-4 w-4" />}
                      className="w-full"
                    >
                      Back to previous step
                    </Button>
                  </div>
                )}
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing card */}
            <Card variant="gradient" hover="none" className="relative overflow-hidden">
              {isEarlyBird && (
                <div className="absolute -right-8 top-4 rotate-45 bg-green-500 px-10 py-1 text-xs font-bold text-white">
                  EARLY BIRD
                </div>
              )}
              <div className="text-center">
                <Sparkles className="mx-auto mb-4 h-10 w-10 text-primary-400" />
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Registration Fee
                </h3>
                <div className="mb-4">
                  {isEarlyBird && (
                    <span className="mr-2 text-lg text-gray-500 line-through">
                      {formatCurrency(
                        participationType === "solo"
                          ? HACKATHON_CONFIG.pricing.solo
                          : HACKATHON_CONFIG.pricing.team
                      )}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-white">
                    {formatCurrency(price)}
                  </span>
                  <span className="text-gray-400">
                    /{participationType === "solo" ? "person" : "team"}
                  </span>
                </div>
                {isEarlyBird && (
                  <p className="text-sm text-green-400">
                    Early bird pricing until Feb 10!
                  </p>
                )}
              </div>
            </Card>

            {/* Benefits */}
            <Card variant="glass">
              <h4 className="mb-4 flex items-center gap-2 font-semibold text-white">
                <Gift className="h-5 w-5 text-accent-400" />
                What you get
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {[
                  "Access to 36-hour hackathon",
                  "Meals & unlimited caffeine",
                  "Exclusive swag kit",
                  "T-shirt",
                  "Certificate",
                  "Mentorship sessions",
                  "Networking opportunities",
                  "Chance to win ₹5L+ prizes",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Secure payment */}
            <Card variant="default" className="bg-dark-card/30">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-green-400" />
                <div>
                  <p className="font-medium text-white">Secure Payment</p>
                  <p className="text-sm text-gray-400">
                    Powered by Razorpay. PCI DSS Compliant.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
