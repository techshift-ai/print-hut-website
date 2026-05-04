import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { products } from '../../lib/siteData';
import { staggerContainer, staggerItem, buttonHover, buttonTap } from '../../lib/motion';
import { useReducedMotion } from '../../lib/useReducedMotion';
import AnimatedSection from '../ui/AnimatedSection';

function PricingTable({
  table,
  type,
}: {
  table: readonly { qty: string; single?: string; double?: string; price?: string }[];
  type: 'business-cards' | 'flyers' | 'table-cloths';
}) {
  if (type === 'business-cards') {
    return (
      <div className="mt-4 overflow-hidden rounded-md border border-neutral-200">
        <table className="w-full text-body-sm">
          <thead>
            <tr className="bg-yellow-50">
              <th className="text-left px-3 py-2 font-semibold text-neutral-900">
                Qty
              </th>
              <th className="text-left px-3 py-2 font-semibold text-neutral-900">
                Single-Sided
              </th>
              <th className="text-left px-3 py-2 font-semibold text-neutral-900">
                Double-Sided
              </th>
            </tr>
          </thead>
          <tbody>
            {table.map((row) => (
              <tr key={row.qty} className="border-t border-neutral-100">
                <td className="px-3 py-2 text-neutral-600">{row.qty}</td>
                <td className="px-3 py-2 font-bold text-neutral-900">
                  {row.single}
                </td>
                <td className="px-3 py-2 font-bold text-neutral-900">
                  {row.double}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="mt-4 overflow-hidden rounded-md border border-neutral-200">
      <table className="w-full text-body-sm">
        <thead>
          <tr className="bg-yellow-50">
            <th className="text-left px-3 py-2 font-semibold text-neutral-900">
              Qty
            </th>
            <th className="text-left px-3 py-2 font-semibold text-neutral-900">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {table.map((row) => (
            <tr key={row.qty} className="border-t border-neutral-100">
              <td className="px-3 py-2 text-neutral-600">{row.qty}</td>
              <td className="px-3 py-2 font-bold text-neutral-900">
                {row.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const prefersReduced = useReducedMotion();

  const cardContent = (
    <div className="bg-white rounded-lg overflow-hidden border border-neutral-200 h-full flex flex-col shadow-md hover:shadow-lg transition-shadow"
      style={{ transitionDuration: 'var(--duration-base)', transitionTimingFunction: 'var(--ease-smooth)' }}>
      {/* Product image */}
      <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
        <img
          src={product.image}
          alt={`${product.name} — custom printing by Print Hut in Woodbridge, Ontario`}
          className="w-full h-full object-cover"
          loading={index < 2 ? 'eager' : 'lazy'}
          width="600"
          height="450"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Overline */}
        <p
          className="text-label-sm font-semibold uppercase text-neutral-500 mb-1"
          style={{ letterSpacing: '0.04em' }}
        >
          {product.subtitle}
        </p>

        {/* Title */}
        <h3 className="text-display-sm font-bold text-neutral-900 mb-3">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-body-md text-neutral-600 mb-4 flex-1">
          {product.description}
        </p>

        {/* Pricing */}
        <p className="text-price-sm font-bold text-neutral-900 mb-2">
          {product.pricing}
        </p>

        {/* Pricing table if available */}
        {'pricingTable' in product && product.pricingTable && (
          <PricingTable
            table={product.pricingTable}
            type={product.id as 'business-cards' | 'flyers' | 'table-cloths'}
          />
        )}

        {/* CTA */}
        <div className="mt-6">
          <motion.a
            href={product.ctaHref}
            className="inline-flex items-center justify-center h-11 px-6 bg-yellow-500 text-neutral-950 font-medium text-label-md rounded-md hover:bg-yellow-400 active:bg-yellow-600 transition-colors w-full"
            style={{
              transitionDuration: 'var(--duration-fast)',
              transitionTimingFunction: 'var(--ease-snap)',
            }}
            whileHover={prefersReduced ? undefined : buttonHover}
            whileTap={prefersReduced ? undefined : buttonTap}
          >
            {product.cta}
          </motion.a>
        </div>
      </div>
    </div>
  );

  if (prefersReduced) {
    return cardContent;
  }

  return (
    <motion.div variants={staggerItem}>
      {cardContent}
    </motion.div>
  );
}

export default function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-neutral-50 py-16 lg:py-20" id="products">
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: '1280px' }}
      >
        <AnimatedSection className="max-w-2xl mb-12">
          <p
            className="text-label-sm font-semibold uppercase text-yellow-800 mb-3"
            style={{ letterSpacing: '0.04em' }}
          >
            Products & Pricing
          </p>
          <h2
            className="text-display-xl font-extrabold text-neutral-900 mb-4"
            style={{ letterSpacing: '-0.025em', lineHeight: 1.1 }}
          >
            Everything you need, printed.
          </h2>
          <p className="text-body-lg text-neutral-600">
            Print Hut prints t-shirts, business cards, flyers, table cloths,
            stickers, and decals. Standard products have prices right here — no
            quote form, no waiting.
          </p>
        </AnimatedSection>

        {prefersReduced ? (
          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
