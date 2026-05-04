import type { APIRoute } from 'astro';
import { siteData, products } from '../lib/siteData';

export const GET: APIRoute = () => {
  const content = `# ${siteData.name} — Custom Printing in Woodbridge, Ontario

${siteData.description}

---

## Products & Pricing

${products
  .map((p) => {
    let section = `### ${p.name}
${p.subtitle}

${p.description}

Pricing: ${p.pricing}`;

    if ('pricingTable' in p && p.pricingTable) {
      section += '\n\n';
      if ('single' in p.pricingTable[0]) {
        section += '| Qty | Single-Sided | Double-Sided |\n|---|---|---|\n';
        for (const row of p.pricingTable) {
          section += `| ${row.qty} | ${(row as { single: string }).single} | ${(row as { double: string }).double} |\n`;
        }
      } else {
        section += '| Qty | Price |\n|---|---|\n';
        for (const row of p.pricingTable) {
          section += `| ${row.qty} | ${(row as { price: string }).price} |\n`;
        }
      }
    }

    return section;
  })
  .join('\n\n---\n\n')}

---

## Why Print Hut

### Prices on the page
Most print shops make you fill out a quote form for everything. Print Hut publishes prices for standard products so you know what you are paying before you pick up the phone.

### Fast turnaround
Standard orders are ready in days, not weeks. Need it sooner? Talk to us — rush jobs are part of the job.

### A shop you can walk into
260 Regina Road, Woodbridge. Come see samples, drop off files, or pick up your order. Print Hut is a real shop with real people — not a portal and a ticket number.

---

## FAQ

Q: How much do business cards cost at Print Hut?
A: Print Hut prints standard 3.5" x 2" business cards on quality card stock. Single-sided: 500 for $60, 1,000 for $100. Double-sided: 500 for $80, 1,000 for $120. Bring your design file or we will help set one up.

Q: How much do flyers cost at Print Hut?
A: Flyer pricing for 5.5" x 8.5" starts at 500 for $100, 1,000 for $200, 2,000 for $250, 3,000 for $300, and 5,000 for $350. Larger sizes available — contact us for pricing.

Q: How long does printing take?
A: Standard orders are ready in a few business days. Rush jobs available — call 647.780.3103 or visit 260 Regina Road in Woodbridge.

Q: Can I bring my own design?
A: Yes. Print Hut accepts design files for all products. If you do not have a design ready, we can help set one up.

Q: Where is Print Hut located?
A: Print Hut is at 260 Regina Road, Unit 16B, Woodbridge, Ontario, L4L 8P8, Canada.

Q: Do you print custom t-shirts and hoodies?
A: Yes. Custom t-shirts and hoodies for teams, events, uniforms, merch, and personal projects. Contact us for a quote.

Q: How much do custom table cloths cost?
A: Custom table cloths for standard 6-foot folding tables are $80 for one and $120 for two. Black and white base options available.

---

## Contact

Phone: ${siteData.phone}
Email: ${siteData.email}
Address: ${siteData.address.full}
Instagram: ${siteData.social.instagramHandle} (${siteData.social.instagram})
Facebook: ${siteData.social.facebookHandle} (${siteData.social.facebook})
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
