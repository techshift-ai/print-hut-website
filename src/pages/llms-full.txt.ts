import type { APIRoute } from 'astro';
import { siteData, products } from '../lib/siteData';

export const GET: APIRoute = () => {
  const content = `# ${siteData.name} | Custom Printing for the GTA and Southern Ontario

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
Every print is checked before it ships. T-shirts, business cards, flyers, table cloths, stickers. We get the details right so your stuff looks sharp.

### Fast turnaround
Standard orders are ready in days, not weeks. Need it sooner? Talk to us. Rush jobs are part of the job.

### Real people, not a portal
You talk to the person printing your order. Questions, changes, last-minute tweaks. We pick up the phone and sort it out.

---

## Service Area

Print Hut serves the Greater Toronto Area (GTA), Simcoe County (including Innisfil, Barrie, and Bradford), and all surrounding areas in Southern Ontario.

---

## FAQ

Q: What does Print Hut print?
A: Print Hut prints custom t-shirts, hoodies, business cards, flyers, table cloths, stickers, and decals. Whether you need 50 t-shirts for a team event or 5,000 flyers for a promotion, we handle it.

Q: How long does printing take?
A: Standard orders are ready in a few business days. Rush jobs available. Call 647.780.3103 or email sales@printhut.ca to discuss your timeline.

Q: Can I bring my own design?
A: Yes. Print Hut accepts design files for all products. If you do not have a design ready, we can help set one up.

Q: How do I place an order?
A: Fill out the quote form on the website, call 647.780.3103, or email sales@printhut.ca.

Q: Where is Print Hut located?
A: Print Hut is at 260 Regina Road, Unit 16B, Woodbridge, Ontario, L4L 8P8, Canada.

Q: Do you handle bulk or large orders?
A: Yes. Print Hut handles orders of all sizes, from a single custom table cloth to thousands of flyers or hundreds of t-shirts. Contact us with your quantity for a quote.

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
