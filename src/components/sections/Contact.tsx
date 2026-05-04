import { motion } from 'framer-motion';
import { siteData } from '../../lib/siteData';
import { buttonHover, buttonTap } from '../../lib/motion';
import { useReducedMotion } from '../../lib/useReducedMotion';
import AnimatedSection from '../ui/AnimatedSection';

export default function Contact() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-neutral-900 py-16 lg:py-20" id="contact">
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: '1280px' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column: Info */}
          <AnimatedSection>
            <div>
              <p
                className="text-label-sm font-semibold uppercase text-yellow-500 mb-3"
                style={{ letterSpacing: '0.08em' }}
              >
                Get a Quote
              </p>
              <h2
                className="text-display-xl font-extrabold text-neutral-50 mb-4"
                style={{ letterSpacing: '-0.025em', lineHeight: 1.1 }}
              >
                Tell us what you need.
              </h2>
              <p className="text-body-lg text-neutral-300 mb-8" style={{ lineHeight: 1.6 }}>
                Fill out the form, give us a call, or walk into our Woodbridge
                shop. We usually respond within a few hours during business days.
              </p>

              {/* Contact details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-neutral-800 flex-shrink-0">
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
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-body-sm text-neutral-400 font-medium mb-1">
                      Phone
                    </p>
                    <a
                      href={`tel:${siteData.phoneTel}`}
                      className="text-body-md text-neutral-50 hover:text-yellow-500 transition-colors"
                      style={{ transitionDuration: 'var(--duration-fast)' }}
                    >
                      {siteData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-neutral-800 flex-shrink-0">
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
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-body-sm text-neutral-400 font-medium mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteData.email}`}
                      className="text-body-md text-neutral-50 hover:text-yellow-500 transition-colors"
                      style={{ transitionDuration: 'var(--duration-fast)' }}
                    >
                      {siteData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-neutral-800 flex-shrink-0">
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
                  </div>
                  <div>
                    <p className="text-body-sm text-neutral-400 font-medium mb-1">
                      Address
                    </p>
                    <p className="text-body-md text-neutral-50">
                      {siteData.address.full}
                    </p>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-center gap-4 pt-4">
                  <a
                    href={siteData.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-400 hover:text-yellow-500 transition-colors text-body-sm"
                    style={{ transitionDuration: 'var(--duration-fast)' }}
                    aria-label="Print Hut on Instagram"
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
                    {siteData.social.instagramHandle}
                  </a>
                  <a
                    href={siteData.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-400 hover:text-yellow-500 transition-colors text-body-sm"
                    style={{ transitionDuration: 'var(--duration-fast)' }}
                    aria-label="Print Hut on Facebook"
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
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    {siteData.social.facebookHandle}
                  </a>
                </div>
              </div>

              {/* Map embed */}
              <div className="mt-8 rounded-lg overflow-hidden border border-neutral-800 aspect-[16/9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.0!2d-79.5541!3d43.7866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f!2s260+Regina+Road+Woodbridge!5e0!3m2!1sen!2sca!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Print Hut location on Google Maps — 260 Regina Road, Unit 16B, Woodbridge, ON"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Right column: Form */}
          <AnimatedSection delay={0.1}>
            <div className="bg-neutral-800 rounded-xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-display-sm font-bold text-neutral-50 mb-2">
                Send Your Quote Request
              </h3>
              <p className="text-body-md text-neutral-400 mb-8">
                Tell us about your project. We will get back to you with pricing
                and turnaround.
              </p>

              <form
                action="https://formsubmit.co/sales@printhut.ca"
                method="POST"
                className="space-y-6"
              >
                {/* Hidden fields for FormSubmit */}
                <input type="hidden" name="_subject" value="New Quote Request from Print Hut Website" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="text"
                  name="_honey"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  aria-hidden="true"
                />

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-label-md text-neutral-200 font-medium mb-2"
                  >
                    Name <span className="text-error-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full h-11 px-3 bg-white text-neutral-900 rounded-md border border-neutral-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-colors text-body-md placeholder:text-neutral-400"
                    style={{ transitionDuration: 'var(--duration-fast)' }}
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-label-md text-neutral-200 font-medium mb-2"
                  >
                    Email <span className="text-error-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full h-11 px-3 bg-white text-neutral-900 rounded-md border border-neutral-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-colors text-body-md placeholder:text-neutral-400"
                    style={{ transitionDuration: 'var(--duration-fast)' }}
                    placeholder="you@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-label-md text-neutral-200 font-medium mb-2"
                  >
                    Phone <span className="text-neutral-500">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full h-11 px-3 bg-white text-neutral-900 rounded-md border border-neutral-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-colors text-body-md placeholder:text-neutral-400"
                    style={{ transitionDuration: 'var(--duration-fast)' }}
                    placeholder="647-xxx-xxxx"
                  />
                </div>

                {/* Product interest */}
                <div>
                  <label
                    htmlFor="product"
                    className="block text-label-md text-neutral-200 font-medium mb-2"
                  >
                    What do you need? <span className="text-error-500">*</span>
                  </label>
                  <select
                    id="product"
                    name="product"
                    required
                    className="w-full h-11 px-3 bg-white text-neutral-900 rounded-md border border-neutral-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-colors text-body-md"
                    style={{ transitionDuration: 'var(--duration-fast)' }}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a product
                    </option>
                    <option value="Clothing (T-Shirts & Hoodies)">
                      Clothing (T-Shirts & Hoodies)
                    </option>
                    <option value="Business Cards">Business Cards</option>
                    <option value="Flyers">Flyers</option>
                    <option value="Table Cloths">Table Cloths</option>
                    <option value="Stickers & Decals">Stickers & Decals</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-label-md text-neutral-200 font-medium mb-2"
                  >
                    Message <span className="text-error-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-3 py-3 bg-white text-neutral-900 rounded-md border border-neutral-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-colors text-body-md placeholder:text-neutral-400 resize-y"
                    style={{
                      transitionDuration: 'var(--duration-fast)',
                      minHeight: '120px',
                    }}
                    placeholder="Tell us about your project — quantity, sizes, design details, timeline, etc."
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="w-full h-12 bg-yellow-500 text-neutral-950 font-semibold text-label-lg rounded-md hover:bg-yellow-400 active:bg-yellow-600 transition-colors cursor-pointer"
                  style={{
                    transitionDuration: 'var(--duration-fast)',
                    transitionTimingFunction: 'var(--ease-snap)',
                  }}
                  whileHover={prefersReduced ? undefined : buttonHover}
                  whileTap={prefersReduced ? undefined : buttonTap}
                >
                  Send Your Quote Request
                </motion.button>

                <p className="text-body-sm text-neutral-500 text-center">
                  We usually respond within a few hours during business days.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
