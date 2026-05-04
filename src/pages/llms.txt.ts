import type { APIRoute } from 'astro';
import { siteData } from '../lib/siteData';

export const GET: APIRoute = () => {
  const content = `# ${siteData.name}

> ${siteData.description}

## Products

- [Custom Clothing (T-Shirts & Hoodies)](#products): Custom printed t-shirts and hoodies for teams, events, uniforms, and merch.
- [Business Cards](#products): Standard 3.5" x 2" on quality card stock. Starting at $60.
- [Flyers](#products): Multiple sizes available. Starting at $100.
- [Custom Table Cloths](#products): For standard 6-foot folding tables. Starting at $80.
- [Stickers & Decals](#products): Custom sticker and decal printing for branding and giveaways.

## About

Print Hut does custom printing. Address: 260 Regina Road, Unit 16B, Woodbridge, Ontario, L4L 8P8, Canada.

## Service Area

Print Hut serves the Greater Toronto Area (GTA), Simcoe County (including Innisfil, Barrie, and Bradford), and all surrounding areas in Southern Ontario.

## Contact

- Phone: ${siteData.phone}
- Email: ${siteData.email}
- Address: ${siteData.address.full}
- Instagram: ${siteData.social.instagramHandle}
- Facebook: ${siteData.social.facebookHandle}

## FAQ

- What does Print Hut print?
- How long does printing take?
- Can I bring my own design?
- How do I place an order?
- Where is Print Hut located?
- Do you handle bulk or large orders?
- What file formats do you accept?
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
