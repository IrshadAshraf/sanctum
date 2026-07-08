import React, { useEffect, useState } from "react";
import { CheckCircle, X, Sparkles } from "lucide-react";
import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useInView,
} from "framer-motion";
import membershipImage from "@/assets/memberships/group of diverse young professionals working together around a laptop in a bright modern office, col.png";
import avatarOne from "@/assets/memberships/avatar-5.jpg (1).png";
import avatarTwo from "@/assets/memberships/avatar-6.jpg (1).png";
import avatarThree from "@/assets/memberships/avatar-7.jpg.png";
import {
  avatarStack,
  container,
  glowHover,
  goldButton,
  goldText,
  imageGlow,
  kicker,
  line,
  paragraph,
  title,
} from "@/lib/styles";
import { fadeUp, slowGlow, stagger, viewport } from "@/lib/motion";
import AnimatePresenceWrapper from "./AnimatePresenceWrapper";

const benefits = [
  "Experience world-class wellness programs tailored to your journey.",
  "Purposefully designed to strengthen the body and calm the mind.",
  "Premium facilities, expert instructors, and a welcoming community.",
];

const stats = [
  { value: 485, suffix: "+", label: "Travel Companies" },
  { value: 3400, suffix: "+", label: "Quotations Managed" },
  { value: 160, suffix: "M+", label: "Transactions yearly" },
];

const tiers = [
  {
    name: "Essential",
    price: "$49/mo",
    perks: [
      "4 classes per month",
      "Access to 1 studio location",
      "Community events",
    ],
  },
  {
    name: "Signature",
    price: "$99/mo",
    perks: [
      "Unlimited classes",
      "Access to all studio locations",
      "Priority booking",
    ],
  },
  {
    name: "Elite",
    price: "$189/mo",
    perks: [
      "Unlimited classes",
      "1-on-1 coaching sessions",
      "Global studio access",
    ],
  },
];

function StatCard({ value, suffix, label }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString(),
  );
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      });
      const unsubscribe = rounded.on("change", (v) => setDisplay(v));
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
    return undefined;
  }, [isInView, value, count, rounded]);

  return (
    <div
      ref={ref}
      className={`rounded-xl bg-[#292929] p-5 text-white ${glowHover}`}
    >
      <strong className="block text-3xl leading-none">
        {display}
        {suffix}
      </strong>
      <span className="text-sm">{label}</span>
    </div>
  );
}

function Memberships() {
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("Signature");

  return (
    <div className="bg-[#121212] py-[92px] max-sm:py-[68px]">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className={`${container} grid grid-cols-[1fr_0.9fr] items-start gap-16 max-lg:grid-cols-1`}
      >
        <motion.div variants={fadeUp}>
          <div className={kicker}>
            Memberships <span className={line} />
          </div>
          <h2 className={title}>
            Built For The Future Of{" "}
            <span className={goldText}>Travel Operations</span>
          </h2>
          <p className={paragraph}>
            Our memberships are designed to make wellness a part of your
            everyday life. Enjoy flexible access to expert-led classes,
            personalized guidance, and a supportive community that helps you
            stay motivated, build healthy habits, and achieve lasting results.
          </p>
          <ul className="my-7 grid gap-4">
            {benefits.map((benefit, index) => (
              <li className="flex items-center gap-3 text-white" key={benefit}>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className="inline-flex shrink-0"
                >
                  <CheckCircle
                    className="fill-[#ffe8bd] text-[#ffe8bd]"
                    size={18}
                  />
                </motion.span>
                {benefit}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setIsMembershipOpen(true)}
            className={goldButton}
          >
            <motion.span
              className="inline-flex"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={16} />
            </motion.span>
            Start Your Membership
          </button>
        </motion.div>

        <motion.div variants={fadeUp} className="relative">
          <motion.img
            animate={slowGlow}
            className={`aspect-square w-full rounded-[28px] object-cover ${imageGlow}`}
            src={membershipImage}
            alt="Member strength training in a Sanctum studio"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute -bottom-8 -right-8 w-[min(300px,72%)] rounded-lg bg-[#1f1f1f] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.28)] max-lg:right-5 max-sm:static max-sm:mt-5 max-sm:w-auto ${glowHover}`}
          >
            <strong className="text-white">Trusted by 2M+ Customers</strong>
            <p className="my-3 text-sm leading-6 text-[#eeeeee]">
              Join over{" "}
              <span className="font-extrabold text-[#ff9f21]">+16,500</span> new
              customers who choose our product every day!
            </p>
            <div className="flex items-center gap-2.5">
              <div className={avatarStack}>
                {[avatarOne, avatarTwo, avatarThree].map((avatar) => (
                  <img src={avatar} alt="" key={avatar} />
                ))}
              </div>
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="font-extrabold text-[#ff9f21]"
              >
                ★★★★★
              </motion.span>
              <small className="text-[0.68rem] text-[#d7d0c8]">
                34k+ Reviews
              </small>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="col-start-1 -mt-2 grid grid-cols-3 gap-4 max-lg:col-auto max-sm:grid-cols-1"
        >
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Membership dialog */}
      <AnimatePresenceWrapper
        open={isMembershipOpen}
        onClose={() => setIsMembershipOpen(false)}
      >
        <button
          type="button"
          onClick={() => setIsMembershipOpen(false)}
          className="absolute right-4 top-4 text-white/60 transition-colors hover:text-white"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <h2 className="mb-2 text-2xl font-bold uppercase tracking-wide text-white">
          Choose Your Membership
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-[#efe8dc]/80">
          Pick the plan that fits your practice. You can upgrade or change tiers
          anytime.
        </p>

        <div className="grid gap-4">
          {tiers.map((tier) => {
            const isSelected = selectedTier === tier.name;
            return (
              <button
                type="button"
                key={tier.name}
                onClick={() => setSelectedTier(tier.name)}
                className={`rounded-lg border p-5 text-left transition-colors ${
                  isSelected
                    ? "border-[#d0aa61] bg-[#d0aa61]/10"
                    : "border-white/15 bg-white/5 hover:border-[#d0aa61]/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <strong className="text-white">{tier.name}</strong>
                  <span className="text-[#d0aa61]">{tier.price}</span>
                </div>
                <ul className="mt-3 grid gap-1.5">
                  {tier.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-center gap-2 text-sm text-[#efe8dc]/75"
                    >
                      <CheckCircle
                        size={14}
                        className="shrink-0 text-[#d0aa61]"
                      />
                      {perk}
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setIsMembershipOpen(false)}
          className={`${goldButton} mt-6 w-full justify-center`}
        >
          Continue with {selectedTier}
        </button>
      </AnimatePresenceWrapper>
    </div>
  );
}

export default Memberships;
