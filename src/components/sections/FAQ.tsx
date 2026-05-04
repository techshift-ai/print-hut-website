import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { durations, easings } from '../../lib/motion';
import { useReducedMotion } from '../../lib/useReducedMotion';
import AnimatedSection from '../ui/AnimatedSection';

const faqs = [
  {
    question: 'What does Print Hut print?',
    answer:
      'Print Hut prints custom t-shirts, hoodies, business cards, flyers, table cloths, stickers, and decals. Whether you need 50 t-shirts for a team event or 5,000 flyers for a promotion, we handle it.',
  },
  {
    question: 'How long does printing take?',
    answer:
      'Standard orders are ready in a few business days. Rush jobs are available — call Print Hut at 647.780.3103 or visit the shop to discuss your timeline.',
  },
  {
    question: 'Can I bring my own design?',
    answer:
      'Yes. Print Hut accepts design files for all products — t-shirts, business cards, flyers, table cloths, stickers, and decals. If you do not have a design ready, we can help set one up.',
  },
  {
    question: 'How do I place an order?',
    answer:
      'You can fill out the quote form on this page, call us at 647.780.3103, email sales@printhut.ca, or walk into our shop. We will get back to you with details and turnaround.',
  },
  {
    question: 'Where is Print Hut located?',
    answer:
      'Print Hut is at 260 Regina Road, Unit 16B, Woodbridge, Ontario, L4L 8P8. You can walk in to see samples, drop off files, or pick up your order.',
  },
  {
    question: 'Do you handle bulk or large orders?',
    answer:
      'Yes. Print Hut handles orders of all sizes — from a single custom table cloth to thousands of flyers or hundreds of t-shirts. Contact us with your quantity and we will provide a quote.',
  },
  {
    question: 'What file formats do you accept?',
    answer:
      'We accept most common design formats including PDF, AI, PSD, PNG, and JPG. If you are not sure about your file, bring it in or send it over — we will let you know if anything needs adjusting.',
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
