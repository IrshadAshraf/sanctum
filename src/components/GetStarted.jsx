import React, { useState } from "react";
import { ArrowRight, Mail, X, Calendar, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  blackButton,
  container,
  darkPill,
  glowHover,
  mutedButton,
  section,
} from "@/lib/styles";
import { fadeUp, slowGlow, viewport } from "@/lib/motion";

function GetStarted() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isContactSent, setIsContactSent] = useState(false);

  return (
    <div className={section}>
      <style>{`
        @keyframes ocean-wave-a {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-25%) translateY(-4px); }
          100% { transform: translateX(-50%) translateY(0); }
        }
        @keyframes ocean-wave-b {
          0% { transform: translateX(-10%) translateY(0); }
          50% { transform: translateX(-35%) translateY(3px); }
          100% { transform: translateX(-60%) translateY(0); }
        }
        @keyframes ocean-wave-c {
          0% { transform: translateX(-5%) translateY(0); }
          50% { transform: translateX(-30%) translateY(-2px); }
          100% { transform: translateX(-55%) translateY(0); }
        }
        .wave-layer {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 200%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .group:hover .wave-layer-a {
          opacity: 0.35;
          animation: ocean-wave-a 6s ease-in-out infinite;
        }
        .group:hover .wave-layer-b {
          opacity: 0.25;
          animation: ocean-wave-b 8s ease-in-out infinite;
        }
        .group:hover .wave-layer-c {
          opacity: 0.18;
          animation: ocean-wave-c 10s ease-in-out infinite;
        }
      `}</style>

      <div className={container}>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={viewport}
          animate={slowGlow}
          whileHover={{ scale: 1.025 }}
          className={`group relative mx-auto grid w-[96%] overflow-hidden rounded-[32px] bg-[#cfad6f] px-7 py-[clamp(50px,7vw,86px)] text-center text-white max-sm:w-full max-sm:rounded-[20px] ${glowHover}`}
        >
          <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),rgba(255,255,255,0.06),transparent)] opacity-0 group-hover:[animation:sanctum-wave_1.7s_ease-in-out_infinite]" />

          <svg
            className="wave-layer wave-layer-a"
            viewBox="0 0 2880 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(255,255,255,0.5)"
              d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,197.3C840,203,960,181,1080,165.3C1200,149,1320,139,1440,149.3C1560,160,1680,192,1800,197.3C1920,203,2040,181,2160,165.3C2280,149,2400,139,2520,149.3C2640,160,2760,192,2820,208L2880,224L2880,320L0,320Z"
            />
          </svg>
          <svg
            className="wave-layer wave-layer-b"
            viewBox="0 0 2880 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(255,255,255,0.4)"
              d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,208C1200,192,1320,160,1440,154.7C1560,149,1680,171,1800,181.3C1920,192,2040,192,2160,176C2280,160,2400,128,2520,128C2640,128,2760,160,2820,176L2880,192L2880,320L0,320Z"
            />
          </svg>
          <svg
            className="wave-layer wave-layer-c"
            viewBox="0 0 2880 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(255,255,255,0.6)"
              d="M0,256L80,250.7C160,245,320,235,480,224C640,213,800,203,960,213.3C1120,224,1280,256,1440,261.3C1600,267,1760,245,1920,224C2080,203,2240,181,2400,181.3C2560,181,2720,203,2800,213.3L2880,224L2880,320L0,320Z"
            />
          </svg>

          <div className="relative z-10 grid justify-items-center">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`${darkPill} bg-black/90`}
            >
              Get Started Today
            </motion.div>
            <h2 className="mt-9 max-w-[860px] font-sans text-[clamp(2.4rem,5vw,4.8rem)] font-extrabold leading-[1.08] text-white">
              Ready to Begin Your Wellness Journey?
            </h2>
            <p className="mt-5 max-w-[780px] text-lg leading-7">
              Take the first step toward a healthier, stronger, and more
              balanced lifestyle. Join our growing community and experience
              expert-led classes
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className={blackButton}
              >
                Book a class
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
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className={mutedButton}
              >
                <Mail size={16} />
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>

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
                Book A Class
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-[#efe8dc]/80">
                Reserve your spot in one of our classical ballet programs. Fill
                in your details and our team will confirm your booking shortly.
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
                <button type="submit" className={blackButton}>
                  <Calendar size={16} />
                  Confirm Booking
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Sales dialog */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => {
              setIsContactOpen(false);
              setIsContactSent(false);
            }}
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
                onClick={() => {
                  setIsContactOpen(false);
                  setIsContactSent(false);
                }}
                className="absolute right-4 top-4 text-white/60 transition-colors hover:text-white"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              {isContactSent ? (
                <div className="py-6 text-center">
                  <div className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-[#d0aa61]/15 text-[#d0aa61]">
                    <Send size={22} />
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-white">
                    Message Sent
                  </h2>
                  <p className="text-sm leading-relaxed text-[#efe8dc]/80">
                    Thanks for reaching out. Our sales team will get back to you
                    within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsContactOpen(false);
                      setIsContactSent(false);
                    }}
                    className={`${blackButton} mt-6 w-full justify-center`}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="mb-2 text-2xl font-bold uppercase tracking-wide text-white">
                    Contact Sales
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-[#efe8dc]/80">
                    Interested in corporate memberships, partnerships, or bulk
                    bookings? Tell us a bit about what you need and we'll be in
                    touch.
                  </p>

                  <form
                    className="flex flex-col gap-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      // TODO: hook this up to your CRM/contact endpoint (e.g. HubSpot, Salesforce, or a backend API)
                      setIsContactSent(true);
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
                      placeholder="Work email"
                      required
                      className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#d0aa61]"
                    />
                    <input
                      type="text"
                      placeholder="Company name"
                      className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#d0aa61]"
                    />
                    <textarea
                      placeholder="Tell us what you're looking for"
                      required
                      rows={4}
                      className="resize-none rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#d0aa61]"
                    />
                    <button
                      type="submit"
                      className={`${blackButton} justify-center`}
                    >
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GetStarted;
