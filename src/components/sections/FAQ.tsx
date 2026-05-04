import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { durations, easings } from '../../lib/motion';
import { useReducedMotion } from '../../lib/useReducedMotion';
import AnimatedSection from '../ui/AnimatedSection';

const faqs = [
  {
    question: 'How much do business cards cost at Print Hut?',
    answer:
      'Print Hut prints standard 3.5" x 2" business cards on quality card stock. Single-sided: 500 for $60, 1,000 for $100. Double-sided: 500 for $80, 1,000 for $120. Bring your design file or we will help set one up.',
  },
  {
    question: 'How much do flyers cost at Print Hut?',
    answer:
      'Flyer pricing for 5.5" x 8.5" starts at 500 for $100, 1,000 for $200, 2,000 for $250, 3,000 for $300, and 5,000 for $350. Larger sizes (8.5" x 11", 11" x 17", 12" x 18") are available — contact us for pricing. Cardstock postcards and regular flyer paper options.',
  },
  {
    question: 'How long does printing take?',
    answer:
      'Standard orders are ready in a few business days. Rush jobs are available — call Print Hut at 647.780.3103 or visit the shop at 260 Regina Road in Woodbridge to discuss your timeline.',
  },
  {
    question: 'Can I bring my own design?',
    answer:
      'Yes. Print Hut accepts design files for all products — t-shirts, business cards, flyers, table cloths, stickers, and decals. If you do not have a design ready, we can help set one up.',
  },
  {
    question: 'Where is Print Hut located?',
    answer:
      'Print Hut is at 260 Regina Road, Unit 16B, Woodbridge, Ontario, L4L 8P8. You can walk in to see samples, drop off files, or pick up your order.',
  },
  {
    question: 'Do you print custom t-shirts and hoodies?',
    answer:
      'Yes. Print Hut prints custom t-shirts and hoodies for teams, events, uniforms, merch, and personal projects. Pricing is quote-based and depends on quantity, number of colors, and garment type. Contact us for a quote.',
  },
  {
    question: 'How much do custom table cloths cost?',
    answer:
      'Custom table cloths designed for standard 6-foot folding tables are $80 for one and $120 for two. Black and white base options available. Great for trade shows, events, and markets.',
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full text-left py-5 flex items-center justify-between gap-4 group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-heading-lg font-semibold text-neutral-900 group-hover:text-yellow-800 transition-colors"
          style={{ transitionDuration: 'var(--duration-fast)' }}>
          {question}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-neutral-500 group-hover:text-yellow-800 transition-transform"
          style={{
            transitionDuration: 'var(--duration-fast)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={prefersReduced ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={prefersReduced ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{
              duration: prefersReduced ? 0 : durations.base,
              ease: easings.smooth,
            }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-body-md text-neutral-600" style={{ lineHeight: 1.6 }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 lg:py-20" id="faq">
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: '800px' }}
      >
        <AnimatedSection className="text-center mb-12">
          <p
            className="text-label-sm font-semibold uppercase text-yellow-800 mb-3"
            style={{ letterSpacing: '0.04em' }}
          >
            Common Questions
          </p>
          <h2
            className="text-display-xl font-extrabold text-neutral-900 mb-4"
            style={{ letterSpacing: '-0.025em', lineHeight: 1.1 }}
          >
            Quick answers.
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="divide-y divide-neutral-200 border-t border-neutral-200">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
