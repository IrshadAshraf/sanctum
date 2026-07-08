import React from "react";
import { motion } from "framer-motion";
import leftImage from "@/assets/about/political candidate shaking hands with diverse group of community members, warm and engaging atmosph.png";
import rightImage from "@/assets/about/modern cityscape aerial view during golden hour.png";
import founderAvatar from "@/assets/about/avatar (1).png";
import { container, glowHover, goldText, imageGlow, kicker, line, paragraph, section, title } from "@/lib/styles";
import { fadeUp, gentleLoop, slowGlow, stagger, viewport } from "@/lib/motion";

function About() {
  return (
    <div className={section}>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className={`${container} relative grid grid-cols-[1.05fr_1.2fr_150px] items-center gap-14 max-lg:grid-cols-1`}
      >
        <motion.div variants={fadeUp} className="grid grid-cols-[1fr_1.24fr] items-end gap-4 max-sm:grid-cols-1">
          <motion.img
            animate={gentleLoop}
            className={`h-[380px] w-full rounded-lg object-cover max-sm:h-[300px] ${imageGlow}`}
            src={leftImage}
            alt="Member relaxing inside a premium studio"
          />
          <motion.img
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            className={`h-[300px] w-full rounded-lg object-cover max-sm:h-[300px] ${imageGlow}`}
            src={rightImage}
            alt="Athlete training with dumbbells"
          />
          <motion.div animate={slowGlow} className={`col-start-2 flex min-h-32 flex-col justify-center rounded-lg bg-[#d1af70] p-7 text-white max-sm:col-auto ${glowHover}`}>
            <strong className="text-4xl leading-none">150+</strong>
            <span className="mt-2.5 leading-6 text-white/90">Mindfulness Sessions Delivered</span>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <div className={kicker}>
            About Us <span className={line} />
          </div>
          <h2 className={title}>
            A Practice <span className={goldText}>Guided with Purpose</span>
          </h2>
          <p className={paragraph}>
            We believe true transformation begins with mindful movement. Every session is
            thoughtfully designed to strengthen the body, calm the mind, and restore inner balance.
            Our immersive experiences combine movement, breath, music, and intention to help you
            reconnect with yourself.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-10 max-sm:grid-cols-1">
            <p className={paragraph}>Whether you're seeking energy, clarity, recovery, or personal growth</p>
            <p className={paragraph}>Every class is an invitation to move with purpose and leave feeling renewed</p>
          </div>
          <div className="mt-7 flex items-center gap-4">
            <img className={`size-14 rounded-full object-cover ${imageGlow}`} src={founderAvatar} alt="Jenil D. William" />
            <div>
              <strong className="block text-lg text-white">Jenil D. William</strong>
              <span className="mt-1 block text-xs font-bold uppercase text-[#d2af69]">Founder</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} animate={slowGlow} className={`relative grid min-h-32 w-[138px] place-items-center bg-[#2a2928] p-3.5 text-center before:absolute before:-bottom-2.5 before:-left-2.5 before:size-[72px] before:border-b-[6px] before:border-l-[6px] before:border-white max-lg:hidden ${glowHover}`}>
          <div>
            <strong className="block text-5xl leading-none text-[#d2af69]">25.</strong>
            <span className="text-xs uppercase leading-5 text-[#d8d0c3]">Years of Experience</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
