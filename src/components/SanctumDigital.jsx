import React, { useState } from "react";
import { Award, X, Smartphone, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import imageOne from "@/assets/sanctum digital/feature-image-1-silver.jpg (2).png";
import imageTwo from "@/assets/sanctum digital/feature-image-2-silver.jpg.png";
import {
  container,
  glowHover,
  goldButton,
  goldText,
  imageGlow,
  kicker,
  line,
  paragraph,
  section,
  title,
} from "@/lib/styles";
import { fadeUp, slowGlow, stagger, viewport } from "@/lib/motion";

const platforms = [
  {
    icon: Smartphone,
    label: "iOS & Android App",
    detail: "Full class library and live sessions on the go.",
  },
  {
    icon: Award,
    label: "On-Demand Library",
    detail: "500+ recorded sessions across every discipline.",
  },
  {
    icon: Sparkles,
    label: "Personalized Plans",
    detail: "Programs that adapt to your goals and schedule.",
  },
];

function SanctumDigital() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className={section}>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className={`${container} grid grid-cols-2 items-center gap-20 max-lg:grid-cols-1 max-sm:gap-10`}
      >
        <motion.div
          variants={fadeUp}
          className="relative min-h-[520px] max-sm:grid max-sm:min-h-0 max-sm:gap-3.5"
        >
          <motion.img
            animate={slowGlow}
            className={`absolute left-10 top-0 w-1/2 rounded-[10px] object-cover max-sm:static max-sm:w-full ${imageGlow}`}
            src={imageOne}
            alt="Digital member training in the studio"
          />
          <motion.img
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute bottom-0 right-0 w-[56%] rounded-[10px] object-cover max-sm:static max-sm:w-full ${imageGlow}`}
            src={imageTwo}
            alt="Sanctum strength training class"
          />

          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute right-5 top-5 grid min-h-[138px] w-[154px] place-items-center rounded-2xl bg-[#3a3838] p-5 text-center leading-6 text-white max-sm:static max-sm:w-auto ${glowHover}`}
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex"
            >
              <Award className="text-[#d2af69]" size={28} />
            </motion.span>
            <span>10+ Years of Inspiring Wellness</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className={`absolute bottom-5 left-14 flex min-h-[140px] w-40 flex-col justify-center rounded-lg bg-[#d1af70] p-7 text-center text-white max-sm:static max-sm:w-auto ${glowHover}`}
          >
            <strong className="text-4xl leading-none">300+</strong>
            <span className="mt-2.5 leading-6 text-white/90">
              Wellness Sessions Completed
            </span>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <div className={kicker}>
            Sanctum Digital <span className={line} />
          </div>
          <h2 className={title}>
            Wellness, Wherever <span className={goldText}>Life Takes You</span>
          </h2>
          <p className={paragraph}>
            Stay connected to your wellness journey anytime, anywhere with
            Sanctum Digital. Whether you're at home, traveling, or balancing a
            busy schedule, our digital platform gives you instant access to
            expert-led classes, guided meditation, breathwork, and personalized
            wellness programs all from the comfort of your preferred device.
          </p>
          <button
            type="button"
            onClick={() => setIsDialogOpen(true)}
            className={`${goldButton} mt-7`}
          >
            Start Your Membership
          </button>
        </motion.div>
      </motion.div>

      {/* Membership dialog */}
      <AnimatePresence>
        {isDialogOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setIsDialogOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md rounded-2xl border border-[#d0aa61]/30 bg-[#161616] p-8 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsDialogOpen(false)}
                className="absolute right-4 top-4 text-white/60 transition-colors hover:text-white"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              <h2 className="mb-2 text-2xl font-bold uppercase tracking-wide text-white">
                Sanctum Digital Access
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-[#efe8dc]/80">
                Every membership includes full access to Sanctum Digital — train
                from anywhere, on any device.
              </p>

              <ul className="mb-6 grid gap-4">
                {platforms.map(({ icon: Icon, label, detail }) => (
                  <li
                    key={label}
                    className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
                  >
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-[#d2af69]/10 text-[#d2af69]">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[#efe8dc]/70">
                        {detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: hook this up to your membership/checkout endpoint
                  setIsDialogOpen(false);
                }}
              >
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#d0aa61]"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#d0aa61]"
                />
                <button
                  type="submit"
                  className={`${goldButton} justify-center`}
                >
                  Continue to Membership Plans
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SanctumDigital;
