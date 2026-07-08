import React, { useState } from "react";
import { Handshake, Trophy, UserRound, Zap, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  container,
  darkPill,
  glowHover,
  goldButton,
  goldText,
  paragraph,
  section,
  title,
} from "@/lib/styles";
import { fadeUp, slowGlow, stagger, viewport } from "@/lib/motion";

const steps = [
  {
    icon: UserRound,
    title: "Choose Membership",
    text: "Select the membership plan that best suits your lifestyle, schedule, and personal wellness goals.",
    details: [
      "Compare Essential, Ritual, and Transcend tiers side by side.",
      "Switch between monthly and yearly billing anytime.",
      "Upgrade, downgrade, or pause your plan with no lock-in.",
    ],
  },
  {
    icon: Zap,
    title: "Book Your Classes",
    text: "Browse our range of expert-led classes and reserve your preferred sessions with ease.",
    details: [
      "Filter classes by studio location, instructor, or time of day.",
      "Reserve your spot instantly through the Sanctum app.",
      "Get reminders and waitlist alerts for fully booked sessions.",
    ],
  },
  {
    icon: Handshake,
    title: "Grow & Connect",
    text: "Experience inspiring workouts, mindful movement, and a supportive community that keeps you motivated.",
    details: [
      "Join a global community of 10,000+ active members.",
      "Access member-only events, workshops, and socials.",
      "Track your progress alongside instructors who know your name.",
    ],
  },
  {
    icon: Trophy,
    title: "The Lasting Balance",
    text: "Build healthy habits through consistent practice and enjoy long-term physical strength.",
    details: [
      "Personalized milestones to track strength and flexibility gains.",
      "Seasonal retreats designed for deeper, immersive practice.",
      "A lifetime of movement, not just a short-term fitness fix.",
    ],
  },
];

function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className={section}>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className={container}
      >
        <motion.div
          variants={fadeUp}
          className="mx-auto mb-14 max-w-[650px] text-center"
        >
          <div className={`${darkPill} mx-auto`}>How It Works</div>
          <h2 className={title}>
            Start Your <span className={goldText}>Wellness</span> Journey
          </h2>
          <p className={paragraph}>
            Discover a simple path to a healthier, stronger, and more balanced
            lifestyle with our guided wellness experience.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1"
        >
          {steps.map((step, index) => {
            const { icon: Icon, title: stepTitle, text } = step;
            return (
              <motion.article
                variants={fadeUp}
                animate={index === 0 ? slowGlow : undefined}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`min-h-[360px] rounded-[18px] border border-white/10 bg-[linear-gradient(135deg,rgba(20,36,34,0.45),#191919_54%)] p-8 ${glowHover}`}
                key={stepTitle}
              >
                <motion.strong
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className="text-5xl text-[#d2af69]"
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.strong>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.15,
                  }}
                  className="my-5 grid size-13 place-items-center rounded-xl border border-[#d2af69]/35 bg-[#d2af69]/10 text-[#d2af69]"
                >
                  <Icon size={24} />
                </motion.div>
                <h3 className="mb-3.5 text-xl font-semibold text-white">
                  {stepTitle}
                </h3>
                <p className="leading-6 text-[#9da9b9]">{text}</p>
                <button
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className="group mt-3 inline-flex items-center gap-1.5 font-bold text-[#d2af69]"
                >
                  Learn More
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="inline-flex"
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </button>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Learn More dialog */}
      <AnimatePresence>
        {activeStep !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setActiveStep(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg rounded-2xl border border-[#d0aa61]/30 bg-[#161616] p-8 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveStep(null)}
                className="absolute right-4 top-4 text-white/60 transition-colors hover:text-white"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              {(() => {
                const step = steps[activeStep];
                const Icon = step.icon;
                return (
                  <>
                    <div className="mb-5 grid size-14 place-items-center rounded-xl border border-[#d2af69]/35 bg-[#d2af69]/10 text-[#d2af69]">
                      <Icon size={26} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#d2af69]">
                      Step {String(activeStep + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mb-2 mt-2 text-2xl font-bold text-white">
                      {step.title}
                    </h2>
                    <p className="mb-6 text-sm leading-relaxed text-[#efe8dc]/80">
                      {step.text}
                    </p>

                    <ul className="grid gap-3">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-3 text-sm text-[#d8d2ca]"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#d2af69]" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex gap-3">
                      {activeStep > 0 && (
                        <button
                          type="button"
                          onClick={() => setActiveStep(activeStep - 1)}
                          className="flex-1 rounded-full border border-white/15 py-3 text-sm font-semibold text-white transition-colors hover:border-[#d0aa61]/60"
                        >
                          Previous
                        </button>
                      )}
                      {activeStep < steps.length - 1 ? (
                        <button
                          type="button"
                          onClick={() => setActiveStep(activeStep + 1)}
                          className={`${goldButton} flex-1 justify-center`}
                        >
                          Next Step
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setActiveStep(null)}
                          className={`${goldButton} flex-1 justify-center`}
                        >
                          Got It
                        </button>
                      )}
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HowItWorks;
