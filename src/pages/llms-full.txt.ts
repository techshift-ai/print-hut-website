import type { APIRoute } from 'astro';
import { siteData, products } from '../lib/siteData';

export const GET: APIRoute = () => {
  const content = `# ${siteData.name} — Custom Printing in Woodbridge, Ontario

${siteData.description}

---

## Products

${products
  .map((p) => {
    return `### ${p.name}
${p.subtitle}

${p.description}

${p.pricing}`;
  })
  .join('\n\n---\n\n')}

---

## Why Print Hut

### Quality you can see
Every print is checked before it leaves the shop. T-shirts, business cards, flyers, table cloths, stickers — Print Hut gets the details right so your brand looks sharp.

### Fast turnaround
Standard orders are ready in days, not weeks. Need it sooner? Talk to us — rush jobs are part of the job.

### A shop you can walk into
260 Regina Road, Woodbridge. Come see samples, drop off files, or pick up your order. Print Hut is a real shop with real people — not a portal and a ticket number.

---

## FAQ

Q: What does Print Hut print?
A: Print Hut prints custom t-shirts, hoodies, business cards, flyers, table cloths, stickers, and decals. Whether you need 50 t-shirts for a team event or 5,000 flyers for a promotion, we handle it.

Q: How long does printing take?
A: Standard orders are ready in a few business days. Rush jobs available — call 647.780.3103 or visit 260 Regina Road in Woodbridge.

Q: Can I bring my own design?
A: Yes. Print Hut accepts design files for all products. If you do not have a design ready, we can help set one up.

Q: How do I place an order?
A: Fill out the quote form on the website, call 647.780.3103, email sales@printhut.ca, or walk into the shop at 260 Regina Road in Woodbridge.

Q: Where is Print Hut located?
A: Print Hut is at 260 Regina Road, Unit 16B, Woodbridge, Ontario, L4L 8P8, Canada.

Q: Do you handle bulk or large orders?
A: Yes. Print Hut handles orders of all sizes — from a single custom table cloth to thousands of flyers or hundreds of t-shirts. Contact us with your quantity for a quote.

Q: What file formats do you accept?
A: We accept most common design formats including PDF, AI, PSD, PNG, and JPG. Bring your file in or send it over and we will let you know if anything needs adjusting.

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
