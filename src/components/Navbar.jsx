import React, { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import { brand, goldButton } from "@/lib/styles";

const navItems = [
  ["Classes", "/#find-class"],
  ["Locations", "/#find-class"],
  ["Membership", "/#memberships"],
  ["Digital", "/#sanctum-digital"],
  ["Experiences", "/#global-residence"],
];

function Navbar() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const openBookingFromMobile = () => {
    closeMobileMenu();
    setIsBookingOpen(true);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -24, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-1/2 top-7 z-30 flex min-h-21 w-[min(1298px,calc(100%_-_56px))] items-center justify-between gap-7 rounded-full border border-white/20 bg-[#1e1e1e]/85 px-11 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-[22px] max-sm:top-3.5 max-sm:min-h-16 max-sm:w-[calc(100%_-_24px)] max-sm:px-5"
      >
        <HashLink
          smooth
          to="/#hero"
          className={brand}
          aria-label="Sanctum home"
        >
          Sanctum
        </HashLink>

        <nav
          className="flex items-center gap-8 text-[0.93rem] text-white max-lg:hidden"
          aria-label="Primary navigation"
        >
          {navItems.map(([label, href]) => (
            <HashLink
              smooth
              to={href}
              className="transition-all duration-200 ease-out hover:scale-105 hover:text-[#d2b06d]"
              key={label}
            >
              {label}
            </HashLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsBookingOpen(true)}
          className={`${goldButton} max-sm:hidden`}
        >
          Book a Class
        </button>

        <button
          className="hidden size-11 place-items-center rounded-full border border-white/15 bg-transparent text-white max-lg:grid"
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu size={20} />
        </button>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 hidden bg-black/70 max-lg:block"
            onClick={closeMobileMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-[min(320px,80%)] flex-col gap-2 bg-[#161616] p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className={brand}>Sanctum</span>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:text-white"
                  aria-label="Close navigation menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav
                className="flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {navItems.map(([label, href]) => (
                  <HashLink
                    smooth
                    to={href}
                    onClick={closeMobileMenu}
                    className="rounded-lg px-3 py-3 text-base text-white transition-colors hover:bg-white/5 hover:text-[#d2b06d]"
                    key={label}
                  >
                    {label}
                  </HashLink>
                ))}
              </nav>

              <button
                type="button"
                onClick={openBookingFromMobile}
                className={`${goldButton} mt-6 w-full justify-center`}
              >
                Book a Class
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                <button type="submit" className={`${goldButton} `}>
                  <Calendar size={16} />
                  Confirm Booking
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
