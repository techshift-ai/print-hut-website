import type { APIRoute } from 'astro';
import { siteData } from '../lib/siteData';

export const GET: APIRoute = () => {
  const content = `# ${siteData.name}

> ${siteData.description}

## Products & Pricing

- [Custom Clothing (T-Shirts & Hoodies)](#products) — Custom printed t-shirts and hoodies. Quote-based pricing.
- [Business Cards](#products) — Standard 3.5" x 2". Starting at $60 for 500 single-sided.
- [Flyers](#products) — Multiple sizes. Starting at $100 for 500 (5.5" x 8.5").
- [Custom Table Cloths](#products) — For 6-foot folding tables. $80 each or 2 for $120.
- [Stickers & Decals](#products) — Custom sticker and decal printing. Quote-based.

## About

Print Hut is a custom printing shop at 260 Regina Road, Unit 16B, Woodbridge, Ontario, L4L 8P8, Canada.

## Contact

- Phone: ${siteData.phone}
- Email: ${siteData.email}
- Address: ${siteData.address.full}
- Instagram: ${siteData.social.instagramHandle}
- Facebook: ${siteData.social.facebookHandle}

## FAQ

- How much do business cards cost at Print Hut?
- How much do flyers cost at Print Hut?
- How long does printing take?
- Can I bring my own design?
- Where is Print Hut located?
- Do you print custom t-shirts and hoodies?
- How much do custom table cloths cost?
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
