import AnimatedSection from '../ui/AnimatedSection';
import {
  StaggerContainer,
  StaggerItem,
} from '../ui/StaggerContainer';

const differentiators = [
  {
    title: 'Prices on the page.',
    description:
      'Most print shops make you fill out a quote form for everything. Print Hut publishes prices for standard products so you know what you are paying before you pick up the phone.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-yellow-500"
      >
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Fast turnaround.',
    description:
      'Standard orders are ready in days, not weeks. Need it sooner? Talk to us — rush jobs are part of the job.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-yellow-500"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'A shop you can walk into.',
    description:
      '260 Regina Road, Woodbridge. Come see samples, drop off files, or pick up your order. Print Hut is a real shop with real people — not a portal and a ticket number.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
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
    ),
  },
];

export default function WhyPrintHut() {
  return (
    <section className="bg-neutral-900 py-16 lg:py-20" id="why">
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: '1280px' }}
      >
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p
            className="text-label-sm font-semibold uppercase text-yellow-500 mb-3"
            style={{ letterSpacing: '0.08em' }}
          >
            Why Print Hut
          </p>
          <h2
            className="text-display-xl font-extrabold text-neutral-50 mb-4"
            style={{ letterSpacing: '-0.025em', lineHeight: 1.1 }}
          >
            Real reasons to pick this shop.
          </h2>
          <p className="text-body-lg text-neutral-300">
            Not marketing fluff. Three things that actually set Print Hut apart
            from the franchise down the road or the online service you tried
            last time.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {differentiators.map((item) => (
            <StaggerItem key={item.title}>
              <div className="text-center md:text-left">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-neutral-800">
                  {item.icon}
                </div>
                <h3 className="text-display-sm font-bold text-neutral-50 mb-3">
                  {item.title}
                </h3>
                <p className="text-body-md text-neutral-300" style={{ lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
