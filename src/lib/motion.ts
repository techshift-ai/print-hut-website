import type { Transition, Variants } from 'framer-motion';

export const durations = {
  instant: 0,
  instantFeedback: 0.08,
  fast: 0.12,
  base: 0.2,
  slow: 0.32,
  extraSlow: 0.6,
  loading: 0.8,
} as const;

export const easings = {
  snap: [0.2, 0, 0, 1] as [number, number, number, number],
  smooth: [0.4, 0, 0.2, 1] as [number, number, number, number],
  enter: [0, 0, 0.2, 1] as [number, number, number, number],
  exit: [0.4, 0, 1, 1] as [number, number, number, number],
  bounce: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
};

export const transitions = {
  base: { duration: durations.base, ease: easings.smooth } satisfies Transition,
  snap: { duration: durations.fast, ease: easings.snap } satisfies Transition,
  slow: { duration: durations.slow, ease: easings.smooth } satisfies Transition,
  extraSlow: { duration: durations.extraSlow, ease: easings.smooth } satisfies Transition,
  enter: { duration: durations.slow, ease: easings.enter } satisfies Transition,
  exit: { duration: durations.fast, ease: easings.exit } satisfies Transition,
};

/* ── Variants ── */

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transitions.slow },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.base },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: transitions.enter },
};

export const heroHeadline: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.extraSlow, ease: easings.smooth, delay: 0 },
  },
};

export const heroSubhead: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.extraSlow, ease: easings.smooth, delay: 0.12 },
  },
};

export const heroCta: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slow, ease: easings.smooth, delay: 0.24 },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.base,
  },
};

/* ── Button motion ── */
export const buttonHover = {
  scale: 1.02,
  transition: { duration: durations.fast, ease: easings.snap },
};

export const buttonTap = {
  scale: 0.98,
  transition: { duration: durations.instantFeedback, ease: easings.snap },
};
