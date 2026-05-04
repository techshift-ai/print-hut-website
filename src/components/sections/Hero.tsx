import { motion } from 'framer-motion';
import { heroHeadline, heroSubhead, heroCta, buttonHover, buttonTap } from '../../lib/motion';
import { useReducedMotion } from '../../lib/useReducedMotion';

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const Wrapper = prefersReduced ? 'div' : motion.div;
  const headlineProps = prefersReduced ? {} : { variants: heroHeadline, initial: 'hidden', animate: 'visible' };
  const subheadProps = prefersReduced ? {} : { variants: heroSubhead, initial: 'hidden', animate: 'visible' };
  const ctaProps = prefersReduced ? {} : { variants: heroCta, initial: 'hidden', animate: 'visible' };

  return (
    <section
      className="relative min-h-[90vh] flex items-center bg-neutral-950 overflow-hidden pt-16"
      id="hero"
    >
      {/* Triangle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cpolygon points='40,10 70,60 10,60' fill='%23F4EB09'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/60 to-neutral-950"
        aria-hidden="true"
      />

      <div
        className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
        style={{ maxWidth: '1280px' }}
      >
        <div className="max-w-3xl">
          {/* Overline */}
          <Wrapper {...(prefersReduced ? {} : { variants: heroHeadline, initial: 'hidden', animate: 'visible' })}>
            <p
              className="text-yellow-500 text-label-sm font-semibold uppercase tracking-wider mb-6"
              style={{ letterSpacing: '0.08em' }}
            >
              Custom Printing Done Right
            </p>
          </Wrapper>

          {/* Headline */}
          <Wrapper {...headlineProps}>
            <h1
              className="text-display-2xl font-extrabold text-neutral-50 mb-6"
              style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Your design, printed and ready.
            </h1>
          </Wrapper>

          {/* Subhead */}
          <Wrapper {...subheadProps}>
            <p
              className="text-body-lg text-neutral-300 max-w-2xl mb-10"
              style={{ lineHeight: 1.6 }}
            >
              Custom t-shirts, business cards, flyers, table cloths, stickers,
              and decals — quality prints, fast turnaround, and personal
              service. Walk in or send us your files.
            </p>
          </Wrapper>

          {/* CTAs */}
          <Wrapper {...ctaProps}>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-8 bg-yellow-500 text-neutral-950 font-semibold text-label-lg rounded-md transition-colors hover:bg-yellow-400 active:bg-yellow-600"
                style={{
                  transitionDuration: 'var(--duration-fast)',
                  transitionTimingFunction: 'var(--ease-snap)',
                }}
                whileHover={prefersReduced ? {} : buttonHover}
                whileTap={prefersReduced ? {} : buttonTap}
              >
                Get a Free Quote
              </motion.a>
              <motion.a
                href="#products"
                className="inline-flex items-center justify-center h-12 px-8 bg-neutral-800 text-neutral-50 font-semibold text-label-lg rounded-md transition-colors hover:bg-neutral-700"
                style={{
                  transitionDuration: 'var(--duration-fast)',
                  transitionTimingFunction: 'var(--ease-snap)',
                }}
                whileHover={prefersReduced ? {} : buttonHover}
                whileTap={prefersReduced ? {} : buttonTap}
              >
                See Our Products
              </motion.a>
            </div>
          </Wrapper>

          {/* Trust badges */}
          <Wrapper {...(prefersReduced ? {} : { variants: heroCta, initial: 'hidden', animate: 'visible' })}>
            <div className="mt-12 flex flex-wrap items-center gap-8 text-neutral-400 text-body-sm">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-yellow-500"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Walk-In Shop Open</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-yellow-500"
                >
                  <path d="M12 2v4" />
                  <path d="m16.2 7.8 2.9-2.9" />
                  <path d="M18 12h4" />
                  <path d="m16.2 16.2 2.9 2.9" />
                  <path d="M12 18v4" />
                  <path d="m4.9 19.1 2.9-2.9" />
                  <path d="M2 12h4" />
                  <path d="m4.9 4.9 2.9 2.9" />
                </svg>
                <span>Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-yellow-500"
                >
                  <path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" />
                  <path d="m16 2 6 6" />
                  <path d="M12 16H4" />
                </svg>
                <span>T-Shirts, Cards, Flyers & More</span>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </section>
  );
}
