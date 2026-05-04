import AnimatedSection from '../ui/AnimatedSection';
import {
  StaggerContainer,
  StaggerItem,
} from '../ui/StaggerContainer';

const differentiators = [
  {
    title: 'Quality you can see.',
    description:
      'Every print is checked before it leaves the shop. T-shirts, business cards, flyers, table cloths, stickers — Print Hut gets the details right so your brand looks sharp.',
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
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
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
      'Come see samples, drop off files, or pick up your order. Print Hut is a real shop with real people — not a portal and a ticket number.',
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
            Why people choose Print Hut.
          </h2>
          <p className="text-body-lg text-neutral-300">
            A print shop that does the work right, does it fast, and treats
            every order like it matters.
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
