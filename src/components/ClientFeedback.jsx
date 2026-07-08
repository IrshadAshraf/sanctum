import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Star, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import reviewerOne from "@/assets/client feedback/Reviewer.png";
import reviewerTwo from "@/assets/client feedback/Reviewer (1).png";
import reviewerThree from "@/assets/client feedback/Reviewer (2).png";
import reviewerFour from "@/assets/client feedback/Reviewer (3).png";
import {
  avatarStack,
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

const reviewers = [reviewerOne, reviewerTwo, reviewerThree, reviewerFour];

const testimonials = [
  {
    avatar: reviewerOne,
    name: "Esther Howard",
    role: "Web Designer",
    heading:
      "As a student member, Sanctum helped me find mentors and collaborators",
    quote:
      "Sanctum has been instrumental in connecting me with expert instructors and a community that pushes me to grow. The training quality is absolutely unmatched.",
  },
  {
    avatar: reviewerTwo,
    name: "Marcus Chen",
    role: "Software Engineer",
    heading: "The most disciplined, welcoming studio I've trained in",
    quote:
      "I came in as a complete beginner and within months felt genuinely strong and confident. The instructors notice every detail and push you exactly where you need it.",
  },
  {
    avatar: reviewerThree,
    name: "Amara Okafor",
    role: "Physiotherapist",
    heading: "Sanctum changed how I think about movement entirely",
    quote:
      "The Vaganova-based approach is rigorous but so mindful of the body. As a physiotherapist myself, I'm consistently impressed by how injury-conscious the training is.",
  },
  {
    avatar: reviewerFour,
    name: "Julian Reyes",
    role: "Creative Director",
    heading: "A community that keeps me coming back every week",
    quote:
      "Beyond the technique, it's the community that keeps me here. Every class feels like a reset for my week — calm, focused, and genuinely joyful.",
  },
];

function ClientFeedback() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAllOpen, setIsAllOpen] = useState(false);
  const active = testimonials[activeIndex];

  const goPrev = () =>
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const goNext = () =>
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

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
          className="mb-10 flex items-center justify-between gap-6 max-sm:flex-col max-sm:items-start"
        >
          <div>
            <div className={kicker}>
              <span className={line} /> Our Client Says
            </div>
            <h2 className={title}>
              What People <span className={goldText}>Say About us</span>
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setIsAllOpen(true)}
            className={goldButton}
          >
            All Testimonials
          </button>
        </motion.div>

        <motion.div
          variants={stagger}
          className="grid grid-cols-[0.75fr_1.45fr] items-stretch gap-14 max-lg:grid-cols-1 max-sm:gap-10"
        >
          <motion.aside
            variants={fadeUp}
            animate={slowGlow}
            className={`grid min-h-[360px] place-items-center content-center rounded-[20px] bg-[#1a1b1b] p-9 text-center ${glowHover}`}
          >
            <strong className="text-7xl leading-none text-white">4.9</strong>
            <div className="my-4 flex gap-0.5 text-[#d2af69]">
              {[0, 1, 2, 3, 4].map((star) => (
                <motion.span
                  key={star}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: star * 0.15,
                  }}
                  className="inline-flex"
                >
                  <Star size={22} fill={star < 4 ? "currentColor" : "none"} />
                </motion.span>
              ))}
            </div>
            <span className="text-white">5 Start Rating</span>
            <p className="max-w-[300px] py-5 leading-6 text-[#d4ccc3]">
              Sed ullamcorper tristique nisl at pharetra turpis accumsan et
              etiam eu sollicitudin eros.
            </p>
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`${avatarStack} [&>img]:size-11`}
            >
              {reviewers.map((reviewer) => (
                <img src={reviewer} alt="" key={reviewer} />
              ))}
            </motion.div>
          </motion.aside>

          <motion.article
            variants={fadeUp}
            className={`grid grid-cols-[auto_1fr] gap-6 bg-[#1a1a1a] pt-2 max-sm:grid-cols-1 max-sm:p-7 ${glowHover}`}
          >
            <motion.span
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="font-serif text-[6.8rem] leading-[0.7] text-[#d2af69] max-sm:text-[4.6rem]"
            >
              “
            </motion.span>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="my-5 text-xl font-medium text-white">
                  {active.heading}
                </h3>
                <p className="text-[1.05rem] leading-7 text-[#f2eee8]">
                  {active.quote}
                </p>
                <div className="flex items-center justify-between gap-5 max-sm:flex-col max-sm:items-start">
                  <div className="mt-7 flex items-center gap-4">
                    <img
                      className={`size-14 rounded-full object-cover ${imageGlow}`}
                      src={active.avatar}
                      alt={active.name}
                    />
                    <div>
                      <strong className="block text-2xl text-white">
                        {active.name}
                      </strong>
                      <span className="mt-1 block text-xs text-[#a8a099]">
                        {active.role}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3.5 pr-5 max-sm:pr-0">
                    <button
                      className="grid size-11 place-items-center rounded-full border border-white/70 bg-[#081b2b]/55 text-white transition-colors hover:border-[#d0aa61]"
                      type="button"
                      onClick={goPrev}
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <button
                      className="grid size-11 place-items-center rounded-full border border-white/70 bg-[#081b2b]/55 text-white transition-colors hover:border-[#d0aa61]"
                      type="button"
                      onClick={goNext}
                      aria-label="Next testimonial"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.article>
        </motion.div>
      </motion.div>

      {/* All Testimonials dialog */}
      <AnimatePresence>
        {isAllOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setIsAllOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#d0aa61]/30 bg-[#161616] p-8 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsAllOpen(false)}
                className="absolute right-4 top-4 text-white/60 transition-colors hover:text-white"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              <h2 className="mb-2 text-2xl font-bold uppercase tracking-wide text-white">
                All Testimonials
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-[#efe8dc]/80">
                Real words from Sanctum members around the world.
              </p>

              <ul className="grid gap-4">
                {testimonials.map((testimonial, index) => (
                  <li key={testimonial.name}>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveIndex(index);
                        setIsAllOpen(false);
                      }}
                      className="w-full rounded-xl border border-white/10 bg-white/5 p-5 text-left transition-colors hover:border-[#d0aa61]/50"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <img
                          className="size-11 rounded-full object-cover"
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <div>
                          <strong className="block text-white">
                            {testimonial.name}
                          </strong>
                          <span className="text-xs text-[#a8a099]">
                            {testimonial.role}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-[#d8d2ca]">
                        {testimonial.quote}
                      </p>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ClientFeedback;
