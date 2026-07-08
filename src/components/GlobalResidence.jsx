import React, { useState } from "react";
import { ArrowRight, Mountain, Waves, X, MapPin, Calendar } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import retreatImage from "@/assets/global residence/luxury wellness retreat in nature, Bali or Ibiza landscape, sunset golden light, people practicing y.png";
import {
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

const events = [
  {
    icon: Mountain,
    title: "Ibiza Summer Residency",
    meta: "August 2024 · 7 nights",
    spots: "8 spots",
    location: "Ibiza, Spain",
    description:
      "A 7-night immersive residency in the hills of Ibiza, blending daily movement practice with sound healing, breathwork, and communal meals under the sun.",
    highlights: [
      "Daily sunrise and sunset practice",
      "Private villa accommodation",
      "All meals and excursions included",
    ],
  },
  {
    icon: Waves,
    title: "Bali Sacred Retreat",
    meta: "September 2024 · 10 nights",
    spots: "4 spots",
    location: "Ubud, Bali",
    description:
      "10 nights deep in the jungles of Ubud, designed around ancient ritual, silence, and a full realignment of body, mind, and spirit.",
    highlights: [
      "Guided temple ceremonies",
      "Daily yoga and meditation",
      "Small group of 12 max",
    ],
  },
];

function GlobalResidence() {
  // null = closed, "list" = browse-all dialog, number = specific event details
  const [dialogView, setDialogView] = useState(null);

  const closeDialog = () => setDialogView(null);
  const openEvent = (index) => setDialogView(index);
  const backToList = () => setDialogView("list");

  return (
    <div className="bg-[#141414] py-[92px] max-sm:py-[68px]">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className={`${container} grid grid-cols-[0.86fr_1.14fr] items-center gap-[72px] max-lg:grid-cols-1 max-sm:gap-10`}
      >
        <motion.div variants={fadeUp}>
          <div className={kicker}>
            <span className={line} /> Global Residences
          </div>
          <h2 className={title}>
            Events &amp; <span className={goldText}>Retreats</span>
          </h2>
          <p className={paragraph}>
            Explore the world with us through transformative residencies and
            special events, immersive journeys where movement, community,
            nature, and ritual realign body, mind, and spirit.
          </p>
          <div className="my-14 grid gap-4">
            {events.map((event, index) => {
              const { icon: Icon, title: eventTitle, meta, spots } = event;
              return (
                <button
                  type="button"
                  onClick={() => openEvent(index)}
                  className={`grid grid-cols-[60px_1fr_auto] items-center gap-5 rounded-xl border border-white/10 bg-[#1a1a1a] p-5 text-left max-sm:grid-cols-[52px_1fr] ${glowHover}`}
                  key={eventTitle}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                    className="grid size-13 place-items-center rounded-xl border border-[#d2af69]/35 bg-[#d2af69]/10 text-[#d2af69]"
                  >
                    <Icon size={24} />
                  </motion.div>
                  <div>
                    <strong className="block text-white">{eventTitle}</strong>
                    <span className="mt-1 block text-[#a8a099]">{meta}</span>
                  </div>
                  <motion.small
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    className="text-[#d2af69] max-sm:col-start-2"
                  >
                    {spots}
                  </motion.small>
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setDialogView("list")}
            className={goldButton}
          >
            Events &amp; Retreats
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex"
            >
              <ArrowRight size={16} />
            </motion.span>
          </button>
        </motion.div>
        <motion.div variants={fadeUp} className="relative">
          <motion.img
            animate={slowGlow}
            className={`min-h-[560px] w-full object-cover max-sm:min-h-[360px] ${imageGlow}`}
            src={retreatImage}
            alt="Wellness retreat at sunset beside an infinity pool"
          />
        </motion.div>
      </motion.div>

      {/* Dialog: browse-all list OR specific event details */}
      <AnimatePresence>
        {dialogView !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={closeDialog}
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
                onClick={closeDialog}
                className="absolute right-4 top-4 text-white/60 transition-colors hover:text-white"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              {dialogView === "list" ? (
                <>
                  <h2 className="mb-2 text-2xl font-bold text-white">
                    All Events &amp; Retreats
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-[#efe8dc]/80">
                    Choose a residency to see full details and reserve your
                    spot.
                  </p>

                  <ul className="grid gap-4">
                    {events.map((event, index) => {
                      const Icon = event.icon;
                      return (
                        <li key={event.title}>
                          <button
                            type="button"
                            onClick={() => openEvent(index)}
                            className="grid w-full grid-cols-[52px_1fr_auto] items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition-colors hover:border-[#d0aa61]/50"
                          >
                            <span className="grid size-11 place-items-center rounded-lg bg-[#d2af69]/10 text-[#d2af69]">
                              <Icon size={20} />
                            </span>
                            <div>
                              <strong className="block text-white">
                                {event.title}
                              </strong>
                              <span className="mt-1 block text-sm text-[#a8a099]">
                                {event.meta}
                              </span>
                            </div>
                            <span className="text-sm text-[#d2af69]">
                              {event.spots}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : (
                (() => {
                  const event = events[dialogView];
                  const Icon = event.icon;
                  return (
                    <>
                      <div className="mb-5 grid size-14 place-items-center rounded-xl border border-[#d2af69]/35 bg-[#d2af69]/10 text-[#d2af69]">
                        <Icon size={26} />
                      </div>
                      <h2 className="mb-2 text-2xl font-bold text-white">
                        {event.title}
                      </h2>
                      <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-[#a8a099]">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-[#d2af69]" />
                          {event.meta}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-[#d2af69]" />
                          {event.location}
                        </span>
                        <span className="text-[#d2af69]">
                          {event.spots} remaining
                        </span>
                      </div>

                      <p className="mb-6 text-sm leading-relaxed text-[#efe8dc]/80">
                        {event.description}
                      </p>

                      <ul className="mb-7 grid gap-3">
                        {event.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3 text-sm text-[#d8d2ca]"
                          >
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#d2af69]" />
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <form
                        className="flex flex-col gap-4"
                        onSubmit={(e) => {
                          e.preventDefault();
                          // TODO: hook this up to your reservation/booking endpoint
                          closeDialog();
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
                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={backToList}
                            className="flex-1 rounded-full border border-white/15 py-3 text-sm font-semibold text-white transition-colors hover:border-[#d0aa61]/60"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            className={`${goldButton} flex-1 justify-center`}
                          >
                            Reserve My Spot
                          </button>
                        </div>
                      </form>
                    </>
                  );
                })()
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GlobalResidence;
