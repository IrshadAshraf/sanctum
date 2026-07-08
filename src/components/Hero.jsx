import React, { useState } from "react";
import { CirclePlay, MapPin, X, HeartHandshake, Check } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero/Frame 2147231499.png";
import avatarOne from "@/assets/hero/avatar-1.jpg.png";
import avatarTwo from "@/assets/hero/avatar-2.jpg.png";
import avatarFive from "@/assets/hero/avatar-5.jpg.png";
import avatarSix from "@/assets/hero/avatar-6.jpg.png";
import {
  avatarStack,
  container,
  goldButton,
  imageGlow,
  outlineGoldButton,
  pill,
} from "@/lib/styles";
import { fadeIn, fadeUp, stagger } from "@/lib/motion";

const avatars = [avatarOne, avatarTwo, avatarFive, avatarSix];

const donationAmounts = [25, 50, 100, 250];

const programs = [
  {
    name: "Pre-Professional Track",
    description:
      "Intensive Vaganova-based training for dancers pursuing a professional career.",
  },
  {
    name: "Youth & Junior Ballet",
    description:
      "Foundational technique and artistry for young dancers ages 6–14.",
  },
  {
    name: "Adult Open Classes",
    description:
      "Flexible classical ballet classes for adult beginners and returning dancers.",
  },
  {
    name: "Summer Intensive",
    description:
      "A immersive multi-week program with guest faculty and performance opportunities.",
  },
];

function Hero() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(50);

  return (
    <div className="relative flex min-h-[760px] items-center overflow-hidden bg-[#101010] py-[92px] pt-[130px] max-sm:min-h-[720px] max-sm:items-end max-sm:py-[54px]">
      {/* Background image with infinite slow Ken Burns loop */}
      <motion.img
        initial={{ scale: 1.06, opacity: 0.6 }}
        animate={{
          opacity: 1,
          scale: [1.06, 1.12, 1.06],
        }}
        transition={{
          opacity: { duration: 1.3, ease: [0.22, 1, 0.36, 1] },
          scale: {
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        }}
        className="absolute inset-0 h-full w-full object-cover object-center max-sm:object-[62%_center]"
        src={heroImage}
        alt="Sanctum members in a dramatic training studio"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.84)_0%,rgba(0,0,0,0.56)_38%,rgba(0,0,0,0.08)_72%),linear-gradient(0deg,rgba(16,16,16,0.72),transparent_40%)] max-sm:bg-[linear-gradient(0deg,rgba(0,0,0,0.92),rgba(0,0,0,0.2))]" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className={`${container} relative z-10 pt-7`}
      >
        {/* Pill with a subtle repeating pulse glow */}
        <motion.div variants={fadeUp} className={`${pill} relative`}>
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full bg-[#d0aa61]/25 blur-md"
            animate={{ opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="relative z-10 flex items-center gap-1.5">
            <MapPin size={12} />
            New York's Premier Classical Ballet Academy
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="my-7 max-w-[520px] text-[clamp(3rem,6vw,5.5rem)]  font-extrabold uppercase leading-[1.04] tracking-normal text-white max-sm:text-5xl"
        >
          Move.
          <br />
          Breathe.
          <br />
          Transcend.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-[510px] text-[1.06rem] leading-[1.55] text-[#efe8dc]"
        >
          Master the art of classical ballet through world-class Vaganova-based
          training, internationally recognized faculty, and immersive programs.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex gap-4">
          <button
            type="button"
            onClick={() => setIsDonateOpen(true)}
            className={`${goldButton}`}
          >
            <HeartHandshake size={16} />
            Donate Now
          </button>

          <button
            type="button"
            onClick={() => setIsProgramsOpen(true)}
            className={outlineGoldButton}
          >
            <motion.span
              className="inline-flex"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <CirclePlay size={16} />
            </motion.span>
            Explore Programs
          </button>
        </motion.div>

        {/* Avatar stack with a gentle floating loop */}
        <motion.div
          variants={fadeIn}
          className="mt-8 flex items-center gap-3 text-sm text-white"
        >
          <motion.div
            className={avatarStack}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            {avatars.map((avatar) => (
              <img className={imageGlow} src={avatar} alt="" key={avatar} />
            ))}
            <span className="-ml-2.5 grid size-7 place-items-center rounded-full border-2 border-white bg-[#d0aa61] text-[0.65rem] font-extrabold">
              4K
            </span>
          </motion.div>
          <strong>10,000+ providers already Joined</strong>
        </motion.div>
      </motion.div>

      {/* Donate Now dialog */}
      <AnimatePresence>
        {isDonateOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setIsDonateOpen(false)}
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
                onClick={() => setIsDonateOpen(false)}
                className="absolute right-4 top-4 text-white/60 transition-colors hover:text-white"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              <h2 className="mb-2 text-2xl font-bold uppercase tracking-wide text-white">
                Support Sanctum
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-[#efe8dc]/80">
                Your donation helps us provide scholarships and world-class
                training to the next generation of classical dancers.
              </p>

              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: hook this up to your payment/donation endpoint
                  setIsDonateOpen(false);
                }}
              >
                <div className="grid grid-cols-4 gap-2">
                  {donationAmounts.map((amount) => (
                    <button
                      type="button"
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`rounded-lg border px-2 py-3 text-sm font-semibold transition-colors ${
                        selectedAmount === amount
                          ? "border-[#d0aa61] bg-[#d0aa61] text-black"
                          : "border-white/15 bg-white/5 text-white hover:border-[#d0aa61]/60"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

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
                <button type="submit" className={goldButton}>
                  Donate ${selectedAmount}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Explore Programs content dialog */}
      <AnimatePresence>
        {isProgramsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setIsProgramsOpen(false)}
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
                onClick={() => setIsProgramsOpen(false)}
                className="absolute right-4 top-4 text-white/60 transition-colors hover:text-white"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              <h2 className="mb-2 text-2xl font-bold uppercase tracking-wide text-white">
                Our Programs
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-[#efe8dc]/80">
                From first plié to professional stage, Sanctum offers a program
                for every stage of a dancer's journey.
              </p>

              <ul className="flex flex-col gap-4">
                {programs.map((program) => (
                  <li
                    key={program.name}
                    className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
                  >
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#d0aa61] text-black">
                      <Check size={14} />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{program.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[#efe8dc]/75">
                        {program.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <HashLink
                smooth
                to="/#find-class"
                onClick={() => setIsProgramsOpen(false)}
                className={`${goldButton} mt-6 w-full justify-center`}
              >
                View Full Class Schedule
              </HashLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Hero;
