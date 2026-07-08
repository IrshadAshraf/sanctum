export const viewport = { once: true, amount: 0.22 };

export const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const gentleLoop = {
  y: [0, -6, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const slowGlow = {
  boxShadow: [
    "0 0 0 rgba(210,175,105,0)",
    "0 0 22px rgba(210,175,105,0.14)",
    "0 0 0 rgba(210,175,105,0)",
  ],
  transition: {
    duration: 5.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};
