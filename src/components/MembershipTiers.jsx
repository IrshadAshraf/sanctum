import React, { useState } from "react";
import { CheckCircle2, X, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  container,
  glowHover,
  goldButton,
  goldText,
  kicker,
  line,
  outlineGoldButton,
  title,
} from "@/lib/styles";
import { fadeUp, slowGlow, stagger, viewport } from "@/lib/motion";

const tiers = [
  {
    name: "Essential",
    monthlyPrice: 89,
    yearlyPrice: 76,
    note: "4 classes per month",
    features: [
      "Access to any location",
      "Digital app access",
      "Community access",
      "Guest passes (2/mo)",
    ],
  },
  {
    name: "Ritual",
    monthlyPrice: 159,
    yearlyPrice: 135,
    note: "Unlimited classes",
    features: [
      "All global locations",
      "Full digital library",
      "Priority class booking",
      "Frequency Festival VIP",
    ],
    featured: true,
  },
  {
    name: "Transcend",
    monthlyPrice: 289,
    yearlyPrice: 245,
    note: "Everything, elevated",
    features: [
      "Everything in Ritual",
      "Private 1:1 sessions",
      "Retreat event access",
      "Dedicated concierge",
    ],
  },
];

function MembershipTiers() {
  const [billing, setBilling] = useState("monthly");
  const [selectedTier, setSelectedTier] = useState(null);

  return (
    <div className="bg-[radial-gradient(circle_at_50%_28%,rgba(171,128,58,0.12),transparent_34rem),#101010] py-[92px] max-sm:py-[68px]">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className={container}
      >
        <motion.div variants={fadeUp} className="text-center">
          <div className={`${kicker} justify-center`}>
            <span className={line} />
            Membership Tiers
            <span className={line} />
          </div>
          <h2 className={title}>
            Choose Your <span className={goldText}>Rhythm</span>
          </h2>

          {/* Billing toggle */}
          <div className="mx-auto mt-8 flex w-fit items-center gap-1 rounded-full border border-white/10 bg-[#181818] p-1">
            {["monthly", "yearly"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setBilling(option)}
                className={`relative rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors ${
                  billing === option
                    ? "text-black"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {billing === option && (
                  <motion.span
                    layoutId="billing-pill"
                    className="absolute inset-0 rounded-full bg-[#d2af69]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">
                  {option}
                  {option === "yearly" && (
                    <span className="ml-1.5 text-[0.65rem] text-black/70">
                      Save 15%
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          className="mt-16 grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1"
        >
          {tiers.map((tier) => {
            const price =
              billing === "monthly" ? tier.monthlyPrice : tier.yearlyPrice;
            return (
              <motion.article
                variants={fadeUp}
                animate={tier.featured ? slowGlow : undefined}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`relative flex min-h-[520px] flex-col rounded-[20px] border p-11 max-sm:min-h-0 max-sm:p-7 ${
                  tier.featured
                    ? "border-[#d2af69]/60 bg-[linear-gradient(135deg,rgba(49,40,26,0.8),#181818_65%)]"
                    : "border-white/10 bg-[#181818]"
                } ${glowHover}`}
                key={tier.name}
              >
                {tier.featured && (
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[#d1af70] px-6 py-2 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-white"
                  >
                    <motion.span
                      animate={{ rotate: [0, 20, -20, 0] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="inline-flex"
                    >
                      <Sparkles size={12} />
                    </motion.span>
                    Most Popular
                  </motion.div>
                )}
                <span className="text-xs font-bold uppercase tracking-[0.36em] text-[#d2af69]">
                  {tier.name}
                </span>

                <div className="mt-12 flex items-baseline gap-1 font-serif text-6xl leading-none text-white">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${tier.name}-${billing}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      £{price}
                    </motion.span>
                  </AnimatePresence>
                  <small className="font-sans text-sm text-[#a79f96]">
                    /mo
                  </small>
                </div>
                <p className="mt-2 text-[#8f8982]">{tier.note}</p>

                <ul className="mt-8 grid flex-1 gap-4 border-t border-white/[0.08] pt-8">
                  {tier.features.map((feature) => (
                    <li
                      className="flex items-center gap-3 text-[#d8d2ca]"
                      key={feature}
                    >
                      <CheckCircle2 className="text-[#d2af69]" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => setSelectedTier(tier.name)}
                  className={`${tier.featured ? goldButton : outlineGoldButton} w-full justify-center`}
                >
                  {tier.featured ? "Join Ritual" : "Get Started"}
                </button>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Checkout dialog */}
      <AnimatePresence>
        {selectedTier && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setSelectedTier(null)}
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
                onClick={() => setSelectedTier(null)}
                className="absolute right-4 top-4 text-white/60 transition-colors hover:text-white"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              {(() => {
                const tier = tiers.find((t) => t.name === selectedTier);
                const price =
                  billing === "monthly" ? tier.monthlyPrice : tier.yearlyPrice;
                return (
                  <>
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#d2af69]">
                      {tier.name}
                    </span>
                    <h2 className="mb-2 mt-2 text-2xl font-bold uppercase tracking-wide text-white">
                      Confirm Your Membership
                    </h2>
                    <p className="mb-6 text-sm leading-relaxed text-[#efe8dc]/80">
                      £{price}/mo, billed {billing}. You can change or cancel
                      your plan anytime.
                    </p>

                    <form
                      className="flex flex-col gap-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                        // TODO: hook this up to your subscription/payment endpoint
                        setSelectedTier(null);
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
                        Confirm {tier.name} - £{price}/mo
                      </button>
                    </form>
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

export default MembershipTiers;
