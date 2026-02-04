"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, User, Code2, CheckCircle2, Loader2, ArrowRight, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { HACKATHON_CONFIG } from "@/lib/constants";

const tracks = [
  { id: "ai-ml", name: "AI/ML" },
  { id: "web3", name: "Web3/Blockchain" },
  { id: "cybersecurity", name: "Cybersecurity" },
  { id: "iot", name: "IoT" },
  { id: "fintech", name: "FinTech" },
  { id: "healthtech", name: "HealthTech" },
  { id: "edtech", name: "EdTech" },
  { id: "sustainability", name: "Sustainability" },
  { id: "open", name: "Open Innovation" },
];

const teamSizes = [
  { value: "1", label: "Solo", desc: "Individual Participant" },
  { value: "2", label: "Duo", desc: "2 Members" },
  { value: "3", label: "Trio", desc: "3 Members" },
  { value: "4", label: "Squad", desc: "4 Members" },
];

type RegistrationType = "individual" | "team";

export default function RegisterPage() {
  const [regType, setRegType] = useState<RegistrationType>("individual");
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    // Individual Info
    name: "",
    email: "",
    phone: "",
    institution: "",
    github: "",
    linkedin: "",
    // Team Info
    teamName: "",
    teamSize: "2",
    selectedTrack: "",
    // Additional
    experience: "beginner",
    dietaryRestrictions: "",
    tshirtSize: "M",
    heardFrom: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  if (isSuccess) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-20 bg-hacker-bg flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto px-6 text-center"
          >
            <div className="terminal-card p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 mx-auto mb-6 border-2 border-terminal-green flex items-center justify-center"
              >
                <CheckCircle2 className="w-10 h-10 text-terminal-green" />
              </motion.div>
              <h2 className="text-2xl font-display font-bold text-terminal-green mb-4">
                REGISTRATION_COMPLETE
              </h2>
              <p className="text-gray-400 font-mono text-sm mb-6">
                Your registration has been successfully submitted. Check your email for confirmation and further instructions.
              </p>
              <div className="p-4 bg-black/50 border border-terminal-green/20 font-mono text-xs text-left">
                <div className="text-terminal-green/60">/// CONFIRMATION_ID</div>
                <div className="text-terminal-green mt-1">
                  #INH-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </div>
              </div>
            </div>
          </motion.div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 bg-hacker-bg">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 lg:py-24">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
            style={{
              background: "radial-gradient(ellipse, rgba(0, 255, 0, 0.1) 0%, transparent 70%)",
            }}
          />
          
          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="protocol-box mx-auto mb-6 w-fit">
                <span className="status-online" />
                REGISTRATION_OPEN
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-wider mb-4">
                JOIN <span className="text-terminal-green glow-text-subtle">{HACKATHON_CONFIG.name}</span>
              </h1>
              <p className="text-gray-500 font-mono text-sm max-w-xl mx-auto mb-8">
                Secure your spot in the most anticipated hackathon of the year. Limited seats available.
              </p>

              {/* Registration Type Toggle */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <button
                  onClick={() => setRegType("individual")}
                  className={`flex items-center gap-2 px-6 py-3 font-mono text-sm border transition-all ${
                    regType === "individual"
                      ? "border-terminal-green bg-terminal-green/10 text-terminal-green"
                      : "border-terminal-green/20 text-gray-500 hover:text-gray-300"
                  }`}
                >
                  <User className="w-4 h-4" />
                  INDIVIDUAL
                </button>
                <button
                  onClick={() => setRegType("team")}
                  className={`flex items-center gap-2 px-6 py-3 font-mono text-sm border transition-all ${
                    regType === "team"
                      ? "border-terminal-green bg-terminal-green/10 text-terminal-green"
                      : "border-terminal-green/20 text-gray-500 hover:text-gray-300"
                  }`}
                >
                  <Users className="w-4 h-4" />
                  TEAM
                </button>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-center gap-2 max-w-md mx-auto">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`w-8 h-8 flex items-center justify-center font-mono text-xs border ${
                        s === step
                          ? "border-terminal-green bg-terminal-green text-black"
                          : s < step
                          ? "border-terminal-green bg-terminal-green/20 text-terminal-green"
                          : "border-terminal-green/20 text-gray-600"
                      }`}
                    >
                      {s < step ? "✓" : s}
                    </div>
                    {s < 3 && (
                      <div
                        className={`w-16 h-px ${
                          s < step ? "bg-terminal-green" : "bg-terminal-green/20"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section className="pb-20">
          <div className="mx-auto max-w-2xl px-6">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="terminal-card"
            >
              <div className="terminal-header">
                <div className="terminal-dot bg-terminal-red" />
                <div className="terminal-dot bg-terminal-amber" />
                <div className="terminal-dot bg-terminal-green" />
                <span className="ml-4 text-xs font-mono text-gray-500">
                  {step === 1 && "personal_info.sh"}
                  {step === 2 && (regType === "team" ? "team_details.sh" : "preferences.sh")}
                  {step === 3 && "confirm.sh"}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Step 1: Personal Info */}
                {step === 1 && (
                  <>
                    <div className="text-xs font-mono text-terminal-green mb-4">
                      /// PERSONAL_INFORMATION
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-terminal-green/60 mb-2">
                          FULL_NAME *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-black border border-terminal-green/20 text-white font-mono text-sm focus:border-terminal-green focus:outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-terminal-green/60 mb-2">
                          EMAIL *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-black border border-terminal-green/20 text-white font-mono text-sm focus:border-terminal-green focus:outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-terminal-green/60 mb-2">
                          PHONE *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-black border border-terminal-green/20 text-white font-mono text-sm focus:border-terminal-green focus:outline-none"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-terminal-green/60 mb-2">
                          INSTITUTION *
                        </label>
                        <input
                          type="text"
                          value={formData.institution}
                          onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-black border border-terminal-green/20 text-white font-mono text-sm focus:border-terminal-green focus:outline-none"
                          placeholder="Your College/Company"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-terminal-green/60 mb-2">
                          GITHUB
                        </label>
                        <input
                          type="url"
                          value={formData.github}
                          onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                          className="w-full px-4 py-3 bg-black border border-terminal-green/20 text-white font-mono text-sm focus:border-terminal-green focus:outline-none"
                          placeholder="https://github.com/username"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-terminal-green/60 mb-2">
                          LINKEDIN
                        </label>
                        <input
                          type="url"
                          value={formData.linkedin}
                          onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                          className="w-full px-4 py-3 bg-black border border-terminal-green/20 text-white font-mono text-sm focus:border-terminal-green focus:outline-none"
                          placeholder="https://linkedin.com/in/username"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Step 2: Team/Preferences */}
                {step === 2 && (
                  <>
                    {regType === "team" ? (
                      <>
                        <div className="text-xs font-mono text-terminal-green mb-4">
                          /// TEAM_CONFIGURATION
                        </div>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-mono text-terminal-green/60 mb-2">
                              TEAM_NAME *
                            </label>
                            <input
                              type="text"
                              value={formData.teamName}
                              onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                              required
                              className="w-full px-4 py-3 bg-black border border-terminal-green/20 text-white font-mono text-sm focus:border-terminal-green focus:outline-none"
                              placeholder="Code Warriors"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-mono text-terminal-green/60 mb-2">
                              TEAM_SIZE *
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                              {teamSizes.map((size) => (
                                <button
                                  key={size.value}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, teamSize: size.value })}
                                  className={`p-3 border font-mono text-xs transition-all ${
                                    formData.teamSize === size.value
                                      ? "border-terminal-green bg-terminal-green/10 text-terminal-green"
                                      : "border-terminal-green/20 text-gray-500 hover:text-gray-300"
                                  }`}
                                >
                                  <div className="font-bold">{size.label}</div>
                                  <div className="text-[10px] opacity-60">{size.desc}</div>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-xs font-mono text-terminal-green mb-4">
                          /// PREFERENCES
                        </div>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-mono text-terminal-green/60 mb-2">
                              EXPERIENCE_LEVEL *
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                              {["beginner", "intermediate", "advanced"].map((level) => (
                                <button
                                  key={level}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, experience: level })}
                                  className={`p-3 border font-mono text-xs uppercase transition-all ${
                                    formData.experience === level
                                      ? "border-terminal-green bg-terminal-green/10 text-terminal-green"
                                      : "border-terminal-green/20 text-gray-500 hover:text-gray-300"
                                  }`}
                                >
                                  {level}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    <div>
                      <label className="block text-xs font-mono text-terminal-green/60 mb-2">
                        PREFERRED_TRACK *
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {tracks.map((track) => (
                          <button
                            key={track.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, selectedTrack: track.id })}
                            className={`p-3 border font-mono text-xs transition-all ${
                              formData.selectedTrack === track.id
                                ? "border-terminal-green bg-terminal-green/10 text-terminal-green"
                                : "border-terminal-green/20 text-gray-500 hover:text-gray-300"
                            }`}
                          >
                            {track.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Step 3: Additional Info */}
                {step === 3 && (
                  <>
                    <div className="text-xs font-mono text-terminal-green mb-4">
                      /// ADDITIONAL_INFO
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-terminal-green/60 mb-2">
                          T_SHIRT_SIZE
                        </label>
                        <select
                          value={formData.tshirtSize}
                          onChange={(e) => setFormData({ ...formData, tshirtSize: e.target.value })}
                          className="w-full px-4 py-3 bg-black border border-terminal-green/20 text-white font-mono text-sm focus:border-terminal-green focus:outline-none"
                        >
                          <option value="XS">XS</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                          <option value="XXL">XXL</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-terminal-green/60 mb-2">
                          HOW_DID_YOU_HEAR
                        </label>
                        <select
                          value={formData.heardFrom}
                          onChange={(e) => setFormData({ ...formData, heardFrom: e.target.value })}
                          className="w-full px-4 py-3 bg-black border border-terminal-green/20 text-white font-mono text-sm focus:border-terminal-green focus:outline-none"
                        >
                          <option value="">Select...</option>
                          <option value="social">Social Media</option>
                          <option value="friend">Friend/Colleague</option>
                          <option value="college">College</option>
                          <option value="website">Website</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-terminal-green/60 mb-2">
                        DIETARY_RESTRICTIONS
                      </label>
                      <input
                        type="text"
                        value={formData.dietaryRestrictions}
                        onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                        className="w-full px-4 py-3 bg-black border border-terminal-green/20 text-white font-mono text-sm focus:border-terminal-green focus:outline-none"
                        placeholder="Vegetarian, Vegan, Allergies, etc."
                      />
                    </div>

                    {/* Summary */}
                    <div className="mt-6 p-4 bg-black/50 border border-terminal-green/20">
                      <div className="text-xs font-mono text-terminal-green mb-3">
                        /// REGISTRATION_SUMMARY
                      </div>
                      <div className="space-y-2 text-xs font-mono">
                        <div className="flex justify-between">
                          <span className="text-gray-500">TYPE:</span>
                          <span className="text-white uppercase">{regType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">NAME:</span>
                          <span className="text-white">{formData.name || "—"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">EMAIL:</span>
                          <span className="text-white">{formData.email || "—"}</span>
                        </div>
                        {regType === "team" && (
                          <div className="flex justify-between">
                            <span className="text-gray-500">TEAM:</span>
                            <span className="text-white">{formData.teamName || "—"}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-gray-500">TRACK:</span>
                          <span className="text-terminal-green">
                            {tracks.find((t) => t.id === formData.selectedTrack)?.name || "—"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-terminal-green/10">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-2 border border-terminal-green/20 text-gray-400 font-mono text-sm hover:text-white hover:border-terminal-green/40 transition-colors"
                    >
                      BACK
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-2 px-6 py-2 bg-terminal-green text-black font-mono font-bold text-sm hover:bg-terminal-green/90 transition-colors"
                    >
                      NEXT
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-2 px-6 py-2 bg-terminal-green text-black font-mono font-bold text-sm hover:bg-terminal-green/90 disabled:opacity-50 transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          PROCESSING...
                        </>
                      ) : (
                        <>
                          <Zap className="w-4 h-4" />
                          REGISTER_NOW
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
