import React, { useState } from "react";
import { ArrowRight, Music2, Play, Check } from "lucide-react";
import { FaInstagram, FaYoutube, FaTiktok, FaSpotify } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import { brand, container, glowHover } from "@/lib/styles";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import codesinc from "@/assets/footer/Codesinc.png";

const studioLinks = [
  "Classes",
  "Locations",
  "Memberships",
  "Private Bookings",
  "Frequency Festival",
];
const companyLinks = ["Press", "Academy", "FAQs", "Contact", "Lyrics"];

// Real destinations for each social icon
const socialLinks = [
  { Icon: FaInstagram, href: "https://www.instagram.com/", label: "Instagram" },
  { Icon: FaTiktok, href: "https://www.tiktok.com/", label: "TikTok" },
  { Icon: FaSpotify, href: "https://open.spotify.com/", label: "Spotify" },
  { Icon: FaYoutube, href: "https://www.youtube.com/", label: "YouTube" },
];

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Placeholder submit logic — swap in real API call as needed
    setSubscribed(true);
    setEmail("");

    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="border-t border-white/10 bg-[#121212] py-11 pt-[92px]">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className={`${container} grid grid-cols-[1.35fr_1fr_1fr_1.35fr] gap-[70px] max-lg:grid-cols-2 max-sm:grid-cols-1`}
      >
        <motion.div variants={fadeUp}>
          <HashLink smooth to="/#hero" className={brand}>
            Sanctum
          </HashLink>
          <p className="mt-6 leading-6 text-[#c8c1ba]">
            Global mindful movement. Where body, breath, and spirit converge
            into a single transformative practice.
          </p>
          <div className="mt-8 flex gap-3.5">
            {socialLinks.map(({ Icon, href, label }, index) => (
              <motion.a
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className={`grid size-10 place-items-center rounded-full border border-[#d2af69]/25 bg-[#d2af69]/10 text-[#d2af69] ${glowHover}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                key={label}
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="grid content-start gap-4">
          <h3 className="mb-4 text-base uppercase tracking-[0.28em] text-white">
            Studio
          </h3>
          {studioLinks.map((link) => (
            <HashLink
              className={`text-[#d8d1ca] transition-colors duration-200 hover:text-[#d2af69]`}
              smooth
              to={link === "Memberships" ? "/#memberships" : "/#find-class"}
              key={link}
            >
              {link}
            </HashLink>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="grid content-start gap-4">
          <h3 className="mb-4 text-base uppercase tracking-[0.28em] text-white">
            Company
          </h3>
          {companyLinks.map((link) => (
            <a
              className="text-[#d8d1ca] transition-colors duration-200 hover:text-[#d2af69]"
              href="#footer"
              key={link}
            >
              {link}
            </a>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="grid content-start gap-4">
          <h3 className="mb-4 text-base uppercase tracking-[0.28em] text-white">
            Stay Connected
          </h3>
          <p className="leading-6 text-[#c8c1ba]">
            Join the community. Get first access to new classes, events, and
            retreats.
          </p>
          <form
            onSubmit={handleSubscribe}
            className={`my-2 flex gap-3 rounded-full ${glowHover}`}
          >
            <input
              className="min-h-13 min-w-0 flex-1 rounded-full border border-white/10 bg-[#1e1e1e] px-5 text-white outline-none focus:border-[#d2af69]/50 transition-colors duration-200"
              type="email"
              placeholder="Your email"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="grid size-13 place-items-center rounded-full border-0 bg-[#d2af69] text-black"
              type="submit"
              aria-label="Subscribe"
            >
              <AnimatePresence mode="wait" initial={false}>
                {subscribed ? (
                  <motion.span
                    key="check"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="arrow"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
          <AnimatePresence>
            {subscribed && (
              <motion.span
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="-mt-2 text-sm text-[#d2af69]"
              >
                You're subscribed!
              </motion.span>
            )}
          </AnimatePresence>
          <span className="mt-3 text-sm uppercase tracking-[0.28em] text-white">
            Sanctum Digital App
          </span>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className={`inline-flex w-fit items-center gap-2 rounded-[10px] border border-white/10 px-4 py-2.5 text-white ${glowHover}`}
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Play size={14} />
            Google Play
          </motion.a>
        </motion.div>
      </motion.div>

      <div
        className={`${container} mt-[92px] flex items-center justify-between gap-6 border-t border-white/[0.08] pt-8 text-sm text-[#ddd5cc] max-sm:flex-col max-sm:items-start`}
      >
        <span>© 2024 Sanctum. All rights reserved.</span>

        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          href="https://www.codes-inc.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5"
          aria-label="Designed and hosted by Codesinc"
        >
          <img src={codesinc} alt="Codesinc logo" className="h-8 w-auto" />
        </motion.a>

        <nav className="flex gap-8 max-sm:flex-wrap max-sm:gap-4">
          <a
            className="transition-colors duration-200 hover:text-[#d2af69]"
            href="#footer"
          >
            Privacy Policy
          </a>
          <a
            className="transition-colors duration-200 hover:text-[#d2af69]"
            href="#footer"
          >
            Terms of Service
          </a>
          <a
            className="transition-colors duration-200 hover:text-[#d2af69]"
            href="#footer"
          >
            Cookie Policy
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
