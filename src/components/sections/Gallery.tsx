import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { staggerContainer, staggerItem } from '../../lib/motion';
import { useReducedMotion } from '../../lib/useReducedMotion';
import AnimatedSection from '../ui/AnimatedSection';

const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'Custom printed t-shirt by Print Hut' },
  { src: '/images/gallery-2.jpg', alt: 'Print Hut custom apparel showcase' },
  { src: '/images/gallery-3.jpg', alt: 'Branded hoodie printed at Print Hut Woodbridge' },
  { src: '/images/gallery-4.jpg', alt: 'Custom event merchandise by Print Hut' },
  { src: '/images/gallery-5.jpg', alt: 'Print Hut custom printed clothing' },
  { src: '/images/gallery-6.jpg', alt: 'Team uniforms printed by Print Hut' },
  { src: '/images/gallery-7.jpg', alt: 'Custom printed gear from Print Hut' },
  { src: '/images/gallery-8.jpg', alt: 'Print Hut custom apparel for businesses' },
  { src: '/images/business-cards-1.jpg', alt: 'Business cards printed by Print Hut Woodbridge' },
  { src: '/images/flyers-2.jpg', alt: 'Custom flyers and print materials by Print Hut' },
  { src: '/images/tablecloth-1.jpg', alt: 'Custom branded table cloth by Print Hut' },
  { src: '/images/gallery-12.jpg', alt: 'Print Hut custom printing project' },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-neutral-50 py-16 lg:py-20" id="gallery">
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: '1280px' }}
      >
        <AnimatedSection className="max-w-2xl mb-12">
          <p
            className="text-label-sm font-semibold uppercase text-yellow-800 mb-3"
            style={{ letterSpacing: '0.04em' }}
          >
            Our Work
          </p>
          <h2
            className="text-display-xl font-extrabold text-neutral-900 mb-4"
            style={{ letterSpacing: '-0.025em', lineHeight: 1.1 }}
          >
            Printed and ready.
          </h2>
          <p className="text-body-lg text-neutral-600">
            Custom t-shirts, business cards, flyers, table cloths, and more —
            all printed at our Woodbridge shop. Here is a sample of recent
            work.
          </p>
        </AnimatedSection>

        {prefersReduced ? (
          <div
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
          >
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="aspect-square overflow-hidden rounded-md bg-neutral-200"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="400"
                  height="400"
                />
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
          >
            {galleryImages.map((img) => (
              <motion.div
                key={img.src}
                variants={staggerItem}
                className="aspect-square overflow-hidden rounded-md bg-neutral-200 group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform group-hover:scale-[1.03]"
                  style={{
                    transitionDuration: 'var(--duration-base)',
                    transitionTimingFunction: 'var(--ease-smooth)',
                  }}
                  loading="lazy"
                  width="400"
                  height="400"
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Instagram link */}
        <div className="mt-8 text-center">
          <a
            href="https://www.instagram.com/_printhut/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-yellow-800 hover:text-yellow-900 font-medium text-body-md transition-colors"
            style={{ transitionDuration: 'var(--duration-fast)' }}
          >
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
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            See more on Instagram @_printhut
          </a>
        </div>
      </div>
    </section>
  );
}
