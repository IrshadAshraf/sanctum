import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar } from "lucide-react";
import mainStudio from "@/assets/find class/luxury Shoreditch London wellness studio interior, dark dramatic moody atmosphere, exposed brick, go.png";
import ritualImage from "@/assets/find class/dark premium yoga studio class in session, golden lighting, people meditating, luxury wellness cente.png";
import {
  container,
  glowHover,
  goldButton,
  goldText,
  imageGlow,
  kicker,
  line,
  section,
  title,
} from "@/lib/styles";
import { fadeUp, slowGlow, stagger, viewport } from "@/lib/motion";

const cities = [
  {
    code: "LDN",
    city: "London",
    area: "London - Shoreditch",
    name: "The Original Studio",
    description:
      "Our flagship London studio, where it all began. Immersive, intimate, transformative.",
    ritualTime: "06:30 - 8 spots left",
    schedule: [
      ["Dawn Flow", "06:00"],
      ["Power & Breathe", "09:30"],
      ["Evening Ritual", "19:00 *"],
    ],
  },
  {
    code: "AMS",
    city: "Amsterdam",
    area: "Amsterdam - Jordaan",
    name: "The Canal House Studio",
    description:
      "A serene canal-side retreat blending classical technique with old-world charm.",
    ritualTime: "07:00 - 5 spots left",
    schedule: [
      ["Morning Flow", "07:00"],
      ["Midday Reset", "12:30"],
      ["Sunset Ritual", "18:30 *"],
    ],
  },
  {
    code: "DXB",
    city: "Dubai",
    area: "Dubai - DIFC",
    name: "The Skyline Studio",
    description:
      "Floor-to-ceiling views over the city skyline, paired with world-class faculty.",
    ritualTime: "06:00 - 10 spots left",
    schedule: [
      ["Sunrise Flow", "06:00"],
      ["Power & Breathe", "10:00"],
      ["Evening Ritual", "20:00 *"],
    ],
  },
  {
    code: "STO",
    city: "Stockholm",
    area: "Stockholm - Södermalm",
    name: "The Nordic Studio",
    description:
      "Minimalist Scandinavian design meets rigorous Vaganova-based training.",
    ritualTime: "07:30 - 6 spots left",
    schedule: [
      ["Dawn Flow", "07:30"],
      ["Power & Breathe", "11:00"],
      ["Evening Ritual", "19:30 *"],
    ],
  },
  {
    code: "NYC",
    city: "New York",
    area: "New York - Chelsea",
    name: "The Chelsea Studio",
    description:
      "Our largest studio, set in the heart of Chelsea's arts district.",
    ritualTime: "06:30 - 12 spots left",
    schedule: [
      ["Dawn Flow", "06:30"],
      ["Power & Breathe", "09:00"],
      ["Evening Ritual", "19:00 *"],
    ],
  },
];

function FindClass() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const active = cities[activeIndex];

  return (
    <div className={section}>
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
            Our Studio
            <span className={line} />
          </div>
          <h2 className={title}>
            Find a Class <span className={goldText}>Near You</span>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative mb-12 flex justify-center gap-[clamp(22px,6vw,84px)]  border-b border-white/10 py-6 max-sm:justify-start"
        >
          {cities.map((cityItem, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                className="relative uppercase text-white/40 transition-colors duration-300"
                type="button"
                key={cityItem.code}
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
              >
                <motion.strong
                  animate={{
                    color: isActive ? "#d2af69" : "rgba(255,255,255,0.4)",
                    scale: isActive ? 1.06 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="block font-serif text-[clamp(1.8rem,4vw,3rem)] font-normal"
                >
                  {cityItem.code}
                </motion.strong>
                <span
                  className={`mt-2 block text-[0.62rem] tracking-[0.18em] ${isActive ? "text-[#d2af69]" : ""}`}
                >
                  {cityItem.city}
                </span>

                {isActive && (
                  <motion.span
                    layoutId="active-city-underline"
                    className="absolute -bottom-6 left-0 right-0 h-[2px] bg-[#d2af69]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.code}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-[2fr_0.98fr] gap-6 max-sm:grid-cols-1"
          >
            <motion.article
              animate={slowGlow}
              className={`relative min-h-[330px] overflow-hidden rounded-[10px] bg-[#191919] ${glowHover}`}
            >
              <img
                className={`absolute inset-0 h-full w-full object-cover ${imageGlow}`}
                src={mainStudio}
                alt={active.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute inset-x-7 bottom-7 z-10">
                <span className="text-[0.64rem] uppercase tracking-[0.18em] text-[#d2af69]">
                  {active.area}
                </span>
                <h3 className="my-2.5 font-serif text-3xl font-normal text-white">
                  {active.name}
                </h3>
                <p className="max-w-[500px] text-[#c9c3bc]">
                  {active.description}
                </p>
              </div>
            </motion.article>

            <aside className="grid gap-5">
              <article
                className={`relative min-h-[235px] overflow-hidden rounded-[10px] bg-[#191919] ${glowHover}`}
              >
                <img
                  className={`absolute inset-0 h-full w-full object-cover ${imageGlow}`}
                  src={ritualImage}
                  alt="Morning Ritual class"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="absolute inset-x-7 bottom-7 z-10">
                  <h3 className="mb-1 text-base font-semibold text-white">
                    Morning Ritual
                  </h3>
                  <p className="text-[#c9c3bc]">{active.ritualTime}</p>
                </div>
              </article>
              <div
                className={`rounded-[10px] border border-white/10 bg-[#1b1b1b] p-7 ${glowHover}`}
              >
                <span className="text-[0.64rem] uppercase tracking-[0.18em] text-[#d2af69]">
                  Today's Schedule
                </span>
                <dl className="my-5 grid gap-4">
                  {active.schedule.map(([label, time]) => (
                    <div
                      className="flex justify-between gap-5 text-[#eee7db]"
                      key={label}
                    >
                      <dt>{label}</dt>
                      <dd className="m-0 text-[#d2af69]">{time}</dd>
                    </div>
                  ))}
                </dl>
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className={`${goldButton} w-full`}
                >
                  Book Now
                </button>
              </div>
            </aside>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Booking dialog */}
      <AnimatePresence>
        {isBookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setIsBookingOpen(false)}
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
                onClick={() => setIsBookingOpen(false)}
                className="absolute right-4 top-4 text-white/60 transition-colors hover:text-white"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              <h2 className="mb-2 text-2xl font-bold uppercase tracking-wide text-white">
                Book A Class - {active.city}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-[#efe8dc]/80">
                Reserve your spot at our {active.name}. Fill in your details and
                our team will confirm your booking shortly.
              </p>

              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: hook this up to your booking endpoint
                  setIsBookingOpen(false);
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
                <input
                  type="date"
                  required
                  className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#d0aa61]"
                />
                <button type="submit" className={goldButton}>
                  <Calendar size={16} />
                  Confirm Booking
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FindClass;
